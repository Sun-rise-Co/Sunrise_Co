<?php
require_once 'config.php';
?>
<!DOCTYPE html>
<html lang="<?php echo $current_lang; ?>" dir="<?php echo $current_lang == 'fa' ? 'rtl' : 'ltr'; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="SunRise - Custom AI Solutions, IoT, Machine Learning, Deep Learning">
    <title>SunRise - AI & Technology Solutions</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Vazirmatn:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="nav-wrapper">
                <div class="logo">
                    <a href="#home">SunRise</a>
                </div>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#home" class="nav-link"><?php echo t('nav_home'); ?></a></li>
                    <li><a href="#about" class="nav-link"><?php echo t('nav_about'); ?></a></li>
                    <li><a href="#services" class="nav-link"><?php echo t('nav_services'); ?></a></li>
                    <li><a href="#portfolio" class="nav-link"><?php echo t('nav_portfolio'); ?></a></li>
                    <li><a href="#contact" class="nav-link"><?php echo t('nav_contact'); ?></a></li>
                </ul>
                <div class="nav-actions">
                    <div class="language-switcher">
                        <a href="?lang=fa" class="lang-btn <?php echo $current_lang == 'fa' ? 'active' : ''; ?>" title="فارسی">فا</a>
                        <a href="?lang=en" class="lang-btn <?php echo $current_lang == 'en' ? 'active' : ''; ?>" title="English">EN</a>
                        <a href="?lang=it" class="lang-btn <?php echo $current_lang == 'it' ? 'active' : ''; ?>" title="Italiano">IT</a>
                    </div>
                    <button class="mobile-menu-toggle" id="mobileMenuToggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-background">
            <div class="gradient-overlay"></div>
            <div class="animated-shapes">
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
            </div>
        </div>
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title"><?php echo t('hero_title'); ?></h1>
                <p class="hero-subtitle"><?php echo t('hero_subtitle'); ?></p>
                <div class="hero-buttons">
                    <a href="#contact" class="btn btn-primary"><?php echo t('hero_cta'); ?></a>
                    <a href="#portfolio" class="btn btn-secondary"><?php echo t('hero_view_work'); ?></a>
                </div>
            </div>
        </div>
        <div class="scroll-indicator">
            <span></span>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php echo t('about_title'); ?></h2>
                <p class="section-subtitle"><?php echo t('about_subtitle'); ?></p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <p><?php echo t('about_description'); ?></p>
                    <div class="stats">
                        <div class="stat-item">
                            <h3 class="stat-number" data-target="150">0</h3>
                            <p class="stat-label"><?php echo $current_lang == 'fa' ? 'پروژه' : ($current_lang == 'it' ? 'Progetti' : 'Projects'); ?></p>
                        </div>
                        <div class="stat-item">
                            <h3 class="stat-number" data-target="50">0</h3>
                            <p class="stat-label"><?php echo $current_lang == 'fa' ? 'مشتری' : ($current_lang == 'it' ? 'Clienti' : 'Clients'); ?></p>
                        </div>
                        <div class="stat-item">
                            <h3 class="stat-number" data-target="10">0</h3>
                            <p class="stat-label"><?php echo $current_lang == 'fa' ? 'سال تجربه' : ($current_lang == 'it' ? 'Anni di Esperienza' : 'Years Experience'); ?></p>
                        </div>
                        <div class="stat-item">
                            <h3 class="stat-number" data-target="98">0</h3>
                            <p class="stat-label"><?php echo $current_lang == 'fa' ? 'رضایت' : ($current_lang == 'it' ? 'Soddisfazione' : 'Satisfaction'); ?>%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php echo t('services_title'); ?></h2>
                <p class="section-subtitle"><?php echo t('services_subtitle'); ?></p>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                    </div>
                    <h3 class="service-title"><?php echo t('service_ai'); ?></h3>
                    <p class="service-description"><?php echo t('service_ai_desc'); ?></p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <h3 class="service-title"><?php echo t('service_iot'); ?></h3>
                    <p class="service-description"><?php echo t('service_iot_desc'); ?></p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <h3 class="service-title"><?php echo t('service_ml'); ?></h3>
                    <p class="service-description"><?php echo t('service_ml_desc'); ?></p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
                        </svg>
                    </div>
                    <h3 class="service-title"><?php echo t('service_dl'); ?></h3>
                    <p class="service-description"><?php echo t('service_dl_desc'); ?></p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                        </svg>
                    </div>
                    <h3 class="service-title"><?php echo t('service_software'); ?></h3>
                    <p class="service-description"><?php echo t('service_software_desc'); ?></p>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php echo t('portfolio_title'); ?></h2>
                <p class="section-subtitle"><?php echo t('portfolio_subtitle'); ?></p>
            </div>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <div class="portfolio-image">
                        <div class="portfolio-overlay">
                            <a href="#" class="portfolio-link"><?php echo t('portfolio_view'); ?></a>
                        </div>
                        <div class="portfolio-placeholder">AI Analytics</div>
                    </div>
                    <div class="portfolio-content">
                        <h3 class="portfolio-title"><?php echo t('portfolio_1_title'); ?></h3>
                        <p class="portfolio-description"><?php echo t('portfolio_1_desc'); ?></p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-image">
                        <div class="portfolio-overlay">
                            <a href="#" class="portfolio-link"><?php echo t('portfolio_view'); ?></a>
                        </div>
                        <div class="portfolio-placeholder">IoT System</div>
                    </div>
                    <div class="portfolio-content">
                        <h3 class="portfolio-title"><?php echo t('portfolio_2_title'); ?></h3>
                        <p class="portfolio-description"><?php echo t('portfolio_2_desc'); ?></p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-image">
                        <div class="portfolio-overlay">
                            <a href="#" class="portfolio-link"><?php echo t('portfolio_view'); ?></a>
                        </div>
                        <div class="portfolio-placeholder">Deep Learning</div>
                    </div>
                    <div class="portfolio-content">
                        <h3 class="portfolio-title"><?php echo t('portfolio_3_title'); ?></h3>
                        <p class="portfolio-description"><?php echo t('portfolio_3_desc'); ?></p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-image">
                        <div class="portfolio-overlay">
                            <a href="#" class="portfolio-link"><?php echo t('portfolio_view'); ?></a>
                        </div>
                        <div class="portfolio-placeholder">ML Predictive</div>
                    </div>
                    <div class="portfolio-content">
                        <h3 class="portfolio-title"><?php echo t('portfolio_4_title'); ?></h3>
                        <p class="portfolio-description"><?php echo t('portfolio_4_desc'); ?></p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-image">
                        <div class="portfolio-overlay">
                            <a href="#" class="portfolio-link"><?php echo t('portfolio_view'); ?></a>
                        </div>
                        <div class="portfolio-placeholder">NLP</div>
                    </div>
                    <div class="portfolio-content">
                        <h3 class="portfolio-title"><?php echo t('portfolio_5_title'); ?></h3>
                        <p class="portfolio-description"><?php echo t('portfolio_5_desc'); ?></p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-image">
                        <div class="portfolio-overlay">
                            <a href="#" class="portfolio-link"><?php echo t('portfolio_view'); ?></a>
                        </div>
                        <div class="portfolio-placeholder">Recommendation</div>
                    </div>
                    <div class="portfolio-content">
                        <h3 class="portfolio-title"><?php echo t('portfolio_6_title'); ?></h3>
                        <p class="portfolio-description"><?php echo t('portfolio_6_desc'); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php echo t('contact_title'); ?></h2>
                <p class="section-subtitle"><?php echo t('contact_subtitle'); ?></p>
            </div>
            <div class="contact-wrapper">
                <div class="contact-form-container">
                    <form id="contactForm" class="contact-form">
                        <div class="form-group">
                            <input type="text" id="name" name="name" placeholder="<?php echo t('contact_name'); ?>" required>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="<?php echo t('contact_email'); ?>" required>
                        </div>
                        <div class="form-group">
                            <textarea id="message" name="message" rows="5" placeholder="<?php echo t('contact_message'); ?>" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary"><?php echo t('contact_send'); ?></button>
                        <div id="formMessage" class="form-message"></div>
                    </form>
                </div>
                <div class="contact-info">
                    <div class="info-item">
                        <div class="info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                        </div>
                        <div class="info-content">
                            <h4><?php echo $current_lang == 'fa' ? 'آدرس' : ($current_lang == 'it' ? 'Indirizzo' : 'Address'); ?></h4>
                            <p><?php echo $current_lang == 'fa' ? 'تهران، ایران' : ($current_lang == 'it' ? 'Milano, Italia' : 'Milan, Italy'); ?></p>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                            </svg>
                        </div>
                        <div class="info-content">
                            <h4><?php echo $current_lang == 'fa' ? 'تلفن' : ($current_lang == 'it' ? 'Telefono' : 'Phone'); ?></h4>
                            <p>+39 123 456 7890</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                        </div>
                        <div class="info-content">
                            <h4><?php echo $current_lang == 'fa' ? 'ایمیل' : ($current_lang == 'it' ? 'Email' : 'Email'); ?></h4>
                            <p>info@SunRise.co</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3 class="footer-logo">SunRise</h3>
                    <p class="footer-description"><?php echo t('footer_description'); ?></p>
                </div>
                <div class="footer-section">
                    <h4 class="footer-title"><?php echo t('footer_quick_links'); ?></h4>
                    <ul class="footer-links">
                        <li><a href="#home"><?php echo t('nav_home'); ?></a></li>
                        <li><a href="#about"><?php echo t('nav_about'); ?></a></li>
                        <li><a href="#services"><?php echo t('nav_services'); ?></a></li>
                        <li><a href="#portfolio"><?php echo t('nav_portfolio'); ?></a></li>
                        <li><a href="#contact"><?php echo t('nav_contact'); ?></a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4 class="footer-title"><?php echo t('footer_contact_info'); ?></h4>
                    <ul class="footer-links">
                        <li><?php echo $current_lang == 'fa' ? 'تهران، ایران' : ($current_lang == 'it' ? 'Milano, Italia' : 'Milan, Italy'); ?></li>
                        <li>+39 123 456 7890</li>
                        <li>info@SunRise.co</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> SunRise. <?php echo t('footer_rights'); ?></p>
            </div>
        </div>
    </footer>

    <script src="assets/js/main.js"></script>
</body>
</html>

