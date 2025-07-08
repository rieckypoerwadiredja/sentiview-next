import React from "react";

interface DescPageProps {
  text: string;
}

const DescPage: React.FC<DescPageProps> = ({ text }) => {
  return <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">{text}</p>;
};

export default DescPage;
