import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardDeckType } from "@/types/cardDeck";
import cardFlip from "@/assets/audio/paper-collect.mp3";
import cardBack from "@/assets/uno-cards/Deck.png";

export default function CardDeck({
  cards,
  input,
  setInput,
}: {
  cards: CardDeckType[];
  input: string[];
  setInput: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [selectedCardIds, setSelectedCardIds] = useState<string[]>([]);

  const playCardFlipSound = () => {
    const audio = new Audio(cardFlip);
    audio.volume = 0.2;
    audio.play();
  };

  const handleInput = (value: number, id: string) => {
    if (selectedCardIds.includes(id)) return;

    if (
      input.length > 0 &&
      !isNaN(Number(input[input.length - 1])) &&
      !isNaN(value)
    )
      return;

    playCardFlipSound();
    setInput([...input, value.toString()]);
    setSelectedCardIds([...selectedCardIds, id]);
  };

  useEffect(() => {
    const filteredInput = input.filter((item) => !isNaN(Number(item)));
    if (selectedCardIds.length !== filteredInput.length) {
      setSelectedCardIds(selectedCardIds.slice(0, -1));
    }
  }, [selectedCardIds, input]);

  useEffect(() => {
    if (input.length === 0) setSelectedCardIds([]);
  }, [input]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`grid card-to-choose grid-cols-${Math.ceil(
        cards.length / 2
      )} gap-2 mx-auto md:gap-3 w-fit`}
    >
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className="relative"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: selectedCardIds.includes(card.id) ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence initial={false} mode="wait">
            {!selectedCardIds.includes(card.id) ? (
              <motion.img
                key="front"
                src={`/src${card.image}`}
                alt={`${card.color} ${card.value}`}
                className="2xl:w-[128px] shadow-lg 2xl:h-[178px] md:w-[100px] md:h-[140px] w-[80px] h-[120px] rounded-lg overflow-visible cursor-pointer"
                onClick={() => handleInput(card.value, card.id)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                loading="lazy"
              />
            ) : (
              <motion.img
                key="back"
                src={cardBack}
                alt={`${card.color} ${card.value} back`}
                className="2xl:w-[128px] shadow-lg 2xl:h-[178px] md:w-[100px] md:h-[140px] w-[80px] h-[120px] rounded-lg overflow-visible card-icon"
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ opacity: 1, rotateY: 180 }}
                exit={{ opacity: 0, rotateY: 180 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}