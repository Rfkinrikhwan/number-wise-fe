import WiseIcon from '@/components/icon';
import { Button } from '@/components/ui/button';

export default function SectionOne() {

    return (
        <section className="flex flex-col items-center justify-center gap-10 px-4 py-16 h-[95vh] sm:px-12 md:px-24 lg:px-48 border-b border-slate-200">
            {/* Background decorative elements */}
            {/* <div className="absolute left-10 top-20 w-32 h-32 opacity-10">
                <div className="w-full h-full border-2 border-purple-300 rounded-full animate-spin-slow"></div>
            </div> */}

            {/* Left kid image */}
            <div className="absolute left-32 top-20">
                <img
                    src="25.png"
                    alt="Kid playing"
                    className="transform -rotate-12 w-80 h-80"
                />
            </div>

            {/* Right kid image */}
            <div className="absolute right-32 bottom-32">
                <img
                    src="27.png"
                    alt="Kid learning"
                    className="rounded-full transform rotate-12 w-80 h-80"
                />
            </div>

            {/* Main heading */}
            <div className='flex flex-col items-center'>
                <h1 className="text-4xl md:text-8xl text-gray-900 mb-6 quicksand-font leading-none">
                    The best place to
                </h1>

                <h1 className="text-4xl md:text-8xl text-gray-900 mb-6 quicksand-font">
                    <span className="text-purple-600 courgette">learn</span> and{' '}
                    <span className="text-yellow-400 courgette">play</span>
                </h1>

                <h1 className="text-4xl md:text-8xl text-gray-900 mb-6 quicksand-font">
                    for kids
                </h1>
            </div>

            {/* Subtitle */}
            <p className="max-w-xl text-lg md:text-xl text-gray-600 text-center">
                Discover thousands of fun and interactive learning activities
                to support your child's growth and learning process.
            </p>

            {/* Button */}
            <div className=' flex justify-between items-center gap-3 bg-wise-primary px-3 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-0.5 cursor-pointer'>
                <p className='text-white font-semibold'>Get Started</p>
                <Button className='rounded-full w-8 h-8 bg-white text-wise-primary hover:bg-white shadow-md'>
                    <WiseIcon iconName="GoArrowUpRight" />
                </Button>
            </div>

            {/* Bottom right decorative element */}
            <div className="absolute right-10 bottom-20 w-20 h-20 opacity-10">
                <div className="w-full h-full border-2 border-purple-300 rounded-full"></div>
            </div>
        </section>
    )
}
