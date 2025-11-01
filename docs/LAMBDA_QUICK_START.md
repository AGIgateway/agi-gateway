# Quick Start: AWS Lambda + Resend Setup

## For Testing the Contact Form

### Step 1: Get Your Resend API Key (5 minutes)
1. Sign up at https://resend.com (free)
2. Go to API Keys
3. Copy your API key

### Step 2: Create Lambda Function (10 minutes)
1. Go to AWS Lambda Console
2. Click "Create Function"
3. Name: `agigateway-send-email`
4. Runtime: Node.js 20.x
5. Copy-paste the code from `LAMBDA_SETUP_GUIDE.md`

### Step 3: Add Environment Variable
1. In Lambda console, scroll to "Environment Variables"
2. Add: `RESEND_API_KEY` = Your Resend API key
3. Save

### Step 4: Install Dependencies
1. In the Lambda editor, click "Layers"
2. Use this Layer ARN (already includes Resend):
   - Region us-east-1: `arn:aws:lambda:us-east-1:885798311586:layer:node-resend:1`
   - Or create your own with `npm install resend` in a ZIP

### Step 5: Create API Gateway
1. Click "Add Trigger"
2. Choose "API Gateway"
3. Select "REST API"
4. Check "CORS enabled"
5. Create new API
6. Copy the API endpoint URL

### Step 6: Configure Your App
1. Create `.env.local` file in project root:
   \`\`\`
   VITE_LAMBDA_API_URL=https://your-api-endpoint-here
   \`\`\`
2. Restart dev server (`npm run dev`)

### Step 7: Test
1. Go to Contact form
2. Fill it out
3. Click "Send Message"
4. Check info@agigateway.com for the email

**Total time:** ~20 minutes
**Cost:** Free (within free tier limits)

---

## Troubleshooting

**Email not arriving?**
- Check spam folder
- Verify RESEND_API_KEY is correct
- Check Lambda CloudWatch logs

**CORS error?**
- Make sure you enabled CORS in API Gateway

**"Sending..." button stuck?**
- Check browser console for errors
- Verify API endpoint URL is correct in .env.local

Need help? Check `LAMBDA_SETUP_GUIDE.md` for detailed instructions.
