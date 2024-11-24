import { Link } from "react-router-dom"


export default function SectionTwo() {
    return (
        <section className="flex flex-col gap-10 relative sm:px-12 md:px-24 lg:px-48 px-4 py-20 min-h-screen border-b border-slate-200">

            <h1 className="text-4xl md:text-5xl !font-semibold text-gray-900 quicksand-font">
                Our <span className='text-wise-primary courgette'>interactive</span> <br /> features
            </h1>

            <div className="flex flex-col md:flex-row gap-10 w-full h-96">
                <div className="rounded-3xl p-3 bg-wise-tertiary w-full relative overflow-hidden">
                    <Link to={"/quiz"}>
                        <img src="icon-1.png" className="w-48" alt="" />
                        <img src="icon-5.png" className="w-48 absolute -top-12 left-60" alt="" />
                        <div className="px-4">
                            <p className="text-2xl font-bold">Fun</p>
                            <p className="text-2xl courgette">Quiz</p>
                            <p className="mt-5">Test your understanding with a short but fun quizzes!</p>
                        </div>
                    </Link>
                </div>

                <div className="rounded-3xl p-3 bg-wise-primary w-full relative overflow-hidden">
                    <Link to={"/features"}>
                        <img src="icon-2.png" className="w-48" alt="" />
                        <img src="icon-4.png" className="w-48 absolute -top-12 left-52" alt="" />
                        <div className="px-4">
                            <p className="text-2xl font-bold text-white">Creative</p>
                            <p className="text-2xl courgette text-white">Activities</p>
                            <p className="mt-5 text-white">Discover enjoyable activities such as coloring, crafting, and science.</p>
                        </div>
                    </Link>
                </div>

                <div className="rounded-3xl p-3 bg-wise-secondary w-full relative overflow-hidden">
                    <Link to={"/game"}>
                        <img src="icon-3.png" className="w-48" alt="" />
                        <img src="icon-6.png" className="w-48 absolute -top-12 left-52" alt="" />
                        <div className="px-4">
                            <p className="text-2xl font-bold">Learn With</p>
                            <p className="text-2xl courgette">Games</p>
                            <p className="mt-5">Learn something new whilw your kids playing games</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}
