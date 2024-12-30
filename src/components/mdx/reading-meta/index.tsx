"use client";

import React from "react";
import { format } from "date-fns";
import MochiComputer from "/public/vectors/mochi-computer.svg";
import Image from "next/image";
import "./styles.css";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface ReadingMetaProps {
  writerName?: string;
  writerImg?: string;
  published: string;
  readingTime: number;
  type: "page" | "card";
}

const ReadingMeta: React.FC<ReadingMetaProps> = ({
  writerName,
  published,
  writerImg,
  readingTime,
  type,
}) => {
  const t = useTranslations("blog");

  const author = writerName || t("air360-team");

  return (
    <div className="inline-flex items-center mr-3 text-sm text-black-600">
      {!writerImg ? (
        <MochiComputer
          className={cn(
            "mr-4  mochi-computer",
            type === "card" ? "w-10 h-10" : "w-16 h-16"
          )}
        />
      ) : (
        <Image
          src={writerImg}
          alt={author}
          className="mr-4 w-16 h-16"
          width={800}
          height={400}
        />
      )}
      <div>
        <div
          className={cn(
            "text-black-600",
            type === "page" ? "text-xl font-bold" : ""
          )}
        >
          {author}
        </div>
        <p
          className={cn(
            " text-gray-500 dark:text-gray-400",
            type === "card" ? "text-sm font-normal" : "text-base font-light"
          )}
        >
          <time>{format(new Date(published), "yyyy-MM-dd")}</time>{" "}
          {type === "card" && <>· {readingTime} min</>}
        </p>
      </div>
    </div>
  );
};

export default ReadingMeta;
