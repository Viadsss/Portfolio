import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { RefreshCw } from "lucide-react";

interface Card {
  id: number;
  url: string;
}

const cardData: Card[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const cardSize = {
  width: 175,
  height: 233,
};

export function SwipeCards() {
  const [cards, setCards] = useState(cardData);

  const handleReset = () => {
    setCards(cardData);
  };

  return (
    <div className="relative grid h-56 w-44 place-items-center md:mr-8">
      {cards.length === 0 ? (
        <Button size="sm" variant="outline" onClick={handleReset}>
          <RefreshCw />
          Again
        </Button>
      ) : (
        cards.map((card) => <Card key={card.id} id={card.id} url={card.url} cards={cards} setCards={setCards} />)
      )}
    </div>
  );
}

interface CardProps {
  id: number;
  url: string;
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

function Card({ id, url, setCards, cards }: CardProps) {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.img
      src={url}
      alt="Card image"
      className="absolute h-56 w-44 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)" : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    />
  );
}
