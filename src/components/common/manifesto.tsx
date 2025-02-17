"use client";

import React from "react";
import enContent from "/src/content/en/manifesto/content.mdx";
import jaContent from "/src/content/ja/manifesto/content.mdx";
import frContent from "/src/content/fr/manifesto/content.mdx";
import { usePathname } from "next/navigation";

const contentMap: Record<string, React.ComponentType> = {
  en: enContent,
  ja: jaContent,
  fr: frContent,
};

const Manifesto = () => {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  const Content = contentMap[lang] || contentMap["en"];

  if (!Content) {
    return null;
  }
  return (
    <div className="flex justify-center items-center min-h-[70vh] md:p-6">
      {/* 重なっている効果 */}
      <div className="relative">
        {/* 背面の紙 */}
        <div className="absolute inset-0 bg-[#fbf7e5] rounded-lg transform rotate-1 translate-y-2 translate-x-2 shadow-md"></div>
        <div className="absolute inset-0 bg-[#f7f3da] rounded-lg transform -rotate-1 translate-y-4 translate-x-4 shadow-sm"></div>
        {/* メインの紙 */}
        <div className="bg-[#fffef0] rounded-lg p-7 sm:p-10 max-w-3xl shadow-lg relative overflow-hidden">
          {/* 折り目のデザイン */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#f2e8c9] rounded-bl-lg transform -translate-y-10 translate-x-10 rotate-45 shadow-md"></div>
          <div className="prose">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;
