import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';

const projects = [
    {
        id: "hook_home",
        title: "Hook Home Real Estate",
        category: "real-estate",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/cc4ea6237298261.Y3JvcCw4MjcsNjQ2LDAsMg.jpg",
        link: "https://www.behance.net/gallery/237298261/Hook-Home-Real-Estate-Companys-visual-identity"
    },
    {
        id: "new_design",
        title: "New Design Real Estate",
        category: "real-estate",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/8d2588232464499.Y3JvcCw4MjcsNjQ2LDAsMg.jpg",
        link: "https://www.behance.net/gallery/232464499/Visual-identity-New-Design-Real-Estate-Company"
    },
    {
        id: "guidix",
        title: "Guidix Education",
        category: "education",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/7f5150216479875.Y3JvcCw4MjcsNjQ2LDAsMg.jpg",
        link: "https://www.behance.net/gallery/216479875/Visual-identity-Guidix-Education"
    },
    {
        id: "energy_workspace",
        title: "Energy Workspace",
        category: "workspace",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/d8edd7214825375.Y3JvcCw4MjcsNjQ2LDAsMg.jpg",
        link: "https://www.behance.net/gallery/214825375/Visual-identity-(energy)-work-space"
    },
    {
        id: "fixitpro",
        title: "Fixitpro Decoration",
        category: "decor",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/529268219943005.Y3JvcCw4NDEsNjU4LDQsMA.jpg",
        link: "https://www.behance.net/gallery/219943005/Visual-identity-of-fixitpro-Decoration-Company"
    },
    {
        id: "codex",
        title: "Codex Programming",
        category: "tech",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/f4c705213149073.Y3JvcCw4MjcsNjQ2LDAsMg.jpg",
        link: "https://www.behance.net/gallery/213149073/visual-identity-for-Codex-Programming"
    }
];

const tabs = [
    { id: "all", labelEn: "All", labelAr: "الكل" },
    { id: "real-estate", labelEn: "Real Estate", labelAr: "عقارات" },
    { id: "education", labelEn: "Education", labelAr: "تعليم" },
    { id: "tech", labelEn: "Tech", labelAr: "تكنولوجيا" },
    { id: "workspace", labelEn: "Workspace", labelAr: "مساحات عمل" },
    { id: "decor", labelEn: "Decor", labelAr: "ديكور" },
];

const Portfolio = () => {
    const { t, i18n } = useTranslation();
    const [activeTab, setActiveTab] = useState("all");

    const filteredProjects = activeTab === "all"
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <section id="work" className="relative bg-brand-blue min-h-screen py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold text-brand-pink tracking-widest uppercase mb-4">
                        {t('portfolio.selected_work')}
                    </h2>
                    <div className="h-1 w-20 bg-brand-pink/50 rounded-full mx-auto" />
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${activeTab === tab.id
                                ? 'bg-brand-pink text-white border-brand-pink shadow-lg shadow-brand-pink/30'
                                : 'bg-transparent text-white/70 border-white/20 hover:border-white/50 hover:text-white'
                                }`}
                        >
                            {i18n.language === 'ar' ? tab.labelAr : tab.labelEn}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group"
                            >
                                {/* Card Image Container */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative aspect-[4/3] rounded-xl lg:rounded-2xl overflow-hidden shadow-xl cursor-pointer block"
                                >
                                    {/* Image */}
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Overlay - Desktop Only */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 lg:opacity-80 lg:group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Content Overlay - Desktop Only */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white transform translate-y-full lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300 hidden lg:block">
                                        <span className="text-brand-pink text-xs uppercase tracking-widest font-semibold block mb-2">
                                            {t(`portfolio.projects.${project.id}.category`)}
                                        </span>
                                        <h3 className="text-xl lg:text-2xl font-bold leading-tight">
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Hover Icon - Desktop Only */}
                                    <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex">
                                        <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>

                                {/* Text Below Card - Mobile Only */}
                                <div className="mt-3 lg:hidden text-center">
                                    <span className="text-brand-pink text-[10px] uppercase tracking-widest font-semibold block mb-1">
                                        {t(`portfolio.projects.${project.id}.category`)}
                                    </span>
                                    <h3 className="text-sm font-bold text-white leading-tight">
                                        {project.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* See More Button */}
                <div className="flex justify-center mt-16">
                    <Button
                        variant="outline"
                        onClick={() => window.open('https://www.behance.net/hamed-sharaf', '_blank')}
                        className="flex items-center gap-2 text-lg px-8 py-4 border-white/30 hover:border-brand-pink rounded-full"
                    >
                        <span>{t('portfolio.see_more')}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM5 4H19C19.552 4 20 4.448 20 5V19C20 19.552 19.552 20 19 20H5C4.448 20 4 19.552 4 19V5C4 4.448 4.448 4 5 4Z" />
                            <path d="M11.5 9H8.5V15H10.25C11.5 15 12.25 14.25 12.25 13.25C12.25 12.5 11.9 12 11.5 11.75C12 11.5 12.25 11 12.25 10.25C12.25 9.5 11.9 9 11.5 9ZM10.1 10H11.25C11.4 10 11.5 10.1 11.5 10.35C11.5 10.6 11.4 10.75 11.25 10.75H10.1V10ZM10.1 11.75H11.25C11.4 11.75 11.5 11.9 11.5 12.35C11.5 12.8 11.3 12.95 11.05 12.95H10.1V11.75ZM15.5 11.25C14.5 11.25 13.9 11.85 13.9 12.75C13.9 13.65 14.5 14.25 15.5 14.25C16.1 14.25 16.5 14 16.7 13.5H17.4C17.1 14.5 16.4 15 15.5 15C14 15 13.1 13.95 13.1 12.75C13.1 11.55 14 10.5 15.5 10.5C16.85 10.5 17.5 11.5 17.5 12.65V12.9H13.9C13.95 13.5 14.35 13.8 15.5 13.8C16 13.8 16.4 13.65 16.5 13.15H15.5ZM14 12H16.75C16.7 11.55 16.35 11.1 15.5 11.1C14.7 11.1 14.15 11.5 14 12ZM14.75 10.25H16.25V9.5H14.75V10.25Z" />
                        </svg>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
