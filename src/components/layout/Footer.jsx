import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission - e.g., open WhatsApp with message
        const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, '_blank');
    };

    const features = [
        { en: "Personalized assistance", ar: "مساعدة شخصية" },
        { en: "Timely response", ar: "رد سريع" },
        { en: "Comprehensive support", ar: "دعم شامل" },
    ];

    const contactInfo = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ),
            labelEn: "Email us",
            labelAr: "راسلنا",
            value: "hello@hamedsharaf.com"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ),
            labelEn: "Call us",
            labelAr: "اتصل بنا",
            value: "+20 123 456 7890"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ),
            labelEn: "Our location",
            labelAr: "موقعنا",
            value: "Cairo, Egypt"
        },
    ];

    return (
        <footer id="contact" className="relative bg-brand-blue py-20 md:py-32 overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[8vw] md:text-[10vw] font-black text-white/[0.03] uppercase tracking-widest whitespace-nowrap pointer-events-none select-none">
                {i18n.language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
                    {/* Left Side - Text Content */}
                    <div className="ltr:text-left rtl:text-right">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 flex items-center gap-4"
                        >
                            {i18n.language === 'ar' ? 'تواصل معنا' : 'Reach out'}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 -rotate-45 rtl:rotate-[135deg]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-gray-400 text-lg mb-8 max-w-md"
                        >
                            {i18n.language === 'ar'
                                ? 'عندك سؤال أو محتاج مساعدة؟ تواصل معنا وهنرد عليك في أسرع وقت.'
                                : 'Have a question or need assistance? Reach out to our dedicated support team. We\'re here to help with any inquiries you may have.'}
                        </motion.p>

                        {/* Features List */}
                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="space-y-4 mb-10"
                        >
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    {i18n.language === 'ar' ? feature.ar : feature.en}
                                </li>
                            ))}
                        </motion.ul>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex gap-4"
                        >
                            {[
                                { name: 'X', href: '#', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
                                { name: 'Facebook', href: '#', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
                                { name: 'Instagram', href: 'https://instagram.com', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg> },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-pink hover:text-white transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder={i18n.language === 'ar' ? 'الاسم' : 'Name'}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-pink transition-colors"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder={i18n.language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-pink transition-colors"
                                    required
                                />
                            </div>
                            <textarea
                                placeholder={i18n.language === 'ar' ? 'الرسالة' : 'Message'}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-pink transition-colors resize-none"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-brand-pink hover:text-white transition-all duration-300"
                            >
                                {i18n.language === 'ar' ? 'إرسال' : 'Submit'}
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-3 gap-4">
                    {contactInfo.map((info, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col"
                        >
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white mb-4">
                                {info.icon}
                            </div>
                            <h4 className="text-white font-semibold mb-1">
                                {i18n.language === 'ar' ? info.labelAr : info.labelEn}
                            </h4>
                            <p className="text-gray-400 text-sm">{info.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-sm">
                        {t('footer.crafted_with_passion')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
