<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Attendance | Zest Admin</title>
  <meta name="robots" content="noindex, nofollow" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/style.css" />
  <style>
    select { appearance: none; -webkit-appearance: none; background-color: #0F1E3D !important; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23EBA821' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") !important; background-repeat: no-repeat !important; background-position: right 0.9rem center !important; background-size: 12px !important; padding-right: 2.5rem !important; color: #fff !important; border: 1.5px solid rgba(255,255,255,0.12) !important; border-radius: 10px !important; font-family: Outfit,sans-serif !important; cursor: pointer; }
    select option { background: #0F1E3D !important; color: #fff !important; }
    select:focus { border-color: #EBA821 !important; outline: none !important; }
  </style>
</head>
<body class="admin-body">

<div class="admin-layout">
  <aside class="admin-sidebar" id="adminSidebar">
    <div class="admin-logo">
      <div class="logo-shield" style="background: transparent; box-shadow: none;">
  <img src="images/zestlogo.jpg" alt="The Zest Logo" style="width: 40px; height: 40px; object-fit: contain;" />
</div>
      <div>
        <div class="logo-main" style="color:white;font-family:'Playfair Display',serif;font-size:0.95rem;font-weight:700;letter-spacing:0.08em;">THE ZEST</div>
        <div class="admin-logo-text">Command Center</div>
      </div>
    </div>
    <nav class="admin-nav">
      <div class="admin-nav-section">Main</div>
      <a href="dashboard.html" class="admin-nav-item"><span class="admin-nav-icon">📊</span> Dashboard</a>
      <a href="attendance.html" class="admin-nav-item active"><span class="admin-nav-icon">✅</span> Attendance</a>
      <a href="fees.html" class="admin-nav-item"><span class="admin-nav-icon">💰</span> Fee Records</a>
      <a href="students.html" class="admin-nav-item"><span class="admin-nav-icon">🎓</span> Student Logs</a>
      <div class="admin-nav-section">Settings</div>
      <a href="announcements.html" class="admin-nav-item"><span class="admin-nav-icon">📢</span> Announcements</a>
      <a href="index.html" class="admin-nav-item" onclick="logout(event)"><span class="admin-nav-icon">🚪</span> Logout</a>
      <div class="admin-nav-section">Site</div>
      <a href="../index.html" target="_blank" class="admin-nav-item"><span class="admin-nav-icon">🌐</span> View Website</a>
    </nav>
  </aside>

  <main class="admin-main">
    <header class="admin-header">
      <div>
        <div class="admin-page-title">Attendance Tracker</div>
        <div style="font-size:0.75rem;color:rgba(255,255,255,0.4);margin-top:0.15rem;" id="attendanceDate"></div>
      </div>
      <div class="admin-header-right">
        <div class="admin-badge">Live Entry</div>
        <button class="btn-admin-primary" onclick="saveAttendance()" style="padding: 0.6rem 1.25rem; font-size: 0.85rem;">💾 Save Attendance</button>
      </div>
    </header>

    <div class="admin-content">

      <!-- Batch Filter + Date -->
      <div class="admin-card" style="margin-bottom: 1.5rem;">
        <div style="display: flex; gap: 1.5rem; align-items: flex-end; flex-wrap: wrap;">
          <div class="admin-form" style="flex: 1; min-width: 200px;">
            <label>Select Date</label>
            <input type="date" id="attendanceDateInput" />
          </div>
          <div class="admin-form" style="flex: 1; min-width: 200px;">
            <label>Filter by Batch</label>
            <select id="batchFilter" onchange="filterStudents()">
              <option value="all">All Batches</option>
              <option value="5 AM Morning Batch">5 AM Morning Batch</option>
              <option value="Regular Morning">Regular Morning Batch</option>
              <option value="Evening I">Evening Batch I</option>
              <option value="Evening II">Evening Batch II</option>
            </select>
          </div>
          <div class="admin-form" style="flex: 1; min-width: 200px;">
            <label>Filter by Grade</label>
            <select id="gradeFilter" onchange="filterStudents()">
              <option value="all">All Grades</option>
              <option value="8th">8th Standard</option>
              <option value="9th">9th Standard</option>
              <option value="10th">10th Standard</option>
              <option value="NDA">NDA Batch</option>
              <option value="CDS">CDS Batch</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Stats Row -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
        <div class="admin-stat-card" style="padding: 1.25rem;">
          <div class="admin-stat-value" id="totalCount">0</div>
          <div class="admin-stat-label">Total Students</div>
        </div>
        <div class="admin-stat-card" style="padding: 1.25rem; border-color: rgba(16,185,129,0.3);">
          <div class="admin-stat-value" style="color: var(--green);" id="presentCount">0</div>
          <div class="admin-stat-label">Present</div>
        </div>
        <div class="admin-stat-card" style="padding: 1.25rem; border-color: rgba(239,68,68,0.3);">
          <div class="admin-stat-value" style="color: #EF4444;" id="absentCount">0</div>
          <div class="admin-stat-label">Absent</div>
        </div>
      </div>

      <!-- Bulk Actions -->
      <div class="admin-card" style="margin-bottom: 1rem; padding: 1rem 1.75rem;">
        <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
          <span style="font-size: 0.85rem; color: rgba(255,255,255,0.5);">Bulk:</span>
          <button class="btn-admin-secondary" style="padding: 0.5rem 1rem; font-size: 0.82rem;" onclick="markAll('present')">✅ Mark All Present</button>
          <button class="btn-admin-secondary" style="padding: 0.5rem 1rem; font-size: 0.82rem;" onclick="markAll('absent')">❌ Mark All Absent</button>
        </div>
      </div>

      <!-- Attendance List -->
      <div class="admin-card">
        <div class="admin-card-header">
          <div>
            <div class="admin-card-title">Student Attendance</div>
            <div class="admin-card-subtitle">Toggle each student's status</div>
          </div>
        </div>
        <div id="attendanceList">
          <div style="text-align: center; padding: 3rem; color: rgba(255,255,255,0.3);">
            No students found. <a href="students.html" style="color: var(--gold);">Add students first →</a>
          </div>
        </div>
      </div>

      <div id="saveMsg" style="display:none; margin-top: 1rem; background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.3); color: var(--green); padding: 1rem 1.5rem; border-radius: 12px; font-weight: 600;">
        ✅ Attendance saved successfully for <span id="savedDate"></span>
      </div>

    </div>
  </main>
</div>

<script>
  if (sessionStorage.getItem('zest_admin_auth') !== 'true') window.location.href = 'index.html';

  const dateInput = document.getElementById('attendanceDateInput');
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  dateInput.value = todayStr;
  document.getElementById('attendanceDate').textContent = now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  let allStudents = JSON.parse(localStorage.getItem('zest_students') || '[]');
  let attendanceData = JSON.parse(localStorage.getItem('zest_attendance') || '{}');
  let filteredStudents = [...allStudents];

  function filterStudents() {
    const batch = document.getElementById('batchFilter').value;
    const grade = document.getElementById('gradeFilter').value;
    filteredStudents = allStudents.filter(s => {
      const batchMatch = batch === 'all' || (s.batch && s.batch.includes(batch));
      const gradeMatch = grade === 'all' || (s.grade && s.grade.includes(grade));
      return batchMatch && gradeMatch;
    });
    renderList();
  }

  function renderList() {
    const list = document.getElementById('attendanceList');
    const date = dateInput.value;
    const dayAtt = attendanceData[date] || {};

    document.getElementById('totalCount').textContent = filteredStudents.length;

    if (filteredStudents.length === 0) {
      list.innerHTML = '<div style="text-align:center;padding:3rem;color:rgba(255,255,255,0.3);">No students match filter. <a href="students.html" style="color:var(--gold);">Add students →</a></div>';
      updateCounts();
      return;
    }

    list.innerHTML = filteredStudents.map((s, i) => {
      const status = dayAtt[s.id] || 'present';
      return `
        <div class="attendance-row" id="row-${s.id}">
          <div class="student-info">
            <div class="student-avatar">${s.name.charAt(0).toUpperCase()}</div>
            <div>
              <div class="student-name">${s.name}</div>
              <div class="student-grade">${s.grade} · ${s.batch || 'General'}</div>
            </div>
          </div>
          <div class="toggle-wrap">
            <span style="font-size:0.8rem;color:rgba(255,255,255,0.4);" id="lbl-${s.id}">${status === 'present' ? '✅ Present' : '❌ Absent'}</span>
            <label class="toggle">
              <input type="checkbox" id="tog-${s.id}" ${status === 'present' ? 'checked' : ''} onchange="toggleStatus('${s.id}')" />
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      `;
    }).join('');

    updateCounts();
  }

  function toggleStatus(id) {
    const cb = document.getElementById('tog-' + id);
    const lbl = document.getElementById('lbl-' + id);
    const date = dateInput.value;
    if (!attendanceData[date]) attendanceData[date] = {};
    attendanceData[date][id] = cb.checked ? 'present' : 'absent';
    lbl.textContent = cb.checked ? '✅ Present' : '❌ Absent';
    updateCounts();
  }

  function markAll(status) {
    const date = dateInput.value;
    if (!attendanceData[date]) attendanceData[date] = {};
    filteredStudents.forEach(s => {
      attendanceData[date][s.id] = status;
      const cb = document.getElementById('tog-' + s.id);
      const lbl = document.getElementById('lbl-' + s.id);
      if (cb) { cb.checked = (status === 'present'); }
      if (lbl) lbl.textContent = status === 'present' ? '✅ Present' : '❌ Absent';
    });
    updateCounts();
  }

  function updateCounts() {
    const date = dateInput.value;
    const dayAtt = attendanceData[date] || {};
    const present = filteredStudents.filter(s => (dayAtt[s.id] || 'present') === 'present').length;
    const absent = filteredStudents.length - present;
    document.getElementById('presentCount').textContent = present;
    document.getElementById('absentCount').textContent = absent;
  }

  function saveAttendance() {
    localStorage.setItem('zest_attendance', JSON.stringify(attendanceData));
    const msg = document.getElementById('saveMsg');
    const dateLabel = new Date(dateInput.value).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('savedDate').textContent = dateLabel;
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', 4000);
  }

  dateInput.addEventListener('change', renderList);
  renderList();

  function logout(e) {
    e.preventDefault();
    sessionStorage.removeItem('zest_admin_auth');
    window.location.href = 'index.html';
  }
</script>
</body>
</html>