'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChildItem, Section } from '@/types/CardDataTypes';
import { Grid3X3, Rows3 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface props {
    cardData: Section[];
    theme: string;
}

export default function CardGame({ cardData, theme }: props) {
    const [isListView, setIsListView] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const toggleLayout = () => {
        setIsListView((prev) => !prev);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut"
        }
    };

    return (
        <motion.div
            className={`${theme === 'dark' ? 'text-white' : 'text-black'} p-4`}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {cardData.map((section: Section, index: number) => (
                <motion.div key={index} className='w-full mb-10' variants={itemVariants}>
                    <div className='flex items-center justify-between mb-5'>
                        <motion.h2
                            className="text-3xl font-bold relative inline-block"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {section.section_name}
                            <motion.span
                                className="absolute bottom-0 left-0 w-full h-1 bg-wise-secondary"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.h2>
                        {index === 0 &&
                            <motion.button
                                onClick={toggleLayout}
                                className={`p-2 rounded-lg z-10 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-300'} hover:opacity-80`}
                                whileHover={{ scale: 1.1, rotate: 180 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {isListView ? <Grid3X3 /> : <Rows3 />}
                            </motion.button>
                        }
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isListView ? "list" : "grid"}
                            className={`my-5 ${isListView ? '' : 'grid gap-8 md:grid-cols-2 lg:grid-cols-3'}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {section.child_item.map((item: ChildItem, idx: number) => (
                                <Link to={item.link} key={idx}>
                                    <motion.div
                                        className={`rounded-3xl p-3 bg-wise-secondary w-full relative overflow-hidden ${isListView ? 'mb-4' : ''} cursor-pointer`}
                                        layout
                                        transition={{ duration: 0.3 }}
                                        whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" }}
                                        onHoverStart={() => setHoveredIndex(idx)}
                                        onHoverEnd={() => setHoveredIndex(null)}
                                    >
                                        {!isListView && (
                                            <>
                                                <motion.img
                                                    src="icon-3.png"
                                                    className="w-32 sm:w-40 lg:w-48"
                                                    alt="Games icon"
                                                    animate={hoveredIndex === idx ? { rotate: 360 } : {}}
                                                    transition={{ duration: 0.5 }}
                                                />
                                                <motion.img
                                                    src="icon-6.png"
                                                    className="w-32 sm:w-40 lg:w-48 absolute -top-12 left-1/2 sm:left-52"
                                                    alt="Decorative icon"
                                                    animate={hoveredIndex === idx ? floatingAnimation : {}}
                                                />
                                            </>
                                        )}
                                        <motion.div
                                            className="px-4 mb-4"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <motion.p
                                                className={`text-xl font-bold text-wise-dark`}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {item.title}
                                            </motion.p>
                                            <motion.p
                                                className={`mt-5 text-wise-dark`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                {item.description}
                                            </motion.p>
                                            <motion.div
                                                className="mt-4 text-wise-primary font-bold"
                                                initial={{ opacity: 0 }}
                                                animate={hoveredIndex === idx ? { opacity: 1 } : { opacity: 0 }}
                                            >
                                                Play Now →
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </Link>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            ))}
        </motion.div>
    );
}

