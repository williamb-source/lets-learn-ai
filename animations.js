// Intersection Observer for scroll-triggered animations
document.addEventListener('DOMContentLoaded', () => {

    // Elements to animate on scroll
    const animateElements = [
        'section',
        '.intro-section',
        '.tool-card',
        '.principle-card',
        '.use-case',
        '.tip',
        '.workflow-card',
        '.mistake-card',
        '.provider-card',
        '.reliability-card',
        '.trend-item',
        '.timing-card',
        '.resource-card',
        '.prompt-pattern',
        '.comparison-card',
        '.rec-item',
        '.decision-item',
        '.context-comparison',
        '.matrix-row'
    ];

    // Create observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // For stagger children, add visible after a small delay
                if (entry.target.classList.contains('stagger-children')) {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, observerOptions);

    // Observe all elements
    animateElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            observer.observe(el);
        });
    });

    // Add stagger-children class to grids
    const staggerGrids = [
        '.tools-grid',
        '.use-cases-grid',
        '.principles-grid',
        '.mistakes-grid',
        '.provider-grid',
        '.reliability-grid',
        '.resources-grid',
        '.tips-list',
        '.prompts-list',
        '.trends-list',
        '.workflow-examples',
        '.rec-list'
    ];

    staggerGrids.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('stagger-children');
            observer.observe(el);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add subtle parallax to zen circle
    const zenCircle = document.querySelector('.zen-circle');
    if (zenCircle) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.15;
            zenCircle.style.transform = `translateY(calc(-50% + ${rate}px))`;
        }, { passive: true });
    }

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 10, 9, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.borderBottom = '1px solid var(--border-color)';
            } else {
                navbar.style.background = 'transparent';
                navbar.style.backdropFilter = 'none';
                navbar.style.borderBottom = 'none';
            }
        }, { passive: true });
    }

    // Animate bar fills when visible
    const barFills = document.querySelectorAll('.bar-fill, .stat-fill');
    barFills.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';

        const barObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 300);
                    barObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        barObserver.observe(bar);
    });
});
