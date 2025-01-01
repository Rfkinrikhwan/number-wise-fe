import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import WiseIcon from '../icon';
import { sideBarStore } from '@/store';
import NavigationLink from '../custom/NavigationLink';
import { AnimatePresence } from 'framer-motion';
import Sidebar from '../sidebar';
import { changeThemeStore } from '@/store';

// Logo
import WisePrimary from '../../../public/wise-lg-primary.png';
import WiseSecondary from '../../../public/wise-lg-secondary.png';

const Navbar = () => {
    const { theme } = changeThemeStore();
    const path = useLocation();
    const { side, openSidebarFn } = sideBarStore();
    const [hasBackground, setHasBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
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
        <nav id='navbar-wise' className={`${hasBackground ? 'shadow' : 'border-b border-slate-200'} ${theme === 'dark' ? 'bg-wise-dark border-b-0' : 'bg-white'} sticky top-0 w-full transition-all duration-300 z-50 py-2`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-6">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo and brand */}
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <div className="flex items-center">
                                <img src={theme === 'dark' ? WiseSecondary : WisePrimary} alt="" className="w-14" />
                                <h1 className={`${theme === 'dark' ? "text-wise-secondary" : "text-wise-primary"} font-bold text-2xl`}>Number Wise</h1>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-3">
                        <NavigationLink theme={theme} path={path} to="/" textContent={'Home'} />
                        <NavigationLink theme={theme} path={path} to="/features" textContent={'Features'} />
                        <NavigationLink theme={theme} path={path} to="/courses" textContent={'Courses'} />
                        <NavigationLink theme={theme} path={path} to="/blog" textContent={'Blog'} />
                        <NavigationLink theme={theme} path={path} to="/game" textContent={'Game'} />
                    </div>

                    <div className='hidden md:flex items-center space-x-8'>
                        <Link to="/signin" className={`font-semibold ${theme === 'dark' ? "text-white hover:text-gray-600" : "text-gray-600 hover:text-gray-900"}`}>Sign In</Link>
                        <div className={`flex justify-end items-center gap-3 border w-32 ${theme === 'dark' ? "border-wise-secondary" : "border-wise-primary"} px-1 py-1  rounded-full`}>
                            <p className={`${theme === 'dark' ? "text-white" : ""} font-semibold`}>Sign Up</p>
                            <Button className={`rounded-full w-8 h-8 ${theme === 'dark' ? "bg-wise-secondary" : "bg-wise-primary"} text-white hover:bg-transparent`}>
                                <WiseIcon iconName="GoArrowUpRight" />
                            </Button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => openSidebarFn()}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {side ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {side && <Sidebar />}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
