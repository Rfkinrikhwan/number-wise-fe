import { changeThemeStore, sideBarStore } from "@/store";
import Curve from "../curve";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import WiseIcon from "../icon";
import Logo from "../../../public/wise-lg-primary.png";
import NavigationLink from "../custom/NavigationLink";

export default function Sidebar() {
    const path = useLocation();
    const { theme } = changeThemeStore();
    const { openSidebarFn } = sideBarStore();

    const menuSlide = {
        initial: { x: "calc(100% + 100px)" },
        enter: { x: "0", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
        exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
    }

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className={`h-screen ${theme === "dark" ? "bg-wise-dark" : "bg-[#f3f2f7]"} fixed right-0 top-0 text-black z-[9999] w-full p-4`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="flex-shrink-0">
                        <div className="flex items-center">
                            <img src={Logo} alt="" className="w-14" />
                            <h1 className='text-wise-primary font-bold text-2xl'>Number Wise</h1>
                        </div>
                    </Link>
                </div>
                <Button className='block sm:hidden bg-transparent hover:bg-transparent rounded-full text-black shadow-none' onClick={() => openSidebarFn()}>
                    <WiseIcon iconName="HiOutlineMenuAlt3" size={30} />
                </Button>
            </div>

            <div className="flex flex-col gap-2 transition-all duration-300 mt-8">
                <NavigationLink theme={theme} path={path} to="/" additional="sideNav" textContent={'Home'} />
                <NavigationLink theme={theme} path={path} to="/features" additional="sideNav" textContent={'Features'} />
                <NavigationLink theme={theme} path={path} to="/courses" additional="sideNav" textContent={'Courses'} />
                <NavigationLink theme={theme} path={path} to="/blog" additional="sideNav" textContent={'Blog'} />
                <NavigationLink theme={theme} path={path} to="/game" additional="sideNav" textContent={'Game'} />
            </div>

            <Curve />
        </motion.div>
    );
}


