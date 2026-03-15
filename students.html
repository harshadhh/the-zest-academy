<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Batch Manager | Zest Admin</title>
  <meta name="robots" content="noindex, nofollow" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/style.css" />
  <style>
    select { appearance:none;-webkit-appearance:none;background-color:#0F1E3D!important;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23EBA821' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")!important;background-repeat:no-repeat!important;background-position:right .9rem center!important;background-size:12px!important;padding-right:2.5rem!important;color:#fff!important;border:1.5px solid rgba(255,255,255,.12)!important;border-radius:10px!important;font-family:'Outfit',sans-serif!important;cursor:pointer; }
    select option { background:#0F1E3D!important;color:#fff!important; }
    .batch-card { background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:1.25rem 1.5rem;margin-bottom:1rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap; }
    .batch-card:hover { border-color:rgba(235,168,33,.25);background:rgba(235,168,33,.04); }
    .batch-pill { display:inline-block;padding:.2rem .75rem;border-radius:50px;font-size:.72rem;font-weight:700;background:rgba(235,168,33,.12);color:#EBA821;border:1px solid rgba(235,168,33,.2); }
    .save-toast { position:fixed;bottom:2rem;right:2rem;background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.4);color:#6EE7B7;padding:.85rem 1.5rem;border-radius:12px;font-size:.9rem;font-weight:600;z-index:9999;display:none; }
  </style>
</head>
<body class="admin-body">
<div class="admin-layout">
  <aside class="admin-sidebar">
    <div class="admin-logo">
      <div class="logo-shield" style="background:transparent;box-shadow:none;">
        <img src="../images/zestlogo.jpg" alt="Logo" style="width:40px;height:40px;object-fit:contain;" />
      </div>
      <div>
        <div class="logo-main" style="color:white;font-family:'Playfair Display',serif;font-size:.95rem;font-weight:700;letter-spacing:.08em;">THE ZEST</div>
        <div class="admin-logo-text">Command Center</div>
      </div>
    </div>
    <nav class="admin-nav">
      <div class="admin-nav-section">Main</div>
      <a href="dashboard.html" class="admin-nav-item"><span class="admin-nav-icon">📊</span> Dashboard</a>
      <a href="attendance.html" class="admin-nav-item"><span class="admin-nav-icon">✅</span> Attendance</a>
      <a href="fees.html" class="admin-nav-item"><span class="admin-nav-icon">💰</span> Fee Records</a>
      <a href="students.html" class="admin-nav-item"><span class="admin-nav-icon">🎓</span> Student Logs</a>
      <div class="admin-nav-section">Academic</div>
      <a href="results.html" class="admin-nav-item"><span class="admin-nav-icon">📝</span> Results & Marks</a>
      <a href="batches.html" class="admin-nav-item active"><span class="admin-nav-icon">🗓</span> Batch Manager</a>
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
        <div class="admin-page-title">Batch Manager</div>
        <div style="font-size:.75rem;color:rgba(255,255,255,.4);margin-top:.15rem;">Manage your class schedules & batch details</div>
      </div>
      <div class="admin-header-right">
        <button class="btn-admin-primary" onclick="toggleForm()" style="padding:.6rem 1.25rem;font-size:.85rem;">➕ Add Batch</button>
      </div>
    </header>

    <div class="admin-content">

      <!-- ADD BATCH FORM -->
      <div class="admin-card" id="addBatchForm" style="display:none;margin-bottom:1.5rem;border-color:rgba(235,168,33,.3);">
        <div class="admin-card-header">
          <div class="admin-card-title">Create New Batch</div>
          <button onclick="toggleForm()" style="color:rgba(255,255,255,.4);font-size:1.2rem;background:none;border:none;cursor:pointer;">✕</button>
        </div>
        <div class="admin-form">
          <div class="admin-form-row">
            <div class="form-group"><label>Batch Name *</label><input type="text" id="bName" placeholder="e.g. 5 AM Morning Batch" /></div>
            <div class="form-group"><label>Wing / Category *</label>
              <select id="bWing">
                <option value="">Select</option>
                <option>School Wing</option><option>The Armour Academy</option>
              </select>
            </div>
          </div>
          <div class="admin-form-row">
            <div class="form-group"><label>Start Time *</label><input type="time" id="bStart" /></div>
            <div class="form-group"><label>End Time *</label><input type="time" id="bEnd" /></div>
          </div>
          <div class="admin-form-row">
            <div class="form-group"><label>Days</label>
              <select id="bDays">
                <option>Mon – Sat</option><option>Mon – Fri</option><option>Mon, Wed, Fri</option><option>Tue, Thu, Sat</option><option>Daily</option>
              </select>
            </div>
            <div class="form-group"><label>Max Seats</label><input type="number" id="bSeats" placeholder="e.g. 25" /></div>
          </div>
          <div class="form-group"><label>Subjects Covered</label><input type="text" id="bSubjects" placeholder="e.g. Maths, Science, English" /></div>
          <div class="form-group"><label>Monthly Fee (₹)</label><input type="number" id="bFee" placeholder="e.g. 2500" /></div>
          <div style="display:flex;gap:1rem;margin-top:.5rem;">
            <button class="btn-admin-primary" onclick="addBatch()">✅ Create Batch</button>
            <button class="btn-admin-secondary" onclick="toggleForm()">Cancel</button>
          </div>
        </div>
        <div id="batchMsg" style="display:none;margin-top:1rem;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.3);color:var(--green);padding:.75rem 1rem;border-radius:10px;font-size:.88rem;font-weight:600;">✅ Batch created!</div>
      </div>

      <!-- BATCH OVERVIEW STATS -->
      <div class="admin-stats-grid" id="batchStats" style="margin-bottom:1.5rem;"></div>

      <!-- BATCH LIST -->
      <div class="admin-card">
        <div class="admin-card-header">
          <div class="admin-card-title">All Batches</div>
          <div class="admin-card-subtitle" id="batchCount">0 batches configured</div>
        </div>
        <div id="batchList">
          <div style="color:rgba(255,255,255,.3);text-align:center;padding:3rem;">No batches yet. Click "Add Batch" to create your first batch.</div>
        </div>
      </div>

      <!-- STUDENTS PER BATCH -->
      <div class="admin-card" style="margin-top:1.5rem;">
        <div class="admin-card-header">
          <div>
            <div class="admin-card-title">Students by Batch</div>
            <div class="admin-card-subtitle">How many students are in each batch</div>
          </div>
        </div>
        <table class="admin-table">
          <thead><tr><th>Batch</th><th>Students</th><th>Wing</th><th>Capacity</th><th>Fill %</th></tr></thead>
          <tbody id="batchStudentsTable"><tr><td colspan="5" style="color:rgba(255,255,255,.3);text-align:center;padding:2rem;">No data yet</td></tr></tbody>
        </table>
      </div>
    </div>
  </main>
</div>
<div class="save-toast" id="saveToast"></div>

<script>
  if (!sessionStorage.getItem('zest_admin_auth')) window.location.href = 'index.html';

  let batches = JSON.parse(localStorage.getItem('zest_batches') || '[]');
  const students = JSON.parse(localStorage.getItem('zest_students') || '[]');

  function toggleForm() {
    const f = document.getElementById('addBatchForm');
    f.style.display = f.style.display === 'none' ? 'block' : 'none';
  }

  function addBatch() {
    const name = document.getElementById('bName').value.trim();
    const wing = document.getElementById('bWing').value;
    const start = document.getElementById('bStart').value;
    const end = document.getElementById('bEnd').value;
    const days = document.getElementById('bDays').value;
    const seats = document.getElementById('bSeats').value;
    const subjects = document.getElementById('bSubjects').value.trim();
    const fee = document.getElementById('bFee').value;

    if (!name || !wing) { alert('Please fill Batch Name and Wing.'); return; }

    batches.push({ id: 'B' + Date.now(), name, wing, start, end, days, seats, subjects, fee, active: true, created: new Date().toISOString().split('T')[0] });
    localStorage.setItem('zest_batches', JSON.stringify(batches));

    ['bName','bStart','bEnd','bSeats','bSubjects','bFee'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('batchMsg').style.display = 'block';
    setTimeout(() => document.getElementById('batchMsg').style.display = 'none', 2500);
    renderBatches();
  }

  function deleteBatch(id) {
    if (!confirm('Delete this batch?')) return;
    batches = batches.filter(b => b.id !== id);
    localStorage.setItem('zest_batches', JSON.stringify(batches));
    renderBatches();
  }

  function toggleActive(id) {
    const b = batches.find(b => b.id === id);
    if (b) { b.active = !b.active; localStorage.setItem('zest_batches', JSON.stringify(batches)); renderBatches(); }
  }

  function renderBatches() {
    const list = document.getElementById('batchList');
    document.getElementById('batchCount').textContent = batches.length + ' batch' + (batches.length !== 1 ? 'es' : '') + ' configured';

    if (batches.length === 0) {
      list.innerHTML = '<div style="color:rgba(255,255,255,.3);text-align:center;padding:3rem;">No batches yet.</div>';
    } else {
      list.innerHTML = batches.map(b => {
        const stuCount = students.filter(s => (s.batch || '') === b.name).length;
        const fill = b.seats ? Math.round((stuCount / parseInt(b.seats)) * 100) : 0;
        return `
        <div class="batch-card">
          <div>
            <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.35rem;">
              <span style="font-weight:700;color:#fff;font-size:1rem;">${b.name}</span>
              <span class="batch-pill">${b.wing}</span>
              ${b.active ? '<span style="background:rgba(16,185,129,.12);color:#6EE7B7;border:1px solid rgba(16,185,129,.25);border-radius:50px;padding:.1rem .6rem;font-size:.7rem;font-weight:700;">ACTIVE</span>' : '<span style="background:rgba(239,68,68,.1);color:#FCA5A5;border:1px solid rgba(239,68,68,.2);border-radius:50px;padding:.1rem .6rem;font-size:.7rem;font-weight:700;">INACTIVE</span>'}
            </div>
            <div style="font-size:.8rem;color:rgba(255,255,255,.45);display:flex;gap:1.25rem;flex-wrap:wrap;">
              ${b.start ? `⏰ ${b.start} – ${b.end}` : ''} 
              ${b.days ? `📅 ${b.days}` : ''}
              ${b.subjects ? `📚 ${b.subjects}` : ''}
              ${b.fee ? `💰 ₹${parseFloat(b.fee).toLocaleString('en-IN')}/mo` : ''}
              👥 ${stuCount} students ${b.seats ? `/ ${b.seats} seats (${fill}% full)` : ''}
            </div>
          </div>
          <div style="display:flex;gap:.5rem;">
            <button onclick="toggleActive('${b.id}')" style="padding:.35rem .8rem;border-radius:8px;font-size:.78rem;font-weight:600;cursor:pointer;font-family:'Outfit',sans-serif;background:rgba(255,255,255,.06);color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.1);">${b.active ? 'Deactivate' : 'Activate'}</button>
            <button onclick="deleteBatch('${b.id}')" style="padding:.35rem .8rem;border-radius:8px;font-size:.78rem;cursor:pointer;font-family:'Outfit',sans-serif;background:rgba(239,68,68,.1);color:#EF4444;border:1px solid rgba(239,68,68,.2);">Delete</button>
          </div>
        </div>`;
      }).join('');
    }

    // Stats
    document.getElementById('batchStats').innerHTML = `
      <div class="admin-stat-card"><div class="admin-stat-icon">🗓</div><div class="admin-stat-value">${batches.length}</div><div class="admin-stat-label">Total Batches</div></div>
      <div class="admin-stat-card"><div class="admin-stat-icon">✅</div><div class="admin-stat-value">${batches.filter(b=>b.active).length}</div><div class="admin-stat-label">Active Batches</div></div>
      <div class="admin-stat-card"><div class="admin-stat-icon">🏫</div><div class="admin-stat-value">${batches.filter(b=>b.wing==='School Wing').length}</div><div class="admin-stat-label">School Wing</div></div>
      <div class="admin-stat-card"><div class="admin-stat-icon">🎖</div><div class="admin-stat-value">${batches.filter(b=>b.wing==='The Armour Academy').length}</div><div class="admin-stat-label">Armour Academy</div></div>
    `;

    // Students per batch table
    const allBatchNames = [...new Set(students.map(s => s.batch).filter(Boolean))];
    const tableBody = document.getElementById('batchStudentsTable');
    if (allBatchNames.length === 0) {
      tableBody.innerHTML = '<tr><td colspan="5" style="color:rgba(255,255,255,.3);text-align:center;padding:2rem;">No student batch data yet</td></tr>';
    } else {
      tableBody.innerHTML = allBatchNames.map(name => {
        const count = students.filter(s => s.batch === name).length;
        const batch = batches.find(b => b.name === name);
        const cap = batch && batch.seats ? parseInt(batch.seats) : null;
        const pct = cap ? Math.round((count/cap)*100) : null;
        return `<tr>
          <td style="font-weight:600;">${name}</td>
          <td style="font-weight:700;color:var(--gold);">${count}</td>
          <td>${batch ? batch.wing : '—'}</td>
          <td>${cap || '—'}</td>
          <td>${pct !== null ? `<span style="color:${pct>90?'#EF4444':pct>70?'#EBA821':'#6EE7B7'};font-weight:600;">${pct}%</span>` : '—'}</td>
        </tr>`;
      }).join('');
    }
  }

  function logout(e) { e.preventDefault(); sessionStorage.removeItem('zest_admin_auth'); window.location.href = 'index.html'; }
  renderBatches();
</script>
<script src="zest-sync.js"></script>
</body>
</html>
