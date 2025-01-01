import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardIcon from "@/assets/uno-cards/Deck.png";
import loseSound from "@/assets/audio/violin-lose-1.mp3";

const quotes = [
  {
    quote: "Failure is simply the opportunity to begin again, this time more intelligently.",
    author: "Henry Ford",
  },
  {
    quote: "The only real mistake is the one from which we learn nothing.",
    author: "Henry Ford",
  },
  {
    quote: "Don't let what you cannot do interfere with what you can do.",
    author: "John Wooden",
  },
  {
    quote: "Success is stumbling from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
];

export default function Losing({
  solution,
  playAgain,
}: {
  solution?: string;
  playAgain: () => void;
}) {
  const [randomQuote, setRandomQuote] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    const playLoseSound = () => {
      const audio = new Audio(loseSound);
      audio.volume = 0.1;
      audio.play();
    };

    playLoseSound();
    setRandomQuote(Math.floor(Math.random() * quotes.length));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-6 text-center max-w-md mx-auto"
    >
      <motion.img
        src={CardIcon}
        alt="Card Icon"
        className="w-32 card-icon"
        animate={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.h3
        className="text-3xl font-bold text-red-600 dark:text-red-400"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        You lost!
      </motion.h3>
      {solution && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="text-blue-600 dark:text-blue-400 underline focus:outline-none"
          >
            {showSolution ? "Hide solution" : "Show solution"}
          </button>
          <AnimatePresence>
            {showSolution && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-lg font-medium"
              >
                The solution is <strong>{solution} = 24</strong>
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}
      <motion.blockquote
        className="px-5 italic text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        "{quotes[randomQuote].quote}"
        <footer className="mt-2 text-sm text-gray-500 dark:text-gray-400 not-italic">
          - {quotes[randomQuote].author}
        </footer>
      </motion.blockquote>
      <motion.button
        className="px-6 py-3 bg-wise-primary text-white rounded-full font-semibold shadow-lg hover:bg-wise-primary transition-colors duration-300"
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

