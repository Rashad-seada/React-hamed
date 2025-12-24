import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import designerImage from '../assets/designer.png';
import Button from '../components/ui/Button';

const About = () => {
    const { t, i18n } = useTranslation();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} id="about" className="relative min-h-screen bg-transparent flex items-center py-20 overflow-hidden">


            {/* Fluid Abstract Shape Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-pink/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10s]" />
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-blue/40 rounded-full blur-[100px] mix-blend-overlay" />

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center h-full">

                {/* Content: Typography & CTA */}
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tight mb-8"
                        style={{ fontFamily: i18n.language === 'ar' ? "'Alexandria', sans-serif" : 'inherit' }}
                    >
                        {t('about.im_hamed')}<br />
                        <span className="text-brand-pink drop-shadow-[0_0_15px_rgba(255,44,124,0.6)]">{t('about.the_designer')}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto mb-10 font-light leading-relaxed"
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button
                            variant="primary"
                            onClick={() => document.getElementById('contact').scrollIntoView()}
                            className="rounded-full px-8 py-4 text-lg flex items-center gap-3 bg-brand-pink hover:bg-brand-pink/90 text-white transition-all shadow-[0_0_20px_rgba(255,44,124,0.4)]"
                        >
                            <span>{t('hero.start_project')}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 -rotate-45 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
