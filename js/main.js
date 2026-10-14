/**
 * Main Controller for Ahmed Adam's Portfolio
 * Manages theming, mobile navigation, scroll-spy, typing animation,
 * project case-study modal dialog, accessible form handling, and reveals.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Theme Management (Dark / Light with persistence & system preference)
  // --------------------------------------------------------------------------
  const THEME_STORAGE_KEY = 'ahmed_adam_theme';

  function getPreferredTheme() {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (e) {
      // LocalStorage access restricted (e.g. private browsing)
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      toggleBtn.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (e) {}
  }

  function initTheme() {
    const currentTheme = getPreferredTheme();
    applyTheme(currentTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
      });
    }

    // React to OS-level changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
        try {
          if (!localStorage.getItem(THEME_STORAGE_KEY)) {
            applyTheme(e.matches ? 'light' : 'dark');
          }
        } catch (err) {}
      });
    }
  }

  // --------------------------------------------------------------------------
  // 2. Sticky Header & Scroll-Spy Navigation
  // --------------------------------------------------------------------------
  function initHeaderAndScrollSpy() {
    const header = document.querySelector('.site-header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function onScroll() {
      if (window.scrollY > 24) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Scroll-spy active link highlighting
      let currentSectionId = '';
      const scrollPos = window.scrollY + 140;

      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  function initMobileNav() {
    const toggleBtn = document.getElementById('mobile-nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!toggleBtn || !navMenu) return;

    function openNav() {
      navMenu.classList.add('open');
      toggleBtn.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }

    function closeNav() {
      navMenu.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }

    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeNav();
      });
    });

    document.addEventListener('click', e => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target) && navMenu.classList.contains('open')) {
        closeNav();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. Hero Typing Animation (Respects Reduced Motion)
  // --------------------------------------------------------------------------
  function initTypingAnimation() {
    const targetEl = document.getElementById('typing-role');
    if (!targetEl || !PORTFOLIO_CONFIG.hero || !PORTFOLIO_CONFIG.hero.typingRoles) return;

    const roles = PORTFOLIO_CONFIG.hero.typingRoles;
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      targetEl.textContent = roles[0];
      return;
    }

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function tick() {
      const currentRole = roles[roleIdx];

      if (isDeleting) {
        targetEl.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typingSpeed = 50;
      } else {
        targetEl.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typingSpeed = 90;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        typingSpeed = 2200; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typingSpeed = 400; // Pause before typing new word
      }

      setTimeout(tick, typingSpeed);
    }

    tick();
  }

  // --------------------------------------------------------------------------
  // 5. Project Filtering
  // --------------------------------------------------------------------------
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.chip-filter');
    if (!filterButtons.length) return;

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-filter') || 'All';
        if (window.PortfolioRender && window.PortfolioRender.renderProjects) {
          window.PortfolioRender.renderProjects(cat);
          initRevealAnimations();
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. Case Study Modal Dialog (Accessible focus trap & scroll lock)
  // --------------------------------------------------------------------------
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  let lastFocusedElement = null;

  function openProjectModal(projectId) {
    const proj = PORTFOLIO_CONFIG.projects.find(p => p.id === projectId);
    if (!proj || !modalOverlay) return;

    lastFocusedElement = document.activeElement;

    // Populate Modal Content
    document.getElementById('modal-title').textContent = proj.title;

    // Badges / Tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    const yearChip = document.createElement('span');
    yearChip.className = 'chip';
    yearChip.style.background = 'rgba(124, 92, 255, 0.18)';
    yearChip.style.borderColor = 'var(--accent)';
    yearChip.style.color = 'var(--accent-light)';
    yearChip.textContent = proj.year;
    tagsContainer.appendChild(yearChip);

    proj.tags.forEach(t => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = t;
      tagsContainer.appendChild(chip);
    });

    // Problem & Solution
    document.getElementById('modal-problem').textContent = proj.problem;
    document.getElementById('modal-solution').textContent = proj.solution;

    // Workflow Diagram
    const flowContainer = document.getElementById('modal-flowchart');
    flowContainer.innerHTML = '';
    proj.workflowDiagram.forEach((step, index) => {
      const node = document.createElement('div');
      node.className = `wf-node ${step.type === 'agent' || step.type === 'trigger' ? 'accent' : ''}`;
      node.textContent = step.label;
      flowContainer.appendChild(node);

      if (index < proj.workflowDiagram.length - 1) {
        const arrow = document.createElement('span');
        arrow.className = 'wf-arrow';
        arrow.textContent = '→';
        flowContainer.appendChild(arrow);
      }
    });

    // Workflow Screenshot Image
    const imgContainer = document.getElementById('modal-image-wrap');
    imgContainer.innerHTML = '';
    if (proj.previewImage) {
      const img = document.createElement('img');
      img.src = proj.previewImage;
      img.alt = `${proj.title} production n8n workflow`;
      img.loading = 'lazy';
      imgContainer.appendChild(img);
    }

    // Impact / Results
    document.getElementById('modal-impact').textContent = proj.impact;

    // Open Modal
    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    setTimeout(() => {
      if (modalCloseBtn) modalCloseBtn.focus();
    }, 50);
  }

  function closeProjectModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  function initModalEvents() {
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeProjectModal);
    }

    if (modalOverlay) {
      modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay) {
          closeProjectModal();
        }
      });
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
        closeProjectModal();
      }
    });

    // Expose open modal globally for card clicks
    window.openProjectModal = openProjectModal;
  }

  // --------------------------------------------------------------------------
  // 7. Contact Form Handling (Live Delivery, Honeypot & Robust Fallbacks)
  // --------------------------------------------------------------------------
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const serviceInput = document.getElementById('form-service');
    const messageInput = document.getElementById('form-message');
    const hpInput = document.getElementById('form-hp');
    const feedbackEl = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('form-submit-btn');
    const directMailBtn = document.getElementById('form-direct-mail');

    function showError(inputEl, msg) {
      const group = inputEl.closest('.form-group');
      if (group) {
        group.classList.add('has-error');
        const errEl = group.querySelector('.form-error-msg');
        if (errEl) errEl.textContent = msg;
      }
    }

    function clearErrors() {
      form.querySelectorAll('.form-group').forEach(grp => {
        grp.classList.remove('has-error');
      });
      if (feedbackEl) {
        feedbackEl.className = 'form-feedback';
        feedbackEl.textContent = '';
      }
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function fallbackToMailto(name, email, service, message) {
      const subject = encodeURIComponent(`Project Inquiry: ${service || 'AI Automation'} - ${name}`);
      const body = encodeURIComponent(
        `Hi Ahmed,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${service}\n\nProject Details:\n${message}\n\nBest regards,\n${name}`
      );
      window.location.href = `mailto:${PORTFOLIO_CONFIG.profile.email}?subject=${subject}&body=${body}`;
    }

    // Direct mail button option
    if (directMailBtn) {
      directMailBtn.addEventListener('click', () => {
        const name = nameInput.value.trim() || 'Client';
        const email = emailInput.value.trim();
        const service = serviceInput.value.trim();
        const message = messageInput.value.trim();
        fallbackToMailto(name, email, service, message);
      });
    }

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      clearErrors();

      // Check Honeypot spam trap
      if (hpInput && hpInput.value.trim() !== '') {
        feedbackEl.className = 'form-feedback success';
        feedbackEl.textContent = 'Message sent successfully! Ahmed will reply shortly.';
        form.reset();
        return;
      }

      let isValid = true;
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const service = serviceInput.value.trim();
      const message = messageInput.value.trim();

      if (!name) {
        showError(nameInput, 'Please provide your name.');
        isValid = false;
      }

      if (!email) {
        showError(emailInput, 'Please provide your email address.');
        isValid = false;
      } else if (!isValidEmail(email)) {
        showError(emailInput, 'Please provide a valid email address.');
        isValid = false;
      }

      if (!message) {
        showError(messageInput, 'Please describe your project or inquiry.');
        isValid = false;
      }

      if (!isValid) return;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending...</span>`;

      const endpoint = PORTFOLIO_CONFIG.formEndpoint || 'https://formsubmit.co/ajax/ahmed47p3@gmail.com';

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            _replyto: email,
            service: service,
            message: message,
            _subject: `New Portfolio Inquiry from ${name} (${service})`
          })
        });

        const result = await response.json().catch(() => ({}));

        if (response.ok && (result.success === 'true' || result.success === true || result.ok || response.status < 300)) {
          feedbackEl.className = 'form-feedback success';
          feedbackEl.innerHTML = `<strong>Thank you, ${name}!</strong> Your message has been sent directly to Ahmed's inbox. He will reply to <em>${email}</em> within 24 hours.`;
          form.reset();
        } else {
          throw new Error('Server submission was not completed');
        }
      } catch (err) {
        console.warn('Direct web submission encountered a network block. Activating mail client fallback...', err);
        feedbackEl.className = 'form-feedback success';
        feedbackEl.innerHTML = `Launching your email client to deliver your message directly to <strong>ahmed47p3@gmail.com</strong>...`;
        fallbackToMailto(name, email, service, message);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Send Message</span> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. IntersectionObserver Scroll Reveals
  // --------------------------------------------------------------------------
  function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  // --------------------------------------------------------------------------
  // 9. Back to Top Button & Auto Year
  // --------------------------------------------------------------------------
  function initUtilities() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // --------------------------------------------------------------------------
  // Initialization
  // --------------------------------------------------------------------------
  function init() {
    initTheme();
    initHeaderAndScrollSpy();
    initMobileNav();
    initTypingAnimation();
    initProjectFilters();
    initModalEvents();
    initContactForm();
    initUtilities();
    setTimeout(initRevealAnimations, 80);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
