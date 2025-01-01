import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { changeThemeStore } from "@/store";
import blue0 from "@/assets/uno-cards/Blue_0.png";
import blue1 from "@/assets/uno-cards/Blue_1.png";
import blue2 from "@/assets/uno-cards/Blue_2.png";
import blue3 from "@/assets/uno-cards/Blue_3.png";
import cardBack from "@/assets/uno-cards/Deck.png";

export default function HowToPlay() {
  const { theme } = changeThemeStore();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -10,
      rotate: [-1, 1],
      transition: {
        duration: 0.3
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      <section className={`${theme === "dark" ? "text-gray-100 bg-wise-dark" : "text-gray-800"} py-12 min-h-screen`}>
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px]" />

        <motion.div
          className={`max-w-3xl mx-auto px-4`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <motion.h2
              variants={itemVariants}
              className="z-10 text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              How to Play
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mx-auto w-fit"
            >
              {[blue0, blue1, blue2, blue3].map((card, index) => (
                <motion.img
                  key={index}
                  src={card}
                  alt={`Blue ${index}`}
                  className="w-24 aspect-auto hover:shadow-xl transition-shadow rounded-lg z-10"
                  variants={cardVariants}
                  whileHover="hover"
                />
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="font-medium text-center text-lg z-10"
            >
              (Blue 0 + Blue 1) × (Blue 2 - Blue 3) = <strong className="text-indigo-600 dark:text-indigo-400">24</strong>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <p className="leading-relaxed">
                The rules of the game are simple: use mathematical calculations based
                on the value of the cards in your deck to reach the total of 24.
              </p>
              <p className="leading-relaxed">
                You can use simple mathematical operations (×, -, +, ÷), but remember
                to follow the correct order of operations.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* First Card */}
              <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl shadow-md z-10">
                <motion.img
                  src={blue0}
                  alt="Blue 0"
                  className="w-24 mx-auto mb-4"
                  variants={cardVariants}
                  whileHover="hover"
                />
                <p className="text-center text-sm">
                  Number cards (0 to 9) have their respective values.
                </p>
              </div>

              {/* Second Card - Stack */}
              <div className="relative flex flex-col items-center bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl shadow-md">
                <div className="relative h-32 w-full mb-4">
                  <motion.img
                    src={cardBack}
                    alt="card-back"
                    className="absolute left-1/4 transform -rotate-6 w-24"
                    whileHover={{ rotate: -12 }}
                  />
                  <motion.img
                    src={blue1}
                    alt="Blue 1"
                    className="absolute left-1/3 z-20 w-24"
                    whileHover={{ y: -10 }}
                  />
                  <motion.img
                    src={blue2}
                    alt="Blue 2"
                    className="absolute left-[40%] rotate-6 w-24"
                    whileHover={{ rotate: 12 }}
                  />
                </div>
                <p className="text-center text-sm">
                  Use all cards in your deck to create a valid solution.
                </p>
              </div>

              {/* Third Card */}
              <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl shadow-md z-10">
                <motion.img
                  src={cardBack}
                  alt="card-back"
                  className="w-24 mx-auto mb-4"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.5 }}
                />
                <p className="text-center text-sm">
                  Once flipped, cards cannot be selected again.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center gap-6 bg-white/60 dark:bg-gray-800/60 p-6 rounded-xl shadow-md"
            >
              <div className="flex-1 space-y-4 z-10">
                <p className="leading-relaxed">
                  Once a card has been chosen, it will be flipped, and you won't be
                  able to select the same card again.
                </p>
                <p className="leading-relaxed">
                  To submit your solution, you must use all the cards in your deck.
                </p>
              </div>
              <motion.img
                src={cardBack}
                alt="card-back"
                className="w-24 aspect-auto z-10"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-10"
          >
            <Link to="/game/24-uno-math" className="z-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                I'm Ready to Play
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}