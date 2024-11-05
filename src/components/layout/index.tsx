import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'

export default function index() {
    const [hasBackground, setHasBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setHasBackground(true);
            } else {
                setHasBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className={`fixed w-full transition-all duration-300 z-50 bg-wise-primary`}>
                <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <p className='text-xl font-bold text-white'>Number Wise</p>
                        <div className="flex justify-center items-center gap-8">
                            <a href="#" className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium">Home</a>
                            <a href="#" className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium">Feature</a>
                            <a href="#" className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium">About</a>
                        </div>
                    </div>
                </div>
            </nav>


            <div className='px-48 bg-gray-50'>
                <Outlet />
            </div>
        </>
    )
}
