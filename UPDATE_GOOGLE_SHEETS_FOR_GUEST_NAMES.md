# Update Google Sheets to Include Guest Names

## Step 1: Update Your Google Sheet Columns

1. Open your Google Sheet: "Wedding RSVP"
2. Add a new column between "Number of Guests" and "Dietary Restrictions"
3. Your headers should now be:

   | A | B | C | D | E | F |
   |---|---|---|---|---|---|
   | Timestamp | Name | Attendance | Number of Guests | **Guest Names** | Dietary Restrictions |

## Step 2: Update Your Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. **Replace ALL the code** with this updated version:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Add a new row with the form data (now includes guest names)
    sheet.appendRow([
      new Date(),           // Timestamp
      data.name,            // Name
      data.attendance,      // Attendance
      data.guests,          // Number of Guests
      data.guestNames,      // Guest Names (NEW COLUMN)
      data.dietary          // Dietary Restrictions
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

3. Click **Save** (💾 icon)

## Step 3: Deploy the Updated Script

**IMPORTANT**: You need to create a NEW deployment (not update the old one)

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ → Choose **Web app**
3. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Authorize if prompted
6. **Copy the NEW Web app URL**

## Step 4: Update Your Website Code (Already Done!)

✅ The website code has already been updated to collect guest names!

## Step 5: Update the Script URL in Your Code

If you got a NEW deployment URL, update it in:
- File: `src/app/components/RSVPSectionNew.tsx`
- Line 8-9: Replace with your new URL

## What Changed?

### On the Website:
- When someone selects 2 guests → They see 2 name input fields
- When someone selects 3 guests → They see 3 name input fields
- All guest names are required fields
- Guest names are sent as comma-separated text

### In Google Sheets:
- New column "Guest Names" shows all names like: "John Doe, Jane Smith"
- Easy to copy and use for name tags, seating charts, etc.

## Example Data:

| Timestamp | Name | Attendance | # Guests | Guest Names | Dietary |
|-----------|------|------------|----------|-------------|---------|
| 5/11/2026 | Sarah | Yes | 2 | Sarah Chen, Mike Chen | Vegetarian |
| 5/11/2026 | John | Yes | 1 | John Smith | None |
| 5/11/2026 | Lisa | No | N/A | N/A | N/A |

## Test It!

1. Fill out the RSVP form
2. Select 2 or more guests
3. Enter names for each guest
4. Submit
5. Check your Google Sheet - you should see the guest names in the new column!
