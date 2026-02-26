/**
 * ═══════════════════════════════════════════════════════
 * THE ZEST CLASSES — Google Apps Script Backend
 * File: Code.gs
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to script.google.com → New Project
 * 2. Paste this code
 * 3. Replace SPREADSHEET_ID with your Google Sheet ID
 * 4. Replace SECRET_KEY with a strong password
 * 5. Deploy → New Deployment → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web App URL → paste into your admin JS files
 * ═══════════════════════════════════════════════════════
 */

const SPREADSHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
const SECRET_KEY = 'ZestSecretKey2025'; // CHANGE THIS!

// ─── SHEET NAMES ───
const SHEETS = {
  students:      'Students',
  attendance:    'Attendance',
  fees:          'FeeRecords',
  enquiries:     'Enquiries',
  announcements: 'Announcements'
};

// ─── CORS HEADERS ───
function setCorsHeaders(output) {
  return output
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// ─── HANDLE OPTIONS (preflight) ───
function doOptions(e) {
  return setCorsHeaders(ContentService.createTextOutput(''));
}

// ─── MAIN POST HANDLER ───
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Auth check
    if (data.key !== SECRET_KEY) {
      return setCorsHeaders(
        ContentService.createTextOutput(JSON.stringify({ success: false, error: 'Unauthorized' }))
          .setMimeType(ContentService.MimeType.JSON)
      );
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const action = data.action;
    let result;

    switch (action) {
      case 'addStudent':
        result = addStudent(ss, data.payload);
        break;
      case 'markAttendance':
        result = markAttendance(ss, data.payload);
        break;
      case 'recordFee':
        result = recordFee(ss, data.payload);
        break;
      case 'addAnnouncement':
        result = addAnnouncement(ss, data.payload);
        break;
      case 'logEnquiry':
        result = logEnquiry(ss, data.payload);
        break;
      default:
        result = { success: false, error: 'Unknown action: ' + action };
    }

    return setCorsHeaders(
      ContentService.createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON)
    );
  } catch (err) {
    return setCorsHeaders(
      ContentService.createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
        .setMimeType(ContentService.MimeType.JSON)
    );
  }
}

// ─── GET HANDLER (fetch data) ───
function doGet(e) {
  try {
    const key = e.parameter.key;
    const action = e.parameter.action;

    if (key !== SECRET_KEY) {
      return setCorsHeaders(
        ContentService.createTextOutput(JSON.stringify({ success: false, error: 'Unauthorized' }))
          .setMimeType(ContentService.MimeType.JSON)
      );
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let result;

    switch (action) {
      case 'getStudents':
        result = getSheetData(ss, SHEETS.students);
        break;
      case 'getAttendance':
        result = getSheetData(ss, SHEETS.attendance, e.parameter.date);
        break;
      case 'getFees':
        result = getSheetData(ss, SHEETS.fees, e.parameter.month);
        break;
      case 'getEnquiries':
        result = getSheetData(ss, SHEETS.enquiries);
        break;
      default:
        result = { success: false, error: 'Unknown action' };
    }

    return setCorsHeaders(
      ContentService.createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON)
    );
  } catch (err) {
    return setCorsHeaders(
      ContentService.createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
        .setMimeType(ContentService.MimeType.JSON)
    );
  }
}

// ─── HELPER: Get sheet data as JSON ───
function getSheetData(ss, sheetName, filter) {
  const sheet = getOrCreateSheet(ss, sheetName);
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return { success: true, data: [] };

  const headers = data[0];
  const rows = data.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });

  return { success: true, data: rows };
}

// ─── STUDENT: Add new student ───
function addStudent(ss, payload) {
  const sheet = getOrCreateSheet(ss, SHEETS.students, [
    'ID', 'Name', 'Parent', 'Grade', 'Board', 'Batch', 'Phone', 'Fee', 'FeeStatus', 'Address', 'JoinDate'
  ]);

  const id = 'S' + Date.now();
  sheet.appendRow([
    id,
    payload.name || '',
    payload.parent || '',
    payload.grade || '',
    payload.board || '',
    payload.batch || '',
    payload.phone || '',
    payload.fee || '',
    payload.feeStatus || 'Pending',
    payload.address || '',
    new Date().toLocaleDateString('en-IN')
  ]);

  return { success: true, id };
}

// ─── ATTENDANCE: Mark attendance for a date ───
function markAttendance(ss, payload) {
  const sheet = getOrCreateSheet(ss, SHEETS.attendance, [
    'Date', 'StudentID', 'StudentName', 'Grade', 'Batch', 'Status', 'Timestamp'
  ]);

  // Remove existing entries for this date + student (update logic)
  const data = sheet.getDataRange().getValues();
  const toDelete = [];
  for (let i = data.length - 1; i >= 1; i--) {
    if (data[i][0] === payload.date && data[i][1] === payload.studentId) {
      toDelete.push(i + 1); // 1-indexed
    }
  }
  toDelete.forEach(rowNum => sheet.deleteRow(rowNum));

  // Append new record
  sheet.appendRow([
    payload.date,
    payload.studentId,
    payload.studentName,
    payload.grade || '',
    payload.batch || '',
    payload.status, // 'present' | 'absent'
    new Date().toISOString()
  ]);

  return { success: true };
}

// ─── FEES: Record fee payment ───
function recordFee(ss, payload) {
  const sheet = getOrCreateSheet(ss, SHEETS.fees, [
    'ID', 'StudentName', 'Grade', 'Amount', 'Date', 'DueDate', 'Method', 'Status', 'Notes', 'Timestamp'
  ]);

  const id = 'F' + Date.now();
  sheet.appendRow([
    id,
    payload.studentName || '',
    payload.grade || '',
    payload.amount || '',
    payload.date || '',
    payload.dueDate || '',
    payload.method || 'Cash',
    payload.status || 'paid',
    payload.notes || '',
    new Date().toISOString()
  ]);

  return { success: true, id };
}

// ─── ANNOUNCEMENTS ───
function addAnnouncement(ss, payload) {
  const sheet = getOrCreateSheet(ss, SHEETS.announcements, [
    'ID', 'Text', 'Category', 'Priority', 'Date', 'Timestamp'
  ]);

  sheet.appendRow([
    'A' + Date.now(),
    payload.text || '',
    payload.category || '',
    payload.priority || 'normal',
    payload.date || new Date().toLocaleDateString('en-IN'),
    new Date().toISOString()
  ]);

  return { success: true };
}

// ─── ENQUIRIES (from public website form) ───
function logEnquiry(ss, payload) {
  const sheet = getOrCreateSheet(ss, SHEETS.enquiries, [
    'ID', 'StudentName', 'ParentName', 'Grade', 'Phone', 'Email', 'Batch', 'Message', 'Timestamp'
  ]);

  sheet.appendRow([
    'E' + Date.now(),
    payload.studentName || '',
    payload.parentName || '',
    payload.grade || '',
    payload.phone || '',
    payload.email || '',
    payload.interest || '',
    payload.message || '',
    new Date().toISOString()
  ]);

  return { success: true };
}

// ─── HELPER: Get or create sheet with headers ───
function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    if (headers) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
  }
  return sheet;
}

/**
 * ═══════════════════════════════════════════════════════
 * HOW TO USE IN YOUR ADMIN PAGES:
 *
 * After deploying this script, you get a URL like:
 * https://script.google.com/macros/s/AKfycby.../exec
 *
 * To save a student (POST):
 *   fetch(APPS_SCRIPT_URL, {
 *     method: 'POST',
 *     body: JSON.stringify({
 *       key: 'ZestSecretKey2025',
 *       action: 'addStudent',
 *       payload: { name: 'Rahul', phone: '9876543210', ... }
 *     })
 *   })
 *
 * To fetch students (GET):
 *   fetch(`${APPS_SCRIPT_URL}?key=ZestSecretKey2025&action=getStudents`)
 * ═══════════════════════════════════════════════════════
 */