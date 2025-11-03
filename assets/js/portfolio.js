// Portfolio Management System
class PortfolioManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.currentProject = null;
        this.init();
    }

    init() {
        this.renderProjects();
        this.setupModal();
        this.updateLanguage();
    }

    updateLanguage() {
        // Check for language changes periodically
        const checkLanguageChange = () => {
            const currentLang = localStorage.getItem('language') || 'en';
            if (this.currentLang !== currentLang) {
                this.currentLang = currentLang;
                this.renderProjects();
                if (this.currentProject) {
                    this.openModal(this.currentProject);
                }
            }
        };
        
        // Check for language changes every second
        setInterval(checkLanguageChange, 1000);
        
        // Also listen to language switcher clicks
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                setTimeout(() => {
                    checkLanguageChange();
                }, 300);
            });
        });
    }

    renderProjects() {
        const grid = document.getElementById('portfolioGrid');
        if (!grid) return;

        grid.innerHTML = '';

        projects.forEach(project => {
            const projectItem = this.createProjectCard(project);
            grid.appendChild(projectItem);
        });
    }

    createProjectCard(project) {
        const item = document.createElement('div');
        item.className = 'portfolio-item';
        item.setAttribute('data-project-id', project.id);

        const title = project.title[this.currentLang] || project.title.en;
        const description = project.description[this.currentLang] || project.description.en;

        item.innerHTML = `
            <div class="portfolio-image" style="background-image: url('${project.mainImage}'); background-size: cover; background-position: center;">
                <div class="portfolio-overlay">
                    <button class="portfolio-link" data-project-id="${project.id}" type="button">
                        ${this.getTranslation('portfolio_view', 'View Project')}
                    </button>
                </div>
            </div>
            <div class="portfolio-content">
                <h3 class="portfolio-title">${title}</h3>
                <p class="portfolio-description">${description}</p>
                <div class="portfolio-tags">
                    ${project.tags.slice(0, 3).map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        // Add click event to button
        const viewBtn = item.querySelector('.portfolio-link');
        if (viewBtn) {
            viewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Button clicked for project:', project.id);
                this.openModal(project);
            });
        }

        // Also allow clicking on the whole item
        item.style.cursor = 'pointer';
        item.addEventListener('click', (e) => {
            // Don't trigger if clicking on the button
            if (!e.target.closest('.portfolio-link')) {
                console.log('Item clicked for project:', project.id);
                this.openModal(project);
            }
        });

        return item;
    }

    openModal(project) {
        console.log('Opening modal for project:', project);
        this.currentProject = project;
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');

        if (!modal || !modalBody) {
            console.error('Modal elements not found!');
            return;
        }

        const title = project.title[this.currentLang] || project.title.en;
        const description = project.description[this.currentLang] || project.description.en;

        modalBody.innerHTML = `
            <div class="modal-project-header">
                <h2 class="modal-project-title">${title}</h2>
                <p class="modal-project-description">${description}</p>
            </div>
            
            <div class="modal-project-images">
                <div class="modal-main-image">
                    <img src="${project.mainImage}" alt="${title}" id="mainProjectImage">
                </div>
                ${project.images.length > 1 ? `
                <div class="modal-image-gallery">
                    ${project.images.map((img, index) => `
                        <img src="${img}" alt="${title} - ${index + 1}" 
                             class="gallery-thumb ${index === 0 ? 'active' : ''}"
                             data-image="${img}">
                    `).join('')}
                </div>
                ` : ''}
            </div>

            <div class="modal-project-info">
                <div class="modal-project-details">
                    <h3>${this.getTranslation('project_technologies', 'Technologies')}</h3>
                    <div class="technologies-list">
                        ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                </div>

                <div class="modal-project-tags">
                    <h3>${this.getTranslation('project_tags', 'Tags')}</h3>
                    <div class="tags-list">
                        ${project.tags.map(tag => `<span class="tag-item">${tag}</span>`).join('')}
                    </div>
                </div>

                <div class="modal-project-links">
                    ${project.demoLink ? `
                        <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="project-link project-demo">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                            </svg>
                            ${this.getTranslation('view_demo', 'View Demo')}
                        </a>
                    ` : ''}
                    ${project.githubLink ? `
                        <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="project-link project-github">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            ${this.getTranslation('view_code', 'View Code')}
                        </a>
                    ` : ''}
                </div>
            </div>
        `;

        // Setup image gallery
        if (project.images.length > 1) {
            this.setupImageGallery();
        }

        modal.classList.add('active');
        console.log('Modal should now be visible');

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        // Scroll modal content to top
        setTimeout(() => {
            modalBody.scrollTop = 0;
        }, 100);
    }

    setupImageGallery() {
        const thumbs = document.querySelectorAll('.gallery-thumb');
        const mainImage = document.getElementById('mainProjectImage');

        thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                thumbs.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                if (mainImage) {
                    mainImage.src = thumb.getAttribute('data-image');
                    mainImage.style.opacity = '0';
                    setTimeout(() => {
                        mainImage.style.opacity = '1';
                    }, 150);
                }
            });
        });
    }

    setupModal() {
        const modal = document.getElementById('projectModal');
        const closeBtn = document.getElementById('modalClose');
        const overlay = modal?.querySelector('.modal-overlay');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }

        if (overlay) {
            overlay.addEventListener('click', () => this.closeModal());
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal?.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    closeModal() {
        const modal = document.getElementById('projectModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            this.currentProject = null;
        }
    }

    getTranslation(key, fallback) {
        // Try to get from i18n instance if available
        if (window.i18n && window.i18n.translations && window.i18n.translations[this.currentLang]) {
            const translations = window.i18n.translations[this.currentLang];
            if (translations[key]) {
                return translations[key];
            }
        }
        // Fallback: check INLINE_TRANSLATIONS
        if (typeof INLINE_TRANSLATIONS !== 'undefined' && INLINE_TRANSLATIONS[this.currentLang]) {
            return INLINE_TRANSLATIONS[this.currentLang][key] || fallback;
        }
        return fallback;
    }
}

// Initialize portfolio when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit to ensure projects.js is loaded
    if (typeof projects !== 'undefined') {
        window.portfolioManager = new PortfolioManager();
    } else {
        // Retry after a short delay
        setTimeout(() => {
            if (typeof projects !== 'undefined') {
                window.portfolioManager = new PortfolioManager();
            } else {
                console.error('Projects data not found. Make sure projects.js is loaded before portfolio.js');
            }
        }, 100);
    }
});

