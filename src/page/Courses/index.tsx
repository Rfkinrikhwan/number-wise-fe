import { changeThemeStore } from "@/store";


export default function Courses() {
    const { theme } = changeThemeStore();

    return (
        <section className={`${theme === 'dark' ? 'bg-wise-dark' : ''} flex flex-col items-center justify-center gap-10 px-4 py-16 h-[95vh] sm:px-12 md:px-24 lg:px-48 border-b border-slate-200`}>
            <h1 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-4xl md:text-8xl mb-6 quicksand-font leading-none`}>
                Coming Soon
            </h1>
        </section>
    )
}
