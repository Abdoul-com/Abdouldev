/* ============================================================
   ABDOUL DEV — script.js
   Structure :
     1. Loader
     2. Navigation (hamburger + lien actif)
     3. Scroll Reveal
     4. Barres de compétences animées
     5. Formulaire de contact
     6. Initialisation
   ============================================================ */

'use strict';

/* ============================================================
   1. LOADER
   Masque l'écran de chargement après le rendu de la page.
   ============================================================ */

function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1800);
  });
}


/* ============================================================
   2. NAVIGATION
   2a. Hamburger — ouvre/ferme le menu mobile
   2b. Lien actif — surligne la section visible au scroll
   2c. Fermeture automatique du menu au clic sur un lien
   ============================================================ */

function initNavigation() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const allLinks  = document.querySelectorAll('.nav-links a');

  if (!hamburger || !navLinks) return;

  /* ── 2a. Hamburger ── */
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  /* ── 2b. Fermeture au clic sur un lien ── */
  allLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ── 2c. Lien actif selon la section visible ── */
  const sections = document.querySelectorAll('section[id], div[id]');

  function updateActiveLink() {
    let current = '';

    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top <= 80) {
        current = section.id;
      }
    });

    allLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink(); // appel initial
}


/* ============================================================
   3. SCROLL REVEAL
   Utilise IntersectionObserver pour révéler les éléments
   portant la classe .reveal lorsqu'ils entrent dans le viewport.
   ============================================================ */

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const options = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // révélation unique
      }
    });
  }, options);

  elements.forEach(el => observer.observe(el));
}


/* ============================================================
   4. BARRES DE COMPÉTENCES ANIMÉES
   Déclenche l'animation de largeur via data-width
   lorsque la barre est visible dans le viewport.
   ============================================================ */

function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill  = entry.target;
        const width = fill.getAttribute('data-width');

        if (width) {
          fill.style.width = `${width}%`;
        }

        observer.unobserve(fill); // animation unique
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));
}


/* ============================================================
   5. FORMULAIRE DE CONTACT
   Validation simple + feedback visuel à la soumission.
   ============================================================ */

function initContactForm() {
  const submitBtn = document.getElementById('formSubmit');
  const feedback  = document.getElementById('formFeedback');
  const nameInput  = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const msgInput   = document.getElementById('message');

  if (!submitBtn) return;

  submitBtn.addEventListener('click', () => {
    // Réinitialiser le message
    feedback.textContent = '';

    // Récupérer les valeurs
    const name    = nameInput?.value.trim()  ?? '';
    const email   = emailInput?.value.trim() ?? '';
    const message = msgInput?.value.trim()   ?? '';

    // Validation basique
    if (!name || !email || !message) {
      feedback.textContent = '⚠️ Merci de remplir tous les champs.';
      feedback.style.color = '#f87171';
      return;
    }

    if (!isValidEmail(email)) {
      feedback.textContent = '⚠️ Adresse email invalide.';
      feedback.style.color = '#f87171';
      return;
    }

    // Succès — état visuel
    submitBtn.textContent    = '✅ Message envoyé !';
    submitBtn.style.background = '#22c55e';
    submitBtn.disabled       = true;
    feedback.textContent     = 'Merci ! Je vous répondrai très vite.';
    feedback.style.color     = '#22c55e';

    // Reset après 4 secondes
    setTimeout(() => {
      submitBtn.textContent    = 'Envoyer le message 🚀';
      submitBtn.style.background = '';
      submitBtn.disabled       = false;
      feedback.textContent     = '';

      if (nameInput)  nameInput.value  = '';
      if (emailInput) emailInput.value = '';
      if (msgInput)   msgInput.value   = '';
    }, 4000);
  });
}

/**
 * Valide une adresse email avec une regex simple.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/* ============================================================
   6. INITIALISATION
   Lance tous les modules au chargement du DOM.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavigation();
  initScrollReveal();
  initSkillBars();
  initContactForm();
});
