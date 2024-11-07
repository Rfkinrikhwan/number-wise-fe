import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom'

export default function index() {
    const [hasBackground, setHasBackground] = useState(false);
    const [isBottomNavVisible, setIsBottomNavVisible] = useState(false);

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

    const toggleBottomNav = () => {
        setIsBottomNavVisible(!isBottomNavVisible);
    };
    return (
        <>
            <nav
                className={`${hasBackground ? 'shadow-md bg-white' : 'border-b'
                    } fixed w-full transition-all duration-300 z-50 py-3 px-4 sm:px-12 md:px-24 lg:px-48`}
            >
                <div className="h-16 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-wise-primary sm:block">
                        Number Wise
                    </Link>
                    <div className="hidden sm:flex gap-8">
                        <Link to="/" className="text-wise-primary hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <Link to="/features" className="text-wise-primary hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
                            Feature
                        </Link>
                        <Link to="/game" className="text-wise-primary hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
                            Game
                        </Link>
                    </div>
                </div>
            </nav>

            <div>
                <Outlet />
            </div>

            <div className={`fixed bottom-0 w-full bg-white shadow-t-md z-50 ${isBottomNavVisible ? 'block' : 'hidden'}`}>
                <div className="flex justify-around items-center h-16">
                    <Link to="/" className="text-wise-primary hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
                        Home
                    </Link>
                    <Link to="/features" className="text-wise-primary hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
                        Features
                    </Link>
                    <Link to="/game" className="text-wise-primary hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
                        Game
                    </Link>
                    <button
                        className="text-wise-primary hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
                        onClick={toggleBottomNav}
                    >
                        {isBottomNavVisible ? 'Close' : 'Menu'}
                    </button>
                </div>
            </div>

            <footer className="bg-wise-primary text-gray-200 py-8 sm:h-auto">
                <div className="container mx-auto px-4 sm:px-12 md:px-24 lg:px-48">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Section Brand */}
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h1 className="text-2xl font-bold sm:text-4xl">Number Wise</h1>
                            <p className="text-sm sm:text-base">Fibonacci, Prima, Geometri – Semua Siap Dihitung!</p>
                        </div>

                        {/* Section Navigation Links */}
                        <div className="flex space-x-4 sm:space-x-6 mb-4 md:mb-0">
                            <a href="#" className="hover:underline text-base sm:text-lg">
                                Home
                            </a>
                            <a href="#" className="hover:underline text-base sm:text-lg">
                                Features
                            </a>
                            <a href="#" className="hover:underline text-base sm:text-lg">
                                Pricing
                            </a>
                            <a href="#" className="hover:underline text-base sm:text-lg">
                                Contact
                            </a>
                        </div>

                        {/* Section Social Media Icons */}
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="facebook-icon.svg" alt="Facebook" className="h-6 w-6 hover:opacity-75" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="twitter-icon.svg" alt="Twitter" className="h-6 w-6 hover:opacity-75" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="instagram-icon.svg" alt="Instagram" className="h-6 w-6 hover:opacity-75" />
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Number Wise. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}
