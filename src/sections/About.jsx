import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import bgGeo from '../assets/bg-geo.png';

const Phrase = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.2, 1, 0.2]);
    const blur = useTransform(progress, range, ["4px", "0px", "4px"]);

    return (
        <motion.span style={{ opacity, filter: useTransform(blur, b => `blur(${b})`) }} className="rtl:ml-3 ltr:mr-3 mx-1 transition-colors duration-500">
            {children}
        </motion.span>
    );
};

const About = () => {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const philosophy = t('about.philosophy_text');
    const words = philosophy.split(" ");

    // Calculate ranges for each word to highlight sequentially
    const step = 1 / words.length;

    return (
        <section ref={containerRef} id="about" className="relative h-[250vh] md:h-[300vh] bg-transparent" style={{ position: 'relative' }}>
            {/* Background Geometric - Fixed */}
            <div className="fixed inset-0 opacity-10 select-none pointer-events-none mix-blend-screen z-0 overflow-hidden">
                <motion.img
                    src={bgGeo}
                    alt="Geometric Texture"
                    className="w-full h-full object-cover"
                    animate={{ y: [-20, 0, -20] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="sticky top-0 h-screen overflow-hidden pt-20 pb-20 flex flex-col justify-start items-center md:pt-40">
                <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-sm font-bold text-brand-pink tracking-widest uppercase mb-12 text-center"
                    >
                        {t('about.philosophy_title')}
                    </motion.h2>

                    <div className="flex flex-wrap justify-center text-center" dir="auto">
                        {words.map((word, i) => {
                            const start = i * step;
                            const end = start + (step * 2);
                            return (
                                <Phrase key={i} progress={scrollYProgress} range={[start, (start + end) / 2, end]}>
                                    <span className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-4 inline-block">{word}</span>
                                </Phrase>
                            );
                        })}
                    </div>

                    <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12 w-full">
                        <div className="text-center">
                            <span className="block text-5xl font-bold text-white mb-2">12+</span>
                            <span className="text-sm text-brand-pink uppercase tracking-widest">{t('about.years_experience')}</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-5xl font-bold text-white mb-2">85+</span>
                            <span className="text-sm text-brand-pink uppercase tracking-widest">{t('about.projects_shipped')}</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-5xl font-bold text-white mb-2">15</span>
                            <span className="text-sm text-brand-pink uppercase tracking-widest">{t('about.global_awards')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
