import { useState, useEffect, useCallback } from 'react';
import { generateQuestion, Question } from '@/lib/util/QuestionGenerator';
import { motion } from 'framer-motion';
import { SnakeSegment } from './SnakeSegment';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

type Position = {
    x: number;
    y: number;
};

type Food = Position & {
    value: number;
};

const GRID_SIZE = 20;
const INITIAL_SNAKE_LENGTH = 3;

export default function SnakeQuizGame() {
    const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
    const [direction, setDirection] = useState<'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>('RIGHT');
    const [food, setFood] = useState<Food[]>([]);
    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState<Question>(generateQuestion());
    const [gameOver, setGameOver] = useState(false);
    const [isGameRunning, setIsGameRunning] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const moveSnake = useCallback(() => {
        if (gameOver || !isGameRunning) return;

        setSnake((prevSnake) => {
            const newSnake = [...prevSnake];
            const head = { ...newSnake[0] };

            switch (direction) {
                case 'UP':
                    head.y = (head.y - 1 + GRID_SIZE) % GRID_SIZE;
                    break;
                case 'DOWN':
                    head.y = (head.y + 1) % GRID_SIZE;
                    break;
                case 'LEFT':
                    head.x = (head.x - 1 + GRID_SIZE) % GRID_SIZE;
                    break;
                case 'RIGHT':
                    head.x = (head.x + 1) % GRID_SIZE;
                    break;
            }

            newSnake.unshift(head);

            const eatenFoodIndex = food.findIndex((f) => f.x === head.x && f.y === head.y);

            if (eatenFoodIndex !== -1) {
                const eatenFood = food[eatenFoodIndex];
                if (eatenFood.value === question.correctAnswer) {
                    setScore((prevScore) => prevScore + eatenFood.value);
                    newSnake.push(...Array(eatenFood.value).fill(newSnake[newSnake.length - 1]));
                } else {
                    const penalty = eatenFood.value;
                    if (newSnake.length <= penalty) {
                        setGameOver(true);
                    } else {
                        newSnake.splice(newSnake.length - penalty, penalty);
                    }
                }
                setFood([]);
            } else if (newSnake.length > INITIAL_SNAKE_LENGTH) {
                newSnake.pop();
            }

            return newSnake;
        });
    }, [direction, food, gameOver, question, isGameRunning]);

    useEffect(() => {
        if (isGameRunning) {
            const intervalId = setInterval(moveSnake, 100);
            return () => clearInterval(intervalId);
        }
    }, [moveSnake, isGameRunning]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!isGameRunning) return;

            switch (e.key) {
                case 'ArrowUp':
                    setDirection('UP');
                    break;
                case 'ArrowDown':
                    setDirection('DOWN');
                    break;
                case 'ArrowLeft':
                    setDirection('LEFT');
                    break;
                case 'ArrowRight':
                    setDirection('RIGHT');
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isGameRunning]);

    useEffect(() => {
        if (isGameRunning && food.length < 4) {
            const newQuestion = generateQuestion();
            setQuestion(newQuestion);
            const newFood: Food[] = newQuestion.answers.map((value) => ({
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE),
                value,
            }));
            setFood(newFood);
        }
    }, [isGameRunning, food.length]);

    const startGame = () => {
        setSnake([{ x: 10, y: 10 }]);
        setDirection('RIGHT');
        setFood([]);
        setScore(0);
        setQuestion(generateQuestion());
        setGameOver(false);
        setIsGameRunning(true);
        setIsFullScreen(true);
        document.documentElement.requestFullscreen().catch((err) => {
            console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    };

    const exitGame = () => {
        setIsGameRunning(false);
        setIsFullScreen(false);
        if (document.fullscreenElement) {
            document.exitFullscreen().catch((err) => {
                console.error(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
            });
        }
    };

    const restartGame = () => {
        startGame();
    };

    if (!isFullScreen) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Snake Quiz Game</h1>
                <Button className="mt-4" onClick={startGame}>
                    Start Game
                </Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="relative w-full h-full p-4">
                <Button
                    className="absolute top-4 right-4 z-10"
                    variant="outline"
                    size="icon"
                    onClick={exitGame}
                    aria-label="Exit game"
                >
                    <X className="h-4 w-4" />
                </Button>
                <div className="mb-4 text-center">
                    <p className="text-xl font-semibold">Question: {question.question}</p>
                    <p className="text-lg">Score: {score}</p>
                </div>
                <div
                    className="relative w-full aspect-square max-w-[80vh] mx-auto border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden game-board"
                    style={{ position: 'relative' }}
                >
                    {snake.map((segment, index) => (
                        <SnakeSegment
                            key={index}
                            x={segment.x}
                            y={segment.y}
                            index={index}
                            total={snake.length}
                            direction={direction}
                            gridSize={GRID_SIZE}
                        />
                    ))}
                    {food.map((foodItem, index) => (
                        <motion.div
                            key={index}
                            className="absolute bg-red-500 rounded-full flex items-center justify-center text-white font-bold"
                            style={{
                                width: `${100 / GRID_SIZE}%`,
                                height: `${100 / GRID_SIZE}%`,
                                left: `${(foodItem.x / GRID_SIZE) * 100}%`,
                                top: `${(foodItem.y / GRID_SIZE) * 100}%`,
                            }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        >
                            {foodItem.value}
                        </motion.div>
                    ))}
                    {gameOver && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                                <p className="text-2xl font-bold text-red-600 mb-2">Game Over!</p>
                                <Button onClick={restartGame}>
                                    Restart Game
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

