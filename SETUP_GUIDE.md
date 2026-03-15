# The Zest Admin Panel — Setup & Security Guide

---

## 🔐 SECURITY CHANGES

### What changed?
Your admin password is now **never stored in plain text** anywhere.
- Previously: Password was visible in browser DevTools as plain text (`ZestAdmin2025`)
- Now: Password is converted to a **SHA-256 hash** before being checked. Even if someone opens DevTools, they see only a hash like `8c6976e5b5410415bde908...` — this cannot be reversed to find the original password.

### Default Password
The default password is still: **`ZestAdmin2025`**
➡️ **Change it immediately** via Admin → Settings → Change Password

### How to change password safely
1. Go to `admin/settings.html`
2. Enter current password, new password (min 10 chars), confirm
3. The old password is verified by hash, new one is saved as hash
4. All other sessions are expired automatically

---

## 🔗 GOOGLE SHEETS LIVE SYNC (One-time setup)

This lets data entered on laptop show on mobile instantly, and vice versa.

### Step 1 — Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Copy the **Sheet ID** from the URL: `docs.google.com/spreadsheets/d/`**`THIS_PART`**`/edit`

### Step 2 — Set up Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Click **New Project**
3. Delete any existing code
4. Copy the entire contents of `admin/Code.gs` (from your zip file) and paste it
5. In the script, find this line:
   ```
   return SpreadsheetApp.getActiveSpreadsheet();
   ```
   This works if the script is **bound** to your sheet. To bind it:
   - Open your Google Sheet → Extensions → Apps Script
   - Paste the Code.gs content there instead

### Step 3 — Set Sheet ID in Script Properties
1. In Apps Script → Project Settings → Script Properties
2. Add property: **Key** = `sheet_id`, **Value** = your Sheet ID from Step 1

### Step 4 — Deploy as Web App
1. Click **Deploy** → **New Deployment**
2. Type: **Web App**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Click **Deploy** → Copy the Web App URL (starts with `https://script.google.com/macros/s/...`)

### Step 5 — Connect in Admin Panel
1. Open your website's admin panel → Settings
2. Paste the Web App URL into the "Google Apps Script URL" field
3. Click **Test & Connect**
4. You should see "🟢 Connected"

### Step 6 — Push existing data
Click **📤 Push Local → Sheets** to upload all existing data to the spreadsheet.

---

## 📱 REAL-TIME ACROSS DEVICES

Once connected:
- Data entered on **laptop** → automatically saved to Google Sheets → visible on **mobile** after refresh
- Data entered on **mobile** → saved to Google Sheets → visible on **laptop** after refresh
- Dashboard stats update from the live Sheets data every time you load the page

**Auto-sync on every save:** Each time you add a student, fee record, announcement etc., it syncs to Sheets immediately.

---

## 🗂 WHAT EACH SHEET TAB CONTAINS

| Tab | What's stored |
|-----|--------------|
| Students | All student records |
| Attendance | Daily attendance per student |
| Fees | All fee payment records |
| Results | Test scores & marks |
| Announcements | Public announcements |
| Enquiries | Admission enquiries/leads |
| Batches | Batch schedules |

---

## ⚠️ IMPORTANT NOTES

1. **Never share the Web App URL** — it's your private API endpoint
2. **Change the default password** before going live
3. If you redeploy the Apps Script, the URL changes — update it in Settings
4. The panel works offline too — data saves locally and syncs when connection returns

---

*The Zest Classes · Dighi, Pune · Admin Panel v2.0*
