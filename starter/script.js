// ============================================================================
// SCRIPT.JS — Reference build for the AI Partner Method kit
// ============================================================================
// Five features (in order):
//   1) Year auto-fill in footer
//   2) Sticky-nav scroll state (border + shadow appear after scroll)
//   3) Scroll reveal — IntersectionObserver, prefers-reduced-motion safe
//   4) Testimonial carousel — auto-advance, pause on hover, dot navigation
//   5) Accessibility — pause carousel when reduced motion is requested
// ============================================================================

(function () {
  'use strict';

  // ---------- 1) Year auto-fill ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ---------- 2) Sticky nav scroll state ----------
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------- 3) Scroll reveal ----------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    // Either user prefers reduced motion or browser is too old — show everything
    revealEls.forEach((el) => el.classList.add('in'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  // ---------- 4) Testimonial carousel ----------
  (function () {
    const carousel = document.getElementById('testimonialCarousel');
    if (!carousel) return;

    const testimonials = carousel.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('#carouselDots .dot');
    let currentIndex = 0;
    let autoTimer = null;
    const AUTO_INTERVAL_MS = 5000;

    function showTestimonial(index) {
      testimonials.forEach((t, i) => {
        const isActive = i === index;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-hidden', String(!isActive));
      });
      dots.forEach((d, i) => {
        const isActive = i === index;
        d.classList.toggle('active', isActive);
        d.setAttribute('aria-selected', String(isActive));
      });
      currentIndex = index;
    }

    function next() {
      showTestimonial((currentIndex + 1) % testimonials.length);
    }

    function startAuto() {
      stopAuto();
      if (prefersReducedMotion) return; // respect motion preferences
      autoTimer = setInterval(next, AUTO_INTERVAL_MS);
    }

    function stopAuto() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const i = parseInt(dot.dataset.index, 10);
        showTestimonial(i);
        startAuto(); // restart timer on manual interaction
      });
    });

    // Pause auto-advance on hover and on focus (keyboard users)
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);
    carousel.addEventListener('focusin', stopAuto);
    carousel.addEventListener('focusout', startAuto);

    // Keyboard navigation — arrow keys cycle testimonials
    document.addEventListener('keydown', (e) => {
      if (!document.activeElement || !carousel.contains(document.activeElement)) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        showTestimonial((currentIndex + 1) % testimonials.length);
        startAuto();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length);
        startAuto();
      }
    });

    startAuto();
  })();

  // ---------- 5) Smooth-scroll offset for sticky nav anchor links ----------
  const NAV_OFFSET = 88;
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#' || targetId === '#book') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top: offsetTop, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });
})();
