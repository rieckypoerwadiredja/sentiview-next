import FeatureCard from "./FeatureCard";

// Define the type for each card item
interface FeatureCardItem {
  title: string;
  description: string;
  classCard?: string;
  dark?: boolean;
}

// Define props for FeatureCardGrid
interface FeatureCardGridProps {
  cards: FeatureCardItem[];
  gridCols: string; // e.g., "grid-cols-2", "md:grid-cols-3"
}

const FeatureCardGrid: React.FC<FeatureCardGridProps> = ({
  cards,
  gridCols,
}) => {
  return (
    <div
      className={`mt-12 grid ${gridCols} gap-8 items-center justify-items-center`}
    >
      {cards.map(({ title, description, classCard, dark }, index) => (
        <FeatureCard
          key={index}
          title={title}
          description={description}
          classCard={classCard}
          dark={dark}
        />
      ))}
    </div>
  );
};

export default FeatureCardGrid;
