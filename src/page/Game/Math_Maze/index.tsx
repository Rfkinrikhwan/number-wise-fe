import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

type Node = {
    id: number;
    question: string;
    correctAnswer: number;
    options: number[];
    connections: number[];
};

type GameState = 'playing' | 'won' | 'lost';

const MathMaze: React.FC = () => {
    const [maze, setMaze] = useState<Node[]>([]);
    const [currentNode, setCurrentNode] = useState<Node | null>(null);
    const [stepsRemaining, setStepsRemaining] = useState<number>(20);
    const [gameState, setGameState] = useState<GameState>('playing');

    useEffect(() => {
        const generateMaze = () => {
            const nodes: Node[] = Array.from({ length: 10 }, (_, i) => ({
                id: i,
                question: `What is ${i} + ${i}?`,
                correctAnswer: i + i,
                options: Array.from({ length: 3 }, () => Math.floor(Math.random() * 20)).concat(i + i).sort(() => Math.random() - 0.5),
                connections: i === 9 ? [] : [i + 1],
            }));
            setMaze(nodes);
            setCurrentNode(nodes[0]);
        };
        generateMaze();
    }, []);

    const handleOptionClick = (answer: number) => {
        if (!currentNode || gameState !== 'playing') return;

        if (answer === currentNode.correctAnswer) {
            if (currentNode.id === maze.length - 1) {
                setGameState('won');
                return;
            }
            const nextNodeId = currentNode.connections[0];
            setCurrentNode(maze[nextNodeId]);
        } else {
            setStepsRemaining((prev) => prev - 1);
            if (stepsRemaining <= 1) {
                setGameState('lost');
            }
        }
    };

    const restartGame = () => {
        setStepsRemaining(20);
        setGameState('playing');
        setCurrentNode(maze[0]);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <motion.h1
                className="text-4xl font-bold mb-8 text-blue-600"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Math Maze Game
            </motion.h1>
            {gameState === 'playing' && currentNode ? (
                <motion.div
                    className="bg-white p-6 rounded shadow-md w-80"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Steps Remaining: {stepsRemaining}</h2>
                    <h3 className="text-xl font-medium text-gray-800 mb-6">{currentNode.question}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {currentNode.options.map((option, index) => (
                            <motion.button
                                key={index}
                                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            ) : gameState === 'won' ? (
                <motion.div
                    className="bg-green-100 p-6 rounded shadow-md text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-green-600 mb-4">Congratulations! You won!</h2>
                    <button
                        className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
                        onClick={restartGame}
                    >
                        Restart
                    </button>
                </motion.div>
            ) : (
                <motion.div
                    className="bg-red-100 p-6 rounded shadow-md text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Game Over! You lost.</h2>
                    <button
                        className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={restartGame}
                    >
                        Restart
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default MathMaze;
