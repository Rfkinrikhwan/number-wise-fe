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
            <nav className={`${hasBackground ? 'shadow-md bg-white' : 'border-b'} fixed w-full transition-all duration-300 z-50`}>
                <div className="px-48 py-3">
                    <div className="relative flex items-center justify-between h-16">
                        <p className='text-4xl font-bold text-wise-primary'>Number Wise</p>
                        <div className="flex justify-center items-center gap-8">
                            <a href="#" className="text-wise-primary hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium">Home</a>
                            <a href="#" className="text-wise-primary hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium">Feature</a>
                            <a href="#" className="text-wise-primary hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium">Game</a>
                        </div>
                    </div>
                </div>
            </nav>


            <div>
                <Outlet />
            </div>

            <footer className="bg-wise-primary text-gray-200 py-8 h-96">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Section Brand */}
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h1 className="text-2xl font-bold">Number Wise</h1>
                            <p className="text-sm">Fibonacci, Prima, Geometri – Semua Siap Dihitung!</p>
                        </div>

                        {/* Section Navigation Links */}
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            <a href="#" className="hover:underline">Home</a>
                            <a href="#" className="hover:underline">Features</a>
                            <a href="#" className="hover:underline">Pricing</a>
                            <a href="#" className="hover:underline">Contact</a>
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
