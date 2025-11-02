// Space AI Cursor System
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';

// Create cursor ring
const cursorRing = document.createElement('div');
cursorRing.className = 'custom-cursor-ring';
cursor.appendChild(cursorRing);

// Create cursor core
const cursorCore = document.createElement('div');
cursorCore.className = 'custom-cursor-core';
cursor.appendChild(cursorCore);

// Create cursor particles container
const cursorParticles = document.createElement('div');
cursorParticles.className = 'custom-cursor-particles';
cursor.appendChild(cursorParticles);

// Create orbiting particles
const particleCount = 6;
for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'cursor-particle';
    particle.style.animationDelay = `${i * (4 / particleCount)}s`;
    cursorParticles.appendChild(particle);
}

document.body.appendChild(cursor);

// Ensure cursor is always visible
cursor.style.opacity = '1';
cursor.style.visibility = 'visible';
cursor.style.display = 'block';
cursor.style.left = '0px';
cursor.style.top = '0px';

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// Initialize cursor position immediately
cursor.style.transform = 'translate3d(0px, 0px, 0) translate(-50%, -50%)';

// Throttled mousemove for better performance
let lastMouseUpdate = 0;
const mouseUpdateInterval = 16; // ~60fps

document.addEventListener('mousemove', (e) => {
    const now = performance.now();
    if (now - lastMouseUpdate >= mouseUpdateInterval) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        lastMouseUpdate = now;
        // Ensure cursor is visible when mouse moves
        cursor.style.opacity = '1';
        cursor.style.visibility = 'visible';
        cursor.style.display = 'block';
    }
});

// Optimized cursor animation with GPU acceleration
function animateCursor() {
    const lerpSpeed = 0.15;
    cursorX += (mouseX - cursorX) * lerpSpeed;
    cursorY += (mouseY - cursorY) * lerpSpeed;
    
    // Use transform instead of left/top for better performance
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    // Ensure cursor is always visible
    cursor.style.opacity = '1';
    cursor.style.visibility = 'visible';
    cursor.style.display = 'block';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Click effect
document.addEventListener('click', (e) => {
    // Add click animation to cursor
    cursor.classList.add('click');
    setTimeout(() => cursor.classList.remove('click'), 300);
    
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
});

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .btn, .service-card, .portfolio-item, .stat-item, .nav-link');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
});

// Create space particles - Clean & Elegant
function createSpaceParticles() {
    const particlesContainer = document.getElementById('particles');
    // Optimized: Reduced particles for better performance
    const particleCount = window.innerWidth < 768 ? 20 : 35; // Less on mobile
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 25 + 's';
        const duration = 20 + Math.random() * 15; // 20-35s (slightly faster)
        particle.style.animationDuration = duration + 's';
        // Add random drift for parallax effect
        const drift = (Math.random() - 0.5) * 1.5; // Reduced range
        particle.style.setProperty('--drift', drift);
        // Random size variation for depth
        const size = 1.5 + Math.random() * 1.5; // 1.5-3px
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        // GPU acceleration
        particle.style.willChange = 'transform, opacity';
        particlesContainer.appendChild(particle);
    }
}

// Shooting Stars Effect - Magical!
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.left = Math.random() * 100 + '%';
    shootingStar.style.top = '-10px';
    shootingStar.style.opacity = '0';
    
    document.body.appendChild(shootingStar);
    
    setTimeout(() => {
        shootingStar.style.opacity = '1';
        shootingStar.style.transition = 'none';
        shootingStar.style.transform = `translate(${Math.random() * 200 - 100}px, ${window.innerHeight + 200}px) rotate(45deg)`;
        shootingStar.style.transition = 'transform 2s linear, opacity 2s linear';
        
        setTimeout(() => {
            shootingStar.remove();
        }, 2000);
    }, 100);
}

// Create shooting stars periodically (less frequent for performance)
setInterval(() => {
    if (Math.random() > 0.7) { // 30% chance (reduced)
        createShootingStar();
    }
}, 5000); // Less frequent (5s instead of 3s)

createSpaceParticles();

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Scroll Effect with Animation
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Animate nav links on scroll
    if (currentScroll > lastScroll && currentScroll > 200) {
        navMenu.style.transform = 'translateY(-5px)';
    } else {
        navMenu.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Disable cursor on mobile
if (window.matchMedia('(max-width: 768px)').matches) {
    cursor.style.display = 'none';
    cursorTrails.forEach(trail => {
        trail.element.style.display = 'none';
    });
}

// Animated Counter for Stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
};

// Intersection Observer for Stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const target = parseInt(statNumber.getAttribute('data-target'));
            if (!statNumber.classList.contains('animated')) {
                animateCounter(statNumber, target);
                statNumber.classList.add('animated');
            }
        }
    });
}, { threshold: 0.5 });

const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        formMessage.style.display = 'none';
        
        try {
            const response = await fetch('contact.php', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                formMessage.textContent = data.message;
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                contactForm.reset();
                
                // Scroll to message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                formMessage.textContent = data.message || 'An error occurred. Please try again.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            }
        } catch (error) {
            formMessage.textContent = 'Network error. Please try again later.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
}

// Fade in animation on scroll
const fadeInElements = document.querySelectorAll('.service-card, .portfolio-item, .info-item');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeInObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(element);
});

// Language switching preservation
window.addEventListener('load', () => {
    // Preserve language selection in session
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // The language switch happens via URL parameter
            // This ensures smooth transition
        });
    });
});

// Add active state to current section in navigation
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

