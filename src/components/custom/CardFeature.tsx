import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChildItem, Section } from '@/types/CardDataTypes';
import { Grid3X3, Rows3 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface props {
    cardData: Section[];
    theme: string;
}

export default function CardFeature({ cardData, theme }: props) {
    const [isListView, setIsListView] = useState(false);

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

    return (
        <motion.div
            className={theme === 'dark' ? 'text-white' : 'text-black'}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {cardData.map((section: Section, index: number) => (
                <motion.div key={index} className='w-full mb-10' variants={itemVariants}>
                    <div className='flex items-center justify-between mb-5'>
                        <motion.p
                            className="text-3xl font-bold"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {section.section_name}
                        </motion.p>
                        {index === 0 &&
                            <motion.button
                                onClick={toggleLayout}
                                className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-300'} hover:opacity-80`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {isListView ? <Grid3X3 /> : <Rows3 />}
                            </motion.button>
                        }
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isListView ? "list" : "grid"}
                            className={`my-5 ${isListView ? '' : 'grid gap-5 md:grid-cols-2 lg:grid-cols-3'}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {section.child_item.map((item: ChildItem, idx: number) => (
                                <Link to={item.link} key={idx}>
                                    <motion.div
                                        className={`rounded-3xl p-3 ${theme === 'dark' ? 'bg-wise-secondary' : 'bg-wise-primary'} w-full relative overflow-hidden ${isListView ? 'mb-4' : ''}`}
                                        layout
                                        transition={{ duration: 0.3 }}
                                        whileHover={{ scale: 1.03, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
                                    >
                                        {!isListView && (
                                            <>
                                                <motion.img
                                                    src="icon-2.png"
                                                    className="w-48"
                                                    alt=""
                                                    initial={{ rotate: 0 }}
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                />
                                                <motion.img
                                                    src="icon-4.png"
                                                    className="w-48 absolute -top-12 left-52"
                                                    alt=""
                                                    animate={{
                                                        y: [0, -10, 0],
                                                        rotate: [0, 5, 0]
                                                    }}
                                                    transition={{
                                                        duration: 5,
                                                        repeat: Infinity,
                                                        repeatType: "reverse"
                                                    }}
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
                                                className={`text-xl font-bold ${theme === 'dark' ? 'text-gray-400' : 'text-white'}`}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {item.title}
                                            </motion.p>
                                            <motion.p
                                                className={`mt-5 ${theme === 'dark' ? 'text-gray-400' : 'text-white'}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                {item.description}
                                            </motion.p>
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

