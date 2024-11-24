import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import WiseIcon from '../icon';

export default function index() {

    return (
        <>
            <Navbar />

            <div>
                <Outlet />
            </div>

            <footer className="bg-wise-primary text-gray-200 py-8 h-72">
                <div className="container px-4 sm:px-12 flex flex-col justify-between md:px-24 lg:px-48 h-full">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Section Brand */}
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h1 className="text-2xl font-bold sm:text-4xl">Number Wise</h1>
                            <p className="text-sm sm:text-base">Fibonacci, Prima, Geometri – Semua Siap Dihitung!</p>
                        </div>

                        {/* Section Social Media Icons */}
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <WiseIcon iconName='FaFacebook' />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <WiseIcon iconName='FaTwitter' />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <WiseIcon iconName='FaInstagram' />
                            </a>
                        </div>
                    </div>

                    <Link to="/about-wise" className='text-xl font-semibold hover:text-wise-secondary transition-colors'>
                        About Wise
                    </Link>

                    <div className="mt-8 text-white text-sm">
                        &copy; {new Date().getFullYear()} Number Wise. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}
