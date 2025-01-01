import { useEffect } from "react";
import { motion } from "framer-motion";
import CardIcon from "@/assets/uno-cards/Deck.png";
import cleaningSound from "@/assets/audio/book-foley-finger-slide-2.mp3";

export default function Loading() {
  useEffect(() => {
    const playCleanSound = () => {
      const audio = new Audio(cleaningSound);
      audio.volume = 0.2;
      audio.play();
    };

    playCleanSound();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <motion.img
        src={CardIcon}
        alt="icon"
        className="w-28"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.p
        className="mt-4 text-2xl font-bold text-blue-600 dark:text-blue-400"
        animate={{
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Shuffling...
      </motion.p>
    </div>
  );
}

