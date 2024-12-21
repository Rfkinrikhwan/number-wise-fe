import { useEffect, useState, type ChangeEvent } from "react";
import { changeThemeStore } from "@/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BackNavigation from "@/components/custom/BackNavigation";

export default function Prime() {
    const { theme } = changeThemeStore();
    const [start, setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(0);
    const [result, setResult] = useState<number[] | null>(null);
    const [animationKey, setAnimationKey] = useState<number>(0);

    const handleStartChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(e.target.value));
    };

    const handleEndChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEnd(Number(e.target.value));
    };

    const isPrime = (num: number) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const generatePrimeNumbers = () => {
        const primes: number[] = [];
        for (let i = start; i <= end; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }

        setResult(primes);
        setAnimationKey((prev) => prev + 1); // Memicu ulang animasi
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section
            className={`${theme === "dark" ? "bg-wise-dark" : ""
                } flex flex-col min-h-screen gap-5 px-4 py-6 sm:px-12 md:px-24 lg:px-48`}
        >
            <BackNavigation title="Prime Sequence" to="/features" />


            <p
                className={`${theme === "dark" ? "text-white" : "text-gray-900"
                    } text-justify quicksand-font`}
            >
                Prime numbers are natural numbers greater than 1 that cannot be formed by multiplying two smaller natural numbers.
                Examples include 2, 3, 5, 7, 11, and so on. Enter a range of numbers to find all the prime numbers in that range.
            </p>

            <div className="flex flex-col gap-4 w-full">
                <div className="flex sm:flex-row gap-4 w-full">
                    <Input
                        value={start}
                        onChange={handleStartChange}
                        className="p-5 border rounded-lg"
                        placeholder="Start range"
                    />

                    <Input
                        value={end}
                        onChange={handleEndChange}
                        className="p-5 border rounded-lg"
                        placeholder="End range"
                    />

                    <Button
                        onClick={generatePrimeNumbers}
                        className="bg-wise-primary rounded-lg text-white px-4 py-5"
                    >
                        Find Primes
                    </Button>
                </div>
            </div>

            {result && (
                <motion.div
                    key={animationKey} // Memicu ulang animasi dengan `key`
                    className="grid grid-cols-5 md:flex gap-3 mt-1 md:flex-wrap"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                >
                    {result.map((num, index) => (
                        <motion.div
                            key={index}
                            className="w-16 h-16 bg-purple-500 text-white font-bold rounded-lg flex items-center justify-center"
                            variants={{
                                hidden: { opacity: 0, scale: 0.5, rotate: -45 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    rotate: 0,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    },
                                },
                            }}
                            whileHover={{
                                scale: 1.2,
                                backgroundColor: "#6f42c1",
                                transition: { duration: 0.3 },
                            }}
                        >
                            {num}
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </section>
    );
}
