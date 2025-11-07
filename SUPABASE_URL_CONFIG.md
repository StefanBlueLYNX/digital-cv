# Supabase URL Configuration Guide

## Fixing "This site cannot be reached" Error

If you're getting a "This site cannot be reached" error when clicking verification links from Supabase, you need to configure the correct URLs in your Supabase project settings.

## Steps to Fix:

1. **Go to Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Select your project

2. **Navigate to Authentication Settings**
   - Click on **Authentication** in the left sidebar
   - Click on **URL Configuration** (or **Settings**)

3. **Configure Site URL**
   - **For Production (AWS or other hosting):**
     ```
     https://your-aws-domain.com
     ```
     (Replace with your actual AWS/production domain)
     - This should be your main production URL where the app is deployed
     - Example: `https://myapp.cloudfront.net` or `https://myapp.s3-website.amazonaws.com`
   
   - **Note:** Even if you're testing locally, set this to your production URL if your app is deployed. The Site URL is used in verification emails and should point to where users will actually access your app.

4. **Add Redirect URLs**
   Add these URLs to the **Redirect URLs** list:
   
   **Production (Required):**
   ```
   https://your-aws-domain.com/**
   ```
   (Replace with your actual AWS domain - the `/**` wildcard allows all paths)
   
   **Local Development (Optional but recommended):**
   ```
   http://localhost:3000/**
   ```
   (Keep this if you want to test locally)
   
   **Example:**
   If your AWS site is `https://myapp.cloudfront.net`, add:
   ```
   https://myapp.cloudfront.net/**
   ```

5. **Save Changes**
   - Click **Save** or **Update** to apply changes

## Important Notes:

- The `**` wildcard allows Supabase to redirect to any path on your domain
- Make sure to add both local and production URLs if you're testing locally
- After changing URLs, you may need to request a new verification email
- The Site URL should match your actual deployed domain (or localhost for development)

## Common Issues:

1. **Using localhost in production emails**
   - Solution: Set the Site URL to your production domain

2. **Missing wildcard (`**`) in redirect URLs**
   - Solution: Add `/**` to allow all paths

3. **HTTPS vs HTTP mismatch**
   - Solution: Ensure you're using the correct protocol (http for localhost, https for production)

## Testing:

After configuring:
1. Try sending a new verification email
2. The link should now redirect to your configured URL
3. If still having issues, check your browser console for errors

