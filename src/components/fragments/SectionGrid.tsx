"use client";

import React from "react";

type SectionGridProps = {
  title: React.ReactNode;
  button?: React.ReactNode;
  Component?: React.ReactNode;
  dark?: boolean;
  addOnBottom?: React.ReactNode;
  titleLeft?: boolean;
};

const SectionGrid: React.FC<SectionGridProps> = ({
  title,
  button,
  Component,
  dark = false,
  addOnBottom,
  titleLeft = false,
}) => {
  return (
    <section
      className={`py-16 px-4 md:px-8 lg:px-16 ${
        dark ? "bg-[#030521] text-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`${
            !titleLeft && "text-center"
          } text-3xl md:text-4xl font-bold leading-tight ${
            dark ? "text-white" : "text-[#030521]"
          }`}
        >
          {title}
        </h2>
        {Component}
        {button && <div className="mt-12">{button}</div>}
      </div>
      {addOnBottom && (
        <div className="mx-auto !w-full mt-16">{addOnBottom}</div>
      )}
    </section>
  );
};

export default SectionGrid;
