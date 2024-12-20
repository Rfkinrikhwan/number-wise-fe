import WiseIcon from "@/components/icon";
import { Link } from "react-router-dom";
import DataBlog from "@/json/DataBlog.json"


export default function SectionFour({ theme }: { theme: string }) {

    return (
        <section className={`${theme === 'dark' ? 'bg-wise-dark' : ''} flex flex-col gap-10 relative sm:px-12 md:px-24 lg:px-48 px-4 py-20 min-h-screen border-b border-slate-200`}>

            <h1 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-3xl sm:text-4xl lg:text-5xl !font-semibold quicksand-font`}>
                Read our <span className={`${theme === 'dark' ? 'text-wise-secondary' : 'text-wise-primary'} courgette`}>blog</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {DataBlog.map((card, index) => (
                    <div
                        key={index}
                        className="bg-wise-gray rounded-3xl overflow-hidden flex flex-col"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-1">{card.title}</h3>

                            <p className="text-gray-600 mt-2">{card.description}</p>

                            <Link to={`/blog/3`} className={`flex justify-start items-center gap-3 w-max mt-5 ${theme === 'dark' ? 'text-wise-secondary' : 'text-wise-primary'}`}>
                                <p className='font-semibold'>Read More</p>
                                <div className={`flex justify-center items-center rounded-full w-8 h-8 ${theme === 'dark' ? 'bg-wise-secondary' : 'bg-wise-primary'} text-white hover:bg-wise-primary/90 transition-colors`}>
                                    <WiseIcon iconName="GoArrowUpRight" />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`${theme === 'dark' ? 'text-wise-secondary' : 'text-wise-primary'} flex justify-center items-center gap-3 mt-5 w-full`}>
                <Link to={'/blog'} className="flex justify-center items-center gap-3">
                    <p className='font-semibold'>Read All Blog</p>
                    <WiseIcon iconName="GoArrowUpRight" />
                </Link>
            </div>
        </section>
    )
}
