import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import designerImage from '../assets/designer.webp';
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
        <section ref={containerRef} id="about" className="relative min-h-screen bg-transparent flex items-center py-40 overflow-hidden">



            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">

                {/* Profile Card Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-5xl bg-[#0a0a0a]/10 backdrop-blur-xl rounded-[2.5rem] border border-brand-pink p-8 pt-32 md:p-16 md:pt-40 flex flex-col items-center text-center shadow-2xl"
                >

                    {/* Profile Image - Floating at top center */}
                    <div className="absolute -top-20 md:-top-28 left-1/2 -translate-x-1/2">
                        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full p-1.5 bg-gradient-to-b from-brand-pink to-[#892CDC] shadow-[0_0_50px_rgba(255,44,124,0.5)]">
                            <img
                                src={designerImage}
                                alt="Hamed Sharaf"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6"
                        style={{ fontFamily: i18n.language === 'ar' ? "'Alexandria', sans-serif" : 'inherit' }}
                    >
                        {t('about.im_hamed')}
                    </motion.h2>

                    {/* Designer Subtitle with Highlight */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-white/90 text-lg md:text-2xl font-bold mb-10 leading-relaxed"
                        style={{ fontFamily: i18n.language === 'ar' ? "'Alexandria', sans-serif" : 'inherit' }}
                    >
                        {t('about.subtitle_prefix')}
                        <span className="text-brand-pink mx-1">{t('about.subtitle_highlight')}</span>
                        {t('about.subtitle_suffix')}
                    </motion.div>

                    {/* Description Paragraphs */}
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-gray-300 text-lg md:text-xl leading-loose"
                        >
                            {t('about.description_p1')}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-gray-300 text-lg md:text-xl leading-loose"
                        >
                            {t('about.description_p2')}
                        </motion.p>
                    </div>

                </motion.div>

                {/* CTA Button - MOVED OUTSIDE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 relative z-10"
                >
                    <Button
                        variant="primary"
                        onClick={() => document.getElementById('contact').scrollIntoView()}
                        className="rounded-full px-12 py-4 text-lg font-bold flex items-center gap-3 bg-brand-pink hover:bg-brand-pink/90 text-white transition-all shadow-[0_0_30px_rgba(255,44,124,0.3)] hover:shadow-[0_0_50px_rgba(255,44,124,0.5)] transform hover:-translate-y-1"
                    >
                        <span>{t('hero.start_project')}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 -rotate-45 rtl:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
