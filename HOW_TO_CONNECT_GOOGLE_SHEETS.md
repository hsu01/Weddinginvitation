# Quick Guide: Connect RSVP Form to Google Sheets

## Overview
Your RSVP form is now configured to send submissions to Google Sheets. Follow these steps to complete the setup:

## Setup Steps

### 1. Create Google Sheet (2 minutes)
1. Go to https://sheets.google.com
2. Create a new spreadsheet
3. Name it "Wedding RSVP"
4. Add these headers in row 1:
   - `Timestamp` | `Name` | `Attendance` | `Number of Guests` | `Dietary Restrictions`

### 2. Create Apps Script (3 minutes)
1. In your sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.name,
      data.attendance,
      data.guests,
      data.dietary
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Save the project (name it anything)

### 3. Deploy as Web App (2 minutes)
1. Click **Deploy** → **New deployment**
2. Click gear icon ⚙️ → Choose **Web app**
3. Set these options:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Authorize if prompted (click through the warnings)
6. **COPY THE WEB APP URL** (looks like: `https://script.google.com/macros/s/AKfycby...`)

### 4. Add URL to Your Code (1 minute)
1. Open file: `src/app/components/RSVPSectionNew.tsx`
2. Find line 6 that says:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your actual URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
4. Save the file

## Done! 🎉

Test it by submitting the RSVP form. Check your Google Sheet - you should see a new row with the submission data!

## What Gets Saved
Each RSVP submission saves:
- ⏰ Timestamp (when submitted)
- 👤 Guest name
- ✅ Attendance (Yes/No)
- 👥 Number of guests
- 🍽️ Dietary restrictions

## Troubleshooting

**Nothing appearing in sheet?**
- Make sure "Who has access" is set to "Anyone" (not "Anyone with Google account")
- Check that you copied the full deployment URL (ending in `/exec`)

**Need to update the script?**
- After making changes, create a **New deployment** (don't use "Manage deployments")
- Use the new URL in your code

**Want email notifications?**
Add this to your Apps Script:
```javascript
MailApp.sendEmail({
  to: 'your-email@example.com',
  subject: 'New Wedding RSVP',
  body: 'New RSVP from: ' + data.name
});
```
