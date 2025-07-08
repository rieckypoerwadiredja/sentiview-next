"use client";

import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Oday Mashalla",
    role: "Digital Marketer @ KopiKampus",
    text: "Scraping reviews with Sentiview feels like having your own research team. No more manually checking sites one by one!",
    img: "/profile/Oday-Mashalla.png",
  },
  {
    name: "Laura Ang",
    role: "Founder @ Skinca.id",
    text: "Getting review data directly from e-commerce and analyzing it automatically? I didn’t expect it to be this fast!",
    img: "/profile/Laura-Ang.png",
  },
  {
    name: "Upen V.",
    role: "UI Designer @ Freelance",
    text: "Sentiview helped me gather product insights from customer comments and testimonials. Super useful for UX research!",
    img: "/profile/Upen-V.png",
  },
];

const Testimoni: React.FC = () => {
  return (
    <section className="py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-gray-700">{item.text}</p>
              <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
