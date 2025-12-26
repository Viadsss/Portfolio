import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import CardImg1 from "@/assets/images/img-test-1.jpg";
import CardImg2 from "@/assets/images/img-test-2.jpg";

interface Card {
  id: number;
  url: string;
}

const cardData: Card[] = [
  {
    id: 1,
    url: CardImg1,
  },
  {
    id: 2,
    url: CardImg2,
  },
];

const cardSize = "h-52 w-40";

export function SwipeCards() {
  const [cards, setCards] = useState(cardData);

  const handleReset = () => {
    setCards(cardData);
  };

  return (
    <div className={cn("relative grid h-56 w-44 place-items-center md:mr-8", cardSize)}>
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
      className={cn(
        "absolute origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing",
        cardSize
      )}
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
