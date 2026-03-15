<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dashboard | Zest Admin</title>
  <meta name="robots" content="noindex, nofollow" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/style.css" />
  <style>
    select {
      appearance: none; -webkit-appearance: none;
      background-color: #0F1E3D !important;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23EBA821' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") !important;
      background-repeat: no-repeat !important;
      background-position: right 0.9rem center !important;
      background-size: 12px !important;
      padding-right: 2.5rem !important;
      color: #fff !important; border: 1.5px solid rgba(255,255,255,0.12) !important;
      border-radius: 10px !important; font-family: 'Outfit', sans-serif !important; cursor: pointer;
    }
    select option { background: #0F1E3D !important; color: #fff !important; }
  </style>
</head>
<body class="admin-body">

<div class="admin-layout">
  <aside class="admin-sidebar" id="adminSidebar">
    <div class="admin-logo">
      <div class="logo-shield" style="background: transparent; box-shadow: none;">
  <img src="../images/zestlogo.jpg" alt="The Zest Logo" style="width: 40px; height: 40px; object-fit: contain;" />
</div>
      <div>
        <div class="logo-main" style="color:white;font-family:'Playfair Display',serif;font-size:0.95rem;font-weight:700;letter-spacing:0.08em;">THE ZEST</div>
        <div class="admin-logo-text">Command Center</div>
      </div>
    </div>
    <nav class="admin-nav">
      <div class="admin-nav-section">Main</div>
      <a href="dashboard.html" class="admin-nav-item active"><span class="admin-nav-icon">📊</span> Dashboard</a>
      <a href="attendance.html" class="admin-nav-item"><span class="admin-nav-icon">✅</span> Attendance</a>
      <a href="fees.html" class="admin-nav-item"><span class="admin-nav-icon">💰</span> Fee Records</a>
      <a href="students.html" class="admin-nav-item"><span class="admin-nav-icon">🎓</span> Student Logs</a>
      <div class="admin-nav-section">Academic</div>
      <a href="results.html" class="admin-nav-item"><span class="admin-nav-icon">📝</span> Results &amp; Marks</a>
      <a href="batches.html" class="admin-nav-item"><span class="admin-nav-icon">🗓</span> Batch Manager</a>
      <a href="enquiries.html" class="admin-nav-item"><span class="admin-nav-icon">📩</span> Enquiries</a>
      <a href="custom-categories.html" class="admin-nav-item"><span class="admin-nav-icon">🗂</span> Custom Categories</a>
      <div class="admin-nav-section">Settings</div>
      <a href="announcements.html" class="admin-nav-item"><span class="admin-nav-icon">📢</span> Announcements</a>
      <a href="settings.html" class="admin-nav-item"><span class="admin-nav-icon">⚙️</span> Settings</a>
      <a href="index.html" class="admin-nav-item" onclick="logout(event)"><span class="admin-nav-icon">🚪</span> Logout</a>
      <div class="admin-nav-section">Site</div>
      <a href="../index.html" target="_blank" class="admin-nav-item"><span class="admin-nav-icon">🌐</span> View Website</a>
    </nav>
  </aside>

  <main class="admin-main">
    <header class="admin-header">
      <div>
        <div class="admin-page-title">Dashboard</div>
        <div style="font-size:0.75rem;color:rgba(255,255,255,0.4);margin-top:0.15rem;" id="currentDate"></div>
      </div>
      <div class="admin-header-right">
        <div class="admin-badge">System Online</div>
        <span id="syncStatusBadge" style="font-size:.72rem;font-weight:700;color:rgba(235,168,33,.6);">🟡 Local</span>
      </div>
    </header>

    <div class="admin-content">

      <!-- STAT CARDS -->
      <div class="admin-stats-grid">
        <div class="admin-stat-card">
          <div class="admin-stat-icon">🎓</div>
          <div class="admin-stat-value" id="totalStudents">0</div>
          <div class="admin-stat-label">Total Students</div>
          <div class="admin-stat-change neutral" id="studentsChange">—</div>
        </div>
        <div class="admin-stat-card">
          <div class="admin-stat-icon">✅</div>
          <div class="admin-stat-value" id="attendancePct">—</div>
          <div class="admin-stat-label">Today's Attendance</div>
          <div class="admin-stat-change neutral" id="attendanceDetail">—</div>
        </div>
        <div class="admin-stat-card">
          <div class="admin-stat-icon">💰</div>
          <div class="admin-stat-value" id="feeCollected">₹0</div>
          <div class="admin-stat-label">Monthly Fees Collected</div>
          <div class="admin-stat-change neutral" id="feePending">—</div>
        </div>
        <div class="admin-stat-card">
          <div class="admin-stat-icon">📢</div>
          <div class="admin-stat-value" id="annCount">0</div>
          <div class="admin-stat-label">Announcements</div>
          <div class="admin-stat-change neutral">Active on board</div>
        </div>
      </div>

      <!-- TWO COLUMN -->
      <div class="admin-two-col">

        <!-- Recent Students -->
        <div class="admin-card">
          <div class="admin-card-header">
            <div>
              <div class="admin-card-title">Recent Registrations</div>
              <div class="admin-card-subtitle">Latest students added</div>
            </div>
            <a href="students.html" style="font-size:0.8rem;color:rgba(235,168,33,0.7);">View All →</a>
          </div>
          <table class="admin-table">
            <thead>
              <tr><th>Student</th><th>Grade</th><th>Batch</th><th>Fees</th></tr>
            </thead>
            <tbody id="recentStudentsBody">
              <tr><td colspan="4" style="color:rgba(255,255,255,0.3);text-align:center;padding:2rem;">No students yet</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Right Column -->
        <div>

          <!-- CHALKBOARD — reads from localStorage -->
          <div class="admin-card" style="padding:0;overflow:hidden;margin-bottom:1.5rem;">
            <div style="padding:1.1rem 1.75rem;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div class="admin-card-title">📋 Internal Announcements</div>
                <div class="admin-card-subtitle">From your announcements board</div>
              </div>
              <a href="announcements.html" style="font-size:0.78rem;color:rgba(235,168,33,0.7);">Manage →</a>
            </div>
            <div class="chalkboard" style="border-radius:0;border:none;margin:0;min-height:180px;">
              <div class="chalkboard-title">THE ZEST — PRIVATE NOTES</div>
              <div class="chalk-text" id="announcementBoard">
                <div style="color:rgba(255,255,255,0.25);font-style:italic;">
                  No announcements yet —
                  <a href="announcements.html" style="color:rgba(235,168,33,0.6);">add one →</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="admin-card">
            <div class="admin-card-header">
              <div class="admin-card-title">Quick Actions</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:0.75rem;">
              <a href="attendance.html" class="btn-admin-primary" style="text-align:center;text-decoration:none;display:block;">✅ Mark Today's Attendance</a>
              <a href="students.html"   class="btn-admin-secondary" style="text-align:center;text-decoration:none;display:block;">➕ Add New Student</a>
              <a href="fees.html"       class="btn-admin-secondary" style="text-align:center;text-decoration:none;display:block;">💰 Record Fee Payment</a>
              <a href="announcements.html" class="btn-admin-secondary" style="text-align:center;text-decoration:none;display:block;">📢 Post Announcement</a>
              <a href="results.html" class="btn-admin-secondary" style="text-align:center;text-decoration:none;display:block;">📝 Add Test Result</a>
              <a href="enquiries.html" class="btn-admin-secondary" style="text-align:center;text-decoration:none;display:block;">📩 Log Enquiry</a>
            </div>
          </div>

        </div>
      </div>

      <!-- Fee Overview -->
      <div class="admin-card">
        <div class="admin-card-header">
          <div>
            <div class="admin-card-title">Fee Status — Current Month</div>
            <div class="admin-card-subtitle" id="currentMonth"></div>
          </div>
          <a href="fees.html" style="font-size:0.8rem;color:rgba(235,168,33,0.7);">Manage →</a>
        </div>
        <table class="admin-table">
          <thead>
            <tr><th>Student</th><th>Grade</th><th>Amount</th><th>Due Date</th><th>Status</th></tr>
          </thead>
          <tbody id="feeOverviewBody">
            <tr><td colspan="5" style="color:rgba(255,255,255,0.3);text-align:center;padding:2rem;">No fee records yet</td></tr>
          </tbody>
        </table>
      </div>

    </div>
  </main>
</div>

<script src="zest-sync.js"></script>
<script>
  if (!sessionStorage.getItem('zest_admin_auth')) window.location.href = 'index.html';
  ZestSync.initSyncBadge();

  const now = new Date();
  document.getElementById('currentDate').textContent  = now.toLocaleDateString('en-IN', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  document.getElementById('currentMonth').textContent = now.toLocaleDateString('en-IN', { month:'long', year:'numeric' });

  async function loadDashboard() {
    // Pull latest data (from API if live, else from localStorage)
    const [students, fees, announcements, enquiries] = await Promise.all([
      ZestSync.getAll('students',      'zest_students'),
      ZestSync.getAll('fees',          'zest_fees'),
      ZestSync.getAll('announcements', 'zest_announcements'),
      ZestSync.getAll('enquiries',     'zest_enquiries'),
    ]);
    const attendance = JSON.parse(localStorage.getItem('zest_attendance') || '{}');

    // ── Stat cards ──
    document.getElementById('totalStudents').textContent  = students.length;
    document.getElementById('studentsChange').textContent = students.length + ' registered';

    const today        = now.toISOString().split('T')[0];
    const todayAtt     = attendance[today] || {};
    const presentCount = Object.values(todayAtt).filter(v => v === 'present').length;
    const pct = students.length ? Math.round((presentCount / students.length) * 100) : 0;
    document.getElementById('attendancePct').textContent    = students.length ? pct + '%' : '—';
    document.getElementById('attendanceDetail').textContent = students.length
      ? `${presentCount} / ${students.length} present today` : 'No students added';

    const monthFees = fees.filter(f => {
      const d = new Date(f.date || f.Date);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
        && (f.status === 'paid' || f.Status === 'Paid');
    });
    const totalFee = monthFees.reduce((s, f) => s + (parseFloat(f.amount || f.Amount) || 0), 0);
    document.getElementById('feeCollected').textContent = '₹' + totalFee.toLocaleString('en-IN');
    const pendingCount = fees.filter(f => f.status === 'pending' || f.Status === 'Pending').length;
    document.getElementById('feePending').textContent = pendingCount + ' pending';

    document.getElementById('annCount').textContent = announcements.length;

    // ── Chalkboard ──
    const board = document.getElementById('announcementBoard');
    board.innerHTML = announcements.length === 0
      ? '<div style="color:rgba(255,255,255,.25);font-style:italic;">No announcements — <a href="announcements.html" style="color:rgba(235,168,33,.6);">add one →</a></div>'
      : [...announcements].reverse().slice(0,6).map(a =>
          `<div class="chalk-item"><span class="chalk-bullet">${a.priority==='high'?'⚠':'→'}</span><span style="${a.priority==='high'?'font-weight:700;color:#FCD34D;':''}">${a.text}</span></div>`
        ).join('');

    // ── Recent students ──
    const tbody = document.getElementById('recentStudentsBody');
    tbody.innerHTML = students.length === 0
      ? '<tr><td colspan="4" style="color:rgba(255,255,255,.3);text-align:center;padding:2rem;">No students yet. <a href="students.html" style="color:var(--gold);">Add first →</a></td></tr>'
      : [...students].reverse().slice(0,5).map(s =>
          `<tr>
            <td><div style="font-weight:600;">${s.name||s.Name}</div><div style="font-size:.75rem;color:rgba(255,255,255,.35);">${s.phone||s.Phone||''}</div></td>
            <td>${s.grade||s.Grade||'—'}</td>
            <td>${s.batch||s.Batch||'—'}</td>
            <td><span class="status-badge ${(s.feeStatus||s.FeeStatus||'pending').toLowerCase()}">${s.feeStatus||s.FeeStatus||'Pending'}</span></td>
          </tr>`
        ).join('');

    // ── Fee overview ──
    const feeTbody = document.getElementById('feeOverviewBody');
    const curFees = fees.filter(f => { const d=new Date(f.date||f.Date); return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear(); });
    feeTbody.innerHTML = curFees.length === 0
      ? '<tr><td colspan="5" style="color:rgba(255,255,255,.3);text-align:center;padding:2rem;">No fee records this month. <a href="fees.html" style="color:var(--gold);">Add →</a></td></tr>'
      : [...curFees].reverse().map(f =>
          `<tr>
            <td>${f.studentName||f.StudentName}</td>
            <td>${f.grade||f.Grade||'—'}</td>
            <td style="font-weight:600;color:#6EE7B7;">₹${parseFloat(f.amount||f.Amount||0).toLocaleString('en-IN')}</td>
            <td>${f.dueDate||f.DueDate||'—'}</td>
            <td><span class="status-badge ${(f.status||f.Status||'pending').toLowerCase()}">${f.status||f.Status||'Pending'}</span></td>
          </tr>`
        ).join('');
  }

  loadDashboard();

  function logout(e) {
    e.preventDefault();
    ZestSync.logout();
  }
</script>
</body>
</html>