import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

const Preloader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            {/* Background Layer - Fades out independently so logo stays visible */}
            <motion.div
                className="absolute inset-0 bg-brand-blue"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Logo Layer - Animation Entry + Shared LayoutId (No Exit Animation) */}
            <motion.div
                layoutId="brand-logo"
                className="relative z-10"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <img
                    src={logo}
                    alt="Brand Logo"
                    className="h-24 w-auto object-contain md:h-32"
                />
            </motion.div>
        </div>
    );
};

export default Preloader;
