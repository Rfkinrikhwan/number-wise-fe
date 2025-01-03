import { motion } from 'framer-motion';
import WiseIcon from "@/components/icon";
import { Button } from "@/components/ui/button";

export default function SectionThree({ theme }: { theme: string }) {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const staggerChildren = {
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className={`${theme === 'dark' ? 'bg-wise-dark' : ''} flex flex-col lg:flex-row items-center px-4 py-16 min-h-screen sm:px-12 md:px-24 lg:px-48 border-b border-slate-200`}
        >
            {/* Left content */}
            <motion.div
                className="w-full order-2 lg:order-1"
                variants={fadeInUp}
            >
                {/* Main heading */}
                <motion.div className='flex flex-col' variants={staggerChildren}>
                    <motion.h1
                        variants={fadeInUp}
                        className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-3xl md:text-5xl lg:text-6xl mb-4 quicksand-font leading-tight`}
                    >
                        The learning materials
                    </motion.h1>

                    <motion.h1
                        variants={fadeInUp}
                        className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-3xl md:text-5xl lg:text-6xl mb-4 quicksand-font leading-tight`}
                    >
                        provided are{' '}
                        <motion.span
                            className={`relative inline-block courgette ${theme === 'dark' ? 'text-wise-primary' : 'text-wise-secondary'}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="z-10 font-bold courgette">
                                enjoyable
                            </span>
                            <motion.span
                                className={`${theme === 'dark' ? 'bg-wise-secondary' : 'bg-wise-primary'} absolute bottom-0 left-0 w-full h-3 transform -rotate-2 rounded-lg`}
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            ></motion.span>
                        </motion.span>
                    </motion.h1>

                    <motion.h1
                        variants={fadeInUp}
                        className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-3xl md:text-5xl lg:text-6xl mb-6 quicksand-font leading-tight`}
                    >
                        for children
                    </motion.h1>
                </motion.div>

                <motion.p
                    variants={fadeInUp}
                    className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-8 text-lg max-w-xl`}
                >
                    Don't worry! Your children will be having a fun time while learning with our
                    materials that are easy to understand.
                </motion.p>

                {/* Learn More Button */}
                <motion.div
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${theme === 'dark' ? 'border-wise-secondary' : 'border-wise-primary'} flex justify-start items-center gap-3 border w-max px-1 py-1 rounded-full hover:shadow-md transition-shadow`}
                >
                    <p className={`${theme === 'dark' ? 'text-wise-secondary' : 'text-wise-primary'} font-semibold ml-3`}>Learn More</p>
                    <Button className={`${theme === 'dark' ? 'bg-wise-secondary' : 'bg-wise-primary'} rounded-full w-8 h-8 text-white hover:bg-wise-primary/90 transition-colors`}>
                        <WiseIcon iconName="GoArrowUpRight" />
                    </Button>
                </motion.div>
            </motion.div>

            {/* Right content - Image */}
            <motion.div
                className="w-full sm:w-3/4 lg:w-1/2 order-1 lg:order-2 flex justify-center items-center"
                variants={fadeInUp}
            >
                <motion.img
                    src="28.png"
                    alt="Learning child 1"
                    className="w-full max-w-md lg:max-w-none lg:scale-125 transition-transform sm:relative sm:right-14"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                />
            </motion.div>
        </motion.section>
    );
}

