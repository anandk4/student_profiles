/* ==========================================================================
   Department of Artificial Intelligence — School of Skill Sciences
   Shared site behaviour
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.classList.toggle('is-active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu after a nav link is clicked
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.classList.remove('is-active');
      });
    });
  }

  /* ---------- Active nav link highlighting ---------- */
  var currentPage = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.main-nav a, .quick-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var linkPage = href.split('/').pop();
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---------- Scroll reveal animation ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) { observer.observe(el); });

    // Safety net: if for any reason the observer doesn't fire (e.g. an
    // interrupted layout pass), make sure content never stays hidden.
    window.setTimeout(function () {
      revealEls.forEach(function (el) { el.classList.add('in-view'); });
    }, 2500);
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---------- Back to top button ---------- */
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('show', window.scrollY > 480);
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Render student cards from students/students-data.js ----------
     Builds a card for every student in STUDENTS_DATA. If a student has
     hasPage:true the card is a real link to their own page in
     students/pages/; otherwise it renders as a non-clickable card tagged
     "Profile coming soon". Photos use the "photo" field with an automatic
     fallback to an initials circle if the image is missing or fails to load. */
  function createStudentCard(s, opts) {
    opts = opts || {};
    var sizeClass = opts.large ? '' : ' sm';
    var tag = s.hasPage ? 'a' : 'div';
    var card = document.createElement(tag);
    card.className = 'card student-card';
    if (s.hasPage) card.setAttribute('href', 'students/pages/' + s.slug + '.html');
    card.setAttribute('data-name', (s.name || '').toLowerCase());
    card.setAttribute('data-batch', s.batch || '');

    if (opts.showRank && s.rank) {
      var badge = document.createElement('span');
      badge.className = 'rank-badge';
      badge.textContent = 'Featured';
      card.appendChild(badge);
    }

    var avatar;
    if (s.photo) {
      avatar = document.createElement('img');
      avatar.src = s.photo;
      avatar.alt = s.name;
      avatar.className = 'avatar-circle avatar-img' + sizeClass;
      avatar.addEventListener('error', function () {
        var fallback = document.createElement('div');
        fallback.className = 'avatar-circle' + sizeClass;
        fallback.textContent = s.initials;
        avatar.replaceWith(fallback);
      });
    } else {
      avatar = document.createElement('div');
      avatar.className = 'avatar-circle' + sizeClass;
      avatar.textContent = s.initials;
    }
    card.appendChild(avatar);

    var h4 = document.createElement('h4');
    h4.textContent = s.name;
    card.appendChild(h4);

    var meta = document.createElement('p');
    meta.className = 'student-meta';
    meta.textContent = s.batchLabel || '';
    card.appendChild(meta);

    if (!s.hasPage) {
      var soon = document.createElement('span');
      soon.className = 'tag';
      soon.style.marginTop = '6px';
      soon.textContent = 'Profile coming soon';
      card.appendChild(soon);
    }

    return card;
  }

  if (typeof STUDENTS_DATA !== 'undefined') {
    var topContainer = document.getElementById('top-students-grid') || document.getElementById('home-top-students-grid');
    if (topContainer) {
      var topStudents = STUDENTS_DATA
        .filter(function (s) { return !!s.rank; })
        .sort(function (a, b) { return a.rank - b.rank; })
        .slice(0, 9);
      var isCompact = topContainer.id === 'home-top-students-grid';
      topStudents.forEach(function (s) {
        topContainer.appendChild(createStudentCard(s, { showRank: true, large: !isCompact }));
      });
    }

    var directoryContainer = document.getElementById('student-grid');
    if (directoryContainer) {
      STUDENTS_DATA.forEach(function (s) {
        directoryContainer.appendChild(createStudentCard(s, { showRank: false, large: true }));
      });
    }
  }

  /* ---------- Student directory: search + filter (students.html) ---------- */
  var studentGrid = document.getElementById('student-grid');
  if (studentGrid) {
    var searchInput = document.getElementById('student-search');
    var filterBtns = document.querySelectorAll('[data-batch-filter]');
    var cards = Array.prototype.slice.call(studentGrid.querySelectorAll('.student-card'));
    var emptyState = document.getElementById('student-empty');
    var activeBatch = 'all';

    function applyStudentFilters() {
      var term = (searchInput && searchInput.value || '').trim().toLowerCase();
      var visibleCount = 0;

      cards.forEach(function (card) {
        var name = (card.getAttribute('data-name') || '').toLowerCase();
        var batch = card.getAttribute('data-batch') || '';
        var matchesTerm = !term || name.indexOf(term) !== -1;
        var matchesBatch = activeBatch === 'all' || batch === activeBatch;
        var visible = matchesTerm && matchesBatch;
        card.style.display = visible ? '' : 'none';
        if (visible) visibleCount++;
      });

      if (emptyState) emptyState.classList.toggle('show', visibleCount === 0);
    }

    if (searchInput) {
      searchInput.addEventListener('input', applyStudentFilters);
    }

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        activeBatch = btn.getAttribute('data-batch-filter');
        applyStudentFilters();
      });
    });
  }

  /* ---------- Project filter (projects.html) ---------- */
  var projectGrid = document.getElementById('project-grid');
  if (projectGrid) {
    var projectFilterBtns = document.querySelectorAll('[data-project-filter]');
    var projectCards = Array.prototype.slice.call(projectGrid.querySelectorAll('.project-card'));

    projectFilterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        projectFilterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-project-filter');

        projectCards.forEach(function (card) {
          var category = card.getAttribute('data-category');
          card.style.display = (filter === 'all' || category === filter) ? '' : 'none';
        });
      });
    });
  }

  /* ---------- Contact form validation (contact.html) ---------- */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    var successBox = document.getElementById('form-success');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      var fields = [
        { id: 'contact-name', check: function (v) { return v.trim().length > 1; } },
        { id: 'contact-email', check: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); } },
        { id: 'contact-subject', check: function (v) { return v.trim().length > 2; } },
        { id: 'contact-message', check: function (v) { return v.trim().length > 9; } }
      ];

      fields.forEach(function (field) {
        var input = document.getElementById(field.id);
        if (!input) return;
        var group = input.closest('.form-group');
        var ok = field.check(input.value || '');
        if (group) group.classList.toggle('has-error', !ok);
        if (!ok) valid = false;
      });

      if (valid) {
        contactForm.reset();
        if (successBox) successBox.classList.add('show');
      } else if (successBox) {
        successBox.classList.remove('show');
      }
    });
  }

});
