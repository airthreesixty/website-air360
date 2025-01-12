import React from "react";
import "./styles.css";

interface ShoaCaseLogosProps {
  children: React.ReactNode;
}

const ShowcaseLogos = ({ children }: ShoaCaseLogosProps) => {
  return (
    <div className="mb-5 mt-10 md:mt-5 flex items-center justify-center gap-x-10">
      <div className="flex flex-col md:flex-row md:gap-x-8 gap-y-10 items-center justify-center company-logos">
        {children}
      </div>
    </div>
  );
};

export default ShowcaseLogos;
