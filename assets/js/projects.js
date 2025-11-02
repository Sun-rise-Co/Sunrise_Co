// Projects Data
const projects = [
    {
        id: 1,
        title: {
            fa: 'STP Analytics Tool',
            en: 'STP Analytics Tool',
            it: 'Strumento di Analisi STP'
        },
        description: {
            fa: 'ابزار تجزیه و تحلیل داده‌های STP با داشبورد تعاملی و گزارش‌دهی پیشرفته',
            en: 'STP data analytics tool with interactive dashboard and advanced reporting',
            it: 'Strumento di analisi dati STP con dashboard interattiva e reporting avanzato'
        },
        mainImage: 'assets/projects/stp-analytics.jpg',
        images: [
            'assets/projects/stp-analytics.jpg',
        ],
        category: 'fullstack',
        tags: ['Laravel', 'Vue.js', 'Chart.js', 'Analytics', 'Dashboard'],
        demoLink: 'https://demo-stp-analytics.example.com',
        githubLink: 'https://github.com/username/stp-analytics',
        technologies: ['Laravel', 'Vue.js', 'Chart.js']
    },
   
    {
        id: 2,
        title: {
            fa: 'AI Voice Translator',
            en: 'AI Voice Translator',
            it: 'Traduttore Vocale AI'
        },
        description: {
            fa: 'مترجم صوتی هوشمند با تشخیص گفتار و ترجمه آنی به چندین زبان',
            en: 'Smart voice translator with speech recognition and real-time translation to multiple languages',
            it: 'Traduttore vocale intelligente con riconoscimento vocale e traduzione in tempo reale in più lingue'
        },
        mainImage: 'assets/projects/ai-voice.jpg',
        images: [
            'assets/projects/ai-voice.jpg',
        ],
        category: 'mvp',
        tags: ['AI', 'Voice', 'Translation' ,'Python', 'OpenAI', 'Speech Recognition'],
        demoLink: 'https://azizi1991.github.io/FA-EN/',
        technologies: ['Python', 'OpenAI', 'Speech Recognition']
    },
    {
        id: 3,
        title: {
            fa: 'Migrate AI Assistant',
            en: 'Migrate AI Assistant',
            it: 'Assistente AI per Migrazione'
        },
        description: {
            fa: 'دستیار هوشمند برای انتقال و جابه‌جایی داده‌ها با استفاده از هوش مصنوعی',
            en: 'Smart assistant for data migration and transfer using artificial intelligence',
            it: 'Assistente intelligente per migrazione e trasferimento dati utilizzando intelligenza artificiale'
        },
        mainImage: 'assets/projects/migrate-ai.jpg',
        images: [
            'assets/projects/migrate-ai.jpg',
            'assets/projects/migrate-ai-2.jpg',
            'assets/projects/migrate-ai-3.jpg'
        ],
        category: 'fullstack',
        tags: ['AI', 'Python','SQLite','FastAPI','ReportLab',  'Migration','Vue 3 + Vite', 'Data Transfer'],
        technologies: ['Python (3.8+)', 'FastAPI', 'SQLite/MySQL', 'ReportLab', 'Vue 3 + Vite']
    },
    {
        id: 4,
        title: {
            fa: 'InjaUnja - پلتفرم جامعه ایرانیان در اروپا',
            en: 'InjaUnja - Iranian Community Platform in Europe',
            it: 'InjaUnja - Piattaforma della Comunità Iraniana in Europa'
        },
        description: {
            fa: 'توسعه فنی فرانت‌اند پلتفرم جامعه‌ای برای ایرانیان مقیم اروپا با استفاده از Laravel، Vue.js و MySQL برای ساخت یک اپلیکیشن مقیاس‌پذیر، امن و با عملکرد بالا. بهینه‌سازی تجربه کاربری با تمرکز بر طراحی موبایل‌اول و دسترس‌پذیری.',
            en: 'Frontend technical development of a community platform for Iranians residing in Europe using Laravel, Vue.js, and MySQL to build a scalable, secure, and high-performance application. Optimizing user experience with focus on mobile-first design and accessibility.',
            it: 'Sviluppo tecnico frontend di una piattaforma comunitaria per iraniani residenti in Europa utilizzando Laravel, Vue.js e MySQL per costruire un\'applicazione scalabile, sicura e ad alte prestazioni. Ottimizzazione dell\'esperienza utente con focus su design mobile-first e accessibilità.'
        },
        mainImage: 'assets/projects/injaunja.jpg',
        images: [
            'assets/projects/injaunja.jpg',
            'assets/projects/injaunja2.jpg',
        ],
        category: 'fullstack',
        tags: ['Laravel', 'Vue.js', 'MySQL', 'UX/UI Design', 'Figma', 'Mobile-First', 'Community Platform'],
        demoLink: 'https://demo-injaunja.example.com',
        githubLink: 'https://github.com/username/injaunja',
        technologies: ['Laravel', 'Vue.js', 'MySQL', 'Figma', 'UX/UI Design', 'Mobile Optimization']
    },
   
    {
        id: 5,
        title: {
            fa: 'Reserve Script',
            en: 'Reserve Script',
            it: 'Script di Prenotazione'
        },
        description: {
            fa: 'اسکریپت رزرو آنلاین برای هتل‌ها و مراکز اقامتی',
            en: 'Online reservation script for hotels and accommodation centers',
            it: 'Script di prenotazione online per hotel e centri di accoglienza'
        },
        mainImage: 'assets/projects/reserve-script.jpg',
        images: [
            'assets/projects/reserve-script.jpg',
            'assets/projects/reserve-script-2.jpg',
            'assets/projects/reserve-script-3.jpg'
        ],
        category: 'fullstack',
        tags: ['PHP', 'MySQL', 'JavaScript'],
        demoLink: 'https://reserve.rashasoftware.ir/',
        githubLink: 'https://github.com/username/reserve-script',
        technologies: ['PHP', 'MySQL', 'JavaScript']
    },
    {
        id: 6,
        title: {
            fa: 'QR Menu Manager',
            en: 'QR Menu Manager',
            it: 'QR Menu Manager'
        },
        description: {
            fa: 'سیستم مدیریت منوی رستوران با QR Code، امکان سفارش آنلاین و مدیریت منو',
            en: 'Restaurant menu management system with QR codes, online ordering and menu management capabilities',
            it: 'Sistema di gestione menu ristorante con codici QR, ordinazioni online e capacità di gestione menu'
        },
        mainImage: 'assets/projects/qr-menu.jpg',
        images: [
            'assets/projects/qr-menu.jpg',
            'assets/projects/qr-menu-2.jpg',
            'assets/projects/qr-menu-3.jpg',
        ],
        category: 'mvp',
        tags: ['MVP', 'QR Code','Laravel', 'Vue.js', 'MySQL'],
        demoLink: 'https://qrmenu.rashasoftware.ir/',
        githubLink: 'https://qrmenu.rashasoftware.ir/menu/',
        technologies: ['Laravel', 'Vue.js', 'MySQL']
    },
    {
        id: 8,
        title: {
            fa: 'MomTime',
            en: 'MomTime',
            it: 'MomTime'
        },
        description: {
            fa: 'اپلیکیشن مدیریت زمان برای مادران با قابلیت برنامه‌ریزی و یادآوری',
            en: 'Time management app for mothers with scheduling and reminder capabilities',
            it: 'App di gestione del tempo per madri con capacità di pianificazione e promemoria'
        },
        mainImage: 'assets/projects/momtime.jpg',
        images: [
            'assets/projects/momtime.jpg',
            'assets/projects/momtime-3.jpg',
            'assets/projects/momtime-4.jpg',
            'assets/projects/momtime-5.jpg'

        ],
        category: 'mvp',
        tags: ['MVP','MySQL', 'Expo/React Native','TypeScript','Mobile App', 'Time Management'],
        demoLink: 'https://demo-momtime.example.com',
        githubLink: 'https://github.com/username/momtime',
        technologies: ['Expo/React Native', 'TypeScript', 'React Navigation', 'Async Storage', 'Node.js + Express', 'MySQL (Sequelize)']
    },
    {
        id: 9,
        title: {
            fa: 'سیستم مدیریت مدرسه - کاهش 40% کار اداری',
            en: 'School Management System - 40% Reduction in Administrative Work',
            it: 'Sistema di Gestione Scolastica - Riduzione del 40% del Lavoro Amministrativo'
        },
        description: {
            fa: 'طراحی و توسعه سیستم جامع مدیریت مدرسه با هدف کاهش 40% حجم کار اداری. شامل مدیریت دانش‌آموز، معلم، کلاس، نمره و گزارش‌دهی. بهینه‌سازی فرآیندهای اداری و افزایش کارایی سیستم آموزشی.',
            en: 'Design and development of a comprehensive school management system aimed at reducing administrative workload by 40%. Includes student, teacher, class, grade management and reporting. Optimization of administrative processes and increased educational system efficiency.',
            it: 'Progettazione e sviluppo di un sistema completo di gestione scolastica finalizzato a ridurre il carico di lavoro amministrativo del 40%. Include gestione studenti, insegnanti, classi, voti e reporting. Ottimizzazione dei processi amministrativi e maggiore efficienza del sistema educativo.'
        },
        mainImage: 'assets/projects/school-system.jpg',
        images: [
            'assets/projects/school-system.jpg',
        ],
        category: 'fullstack',
        tags: ['School Management', 'Administrative System', 'Database Design', 'Process Optimization', 'Educational Technology'],
        githubLink: 'https://github.com/username/school-management',
        technologies: ['Laravel', 'Vue.js', 'MySQL', 'Process Optimization', 'Educational Technology', 'Database Design']
    },
    {
        id: 10,
        title: {
            fa: 'بات‌های تلگرام - رزرو و پشتیبانی مشتری',
            en: 'Telegram Bots - Booking and Customer Support',
            it: 'Bot Telegram - Prenotazione e Supporto Clienti'
        },
        description: {
            fa: 'توسعه بات‌های تلگرام برای سیستم رزرو و پشتیبانی مشتری. شامل بات رزرو خودکار، بات پشتیبانی 24/7 و بات اطلاع‌رسانی. بهبود تجربه مشتری و کاهش حجم کار تیم پشتیبانی.',
            en: 'Development of Telegram bots for booking system and customer support. Includes automated booking bot, 24/7 support bot, and notification bot. Improving customer experience and reducing support team workload.',
            it: 'Sviluppo di bot Telegram per sistema di prenotazione e supporto clienti. Include bot di prenotazione automatizzato, bot di supporto 24/7 e bot di notifica. Miglioramento dell\'esperienza del cliente e riduzione del carico di lavoro del team di supporto.'
        },
        mainImage: 'assets/projects/telegram-bots.jpg',
        images: [
            'assets/projects/telegram-bots.jpg',
        ],
        category: 'mvp',
        tags: ['Telegram Bot', 'Automation', 'Customer Support', 'Booking System', 'API Integration'],
        githubLink: 'https://github.com/username/telegram-bots',
        technologies: ['Python', 'Telegram Bot API', 'Automation', 'Customer Support', 'API Integration']
    }
];

