import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources - Adapted for Egyptian Market (Business-Casual + Value Driven)
const resources = {
    ar: {
        translation: {
            "nav": {
                "work": "أهم الأعمال",
                "about": "مين أنا؟",
                "contact": "تواصل معي",
                "start_project": "ابدأ مشروعك"
            },
            "hero": {
                "tagline": "قيمة . فخامة . تأثير",
                "title_prefix": "نبني هويتك البصريه ...",
                "title_suffix": "لتعكس رؤيتك للعالم",
                "description": "مين قال إن التصميم مجرد ألوان؟ أنا هنا عشان أحول فكرتك لبراند قوي يسيب بصمة، يزود مبيعاتك، ويحطك في مكان تانية خالص في السوق.",
                "view_portfolio": "شوف شغلي",
                "start_project": "يلا نبني براند",
                "scroll": "اكتشف المزيد"
            },
            "portfolio": {
                "selected_work": "سابقة أعمال تشرّف",
                "projects": {
                    "hook_home": {
                        "category": "هوية بصرية | عقارات",
                        "description": "هوية بصرية كاملة لشركة هوك هوم، تعكس الثقة والاحترافية في سوق العقارات."
                    },
                    "new_design": {
                        "category": "هوية الطبع العقاري",
                        "description": "تصميم شعار وهوية لشركة نيو ديزاين، يجمع بين الحداثة والأصالة."
                    },
                    "guidix": {
                        "category": "تعليم | هوية بصرية",
                        "description": "بناء علامة تجارية لمنصة جايدكس التعليمية، تركز على النمو والتطور المعرفي."
                    },
                    "energy_workspace": {
                        "category": "مساحات عمل مشتركة",
                        "description": "تصميم بيئة عمل ملهمة وحيوية لمساحة عمل إنيرجي، تشجع على الإبداع."
                    },
                    "fixitpro": {
                        "category": "ديكور وتشطيبات",
                        "description": "إعادة صياغة العلامة التجارية لشركة فيكس إت برو، لتعكس الدقة والجودة في الديكور."
                    },
                    "codex": {
                        "category": "تكنولوجيا وبرمجة",
                        "description": "هوية بصرية لشركة كودكس للبرمجة، لغة بصرية رقمية تحاكي المستقبل."
                    }
                },
                "see_more": "شاهد المزيد على "
            },
            "about": {
                "im_hamed": "أنا حامد،",
                "the_designer": "المصمم",
                "with_the": "صاحب",
                "magic_touch": "اللمسة السحرية."
            },
            "footer": {
                "lets_talk": "جاهز تنقل براندك في حتة تانية؟",
                "contact_us": "تواصل معنا",
                "crafted_with_passion": "© 2025. تصميم معمول بمزاج عشان ينجّحك."
            }
        }
    },
    en: {
        translation: {
            "nav": {
                "work": "Highlights",
                "about": "The Story",
                "contact": "Get in Touch",
                "start_project": "Start Project"
            },
            "hero": {
                "tagline": "Value . Prestige . Impact",
                "title_prefix": "Building Your Visual Identity...",
                "title_suffix": "To Reflect Your Vision to the World",
                "description": "Who says design is just art? I bridge the gap between creative aesthetics and business logic to build brands that don't just look good—they sell and leave a legacy.",
                "view_portfolio": "See the Impact",
                "start_project": "Let's Build It",
                "scroll": "Discover More"
            },
            "portfolio": {
                "selected_work": "Work That Works",
                "projects": {
                    "hook_home": {
                        "category": "Real Estate | Identity",
                        "description": "Full visual identity for Hook Home, reflecting trust and professionalism in the real estate market."
                    },
                    "new_design": {
                        "category": "Real Estate Development",
                        "description": "Logo and identity design for New Design, blending modernity with authenticity."
                    },
                    "guidix": {
                        "category": "Education | Branding",
                        "description": "Building a brand for Guidix Education platform, focusing on growth and cognitive development."
                    },
                    "energy_workspace": {
                        "category": "Coworking Space",
                        "description": "Designing an inspiring and vibrant environment for Energy Workspace, fostering creativity."
                    },
                    "fixitpro": {
                        "category": "Decor & Finishing",
                        "description": "Rebranding Fixitpro decoration company to reflect precision and quality."
                    },
                    "codex": {
                        "category": "Technology & Coding",
                        "description": "Visual identity for Codex Programming, a digital visual language simulating the future."
                    }
                },
                "see_more": "See More on "
            },
            "about": {
                "im_hamed": "أنا حامد،",
                "the_designer": "المصمم",
                "with_the": "صاحب",
                "magic_touch": "اللمسة السحرية."
            },
            "footer": {
                "lets_talk": "Ready to Level Up Your Brand?",
                "contact_us": "Contact Us",
                "crafted_with_passion": "© 2025. Crafted to distinguish you in the market."
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ar", // Default language is Arabic
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
