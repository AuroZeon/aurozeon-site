/**
 * Scroll-triggered animations for home and product pages
 * Supports data-animate="fade-up|fade-down|fade-left|fade-right|zoom|slide-up|scale-in"
 * and data-stagger for staggered child animations
 */
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  // Observe elements with data-animate or data-stagger
  document.querySelectorAll('[data-animate], [data-stagger]').forEach((el) => {
    observer.observe(el);
  });

  // Add in-view to parent story-block when any child gets in-view (for hover effects)
  const storyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const block = entry.target.closest('.story-block');
          if (block) block.classList.add('in-view');
        }
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll('.story-content, .story-media').forEach((el) => {
    storyObserver.observe(el);
  });

  // Fallback: elements with .scroll-animate get fade-up
  document.querySelectorAll('.scroll-animate').forEach((el) => {
    if (!el.hasAttribute('data-animate')) {
      el.setAttribute('data-animate', 'fade-up');
      observer.observe(el);
    }
  });
})();
