"use client";
import React, { useState } from "react";
import Image from "next/image";
import ToggleNumber from "./toggle-number";
import { useTranslations } from "next-intl";

const Air360InAction = () => {
  const t = useTranslations("home");

  const [number, setNumber] = useState(1);

  const toggleNumber = (id: number) => {
    setNumber(id);
  };

  const items = [
    {
      id: 1,
      title: t("parallaxCard.slide-1.title"),
      description: t("parallaxCard.slide-1.subtitle"),
      imgUrl: "/card.png",
      lightColor: "bg-primary-100",
      color: "text-primary-600",
      bgColor: "bg-primary-600",
    },
    {
      id: 2,
      title: t("parallaxCard.slide-2.title"),
      description: t("parallaxCard.slide-2.subtitle"),
      imgUrl: "/getStarted.webp",
      lightColor: "bg-orange-100",
      color: "text-orange-600",
      bgColor: "bg-orange-600",
    },
    {
      id: 3,
      title: t("parallaxCard.slide-3.title"),
      description: t("parallaxCard.slide-3.subtitle"),
      imgUrl: "/card.png",
      lightColor: "bg-blue-100",
      color: "text-blue-600",
      bgColor: "bg-blue-600",
    },
  ];

  const selectedItem = items.find((item) => item.id === number);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="title2 text-black-600 font-really font-black mb-8">
        Air360 in action
      </h2>
      <div className="w-full rounded-5xl border border-gray-100 shadow-2xl shadow-gray-600/10">
        <div
          className={`rounded-t-2xl h-70 flex justify-center items-center ${selectedItem?.bgColor}`}
        >
          {selectedItem?.imgUrl && (
            <Image
              key={selectedItem.id}
              src={selectedItem.imgUrl}
              alt={selectedItem.title}
              className="transform w-75 mx-auto transition"
              width={300}
              height={200}
            />
          )}
        </div>
        <div
          className={`flex flex-col text-black-600 text-center rounded-b-4xl px-4 h-74 ${selectedItem?.lightColor}`}
        >
          <div className="px-4 font-really">
            <h3
              className={`font-bold text-2xl pt-10 pb-2 sm:text-3xl ${selectedItem?.color}`}
            >
              {selectedItem?.title}
            </h3>
            <p className="text-black-600 sm:text-lg">
              {selectedItem?.description}
            </p>
          </div>
          <div className="flex space-x-10 mx-auto py-6 mt-auto">
            {[1, 2, 3].map((num) => (
              <ToggleNumber
                key={num}
                number={num}
                color={selectedItem?.color}
                isSelected={number === num}
                onToggleNumber={toggleNumber}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Air360InAction;
