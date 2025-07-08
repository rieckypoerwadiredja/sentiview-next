import React from "react";

interface TitlePageProps {
  line1: string;
  line2?: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ line1, line2 }) => {
  return (
    <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight text-[#030521]">
      {line1} <br /> {line2}
    </h1>
  );
};

export default TitlePage;
