import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };
type FoodItem = Position & { value: number };
type MathQuestion = {
    question: string;
    answer: number;
    options: number[];
};

type GameState = {
    positions: FoodItem[];
    question: MathQuestion;
};

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 200;
const NUMBER_OF_FOOD_ITEMS = 4;

const generateMathQuestion = (): MathQuestion => {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1: number, num2: number, answer: number;

    switch (operation) {
        case '+':
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = num1 + num2;
            break;
        case '-':
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * num1) + 1;
            answer = num1 - num2;
            break;
        case '*':
            num1 = Math.floor(Math.random() * 5) + 1;
            num2 = Math.floor(Math.random() * 5) + 1;
            answer = num1 * num2;
            break;
        default:
            num2 = Math.floor(Math.random() * 5) + 1;
            answer = Math.floor(Math.random() * 5) + 1;
            num1 = num2 * answer;
            answer = num1 / num2;
    }

    const options = [answer];
    while (options.length < 4) {
        const option = Math.floor(Math.random() * 20) + 1;
        if (!options.includes(option)) {
            options.push(option);
        }
    }

    return {
        question: `${num1} ${operation} ${num2} = ?`,
        answer,
        options: options.sort(() => Math.random() - 0.5)
    };
};

// Update the return type annotation of the function
const generateFoodPositions = (snake: Position[]): GameState => {
    const positions: FoodItem[] = [];
    const question = generateMathQuestion();

    for (let i = 0; i < NUMBER_OF_FOOD_ITEMS; i++) {
        let newPosition = { x: 0, y: 0, value: 0 };
        do {
            newPosition = {
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE),
                value: question.options[i]
            };
        } while (
            snake.some(segment => segment.x === newPosition.x && segment.y === newPosition.y) ||
            positions.some(food => food.x === newPosition.x && food.y === newPosition.y)
        );
        positions.push(newPosition);
    }

    return { positions, question };
};

const SnakeMathGame = () => {
    const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
    const [direction, setDirection] = useState<Direction>('RIGHT');
    const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<MathQuestion>(generateMathQuestion());
    const [isPlaying, setIsPlaying] = useState(true);

    const initializeGame = useCallback(() => {
        const { positions, question } = generateFoodPositions([{ x: 10, y: 10 }]);
        setFoodItems(positions);
        setCurrentQuestion(question);
    }, []);

    const handleKeyPress = useCallback((e: KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowUp':
                setDirection(prev => prev !== 'DOWN' ? 'UP' : prev);
                break;
            case 'ArrowDown':
                setDirection(prev => prev !== 'UP' ? 'DOWN' : prev);
                break;
            case 'ArrowLeft':
                setDirection(prev => prev !== 'RIGHT' ? 'LEFT' : prev);
                break;
            case 'ArrowRight':
                setDirection(prev => prev !== 'LEFT' ? 'RIGHT' : prev);
                break;
        }
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);

    useEffect(() => {
        if (foodItems.length === 0) {
            initializeGame();
        }
    }, [foodItems, initializeGame]);

    useEffect(() => {
        if (!isPlaying) return;

        const moveSnake = () => {
            setSnake(prevSnake => {
                const head = { ...prevSnake[0] };

                switch (direction) {
                    case 'UP':
                        head.y -= 1;
                        break;
                    case 'DOWN':
                        head.y += 1;
                        break;
                    case 'LEFT':
                        head.x -= 1;
                        break;
                    case 'RIGHT':
                        head.x += 1;
                        break;
                }

                if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
                    setGameOver(true);
                    setIsPlaying(false);
                    return prevSnake;
                }

                if (prevSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
                    setGameOver(true);
                    setIsPlaying(false);
                    return prevSnake;
                }

                const newSnake = [head, ...prevSnake];
                const collidedFood = foodItems.find(food => food.x === head.x && food.y === head.y);

                if (collidedFood) {
                    if (collidedFood.value === currentQuestion.answer) {
                        for (let i = 0; i < collidedFood.value - 1; i++) {
                            newSnake.push({ ...prevSnake[prevSnake.length - 1] });
                        }
                        setScore(prev => prev + collidedFood.value);
                        const { positions, question } = generateFoodPositions(newSnake);
                        setFoodItems(positions);
                        setCurrentQuestion(question);
                    } else {
                        const reduction = collidedFood.value;
                        if (newSnake.length - reduction <= 0) {
                            setGameOver(true);
                            setIsPlaying(false);
                            return prevSnake;
                        }
                        newSnake.splice(newSnake.length - reduction, reduction);
                    }
                } else {
                    newSnake.pop();
                }

                return newSnake;
            });
        };

        const gameInterval = setInterval(moveSnake, INITIAL_SPEED);
        return () => clearInterval(gameInterval);
    }, [direction, foodItems, isPlaying, currentQuestion]);

    const resetGame = () => {
        setSnake([{ x: 10, y: 10 }]);
        setDirection('RIGHT');
        setScore(0);
        setGameOver(false);
        setIsPlaying(true);
        setFoodItems([]);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="mb-4 text-xl font-bold">Score: {score}</div>
            <div className="mb-4 text-lg">{currentQuestion.question}</div>

            <div className="relative w-[500px] h-[500px] bg-white border-2 border-gray-300">
                {snake.map((segment, index) => (
                    <motion.div
                        key={index}
                        className="absolute bg-green-500 rounded-sm"
                        style={{
                            width: CELL_SIZE,
                            height: CELL_SIZE,
                            left: segment.x * CELL_SIZE,
                            top: segment.y * CELL_SIZE
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                    />
                ))}
                {foodItems.map((food, index) => (
                    <motion.div
                        key={`food-${index}`}
                        className="absolute bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{
                            width: CELL_SIZE,
                            height: CELL_SIZE,
                            left: food.x * CELL_SIZE,
                            top: food.y * CELL_SIZE
                        }}
                    >
                        {food.value}
                    </motion.div>
                ))}
            </div>

            <AlertDialog open={gameOver}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Game Over!</AlertDialogTitle>
                    </AlertDialogHeader>
                    <div className="mt-4">Final Score: {score}</div>
                    <button
                        onClick={resetGame}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Play Again
                    </button>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default SnakeMathGame;