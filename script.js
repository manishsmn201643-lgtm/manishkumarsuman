/* Before publishing, update the CONTACT object with your real details. */
const CONTACT = {
  email: 'YOUR_EMAIL@example.com',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/'
};

const emailLink = document.getElementById('email-cta');
const copyButton = document.getElementById('copy-email');
const contactHint = document.getElementById('contact-hint');
const linkedinLink = document.getElementById('linkedin-link');
const githubLink = document.getElementById('github-link');

function isPlaceholder(value) {
  return !value || value.includes('YOUR_') || value.endsWith('example.com') || value.endsWith('linkedin.com/') || value.endsWith('github.com/');
}

if (!isPlaceholder(CONTACT.email)) {
  emailLink.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Freelance development inquiry')}`;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      copyButton.textContent = 'Email copied ✓';
      setTimeout(() => copyButton.textContent = 'Copy email address', 1800);
    } catch {
      contactHint.textContent = `Email me directly at ${CONTACT.email}`;
    }
  });
  contactHint.textContent = 'Prefer email? Use the button above to start a conversation.';
} else {
  copyButton.addEventListener('click', () => {
    contactHint.textContent = 'Open script.js and replace YOUR_EMAIL@example.com with your real email before publishing.';
  });
}

if (!isPlaceholder(CONTACT.linkedin)) linkedinLink.href = CONTACT.linkedin;
if (!isPlaceholder(CONTACT.github)) githubLink.href = CONTACT.github;
linkedinLink.target = '_blank'; linkedinLink.rel = 'noopener noreferrer';
githubLink.target = '_blank'; githubLink.rel = 'noopener noreferrer';
document.getElementById('year').textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.project-card, .service-card, .process-grid > div, .about-panel').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
