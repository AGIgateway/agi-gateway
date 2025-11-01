# Email Setup Instructions

This project uses **Resend** to send emails from form submissions to `info@agigateway.com`.

## Setup Steps

### 1. Create a Resend Account
1. Go to [resend.com](https://resend.com) and sign up for a free account
2. Verify your email address

### 2. Get Your API Key
1. Log in to your Resend dashboard
2. Navigate to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "AGI Gateway Production")
5. Copy the API key (it starts with `re_`)

### 3. Verify Your Domain (Important!)
For production use, you need to verify your domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter `agigateway.co.nz`
4. Follow the DNS verification instructions
5. Add the provided DNS records to your domain registrar

**Note:** Until domain verification is complete, you can only send emails to the email address you signed up with.

### 4. Add Environment Variable

#### For Vercel Deployment:
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key (starts with `re_`)
   - **Environment:** Production, Preview, Development (select all)
4. Click **Save**
5. Redeploy your application

#### For Local Development:
1. Create a `.env` file in the project root
2. Add: `RESEND_API_KEY=your_api_key_here`
3. Restart your development server

### 5. Update Email Sender Address (After Domain Verification)
Once your domain is verified, update the `from` address in `api/send-email.ts`:

\`\`\`typescript
from: 'AGI Gateway <noreply@agigateway.co.nz>',
\`\`\`

## Forms That Send Emails

All the following forms now send emails to `info@agigateway.com`:

1. **Contact Form** (`/contact`) - Contact inquiries
2. **Consultation Form** (Landing page CTA) - Consultation requests
3. **Service Application Forms** (All service pages) - Service-specific applications
4. **Student Assessment Form** (`/assessment`) - Comprehensive student assessments

## Email Content

Each form type sends a formatted email with:
- Form type identifier in the subject line
- All submitted form data
- Reply-to address set to the submitter's email

## Testing

### Before Domain Verification:
- Emails will only be sent to your Resend account email
- Test all forms to ensure they work correctly

### After Domain Verification:
- Emails will be sent to `info@agigateway.com`
- Test each form type to verify delivery

## Troubleshooting

### Emails Not Sending:
1. Check that `RESEND_API_KEY` is set correctly
2. Verify the API key is active in Resend dashboard
3. Check browser console for error messages
4. Verify domain is properly configured

### Emails Going to Spam:
1. Complete domain verification in Resend
2. Add SPF and DKIM records as instructed by Resend
3. Consider adding DMARC records for better deliverability

## Free Tier Limits

Resend free tier includes:
- 3,000 emails per month
- 100 emails per day
- All features included

For higher volume, upgrade to a paid plan.

## Support

- Resend Documentation: https://resend.com/docs
- Resend Support: support@resend.com
