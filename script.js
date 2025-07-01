// Smooth scroll enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in copyright
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
        observer.observe(section);
    });


    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElement = document.querySelector('.float-animation');
        
        if (parallaxElement) {
            const speed = 0.5;
            parallaxElement.style.transform = `translateY(${scrolled * speed}px)`;
        }
    });
});

// Add fade-in animation class
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        opacity: 1 !important;
    }
`;
document.head.appendChild(style);