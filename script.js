document.addEventListener('DOMContentLoaded', () => {
    // Expandable cards - Clinical, Organizational and Mentoring
    document.querySelectorAll('.demand-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.demand-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    document.querySelectorAll('.org-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = card.classList.contains('active');
            document.querySelectorAll('.org-card').forEach(c => c.classList.remove('active'));
            if (!isActive) card.classList.add('active');
        });
    });

    document.querySelectorAll('.mentoria-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = card.classList.contains('active');
            document.querySelectorAll('.mentoria-card').forEach(c => c.classList.remove('active'));
            if (!isActive) card.classList.add('active');
        });
    });

    const policeHighlight = document.getElementById('police-mentorship');
    if (policeHighlight) {
        policeHighlight.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' || e.target.closest('a')) return;
            policeHighlight.classList.toggle('active');
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.demand-item') && !e.target.closest('.org-card') && !e.target.closest('.mentoria-card') && !e.target.closest('#police-mentorship')) {
            document.querySelectorAll('.demand-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.org-card').forEach(c => c.classList.remove('active'));
            document.querySelectorAll('.mentoria-card').forEach(m => m.classList.remove('active'));
            if (policeHighlight) policeHighlight.classList.remove('active');
        }
    });

    // 1. Scroll animations (IntersectionObserver)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Staggered delay for siblings
                const siblings = entry.target.parentElement.querySelectorAll('.fade-in-section');
                const index = Array.from(siblings).indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.12}s`;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

    // 2. Navbar scroll effect
    const nav = document.getElementById('nav');
    const handleScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // check on load

    // 3. Mobile hamburger menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');

    const toggleMenu = (open) => {
        const isOpen = open ?? !mobileMenu.classList.contains('active');
        hamburger.classList.toggle('active', isOpen);
        mobileMenu.classList.toggle('active', isOpen);
        overlay.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => toggleMenu());
    overlay.addEventListener('click', () => toggleMenu(false));
    mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => toggleMenu(false));
    });

    // 4. Smooth scroll (with nav offset)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const id = this.getAttribute('href');
            if (id === '#' || id === '#privacidade' || id === '#termos') return;
            e.preventDefault();
            const target = document.querySelector(id);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. 3D Tilt on pillar cards (desktop only)
    if (window.matchMedia('(hover: hover)').matches) {
        document.querySelectorAll('.pillar-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const r = card.getBoundingClientRect();
                const x = (e.clientX - r.left - r.width / 2) / 12;
                const y = (e.clientY - r.top - r.height / 2) / 12;
                card.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-10px)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // 6. Parallax hero (desktop only, requestAnimationFrame)
    if (window.matchMedia('(min-width: 769px)').matches) {
        const heroImg = document.querySelector('.hero-bg img');
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const y = window.pageYOffset;
                    if (heroImg && y < window.innerHeight) {
                        heroImg.style.transform = `translateY(${y * 0.35}px)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // 7. Mobile Carousel for Clinical Demands
    const demandsGrid = document.querySelector('.demands-grid');
    let carouselInterval;
    let isCarouselPaused = false;

    const startMobileCarousel = () => {
        if (window.innerWidth <= 600 && demandsGrid) {
            if (!carouselInterval) {
                const items = demandsGrid.querySelectorAll('.demand-item');
                let currentIndex = 0;
                
                carouselInterval = setInterval(() => {
                    if (isCarouselPaused) return;
                    currentIndex++;
                    if (currentIndex >= items.length) currentIndex = 0;
                    
                    const itemWidth = items[0].offsetWidth + 15; // width + gap
                    demandsGrid.scrollTo({
                        left: currentIndex * itemWidth,
                        behavior: 'smooth'
                    });
                }, 1500);

                // Pause on interaction
                demandsGrid.addEventListener('touchstart', () => isCarouselPaused = true, { passive: true });
                demandsGrid.addEventListener('touchend', () => {
                    setTimeout(() => isCarouselPaused = false, 3000); // Resume after 3s
                }, { passive: true });
            }
        } else {
            if (carouselInterval) {
                clearInterval(carouselInterval);
                carouselInterval = null;
            }
        }
    };

    startMobileCarousel();
    window.addEventListener('resize', startMobileCarousel);
});
