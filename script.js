// =========================
// Sticky Header on Scroll
// =========================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// =========================
// Mobile Menu Toggle
// =========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// =========================
// Smooth Scrolling for Anchor Links
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =========================
// Fade-in Animation on Scroll
// =========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in-section class
const fadeElements = document.querySelectorAll('.fade-in-section');
fadeElements.forEach(element => {
    observer.observe(element);
});

// =========================
// Scroll to Top Button
// =========================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =========================
// WhatsApp Float Button Animation
// =========================
const whatsappFloat = document.getElementById('whatsapp-float');

// Add hover effect with scale
whatsappFloat.addEventListener('mouseenter', () => {
    whatsappFloat.style.transform = 'scale(1.1) rotate(5deg)';
});

whatsappFloat.addEventListener('mouseleave', () => {
    whatsappFloat.style.transform = 'scale(1) rotate(0deg)';
});

// =========================
// Active Navigation Link Highlight
// =========================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// =========================
// Initialize on Page Load
// =========================
document.addEventListener('DOMContentLoaded', () => {
    // Add initial fade-in to hero content
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Preload images
    const images = [
        'https://github.com/user-attachments/assets/ef66ae01-632a-47bc-a1e0-04ae79c60dfb',
        'https://github.com/user-attachments/assets/b48ed8a2-c91c-4476-9663-b6824c6153cf',
        'https://github.com/user-attachments/assets/8778defd-8fb3-4818-9fc9-742fd23dea02'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    console.log('قطمافينو - Landing page loaded successfully! 🎉');
});

// =========================
// Performance: Debounce Scroll Events
// =========================
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(highlightNavigation, 10));
