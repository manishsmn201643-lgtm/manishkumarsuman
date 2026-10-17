# Manish Kumar Suman — Portfolio

A premium, responsive, single-page portfolio built with plain HTML, CSS and JavaScript. No build step, no backend, free to host anywhere.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The page: hero, projects, experience, skills, hire-me, education, contact |
| `style.css` | Dark premium theme, responsive layout, animations |
| `script.js` | Mobile menu, copy-email button, scroll reveal, back-to-top |
| `assets/manish.jpg` | Profile photo |
| `assets/Manish-Kumar-Suman-Resume.pdf` | Resume served by the "Download resume" buttons |

## Update content

- **Resume**: replace `assets/Manish-Kumar-Suman-Resume.pdf` with a new file of the same name.
- **Photo**: replace `assets/manish.jpg` (portrait orientation looks best).
- **Projects / text**: edit `index.html`. Each project card is an `<a class="project">` with its live link in `href`.
- **Email / phone / LinkedIn**: search `index.html` for `manish.smn@gmail.com`, `9887530136` and `linkedin.com`.

## Preview locally

Double-click `index.html`. Internet is needed only for Google Fonts; system fonts are used as fallback.

## Launch for free — GitHub Pages (recommended)

1. Create a free account at https://github.com and sign in.
2. Click **New repository**, name it exactly `YOUR-USERNAME.github.io` (use your GitHub username), keep it **Public**, click **Create repository**.
3. Click **uploading an existing file**, drag in `index.html`, `style.css`, `script.js`, `README.md` and the whole `assets` folder, then click **Commit changes**.
4. Open **Settings → Pages**. Under **Build and deployment** choose **Deploy from a branch**, branch `main`, folder `/ (root)`, click **Save**.
5. After 1–3 minutes your site is live at `https://YOUR-USERNAME.github.io/`.

Put that link on your LinkedIn profile, your resume header and in job applications.

## Alternative free hosts

- **Netlify Drop**: go to https://app.netlify.com/drop and drag the whole `manish-portfolio` folder onto the page. You get a live URL instantly.
- **Vercel**: https://vercel.com/new, import the GitHub repository, no build command needed.
- **Cloudflare Pages**: https://pages.cloudflare.com, connect the repository, no build command.

## Custom domain (optional)

Buy a domain such as `manishsuman.dev`, then in GitHub **Settings → Pages → Custom domain** enter it and add the DNS records GitHub shows you.
