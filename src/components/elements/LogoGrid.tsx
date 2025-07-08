import Image from "next/image";
import React from "react";

interface LogoItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface LogoGridProps {
  logos: LogoItem[];
  gridCols: string; // contoh: "grid-cols-2 md:grid-cols-4"
  hoverEffect?: boolean;
}

const LogoGrid: React.FC<LogoGridProps> = ({
  logos,
  gridCols,
  hoverEffect = false,
}) => {
  return (
    <div
      className={`mt-12 grid ${gridCols} gap-8 items-center justify-items-center`}
    >
      {logos.map((logo, index) => (
        <div
          key={index}
          className={
            hoverEffect
              ? "grayscale hover:grayscale-0 transition-all"
              : undefined
          }
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
