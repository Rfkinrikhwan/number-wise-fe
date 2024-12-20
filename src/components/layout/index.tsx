import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import SwapTheme from '../custom/SwapTheme';
import Footer from './Footer';

export default function index() {

    return (
        <>
            <Navbar />

            <div>
                <Outlet />
            </div>

            {/* Toogle Swap Theme */}
            <SwapTheme />

            <Footer />
        </>
    )
}
