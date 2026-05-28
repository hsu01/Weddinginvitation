# Google Sheets RSVP Setup Instructions

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Wedding RSVP Responses" (or any name you prefer)
4. In the first row, add these column headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Attendance`
   - D1: `Number of Guests`
   - E1: `Dietary Restrictions`

## Step 2: Create the Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Add a new row with the form data
    sheet.appendRow([
      new Date(),
      data.name,
      data.attendance,
      data.guests,
      data.dietary
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **Save** icon (💾) and name your project "Wedding RSVP Handler"

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "RSVP Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click **Deploy**
6. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [project name] (unsafe)**
   - Click **Allow**
7. **Copy the Web app URL** - it will look like:
   `https://script.google.com/macros/s/AKfycby.../exec`

## Step 4: Add the URL to Your Website

Once you have the Web app URL, paste it into your code where indicated.

## Testing

After setup:
1. Submit a test RSVP through your website
2. Check your Google Sheet - a new row should appear with the submission data
3. Each submission will include a timestamp, name, attendance status, guest count, and dietary restrictions

## Troubleshooting

- **403 Error**: Make sure "Who has access" is set to "Anyone"
- **No data appearing**: Check that column headers match exactly
- **Authorization issues**: Re-deploy and re-authorize the script
