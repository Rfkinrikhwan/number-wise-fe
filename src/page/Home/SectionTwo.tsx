import { Link } from "react-router-dom"

export default function SectionTwo() {
    return (
        <section className="flex flex-col gap-6 sm:gap-10 relative sm:px-12 md:px-24 lg:px-48 px-4 py-12 sm:py-20 min-h-screen border-b border-slate-200">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl !font-semibold text-gray-900 quicksand-font">
                Our <span className='text-wise-primary courgette'>interactive</span> <br className="hidden sm:block" /> features
            </h1>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {/* Quiz Card */}
                <div className="rounded-3xl p-3 bg-wise-tertiary h-[300px] sm:h-[350px] relative overflow-hidden transition-transform hover:scale-[1.02]">
                    <Link to={"/quiz"} className="block h-full">
                        <img src="icon-1.png" className="w-32 sm:w-40 lg:w-48" alt="Quiz icon" />
                        <img
                            src="icon-5.png"
                            className="w-32 sm:w-40 lg:w-48 absolute -top-12 left-1/2 sm:left-60"
                            alt="Decorative icon"
                        />
                        <div className="px-4 absolute bottom-4">
                            <p className="text-xl sm:text-2xl font-bold">Fun</p>
                            <p className="text-xl sm:text-2xl courgette">Quiz</p>
                            <p className="mt-2 sm:mt-5 text-sm sm:text-base">
                                Test your understanding with a short but fun quizzes!
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Activities Card */}
                <div className="rounded-3xl p-3 bg-wise-primary h-[300px] sm:h-[350px] relative overflow-hidden transition-transform hover:scale-[1.02]">
                    <Link to={"/features"} className="block h-full">
                        <img src="icon-2.png" className="w-32 sm:w-40 lg:w-48" alt="Activities icon" />
                        <img
                            src="icon-4.png"
                            className="w-32 sm:w-40 lg:w-48 absolute -top-12 left-1/2 sm:left-52"
                            alt="Decorative icon"
                        />
                        <div className="px-4 absolute bottom-4">
                            <p className="text-xl sm:text-2xl font-bold text-white">Creative</p>
                            <p className="text-xl sm:text-2xl courgette text-white">Activities</p>
                            <p className="mt-2 sm:mt-5 text-sm sm:text-base text-white">
                                Discover enjoyable activities such as coloring, crafting, and science.
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Games Card */}
                <div className="rounded-3xl p-3 bg-wise-secondary h-[300px] sm:h-[350px] relative overflow-hidden transition-transform hover:scale-[1.02]">
                    <Link to={"/game"} className="block h-full">
                        <img src="icon-3.png" className="w-32 sm:w-40 lg:w-48" alt="Games icon" />
                        <img
                            src="icon-6.png"
                            className="w-32 sm:w-40 lg:w-48 absolute -top-12 left-1/2 sm:left-52"
                            alt="Decorative icon"
                        />
                        <div className="px-4 absolute bottom-4">
                            <p className="text-xl sm:text-2xl font-bold">Learn With</p>
                            <p className="text-xl sm:text-2xl courgette">Games</p>
                            <p className="mt-2 sm:mt-5 text-sm sm:text-base">
                                Learn something new while your kids playing games
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}