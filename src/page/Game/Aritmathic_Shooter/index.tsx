import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import 'tailwindcss/tailwind.css';

const AritmathicShooter = (): ReactElement => {
    const [targets, setTargets] = useState<{
        id: number;
        equation: string;
        result: number;
        x: number;
        y: number;
    }[]>([]);
    const [score, setScore] = useState<number>(0);
    const [timeLeft, setTimeLeft] = useState<number>(30); // 30 seconds timer
    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    // Generate random equation and result
    const generateEquation = (): { equation: string; result: number } => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
        const result = eval(`${num1} ${operator} ${num2}`);
        return { equation: `${num1} ${operator} ${num2}`, result };
    };

    // Initialize game
    const startGame = () => {
        setTargets([]);
        setScore(0);
        setTimeLeft(30);
        setIsGameOver(false);
        spawnTargets();
    };

    // Spawn moving targets
    const spawnTargets = () => {
        const interval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(interval);
                return;
            }
            setTargets((prevTargets) => {
                const newTarget = {
                    id: Math.random(),
                    ...generateEquation(),
                    x: Math.random() * 90 + 5, // Random position between 5% and 95%
                    y: Math.random() * 50 + 10, // Random position between 10% and 60%
                };
                return [...prevTargets, newTarget];
            });
        }, 2000); // Spawn a target every 2 seconds
    };

    // Handle shooting a target
    const handleShoot = (id: number, result: number) => {
        if (isGameOver) return;

        const target = targets.find((t) => t.id === id);
        if (target && target.result === result) {
            setScore((prevScore) => prevScore + 1);
        } else {
            setScore((prevScore) => (prevScore > 0 ? prevScore - 1 : 0));
        }

        setTargets((prevTargets) => prevTargets.filter((t) => t.id !== id));
    };

    // Timer countdown
    useEffect(() => {
        if (timeLeft > 0 && !isGameOver) {
            const timer = setTimeout(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            setIsGameOver(true);
        }
    }, [timeLeft, isGameOver]);

    useEffect(() => {
        startGame();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 relative">
            <h1 className="text-4xl font-bold text-center mt-6">Arithmetic Shooter</h1>
            {isGameOver ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 text-white">
                    <h2 className="text-2xl font-semibold mb-4">Game Over!</h2>
                    <p className="text-xl mb-6">Your score: <span className="font-bold">{score}</span></p>
                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                        onClick={startGame}
                    >
                        Play Again
                    </button>
                </div>
            ) : (
                <React.Fragment>
                    <div className="absolute top-4 left-4 text-lg font-medium">Time Left: {timeLeft}s</div>
                    <div className="absolute top-4 right-4 text-lg font-medium">Score: {score}</div>
                    <div className="relative w-full h-full">
                        {targets.map((target) => (
                            <div
                                key={target.id}
                                className="absolute bg-red-500 text-white p-4 rounded-lg shadow-lg cursor-pointer"
                                style={{ top: `${target.y}%`, left: `${target.x}%` }}
                                onClick={() => handleShoot(target.id, target.result)}
                            >
                                <p className="text-center font-bold">{target.equation}</p>
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

export default AritmathicShooter;

