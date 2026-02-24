// Main Application
(function() {
  'use strict';

  // Page routes
  const routes = {
    '': 'home',
    'home': 'home',
    'about': 'about',
    'products': 'products',
    'gallery': 'gallery',
    'faq': 'faq',
    'contact': 'contact'
  };

  // Load page content
  async function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    try {
      // Show loading state
      mainContent.style.opacity = '0.5';

      // Fetch page content
      const response = await fetch(`pages/${page}.html`);
      if (!response.ok) throw new Error('Page not found');

      const html = await response.text();

      // Update content
      mainContent.innerHTML = html;
      mainContent.style.opacity = '1';

      // Apply translations
      if (window.i18n && window.i18n.applyTranslations) {
        window.i18n.applyTranslations();
      }

      // Initialize page-specific features
      initPageFeatures(page);

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Update active nav links
      updateActiveNavLinks();

    } catch (error) {
      console.error('Error loading page:', error);
      mainContent.innerHTML = '<div class="container section"><h1>Page not found</h1></div>';
      mainContent.style.opacity = '1';
    }
  }

  // Initialize page-specific features
  function initPageFeatures(page) {
    // Always initialize scroll reveal for all pages
    initScrollReveal();

    // Initialize page-specific features
    switch (page) {
      case 'faq':
        initFAQ();
        break;
      case 'contact':
        initContactForm();
        break;
      case 'gallery':
        initGallery();
        break;
    }
  }

  // Initialize scroll reveal animation
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // Initialize FAQ accordion
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');

      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all items
        faqItems.forEach(i => i.classList.remove('active'));

        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  // Initialize contact form
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = {
        name: form.querySelector('[name="name"]').value,
        email: form.querySelector('[name="email"]').value,
        phone: form.querySelector('[name="phone"]').value,
        message: form.querySelector('[name="message"]').value
      };

      // Validate
      if (!formData.name || !formData.message) {
        alert(window.i18n.get('contact.form.error') || 'Please fill in required fields');
        return;
      }

      // Show loading state
      const submitBtn = form.querySelector('[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      // Simulate form submission (in real app, this would be an API call)
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;

        // Show success message
        alert(window.i18n.get('contact.form.success') || 'Your inquiry has been sent!');

        // Reset form
        form.reset();
      }, 1000);
    });
  }

  // Initialize gallery
  function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          // Simple lightbox effect (could be enhanced with a modal)
          const lightbox = document.createElement('div');
          lightbox.className = 'lightbox';
          lightbox.innerHTML = `
            <div class="lightbox-content">
              <img src="${img.src}" alt="${img.alt}">
            </div>
          `;

          lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            animation: fadeIn 0.3s ease;
          `;

          const content = lightbox.querySelector('.lightbox-content');
          content.style.cssText = `
            max-width: 90vw;
            max-height: 90vh;
          `;

          const lightboxImg = lightbox.querySelector('img');
          lightboxImg.style.cssText = `
            max-width: 100%;
            max-height: 90vh;
            object-fit: contain;
          `;

          lightbox.addEventListener('click', () => {
            lightbox.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => lightbox.remove(), 300);
          });

          document.body.appendChild(lightbox);
        }
      });
    });
  }

  // Update active navigation links
  function updateActiveNavLinks() {
    const currentHash = window.location.hash.slice(1) || 'home';

    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const linkPage = href.replace('#', '') || 'home';
        if (linkPage === currentHash) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  // Handle route changes
  function handleRoute() {
    const hash = window.location.hash.slice(1);
    const page = routes[hash] || 'home';
    loadPage(page);
  }

  // Initialize header scroll effect
  function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // Initialize mobile menu
  function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const backdrop = mobileNav?.querySelector('.mobile-nav-backdrop');
    const navLinks = mobileNav?.querySelectorAll('.nav-link');

    if (!mobileMenuBtn || !mobileNav) return;

    // Toggle menu
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });

    // Close on backdrop click
    backdrop?.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
    });

    // Close on nav link click
    navLinks?.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    });
  }

  // Initialize application
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initHeader();
    initMobileMenu();

    // Handle initial route
    handleRoute();

    // Listen for hash changes
    window.addEventListener('hashchange', handleRoute);

    // Handle navigation clicks
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          // Let the browser handle the hash change
          updateActiveNavLinks();
        }
      });
    });
  });
})();
