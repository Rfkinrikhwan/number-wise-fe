import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CardIcon from "@/assets/uno-cards/Deck.png";
import winSound from "@/assets/audio/violin-win-1.mp3";
import confetti from "canvas-confetti";

const quotes = [
  {
    quote: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
  },
  {
    quote: "In mathematics, the art of asking the right questions is more important than solving problems.",
    author: "Georg Cantor",
  },
  {
    quote: "The joy of discovery is certainly the liveliest that the mind of man can ever feel.",
    author: "Claude Bernard",
  },
  {
    quote: "Mathematics is the music of reason.",
    author: "James Joseph Sylvester",
  },
];

export default function Winning({ playAgain }: { playAgain: () => void }) {
  const [randomQuote, setRandomQuote] = useState(0);

  useEffect(() => {
    const playWinSound = () => {
      const audio = new Audio(winSound);
      audio.volume = 0.1;
      audio.play();
    };

    playWinSound();
    setRandomQuote(Math.floor(Math.random() * quotes.length));

    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-6 text-center"
    >
      <motion.img
        src={CardIcon}
        alt="Card Icon"
        className="w-32 card-icon"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.p
        className="text-3xl font-bold text-green-600 dark:text-green-400"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        You won!
      </motion.p>
      <motion.blockquote
        className="px-5 italic text-gray-700 dark:text-gray-300 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        "{quotes[randomQuote].quote}"
        <footer className="mt-2 text-sm text-gray-500 dark:text-gray-400 not-italic">
          - {quotes[randomQuote].author}
        </footer>
      </motion.blockquote>
      <motion.button
        className="px-6 py-3 bg-wise-primary text-white rounded-full font-semibold shadow-lg hover:bg-wise-primary/90 transition-colors duration-300"
        onClick={playAgain}
        type="button"
        title="Play Again"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Play Again
      </motion.button>
    </motion.div>
  );
}

