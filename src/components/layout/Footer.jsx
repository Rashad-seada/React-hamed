import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import bgGeo from '../../assets/bg-geo.png';
import Magnetic from '../ui/Magnetic';

const Footer = () => {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <footer id="contact" className="relative min-h-[80vh] flex flex-col justify-center items-center bg-transparent overflow-hidden">
            {/* Background Texture*/}
            <div className="absolute inset-0 opacity-5 select-none pointer-events-none z-0">
                <img src={bgGeo} alt="Geometric Texture" className="w-full h-full object-cover" />
            </div>

            {/* Dynamic Glow on Hover */}
            <motion.div
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.5 : 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/20 rounded-full blur-[100px] pointer-events-none -z-10"
            />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div
                    className="inline-block"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Magnetic>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-pink hover:to-white transition-all duration-500 cursor-pointer"
                        >
                            <a href="mailto:hello@designer.com">{t('footer.lets_talk')}</a>
                        </motion.h2>
                    </Magnetic>
                </div>

                <div className="w-full max-w-2xl mx-auto flex items-center gap-4 mb-12">
                    <div className="h-px bg-white/20 flex-1" />
                    <span className="text-white/50 text-sm uppercase tracking-widest">{t('footer.contact_us')}</span>
                    <div className="h-px bg-white/20 flex-1" />
                </div>

                <div className="flex justify-center gap-8 md:gap-12 mb-24">
                    {[
                        {
                            name: 'WhatsApp', href: 'https://wa.me/1234567890', icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                            )
                        },
                        {
                            name: 'Instagram', href: 'https://instagram.com', icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            )
                        },
                        {
                            name: 'Behance', href: 'https://behance.net', icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM5 4H19C19.552 4 20 4.448 20 5V19C20 19.552 19.552 20 19 20H5C4.448 20 4 19.552 4 19V5C4 4.448 4.448 4 5 4Z" />
                                    <path d="M11.5 9H8.5V15H10.25C11.5 15 12.25 14.25 12.25 13.25C12.25 12.5 11.9 12 11.5 11.75C12 11.5 12.25 11 12.25 10.25C12.25 9.5 11.9 9 11.5 9ZM10.1 10H11.25C11.4 10 11.5 10.1 11.5 10.35C11.5 10.6 11.4 10.75 11.25 10.75H10.1V10ZM10.1 11.75H11.25C11.4 11.75 11.5 11.9 11.5 12.35C11.5 12.8 11.3 12.95 11.05 12.95H10.1V11.75ZM15.5 11.25C14.5 11.25 13.9 11.85 13.9 12.75C13.9 13.65 14.5 14.25 15.5 14.25C16.1 14.25 16.5 14 16.7 13.5H17.4C17.1 14.5 16.4 15 15.5 15C14 15 13.1 13.95 13.1 12.75C13.1 11.55 14 10.5 15.5 10.5C16.85 10.5 17.5 11.5 17.5 12.65V12.9H13.9C13.95 13.5 14.35 13.8 15.5 13.8C16 13.8 16.4 13.65 16.5 13.15H15.5ZM14 12H16.75C16.7 11.55 16.35 11.1 15.5 11.1C14.7 11.1 14.15 11.5 14 12ZM14.75 10.25H16.25V9.5H14.75V10.25Z" />
                                </svg>
                            )
                        },
                        {
                            name: 'LinkedIn', href: 'https://linkedin.com', icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            )
                        },
                    ].map((item) => (
                        <Magnetic key={item.name}>
                            <a
                                href={item.href}
                                className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-brand-pink hover:border-brand-pink hover:bg-white/5 transition-all duration-300 relative group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.icon}
                            </a>
                        </Magnetic>
                    ))}
                </div>

                <div className="absolute bottom-10 left-0 right-0 text-center">
                    <p className="text-xs text-brand-blue uppercase tracking-[0.3em]">
                        {t('footer.crafted_with_passion')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
