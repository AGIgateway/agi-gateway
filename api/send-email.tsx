import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
// console.log(resend)

export default async function handler(req: any, res: any) {
    // Only allow POST requests
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" })
    }

    try {
        const { type, data } = req.body

        let emailContent = ""
        let subject = ""

        // Generate email content based on form type
        switch (type) {
            case "contact":
                subject = `New Contact Form Submission from ${data.name}`
                emailContent = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `
                break

            case "consultation":
                subject = `New Consultation Request from ${data.name}`
                emailContent = `
          <h2>New Consultation Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Mobile:</strong> ${data.mobile}</p>
          <p><strong>Current Qualification:</strong> ${data.currentQualification}</p>
          <p><strong>Preferred Course:</strong> ${data.preferredCourse}</p>
          <p><strong>Study Year:</strong> ${data.studyYear}</p>
          <p><strong>Study Intake:</strong> ${data.studyIntake}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
          <p><strong>Consent Given:</strong> ${data.consent ? "Yes" : "No"}</p>
        `
                break

            case "service":
                subject = `New Service Application from ${data.name}`
                emailContent = `
          <h2>New Service Application</h2>
          <p><strong>Service:</strong> ${data.service}</p>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `
                break

            case "assessment":
                subject = `New Student Assessment from ${data.fullName}`
                emailContent = `
          <h2>New Student Assessment Submission</h2>
          
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
          ${data.financialAidRequired ? `<p><strong>Financial Aid Details:</strong> ${data.financialAidDetails}</p>` : ""}
        `
                break

            default:
                return res.status(400).json({ error: "Invalid form type" })
        }

        // Send email using Resend
        const response = await resend.emails.send({
            from: "AGI Gateway <info.agigateway@gmail.com>",
            to: ["info.agigateway@gmail.com"],
            subject: subject,
            html: emailContent,
            replyTo: data.email,
        })

        return res.status(200).json({ success: true, data: response })
    } catch (error: any) {
        console.error("Email sending error:", error)
        return res.status(500).json({ error: "Failed to send email", details: error.message })
    }
}
