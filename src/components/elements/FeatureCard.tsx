import React, { ReactNode } from "react";

// Define the props type
interface FeatureCardProps {
  icon?: ReactNode; // JSX content for the icon
  title: string;
  description: string;
  iconBg?: string; // background class like "bg-red-500"
  classCard?: string; // optional extra classes for the card
  dark?: boolean; // default: false
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconBg,
  classCard,
  dark = false,
}) => {
  return (
    <div className={`${classCard || ""} p-6 rounded-lg`}>
      {icon && iconBg && (
        <div
          className={`h-10 w-10 ${iconBg} rounded-md flex items-center justify-center mb-4`}
        >
          {icon}
        </div>
      )}

      <h3
        className={`text-lg text-left font-semibold text-[#030521] ${
          dark ? "text-white" : ""
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-2 text-left ${
          dark ? "text-[#a2a1b7]" : "text-[#a2a1b7]"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
