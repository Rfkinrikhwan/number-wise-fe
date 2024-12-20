import React, { useState, useEffect } from 'react';
// import './App.css'; // Add your custom styling here

const PrimeNumberGame: React.FC = () => {
    const [number, setNumber] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [timeLeft, setTimeLeft] = useState<number>(30); // 30 seconds timer
    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    // Generate a random number between 1 and 100
    const generateNumber = () => {
        return Math.floor(Math.random() * 100) + 1;
    };

    // Check if a number is prime
    const isPrime = (num: number) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    // Handle player response
    const handleAnswer = (answer: boolean) => {
        if (isGameOver) return;

        const correct = isPrime(number) === answer;
        if (correct) {
            setScore((prevScore) => prevScore + 1);
        } else {
            setScore((prevScore) => (prevScore > 0 ? prevScore - 1 : 0));
        }
        setNumber(generateNumber());
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

    // Start new game
    const resetGame = () => {
        setScore(0);
        setTimeLeft(30);
        setIsGameOver(false);
        setNumber(generateNumber());
    };

    // Initialize first number
    useEffect(() => {
        setNumber(generateNumber());
    }, []);

    return (
        <div className="App">
            <h1>Prime Number Game</h1>
            {isGameOver ? (
                <div>
                    <h2>Game Over!</h2>
                    <p>Your score: {score}</p>
                    <button onClick={resetGame}>Play Again</button>
                </div>
            ) : (
                <div>
                    <h2>Time Left: {timeLeft}s</h2>
                    <h2>Score: {score}</h2>
                    <h3>Is {number} a prime number?</h3>
                    <button onClick={() => handleAnswer(true)}>Yes</button>
                    <button onClick={() => handleAnswer(false)}>No</button>
                </div>
            )}
        </div>
    );
};

export default PrimeNumberGame;

