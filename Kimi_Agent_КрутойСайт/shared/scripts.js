/**
 * Маруся Guest House - Shared JavaScript Utilities
 * Boutique Mediterranean-Armenian Hospitality
 */

(function() {
  'use strict';

  // ============================================
  // Initialize Lucide Icons
  // ============================================
  function initLucideIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    } else {
      // Retry after a short delay if lucide isn't loaded yet
      setTimeout(initLucideIcons, 100);
    }
  }

  // ============================================
  // Mobile Navigation Toggle
  // ============================================
  function initMobileNav() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('mobile-menu-overlay');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    if (!menuToggle || !mobileMenu) return;

    function openMenu() {
      mobileMenu.classList.add('is-open');
      if (menuOverlay) menuOverlay.classList.add('is-visible');
      menuToggle.setAttribute('aria-expanded', 'true');
      if (menuIconOpen) menuIconOpen.classList.add('hidden');
      if (menuIconClose) menuIconClose.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      
      // Re-initialize icons in mobile menu
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }

    function closeMenu() {
      mobileMenu.classList.remove('is-open');
      if (menuOverlay) menuOverlay.classList.remove('is-visible');
      menuToggle.setAttribute('aria-expanded', 'false');
      if (menuIconOpen) menuIconOpen.classList.remove('hidden');
      if (menuIconClose) menuIconClose.classList.add('hidden');
      document.body.style.overflow = '';
    }

    menuToggle.addEventListener('click', function() {
      if (mobileMenu.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (menuClose) {
      menuClose.addEventListener('click', closeMenu);
    }

    if (menuOverlay) {
      menuOverlay.addEventListener('click', closeMenu);
    }

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMenu();
      }
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // ============================================
  // Scroll Header Effect
  // ============================================
  function initScrollHeader() {
    const header = document.getElementById('main-nav');
    if (!header) return;

    const scrollThreshold = 100;
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollThreshold) {
        header.classList.remove('is-transparent');
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
        header.classList.add('is-transparent');
      }

      lastScrollY = currentScrollY;
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });

    // Initial check
    updateHeader();
  }

  // ============================================
  // IntersectionObserver Helper for Scroll Animations
  // ============================================
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    if (animatedElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optionally unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(function(el) {
      observer.observe(el);
    });

    return observer;
  }

  // ============================================
  // Stagger Animation Helper
  // ============================================
  function initStaggerAnimations() {
    const staggerContainers = document.querySelectorAll('[data-stagger]');
    
    staggerContainers.forEach(function(container) {
      const children = container.children;
      const baseDelay = parseInt(container.dataset.stagger) || 100;
      
      Array.from(children).forEach(function(child, index) {
        child.classList.add('scroll-animate');
        child.style.transitionDelay = (index * baseDelay) + 'ms';
      });
    });
  }

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ============================================
  // Image Lazy Loading with Fade In
  // ============================================
  function initLazyImages() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if (lazyImages.length === 0) return;

    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('is-loaded');
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px'
    });

    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }

  // ============================================
  // Parallax Effect Helper
  // ============================================
  function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;

    let ticking = false;

    function updateParallax() {
      const scrollY = window.scrollY;
      
      parallaxElements.forEach(function(el) {
        const speed = parseFloat(el.dataset.parallax) || 0.5;
        const rect = el.getBoundingClientRect();
        
        // Only animate if element is in viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const yPos = -(scrollY - el.offsetTop) * speed;
          el.style.transform = 'translateY(' + yPos + 'px)';
        }
      });
      
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================
  // Form Validation Helper
  // ============================================
  function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(function(field) {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('is-invalid');
          } else {
            field.classList.remove('is-invalid');
          }
        });
        
        if (!isValid) {
          e.preventDefault();
        }
      });
    });
  }

  // ============================================
  // Back to Top Button
  // ============================================
  function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) return;

    const showThreshold = 500;

    function toggleVisibility() {
      if (window.scrollY > showThreshold) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ============================================
  // Active Navigation Link
  // ============================================
  function initActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-header a[href]');
    
    navLinks.forEach(function(link) {
      const linkPath = link.getAttribute('href');
      
      // Check if link matches current page
      if (linkPath && currentPath.includes(linkPath) && linkPath !== 'index.html') {
        link.classList.add('is-active');
      } else if (currentPath.endsWith('/') && linkPath === 'index.html') {
        link.classList.add('is-active');
      }
    });
  }

  // ============================================
  // Debounce Utility
  // ============================================
  window.debounce = function(func, wait) {
    let timeout;
    return function executedFunction() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // ============================================
  // Throttle Utility
  // ============================================
  window.throttle = function(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function() {
          inThrottle = false;
        }, limit);
      }
    };
  };

  // ============================================
  // Initialize Everything on DOM Ready
  // ============================================
  function init() {
    initLucideIcons();
    initMobileNav();
    initScrollHeader();
    initScrollAnimations();
    initStaggerAnimations();
    initSmoothScroll();
    initLazyImages();
    initParallax();
    initFormValidation();
    initBackToTop();
    initActiveNavLink();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-initialize icons after any dynamic content changes
  window.reinitIcons = function() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  };

})();
