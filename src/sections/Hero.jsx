import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';
import designerImage from '../assets/designer.png';

const Hero = () => {
    const { t } = useTranslation();
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-transparent">

            {/* Background Gradient Blob */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-pink/30 rounded-full blur-[128px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/30 rounded-full blur-[128px] -z-10 animate-pulse delay-1000" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left rtl:text-right"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-brand-pink font-semibold tracking-widest mb-4 uppercase text-sm"
                    >
                        {t('hero.tagline')}
                    </motion.h2>
                    <motion.h1
                        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 flex flex-col gap-2 w-full max-w-full break-words"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >

                        {/* Prefix Animation */}
                        <motion.span
                            className="text-white block w-full"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 1 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        delayChildren: 0.5,
                                        staggerChildren: 0.05
                                    }
                                }
                            }}
                        >
                            {t('hero.title_prefix').split("").map((char, index) => (
                                <motion.span
                                    key={`p-${index}`}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 }
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.span>

                        {/* Suffix Animation */}
                        <motion.span
                            className="text-white block w-full"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 1 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        delayChildren: 2.5, // Start after prefix (approx calculation or adjusted feel)
                                        staggerChildren: 0.05
                                    }
                                }
                            }}
                        >
                            {t('hero.title_suffix').split("").map((char, index) => (
                                <motion.span
                                    key={`s-${index}`}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 }
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        className="text-blue-100 text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-4 items-center justify-start"
                    >
                        <Button variant="primary" onClick={() => document.getElementById('contact').scrollIntoView()} className="flex items-center gap-2">
                            <span>{t('hero.start_project')}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                        </Button>
                        <Button variant="outline" onClick={() => document.getElementById('work').scrollIntoView()}>
                            {t('hero.view_portfolio')}
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    style={{ y, opacity }}
                    className="relative hidden lg:block"
                >
                    {/* Designer Image in Foreground */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <img src={designerImage} alt="Designer Portrait" className="w-full h-auto object-contain drop-shadow-2xl" />
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-10 -right-10 w-24 h-24 border border-brand-pink/30 rounded-full border-dashed"
                    />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
                <span className="text-xs uppercase tracking-widest">{t('hero.scroll')}</span>
            </motion.div>
        </section >
    );
};

export default Hero;
