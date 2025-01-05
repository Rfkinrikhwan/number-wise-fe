import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import WiseIcon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

export default function SectionOne({ theme }: { theme: string }) {
    const navigate = useNavigate();
    const learnControls = useAnimation();
    const playControls = useAnimation();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const rotateIn = {
        hidden: { opacity: 0, rotate: -20 },
        visible: { opacity: 1, rotate: 0 },
    };

    const typeText = async (text: string, controls: any) => {
        console.log(text);
        await controls.set({ width: "0%" });
        await controls.start({
            width: "100%",
            transition: { duration: 1.5, ease: "easeInOut" }
        });
    };

    useEffect(() => {
        const animateText = async () => {
            await typeText("learn", learnControls);
            await typeText("play", playControls);
        };
        animateText();
    }, [learnControls, playControls]);

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            className={`${theme === 'dark' ? 'bg-wise-dark' : ''} relative flex flex-col items-center justify-center min-h-[95vh] sm:px-12 md:px-24 lg:px-48 px-4 py-16 border-b border-slate-200 overflow-hidden`}
        >
            {/* Kid images - Hidden on mobile, shown on larger screens */}
            <motion.div
                variants={rotateIn}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block absolute left-4 top-20 xl:left-32"
            >
                <img
                    src="25.png"
                    alt="Kid playing"
                    className="transform -rotate-12 w-48 h-48 xl:w-80 xl:h-80"
                />
            </motion.div>

            <motion.div
                variants={rotateIn}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:block absolute right-4 bottom-32 xl:right-32"
            >
                <img
                    src="27.png"
                    alt="Kid learning"
                    className="rounded-full transform rotate-12 w-48 h-48 xl:w-80 xl:h-80"
                />
            </motion.div>

            {/* Main content container */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main heading */}
                <motion.div
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center text-center"
                >
                    <h1 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-4xl sm:text-5xl lg:text-6xl xl:text-8xl mb-4 sm:mb-6 quicksand-font leading-tight`}>
                        The best place to
                    </h1>

                    <h1 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-4xl sm:text-5xl lg:text-6xl xl:text-8xl mb-4 sm:mb-6 quicksand-font`}>
                        <span className="relative inline-block">
                            <motion.span
                                animate={learnControls}
                                className="text-wise-primary courgette absolute left-0 overflow-hidden whitespace-nowrap"
                            >
                                learn
                            </motion.span>
                            <span className="invisible">learn</span>
                        </span>{' '}
                        and{' '}
                        <span className="relative inline-block">
                            <motion.span
                                animate={playControls}
                                className="text-yellow-400 courgette absolute left-0 overflow-hidden whitespace-nowrap"
                            >
                                play
                            </motion.span>
                            <span className="invisible">play</span>
                        </span>
                    </h1>

                    <h1 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-4xl sm:text-5xl lg:text-6xl xl:text-8xl mb-6 quicksand-font`}>
                        for kids
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} max-w-xl mx-auto text-base sm:text-lg lg:text-xl text-center mb-8`}
                >
                    Discover thousands of fun and interactive learning activities
                    to support your child's growth and learning process.
                </motion.p>

                {/* Button */}
                <motion.div
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex justify-center"
                >
                    <Link to="/features">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-3 ${theme === 'dark' ? 'bg-wise-secondary' : 'bg-wise-primary'} px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                        >
                            <p className={`text-white font-semibold text-sm sm:text-base`}>
                                Get Started
                            </p>
                            <Button onClick={() => navigate('/features')} className={`rounded-full w-6 h-6 sm:w-8 sm:h-8 ${theme === 'dark' ? 'text-wise-secondary' : 'text-wise-primary'} bg-white hover:bg-white shadow-md`}>
                                <WiseIcon iconName="GoArrowUpRight" />
                            </Button>
                        </motion.div>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="hidden lg:block absolute right-10 bottom-20 w-20 h-20"
            >
                <div className="w-full h-full border-2 border-wise-primary rounded-full"></div>
            </motion.div>
        </motion.section>
    );
}

