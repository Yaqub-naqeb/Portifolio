# EmailJS Setup Guide - Receive Contact Form Emails

Follow these steps to set up EmailJS so you can receive emails directly when people contact you through your portfolio form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account (free tier allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended - easiest setup)
   - **Outlook**
   - **Yahoo**
   - Or any other supported service
4. Follow the connection steps (for Gmail, you'll need to allow EmailJS access)
5. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template:

**Template Name:** Portfolio Contact Form

**Subject:** New Contact from Portfolio - {{from_email}}

**Content:**
```
You have received a new message from your portfolio contact form.

From: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. **Important:** Make sure the variable names match exactly:
   - `{{from_email}}` - for the sender's email
   - `{{message}}` - for the message content

5. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key** - you'll need this later

## Step 5: Configure Your Project

1. In your project root folder, create a file named `.env` (if it doesn't exist)
2. Add these three lines with your actual values:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

3. **Important:** 
   - Replace `your_service_id_here`, `your_template_id_here`, and `your_public_key_here` with your actual values
   - Do NOT use quotes around the values
   - Make sure there are no spaces around the `=` sign

## Step 6: Update Email Template Settings

1. Go back to your Email Template in EmailJS dashboard
2. In the template settings, set:
   - **To Email:** Your email address (Yaqwb.009448401@gmail.com)
   - **From Name:** Portfolio Contact Form
   - **Reply To:** {{from_email}} (this allows you to reply directly to the sender)

## Step 7: Test Your Setup

1. Restart your development server:
   ```bash
   npm start
   ```

2. Go to your contact form and submit a test message
3. Check your email inbox - you should receive the message!

## Troubleshooting

### Emails not sending?
- Check browser console for errors
- Verify all three environment variables are set correctly
- Make sure you restarted the server after adding `.env` file
- Check EmailJS dashboard for any error logs

### Can't find Service ID or Template ID?
- Service ID: Email Services → Click on your service → Service ID is at the top
- Template ID: Email Templates → Click on your template → Template ID is in the URL or at the top

### Need more emails?
- Free tier: 200 emails/month
- Paid plans available if you need more

## Security Note

- Never commit your `.env` file to Git
- The `.env` file is already in `.gitignore` to protect your keys
- Your Public Key is safe to use in frontend code (it's designed for that)

---

**That's it!** Once set up, you'll receive emails directly to your inbox whenever someone contacts you through your portfolio form.

