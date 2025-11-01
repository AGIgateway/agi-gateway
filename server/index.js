const express = require("express")
const cors = require("cors")
const { Resend } = require("resend")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3001

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Middleware
app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:4028",
    }),
)
app.use(express.json())

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({ status: "ok", message: "Server is running" })
})

// Email endpoint
app.post("/api/send-email", async (req, res) => {
    try {
        const { type, data } = req.body

        if (!type || !data) {
            return res.status(400).json({ error: "Missing required fields: type and data" })
        }

        let subject = ""
        let html = ""

        switch (type) {
            case "contact":
                subject = `New Contact Form Submission from ${data.name}`
                html = `
                <h2>Contact Form Submission</h2>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
          <p><strong>Subject:</strong> ${data.subject || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
          `
                break

            case "consultation":
                subject = `New Consultation Request from ${data.name}`
                html = `
          <h2>Consultation Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Mobile:</strong> ${data.mobile}</p>
          <p><strong>Current Qualification:</strong> ${data.currentQualification || "N/A"}</p>
          <p><strong>Preferred Course:</strong> ${data.preferredCourse || "N/A"}</p>
          <p><strong>Study Year:</strong> ${data.studyYear}</p>
          <p><strong>Study Intake:</strong> ${data.studyIntake}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message || "N/A"}</p>
          `
                break
                resend
            case "service":
                subject = `New Service Application from ${data.name}`
                html = `
              <h2>Service Application</h2>
              <p><strong>Service:</strong> ${data.service}</p>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message || "N/A"}</p>
        `
                break

            case "assessment":
                subject = `New Student Assessment from ${data.fullName}`
                html = `
                <h2>Student Self-Assessment Submission</h2>
          
                <h3>Personal Information</h3>
                <p><strong>Full Name:</strong> ${data.fullName}</p>
                <p><strong>Date of Birth:</strong> ${data.dateOfBirth}</p>
                <p><strong>Gender:</strong> ${data.gender}</p>
                <p><strong>Nationality:</strong> ${data.nationality}</p>
                <p><strong>Contact Number:</strong> ${data.contactNumber}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Preferred Contact:</strong> ${data.preferredContact}</p>
                
                ${data.isUnder18
                        ? `
                    <h3>Guardian Information</h3>
                    <p><strong>Guardian Name:</strong> ${data.guardianName}</p>
                    <p><strong>Relationship:</strong> ${data.guardianRelationship}</p>
                    <p><strong>Guardian Contact:</strong> ${data.guardianContact}</p>
                    <p><strong>Guardian Email:</strong> ${data.guardianEmail}</p>
          <p><strong>Guardian Occupation:</strong> ${data.guardianOccupation || "N/A"}</p>
          `
                        : ""
                    }
        
          <h3>Academic Background</h3>
          <p><strong>Academic Level:</strong> ${data.academicLevel}</p>
          <p><strong>Current Institution:</strong> ${data.currentInstitution}</p>
          <p><strong>Field of Study:</strong> ${data.fieldOfStudy}</p>
          <p><strong>Current GPA:</strong> ${data.currentGPA}</p>
          <p><strong>Preferred Destination:</strong> ${data.preferredDestination}</p>
          <p><strong>Preferred Course:</strong> ${data.preferredCourse}</p>
          <p><strong>English Proficiency:</strong> ${data.englishProficiency}</p>
          <p><strong>Test Scores:</strong> ${data.testScores || "N/A"}</p>
          
          <h3>Goals & Motivation</h3>
          <p><strong>Study Abroad Reason:</strong></p>
          <p>${data.studyAbroadReason}</p>
          <p><strong>Graduation Year:</strong> ${data.graduationYear}</p>
          <p><strong>Career Aspirations:</strong></p>
          <p>${data.careerAspirations}</p>
          <p><strong>Financial Aid Required:</strong> ${data.financialAidRequired ? "Yes" : "No"}</p>
          ${data.financialAidRequired && data.financialAidDetails
                        ? `
            <p><strong>Financial Aid Details:</strong></p>
            <p>${data.financialAidDetails}</p>
            `
                        : ""
                    }
        `
                break

            default:
                return res.status(400).json({ error: "Invalid form type" })
        }

        // Send email using Resend
        const { data: emailData, error } = await resend.emails.send({
            from: "no-reply@agigateway.co.nz",
            to: "info.agigateway@gmail.com",
            subject: subject,
            html: html,
        })
        console.log(data)

        if (error) {
            console.error("Resend error:", error)
            return res.status(400).json({ error: error.message })
        }

        res.json({ success: true, data: emailData })
    } catch (error) {
        console.error("Server error:", error)
        res.status(500).json({ error: "Failed to send email" })
    }
})

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`)
    console.log(`📧 Email API endpoint: http://localhost:${PORT}/api/send-email`)
})
