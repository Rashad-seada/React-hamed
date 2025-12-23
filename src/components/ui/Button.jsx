import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
    const baseStyles = "px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 relative overflow-hidden group";

    const variants = {
        primary: "bg-brand-pink text-white hover:shadow-[0_0_20px_rgba(255,44,124,0.5)] border border-transparent hover:border-white/50",
        outline: "border border-white/20 text-white hover:border-brand-pink hover:text-brand-pink hover:bg-white/5",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-pink to-brand-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </motion.button>
    );
};

export default Button;
