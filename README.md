# DG Interns Hub — Week 7 React JS Task

A responsive internship discovery website built with React, Vite, React Router and plain CSS.

## Pages
- Home — hero section, how-it-works, featured opportunities and CTA
- Jobs — internship cards with search, category and work-mode filters
- Contact — responsive enquiry form that opens the visitor's email app

## Run locally
1. Install Node.js (LTS).
2. Extract this project and open the folder in VS Code.
3. Open the terminal in the project folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Deploy
- GitHub: create a repository and push the project files.
- Netlify: import the GitHub repository. Build command: `npm run build`; publish directory: `dist`.
- Vercel: import the GitHub repository. Framework preset: Vite; build command: `npm run build`; output directory: `dist`.

## Before submission
- Replace the sample opportunities in `src/data/jobs.js` with verified DG Interns Hub opportunities.
- Update `careers@dginternshub.com` in `JobCard.jsx` and `Contact.jsx` to the official application/contact email.
- Update the social profile links in `Footer.jsx` to official DG Interns Hub links.
- Test all pages on mobile and desktop.

The opportunity data is sample content for the assignment. Apply buttons currently prepare an email draft; connect the official application form or URL when available.
