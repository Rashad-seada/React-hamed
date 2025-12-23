import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Preloader from './components/layout/Preloader';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const { i18n } = useTranslation();

    useEffect(() => {
        // Set direction and language
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-brand-blue min-h-screen text-white selection:bg-brand-pink selection:text-white">
            <AnimatePresence>
                {isLoading ? (
                    <Preloader key="preloader" />
                ) : (
                    <>
                        <Navbar />
                        <main>
                            <Hero />
                            <Portfolio />
                            <About />
                        </main>
                        <Footer />
                        <WhatsAppButton />
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
