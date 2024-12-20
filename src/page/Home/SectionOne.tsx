import WiseIcon from '@/components/icon';
import { Button } from '@/components/ui/button';

export default function SectionOne({ theme }: { theme: string }) {

    return (
        <section className={`${theme === 'dark' ? 'bg-wise-dark' : ''} relative flex flex-col items-center justify-center min-h-[95vh] sm:px-12 md:px-24 lg:px-48 px-4 py-16 border-b border-slate-200`}>
            {/* Kid images - Hidden on mobile, shown on larger screens */}
            <div className="hidden lg:block absolute left-4 top-20 xl:left-32">
                <img
                    src="25.png"
                    alt="Kid playing"
                    className="transform -rotate-12 w-48 h-48 xl:w-80 xl:h-80"
                />
            </div>

            <div className="hidden lg:block absolute right-4 bottom-32 xl:right-32">
                <img
                    src="27.png"
                    alt="Kid learning"
                    className="rounded-full transform rotate-12 w-48 h-48 xl:w-80 xl:h-80"
                />
            </div>

            {/* Main content container */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main heading */}
                <div className="flex flex-col items-center text-center">
                    <h1 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-4xl sm:text-5xl lg:text-6xl xl:text-8xl mb-4 sm:mb-6 quicksand-font leading-tight`}>
                        The best place to
                    </h1>

                    <h1 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-4xl sm:text-5xl lg:text-6xl xl:text-8xl mb-4 sm:mb-6 quicksand-font`}>
                        <span className="text-wise-primary courgette">learn</span>{' '}
                        and{' '}
                        <span className="text-yellow-400 courgette">play</span>
                    </h1>

                    <h1 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-4xl sm:text-5xl lg:text-6xl xl:text-8xl mb-6 quicksand-font`}>
                        for kids
                    </h1>
                </div>

                {/* Subtitle */}
                <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} max-w-xl mx-auto text-base sm:text-lg lg:text-xl text-center mb-8`}>
                    Discover thousands of fun and interactive learning activities
                    to support your child's growth and learning process.
                </p>

                {/* Button */}
                <div className="flex justify-center">
                    <div className={`flex items-center gap-3 ${theme === 'dark' ? 'bg-wise-secondary' : 'bg-wise-primary'} px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer`}>
                        <p className={`text-white font-semibold text-sm sm:text-base`}>
                            Get Started
                        </p>
                        <Button className={`rounded-full w-6 h-6 sm:w-8 sm:h-8 ${theme === 'dark' ? 'text-wise-secondary' : 'text-wise-primary'} bg-white hover:bg-white shadow-md`}>
                            <WiseIcon iconName="GoArrowUpRight" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="hidden lg:block absolute right-10 bottom-20 w-20 h-20 opacity-10">
                <div className="w-full h-full border-2 border-wise-primary rounded-full"></div>
            </div>
        </section>
    );
}