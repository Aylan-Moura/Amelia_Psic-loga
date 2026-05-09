/**
 * Premium Corporate Site - Interactive Features
 * Optimized for performance
 */

(function() {
    'use strict';

    // Throttle helper for scroll events
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            if (!inThrottle) {
                func.apply(this, arguments);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    // ============================================
    // Header Scroll Effect (optimized)
    // ============================================
    const initHeaderScroll = () => {
        const header = document.querySelector('.header');
        if (!header) return;

        const onScroll = throttle(() => {
            const currentScroll = window.pageYOffset;
            header.classList.toggle('scrolled', currentScroll > 50);
        }, 100);

        window.addEventListener('scroll', onScroll, { passive: true });
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
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // ============================================
    // Mobile Navigation
    // ============================================
    const initMobileNav = () => {
        const mobileToggle = document.querySelector('.header__mobile-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const closeBtn = document.querySelector('.mobile-menu__close');
        const mobileLinks = document.querySelectorAll('.mobile-menu__nav a');

        if (mobileToggle && mobileMenu) {
            const toggleMenu = () => {
                const isActive = mobileMenu.classList.contains('active');
                mobileMenu.classList.toggle('active');
                mobileToggle.classList.toggle('active');
                document.body.style.overflow = isActive ? '' : 'hidden';
            };

            mobileToggle.addEventListener('click', toggleMenu);

            if (closeBtn) {
                closeBtn.addEventListener('click', toggleMenu);
            }

            mobileLinks.forEach(link => {
                link.addEventListener('click', toggleMenu);
            });
        }
    };

    // ============================================
    // Parallax Effect for Hero (optimized with throttle)
    // ============================================
    const initParallax = () => {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        const heroBg = hero.querySelector('.hero__background');
        if (!heroBg) return;

        const onScroll = throttle(() => {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        }, 16);

        window.addEventListener('scroll', onScroll, { passive: true });
    };

    // ============================================
    // Scroll Reveal Animation
    // ============================================
    const initScrollReveal = () => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Add animation to sections
        const sections = document.querySelectorAll('.about, .services, .features, .contact, .faq');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = `opacity 0.8s ease, transform 0.8s ease ${index * 0.1}s`;
            observer.observe(section);
        });
    };

    // ============================================
    // FAQ Accordion
    // ============================================
    const initFaqAccordion = () => {
        const faqItems = document.querySelectorAll('.faq__item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq__question');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all others
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });

                // Toggle current
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    };

    // ============================================
    // Service Cards Hover Effect
    // ============================================
    const initCardAnimation = () => {
        const cards = document.querySelectorAll('.service-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        });
    };

    // ============================================
    // Intersection Observer for Features
    // ============================================
    const initFeaturesAnimation = () => {
        const features = document.querySelectorAll('.feature');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 150);
                }
            });
        }, observerOptions);

        features.forEach((feature, index) => {
            feature.style.opacity = '0';
            feature.style.transform = 'translateY(20px)';
            feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(feature);
        });
    };

    // ============================================
    // Lazy Loading for Images
    // ============================================
    const initLazyLoad = () => {
        const images = document.querySelectorAll('img[loading="lazy"]');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.style.opacity = '1';
                        imageObserver.unobserve(img);
                    }
                });
            }, { rootMargin: '50px' });

            images.forEach(img => {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                imageObserver.observe(img);
            });
        } else {
            images.forEach(img => img.style.opacity = '1');
        }
    };

    // ============================================
    // Initialize all functions
    // ============================================
    const init = () => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initHeaderScroll();
                initSmoothScroll();
                initMobileNav();
                initParallax();
                initScrollReveal();
                initCardAnimation();
                initFeaturesAnimation();
                initLazyLoad();
                initFaqAccordion();
            });
        } else {
            initHeaderScroll();
            initSmoothScroll();
            initMobileNav();
            initParallax();
            initScrollReveal();
            initCardAnimation();
            initFeaturesAnimation();
            initLazyLoad();
            initFaqAccordion();
        }
    };

    init();
})();