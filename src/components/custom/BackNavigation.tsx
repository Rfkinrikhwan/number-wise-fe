import { changeThemeStore } from '@/store';
import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BackNavigation({ title, to }: { title: string, to: string }) {
    const { theme } = changeThemeStore();

    return (
        <Link to={to}>
            <div className='flex items-center gap-2'>
                <ChevronLeft className='w-8 h-8' />
                <h1
                    className={`${theme === "dark" ? "text-white" : "text-gray-900"
                        } text-3xl md:text-4xl font-bold leading-none`}
                >
                    {title}
                </h1>
            </div>
        </Link>
    )
}
