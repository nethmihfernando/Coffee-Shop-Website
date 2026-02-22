/**
 * Dynamic Shop Status Logic
 * Checks if the shop is currently open based on user's local time
 */
function updateShopStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday...
    const hour = now.getHours();
    
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    
    // Safety check if elements exist
    if (!statusDot || !statusText) return;

    let isOpen = false;

    // Weekdays (Mon-Fri) 7am - 6pm
    if (day >= 1 && day <= 5) {
        if (hour >= 7 && hour < 18) isOpen = true;
    } 
    // Weekend (Sat-Sun) 8am - 4pm
    else {
        if (hour >= 8 && hour < 16) isOpen = true;
    }

    if (isOpen) {
        statusDot.className = 'dot open-dot';
        statusText.innerText = 'We are currently Open! Come say hi.';
    } else {
        statusDot.className = 'dot closed-dot';
        statusText.innerText = 'Closed now. Opening at ' + (day >= 5 ? '7am' : '8am') + ' tomorrow.';
    }
}

/**
 * Initialize animations and status
 */
function init() {
    updateShopStatus();

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Fade-in effects
    const observerOptions = {
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

    document.querySelectorAll('.menu-item').forEach(item => {
        // Initial state for animation
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });
}

// Start everything when DOM is ready
document.addEventListener('DOMContentLoaded', init);


//Navigation of Testimonials
const wrapper = document.getElementById('slide-wrapper');
const list = document.getElementById('testimonials-list');
const dotsContainer = document.getElementById('dots-container');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');

const testimonials = document.querySelectorAll('.testimonials');
const scrollAmount = 320; // Adjust based on card width + gap

// 1. Create Dots based on number of testimonials
testimonials.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot-nav');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        wrapper.scrollTo({
            left: index * scrollAmount,
            behavior: 'smooth'
        });
    });
    dotsContainer.appendChild(dot);
});

// 2. Arrow Click Logic
nextBtn.addEventListener('click', () => {
    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// 3. Update Dots on Scroll
wrapper.addEventListener('scroll', () => {
    const index = Math.round(wrapper.scrollLeft / scrollAmount);
    const dots = document.querySelectorAll('.dot-nav');
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
});