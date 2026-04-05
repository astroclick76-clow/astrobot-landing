// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        if (navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'rgba(26, 26, 46, 0.98)';
            navLinks.style.padding = '20px';
            navLinks.style.gap = '20px';
            navLinks.style.borderTop = '1px solid rgba(108, 99, 255, 0.2)';
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (navLinks && navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Add active class to nav links on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Simple count-up animation for stats
const stats = document.querySelectorAll('.stat h3');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stat = entry.target;
            const target = parseInt(stat.textContent);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 30);
            observer.unobserve(stat);
        }
    });
}, observerOptions);

stats.forEach(stat => observer.observe(stat));

// Demo video placeholder click
const videoPlaceholder = document.querySelector('.video-placeholder');
if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        alert('Demo video would play here. This is a prototype.');
    });
}

// Pricing card hover effect
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.3)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });
});

// Lead form submission
const leadForm = document.getElementById('lead-form');
const successMessage = document.getElementById('success-message');

if (leadForm && successMessage) {
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data (for demo purposes)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const exchange = document.getElementById('exchange').value;
        
        // Simulate API call
        setTimeout(() => {
            // Hide form, show success message
            leadForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Log to console (for debugging)
            console.log('Lead captured:', { name, email, exchange });
            
            // Optional: Reset form after a few seconds (if you want to show form again)
            // setTimeout(() => {
            //     leadForm.style.display = 'block';
            //     successMessage.style.display = 'none';
            //     leadForm.reset();
            // }, 5000);
        }, 800);
    });
}

// Other forms (if any) fallback
const otherForms = document.querySelectorAll('form:not(#lead-form)');
otherForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! This is a demo. In a real site, this would submit.');
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('AstroBot landing page loaded.');
});