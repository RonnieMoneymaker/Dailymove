// Admin Dashboard JavaScript
class AdminDashboard {
    constructor() {
        this.init();
        this.loadLiveStats();
        this.setupEventListeners();
        this.startLiveUpdates();
    }

    init() {
        // Initialize tooltips
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        // Initialize popovers
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });

        // Sidebar toggle for mobile
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        const sidebar = document.querySelector('.sidebar');
        
        if (sidebarToggle && sidebar) {
            sidebarToggle.addEventListener('click', () => {
                sidebar.classList.toggle('show');
            });

            // Close sidebar when clicking outside on mobile
            document.addEventListener('click', (e) => {
                if (window.innerWidth < 992 && 
                    !sidebar.contains(e.target) && 
                    !sidebarToggle.contains(e.target) && 
                    sidebar.classList.contains('show')) {
                    sidebar.classList.remove('show');
                }
            });
        }

        // Add fade-in animation to cards
        const cards = document.querySelectorAll('.stats-card, .dashboard-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 100);
        });
    }

    setupEventListeners() {
        // Form validation
        const forms = document.querySelectorAll('.needs-validation');
        forms.forEach(form => {
            form.addEventListener('submit', (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            });
        });

        // Auto-resize textareas
        const textareas = document.querySelectorAll('textarea[data-auto-resize]');
        textareas.forEach(textarea => {
            textarea.addEventListener('input', () => {
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
            });
        });

        // Confirm delete actions
        const deleteButtons = document.querySelectorAll('[data-confirm-delete]');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const message = button.dataset.confirmDelete || 'Weet je zeker dat je dit wilt verwijderen?';
                if (!confirm(message)) {
                    e.preventDefault();
                }
            });
        });

        // File upload preview
        const fileInputs = document.querySelectorAll('input[type="file"][data-preview]');
        fileInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                this.previewFiles(e.target);
            });
        });
    }

    async loadLiveStats() {
        try {
            const response = await fetch('/api/stats/live');
            if (response.ok) {
                const stats = await response.json();
                this.updateLiveStats(stats);
            }
        } catch (error) {
            console.error('Error loading live stats:', error);
        }
    }

    updateLiveStats(stats) {
        // Update sidebar counters
        const counters = {
            'products-count': stats.totalProducts || 0,
            'orders-count': stats.totalOrders || 0,
            'customers-count': stats.totalCustomers || 0
        };

        Object.entries(counters).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                this.animateCounter(element, parseInt(element.textContent) || 0, value);
            }
        });

        // Update header stats
        const liveVisitors = document.getElementById('live-visitors');
        const pendingOrders = document.getElementById('pending-orders');
        
        if (liveVisitors) {
            this.animateCounter(liveVisitors, parseInt(liveVisitors.textContent) || 0, stats.liveVisitors || 0);
        }
        
        if (pendingOrders) {
            this.animateCounter(pendingOrders, parseInt(pendingOrders.textContent) || 0, stats.pendingOrders || 0);
        }

        // Update notifications
        this.updateNotifications(stats.notifications || []);
    }

    animateCounter(element, start, end, duration = 1000) {
        if (start === end) return;
        
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }

    updateNotifications(notifications) {
        const notificationCount = document.getElementById('notification-count');
        const notificationsList = document.getElementById('notifications-list');
        
        if (notificationCount) {
            notificationCount.textContent = notifications.length;
            notificationCount.style.display = notifications.length > 0 ? 'block' : 'none';
        }
        
        if (notificationsList) {
            if (notifications.length === 0) {
                notificationsList.innerHTML = `
                    <div class="text-center py-3">
                        <i class="bi bi-bell-slash text-muted"></i>
                        <p class="mb-0 text-muted">Geen nieuwe meldingen</p>
                    </div>
                `;
            } else {
                notificationsList.innerHTML = notifications.map(notification => `
                    <li class="dropdown-item">
                        <div class="d-flex">
                            <div class="flex-shrink-0">
                                <i class="bi bi-${notification.icon} text-${notification.type}"></i>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1">${notification.title}</h6>
                                <p class="mb-1 text-muted small">${notification.message}</p>
                                <small class="text-muted">${this.timeAgo(notification.created_at)}</small>
                            </div>
                        </div>
                    </li>
                `).join('');
            }
        }
    }

    startLiveUpdates() {
        // Update stats every 30 seconds
        setInterval(() => {
            this.loadLiveStats();
        }, 30000);

        // Update time displays every minute
        setInterval(() => {
            this.updateTimeDisplays();
        }, 60000);
    }

    updateTimeDisplays() {
        const timeElements = document.querySelectorAll('[data-time]');
        timeElements.forEach(element => {
            const timestamp = element.dataset.time;
            element.textContent = this.timeAgo(timestamp);
        });
    }

    timeAgo(timestamp) {
        const now = new Date();
        const time = new Date(timestamp);
        const diffInSeconds = Math.floor((now - time) / 1000);

        if (diffInSeconds < 60) {
            return 'Zojuist';
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes} minuut${minutes > 1 ? 'en' : ''} geleden`;
        } else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours} uur geleden`;
        } else {
            const days = Math.floor(diffInSeconds / 86400);
            return `${days} dag${days > 1 ? 'en' : ''} geleden`;
        }
    }

    previewFiles(input) {
        const files = input.files;
        const previewContainer = document.querySelector(input.dataset.preview);
        
        if (!previewContainer || !files.length) return;

        previewContainer.innerHTML = '';

        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.className = 'img-thumbnail me-2 mb-2';
                    img.style.width = '100px';
                    img.style.height = '100px';
                    img.style.objectFit = 'cover';
                    previewContainer.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Utility methods for other pages
    showAlert(message, type = 'success', duration = 5000) {
        const alertContainer = document.getElementById('alert-container') || document.body;
        const alertId = 'alert-' + Date.now();
        
        const alertHTML = `
            <div id="${alertId}" class="alert alert-${type} alert-dismissible fade show" role="alert">
                <i class="bi bi-${type === 'success' ? 'check-circle' : type === 'danger' ? 'exclamation-triangle' : 'info-circle'} me-2"></i>
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
        
        alertContainer.insertAdjacentHTML('afterbegin', alertHTML);
        
        // Auto-remove after duration
        setTimeout(() => {
            const alert = document.getElementById(alertId);
            if (alert) {
                const bsAlert = new bootstrap.Alert(alert);
                bsAlert.close();
            }
        }, duration);
    }

    async makeRequest(url, options = {}) {
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        };

        const mergedOptions = { ...defaultOptions, ...options };
        
        try {
            const response = await fetch(url, mergedOptions);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Request failed:', error);
            throw error;
        }
    }
}

// Initialize dashboard when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.adminDashboard = new AdminDashboard();
});

// Global utility functions
window.AdminUtils = {
    formatCurrency: (amount) => {
        return new Intl.NumberFormat('nl-NL', {
            style: 'currency',
            currency: 'EUR'
        }).format(amount);
    },

    formatDate: (date) => {
        return new Intl.DateTimeFormat('nl-NL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    },

    formatDateTime: (date) => {
        return new Intl.DateTimeFormat('nl-NL', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date(date));
    },

    slugify: (text) => {
        return text
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
    },

    debounce: (func, wait) => {
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
};
