function openLightbox(src, captionKeyOrText) {
  const modal = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  img.src = src;
  const translatedCaption = (window.getMoneticTranslation && typeof window.getMoneticTranslation === 'function')
    ? window.getMoneticTranslation(captionKeyOrText, captionKeyOrText)
    : captionKeyOrText;
  img.alt = translatedCaption;
  cap.innerHTML = translatedCaption;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  if (event && event.stopPropagation) {
    event.stopPropagation();
  }
  const modal = document.getElementById('lightbox');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// Module Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');

    document.querySelectorAll('.tour-item').forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'grid';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Mobile Nav Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile nav when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile nav when tapping outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('is-open')) {
      navLinks.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

document.querySelectorAll('[data-lightbox-src]').forEach(thumb => {
  thumb.addEventListener('click', () => {
    openLightbox(thumb.dataset.lightboxSrc, thumb.dataset.lightboxCaption);
  });
});

document.querySelectorAll('[data-lightbox-close]').forEach(element => {
  element.addEventListener('click', closeLightbox);
});

document.querySelector('[data-lightbox-dialog]').addEventListener('click', event => {
  event.stopPropagation();
});
