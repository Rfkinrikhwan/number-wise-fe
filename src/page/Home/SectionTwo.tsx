import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function SectionTwo({ theme }: { theme: string }) {
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

    const hoverScale = {
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 },
    };

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className={`${theme === 'dark' ? 'bg-wise-dark' : ''} flex flex-col gap-6 sm:gap-10 relative sm:px-12 md:px-24 lg:px-48 px-4 py-12 sm:py-20 min-h-screen border-b border-slate-200`}
        >
            {/* Heading */}
            <motion.h1
                variants={fadeInUp}
                className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-3xl sm:text-4xl lg:text-5xl !font-semibold quicksand-font`}
            >
                Our <motion.span
                    className={`courgette ${theme === 'dark' ? 'text-wise-secondary' : 'text-wise-primary'}`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                    interactive
                </motion.span> <br className="hidden sm:block" /> features
            </motion.h1>

            {/* Features Grid */}
            <motion.div
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
            >
                {/* Quiz Card */}
                <motion.div
                    variants={fadeInUp}
                    whileHover={hoverScale}
                    className="rounded-3xl p-3 bg-wise-tertiary h-[300px] sm:h-[350px] relative overflow-hidden"
                >
                    <Link to={"/quiz"} className="block h-full">
                        <motion.img
                            src="icon-1.png"
                            className="w-32 sm:w-40 lg:w-48"
                            alt="Quiz icon"
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                        />
                        <motion.img
                            src="icon-5.png"
                            className="w-32 sm:w-40 lg:w-48 absolute -top-12 left-1/2 sm:left-60"
                            alt="Decorative icon"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                        />
                        <motion.div
                            className="px-4 absolute bottom-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <p className="text-xl sm:text-2xl font-bold">Fun</p>
                            <p className="text-xl sm:text-2xl courgette">Quiz</p>
                            <p className="mt-2 sm:mt-5 text-sm sm:text-base">
                                Test your understanding with a short but fun quizzes!
                            </p>
                        </motion.div>
                    </Link>
                </motion.div>

                {/* Activities Card */}
                <motion.div
                    variants={fadeInUp}
                    whileHover={hoverScale}
                    className="rounded-3xl p-3 bg-wise-primary h-[300px] sm:h-[350px] relative overflow-hidden"
                >
                    <Link to={"/features"} className="block h-full">
                        <motion.img
                            src="icon-2.png"
                            className="w-32 sm:w-40 lg:w-48"
                            alt="Activities icon"
                            animate={{ rotate: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                        />
                        <motion.img
                            src="icon-4.png"
                            className="w-32 sm:w-40 lg:w-48 absolute -top-12 left-1/2 sm:left-52"
                            alt="Decorative icon"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                        />
                        <motion.div
                            className="px-4 absolute bottom-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <p className="text-xl sm:text-2xl font-bold text-white">Creative</p>
                            <p className="text-xl sm:text-2xl courgette text-white">Activities</p>
                            <p className="mt-2 sm:mt-5 text-sm sm:text-base text-white">
                                Discover enjoyable activities such as coloring, crafting, and science.
                            </p>
                        </motion.div>
                    </Link>
                </motion.div>

                {/* Games Card */}
                <motion.div
                    variants={fadeInUp}
                    whileHover={hoverScale}
                    className="rounded-3xl p-3 bg-wise-secondary h-[300px] sm:h-[350px] relative overflow-hidden"
                >
                    <Link to={"/game"} className="block h-full">
                        <motion.img
                            src="icon-3.png"
                            className="w-32 sm:w-40 lg:w-48"
                            alt="Games icon"
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                        />
                        <motion.img
                            src="icon-6.png"
                            className="w-32 sm:w-40 lg:w-48 absolute -top-12 left-1/2 sm:left-52"
                            alt="Decorative icon"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                        />
                        <motion.div
                            className="px-4 absolute bottom-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <p className="text-xl sm:text-2xl font-bold">Learn With</p>
                            <p className="text-xl sm:text-2xl courgette">Games</p>
                            <p className="mt-2 sm:mt-5 text-sm sm:text-base">
                                Learn something new while your kids playing games
                            </p>
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

