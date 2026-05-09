/**
 * Premium Site Enhancer - Animations
 * Modern, smooth animations for premium websites
 */

(function() {
  'use strict';

  // ============================================
  // Intersection Observer for scroll animations
  // ============================================
  const initScrollAnimations = () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-section, .fade-in-element, .scale-in').forEach(el => {
      observer.observe(el);
    });
  };

  // ============================================
  // Smooth Scroll for anchor links
  // ============================================
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  // ============================================
  // Navigation scroll effect
  // ============================================
  const initNavScroll = () => {
    const nav = document.querySelector('.premium-nav');
    if (!nav) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        nav.classList.add('premium-nav--scrolled');
      } else {
        nav.classList.remove('premium-nav--scrolled');
      }

      lastScroll = currentScroll;
    });
  };

  // ============================================
  // Parallax effect for hero background
  // ============================================
  const initParallax = () => {
    const hero = document.querySelector('.premium-hero__background');
    if (!hero) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.4;
      hero.style.transform = `translateY(${rate}px)`;
    });
  };

  // ============================================
  // Hover effects for cards
  // ============================================
  const initCardHover = () => {
    const cards = document.querySelectorAll('.premium-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  };

  // ============================================
  // Stagger animation for list items
  // ============================================
  const initStaggerAnimation = () => {
    const items = document.querySelectorAll('[class*="stagger"]');
    items.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, index * 100);
            observer.unobserve(item);
          }
        });
      }, { threshold: 0.2 });

      observer.observe(item);
    });
  };

  // ============================================
  // Button ripple effect
  // ============================================
  const initButtonRipple = () => {
    const buttons = document.querySelectorAll('.premium-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.cssText = `
          position: absolute;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          pointer-events: none;
          width: 100px;
          height: 100px;
          left: ${x - 50}px;
          top: ${y - 50}px;
          transform: scale(0);
          animation: ripple 0.6s linear;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });

    // Add ripple keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  };

  // ============================================
  // Image lazy loading with fade
  // ============================================
  const initLazyLoad = () => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    }, { rootMargin: '50px' });

    images.forEach(img => imageObserver.observe(img));
  };

  // ============================================
  // Typing effect for hero text
  // ============================================
  const initTypingEffect = () => {
    const element = document.querySelector('.premium-hero__subtitle');
    if (!element) return;

    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';

    let i = 0;
    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, 30);
      }
    };

    setTimeout(type, 800);
  };

  // ============================================
  // Initialize all animations
  // ============================================
  const init = () => {
    // Wait for DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initScrollAnimations();
        initSmoothScroll();
        initNavScroll();
        initParallax();
        initCardHover();
        initStaggerAnimation();
        initButtonRipple();
        initLazyLoad();
      });
    } else {
      initScrollAnimations();
      initSmoothScroll();
      initNavScroll();
      initParallax();
      initCardHover();
      initStaggerAnimation();
      initButtonRipple();
      initLazyLoad();
    }
  };

  init();
})();