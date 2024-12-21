import { motion } from 'framer-motion';
import { changeThemeStore } from '@/store';
import { Sun, Moon } from 'lucide-react';

export default function SwapTheme() {
    const { theme, changeThemeFn } = changeThemeStore();

    // Handle theme change
    const toggleTheme = () => {
        console.log("Toggle theme");
        changeThemeFn();
    };

    // Animation variants for the theme icon
    const variants = {
        initial: { rotate: 0, opacity: 1 },
        animate: { rotate: 360, opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <div
            onClick={toggleTheme}
            className="fixed bottom-10 right-5 text-lg h-14 w-14 border rounded-full shadow flex items-center justify-center cursor-pointer bg-white dark:bg-gray-800 transition-colors duration-300"
        >
            <motion.div
                key={theme}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                transition={{ duration: 1 }}
            >
                {theme === 'light' ? (
                    <Sun size={28} color="#fbbf24" />
                ) : (
                    <Moon size={28} color="#94a3b8" />
                )}
            </motion.div>
        </div>
    );
}
