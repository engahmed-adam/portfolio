/**
 * Render Engine for Ahmed Adam's Portfolio
 * Generates dynamic DOM components from PORTFOLIO_CONFIG.
 * Ensures strict security: uses textContent and safe attribute binding.
 */

(function () {
  'use strict';

  // Inline SVG Icon Library (No external CDN dependencies)
  const ICONS = {
    workflow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M10 6.5h4"/><path d="M6.5 10v4"/><path d="M17.5 10v4"/></svg>`,
    bot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
    message: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    funnel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
    brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"/></svg>`,
    document: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
    sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`,
    api: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
    location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    language: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    education: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    focus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
  };

  /**
   * Helper to create element with classes
   */
  function createElement(tag, className) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    return el;
  }

  /**
   * Render Services Cards
   */
  function renderServices() {
    const container = document.getElementById('services-grid');
    if (!container || !PORTFOLIO_CONFIG.services) return;
    container.innerHTML = '';

    PORTFOLIO_CONFIG.services.forEach(srv => {
      const card = createElement('article', 'service-card reveal');

      // Icon
      const iconBox = createElement('div', 'service-icon-box');
      iconBox.innerHTML = ICONS[srv.icon] || ICONS.workflow;
      card.appendChild(iconBox);

      // Title
      const title = createElement('h3', 'service-title');
      title.textContent = srv.title;
      card.appendChild(title);

      // Description
      const desc = createElement('p', 'service-desc');
      desc.textContent = srv.description;
      card.appendChild(desc);

      // Tags
      const tagsContainer = createElement('div', 'service-tags');
      srv.tags.forEach(tagText => {
        const chip = createElement('span', 'chip');
        chip.textContent = tagText;
        tagsContainer.appendChild(chip);
      });
      card.appendChild(tagsContainer);

      container.appendChild(card);
    });
  }

  /**
   * Render Technical Skills & Soft Skills
   */
  function renderSkills() {
    const catContainer = document.getElementById('skills-categories-grid');
    if (catContainer && PORTFOLIO_CONFIG.skills) {
      catContainer.innerHTML = '';

      PORTFOLIO_CONFIG.skills.forEach(cat => {
        const card = createElement('div', 'skill-category-card reveal');

        const header = createElement('div', 'skill-cat-header');
        const iconBox = createElement('div', 'skill-cat-icon');
        iconBox.innerHTML = ICONS[cat.icon] || ICONS.cpu;
        const title = createElement('h3', 'skill-cat-title');
        title.textContent = cat.category;
        header.appendChild(iconBox);
        header.appendChild(title);
        card.appendChild(header);

        const list = createElement('div', 'skills-chip-list');
        cat.items.forEach(skill => {
          const chip = createElement('span', 'chip');
          chip.textContent = skill;
          list.appendChild(chip);
        });
        card.appendChild(list);

        catContainer.appendChild(card);
      });
    }

    const softContainer = document.getElementById('soft-skills-list');
    if (softContainer && PORTFOLIO_CONFIG.softSkills) {
      softContainer.innerHTML = '';
      PORTFOLIO_CONFIG.softSkills.forEach(soft => {
        const chip = createElement('span', 'chip');
        chip.textContent = soft;
        softContainer.appendChild(chip);
      });
    }
  }

  /**
   * Render Work Experience Timeline
   */
  function renderExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container || !PORTFOLIO_CONFIG.experience) return;
    container.innerHTML = '';

    PORTFOLIO_CONFIG.experience.forEach(exp => {
      const item = createElement('div', 'timeline-item reveal');

      const dot = createElement('div', 'timeline-dot');
      item.appendChild(dot);

      const content = createElement('div', 'timeline-content');

      const header = createElement('div', 'timeline-header');
      const title = createElement('h3', 'timeline-title');
      title.textContent = exp.role;
      const badge = createElement('span', 'timeline-badge');
      badge.textContent = exp.period;
      header.appendChild(title);
      header.appendChild(badge);
      content.appendChild(header);

      const sub = createElement('div', 'timeline-subtitle');
      sub.textContent = `${exp.company} • ${exp.location}`;
      content.appendChild(sub);

      const list = createElement('ul', 'timeline-list');
      exp.bullets.forEach(bulletText => {
        const li = createElement('li');
        li.textContent = bulletText;
        list.appendChild(li);
      });
      content.appendChild(list);

      item.appendChild(content);
      container.appendChild(item);
    });
  }

  /**
   * Render Projects Grid
   */
  function renderProjects(filterCategory = 'All') {
    const container = document.getElementById('projects-grid');
    if (!container || !PORTFOLIO_CONFIG.projects) return;
    container.innerHTML = '';

    const filtered = filterCategory === 'All'
      ? PORTFOLIO_CONFIG.projects
      : PORTFOLIO_CONFIG.projects.filter(p => {
          if (filterCategory === 'n8n') return p.tags.includes('n8n');
          if (filterCategory === 'OpenAI') return p.tags.includes('OpenAI API');
          if (filterCategory === 'Telegram') return p.tags.includes('Telegram');
          if (filterCategory === 'Google Workspace') return p.tags.includes('Google Sheets') || p.tags.includes('Gmail') || p.tags.includes('Google Calendar');
          return p.filterCategory === filterCategory;
        });

    filtered.forEach(proj => {
      const card = createElement('article', 'project-card reveal');
      card.setAttribute('data-id', proj.id);

      // Image Preview
      const previewWrap = createElement('div', 'project-preview-wrap');
      const img = createElement('img', 'project-preview-img');
      img.src = proj.previewImage;
      img.alt = `${proj.title} workflow diagram`;
      img.width = 1600;
      img.height = 640;
      img.loading = 'lazy';
      img.decoding = 'async';
      previewWrap.appendChild(img);

      const badge = createElement('span', 'project-badge-overlay');
      badge.textContent = proj.year;
      previewWrap.appendChild(badge);
      card.appendChild(previewWrap);

      // Card Content
      const content = createElement('div', 'project-content');

      const title = createElement('h3', 'project-card-title');
      title.textContent = proj.title;
      content.appendChild(title);

      const outcome = createElement('p', 'project-card-outcome');
      outcome.textContent = proj.outcome;
      content.appendChild(outcome);

      const chips = createElement('div', 'project-card-chips');
      proj.tags.forEach(t => {
        const chip = createElement('span', 'chip');
        chip.textContent = t;
        chips.appendChild(chip);
      });
      content.appendChild(chips);

      const footer = createElement('div', 'project-card-footer');
      const btn = createElement('button', 'btn btn-primary btn-sm');
      btn.type = 'button';
      btn.setAttribute('aria-label', `View case study for ${proj.title}`);
      btn.innerHTML = `Case Study ${ICONS.arrowRight}`;
      btn.addEventListener('click', () => {
        if (window.openProjectModal) {
          window.openProjectModal(proj.id);
        }
      });
      footer.appendChild(btn);
      content.appendChild(footer);

      card.appendChild(content);
      container.appendChild(card);
    });
  }

  /**
   * Render Education Section (Academic Degree)
   */
  function renderEducation() {
    const container = document.getElementById('education-grid');
    if (!container || !PORTFOLIO_CONFIG.education) return;
    container.innerHTML = '';

    PORTFOLIO_CONFIG.education.forEach(edu => {
      const card = createElement('div', 'edu-card reveal');
      const header = createElement('div', 'edu-card-header');
      const titles = createElement('div');
      const inst = createElement('div', 'edu-institution');
      inst.textContent = edu.institution;
      const deg = createElement('h3', 'edu-degree');
      deg.textContent = edu.degree;
      titles.appendChild(inst);
      titles.appendChild(deg);

      const badge = createElement('span', 'edu-year-badge');
      badge.textContent = edu.period;
      header.appendChild(titles);
      header.appendChild(badge);
      card.appendChild(header);

      const list = createElement('ul', 'edu-curriculum-list');
      edu.details.forEach(itemText => {
        const li = createElement('li');
        li.textContent = itemText;
        list.appendChild(li);
      });
      card.appendChild(list);
      container.appendChild(card);
    });
  }

  /**
   * Render Courses & Certifications Section
   */
  function renderCourses() {
    const container = document.getElementById('courses-grid');
    if (!container) return;
    container.innerHTML = '';

    // Specialized Training Programs
    if (PORTFOLIO_CONFIG.courses) {
      PORTFOLIO_CONFIG.courses.forEach(tr => {
        const card = createElement('div', 'edu-card reveal');
        const header = createElement('div', 'edu-card-header');
        const titles = createElement('div');
        const inst = createElement('div', 'edu-institution');
        inst.textContent = tr.duration;
        const prog = createElement('h3', 'edu-degree');
        prog.textContent = tr.program;
        titles.appendChild(inst);
        titles.appendChild(prog);

        const badge = createElement('span', 'edu-year-badge');
        badge.textContent = `${tr.status} • ${tr.year}`;
        if (tr.status === "In Progress") {
          badge.style.borderColor = "var(--accent)";
          badge.style.color = "var(--accent-light)";
        }
        header.appendChild(titles);
        header.appendChild(badge);
        card.appendChild(header);

        const list = createElement('ul', 'edu-curriculum-list');
        tr.topics.forEach(top => {
          const li = createElement('li');
          li.textContent = top;
          list.appendChild(li);
        });
        card.appendChild(list);
        container.appendChild(card);
      });
    }

    // Languages & Localization Card
    if (PORTFOLIO_CONFIG.languages) {
      const card = createElement('div', 'edu-card reveal');
      const header = createElement('div', 'edu-card-header');
      const titles = createElement('div');
      const inst = createElement('div', 'edu-institution');
      inst.textContent = "Communication & Localization";
      const deg = createElement('h3', 'edu-degree');
      deg.textContent = "Languages";
      titles.appendChild(inst);
      titles.appendChild(deg);
      header.appendChild(titles);
      card.appendChild(header);

      const list = createElement('ul', 'edu-curriculum-list');
      PORTFOLIO_CONFIG.languages.forEach(lang => {
        const li = createElement('li');
        li.innerHTML = `<strong>${lang.language}</strong>: ${lang.level} (${lang.description})`;
        list.appendChild(li);
      });
      card.appendChild(list);
      container.appendChild(card);
    }
  }

  /**
   * Render Testimonials (Ships empty - automatically hidden)
   */
  function renderTestimonials() {
    const section = document.getElementById('testimonials');
    const container = document.getElementById('testimonials-grid');
    if (!section || !container) return;

    if (!PORTFOLIO_CONFIG.testimonials || PORTFOLIO_CONFIG.testimonials.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.style.display = 'block';
    container.innerHTML = '';
    PORTFOLIO_CONFIG.testimonials.forEach(t => {
      const card = createElement('div', 'testimonial-card reveal');
      const quote = createElement('p');
      quote.textContent = `"${t.text}"`;
      const author = createElement('h4');
      author.textContent = t.name;
      const role = createElement('small');
      role.textContent = t.role;

      card.appendChild(quote);
      card.appendChild(author);
      card.appendChild(role);
      container.appendChild(card);
    });
  }

  // Initialize all dynamic sections
  function initRender() {
    renderServices();
    renderSkills();
    renderExperience();
    renderProjects('All');
    renderEducation();
    renderCourses();
    renderTestimonials();
  }

  // Expose to window
  window.PortfolioRender = {
    init: initRender,
    renderProjects: renderProjects,
    renderEducation: renderEducation,
    renderCourses: renderCourses,
    ICONS: ICONS
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRender);
  } else {
    initRender();
  }
})();
