// Shop JavaScript
class Shop {
    constructor() {
        this.cart = this.loadCart();
        this.init();
    }

    init() {
        // Initialize components
        this.updateCartDisplay();
        this.setupEventListeners();
        this.trackPageView();
        
        // Add fade-in animation to cards
        this.animateCards();
    }

    setupEventListeners() {
        // Search form
        const searchForms = document.querySelectorAll('form[action*="/products"]');
        searchForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                const searchInput = form.querySelector('input[name="search"]');
                if (searchInput && searchInput.value.trim() === '') {
                    e.preventDefault();
                    window.location.href = '/shop/products';
                }
            });
        });

        // Product cards hover effects
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });

        // Category cards hover effects
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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
    }

    // Cart functionality
    addToCart(productId, quantity = 1) {
        // In a real app, you'd fetch product details from the server
        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: productId,
                quantity: quantity,
                addedAt: new Date().toISOString()
            });
        }
        
        this.saveCart();
        this.updateCartDisplay();
        this.showCartNotification(`Product toegevoegd aan winkelwagen!`);
        
        // Track add to cart event
        this.trackEvent('add_to_cart', { product_id: productId, quantity: quantity });
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
        this.showCartNotification('Product verwijderd uit winkelwagen');
    }

    updateCartQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartDisplay();
            }
        }
    }

    getCartItemCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    updateCartDisplay() {
        const cartBadge = document.querySelector('.btn .badge');
        if (cartBadge) {
            const count = this.getCartItemCount();
            cartBadge.textContent = count;
            cartBadge.style.display = count > 0 ? 'inline-block' : 'none';
        }
    }

    loadCart() {
        try {
            const cartData = localStorage.getItem('shop_cart');
            return cartData ? JSON.parse(cartData) : [];
        } catch (error) {
            console.error('Error loading cart:', error);
            return [];
        }
    }

    saveCart() {
        try {
            localStorage.setItem('shop_cart', JSON.stringify(this.cart));
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    }

    showCartNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        notification.innerHTML = `
            <i class="bi bi-${type === 'success' ? 'check-circle' : 'exclamation-triangle'} me-2"></i>
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        document.body.appendChild(notification);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                const bsAlert = new bootstrap.Alert(notification);
                bsAlert.close();
            }
        }, 3000);
    }

    // Analytics tracking
    trackPageView() {
        const eventData = {
            page: window.location.pathname,
            title: document.title,
            timestamp: new Date().toISOString()
        };

        this.trackEvent('page_view', eventData);
    }

    trackEvent(eventType, eventData) {
        fetch('/api/analytics/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                event_type: eventType,
                event_data: eventData
            })
        }).catch(error => {
            console.error('Analytics tracking error:', error);
        });
    }

    // Animation helpers
    animateCards() {
        const cards = document.querySelectorAll('.product-card, .category-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('fade-in');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        cards.forEach(card => {
            observer.observe(card);
        });
    }

    // Utility methods
    formatCurrency(amount) {
        return new Intl.NumberFormat('nl-NL', {
            style: 'currency',
            currency: 'EUR'
        }).format(amount);
    }

    debounce(func, wait) {
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
}

// Global functions for inline event handlers
function addToCart(productId, quantity = 1) {
    if (window.shop) {
        window.shop.addToCart(productId, quantity);
    }
}

function removeFromCart(productId) {
    if (window.shop) {
        window.shop.removeFromCart(productId);
    }
}

// Initialize shop when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.shop = new Shop();
    
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Handle page visibility changes for analytics
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && window.shop) {
        window.shop.trackEvent('page_focus', {
            page: window.location.pathname,
            timestamp: new Date().toISOString()
        });
    }
});
