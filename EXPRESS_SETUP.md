# Express Backend Setup Guide

This guide will help you set up and run the Express.js backend for handling email submissions.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Resend account (free tier available)

## Step 1: Install Dependencies

Navigate to the server directory and install dependencies:

\`\`\`bash
cd server
npm install
\`\`\`

## Step 2: Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

## Step 3: Configure Environment Variables

1. Copy the example environment file:
   \`\`\`bash
   cp .env.example .env
   \`\`\`

2. Edit `.env` and add your Resend API key:
   \`\`\`
   RESEND_API_KEY=re_your_actual_api_key_here
   PORT=3001
   FRONTEND_URL=http://localhost:5173
   \`\`\`

## Step 4: Verify Domain (Optional but Recommended)

For production use, verify your domain in Resend:

1. Go to Resend Dashboard → Domains
2. Add your domain (e.g., agigateway.com)
3. Add the DNS records provided by Resend
4. Wait for verification (usually takes a few minutes)
5. Update the `from` field in `server/index.js`:
   \`\`\`js
   from: 'AGI Gateway <noreply@agigateway.com>'
   \`\`\`

## Step 5: Run the Backend Server

### Development Mode (with auto-reload):
\`\`\`bash
npm run dev
\`\`\`

### Production Mode:
\`\`\`bash
npm start
\`\`\`

The server will start on `http://localhost:3001`

## Step 6: Run the Frontend

In a separate terminal, navigate to the project root and start the frontend:

\`\`\`bash
npm run dev
\`\`\`

The frontend will run on `http://localhost:5173`

## Testing the Setup

1. Open your browser to `http://localhost:5173`
2. Navigate to any form (Contact, Consultation, etc.)
3. Fill out and submit the form
4. Check the terminal running the Express server for logs
5. Check your email at info@agigateway.com for the submission

## API Endpoints

### POST `/api/send-email`

Send form submissions via email.

**Request Body:**
\`\`\`json
{
  "type": "contact|consultation|service|assessment",
  "data": {
    // Form-specific data
  }
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "id": "email-id-from-resend"
  }
}
\`\`\`

## Production Deployment

### Option 1: Deploy to Railway

1. Install Railway CLI: `npm i -g @railway/cli`
2. Login: `railway login`
3. Initialize: `railway init`
4. Add environment variables in Railway dashboard
5. Deploy: `railway up`

### Option 2: Deploy to Render

1. Create account at [render.com](https://render.com)
2. Create new Web Service
3. Connect your GitHub repository
4. Set build command: `cd server && npm install`
5. Set start command: `cd server && npm start`
6. Add environment variables in Render dashboard

### Option 3: Deploy to Vercel (as Serverless Functions)

The Express app can be adapted to Vercel Functions. See Vercel documentation for details.

## Troubleshooting

### CORS Errors
- Make sure `FRONTEND_URL` in `.env` matches your frontend URL
- Check that the Express server is running

### Email Not Sending
- Verify your Resend API key is correct
- Check Resend dashboard for error logs
- Ensure you're not exceeding free tier limits (100 emails/day)

### Connection Refused
- Ensure the Express server is running on port 3001
- Check if another service is using port 3001
- Try changing the PORT in `.env`

## Environment Variables Reference

| Variable         | Description           | Example                 |
| ---------------- | --------------------- | ----------------------- |
| `RESEND_API_KEY` | Your Resend API key   | `re_123abc...`          |
| `PORT`           | Server port           | `3001`                  |
| `FRONTEND_URL`   | Frontend URL for CORS | `http://localhost:5173` |

## Support

For issues or questions:
- Email: info@agigateway.com
- Check Resend documentation: https://resend.com/docs
