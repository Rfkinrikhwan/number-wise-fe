import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { generateQuestion, Question } from '@/lib/util/QuestionGenerator';
import { SnakeSegment } from './SnakeSegment';
import { Button } from '@/components/ui/button';
import { X, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { changeThemeStore } from '@/store';
import useSwipe from '@/hooks/useSwipe';

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
    const { theme } = changeThemeStore();
    const gameboardRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const navbar = document.getElementById('navbar-wise');
    const footer = document.getElementById('footer-wise');

    const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe(handleSwipe);

    function handleSwipe(direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT') {
        if (isGameRunning) {
            setDirection(direction);
        }
    }

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
                    controls.start({ scale: [1, 1.2, 1], transition: { duration: 0.3 } });
                } else {
                    const penalty = eatenFood.value;
                    if (newSnake.length <= penalty) {
                        setGameOver(true);
                    } else {
                        newSnake.splice(newSnake.length - penalty, penalty);
                    }
                    controls.start({ x: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } });
                }
                setFood([]);
            } else if (newSnake.length > INITIAL_SNAKE_LENGTH) {
                newSnake.pop();
            }

            // Check for collision with self
            const headString = JSON.stringify(head);
            if (newSnake.slice(1).some(segment => JSON.stringify(segment) === headString)) {
                setGameOver(true);
            }

            return newSnake;
        });
    }, [direction, food, gameOver, question, isGameRunning, controls]);

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

        // Menyembunyikan navbar
        if (navbar) {
            navbar.style.display = 'none';
        }

        // Menyembunyikan footer
        if (footer) {
            footer.style.display = 'none';
        }

        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        }
    };

    const exitGame = () => {
        setIsGameRunning(false);
        setIsFullScreen(false);

        // Menampilkan navbar
        if (navbar) {
            navbar.style.display = 'block';
        }

        // Menampilkan footer
        if (footer) {
            footer.style.display = 'block';
        }

        if (document.fullscreenElement) {
            document.exitFullscreen().catch((err) => {
                console.error(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
            });
        }
    };

    const restartGame = () => {
        startGame();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!isFullScreen) {
        return (
            <motion.div
                className={`flex flex-col items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-wise-dark' : 'bg-gray-100'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute inset-0 h-full top-16 w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px]"></div>

                <motion.h1
                    className={`text-4xl sm:text-7xl relative font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                >
                    Caterpillar Quiz Game
                </motion.h1>
                <motion.div
                    className='relative'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 10 }}
                >
                    <Button className={`mt-5 z-10 text-xl sm:text-3xl py-4 sm:py-6 ${theme === 'dark' ? 'bg-wise-secondary hover:bg-wise-secondary/90 text-white' : 'bg-wise-primary hover:bg-wise-primary/90 text-white'}`} onClick={startGame}>
                        Start Game
                    </Button>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <motion.div
            className={`${theme === 'dark' ? 'bg-wise-dark' : 'bg-gray-100'} flex flex-col items-center justify-center min-h-screen`}
            animate={controls}
        >
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
                <div className={`mb-4 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <p className="text-xl font-semibold">Question: {question.question}</p>
                    <p className="text-lg">Score: {score}</p>
                </div>
                <div
                    ref={gameboardRef}
                    className="relative w-full aspect-square max-w-[80vh] mx-auto border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden game-board"
                    style={{ touchAction: 'none' }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
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
                <div className="mt-4 flex justify-center space-x-2">
                    <Button onClick={() => setDirection('UP')} className="p-2"><ArrowUp /></Button>
                    <Button onClick={() => setDirection('LEFT')} className="p-2"><ArrowLeft /></Button>
                    <Button onClick={() => setDirection('DOWN')} className="p-2"><ArrowDown /></Button>
                    <Button onClick={() => setDirection('RIGHT')} className="p-2"><ArrowRight /></Button>
                </div>
            </div>
        </motion.div>
    );
}

