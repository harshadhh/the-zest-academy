/* ═══════════════════════════════════════════
   THE ZEST CLASSES — Main Script
═══════════════════════════════════════════ */

// ─── NAVBAR SCROLL EFFECT ───
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ─── HAMBURGER MENU ───
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    // Animate hamburger lines
    hamburger.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
}

// ─── SCROLL REVEAL ANIMATION ───
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply reveal to cards and sections
document.querySelectorAll('.bento-card, .why-card, .testimonial-card, .curriculum-card, .exam-card, .philosophy-card, .why-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

// ─── ADMISSION FORM — FORMSPREE AJAX SUBMIT ───
const admissionForm = document.getElementById('admissionForm');
const formSuccess   = document.getElementById('formSuccess');

if (admissionForm && formSuccess) {
  admissionForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(admissionForm);
    const submitBtn = admissionForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    try {
      const response = await fetch(admissionForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        admissionForm.style.display = 'none';
        formSuccess.style.display = 'block';
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      // Fallback: show success anyway for demo purposes, or show error
      submitBtn.textContent = '⚠ Error — Please call us directly';
      submitBtn.style.background = '#ef4444';
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 4000);
    }
  });
}

// ─── SMOOTH CLICK TO ANCHOR ───
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});