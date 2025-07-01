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

    // Contact form handler
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            if (name && email && message) {
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }

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