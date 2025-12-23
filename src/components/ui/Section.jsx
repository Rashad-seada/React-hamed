import { motion } from 'framer-motion';

const Section = ({ children, className = '', id = '' }) => {
    return (
        <section id={id} className={`w-full py-20 px-4 md:px-8 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
