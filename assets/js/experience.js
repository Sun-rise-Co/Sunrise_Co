// Professional Experience Data
// Note: This data contains general information about work experience without disclosing confidential project details
const professionalExperiences = [
    {
        id: 1,
        company: {
            fa: 'Avanade (ش affiliate Microsoft)',
            en: 'Avanade (Microsoft affiliate)',
            it: 'Avanade (affiliata Microsoft)'
        },
        role: {
            fa: 'توسعه‌دهنده فول‌استک',
            en: 'Full-Stack Software Developer',
            it: 'Sviluppatore Software Full-Stack'
        },
        period: {
            fa: '2021 - حال حاضر',
            en: '2021 - Present',
            it: '2021 - Presente'
        },
        projectType: {
            fa: 'راهکارهای سازمانی در مقیاس بزرگ',
            en: 'Large-Scale Enterprise Solutions',
            it: 'Soluzioni Enterprise su Larga Scala'
        },
        description: {
            fa: 'مشارکت در توسعه راهکارهای سازمانی برای مشتریان بزرگ با تمرکز بر مقیاس‌پذیری، امنیت و کارایی بالا.',
            en: 'Contributed to developing enterprise solutions for major clients with focus on scalability, security, and high performance.',
            it: 'Ha contribuito allo sviluppo di soluzioni enterprise per clienti di rilievo con focus su scalabilità, sicurezza e alte prestazioni.'
        },
        technologies: ['Full-Stack Development', 'Enterprise Architecture', 'Cloud Solutions', 'Security'],
        clients: {
            fa: ['Poste Italiane'],
            en: ['Poste Italiane'],
            it: ['Poste Italiane']
        },
        teamMember: {
            fa: '', // نام عضو تیم را اینجا وارد کنید یا خالی بگذارید
            en: '', // Team member name here or leave empty
            it: '' // Nome membro del team qui o lasciare vuoto
        }
    },
    {
        id: 2,
        company: {
            fa: 'Accenture',
            en: 'Accenture',
            it: 'Accenture'
        },
        role: {
            fa: 'توسعه‌دهنده فول‌استک',
            en: 'Full-Stack Software Developer',
            it: 'Sviluppatore Software Full-Stack'
        },
        period: {
            fa: '2021 - حال حاضر',
            en: '2021 - Present',
            it: '2021 - Presente'
        },
        projectType: {
            fa: 'راهکارهای سازمانی و دیجیتال',
            en: 'Enterprise & Digital Solutions',
            it: 'Soluzioni Enterprise e Digitali'
        },
        description: {
            fa: 'توسعه راهکارهای دیجیتالی پیشرفته برای سازمان‌های بزرگ در بخش‌های مالی و دولتی.',
            en: 'Developed advanced digital solutions for major organizations in financial and public sectors.',
            it: 'Sviluppato soluzioni digitali avanzate per grandi organizzazioni nei settori finanziario e pubblico.'
        },
        technologies: ['Full-Stack Development', 'Digital Transformation', 'Cloud Architecture'],
        clients: {
            fa: ['Crédit Agricole', 'Consip Mercato Digitale della PA'],
            en: ['Crédit Agricole', 'Consip Mercato Digitale della PA'],
            it: ['Crédit Agricole', 'Consip Mercato Digitale della PA']
        },
        teamMember: {
            fa: '', // نام عضو تیم را اینجا وارد کنید یا خالی بگذارید
            en: '', // Team member name here or leave empty
            it: '' // Nome membro del team qui o lasciare vuoto
        }
    },
    {
        id: 3,
        company: {
            fa: 'Ermetix',
            en: 'Ermetix',
            it: 'Ermetix'
        },
        role: {
            fa: 'متخصص امنیت سایبری و مدیریت دستگاه‌های موبایل',
            en: 'Cybersecurity & Mobile Device Management Specialist',
            it: 'Specialista in Cybersecurity e Gestione Dispositivi Mobili'
        },
        period: {
            fa: 'اخیر',
            en: 'Recent',
            it: 'Recente'
        },
        projectType: {
            fa: 'راهکارهای امنیت سایبری',
            en: 'Cybersecurity Solutions',
            it: 'Soluzioni di Cybersecurity'
        },
        description: {
            fa: 'توسعه و مدیریت راهکارهای امنیت سایبری و سیستم‌های مدیریت دستگاه‌های موبایل.',
            en: 'Developed and managed cybersecurity solutions and mobile device management systems.',
            it: 'Sviluppato e gestito soluzioni di cybersecurity e sistemi di gestione dispositivi mobili.'
        },
        technologies: ['Cybersecurity', 'Mobile Device Management', 'Security Architecture'],
        clients: {
            fa: [],
            en: [],
            it: []
        },
        teamMember: {
            fa: '', // نام عضو تیم را اینجا وارد کنید یا خالی بگذارید
            en: '', // Team member name here or leave empty
            it: '' // Nome membro del team qui o lasciare vuoto
        }
    },
    {
        id: 4,
        company: {
            fa: 'IDT Solution',
            en: 'IDT Solution',
            it: 'IDT Solution'
        },
        role: {
            fa: 'توسعه‌دهنده پروژه اینترنت اشیا',
            en: 'IoT Project Developer',
            it: 'Sviluppatore Progetti IoT'
        },
        period: {
            fa: 'اخیر',
            en: 'Recent',
            it: 'Recente'
        },
        projectType: {
            fa: 'راهکارهای اینترنت اشیا',
            en: 'IoT Solutions',
            it: 'Soluzioni IoT'
        },
        description: {
            fa: 'توسعه پروژه اینترنت اشیا Aurora Pennini با تمرکز بر اتصال دستگاه‌ها و تحلیل داده‌ها.',
            en: 'Developed IoT project Aurora Pennini focusing on device connectivity and data analytics.',
            it: 'Sviluppato progetto IoT Aurora Pennini con focus su connettività dispositivi e analisi dati.'
        },
        technologies: ['IoT Development', 'Device Connectivity', 'Data Analytics', 'Sensor Networks'],
        clients: {
            fa: ['Aurora Pennini'],
            en: ['Aurora Pennini'],
            it: ['Aurora Pennini']
        },
        teamMember: {
            fa: '', // نام عضو تیم را اینجا وارد کنید یا خالی بگذارید
            en: '', // Team member name here or leave empty
            it: '' // Nome membro del team qui o lasciare vuoto
        }
    }
];

// Professional Experience Manager
class ExperienceManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.experiences = professionalExperiences;
    }

    init() {
        this.updateLanguage();
        this.renderExperiences();
    }

    updateLanguage() {
        this.currentLang = localStorage.getItem('language') || 'en';
    }

    getTranslation(key, fallback = '') {
        if (window.i18n && window.i18n.translate) {
            return window.i18n.translate(key) || fallback;
        }
        return fallback;
    }

    renderExperiences() {
        const container = document.getElementById('experienceContainer');
        if (!container) return;

        container.innerHTML = '';
        
        this.experiences.forEach(exp => {
            const expCard = this.createExperienceCard(exp);
            container.appendChild(expCard);
        });
    }

    createExperienceCard(experience) {
        const card = document.createElement('div');
        card.className = 'experience-card';
        card.setAttribute('data-experience-id', experience.id);

        const company = experience.company[this.currentLang] || experience.company.en;
        const role = experience.role[this.currentLang] || experience.role.en;
        const period = experience.period[this.currentLang] || experience.period.en;
        const projectType = experience.projectType[this.currentLang] || experience.projectType.en;
        const description = experience.description[this.currentLang] || experience.description.en;
        const clients = experience.clients[this.currentLang] || experience.clients.en || [];
        const teamMember = experience.teamMember && experience.teamMember[this.currentLang] 
            ? experience.teamMember[this.currentLang] 
            : (experience.teamMember && experience.teamMember.en ? experience.teamMember.en : '');

        card.innerHTML = `
            <div class="experience-header">
                <div class="experience-company">
                    <div class="experience-company-info">
                        <h3 class="experience-company-name">${company}</h3>
                        ${teamMember ? `<span class="experience-member-badge">${teamMember}</span>` : ''}
                    </div>
                    <span class="experience-badge">${this.getTranslation('experience_enterprise', 'Enterprise')}</span>
                </div>
            </div>
            <div class="experience-body">
                <div class="experience-meta">
                    <div class="experience-meta-item">
                        <span class="experience-meta-label">${this.getTranslation('experience_role', 'Role')}:</span>
                        <span class="experience-meta-value">${role}</span>
                    </div>
                    <div class="experience-meta-item">
                        <span class="experience-meta-label">${this.getTranslation('experience_period', 'Period')}:</span>
                        <span class="experience-meta-value">${period}</span>
                    </div>
                </div>
                <div class="experience-project-type">
                    <span class="experience-type-label">${this.getTranslation('experience_project_type', 'Project Type')}:</span>
                    <span class="experience-type-value">${projectType}</span>
                </div>
                <p class="experience-description">${description}</p>
                ${clients.length > 0 ? `
                    <div class="experience-clients">
                        <span class="experience-clients-label">${this.currentLang === 'fa' ? 'مشتریان' : this.currentLang === 'it' ? 'Clienti' : 'Clients'}:</span>
                        <div class="experience-clients-list">
                            ${clients.map(client => `<span class="experience-client-badge">${client}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                <div class="experience-technologies">
                    <span class="experience-tech-label">${this.getTranslation('experience_technologies', 'Technologies')}:</span>
                    <div class="experience-tech-tags">
                        ${experience.technologies.map(tech => `<span class="experience-tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;

        return card;
    }

    refresh() {
        this.updateLanguage();
        this.renderExperiences();
    }
}

// Initialize when DOM is ready
let experienceManager;
document.addEventListener('DOMContentLoaded', () => {
    experienceManager = new ExperienceManager();
    
    // Wait a bit for i18n to initialize
    setTimeout(() => {
        experienceManager.init();
    }, 500);
    
    // Listen for language changes via custom event or polling
    const checkLanguageChange = () => {
        const currentLang = localStorage.getItem('language') || 'en';
        if (experienceManager.currentLang !== currentLang) {
            experienceManager.refresh();
        }
    };
    
    // Check for language changes periodically
    setInterval(checkLanguageChange, 1000);
    
    // Also listen to i18n initialization
    window.addEventListener('i18nReady', () => {
        if (experienceManager) {
            setTimeout(() => experienceManager.refresh(), 200);
        }
    });
});

// Export for use in other scripts
window.experienceManager = experienceManager;

