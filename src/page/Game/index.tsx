import RetroGrid from "@/components/ui/retro-grid";
import { useEffect } from "react";

export default function Games() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-4xl sm:text-7xl font-bold leading-none tracking-tighter text-transparent">
                Game, Coming Soon..
            </span>

            <RetroGrid />
        </div>
    )
}
