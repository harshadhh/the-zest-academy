# 🛡 The Zest Classes — Website & Admin Portal
**Dighi, Pune | School Excellence + The Armour Academy**

---

## 📁 Folder Structure

```
thezest/
├── index.html              ← Homepage (PUBLIC)
├── school-wing.html        ← School Wing page (PUBLIC)
├── defense-academy.html    ← The Armour Academy (PUBLIC)
├── faculty.html            ← About Ashish Sir (PUBLIC)
├── admissions.html         ← Admissions + Contact Form (PUBLIC)
│
├── css/
│   └── style.css           ← Master design system
│
├── js/
│   └── script.js           ← Nav, animations, form
│
├── images/
│   ├── favicon.png         ← Logo icon
│   ├── hero-main.jpg       ← ADD: Ashish Sir's photo
│   ├── hero-students.jpg   ← ADD: Students photo
│   └── ashish-sir.jpg      ← ADD: Faculty portrait
│
└── admin/
    ├── index.html          ← Login screen (PRIVATE)
    ├── dashboard.html      ← Main dashboard (PRIVATE)
    ├── attendance.html     ← Daily attendance (PRIVATE)
    ├── students.html       ← Student registration (PRIVATE)
    ├── fees.html           ← Fee tracking (PRIVATE)
    ├── announcements.html  ← Chalkboard + settings (PRIVATE)
    └── Code.gs             ← Google Apps Script (for Sheets)
```

---

## 🖥 LOCAL SETUP (VS Code)

1. Install **VS Code**: https://code.visualstudio.com
2. Install extension: **Live Server** (by Ritwick Dey)
3. Open the `thezest` folder in VS Code
4. Right-click `index.html` → **Open with Live Server**
5. Admin panel: go to `http://127.0.0.1:5500/admin/index.html`
   - Default password: `ZestAdmin2025`

---

## 📸 ADDING YOUR PHOTOS

Replace placeholder images in `/images/`:

| File | What to put |
|------|------------|
| `hero-main.jpg` | Best photo of Ashish Sir teaching |
| `hero-students.jpg` | Group photo of students |
| `ashish-sir.jpg` | Professional portrait for Faculty page |

**Photo tips:**
- Size: 800×1000px (portrait) for hero-main.jpg
- Size: 400×400px for hero-students.jpg
- Keep file names exactly lowercase with no spaces

---

## 🚀 GITHUB PAGES DEPLOYMENT

### Step 1: Create GitHub Repository
1. Go to github.com → New Repository
2. Name: `thezest-website` (or your choice)
3. Set to **Public**
4. Click "Create repository"

### Step 2: Push Your Files
```bash
# In VS Code terminal (Ctrl + `)
cd path/to/thezest

git init
git add .
git commit -m "Initial: The Zest Classes website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/thezest-website.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository → **Settings**
2. Left sidebar → **Pages**
3. Source: **Deploy from branch**
4. Branch: **main** / **root**
5. Click **Save**
6. Wait 2-3 minutes → your site is live at:
   `https://YOUR_USERNAME.github.io/thezest-website/`

### Step 4: Prevent 404 Errors
✅ All filenames are already lowercase
✅ All links use relative paths (no absolute `/` paths for sub-pages)
✅ `index.html` exists in root
✅ Admin files are in `/admin/` subfolder

---

## 🌐 CUSTOM DOMAIN SETUP

If you have a domain like `thezestclasses.com`:

1. In your GitHub repo → Settings → Pages → Custom Domain
2. Enter: `thezestclasses.com`
3. In your domain registrar (GoDaddy / Namecheap), add DNS records:

```
Type: A     Name: @    Value: 185.199.108.153
Type: A     Name: @    Value: 185.199.109.153
Type: A     Name: @    Value: 185.199.110.153
Type: A     Name: @    Value: 185.199.111.153
Type: CNAME Name: www  Value: YOUR_USERNAME.github.io
```

4. Check ✅ "Enforce HTTPS" in GitHub Pages settings
5. Wait up to 24 hours for DNS propagation

---

## 📬 CONTACT FORM SETUP (Formspree)

1. Go to **formspree.io** → Sign up (free)
2. New Form → Name it "Zest Admissions"
3. Copy your Form ID (looks like: `xpznqabc`)
4. Open `admissions.html`
5. Find: `action="https://formspree.io/f/YOUR_FORM_ID"`
6. Replace `YOUR_FORM_ID` with your actual ID
7. You'll receive email notifications for every enquiry

---

## 🔐 ADMIN PANEL GUIDE

### Default Login
- URL: `your-site.com/admin/index.html`
- Password: `ZestAdmin2025` ← **CHANGE THIS IMMEDIATELY**

### To change password:
Open `admin/index.html` → find line:
```javascript
const ADMIN_PASSWORD = 'ZestAdmin2025';
```
Change to your desired password.

### Admin Features:
| Page | Function |
|------|---------|
| Dashboard | Overview stats, recent students, fee summary |
| Attendance | Mark present/absent daily, filter by batch/grade |
| Students | Register students, search, export CSV |
| Fees | Record payments, track pending/overdue |
| Announcements | Internal chalkboard, admission toggle |

### Data Storage:
- Currently uses **browser localStorage** (works offline, zero cost)
- For cloud sync, set up **Google Apps Script** (see Code.gs)

---

## ☁️ GOOGLE SHEETS BACKEND (Optional)

1. Go to **script.google.com** → New Project
2. Copy everything from `admin/Code.gs`
3. Replace `SPREADSHEET_ID` with your Google Sheet ID
4. Replace `SECRET_KEY` with a strong password
5. Click **Deploy** → Web App → Anyone can access
6. Copy the deployment URL

Then in each admin HTML file, add:
```javascript
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ID/exec';
const API_KEY = 'YourSecretKey';
```

---

## 📱 PWA / MOBILE TIPS FOR ASHISH SIR

The admin panel works perfectly on mobile browsers.

To add to home screen on Android:
1. Open `your-site.com/admin/index.html` in Chrome
2. Tap ⋮ menu → **Add to Home screen**
3. Now it works like an app for quick attendance marking!

---

## ✅ SEO CHECKLIST

- [x] Meta titles and descriptions on all pages
- [x] Keywords: "Best coaching classes Dighi Pune", "Defense academy Dighi", "10th board tuition Dighi"
- [x] Google Maps embed on homepage
- [x] Click-to-call button
- [x] WhatsApp direct link
- [x] Mobile responsive (Google Mobile-First)
- [ ] Add real Google Maps embed URL with your actual location
- [ ] Add real phone number throughout
- [ ] Register on **Google Business Profile** for local SEO
- [ ] Get Google My Business verified → your 4.9 rating shows in search

---

## 🛠 UPDATES & MAINTENANCE

To update the website after deployment:
```bash
# Make your changes in VS Code
git add .
git commit -m "Update: [what you changed]"
git push
```
GitHub Pages auto-deploys in ~2 minutes.

---

*Built for The Zest Classes, Dighi, Pune | Navy × Gold Design System*