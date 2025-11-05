interface FormData {
    [key: string]: string | number | boolean
}

export function generateEmailHTML(type: "contact" | "consultation" | "service" | "assessment", data: FormData): string {
    const baseStyles = {
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
    }

    const boxStyle = {
        backgroundColor: "#f0fdf4",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "16px",
    }

    const messageBoxStyle = {
        backgroundColor: "#f9fafb",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "16px",
    }

    switch (type) {
        case "contact":
            return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #059669;">New Contact Form Submission</h2>
          <div style="background-color: #f0fdf4; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
            <p><strong>Subject:</strong> ${data.subject || "N/A"}</p>
          </div>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <h3 style="margin-top: 0; color: #374151;">Message</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          <p style="font-size: 12px; color: #6b7280;">This is an automated email from your AGI Gateway contact form.</p>
        </div>
      `

        case "consultation":
            return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #059669;">New Consultation Request</h2>
          <div style="background-color: #f0fdf4; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Mobile:</strong> ${data.mobile}</p>
            <p><strong>Current Qualification:</strong> ${data.currentQualification || "N/A"}</p>
            <p><strong>Preferred Course:</strong> ${data.preferredCourse || "N/A"}</p>
            <p><strong>Study Year:</strong> ${data.studyYear}</p>
            <p><strong>Study Intake:</strong> ${data.studyIntake}</p>
          </div>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <h3 style="margin-top: 0; color: #374151;">Message</h3>
            <p style="white-space: pre-wrap;">${data.message || "N/A"}</p>
          </div>
          <p style="font-size: 12px; color: #6b7280;">This is an automated email from your AGI Gateway consultation form.</p>
        </div>
      `

        case "service":
            return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #059669;">New Service Application</h2>
          <div style="background-color: #f0fdf4; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <p><strong>Service:</strong> ${data.service}</p>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
          </div>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <h3 style="margin-top: 0; color: #374151;">Message</h3>
            <p style="white-space: pre-wrap;">${data.message || "N/A"}</p>
          </div>
          <p style="font-size: 12px; color: #6b7280;">This is an automated email from your AGI Gateway service application.</p>
        </div>
      `

        case "assessment":
            const guardianSection = data.isUnder18
                ? `
        <h3 style="margin-top: 16px; color: #374151;">Guardian Information</h3>
        <p><strong>Guardian Name:</strong> ${data.guardianName}</p>
        <p><strong>Relationship:</strong> ${data.guardianRelationship}</p>
        <p><strong>Guardian Contact:</strong> ${data.guardianContact}</p>
        <p><strong>Guardian Email:</strong> ${data.guardianEmail}</p>
        <p><strong>Guardian Occupation:</strong> ${data.guardianOccupation || "N/A"}</p>
      `
                : ""

            const financialSection = data.financialAidRequired
                ? `
        <p><strong>Financial Aid Required:</strong> Yes</p>
        ${data.financialAidDetails
                    ? `<p><strong>Financial Aid Details:</strong></p><p>${data.financialAidDetails}</p>`
                    : ""
                }
      `
                : `<p><strong>Financial Aid Required:</strong> No</p>`

            return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #059669;">New Student Assessment Submission</h2>
          
          <h3 style="margin-top: 16px; color: #374151;">Personal Information</h3>
          <div style="background-color: #f0fdf4; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <p><strong>Full Name:</strong> ${data.fullName}</p>
            <p><strong>Date of Birth:</strong> ${data.dateOfBirth}</p>
            <p><strong>Gender:</strong> ${data.gender}</p>
            <p><strong>Nationality:</strong> ${data.nationality}</p>
            <p><strong>Contact Number:</strong> ${data.contactNumber}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Preferred Contact:</strong> ${data.preferredContact}</p>
          </div>

          ${guardianSection}

          <h3 style="margin-top: 16px; color: #374151;">Academic Background</h3>
          <div style="background-color: #f0fdf4; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <p><strong>Academic Level:</strong> ${data.academicLevel}</p>
            <p><strong>Current Institution:</strong> ${data.currentInstitution}</p>
            <p><strong>Field of Study:</strong> ${data.fieldOfStudy}</p>
            <p><strong>Current GPA:</strong> ${data.currentGPA}</p>
            <p><strong>Preferred Destination:</strong> ${data.preferredDestination}</p>
            <p><strong>Preferred Course:</strong> ${data.preferredCourse}</p>
            <p><strong>English Proficiency:</strong> ${data.englishProficiency}</p>
            <p><strong>Test Scores:</strong> ${data.testScores || "N/A"}</p>
          </div>

          <h3 style="margin-top: 16px; color: #374151;">Goals & Motivation</h3>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <h4>Study Abroad Reason:</h4>
            <p style="white-space: pre-wrap;">${data.studyAbroadReason}</p>
            <p><strong>Graduation Year:</strong> ${data.graduationYear}</p>
            <h4>Career Aspirations:</h4>
            <p style="white-space: pre-wrap;">${data.careerAspirations}</p>
            ${financialSection}
          </div>

          <p style="font-size: 12px; color: #6b7280;">This is an automated email from your AGI Gateway student assessment form.</p>
        </div>
      `

        default:
            return `<div><p>Unknown form type</p></div>`
    }
}
