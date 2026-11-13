const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('is-open')) {
      navLinks.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const legalAnchorPairs = {
  'delete-account': 'delete-account-ro',
  'withdrawal': 'withdrawal-ro',
  'privacy-policy-en': 'privacy-policy-ro',
  'terms-en': 'terms-ro'
};

function scrollToLocalizedLegalAnchor() {
  const id = location.hash.slice(1);
  const englishId = Object.keys(legalAnchorPairs).find(key =>
    key === id || legalAnchorPairs[key] === id);
  if (!englishId) return;

  const targetId = document.documentElement.classList.contains('lang-ro')
    ? legalAnchorPairs[englishId] : englishId;
  const target = document.getElementById(targetId);
  if (target) target.scrollIntoView({ behavior: 'auto' });
}

window.addEventListener('load', scrollToLocalizedLegalAnchor);
window.addEventListener('hashchange', scrollToLocalizedLegalAnchor);

document.querySelectorAll('.lang-btn').forEach(button => {
  button.addEventListener('click', () => {
    setTimeout(scrollToLocalizedLegalAnchor, 0);
  });
});

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href]');
  if (!link) return;

  const href = link.getAttribute('href');
  const fileName = location.pathname.split('/').pop();
  if (!href.startsWith('#') && !href.startsWith(fileName + '#')) return;

  const id = href.slice(href.lastIndexOf('#') + 1);
  if (Object.keys(legalAnchorPairs).some(key =>
    key === id || legalAnchorPairs[key] === id)) {
    setTimeout(scrollToLocalizedLegalAnchor, 0);
  }
});
