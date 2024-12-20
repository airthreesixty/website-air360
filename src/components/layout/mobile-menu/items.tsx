import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Link, Pathnames } from "@/i18n/routing";
import { SheetTrigger } from "@/components/ui/sheet";

interface ItemsProps {
  slug: Pathnames;
  icon: IconName;
  text: string;
  textColor?: string;
  hoverColor?: string;
  bgColor?: string;
  className?: string;
}

const Items: React.FC<ItemsProps> = ({
  slug,
  icon,
  text,
  className,
  textColor = "text-primary-600",
  hoverColor = "hover:bg-gray-75",
  // bgColor = "bg-gray-75",
}) => {
  return (
    <li className={`group flex items-center justify-start ${className}`}>
      <SheetTrigger asChild>
        <Link
          href={slug}
          className={`flex items-center w-full py-2 mb-1 rounded-xl  ${hoverColor}`}
        >
          <div
            className={`w-9 h-9 mr-2 rounded-lg flex justify-center items-center`}
          >
            <FontAwesomeIcon
              className={`fa-lg w-6 ${textColor}`}
              icon={["far", icon]}
            />
          </div>
          <span className="text-sm font-semibold text-black-600">{text}</span>
        </Link>
      </SheetTrigger>
    </li>
  );
};

export default Items;
