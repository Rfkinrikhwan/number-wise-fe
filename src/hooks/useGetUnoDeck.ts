import { useState, useEffect, useCallback } from "react";
import { CardDeckType } from "../types/cardDeck";

// Custom hooks untuk permainan 24 menggunakan kartu Uno
const useGetUnoDeck = ({ cardNumber }: { cardNumber: number }) => {
  const [data, setData] = useState<CardDeckType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Kartu Uno yang tersedia (bisa disesuaikan jika perlu)
  const unoCards = [
    { color: "Red", value: 0 },
    { color: "Red", value: 1 },
    { color: "Red", value: 2 },
    { color: "Red", value: 3 },
    { color: "Red", value: 4 },
    { color: "Red", value: 5 },
    { color: "Red", value: 6 },
    { color: "Red", value: 7 },
    { color: "Red", value: 8 },
    { color: "Red", value: 9 },
    { color: "Blue", value: 0 },
    { color: "Blue", value: 1 },
    { color: "Blue", value: 2 },
    { color: "Blue", value: 3 },
    { color: "Blue", value: 4 },
    { color: "Blue", value: 5 },
    { color: "Blue", value: 6 },
    { color: "Blue", value: 7 },
    { color: "Blue", value: 8 },
    { color: "Blue", value: 9 },
    { color: "Yellow", value: 0 },
    { color: "Yellow", value: 1 },
    { color: "Yellow", value: 2 },
    { color: "Yellow", value: 3 },
    { color: "Yellow", value: 4 },
    { color: "Yellow", value: 5 },
    { color: "Yellow", value: 6 },
    { color: "Yellow", value: 7 },
    { color: "Yellow", value: 8 },
    { color: "Yellow", value: 9 },
    { color: "Green", value: 0 },
    { color: "Green", value: 1 },
    { color: "Green", value: 2 },
    { color: "Green", value: 3 },
    { color: "Green", value: 4 },
    { color: "Green", value: 5 },
    { color: "Green", value: 6 },
    { color: "Green", value: 7 },
    { color: "Green", value: 8 },
    { color: "Green", value: 9 },
  ];

  const fetchDeck = useCallback(() => {
    setIsLoading(true);
    try {
      // Acak kartu Uno
      const shuffledCards = unoCards
        .sort(() => Math.random() - 0.5)
        .slice(0, cardNumber);

      // Map ke bentuk data yang diinginkan
      const selectedCards = shuffledCards.map((card) => ({
        id: `${card.color}-${card.value}`,
        value: card.value,
        color: card.color,
        image: `/uno-cards/${card.color}_${card.value}.png`, // Asumsikan ini path gambar
      }));

      setData(selectedCards);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error fetching Uno deck:", error);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }, [cardNumber]);

  useEffect(() => {
    if (cardNumber !== null) {
      fetchDeck();
    }
  }, [cardNumber, fetchDeck]);

  const refetch = () => {
    fetchDeck();
  };

  return { data, isLoading, isSuccess, refetch };
};

export default useGetUnoDeck;