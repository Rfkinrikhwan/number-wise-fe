import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardDeck from "@/components/custom/CardDeck";
import Keyboard from "@/components/custom/Keyboard";
import useGetUnoDeck from "@/hooks/useGetUnoDeck";
import useGetUnoSolution from "@/hooks/useGetUnoSolution";
import Timer from "@/components/custom/Timer";
import Winning from "@/components/custom/Winning";
import Losing from "@/components/custom/Losing";
import Loading from "@/components/custom/Loading";
import { useParams } from "react-router-dom";
import clickSound from "@/assets/audio/punchy-taps-ui-2.mp3";
import { changeThemeStore } from "@/store";
import WiseIcon from "@/components/icon";

export default function Play() {
  const { theme } = changeThemeStore();
  const [answer, setAnswer] = useState<string[]>([]);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (notification !== "") {
      timeoutId = setTimeout(() => {
        setNotification("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [notification]);

  const { cardNumber } = useParams();

  const {
    data: deckData,
    isLoading: deckLoading,
    isSuccess: deckSuccess,
    refetch: refetchDeck,
  } = useGetUnoDeck({
    cardNumber: Number(cardNumber === "4" ? "4" : cardNumber === "6" ? "6" : "4"),
  });

  const { data: solution, isLoading: solutionLoading } = useGetUnoSolution({
    cards: deckData || [],
  });

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.2;
    audio.play();
  };

  const [solutionIsFound, setSolutionIsFound] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (solution?.solution && !solutionIsFound) {
        setSolutionIsFound(true);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [solution, solutionIsFound]);

  useEffect(() => {
    if (deckData) {
      setAnswer([]);
    }
  }, [deckData]);

  useEffect(() => {
    if (solution) {
      if (solution.solution === true) {
        return;
      } else {
        refetchDeck();
      }
    }
  }, [solution]);

  const handleGiveUp = () => {
    setGameState("lost");
  };

  const playAgain = () => {
    setGameState("playing");
    refetchDeck();
    setSolutionIsFound(false);
  };

  const reshuffleDeck = () => {
    playClickSound();
    refetchDeck();
    setSolutionIsFound(false);
  };

  const handleSubmitAnswer = () => {
    playClickSound();

    const numCount = answer.filter((num) => !isNaN(parseFloat(num))).length;
    if (numCount !== deckData?.length) {
      setNotification("Pick all cards");
      return;
    }

    const answerString = answer.join("");

    try {
      const sanitizedExpression = answerString.replace(/[^-()\d/*+.]/g, "");
      const result = eval(sanitizedExpression);

      if (result === 24) {
        setGameState("won");
      } else {
        setNotification("Your solution is not correct");
      }
    } catch (error) {
      setNotification("Invalid expression");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (solutionLoading || deckLoading || !solutionIsFound) {
    return (
      <section className={`min-h-screen flex flex-col items-center justify-center p-4 ${theme === 'dark' ? 'bg-wise-dark' : 'bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900'} relative`}>
        <Loading />
      </section>
    );
  }

  if (gameState === "won") {
    return (
      <section className={`min-h-screen flex flex-col items-center justify-center p-4 ${theme === 'dark' ? 'bg-wise-dark' : 'bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900'} relative`}>
        <Winning playAgain={playAgain} />
      </section>
    );
  }

  if (gameState === "lost") {
    return (
      <section className={`min-h-screen flex flex-col items-center justify-center p-4 ${theme === 'dark' ? 'bg-wise-dark' : 'bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900 dark:to-orange-900'} relative`}>
        <Losing playAgain={playAgain} solution={solution?.equation || "No solution found"} />
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen flex flex-col items-center justify-center py-10 bg-gradient-to-br ${theme === 'dark' ? 'bg-wise-dark' : 'from-blue-50 to-purple-50'} relative`}
    >
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md">
        <Timer initialTime={3} onTimerEnd={handleGiveUp} />
        <motion.button
          onClick={reshuffleDeck}
          type="button"
          title="reshuffle"
          className="absolute top-1 right-5 flex items-center justify-center p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <WiseIcon iconName="HiOutlineRefresh" size={24} />
        </motion.button>
        <AnimatePresence>
          {deckSuccess && deckData && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="my-8"
            >
              <CardDeck input={answer} setInput={setAnswer} cards={deckData} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md"
        >
          <hgroup className="py-4 space-y-2 text-center">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Your solution</p>
            <AnimatePresence>
              {!notification && (
                <motion.h3
                  key="answer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-h-[30px] text-2xl font-bold text-blue-600 dark:text-blue-400"
                >
                  {answer.length > 0 ? answer.join(" ") : "_"}
                </motion.h3>
              )}
              {notification && (
                <motion.p
                  key="notification"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="py-2 px-4 mx-5 text-sm text-center text-white bg-red-500 rounded-lg shadow-md"
                >
                  {notification}
                </motion.p>
              )}
            </AnimatePresence>
          </hgroup>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Keyboard
              input={answer}
              setInput={setAnswer}
              onGiveUp={handleGiveUp}
              onSubmit={handleSubmitAnswer}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

