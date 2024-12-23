import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChildItem, Section } from '@/types/CardDataTypes';
import { Grid3X3, Rows3 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface props {
    cardData: Section[];
    theme: string;
}

export default function CardGame({ cardData, theme }: props) {
    const [isListView, setIsListView] = useState(false);

    const toggleLayout = () => {
        setIsListView((prev) => !prev);
    };

    return (
        <div className={theme === 'dark' ? 'text-white' : 'text-black'}>

            {cardData.map((section: Section, index: number) => (
                <div key={index} className='w-full'>
                    <div className='flex items-center justify-between'>
                        <p className="text-3xl font-bold">{section.section_name}</p>
                        {index === 0 &&
                            <button
                                onClick={toggleLayout}
                                className={`p-1 rounded-lg z-10 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-300'} hover:opacity-80`}
                            >
                                {isListView ? <Grid3X3 /> : <Rows3 />}
                            </button>
                        }
                    </div>
                    <motion.div
                        className={`my-5 ${isListView ? '' : 'grid gap-8 md:grid-cols-3'}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {section.child_item.map((item: ChildItem, idx: number) => (
                            <Link to={item.link}>
                                <motion.div
                                    key={idx}
                                    className={`rounded-3xl p-3 bg-wise-secondary w-full relative overflow-hidden ${isListView ? 'mb-4' : ''}`}
                                    layout
                                    transition={{ duration: 0.3 }}
                                >
                                    {!isListView && (
                                        <>
                                            <img src="icon-3.png" className="w-32 sm:w-40 lg:w-48" alt="Games icon" />
                                            <img
                                                src="icon-6.png"
                                                className="w-32 sm:w-40 lg:w-48 absolute -top-12 left-1/2 sm:left-52"
                                                alt="Decorative icon"
                                            />
                                        </>
                                    )}
                                    <div className="px-4 mb-4">
                                        <p className={`text-xl font-bold text-wise-dark`}>{item.title}</p>
                                        <p className={`mt-5 text-wise-dark`}>{item.description}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    );
}
