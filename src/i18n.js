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
                "title_prefix": "هويتك البصرية...",
                "title_suffix": "مرآة لرؤيتك",
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
                        "description": "هوية العقارات التي تفرض الثقة."
                    },
                    "new_design_re": {
                        "category": "هوية الطبع العقاري",
                        "description": "تصميم يجمع بين الحداثة والأصالة."
                    },
                    "guidix_edu": {
                        "category": "تعليم | هوية بصرية",
                        "description": "علامة تجارية تركز على النمو المعرفي."
                    },
                    "energy_workspace": {
                        "category": "مساحات عمل مشتركة",
                        "description": "بيئة عمل ملهمة وحيوية."
                    },
                    "fixitpro": {
                        "category": "ديكور وتشطيبات",
                        "description": "الدقة والجودة في الديكور."
                    },
                    "codex_programming": {
                        "category": "تكنولوجيا وبرمجة",
                        "description": "لغة بصرية رقمية تحاكي المستقبل."
                    },
                    "wadi_swimming": {
                        "category": "رياضة | سباحة",
                        "description": "هوية مائية نابضة بالحياة."
                    },
                    "misk_furniture": {
                        "category": "أثاث منزلي",
                        "description": "الأناقة في كل تفصيلة."
                    },
                    "hook_home_social": {
                        "category": "سوشيال ميديا | عقارات",
                        "description": "تصاميم تزيد التفاعل والمبيعات."
                    },
                    "social_rival": {
                        "category": "سوشيال ميديا | معالجة مياه",
                        "description": "حلول تسويقية لقطاع المياه."
                    },
                    "advance_courses": {
                        "category": "سوشيال ميديا | تعليم",
                        "description": "تصاميم تعليمية تجذب الطلاب."
                    },
                    "captain_car": {
                        "category": "سوشيال ميديا | سيارات",
                        "description": "السرعة والقوة في التصميم."
                    },
                    "soly_beauty": {
                        "category": "سوشيال ميديا | تجميل",
                        "description": "الجمال يكمن في التفاصيل."
                    },
                    "nike_shoes": {
                        "category": "سوشيال ميديا | أحذية",
                        "description": "تصاميم رياضية عصرية."
                    },
                    "lamira_menu": {
                        "category": "مطبوعات | منيو مطعم",
                        "description": "تصميم قائمة طعام يفتح الشهية."
                    },
                    "brand_boost": {
                        "category": "بروفايل شركة",
                        "description": "إعادة بناء الهوية لتناسب النمو."
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
                "title_prefix": "Your Visual Identity...",
                "title_suffix": "Reflecting Your Vision",
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
                        "description": "Visual identity reflecting trust in real estate."
                    },
                    "new_design_re": {
                        "category": "Real Estate Development",
                        "description": "Blending modernity with authenticity."
                    },
                    "guidix_edu": {
                        "category": "Education | Branding",
                        "description": "Focusing on growth and cognitive development."
                    },
                    "energy_workspace": {
                        "category": "Coworking Space",
                        "description": "Inspiring environment fostering creativity."
                    },
                    "fixitpro": {
                        "category": "Decor & Finishing",
                        "description": "Reflecting precision and quality."
                    },
                    "codex_programming": {
                        "category": "Technology & Coding",
                        "description": "Digital visual language defining the future."
                    },
                    "wadi_swimming": {
                        "category": "Sports | Swimming",
                        "description": "Vibrant aquatic identity."
                    },
                    "misk_furniture": {
                        "category": "Home Furniture",
                        "description": "Elegance in every detail."
                    },
                    "hook_home_social": {
                        "category": "Social Media | Real Estate",
                        "description": "Designs that boost engagement and sales."
                    },
                    "social_rival": {
                        "category": "Social Media | Water Treatment",
                        "description": "Marketing solutions for the water sector."
                    },
                    "advance_courses": {
                        "category": "Social Media | Education",
                        "description": "Educational designs that attract students."
                    },
                    "captain_car": {
                        "category": "Social Media | Automotive",
                        "description": "Speed and power in design."
                    },
                    "soly_beauty": {
                        "category": "Social Media | Beauty",
                        "description": "Beauty lies in the details."
                    },
                    "nike_shoes": {
                        "category": "Social Media | Footwear",
                        "description": "Modern athletic designs."
                    },
                    "lamira_menu": {
                        "category": "Printables | Restaurant Menu",
                        "description": "Appetizing menu design."
                    },
                    "brand_boost": {
                        "category": "Company Profile",
                        "description": "Rebranding to suit growth."
                    }
                },
                "see_more": "See More on "
            },
            "about": {
                "im_hamed": "I'm Hamed,",
                "the_designer": "The Designer",
                "with_the": "with the",
                "magic_touch": "Magic Touch."
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
