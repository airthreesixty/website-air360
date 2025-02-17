import React, { ReactNode } from "react";
import "./styles.css";
import { cn } from "@/lib/utils";
import ExportedImage from "next-image-export-optimizer";

interface ButtonComponentProps {
  children: ReactNode;
  lg?: boolean;
  icon?: boolean;
}

export default function ButtonCta({
  children,
  lg,
  icon,
}: ButtonComponentProps) {
  return (
    <div
      className={cn(
        "relative z-1 mx-auto",
        lg ? "h-14 px-8" : "h-12 px-6",
        icon && "mt-12"
      )}
    >
      {icon && (
        <ExportedImage
          className="absolute -top-[46px] left-1/2 -translate-x-1/2 z-10"
          src="/favicon2.webp"
          alt="mochi"
          width={80}
          height={80}
          placeholder="empty"
        />
      )}
      <span className="bg-button bg-button1"></span>
      <span className="bg-button bg-button2"></span>
      <span className="bg-button bg-button3"></span>
      <div className="button transition ease-in-out duration-300 hover:opacity-80 z-1 relative">
        <div
          className={cn(
            "text-white font-bold flex justify-center items-center",
            lg ? "text-lg h-14" : "text-base h-12"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
