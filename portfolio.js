const links = Array.from(document.querySelectorAll('.nav__link'));
const sections = Array.from(document.querySelectorAll('section[id]'));
const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
const scrollTriggers = Array.from(document.querySelectorAll('[data-scroll-target]'));
const homeVideo = document.querySelector('.home-video');
const fixedScroll = document.querySelector('.fixed-scroll');

function setActiveLink() {
  const y = window.scrollY + 120;
  let current = sections[0]?.id || 'home';
  let currentIndex = 0;

  sections.forEach((section, index) => {
    if (y >= section.offsetTop) {
      current = section.id;
      currentIndex = index;
    }
  });

  links.forEach((link) => {
    const href = link.getAttribute('href');
    const isActive = href === `#${current}`;
    link.classList.toggle('is-active', isActive);
  });

  if (fixedScroll) {
    const next = sections[currentIndex + 1];

    if (next) {
      const selector = `#${next.id}`;
      fixedScroll.setAttribute('href', selector);
      fixedScroll.setAttribute('data-scroll-target', selector);
      fixedScroll.style.opacity = '1';
      fixedScroll.style.pointerEvents = 'auto';
    } else {
      fixedScroll.style.opacity = '0';
      fixedScroll.style.pointerEvents = 'none';
    }
  }
}

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', href);
  });
});

scrollTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    const selector = trigger.getAttribute('data-scroll-target');
    if (!selector) return;

    const target = document.querySelector(selector);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', selector);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealEls.forEach((el) => observer.observe(el));

if (homeVideo) {
  const trimSeconds = 1;

  homeVideo.addEventListener('timeupdate', () => {
    if (!Number.isFinite(homeVideo.duration) || homeVideo.duration <= trimSeconds) return;

    if (homeVideo.currentTime >= homeVideo.duration - trimSeconds) {
      homeVideo.currentTime = 0;
      homeVideo.play().catch(() => {});
    }
  });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
