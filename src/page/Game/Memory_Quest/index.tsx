import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Gambar untuk kartu
const images = [
    "/bagi.png",
    "/besar-kecil.png",
    "/kali.png",
    "/kurang.png",
    "/pangkat.png",
    "/siku.png",
];

const shuffleArray = (array: any[]) => {
    return [...array, ...array] // Menggandakan array untuk membuat pasangan kartu
        .sort(() => Math.random() - 0.5); // Mengacak array
};

const MemoryQuest: React.FC = () => {
    const [cards, setCards] = useState<any[]>([]);
    const [flippedCards, setFlippedCards] = useState<any[]>([]);
    const [matchedCards, setMatchedCards] = useState<any[]>([]);
    const [timer, setTimer] = useState<number>(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        setCards(shuffleArray(images));
    }, []);

    useEffect(() => {
        if (flippedCards.length === 2) {
            // Cek jika dua kartu yang dibuka cocok
            if (flippedCards[0].image === flippedCards[1].image) {
                setMatchedCards((prev) => [...prev, flippedCards[0], flippedCards[1]]);
            }
            setTimeout(() => {
                setFlippedCards([]);
            }, 1000);
        }
    }, [flippedCards]);

    // Timer Game
    useEffect(() => {
        if (!gameOver) {
            const interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [gameOver]);

    const handleCardClick = (card: any, index: number) => {
        if (!flippedCards.includes(card) && flippedCards.length < 2 && !matchedCards.includes(card)) {
            setFlippedCards([...flippedCards, { ...card, index }]);
        }
    };

    useEffect(() => {
        if (matchedCards.length === cards.length) {
            setGameOver(true); // Jika semua kartu cocok, game selesai
        }
    }, [matchedCards, cards.length]);

    return (
        <div className="h-screen bg-gray-800 flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl font-bold mb-4">Memory Quest</h1>
            <div className="text-xl mb-4">Time: {timer}s</div>
            <div className="grid grid-cols-4 gap-4 mb-8">
                {cards.map((card, index) => {
                    const isFlipped = flippedCards.some((flippedCard) => flippedCard.index === index) || matchedCards.includes(card);
                    return (
                        <motion.div
                            key={index}
                            className="relative w-32 h-32 bg-gray-600 rounded-lg"
                            onClick={() => handleCardClick(card, index)}
                            animate={{ scale: isFlipped ? 1.1 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-blue-400 rounded-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isFlipped ? 0 : 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <motion.img
                                src={card}
                                alt={`card-${index}`}
                                className="absolute inset-0 object-cover rounded-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isFlipped ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                    );
                })}
            </div>
            {gameOver && <div className="text-4xl text-green-500">You Win!</div>}
        </div>
    );
};

export default MemoryQuest;
