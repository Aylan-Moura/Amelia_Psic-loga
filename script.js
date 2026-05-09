/**
 * Premium Corporate Site - Interactive Features
 * Elegant animations for Amelia Psicolologa website
 */

(function() {
    'use strict';

    // ============================================
    // Header Scroll Effect
    // ============================================
    const initHeaderScroll = () => {
        const header = document.querySelector('.header');
        if (!header) return;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
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
            mobileToggle.addEventListener('click', () => {
                const isActive = mobileMenu.classList.contains('active');
                mobileMenu.classList.toggle('active');
                mobileToggle.classList.toggle('active');
                document.body.style.overflow = isActive ? '' : 'hidden';
            });

            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }
    };

    // ============================================
    // Parallax Effect for Hero
    // ============================================
    const initParallax = () => {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroBg = hero.querySelector('.hero__background');

            if (heroBg && scrolled < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
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