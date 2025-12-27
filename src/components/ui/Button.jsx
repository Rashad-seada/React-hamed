import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
    const baseStyles = "px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 relative overflow-hidden group";

    const variants = {
        primary: "bg-brand-pink/80 backdrop-blur-md text-white hover:bg-brand-pink/90 border border-white/20 hover:border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
        outline: "bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 hover:border-brand-pink hover:text-brand-pink hover:shadow-[0_0_20px_rgba(255,44,124,0.3)]",
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
