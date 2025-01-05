import { useState } from "react";
import { motion } from "framer-motion";
import clickSound from "@/assets/audio/punchy-taps-ui-2.mp3";
import ConfirmationModal from "./ConfirmationModal";

export default function Keyboard({
  input,
  setInput,
  onSubmit,
  onGiveUp,
}: {
  input: string[];
  setInput: React.Dispatch<React.SetStateAction<string[]>>;
  onSubmit: () => void;
  onGiveUp: () => void;
}) {
  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.2;
    audio.play();
  };

  const handleInputOperator = (value: string) => {
    const operator = ["+", "-", "*", "/"];

    playClickSound();

    if (
      input.length > 0 &&
      operator.includes(input[input.length - 1]) &&
      operator.includes(value)
    )
      return;

    if (input.length === 0 && value !== "(") return;
    else {
      setInput([...input, value]);
    }

    if (input.length > 0 && value === ")" && input[input.length - 1] !== "(")
      return;
    else {
      setInput([...input, value]);
    }
  };

  const handleDelete = () => {
    playClickSound();

    if (input.length === 0) return;
    setInput(input.slice(0, -1));
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleConfirm = () => {
    setModalOpen(true);
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full max-w-md mx-auto gap-3"
    >
      <div className="grid grid-cols-4 gap-2 px-5">
        {[
          { symbol: "x", value: "*", title: "Multiply" },
          { symbol: "÷", value: "/", title: "Divide" },
          { symbol: "+", value: "+", title: "Add" },
          { symbol: "-", value: "-", title: "Subtract" },
          { symbol: "(", value: "(", title: "Open parenthesis" },
          { symbol: ")", value: ")", title: "Close parenthesis" },
        ].map((item) => (
          <motion.button
            key={item.symbol}
            className="keyboard bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-lg p-4 text-2xl font-bold shadow-md hover:shadow-lg transition-shadow"
            onClick={() => handleInputOperator(item.value)}
            type="button"
            title={item.title}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {item.symbol}
          </motion.button>
        ))}
        <motion.button
          className="col-span-2 bg-green-500 hover:bg-green-600 text-white rounded-lg p-4 text-xl font-bold shadow-md hover:shadow-lg transition-all"
          onClick={onSubmit}
          type="button"
          title="Submit"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Submit
        </motion.button>
      </div>

      <div className="grid grid-cols-5 gap-2 px-5">
        <motion.button
          className="col-span-4 bg-red-500 hover:bg-red-600 text-white rounded-lg p-4 text-xl font-bold shadow-md hover:shadow-lg transition-all"
          onClick={handleConfirm}
          type="button"
          title="Give up"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Give up
        </motion.button>
        <motion.button
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg p-4 text-xl font-bold shadow-md hover:shadow-lg transition-all"
          onClick={handleDelete}
          type="button"
          title="Delete"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Del
        </motion.button>
      </div>

      <ConfirmationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={onGiveUp}
        title="Confirmation"
      >
        <p className="font-medium text-lg mb-2">Are you sure you want to give up?</p>
        <p className="text-gray-600 dark:text-gray-300">
          Sometimes it's okay to give up, look the other way and find another path.
        </p>
      </ConfirmationModal>
    </motion.div>
  );
}

