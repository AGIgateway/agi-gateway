"use client"
import { Button } from "components/ui/button"
import { Card, CardContent } from "components/ui/card"
import { Input } from "components/ui/input"
import { Textarea } from "components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "components/ui/form"
import { toast } from "sonner"

// Contact form schema
const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactPage() {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
    })

    const handleWhatsAppClick = () => {
        const phoneNumber = "+64223134766"
        const message = encodeURIComponent("Hello! I would like to get in touch with AGI Gateway.")
        const url = `https://wa.me/${phoneNumber}?text=${message}`
        window.open(url, "_blank", "noopener,noreferrer")
    }

    async function onSubmit(data: ContactFormValues) {
        try {
            const WORKER_URL = import.meta.env.VITE_CLOUDFLARE_WORKER_URL || "http://localhost:8787"

            const response = await fetch(WORKER_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "contact",
                    data: {
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        subject: data.subject,
                        message: data.message,
                    },
                }),
            })

            if (!response.ok) {
                const result = await response.json()
                throw new Error(result.error || "Failed to send email")
            }

            toast.success("Success!", {
                description: "Your message has been sent successfully. We'll get back to you soon.",
            })
            form.reset()
        } catch (error) {
            console.error("Error sending email:", error)
            toast.error("Error", {
                description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
            })
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero Section */}
            <section className="w-full py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-lime-950 to-emerald-700 text-center">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-6 max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                            Get in Touch
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed">
                            Have questions about studying abroad? Our expert counselors are here to help you every step of the way.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="w-full py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <Phone className="w-8 h-8 text-emerald-600" />,
                                title: "Phone",
                                content: "+64 22 313 4766",
                                action: "tel:+64223134766",
                            },
                            {
                                icon: <Mail className="w-8 h-8 text-emerald-600" />,
                                title: "Email",
                                content: "info@agigateway.co.nz",
                                action: "mailto:info@agigateway.co.nz",
                            },
                            {
                                icon: <MapPin className="w-8 h-8 text-emerald-600" />,
                                title: "Office",
                                content: "Christchurch, New Zealand",
                                action: null,
                            },
                            {
                                icon: <Clock className="w-8 h-8 text-emerald-600" />,
                                title: "Hours",
                                content: "Mon-Fri: 9AM-6PM",
                                action: null,
                            },
                        ].map((item, index) => (
                            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="flex justify-center mb-4">{item.icon}</div>
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                                    {item.action ? (
                                        <a href={item.action} className="text-muted-foreground hover:text-emerald-600 transition-colors">
                                            {item.content}
                                        </a>
                                    ) : (
                                        <p className="text-muted-foreground">{item.content}</p>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map Section */}
            <section className="w-full py-16 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-foreground">Send Us a Message</h2>
                            <Card className="border-none shadow-lg">
                                <CardContent className="p-6">
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Full Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter your full name" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email Address</FormLabel>
                                                        <FormControl>
                                                            <Input type="email" placeholder="your.email@example.com" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Phone Number</FormLabel>
                                                        <FormControl>
                                                            <Input type="tel" placeholder="+64 22 123 4567" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="subject"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Subject</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="What is this regarding?" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="message"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Message</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Tell us more about your inquiry..."
                                                                className="min-h-32"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <Button
                                                type="submit"
                                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                                                size="lg"
                                                disabled={form.formState.isSubmitting}
                                            >
                                                {form.formState.isSubmitting ? (
                                                    "Sending..."
                                                ) : (
                                                    <>
                                                        <Send className="mr-2 h-4 w-4" />
                                                        Send Message
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    </Form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Office Info & Social */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-foreground">Visit Our Office</h2>
                                <Card className="border-none shadow-lg">
                                    <CardContent className="p-6">
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-4">
                                                <MapPin className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-semibold text-foreground mb-1">AGI Gateway</h3>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        Central
                                                        <br />
                                                        Christchurch
                                                        <br />
                                                        New Zealand
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <Clock className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                                                    <p className="text-muted-foreground">
                                                        Monday - Friday: 9:00 AM - 6:00 PM
                                                        <br />
                                                        Sunday & Saturday: Closed (Upon request)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Social Media */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-foreground">Connect With Us</h3>
                                <Card className="border-none shadow-lg">
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground mb-4">
                                            Follow us on social media for updates, tips, and success stories.
                                        </p>
                                        <div className="flex gap-4">
                                            <Button
                                                onClick={handleWhatsAppClick}
                                                size="icon"
                                                className="bg-[#25D366] hover:bg-[#128C7E] text-white"
                                            >
                                                <FaWhatsapp className="w-5 h-5" />
                                            </Button>
                                            <Button
                                                size="icon"
                                                variant="outline"
                                                className="hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] bg-transparent"
                                                onClick={() => window.open("https://www.facebook.com/profile.php?id=61578970088384", "_blank")}
                                            >
                                                <FaFacebook className="w-5 h-5" />
                                            </Button>
                                            <Button
                                                size="icon"
                                                variant="outline"
                                                className="hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] bg-transparent"
                                                onClick={() => window.open("https://www.linkedin.com/company/agigateway", "_blank")}
                                            >
                                                <FaLinkedin className="w-5 h-5" />
                                            </Button>
                                            <Button
                                                size="icon"
                                                variant="outline"
                                                className="hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] bg-transparent"
                                                onClick={() => window.open("https://www.instagram.com/agigateway/", "_blank")}
                                            >
                                                <FaInstagram className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Quick Contact */}
                            <Card className="border-none shadow-lg bg-gradient-to-br from-emerald-600 to-lime-700">
                                <CardContent className="p-6 text-white">
                                    <h3 className="text-xl font-bold mb-3">Need Immediate Assistance?</h3>
                                    <p className="mb-4 text-white/90">
                                        Chat with us on WhatsApp for instant support and quick answers to your questions.
                                    </p>
                                    <Button
                                        onClick={handleWhatsAppClick}
                                        className="w-full bg-white text-emerald-700 hover:bg-white/90"
                                        size="lg"
                                    >
                                        <FaWhatsapp className="mr-2 h-5 w-5" />
                                        Chat on WhatsApp
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Find Us on the Map</h2>
                        <Card className="border-none shadow-lg overflow-hidden">
                            <div className="w-full h-96 bg-muted flex items-center justify-center">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.0!2d172.6366!3d-43.5321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d33b2b3b3b3b3b3%3A0x5b3b3b3b3b3b3b3b!2sChristchurch%20Central%20City!5e0!3m2!1sen!2snz!4v1712345678901"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="AGI Gateway Office Location"
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ / Quick Links
            <section className="w-full py-16 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Looking for quick answers? Check out our FAQ section or explore our services to learn more about how we
                            can help you achieve your study abroad goals.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white bg-transparent"
                            >
                                View FAQ
                            </Button>
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                                Explore Services
                            </Button>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}
