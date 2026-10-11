# EduPath Coaching Institute — Landing Page Demo

A responsive, single-page coaching institute website built with **HTML5, custom CSS, Bootstrap 5, and Vanilla JavaScript**. This project is intended as a frontend portfolio/demo project and as a starting point for a fictional coaching institute.

> **Important:** EduPath, its staff, student stories, contact details, and statistics are sample/demo content. Replace them with verified client information before publishing. The inquiry form only validates in the browser; it does not send or store submissions.

## Features

- Single-page layout with in-page navigation
- Hero section with admission calls to action
- Institute highlights / trust strip
- Course cards
- Why choose us section
- Faculty cards
- Student stories / testimonials section
- Gallery section
- Admission inquiry form with client-side validation
- Contact details and footer
- Responsive layout for desktop, tablet, and mobile
- Bootstrap responsive navbar and grid utilities
- Vanilla JavaScript for mobile navigation behavior, course preselection, phone input cleanup, form validation, and dynamic footer year
- Comments in HTML, CSS, and JavaScript to make the code easier to read and maintain
- Accessibility basics: semantic landmarks, skip link, image alt text, visible focus, and reduced-motion support

## Tech stack

- HTML5
- CSS3 (custom styles)
- Bootstrap 5 (local files)
- Vanilla JavaScript (no jQuery or frontend framework)

## Project structure

```text
edupath-coaching-landing-page/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── images/
        └── (put your downloaded project images here)
```

The `bootstrap/` directory is not included in this repository because you said you will install Bootstrap yourself. After downloading Bootstrap, add the compiled files in the paths below, or update the two paths in `index.html` to match your installation:

```text
bootstrap/
├── css/
│   └── bootstrap.min.css
└── js/
    └── bootstrap.bundle.min.js
```

The JavaScript bundle is needed for Bootstrap's responsive navigation collapse.

## Setup: run locally

### 1. Download or clone the project

```bash
git clone https://github.com/YOUR-USERNAME/edupath-coaching-landing-page.git
cd edupath-coaching-landing-page
```

If you downloaded the ZIP instead, extract it and open the extracted project folder in your editor.

### 2. Install Bootstrap locally

1. Open the official Bootstrap website: <https://getbootstrap.com/>.
2. Download the compiled CSS and JS files for Bootstrap 5.
3. Create a `bootstrap` folder in the project root if it does not exist.
4. Place `bootstrap.min.css` inside `bootstrap/css/`.
5. Place `bootstrap.bundle.min.js` inside `bootstrap/js/`.
6. Confirm that the paths in `index.html` match those locations.

Do not put your own `style.css` before Bootstrap. The project CSS should load after Bootstrap so the custom styles can override Bootstrap defaults.

### 3. Open the website

Open `index.html` in a browser. For a smoother development workflow, you can use the Live Server extension in Visual Studio Code. Keep the folder structure intact so the CSS and JavaScript paths continue to work.

## How to customize the project

### Update the institute branding

- In `index.html`, change `EduPath Coaching Institute`, the logo letter, headline, course names, and contact details.
- In `css/style.css`, edit the CSS custom properties near the top (`:root`) to change brand colors, spacing, and card radius.
- Replace the sample photos with approved images. Recommended approach: download properly licensed images into `assets/images/` and update the `src` attributes to local paths such as `assets/images/classroom.jpg`.
- Add meaningful alt text for informative images. Use an empty alt (`alt=""`) only for purely decorative images.

### Add or remove a course

Find the `COURSES / PROGRAMS` section in `index.html`. Duplicate one `.col-md-6.col-xl-4` course card, then change its title, description, features, and `data-course` value. If you add a new course, also add the same course as an option in the inquiry form's `<select id="course">` so course preselection works.

### Update faculty and testimonials

Replace all placeholder names, descriptions, testimonials, and photos with authentic information approved by the institute. Never publish fictional reviews, unsupported selection numbers, or misleading success claims as real results.

### Update phone, email, address, and hours

Search in `index.html` for the placeholder phone number, `hello@example.com`, and `Your institute address`. Update the visible text and the related `tel:` / `mailto:` link destinations together. Replace the map/address area with the client's real location if required.

## Admission form: current limitations

The form currently provides **client-side validation only**. On a valid submission, it displays a demo message and resets the fields. It does not:

- send an email;
- store submissions in a database;
- notify the institute;
- connect to a CRM or WhatsApp;
- provide spam protection or server-side validation.

For a real client, connect the form to a backend or a trusted form-handling service. Validate all data on the server, use HTTPS, protect against spam, publish a privacy notice, and collect only the information the institute needs. Never add secret API keys to frontend JavaScript.

## Images and external assets

The demo uses remote images from Unsplash source URLs. Internet access is needed for those images to load. Before client delivery or deployment, check the current license/usage terms and image permissions, download approved assets where appropriate, and update image paths to local files if you want the project to be self-contained.

## Deployment on GitHub Pages

1. Create a new GitHub repository, for example `edupath-coaching-landing-page`.
2. Upload or push all project files, including `index.html`, `css/`, `js/`, and `README.md`.
3. Add your locally installed Bootstrap files in the `bootstrap/` folder if you want the page to work on GitHub Pages with the paths in this project. If you prefer not to commit third-party compiled files, change the Bootstrap paths to a supported CDN instead—but this project is set up for local Bootstrap files by default.
4. Open the repository on GitHub and go to **Settings → Pages**.
5. Under the build/deployment settings, choose **Deploy from a branch**, select the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. Open the URL shown in Settings → Pages and test it on desktop and mobile.
7. Confirm the browser console has no missing-file errors and verify all navigation links, buttons, images, and form states.

GitHub Pages hosts static files. It cannot run a PHP or Node backend by itself, so the inquiry form will still need a separate backend or form service to receive submissions.

## Suggested pre-publish checklist

- [ ] Replace demo name, logo, course information, and all placeholder contact details.
- [ ] Replace fictional testimonials and faculty placeholders with approved real information.
- [ ] Check image permissions and optimize image sizes.
- [ ] Install Bootstrap locally and confirm the CSS/JS paths work.
- [ ] Test the mobile navbar at phone widths.
- [ ] Test all navigation and course enquiry links.
- [ ] Test valid and invalid form entries.
- [ ] Connect the form to a real, secure submission service before accepting actual student details.
- [ ] Check contrast, keyboard navigation, alt text, and browser console errors.
- [ ] Test the deployed GitHub Pages URL after every important change.

## Learning goals

This demo is useful for practicing:

- semantic HTML and page section planning;
- Bootstrap grid, spacing, buttons, forms, and responsive navigation;
- CSS variables, custom components, hover states, and media queries;
- DOM selection and event listeners in Vanilla JavaScript;
- browser-side form validation and accessible feedback;
- Git/GitHub workflow and static deployment.

## License

You may adapt the original project code for learning and portfolio demonstration. Review the terms of Bootstrap and each image/asset provider separately before redistributing their assets. Add a license file if you want to state formal reuse terms for the complete repository.
