import React from "react";
import SupportCard from "./SupportCard";

interface SupportCardItem {
  title: string;
  description: string;
  buttonText: string;
  href?: string; // optional jika kamu ingin SupportCard menerima href
}

interface SupportCardGridProps {
  cards: SupportCardItem[];
  gridCols: string; // e.g. "grid-cols-1 md:grid-cols-3"
}

const SupportCardGrid: React.FC<SupportCardGridProps> = ({
  cards,
  gridCols,
}) => {
  return (
    <div
      className={`mt-12 grid ${gridCols} gap-8 items-center justify-items-center`}
    >
      {cards.map((card, index) => (
        <SupportCard
          key={index}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          href={card.href}
        />
      ))}
    </div>
  );
};

export default SupportCardGrid;
