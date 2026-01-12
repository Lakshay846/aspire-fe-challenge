import { useState, useEffect } from "react";
import CardPreview from "./CardsPreview";
import { CARDS_STORAGE_KEY } from "../../constants/storage";
import AddCardModal from "./Modal/AddNewCard";

type Card = {
  id: string;
  holderName: string;
  number: string[];
  expiry: string;
  cvv: string;
};

export default function CardCarousel({
  isAddCardOpen,
  onCloseAddCard,
}: {
  isAddCardOpen: boolean;
  onCloseAddCard: () => void;
}) {
  const [cards, setCards] = useState<Card[]>(() => {
    const storedCards = localStorage.getItem(CARDS_STORAGE_KEY);
    return storedCards ? JSON.parse(storedCards) : [];
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [showCardDetails, setShowCardDetails] = useState(false);

  const getCardsJsonPath = () => {
    const basePath = window.location.pathname.replace(/\/$/, "");
    return `${basePath}/mocks/cards.json`;
  };

  useEffect(() => {
    if (cards.length === 0) {
      const path = getCardsJsonPath();
      fetch(path)
        .then((res) => res.json())
        .then((data: Card[]) => {
          setCards(data);
          localStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data));
        })
        .catch(() => {
          setCards([]);
        });
    }
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(cards));
    }
  }, [cards]);

  if (!cards.length) return null;

  const activeCard = cards[activeIndex];
  

  const addCard = (newCard: Card) => {
    setCards((prev) => {
      const updated = [...prev, newCard];
      localStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });

    setActiveIndex(cards.length);
    setShowCardDetails(false);
  };
  

  return (
    <div>
      <CardPreview
        showCardDetails={showCardDetails}
        card={activeCard}
        onToggleDetails={() => setShowCardDetails((prev) => !prev)}
      />

      <div className="mt-4 flex justify-center gap-2">
        {cards.map((_, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={index}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setShowCardDetails(false);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive ? "w-6 bg-[#01D167]" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          );
        })}
      </div>
      <AddCardModal
        isOpen={isAddCardOpen}
        onClose={onCloseAddCard}
        onSubmit={addCard}
      />
    </div>
  );
}
