import React from "react";
import { PropsWithChildren } from "react";
import Title from "./title";
import Description from "./description";
import Icon from "@/components/common/icons";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { cn } from "@/lib/utils";

interface BlockProps extends PropsWithChildren {
  icon: IconName;
  title: string;
  color?: string;
}

interface Props extends PropsWithChildren {
  title?: string;
  dense?: boolean;
}

interface IconWithBgProps {
  icon: IconName;
  color?: string;
}

const GalleryBlocks: React.FC<Props> = ({ children, title, dense }) => {
  const blocks: React.ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    const { displayName } = child.type as { displayName?: string };

    if (displayName === "Block") {
      React.Children.forEach(child, (box) => {
        blocks.push(box);
      });
    }
  });

  return (
    <section>
      <div className="container py-8 sm:py-16 mb-10">
        {title && (
          <Title as="h2" className="mb-4 title2 text-center">
            {title}
          </Title>
        )}
        <div
          className={cn(
            "mt-12 lg:mt-12 space-y-8 md:gap-9 lg:gap-15",
            dense && "md:columns-2",
            !dense && "md:grid md:grid-cols-2"
          )}
        >
          {blocks}
        </div>
      </div>
    </section>
  );
};

const Block = ({ children, icon, title, color }: BlockProps) => {
  const description = children;

  return (
    <div className="flex flex-col items-start break-inside-avoid">
      {icon && <IconWithBg icon={icon} color={color} />}
      {title && (
        <Title
          as="h3"
          className={"mb-2 text-xl md:text-2xl font-bold text-black-600"}
        >
          {title}
        </Title>
      )}

      {description && (
        <Description className="mt-0 mb-4 textp">{description}</Description>
      )}
    </div>
  );
};

Block.displayName = "Block";

const IconWithBg = ({ icon, color }: IconWithBgProps) => {
  const textColor = () => {
    switch (color) {
      case "purple":
        return "text-purple-600";
      case "orange":
        return "text-orange-600";
      default:
        return "text-primary-600";
    }
  };
  const bgColor = () => {
    switch (color) {
      case "purple":
        return "bg-purple-100";
      case "orange":
        return "bg-orange-100";
      default:
        return "bg-primary-100";
    }
  };
  return (
    <div
      className={cn(
        "w-15 h-15 flex justify-center items-center rounded-xl mb-2 bg-purple-100",
        bgColor()
      )}
    >
      <Icon name={icon} className={cn("fa-2x", textColor())} />
    </div>
  );
};

IconWithBg.displayName = "IconWithBg";

export { Block, GalleryBlocks, IconWithBg };
