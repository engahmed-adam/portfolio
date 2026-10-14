# Ahmed Adam - AI Automation & Agentic AI Engineer Portfolio

A production-ready, high-converting freelance portfolio website built for **Ahmed Adam Abdelghani Hussien**, specialized in **AI Automation & Agentic AI**.

Built with pure **HTML5, CSS3, and vanilla JavaScript** — zero build tools, zero external runtime libraries, zero frameworks. Just open `index.html` in any browser.

---

## 🚀 Quick Start

1. Clone or download this repository.
2. Double-click `index.html` or open it with any web server (such as VS Code Live Server or Python `python -m http.server 8000`).
3. The site runs completely offline without any package installation.

---

## 📁 File Structure

```
portfolio/
├── index.html            # Main semantic HTML document & SEO markup
├── css/
│   ├── base.css          # CSS reset, design tokens, light/dark themes, typography
│   ├── components.css    # Buttons, cards, chips, badges, timeline, modal dialog, form
│   └── sections.css      # Header, hero circle avatar, about, services, skills, projects, education, courses, contact, footer
├── js/
│   ├── config.js         # Single source of truth: ALL editable data and settings
│   ├── render.js         # Pure JS renderer for dynamic DOM components & separate education/courses
│   └── main.js           # Theme toggle, scroll-spy, modal, animations, live form delivery
├── assets/
│   ├── images/
│   │   ├── ahmed.jpg     # Ahmed's portrait photo (825x1024)
│   │   ├── telegram-support-agent.jpg
│   │   ├── lead-qualification-crm.jpg
│   │   ├── appointment-booking.jpg
│   │   └── social-content-generator.jpg
│   ├── cv/
│   │   └── Ahmed_Adam_CV.pdf # Production CV downloadable in PDF format
│   └── favicon.svg       # Monogram vector favicon (AA)
├── robots.txt            # Search engine crawling rules
├── sitemap.xml           # XML sitemap for SEO indexation
└── README.md             # Documentation and deployment guide
```

---

## ⚙️ Content Customization Guide

All personal info, skills, projects, experience, and contact endpoints are managed inside `js/config.js`. You never need to touch complex HTML or CSS to update your portfolio content.

### 1. Profile Picture & CV
- **Photo:** Place your portrait in `assets/images/ahmed.jpg`. The hero section features a fixed, sleek static circular frame with a subtle violet gradient ring and zero wobbling or moving animations.
- **CV / Resume:** Place your updated PDF in `assets/cv/Ahmed_Adam_CV.pdf`. All "Download CV" buttons trigger an instant download of this file.

### 2. Contact Information & Location
In `js/config.js`, modify the `profile` object:
```javascript
profile: {
  fullName: "Ahmed Adam Abdelghani Hussien",
  displayName: "Ahmed Adam",
  title: "AI Automation & Agentic AI Engineer",
  location: "Egypt",
  phone: "+20 121 194 6704",
  whatsappUrl: "https://wa.me/201211946704",
  email: "ahmed47p3@gmail.com",
  linkedinUrl: "https://linkedin.com/in/ahmedadamabdelghani",
  // ...
}
```

### 3. Contact Form & Email Delivery
The contact form is pre-configured with **live email delivery**:
- **Active Endpoint:** `https://formsubmit.co/ajax/ahmed47p3@gmail.com`.
- **How it works:** When a visitor submits the form, FormSubmit packages the message and delivers it directly to `ahmed47p3@gmail.com`.
- **Activation:** The very first time a message is submitted, FormSubmit sends an activation email to `ahmed47p3@gmail.com`. Click "Activate Form" once, and all future inquiries land instantly in your inbox!
- **Fallback:** If a visitor has an ad-blocker or is offline, the form immediately launches their email app (mailto fallback) with pre-filled details, and provides a direct "Open in Mail App" button.

### 4. Separate Education and Courses Sections
- **Education:** Displays the formal computer science undergraduate degree from Beni-Suef University.
- **Courses & Certifications:** Displays specialized programs including the 120-hour DEPI AI & Automation program (In Progress) and NTI Machine Learning summer training, alongside language capabilities.

---

## 🌐 Free Deployment Guide

### Option A: GitHub Pages (Recommended)
1. Initialize a Git repository and push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Ahmed Adam portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment**, select **Source: Deploy from a branch**.
4. Choose **Branch: main**, folder: `/ (root)`, and click **Save**.
5. Your portfolio will be live at `https://<your-username>.github.io/<repo-name>/` in 1–2 minutes.

### Option B: Netlify
1. Go to [Netlify.com](https://www.netlify.com/) and log in.
2. Click **Add new site** > **Deploy manually**.
3. Drag and drop the `portfolio web` folder directly into the Netlify drop zone.
4. Your website is instantly deployed with a free HTTPS URL.

### Option C: Vercel
1. Install Vercel CLI or import your GitHub repository at [Vercel.com](https://vercel.com/).
2. Run `vercel` in your terminal and select default options.
3. Your site will be live instantly with global CDN acceleration.
