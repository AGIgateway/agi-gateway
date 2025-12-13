import { Resend } from "resend"
import { generateEmailHTML } from "./email-template"
import type { ExportedHandler } from "@cloudflare/workers-types"

export interface Env {
    RESEND_API_KEY: string
}

interface FormSubmissionRequest {
    type: "contact" | "consultation" | "service" | "assessment"
    data: {
        [key: string]: string | number | boolean
    }
}

const handler = {
    async fetch(request: Request, env: Env, context) {
        const getCorsHeaders = (origin: string) => {
            const allowedOrigins = [
                "http://localhost:3000",
                "http://localhost:3001",
                "http://127.0.0.1:3000",
                "http://127.0.0.1:3001",
                "http://localhost:8787",
            ]

            const isAllowed = allowedOrigins.includes(origin)

            return {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                "Access-Control-Max-Age": "86400",
            }
        }

        const origin = request.headers.get("Origin") || "http://localhost:3000"
        const corsHeaders = getCorsHeaders(origin)

        if (request.method === "OPTIONS") {
            return new Response(null, {
                status: 204,
                headers: corsHeaders,
            })
        }

        // Only accept POST requests
        if (request.method !== "POST") {
            return new Response(JSON.stringify({ error: "Method not allowed" }), {
                status: 405,
                headers: {
                    "Content-Type": "application/json",
                    ...corsHeaders,
                },
            })
        }

        try {
            const body: FormSubmissionRequest = await request.json()
            const { type, data } = body

            if (!type || !["contact", "consultation", "service", "assessment"].includes(type)) {
                return new Response(JSON.stringify({ error: "Invalid form type" }), {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                        ...corsHeaders,
                    },
                })
            }

            const hasRequiredFields = data && data.email && (data.name || data.fullName)
            if (!hasRequiredFields) {
                return new Response(JSON.stringify({ error: "Missing required fields" }), {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                        ...corsHeaders,
                    },
                })
            }

            let subject = ""
            switch (type) {
                case "contact":
                    subject = `New Contact Form Submission from ${data.name}`
                    break
                case "consultation":
                    subject = `New Consultation Request from ${data.name}`
                    break
                case "service":
                    subject = `New Service Application from ${data.name}`
                    break
                case "assessment":
                    subject = `New Student Assessment from ${data.fullName}`
                    break
            }

            const html = generateEmailHTML(type as any, data)

            const resend = new Resend(env.RESEND_API_KEY)

            const emailResult = await resend.emails.send({
                from: "AGI Gateway <no-reply@agigateway.co.nz>",
                to: ["md.abdulawal@icloud.com"],
                subject: subject,
                html: html,
            })

            if (emailResult.error) {
                console.error("Resend error:", emailResult.error)
                return new Response(JSON.stringify({ error: "Failed to send email" }), {
                    status: 500,
                    headers: {
                        "Content-Type": "application/json",
                        ...corsHeaders,
                    },
                })
            }

            return new Response(
                JSON.stringify({
                    success: true,
                    message: "Email sent successfully",
                    id: emailResult.data?.id,
                }),
                {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json",
                        ...corsHeaders,
                    },
                },
            )
        } catch (error) {
            console.error("Server error:", error)
            return new Response(JSON.stringify({ error: "Internal server error" }), {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                    ...corsHeaders,
                },
            })
        }
    },
}

export default handler
