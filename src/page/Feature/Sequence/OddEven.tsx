import { useEffect, useState, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { changeThemeStore } from "@/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BackNavigation from "@/components/custom/BackNavigation";

export default function OddEven() {
    const { theme } = changeThemeStore();
    const [start, setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(0);
    const [result, setResult] = useState<{ number: number[] } | null>(null);
    const [animationKey, setAnimationKey] = useState<number>(0); // Key dinamis untuk memicu ulang animasi

    const handleStartChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(e.target.value));
    };

    const handleEndChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEnd(Number(e.target.value));
    };

    const generateOddEven = () => {
        const startNum = start;
        const endNum = end;

        const number: number[] = [];

        for (let i = startNum; i <= endNum; i++) {
            number.push(i);
        }

        setResult({ number });
        setAnimationKey((prev) => prev + 1); // Ubah key setiap kali tombol "Result" diklik
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section
            className={`${theme === "dark" ? "bg-wise-dark" : ""
                } flex flex-col min-h-screen gap-5 px-4 py-6 sm:px-12 md:px-24 lg:px-48`}
        >
            <BackNavigation title="Odd Even Sequence" to="/features" />


            <p
                className={`${theme === "dark" ? "text-white" : "text-gray-900"
                    } text-justify quicksand-font`}
            >
                The odd number sequence consists of numbers that are not divisible by 2, such as
                1, 3, 5, etc. While the even number sequence consists of numbers that are divisible
                by 2, such as 2, 4, 6, etc. Enter a range of numbers to see the odd and even numbers
                in the range.
            </p>

            <div className="flex flex-col gap-4 w-full">
                <div className="flex sm:flex-row gap-4 w-full">
                    <Input
                        value={start}
                        onChange={handleStartChange}
                        className="p-5 border rounded-lg"
                    />

                    <Input
                        value={end}
                        onChange={handleEndChange}
                        className="p-5 border rounded-lg"
                    />

                    <Button
                        onClick={generateOddEven}
                        className="bg-wise-primary rounded-lg text-white px-4 py-5"
                    >
                        Result
                    </Button>
                </div>
            </div>

            {result && (
                <motion.div
                    key={animationKey} // Key dinamis
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
                    {result.number.map((num, index) => (
                        <motion.div
                            key={index}
                            className={`w-16 h-16 ${num % 2 === 0 ? "bg-green-500" : "bg-red-500"
                                } text-white font-bold rounded-lg flex items-center justify-center`}
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
                                rotate: 10,
                                backgroundColor: num % 2 === 0 ? "#28a745" : "#ff4d4d",
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
