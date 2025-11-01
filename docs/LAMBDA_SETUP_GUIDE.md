# AWS Lambda + Resend Email Setup Guide

## Overview
This guide will help you set up email notifications for form submissions using AWS Lambda (serverless) and Resend (email service). You'll receive emails at info@agigateway.com whenever a form is submitted.

**Cost:** Free tier includes 1 million Lambda requests/month + 100 emails/day with Resend free tier.

---

## Step 1: Set Up Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Click **Sign Up** and create an account
3. Verify your email
4. Go to **API Keys** in the dashboard
5. Click **Create API Key**
6. Copy the API key (you'll need this later)
7. Go to **Domains** and add your domain (or use Resend's test domain)

> **Note:** You can test with `onboarding@resend.dev` as the sender email initially.

---

## Step 2: Set Up AWS Account & Lambda

### 2.1: Create AWS Account
1. Go to [https://aws.amazon.com](https://aws.amazon.com)
2. Click **Create an AWS Account**
3. Follow the sign-up process (you'll need a credit card, but free tier won't charge you)
4. Verify your email and phone number

### 2.2: Create Lambda Function
1. Go to AWS Console → **Lambda**
2. Click **Create Function**
3. Choose:
   - **Function name:** `agigateway-send-email`
   - **Runtime:** Node.js 20.x
   - **Role:** Create new role with basic Lambda permissions
4. Click **Create Function**

### 2.3: Add Code to Lambda
1. In the Lambda function editor, replace the code with:

\`\`\`javascript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  try {
    const { name, email, phone, subject, message } = JSON.parse(event.body);

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@agigateway.com",
      subject: `New Contact: ${subject}`,
      html: emailHtml,
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ success: true, messageId: result.id }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
\`\`\`

### 2.4: Configure Environment Variable
1. In Lambda console, scroll down to **Environment Variables**
2. Click **Edit**
3. Add:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Your Resend API key (paste from Step 1)
4. Click **Save**

### 2.5: Add Node Dependencies
1. Click the **Code** tab
2. Below the code editor, click the **+** next to **Layers**
3. You need to create a Lambda Layer with the Resend package:
   - Download the layer package from: [resend-lambda-layer.zip](https://github.com/resendlabs/resend-node/releases)
   - Or create one locally:
   \`\`\`bash
   mkdir nodejs
   cd nodejs
   npm install resend
   zip -r ../nodejs-layer.zip .
   \`\`\`
   - Upload the zip file as a Lambda Layer
   - Attach it to your function

> **Simpler approach:** Use AWS Lambda Layers template or paste the Resend code directly if needed.

### 2.6: Create API Gateway Trigger
1. In Lambda console, click **Add Trigger**
2. Choose **API Gateway**
3. Configuration:
   - **API type:** REST API
   - **Security:** CORS enabled (check the box)
   - **Create a new API** or select existing
4. Click **Add**
5. Copy the **API endpoint URL** (you'll use this in your React form)

---

## Step 3: Update Your React Contact Form

Update the `onSubmit` function to call your Lambda function:

\`\`\`typescript
async function onSubmit(data: ContactFormValues) {
  try {
    const response = await fetch(
      "YOUR_LAMBDA_API_ENDPOINT_HERE", // Replace with your API Gateway URL
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        }),
      }
    );

    const result = await response.json();

    if (response.ok) {
      alert("Thank you! Your message has been sent successfully.");
      form.reset();
    } else {
      alert(`Error: ${result.error}`);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Failed to send message. Please try again.");
  }
}
\`\`\`

---

## Step 4: Test Your Setup

1. Fill out the contact form on your website
2. Click **Send Message**
3. Check your email at info@agigateway.com for the submission
4. Check Lambda CloudWatch logs for debugging if needed

---

## Troubleshooting

| Issue                  | Solution                                                           |
| ---------------------- | ------------------------------------------------------------------ |
| **Email not received** | Check spam/junk folder, verify RESEND_API_KEY is correct           |
| **CORS error**         | Make sure API Gateway has CORS enabled                             |
| **Lambda timeout**     | Increase timeout in Lambda settings (Default: 3s, increase to 10s) |
| **Cannot find module** | Add Resend as a Lambda Layer or use built-in packages              |

---

## Next Steps

Once testing works:
1. Update all other forms (Consultation, Service, Assessment)
2. Set up email verification with Resend
3. Consider adding email templates
4. Monitor Lambda usage in AWS CloudWatch

---

## Costs

- **AWS Lambda:** 1 million free requests/month
- **Resend:** 100 free emails/day
- **Total:** Essentially FREE for small projects

Upgrade as needed when you scale beyond free tier limits.
