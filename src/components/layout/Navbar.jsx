import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { name: t('nav.work'), href: '#work' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-blue/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                <a href="#" className="block">
                    <motion.div layoutId="brand-logo" transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }}>
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-blue via-blue-700 to-blue-900 border-2 border-brand-pink flex items-center justify-center p-2 shadow-lg shadow-brand-pink/20">
                            <img src={logo} alt="Brand Logo" className="w-full h-full object-contain" />
                        </div>
                    </motion.div>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                    <button
                        onClick={toggleLanguage}
                        className="text-sm font-medium text-white hover:text-brand-pink transition-colors uppercase"
                    >
                        {i18n.language === 'en' ? 'AR' : 'EN'}
                    </button>

                    <a
                        href="#contact"
                        className="px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-brand-pink hover:text-white transition-colors"
                    >
                        {t('nav.start_project')}
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
