import { useEffect, useState, type ChangeEvent } from "react";
import { changeThemeStore } from "@/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Fibonacci() {
    const { theme } = changeThemeStore();
    const [length, setLength] = useState<number>(0);
    const [result, setResult] = useState<number[] | null>(null);
    const [animationKey, setAnimationKey] = useState<number>(0);

    const handleLengthChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLength(Number(e.target.value));
    };

    const generateFibonacci = () => {
        const fibonacci: number[] = [];
        if (length > 0) fibonacci.push(0); // Nilai pertama
        if (length > 1) fibonacci.push(1); // Nilai kedua

        for (let i = 2; i < length; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }

        setResult(fibonacci);
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
            <h1
                className={`${theme === "dark" ? "text-white" : "text-gray-900"
                    } text-4xl md:text-4xl quicksand-font leading-none`}
            >
                Fibonacci Sequence
            </h1>

            <p
                className={`${theme === "dark" ? "text-white" : "text-gray-900"
                    } text-justify quicksand-font`}
            >
                The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones,
                starting from 0 and 1. For example, the sequence begins as 0, 1, 1, 2, 3, 5, 8, and so on.
                Enter the desired length of the sequence to generate it.
            </p>

            <div className="flex flex-col gap-4 w-full">
                <div className="flex sm:flex-row gap-4 w-full">
                    <Input
                        value={length}
                        onChange={handleLengthChange}
                        className="p-5 border rounded-lg"
                        placeholder="Enter length"
                    />

                    <Button
                        onClick={generateFibonacci}
                        className="bg-wise-primary rounded-lg text-white px-4 py-5"
                    >
                        Generate
                    </Button>
                </div>
            </div>

            {result && (
                <motion.div
                    key={animationKey} // Memicu ulang animasi dengan `key`
                    className="flex gap-3 mt-6 flex-wrap"
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
                            className={`w-16 h-16 ${theme === "dark" ? "bg-wise-secondary" : "bg-wise-primary text-white"} font-bold rounded-lg flex items-center justify-center`}
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
                                backgroundColor: theme === "dark" ? "#facc15" : "#704fe6",
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
