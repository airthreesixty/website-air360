import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";
// import { useTranslations } from "next-intl";
import ExportedImage from "next-image-export-optimizer";

interface BlockCenterProps extends PropsWithChildren {
  title: string;
  textCenter?: boolean;
  textWide?: boolean;
}

interface BlockHeroProps extends PropsWithChildren {
  title: string;
  subText?: boolean;
}

interface BlockHeroWithImageProps extends PropsWithChildren {
  title: string;
  src: string;
  icon?: string;
}

interface BlockSectionProps extends PropsWithChildren {
  className?: string;
  lp?: boolean;
}

const BlockCenter: React.FC<BlockCenterProps> = ({
  children,
  title,
  textCenter,
  textWide,
}) => {
  return (
    <section className="bg-white container pb-8 sm:pb-16">
      <div className={""}>
        <h2 className="text-center title2 mb-4">{title}</h2>
        <div
          className={cn(
            "prose",
            !textWide && "textp max-w-[850px] mx-auto",
            textCenter && "text-center"
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

BlockCenter.displayName = "BlockCenter";

const BlockHero: React.FC<BlockHeroProps> = ({ children, title, subText }) => {
  return (
    <section className="container pt-10 pb-6 sm:pt-15 lg:py-20">
      <div className={"text-center"}>
        {subText && (
          <span className="text-primary-600 font-really">{subText}</span>
        )}
        <h1 className="font-really title1 mb-4 text-black-600 mt-2 sm:max-w-[85%] sm:mx-auto">
          {title}
        </h1>
        <div className="textp sm:max-w-[80%] sm:mx-auto">{children}</div>
      </div>
    </section>
  );
};

BlockHero.displayName = "BlockHero";

const BlockHeroWithImage: React.FC<BlockHeroWithImageProps> = ({
  children,
  title,
  src,
}) => {
  // const t = useTranslations("home");
  return (
    <section className="container pt-10 pb-6 sm:pt-15 lg:py-20">
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-4">
        {/* Text Content */}
        <div
          className="text-center md:text-left order-2 md:order-1 lg:max-w-[490px] xl:max-w-xl
"
        >
          <h1 className="title1 my-5 text-black-600">{title}</h1>
          <div className="prose textp">{children}</div>
          {/* <div className="flex justify-center md:justify-start">
            <div className="flex flex-col mt-5 md:flex-row md:gap-4">
              <Link href="/request-demo">
                <Button className="!font-bold">
                  {t("increaseConversion.cta2")}
                </Button>
              </Link>
            </div>
          </div> */}
        </div>
        {/* Image Content */}
        <div className="relative flex items-center aspect-video order-1 md:order-2">
          <ExportedImage
            src={src}
            alt="hero image"
            fill
            priority
            className="rounded-lg mt-4 md:mt-0 object-cover"
            placeholder="empty"
          />
        </div>
      </div>
    </section>
  );
};

BlockHeroWithImage.displayName = "BlockHeroWithImage";

const BlockSection: React.FC<BlockSectionProps> = ({
  children,
  className,
  lp,
}) => {
  return (
    <section
      className={cn(
        "container pt-10 md:pt-20 md:pb-10",
        lp && "container-lp",
        className
      )}
    >
      {children}
    </section>
  );
};

BlockSection.displayName = "BlockSection";

export { BlockHero, BlockCenter, BlockSection, BlockHeroWithImage };
