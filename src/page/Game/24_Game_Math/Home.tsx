import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CardIcon from "@/assets/uno-cards/Deck.png";
import clickSound from "@/assets/audio/punchy-taps-ui-2.mp3";
import { changeThemeStore } from "@/store";

const HomeGame24 = () => {
  const { theme } = changeThemeStore();
  const [selectedMode, setSelectedMode] = useState("4");
  const [isHovering, setIsHovering] = useState(false);

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.2;
    audio.play();
  };

  const handleSelectMode = (mode: string) => {
    setSelectedMode(mode);
    playClickSound();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={`min-h-screen py-10 ${theme === "dark" ? "bg-wise-dark" : "bg-gradient-to-br from-blue-50 to-purple-50"} relative overflow-hidden`}>
      {/* Animated background grid */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px]" />

      <motion.div
        className="max-w-md mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Card Icon */}
          <motion.div
            variants={cardHoverVariants}
            whileHover="hover"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <motion.img
              src={CardIcon}
              alt="Card Icon"
              className="h-44 w-44 object-contain filter drop-shadow-xl"
              animate={isHovering ? { y: [-2, 2, -2] } : {}}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          </motion.div>

          {/* Game Mode Selection */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-xs bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-2 shadow-lg"
          >
            <div className="grid grid-cols-2 gap-2">
              {["4", "6"].map((mode) => (
                <motion.button
                  key={mode}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelectMode(mode)}
                  className={`py-3 px-6 rounded-lg font-medium transition-colors ${selectedMode === mode
                    ? "bg-indigo-600 text-white dark:bg-indigo-500"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                    }`}
                >
                  {mode} Card
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="space-y-4 w-full max-w-xs z-10">
            <Link
              onClick={playClickSound}
              to={`play/${selectedMode}`}
              className="block"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-lg font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                Play
              </motion.button>
            </Link>

            <Link
              onClick={playClickSound}
              to="how-to-play"
              className="block"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                How to Play
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeGame24;