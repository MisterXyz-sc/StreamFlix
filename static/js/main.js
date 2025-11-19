// Modern Interactive JavaScript for StreamFlix

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modern features
    initModernFeatures();
    initAnimations();
    initInteractiveElements();
    initLegacyFeatures(); // Keep existing functionality
});

function initModernFeatures() {
    // Parallax effect for hero sections
    initParallax();
    
    // Lazy loading for images
    initLazyLoading();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Interactive hover effects
    initHoverEffects();
    
    // Real-time notifications
    initNotifications();
    
    // Back to top button
    initBackToTop();
}

function initLegacyFeatures() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Auto-hide alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        }, 5000);
    });

    // Purchase modal handler
    const purchaseModal = document.getElementById('purchaseModal');
    if (purchaseModal) {
        purchaseModal.addEventListener('show.bs.modal', function(event) {
            // Additional logic when purchase modal opens
            console.log('Purchase modal opened');
        });
    }

    // Form validation enhancement
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="loading-spinner"></span> Memproses...';
            }
        });
    });

    // Wallet amount formatter
    const amountInputs = document.querySelectorAll('input[name="amount"]');
    amountInputs.forEach(input => {
        input.addEventListener('input', function() {
            const value = parseFloat(this.value) || 0;
            // UBAH DI SINI: dari 10000 menjadi 5000
            if (value < 5000 && value > 0) {
                this.setCustomValidity('Minimum top up adalah Rp 5.000');
            } else {
                this.setCustomValidity('');
            }
        });
    });

    // Theme switcher (optional future feature)
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-bs-theme', savedTheme);
    }

    // Video player loading state
    const videoIframes = document.querySelectorAll('.video-player');
    videoIframes.forEach(iframe => {
        iframe.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        iframe.style.opacity = '0';
        iframe.style.transition = 'opacity 0.3s ease';
    });
}

function initParallax() {
    const hero = document.querySelector('.hero-section');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

function initSmoothScrolling() {
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

function initHoverEffects() {
    // Enhanced video card hover effects
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.25)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        });
    });

    // Enhanced button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Navigation hover effects
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.card, .hero-section, .video-card, .feature-item').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Floating animation for premium badges
    const premiumBadges = document.querySelectorAll('.badge.bg-warning');
    premiumBadges.forEach(badge => {
        badge.classList.add('floating');
    });
}

function initInteractiveElements() {
    // Copy to clipboard with modern feedback
    initCopyToClipboard();
    
    // Form enhancements
    initFormEnhancements();
    
    // Video card interactions
    initVideoInteractions();
    
    // Loading states
    initLoadingStates();
    
    // Tab interactions
    initTabInteractions();
}

function initCopyToClipboard() {
    document.querySelectorAll('[data-copy]').forEach(element => {
        element.addEventListener('click', function() {
            const text = this.dataset.copy || '082320781747';
            copyToClipboard(text);
            
            // Show modern notification
            showModernNotification('Nomor berhasil disalin!', 'success');
        });
    });
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

function initNotifications() {
    // Override legacy showNotification with modern version
    window.showNotification = function(message, type = 'info') {
        showModernNotification(message, type);
    };
}

function showModernNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="bi bi-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle-fill',
        error: 'exclamation-triangle-fill',
        warning: 'exclamation-circle-fill',
        info: 'info-circle-fill'
    };
    return icons[type] || 'info-circle-fill';
}

function initFormEnhancements() {
    // Add floating labels effect
    const formInputs = document.querySelectorAll('.form-control, .form-select');
    formInputs.forEach(input => {
        // Add focus effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
            this.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check initial value
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
        
        // Add input animation
        input.addEventListener('input', function() {
            if (this.value) {
                this.style.borderColor = '#6366f1';
            }
        });
    });
}

function initVideoInteractions() {
    // Enhanced video card click effects
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking buttons or links
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                return;
            }
            
            const link = this.querySelector('a[href*="/video/"]');
            if (link) {
                // Add click feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                    link.click();
                }, 150);
            }
        });
    });

    // Video access checker with modern UI
    window.checkVideoAccess = function(videoId) {
        fetch(`/api/check_access/${videoId}`)
            .then(response => response.json())
            .then(data => {
                if (data.has_access) {
                    showModernNotification('Akses video tersedia!', 'success');
                } else {
                    showModernNotification('Akses video diperlukan', 'warning');
                }
            })
            .catch(error => {
                console.error('Error checking access:', error);
                showModernNotification('Error memeriksa akses', 'error');
            });
    };
}

function initLoadingStates() {
    // Enhanced loading states for forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.classList.add('loading');
                submitBtn.disabled = true;
                
                // Create modern loading spinner
                const spinner = document.createElement('span');
                spinner.className = 'loading-spinner';
                spinner.style.marginRight = '8px';
                
                submitBtn.innerHTML = '';
                submitBtn.appendChild(spinner);
                submitBtn.appendChild(document.createTextNode(' Memproses...'));
            }
        });
    });
}

function initTabInteractions() {
    // Enhanced tab interactions
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => {
        pane.addEventListener('show.bs.tab', function() {
            this.style.opacity = '0';
            this.style.transform = 'translateY(10px)';
        });
        
        pane.addEventListener('shown.bs.tab', function() {
            this.style.opacity = '1';
            this.style.transform = 'translateY(0)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
}

function initBackToTop() {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="bi bi-chevron-up"></i>';
    backToTop.setAttribute('aria-label', 'Back to top');
    
    document.body.appendChild(backToTop);
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', StreamFlix.throttle(function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }, 100));
    
    // Scroll to top when clicked
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Enhanced Utility functions
const StreamFlix = {
    // Format currency with modern style
    formatCurrency: function(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    },

    // Format date with modern style
    formatDate: function(dateString) {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    },

    // Debounce function for search
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Modern number formatter
    formatNumber: function(number) {
        return new Intl.NumberFormat('id-ID').format(number);
    },

    // Get time remaining
    getTimeRemaining: function(endTime) {
        const total = Date.parse(endTime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        
        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    },

    // Animate counter
    animateCounter: function(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = this.formatNumber(value);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
};

// Modern Confirmation System
function initModernConfirm() {
    // Override default confirm behavior
    window.showModernConfirm = function(message, title = 'Konfirmasi', confirmText = 'Oke', cancelText = 'Batal') {
        return new Promise((resolve) => {
            // Remove existing modal if any
            const existingModal = document.getElementById('modernConfirmModal');
            if (existingModal) {
                existingModal.remove();
            }

            // Create modal HTML
            const modalHTML = `
                <div class="modal fade modal-confirm" id="modernConfirmModal" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">
                                    <i class="bi bi-exclamation-triangle-fill"></i>
                                    ${title}
                                </h5>
                            </div>
                            <div class="modal-body">
                                <p>${message}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-modern btn-modern-cancel" data-bs-dismiss="modal">
                                    ${cancelText}
                                </button>
                                <button type="button" class="btn btn-modern btn-modern-confirm" id="confirmAction">
                                    ${confirmText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Add to DOM
            document.body.insertAdjacentHTML('beforeend', modalHTML);

            // Get modal instance
            const modalElement = document.getElementById('modernConfirmModal');
            const modal = new bootstrap.Modal(modalElement);

            // Event handlers
            const confirmBtn = document.getElementById('confirmAction');
            const cancelBtn = modalElement.querySelector('.btn-modern-cancel');

            confirmBtn.addEventListener('click', () => {
                // Add loading state
                confirmBtn.classList.add('loading');
                confirmBtn.innerHTML = 'Memproses...';
                
                setTimeout(() => {
                    modal.hide();
                    resolve(true);
                }, 1000);
            });

            cancelBtn.addEventListener('click', () => {
                modal.hide();
                resolve(false);
            });

            // Clean up when modal is hidden
            modalElement.addEventListener('hidden.bs.modal', () => {
                modalElement.remove();
                resolve(false);
            });

            // Show modal
            modal.show();
        });
    };

    // Replace all standard confirm dialogs
    replaceStandardConfirms();
}

function replaceStandardConfirms() {
    // Find all delete links with standard confirm
    const deleteLinks = document.querySelectorAll('a[onclick*="confirm"]');
    
    deleteLinks.forEach(link => {
        const originalOnClick = link.getAttribute('onclick');
        
        if (originalOnClick && originalOnClick.includes('confirm')) {
            // Extract the confirm message
            const messageMatch = originalOnClick.match(/confirm\('([^']+)'\)/);
            if (messageMatch) {
                const message = messageMatch[1];
                
                // Remove original onclick
                link.removeAttribute('onclick');
                
                // Add modern confirm
                link.addEventListener('click', async function(e) {
                    e.preventDefault();
                    
                    const confirmed = await showModernConfirm(
                        message, 
                        'Hapus Video', 
                        'Ya, Hapus', 
                        'Batal'
                    );
                    
                    if (confirmed) {
                        // Proceed with deletion
                        window.location.href = this.href;
                    }
                });
            }
        }
    });
}

// Enhanced delete function with modern UI
async function deleteVideo(videoId, videoTitle) {
    const confirmed = await showModernConfirm(
        `Yakin hapus video "<strong>${videoTitle}</strong>"? Tindakan ini tidak dapat dibatalkan.`,
        'Hapus Video',
        'Ya, Hapus',
        'Batal'
    );
    
    if (confirmed) {
        try {
            // Show loading state
            showModernNotification('Menghapus video...', 'info');
            
            // Perform deletion via API
            const response = await fetch(`/admin/videos/${videoId}`, {
                method: 'DELETE',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                showModernNotification('Video berhasil dihapus!', 'success');
                // Remove from UI
                setTimeout(() => {
                    document.querySelector(`tr[data-video-id="${videoId}"]`)?.remove();
                    checkEmptyState();
                }, 1000);
            } else {
                throw new Error('Gagal menghapus video');
            }
        } catch (error) {
            console.error('Error deleting video:', error);
            showModernNotification('Gagal menghapus video', 'error');
        }
    }
}

function checkEmptyState() {
    const videoRows = document.querySelectorAll('tbody tr');
    if (videoRows.length === 0) {
        // Show empty state
        const emptyStateHTML = `
            <div class="text-center py-5">
                <i class="bi bi-film display-1 text-muted"></i>
                <h4 class="text-muted mt-3">Belum ada video</h4>
                <p class="text-muted">Mulai dengan menambahkan video pertama Anda</p>
                <a href="{{ url_for('admin.add_video') }}" class="btn btn-primary mt-2">
                    <i class="bi bi-plus-circle me-1"></i>Tambah Video Pertama
                </a>
            </div>
        `;
        document.querySelector('.table-responsive').innerHTML = emptyStateHTML;
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initModernConfirm();
});

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModernFeatures);
} else {
    initModernFeatures();
}

// Export for global use
window.StreamFlix = StreamFlix;

console.log('🎬 StreamFlix Modern JavaScript Loaded Successfully!');