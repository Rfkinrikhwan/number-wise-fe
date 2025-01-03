import WiseIcon from "@/components/icon";
import { Link } from "react-router-dom";
import DataBlog from "@/json/Blog/Data.json"
import { useEffect } from "react";
import { changeThemeStore } from "@/store";
import { motion } from 'framer-motion';

export default function Blog() {
    const { theme } = changeThemeStore();

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const staggerChildren = {
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={`${theme === 'dark' ? 'bg-wise-dark' : ''} flex flex-col gap-10 relative sm:px-12 md:px-24 lg:px-48 px-4 py-8 min-h-screen border-b border-slate-200`}>
            <motion.div
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
            >
                {DataBlog.blog.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ y: -5 }}
                        className="bg-wise-gray rounded-3xl overflow-hidden flex flex-col shadow transition-shadow hover:shadow-xl"
                    >
                        <motion.div
                            className="relative h-48 overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-1">{card.title}</h3>

                            <p className="text-gray-600 mt-2">{card.description}</p>

                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Link to={`/blog/${card.slug}`} className={`flex justify-start items-center gap-3 w-max mt-5 ${theme === 'dark' ? 'text-wise-secondary' : 'text-wise-primary'}`}>
                                    <p className='font-semibold'>Read More</p>
                                    <motion.div
                                        whileHover={{ rotate: 45 }}
                                        className={`flex justify-center items-center rounded-full w-8 h-8 ${theme === 'dark' ? 'bg-wise-secondary' : 'bg-wise-primary'} text-white hover:bg-wise-primary/90 transition-colors`}
                                    >
                                        <WiseIcon iconName="GoArrowUpRight" />
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
