"use client";

import { cn } from "@/lib/utils";
import { IconName } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface Props {
  items: {
    title: string;
    description: string;
    img?: string;
    icon?: string;
    bg: string;
    color: string;
  }[];
}

const ColoredCards = ({ items }: Props) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "relative overflow-hidden text-left rounded-lg",
            item.bg
          )}
        >
          {item.icon && (
            <FontAwesomeIcon
              className={cn("fa-2x pt-6 pl-6", item.color)}
              icon={["far", item.icon as IconName]}
            />
          )}
          <div className="w-full h-full flex flex-col">
            <div className="p-6 grow">
              <h3 className="title3 mb-2 font-bold">{item.title}</h3>
              <p className="textp mb-8">{item.description}</p>
            </div>
            {item.img && (
              <div className="relative h-full aspect-video rounded-lg flex-1">
                <Image
                  alt=""
                  src={item.img}
                  fill
                  className="object-cover rounded-tl-lg ml-6 shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ColoredCards;
