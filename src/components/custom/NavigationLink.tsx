import { sideBarStore } from '@/store'
import { Link } from 'react-router-dom'

interface Props {
    path: {
        pathname: string
    }
    to: string
    textContent: string
    additional?: string
}

export default function NavigationLink({ path, to, textContent, additional }: Props) {
    const { openSidebarFn } = sideBarStore();

    const clickFunction = () => {
        window.scrollTo(0, 0)

        if (additional === "sideNav") {
            openSidebarFn();
        }
    }

    if (additional === "sideNav") {
        return (
            <Link to={to} onClick={() => clickFunction()} className={`${path.pathname === to ? "borderfont-bold border-wise-primary bg-wise-primary text-white" : "hover:text-gray-600 font-semibold"} transition-colors duration-300 py-2 px-3 rounded-full`}>
                {textContent}
            </Link>
        )
    }

    return (
        <Link to={to} onClick={() => clickFunction()} className={`${path.pathname === to ? "border text-wise-primary font-bold border-wise-primary" : "hover:text-gray-600 font-semibold"} transition-colors duration-300 py-1 w-24 text-center rounded-full`}>
            {textContent}
        </Link>
    )
}
