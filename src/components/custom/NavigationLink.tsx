import { sideBarStore } from '@/store';
import { Link } from 'react-router-dom';

interface Props {
    path: {
        pathname: string;
    };
    to: string;
    textContent: string;
    additional?: string;
    theme: string;
}

export default function NavigationLink({ path, to, textContent, additional, theme }: Props) {
    const { openSidebarFn } = sideBarStore();

    const isActive = () => {
        if (to === "/") return path.pathname === to;
        if (to === "/home") return path.pathname === to;
        if (to === "/features") return path.pathname.startsWith(to);
        if (to === "/courses") return path.pathname.startsWith(to);
        if (to === "/blog") return path.pathname.startsWith(to);
        if (to === "/game") return path.pathname.startsWith(to);

        return false;
    }

    const clickFunction = () => {
        window.scrollTo(0, 0);

        if (additional === "sideNav") {
            openSidebarFn();
        }
    };

    const baseClass = `${theme === 'dark' ? 'text-white' : 'text-gray-600'} transition-colors duration-300 py-2 px-3 rounded-full`;
    const activeClass = isActive() ? (theme === 'dark' ? 'border text-wise-secondary font-bold border-wise-secondary' : 'border text-wise-primary font-bold border-wise-primary') : '';
    const hoverClass = `hover:${theme === 'dark' ? 'text-gray-300' : 'text-gray-600 font-semibold'}`;

    if (additional === "sideNav") {
        return (
            <Link
                to={to}
                onClick={() => clickFunction()}
                className={`${baseClass} ${activeClass} ${hoverClass}`}
            >
                {textContent}
            </Link>
        );
    }

    return (
        <Link
            to={to}
            onClick={() => clickFunction()}
            className={`${baseClass} ${activeClass} ${hoverClass} py-1 w-24 text-center`}
        >
            {textContent}
        </Link>
    );
}

