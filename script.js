// =========================
// Dynamic Menu Generation
// =========================

function generateMenu() {
    const menuTabsContainer = document.getElementById('menu-tabs');
    const menuContentContainer = document.getElementById('menu-content');
    
    if (!menuTabsContainer || !menuContentContainer) return;
    
    // Clear existing content
    menuTabsContainer.innerHTML = '';
    menuContentContainer.innerHTML = '';
    
    // Generate tabs and content for each category
    menuData.categories.forEach((category, index) => {
        // Create tab button
        const tabButton = document.createElement('button');
        tabButton.className = `menu-tab ${index === 0 ? 'active' : ''}`;
        tabButton.setAttribute('data-category', category.id);
        tabButton.innerHTML = `
            <i class="${category.icon}"></i>
            <span>${category.name}</span>
        `;
        menuTabsContainer.appendChild(tabButton);
        
        // Create category content
        const categoryContent = document.createElement('div');
        categoryContent.className = `menu-category-content ${index === 0 ? 'active' : ''}`;
        categoryContent.id = category.id;
        
        // Create items grid
        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'menu-items-grid';
        
        // Generate menu items
        category.items.forEach(item => {
            const itemCard = createMenuItem(item);
            itemsGrid.appendChild(itemCard);
        });
        
        categoryContent.appendChild(itemsGrid);
        menuContentContainer.appendChild(categoryContent);
    });
    
    // Attach event listeners to tabs
    attachTabListeners();
    
    // Attach event listeners to order buttons
    attachOrderButtonListeners();
}

function createMenuItem(item) {
    const card = document.createElement('div');
    card.className = 'menu-item-card fade-in-section';
    
    // Create badge HTML if exists
    const badgeHTML = item.badge ? `
        <div class="menu-item-badge ${item.badge.type}">
            ${item.badge.text}
        </div>
    ` : '';
    
    card.innerHTML = `
        <div class="menu-item-image">
            <img src="${item.image}" alt="${item.name}">
            ${badgeHTML}
        </div>
        <div class="menu-item-content">
            <h4 class="menu-item-title">${item.name}</h4>
            <p class="menu-item-description">${item.description}</p>
            <div class="menu-item-footer">
                <span class="menu-item-price">${formatPrice(item.price)} <small>جنيه</small></span>
                <button class="add-to-order-btn" data-item="${item.name}" data-price="${item.price}">
                    <i class="fas fa-plus"></i>
                    <span>اطلب</span>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function formatPrice(price) {
    // Convert to Arabic numerals
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return price.toString().split('').map(digit => arabicNumerals[parseInt(digit)] || digit).join('');
}

function attachTabListeners() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuCategories = document.querySelectorAll('.menu-category-content');
    
    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            menuTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all category contents
            menuCategories.forEach(category => {
                category.classList.remove('active');
            });
            
            // Show selected category
            const categoryId = tab.getAttribute('data-category');
            const selectedCategory = document.getElementById(categoryId);
            if (selectedCategory) {
                selectedCategory.classList.add('active');
                
                // Re-observe fade-in elements in the newly displayed category
                const fadeElements = selectedCategory.querySelectorAll('.fade-in-section');
                fadeElements.forEach(element => {
                    observer.observe(element);
                });
            }
        });
    });
}

function attachOrderButtonListeners() {
    const addToOrderButtons = document.querySelectorAll('.add-to-order-btn');
    
    addToOrderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item');
            const itemPrice = this.getAttribute('data-price');
            
            // WhatsApp message
            const message = `مرحباً! أريد طلب:\n${itemName}\nالسعر: ${formatPrice(parseInt(itemPrice))} جنيه`;
            const whatsappUrl = `https://wa.me/201016852128?text=${encodeURIComponent(message)}`;
            
            // Visual feedback
            this.innerHTML = '<i class="fas fa-check"></i><span>تم الإضافة</span>';
            this.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';
            this.style.color = '#fff';
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-plus"></i><span>اطلب</span>';
                this.style.background = '';
                this.style.color = '';
            }, 1500);
            
            // Open WhatsApp after short delay
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 500);
        });
    });
}

// =========================
// Header Scroll Effect
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
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
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
            const offsetTop = target.offsetTop - 90; // Account for fixed header
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
            // Unobserve after animation to improve performance
            observer.unobserve(entry.target);
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
// const whatsappFloat = document.getElementById('whatsapp-float');

// Add click tracking
// whatsappFloat.addEventListener('click', () => {
//     console.log('WhatsApp button clicked');
// });

// =========================
// Active Navigation Link Highlight
// =========================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink?.classList.add('active');
        }
    });
}

window.addEventListener('scroll', debounce(highlightNavigation, 10));

// =========================
// Initialize on Page Load
// =========================
document.addEventListener('DOMContentLoaded', () => {
    // Generate dynamic menu first
    generateMenu();
    
    // Add initial fade-in to hero content
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Lazy load images for better performance
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Observe fade-in elements after menu generation
    const allFadeElements = document.querySelectorAll('.fade-in-section');
    allFadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Menu Item Cards Hover Effect
    const menuCards = document.querySelectorAll('.menu-item-card');
    menuCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Log successful initialization
    console.log('🎉 قطمافينو - Landing page loaded successfully!');
    console.log('📱 Mobile Menu: Ready');
    console.log('📜 Menu Tabs: Initialized');
    console.log('🍔 Dynamic Menu: Generated with', menuData.categories.length, 'categories');
    console.log('🎨 Animations: Active');
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

// =========================
// Keyboard Navigation Enhancement
// =========================
document.addEventListener('keydown', (e) => {
    // Press 'M' to toggle mobile menu
    if (e.key === 'm' || e.key === 'M') {
        if (window.innerWidth <= 768) {
            hamburger.click();
        }
    }
    
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// =========================
// Dynamic Copyright Year
// =========================
const updateCopyrightYear = () => {
    const yearElements = document.querySelectorAll('.footer-bottom p');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        if (el.textContent.includes('2025')) {
            el.textContent = el.textContent.replace('2025', currentYear);
        }
    });
};

updateCopyrightYear();

// =========================
// Page Visibility API - Pause animations when tab is hidden
// =========================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause heavy animations when page is not visible
        document.body.classList.add('page-hidden');
    } else {
        document.body.classList.remove('page-hidden');
    }
});

// =========================
// Error Handling for Images
// =========================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('error', function() {
                this.style.display = 'none';
                console.warn(`Failed to load image: ${this.src}`);
            });
        });
    }, 500);
});

// =========================
// Online/Offline Status Indicator
// =========================
window.addEventListener('online', () => {
    console.log('✅ Connection restored');
});

window.addEventListener('offline', () => {
    console.log('⚠️ No internet connection');
});