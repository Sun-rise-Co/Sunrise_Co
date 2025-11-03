// Projects Data
const projects = [
    {
        id: 1,
        title: {
            fa: 'پلتفرم تحلیلی سازمانی STP',
            en: 'Enterprise STP Analytics Platform',
            it: 'Piattaforma di Analisi Enterprise STP'
        },
        description: {
            fa: 'پلتفرم پیشرفته تجزیه و تحلیل داده‌های سازمانی با داشبورد تعاملی و گزارش‌دهی بلادرنگ. این راهکار سازمانی با تمرکز بر مقیاس‌پذیری و دقت، به تصمیم‌گیری مبتنی بر داده در سطوح مدیریتی کمک می‌کند.',
            en: 'Advanced enterprise data analytics platform featuring real-time interactive dashboards and comprehensive reporting capabilities. This organizational solution enables data-driven decision-making at management levels with focus on scalability and precision.',
            it: 'Piattaforma avanzata di analisi dati enterprise con dashboard interattive in tempo reale e capacità di reporting completo. Questa soluzione organizzativa abilita il processo decisionale basato sui dati a livelli manageriali con focus su scalabilità e precisione.'
        },
        fullDescription: {
            fa: 'این پلتفرم تحلیلی سازمانی با استفاده از تکنولوژی‌های پیشرفته Laravel و Vue.js توسعه یافته است. سیستم شامل داشبوردهای تعاملی با Chart.js برای تجسم داده‌ها، سیستم گزارش‌دهی پیشرفته با امکان خروجی در فرمت‌های مختلف و قابلیت تحلیل داده‌ها در سطوح مختلف سازمانی است. معماری مقیاس‌پذیر این پلتفرم امکان مدیریت داده‌های حجیم را فراهم کرده و از امنیت بالایی برخوردار است.',
            en: 'This enterprise analytics platform has been developed using advanced Laravel and Vue.js technologies. The system includes interactive dashboards with Chart.js for data visualization, advanced reporting system with output capabilities in various formats, and data analysis capabilities at various organizational levels. The scalable architecture of this platform enables management of large volumes of data and provides high security.',
            it: 'Questa piattaforma di analisi enterprise è stata sviluppata utilizzando tecnologie avanzate Laravel e Vue.js. Il sistema include dashboard interattive con Chart.js per la visualizzazione dei dati, sistema di reporting avanzato con capacità di output in vari formati e capacità di analisi dei dati a vari livelli organizzativi. L\'architettura scalabile di questa piattaforma consente la gestione di grandi volumi di dati e fornisce alta sicurezza.'
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
            fa: 'سیستم ترجمه صوتی هوشمند مبتنی بر هوش مصنوعی',
            en: 'AI-Powered Intelligent Voice Translation System',
            it: 'Sistema di Traduzione Vocale Intelligente basato su IA'
        },
        description: {
            fa: 'راهکار پیشرفته ترجمه صوتی با استفاده از تکنولوژی‌های پیشرفته تشخیص گفتار و پردازش زبان طبیعی. این سیستم قابلیت ترجمه همزمان به چندین زبان را با دقت بالا و سرعت آنی فراهم می‌کند، مناسب برای محیط‌های بین‌المللی و ارتباطات سازمانی.',
            en: 'Advanced voice translation solution leveraging cutting-edge speech recognition and natural language processing technologies. This system provides real-time multilingual translation capabilities with high accuracy, ideal for international environments and organizational communications.',
            it: 'Soluzione avanzata di traduzione vocale che utilizza tecnologie all\'avanguardia di riconoscimento vocale e elaborazione del linguaggio naturale. Questo sistema fornisce capacità di traduzione multilingue in tempo reale con alta precisione, ideale per ambienti internazionali e comunicazioni organizzative.'
        },
        fullDescription: {
            fa: 'سیستم پیشرفته ترجمه صوتی که با استفاده از تکنولوژی‌های OpenAI و Python توسعه یافته است. این سیستم قابلیت تشخیص گفتار به‌صورت بلادرنگ را دارد و می‌تواند به چندین زبان ترجمه کند. مناسب برای جلسات بین‌المللی، کنفرانس‌ها و ارتباطات سازمانی.',
            en: 'Advanced voice translation system developed using OpenAI and Python technologies. This system has real-time speech recognition capabilities and can translate into multiple languages. Ideal for international meetings, conferences, and organizational communications.',
            it: 'Sistema avanzato di traduzione vocale sviluppato utilizzando tecnologie OpenAI e Python. Questo sistema ha capacità di riconoscimento vocale in tempo reale e può tradurre in più lingue. Ideale per riunioni internazionali, conferenze e comunicazioni organizzative.'
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
            fa: 'دستیار هوشمند مهاجرت داده‌های سازمانی',
            en: 'Enterprise Data Migration AI Assistant',
            it: 'Assistente IA per Migrazione Dati Enterprise'
        },
        description: {
            fa: 'راهکار تخصصی مهاجرت و انتقال داده‌های سازمانی با استفاده از هوش مصنوعی برای بهینه‌سازی فرآیندهای انتقال. این سیستم با قابلیت‌های پیشرفته تحلیل و بررسی داده‌ها، امنیت و صحت انتقال را تضمین می‌کند.',
            en: 'Specialized enterprise data migration and transfer solution utilizing artificial intelligence to optimize transfer processes. This system ensures secure and accurate data transfer through advanced analysis and validation capabilities.',
            it: 'Soluzione specializzata per migrazione e trasferimento dati enterprise che utilizza l\'intelligenza artificiale per ottimizzare i processi di trasferimento. Questo sistema garantisce un trasferimento dati sicuro e accurato attraverso capacità avanzate di analisi e validazione.'
        },
        fullDescription: {
            fa: 'دستیار هوشمند مهاجرت داده‌ها که با استفاده از FastAPI و Vue.js توسعه یافته است. این سیستم قابلیت مهاجرت خودکار داده‌ها از سیستم‌های قدیمی به جدید را دارد و شامل ماژول‌های گزارش‌دهی پیشرفته و بررسی صحت داده‌ها است.',
            en: 'Intelligent data migration assistant developed using FastAPI and Vue.js. This system has automatic data migration capabilities from old systems to new ones and includes advanced reporting modules and data validation.',
            it: 'Assistente intelligente per migrazione dati sviluppato utilizzando FastAPI e Vue.js. Questo sistema ha capacità di migrazione dati automatica da sistemi vecchi a nuovi e include moduli di reporting avanzati e validazione dei dati.'
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
            fa: 'پلتفرم دیجیتال جامعه ایرانیان اروپا',
            en: 'Digital Platform for Iranian Community in Europe',
            it: 'Piattaforma Digitale per la Comunità Iraniana in Europa'
        },
        description: {
            fa: 'توسعه پلتفرم جامع دیجیتال برای جامعه ایرانیان مقیم اروپا با معماری مقیاس‌پذیر و امن. این پلتفرم با تمرکز بر عملکرد بالا و تجربه کاربری بهینه، امکان ارتباط و تعامل موثر بین اعضای جامعه را فراهم می‌کند. طراحی بر اساس اصول موبایل‌اول و دسترس‌پذیری استاندارد.',
            en: 'Comprehensive digital platform development for the Iranian community in Europe with scalable and secure architecture. This platform focuses on high performance and optimized user experience, enabling effective communication and interaction among community members. Designed based on mobile-first principles and standard accessibility guidelines.',
            it: 'Sviluppo di piattaforma digitale completa per la comunità iraniana in Europa con architettura scalabile e sicura. Questa piattaforma si concentra su alte prestazioni e esperienza utente ottimizzata, abilitando comunicazione ed interazione efficace tra i membri della comunità. Progettata sulla base di principi mobile-first e linee guida standard di accessibilità.'
        },
        fullDescription: {
            fa: 'پلتفرم جامع دیجیتال با معماری Laravel و Vue.js که امکان ارتباط و تعامل بین اعضای جامعه ایرانیان در اروپا را فراهم می‌کند. شامل سیستم پیام‌رسانی، رویدادها، آگهی‌ها و بخش‌های تعاملی متعدد با طراحی UX/UI حرفه‌ای و بهینه‌سازی شده برای موبایل.',
            en: 'Comprehensive digital platform with Laravel and Vue.js architecture that enables communication and interaction among Iranian community members in Europe. Includes messaging system, events, classifieds, and multiple interactive sections with professional UX/UI design optimized for mobile.',
            it: 'Piattaforma digitale completa con architettura Laravel e Vue.js che consente comunicazione e interazione tra i membri della comunità iraniana in Europa. Include sistema di messaggistica, eventi, annunci e sezioni interattive multiple con design UX/UI professionale ottimizzato per mobile.'
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
            fa: 'سیستم مدیریت رزرواسیون هتل و اقامتگاه',
            en: 'Hotel & Accommodation Reservation Management System',
            it: 'Sistema di Gestione Prenotazioni Hotel e Alloggi'
        },
        description: {
            fa: 'سیستم جامع مدیریت رزرواسیون آنلاین برای صنعت هتل‌داری و مراکز اقامتی. این راهکار با ویژگی‌های پیشرفته مدیریت ظرفیت، پرداخت‌های امن و گزارش‌دهی تحلیلی، فرآیند رزرواسیون را بهینه‌سازی می‌کند.',
            en: 'Comprehensive online reservation management system for the hospitality and accommodation industry. This solution optimizes the booking process through advanced capacity management, secure payment processing, and analytical reporting features.',
            it: 'Sistema completo di gestione prenotazioni online per l\'industria dell\'ospitalità e degli alloggi. Questa soluzione ottimizza il processo di prenotazione attraverso funzionalità avanzate di gestione della capacità, elaborazione dei pagamenti sicuri e reporting analitico.'
        },
        fullDescription: {
            fa: 'سیستم مدیریت رزرواسیون کامل با PHP و MySQL که شامل مدیریت ظرفیت، سیستم پرداخت یکپارچه، مدیریت مهمان، گزارش‌دهی و داشبورد مدیریتی است. رابط کاربری ساده و کارآمد برای کاربران نهایی و پنل مدیریت پیشرفته برای مدیران.',
            en: 'Complete reservation management system with PHP and MySQL that includes capacity management, integrated payment system, guest management, reporting, and administrative dashboard. Simple and efficient user interface for end users and advanced admin panel for managers.',
            it: 'Sistema completo di gestione prenotazioni con PHP e MySQL che include gestione capacità, sistema di pagamento integrato, gestione ospiti, reporting e dashboard amministrativa. Interfaccia utente semplice ed efficiente per utenti finali e pannello amministrativo avanzato per manager.'
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
            fa: 'سیستم دیجیتال منو و سفارش رستوران',
            en: 'Digital Restaurant Menu & Ordering System',
            it: 'Sistema Digitale Menu e Ordinazioni Ristorante'
        },
        description: {
            fa: 'راهکار دیجیتال جامع برای مدیریت منو و سفارش‌گیری در رستوران‌ها با استفاده از تکنولوژی QR Code. این سیستم امکان سفارش آنلاین، مدیریت منو به‌صورت بلادرنگ و بهینه‌سازی فرآیند خدمت‌رسانی را فراهم می‌کند.',
            en: 'Comprehensive digital solution for restaurant menu management and ordering using QR Code technology. This system enables online ordering, real-time menu management, and optimization of service delivery processes.',
            it: 'Soluzione digitale completa per la gestione del menu e delle ordinazioni nei ristoranti utilizzando la tecnologia QR Code. Questo sistema abilita ordinazioni online, gestione menu in tempo reale e ottimizzazione dei processi di consegna del servizio.'
        },
        fullDescription: {
            fa: 'سیستم دیجیتال منو رستوران با Laravel و Vue.js که امکان اسکن QR Code و مشاهده منو، سفارش آنلاین، مدیریت منو به‌صورت بلادرنگ و سیستم مدیریت سفارش‌ها را فراهم می‌کند. کاهش تماس با میزبان و افزایش سرعت خدمت‌رسانی.',
            en: 'Digital restaurant menu system with Laravel and Vue.js that enables QR Code scanning and menu viewing, online ordering, real-time menu management, and order management system. Reduces host contact and increases service speed.',
            it: 'Sistema digitale menu ristorante con Laravel e Vue.js che consente scansione QR Code e visualizzazione menu, ordinazioni online, gestione menu in tempo reale e sistema di gestione ordini. Riduce il contatto con il cameriere e aumenta la velocità del servizio.'
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
            fa: 'اپلیکیشن مدیریت زمان و برنامه‌ریزی شخصی',
            en: 'Personal Time Management & Planning Application',
            it: 'Applicazione di Gestione del Tempo e Pianificazione Personale'
        },
        description: {
            fa: 'اپلیکیشن تخصصی مدیریت زمان و برنامه‌ریزی با قابلیت‌های پیشرفته برنامه‌ریزی روزانه، یادآوری هوشمند و مدیریت وظایف. این راهکار با رابط کاربری ساده و کارآمد، به بهینه‌سازی زمان و افزایش بهره‌وری کمک می‌کند.',
            en: 'Specialized time management and planning application with advanced daily scheduling, intelligent reminders, and task management capabilities. This solution helps optimize time and increase productivity through simple and efficient user interface.',
            it: 'Applicazione specializzata di gestione del tempo e pianificazione con capacità avanzate di programmazione giornaliera, promemoria intelligenti e gestione delle attività. Questa soluzione aiuta a ottimizzare il tempo e aumentare la produttività attraverso un\'interfaccia utente semplice ed efficiente.'
        },
        fullDescription: {
            fa: 'اپلیکیشن موبایل با React Native و TypeScript که امکان برنامه‌ریزی روزانه، یادآوری هوشمند، مدیریت وظایف و ردیابی زمان را فراهم می‌کند. با backend Node.js و Express و دیتابیس MySQL. رابط کاربری ساده و کاربرپسند برای بهبود بهره‌وری.',
            en: 'Mobile application with React Native and TypeScript that enables daily scheduling, intelligent reminders, task management, and time tracking. With Node.js and Express backend and MySQL database. Simple and user-friendly interface for improved productivity.',
            it: 'Applicazione mobile con React Native e TypeScript che consente pianificazione giornaliera, promemoria intelligenti, gestione attività e tracciamento del tempo. Con backend Node.js e Express e database MySQL. Interfaccia semplice e user-friendly per una migliore produttività.'
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
            fa: 'سیستم جامع مدیریت مدرسه و نهادهای آموزشی',
            en: 'Comprehensive School & Educational Institution Management System',
            it: 'Sistema Completo di Gestione Scolastica e Istituzioni Educative'
        },
        description: {
            fa: 'پلتفرم جامع مدیریتی برای نهادهای آموزشی با قابلیت کاهش قابل توجه حجم کار اداری (تا 40%). این سیستم شامل ماژول‌های مدیریت دانش‌آموز، معلم، کلاس‌ها، سیستم نمره‌دهی و گزارش‌دهی تحلیلی است که فرآیندهای اداری را بهینه‌سازی و کارایی کلی سیستم آموزشی را افزایش می‌دهد.',
            en: 'Comprehensive management platform for educational institutions with capability to significantly reduce administrative workload (up to 40%). This system includes modules for student, teacher, class management, grading system, and analytical reporting that optimizes administrative processes and enhances overall educational system efficiency.',
            it: 'Piattaforma di gestione completa per istituzioni educative con capacità di ridurre significativamente il carico di lavoro amministrativo (fino al 40%). Questo sistema include moduli per gestione studenti, insegnanti, classi, sistema di valutazione e reporting analitico che ottimizza i processi amministrativi e migliora l\'efficienza complessiva del sistema educativo.'
        },
        fullDescription: {
            fa: 'سیستم جامع مدیریت مدرسه با Laravel و Vue.js که شامل مدیریت دانش‌آموزان، معلمان، کلاس‌ها، سیستم نمره‌دهی، حضور و غیاب، گزارش‌دهی تحلیلی و ارتباط با والدین است. کاهش 40% حجم کار اداری و افزایش کارایی سیستم آموزشی.',
            en: 'Comprehensive school management system with Laravel and Vue.js that includes student, teacher, class management, grading system, attendance, analytical reporting, and parent communication. Reduces 40% of administrative workload and increases educational system efficiency.',
            it: 'Sistema completo di gestione scolastica con Laravel e Vue.js che include gestione studenti, insegnanti, classi, sistema di valutazione, presenze, reporting analitico e comunicazione con i genitori. Riduce del 40% il carico di lavoro amministrativo e aumenta l\'efficienza del sistema educativo.'
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
            fa: 'سیستم اتوماسیون پشتیبانی و رزرواسیون مبتنی بر چت‌بات',
            en: 'Chatbot-Based Support & Reservation Automation System',
            it: 'Sistema di Automazione Supporto e Prenotazioni basato su Chatbot'
        },
        description: {
            fa: 'راهکار پیشرفته اتوماسیون خدمات مشتری با استفاده از چت‌بات‌های هوشمند در پلتفرم تلگرام. این سیستم شامل ماژول‌های رزرواسیون خودکار، پشتیبانی 24/7 و سیستم اطلاع‌رسانی پیشرفته است که تجربه مشتری را به‌طور قابل توجهی بهبود می‌بخشد و حجم کار تیم پشتیبانی را کاهش می‌دهد.',
            en: 'Advanced customer service automation solution using intelligent chatbots on Telegram platform. This system includes automated reservation modules, 24/7 support capabilities, and advanced notification system that significantly improves customer experience and reduces support team workload.',
            it: 'Soluzione avanzata di automazione del servizio clienti utilizzando chatbot intelligenti sulla piattaforma Telegram. Questo sistema include moduli di prenotazione automatizzati, capacità di supporto 24/7 e sistema di notifica avanzato che migliora significativamente l\'esperienza del cliente e riduce il carico di lavoro del team di supporto.'
        },
        fullDescription: {
            fa: 'سیستم اتوماسیون کامل با چت‌بات‌های تلگرام که شامل رزرواسیون خودکار، پشتیبانی 24/7، سیستم اطلاع‌رسانی و مدیریت سفارش‌ها است. توسعه شده با Python و Telegram Bot API. کاهش قابل توجه حجم کار تیم پشتیبانی و بهبود تجربه مشتری.',
            en: 'Complete automation system with Telegram chatbots that includes automated reservations, 24/7 support, notification system, and order management. Developed with Python and Telegram Bot API. Significantly reduces support team workload and improves customer experience.',
            it: 'Sistema di automazione completo con chatbot Telegram che include prenotazioni automatizzate, supporto 24/7, sistema di notifica e gestione ordini. Sviluppato con Python e Telegram Bot API. Riduce significativamente il carico di lavoro del team di supporto e migliora l\'esperienza del cliente.'
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

