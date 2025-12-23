import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';
import bgSmoke from '../assets/bg-smoke.png';

const projects = [
    {
        id: "hook_home",
        title: "Hook Home Real Estate",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/cc4ea6237298261.Y3JvcCw4MjcsNjQ2LDAsMg.jpg",
        color: "from-blue-900 to-indigo-900",
        link: "https://www.behance.net/gallery/237298261/Hook-Home-Real-Estate-Companys-visual-identity"
    },
    {
        id: "new_design",
        title: "New Design Real Estate",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/8d2588232464499.Y3JvcCw4MjcsNjQ2LDAsMg.jpg",
        color: "from-gray-800 to-gray-900",
        link: "https://www.behance.net/gallery/232464499/Visual-identity-New-Design-Real-Estate-Company"
    },
    {
        id: "guidix",
        title: "Guidix Education",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/7f5150216479875.Y3JvcCw4MjcsNjQ2LDAsMg.jpg",
        color: "from-blue-500 to-cyan-500",
        link: "https://www.behance.net/gallery/216479875/Visual-identity-Guidix-Education"
    },
    {
        id: "energy_workspace",
        title: "Energy Workspace",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/d8edd7214825375.Y3JvcCw4MjcsNjQ2LDAsMg.jpg",
        color: "from-orange-500 to-amber-500",
        link: "https://www.behance.net/gallery/214825375/Visual-identity-(energy)-work-space"
    },
    {
        id: "fixitpro",
        title: "Fixitpro Decoration",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/529268219943005.Y3JvcCw4NDEsNjU4LDQsMA.jpg",
        color: "from-yellow-600 to-orange-600",
        link: "https://www.behance.net/gallery/219943005/Visual-identity-of-fixitpro-Decoration-Company"
    },
    {
        id: "codex",
        title: "Codex Programming",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/f4c705213149073.Y3JvcCw4MjcsNjQ2LDAsMg.jpg",
        color: "from-purple-600 to-indigo-600",
        link: "https://www.behance.net/gallery/213149073/visual-identity-for-Codex-Programming"
    }
];

const Portfolio = () => {
    const { t, i18n } = useTranslation();
    const [activeProject, setActiveProject] = useState(0);
    const containerRef = useRef(null);

    return (
        <section id="work" ref={containerRef} className="relative bg-transparent min-h-screen py-32 text-left rtl:text-right">
            {/* Background Texture - Drifting */}
            <div className="absolute inset-0 opacity-20 select-none pointer-events-none mix-blend-screen z-0 overflow-hidden">
                <motion.img
                    src={bgSmoke}
                    alt="Smoke Texture"
                    className="w-full h-full object-cover"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">

                    {/* Sticky Sidebar (Left) */}
                    <div className="lg:w-1/2 lg:h-[80vh] lg:sticky lg:top-20 flex flex-col justify-center mb-12 lg:mb-0">
                        <div className="mb-4 lg:mb-8">
                            <h2 className="text-sm font-bold text-brand-pink tracking-widest uppercase mb-4">{t('portfolio.selected_work')}</h2>
                            <div className="h-1 w-20 bg-brand-pink/50 rounded-full rtl:mr-0 rtl:ml-auto" />
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                                className="mb-8 lg:mb-0"
                            >
                                <span className="text-blue-200 text-sm md:text-lg uppercase tracking-widest font-mono mb-2 block">
                                    0{activeProject + 1} — {t(`portfolio.projects.${projects[activeProject].id}.category`)}
                                </span>
                                <h3 className="text-4xl md:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                                    {projects[activeProject].title}
                                </h3>
                                <p className="text-blue-100 text-base md:text-xl leading-relaxed max-w-md rtl:ml-auto">
                                    {t(`portfolio.projects.${projects[activeProject].id}.description`)}
                                </p>
                                <a
                                    href={projects[activeProject].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-6 text-brand-pink border-b border-brand-pink pb-1 hover:text-white hover:border-white transition-colors uppercase text-sm tracking-widest"
                                >
                                    {i18n.language === 'ar' ? 'عرض المشروع' : 'View Project'}
                                </a>
                            </motion.div>
                        </AnimatePresence>

                        {/* Custom Navigation Dots (Optional / Decorative) */}
                        <div className="flex gap-4 mt-8 lg:mt-12 rtl:mr-0 rtl:ml-auto">
                            {projects.map((_, idx) => (
                                <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeProject ? 'w-12 bg-white' : 'w-4 bg-white/20'}`} />
                            ))}
                        </div>
                    </div>

                    {/* Scrollable Images (Right) */}
                    <div className="lg:w-1/2 flex flex-col gap-16 lg:gap-[50vh] pb-32">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ amount: 0.5 }}
                                onViewportEnter={() => setActiveProject(index)}
                                transition={{ duration: 0.8 }}
                                className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden group shadow-2xl cursor-pointer"
                            >
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay z-10`} />
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    {/* Mobile-only overlay for text context if sticking isn't perfect on small screens */}
                                    <div className="absolute inset-0 bg-black/20 lg:hidden" />

                                    {/* Hover Overlay Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}

                        <div className="flex justify-center w-full">
                            <Button
                                variant="outline"
                                onClick={() => window.open('https://www.behance.net/hamed-sharaf', '_blank')}
                                className="flex items-center gap-2 text-xl px-8 py-4 border-white/30 hover:border-brand-pink"
                            >
                                <span>{t('portfolio.see_more')}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM5 4H19C19.552 4 20 4.448 20 5V19C20 19.552 19.552 20 19 20H5C4.448 20 4 19.552 4 19V5C4 4.448 4.448 4 5 4Z" />
                                    <path d="M11.5 9H8.5V15H10.25C11.5 15 12.25 14.25 12.25 13.25C12.25 12.5 11.9 12 11.5 11.75C12 11.5 12.25 11 12.25 10.25C12.25 9.5 11.9 9 11.5 9ZM10.1 10H11.25C11.4 10 11.5 10.1 11.5 10.35C11.5 10.6 11.4 10.75 11.25 10.75H10.1V10ZM10.1 11.75H11.25C11.4 11.75 11.5 11.9 11.5 12.35C11.5 12.8 11.3 12.95 11.05 12.95H10.1V11.75ZM15.5 11.25C14.5 11.25 13.9 11.85 13.9 12.75C13.9 13.65 14.5 14.25 15.5 14.25C16.1 14.25 16.5 14 16.7 13.5H17.4C17.1 14.5 16.4 15 15.5 15C14 15 13.1 13.95 13.1 12.75C13.1 11.55 14 10.5 15.5 10.5C16.85 10.5 17.5 11.5 17.5 12.65V12.9H13.9C13.95 13.5 14.35 13.8 15.5 13.8C16 13.8 16.4 13.65 16.5 13.15H15.5ZM14 12H16.75C16.7 11.55 16.35 11.1 15.5 11.1C14.7 11.1 14.15 11.5 14 12ZM14.75 10.25H16.25V9.5H14.75V10.25Z" />
                                </svg>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Portfolio;
