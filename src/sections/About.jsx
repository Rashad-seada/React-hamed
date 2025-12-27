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
        <section ref={containerRef} id="about" className="relative min-h-screen bg-transparent flex items-center py-32 overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-pink/10 rounded-full blur-[120px] mix-blend-screen" />

            <div className="container mx-auto px-4 relative z-10 flex justify-center">

                {/* Profile Card Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-4xl bg-brand-dark/50 backdrop-blur-md rounded-3xl border border-brand-pink/30 p-8 md:p-12 lg:p-16 flex flex-col items-center text-center shadow-[0_0_50px_rgba(255,44,124,0.15)]"
                >

                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 rounded-3xl border border-brand-pink/50 shadow-[0_0_30px_rgba(255,44,124,0.2)_inset]" />

                    {/* Profile Image - Floating at top */}
                    <div className="relative mb-8 -mt-24 md:-mt-32">
                        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-b from-brand-pink to-brand-blue shadow-[0_0_40px_rgba(255,44,124,0.4)]">
                            <img
                                src={designerImage}
                                alt="Hamed Sharaf"
                                className="w-full h-full object-cover rounded-full border-4 border-brand-dark"
                            />
                        </div>
                    </div>

                    {/* Name & Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-6xl font-black text-white mb-4"
                        style={{ fontFamily: i18n.language === 'ar' ? "'Alexandria', sans-serif" : 'inherit' }}
                    >
                        {t('about.im_hamed')}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-brand-pink text-lg md:text-xl font-bold tracking-widest uppercase mb-8"
                    >
                        {t('about.the_designer')}
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-12"
                    >
                        {t('about.description')}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="relative z-10"
                    >
                        <Button
                            variant="primary"
                            onClick={() => document.getElementById('contact').scrollIntoView()}
                            className="rounded-full px-10 py-4 text-lg flex items-center gap-3 bg-brand-pink hover:bg-brand-pink/90 text-white transition-all shadow-[0_0_20px_rgba(255,44,124,0.4)] hover:shadow-[0_0_30px_rgba(255,44,124,0.6)]"
                        >
                            <span>{t('hero.start_project')}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 -rotate-45 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Button>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
