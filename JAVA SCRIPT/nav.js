document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var overlay = document.getElementById('site-nav-overlay');
  var closeBtn = document.querySelector('.nav-overlay-close');

  if (!toggle || !overlay) return;

  function openNav() {
    overlay.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    overlay.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function () {
    var isOpen = overlay.classList.contains('is-open');
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeNav);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeNav();
    }
  });
});
