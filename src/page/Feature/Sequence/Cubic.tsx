import { useEffect, useState, type ChangeEvent } from "react";
import { changeThemeStore } from "@/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BackNavigation from "@/components/custom/BackNavigation";

export default function Cubic() {
    const { theme } = changeThemeStore();
    const [start, setStart] = useState<number>(1);
    const [length, setLength] = useState<number>(5);
    const [result, setResult] = useState<number[] | null>(null);
    const [animationKey, setAnimationKey] = useState<number>(0);

    const handleStartChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(e.target.value));
    };

    const handleLengthChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLength(Number(e.target.value));
    };

    const generateCubicSequence = () => {
        const sequence: number[] = [];
        for (let i = 0; i < length; i++) {
            sequence.push(Math.pow(start + i, 3)); // Menghitung kubik dari (start + i)
        }

        setResult(sequence);
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
            <BackNavigation title="Cubic Sequence" to="/features" />

            <p
                className={`${theme === "dark" ? "text-white" : "text-gray-900"
                    } text-justify quicksand-font`}
            >
                A cubic sequence is a series of numbers where each term is the cube of a specific integer. For example, with a starting value of 1,
                the sequence would be 1^3, 2^3, 3^3, and so on.
                Enter the starting value and the length of the sequence to generate the cubic sequence.
            </p>

            <div className="flex flex-col gap-4 w-full">
                <div className="flex sm:flex-row gap-4 w-full">
                    <Input
                        value={start}
                        onChange={handleStartChange}
                        className="p-5 border rounded-lg"
                        placeholder="Start value"
                    />

                    <Input
                        value={length}
                        onChange={handleLengthChange}
                        className="p-5 border rounded-lg"
                        placeholder="Length"
                    />

                    <Button
                        onClick={generateCubicSequence}
                        className="bg-wise-primary rounded-lg text-white px-4 py-5"
                    >
                        Generate
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
                            className="w-16 h-16 bg-blue-500 text-white font-bold rounded-lg flex items-center justify-center"
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
                                backgroundColor: "#1e3a8a",
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
