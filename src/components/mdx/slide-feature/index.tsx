import React, { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import "./styles.css";
import SlideAnimationClient from "./slide-animation-client";
import ExportedImage from "next-image-export-optimizer";

interface SlideFeatureProps extends PropsWithChildren {
  title: string;
  lp?: boolean;
  lang?: string;
}

interface SlideProps extends PropsWithChildren {
  title: string;
  src: string;
  shadow: boolean;
}

const SlideFeature: React.FC<SlideFeatureProps> = ({
  children,
  title,
  lp,
  lang,
}) => {
  const slides: React.ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    const { displayName } = child.type as { displayName?: string };

    if (displayName === "Slide") {
      React.Children.forEach(child, () => {
        slides.push(child);
      });
    }
  });

  return (
    <section className="container pt-15 pb-15 lg:py-30">
      <h2
        className={cn(
          "title2 text-center font-really",
          lp && "mb-8 text-3xl md:text-5xl lg:mb-15 lg:text-6xl xl:text-7xl",
          lang === "ja" && "md:text-4xl lg:text-5xl xl:text-6xl font-noto"
        )}
      >
        {title}
      </h2>
      <div className="hidden lg:block lg:max-w-6xl lg:mx-auto mt-25">
        <div className="flex justify-between lg:gap-x-15">
          <div className="w-70vh h-50vh sticky overflow-hidden top-32vh">
            {slides.map((slide, index) => (
              <div key={index} className="image-container transition active">
                <ExportedImage
                  src={slide.props.src}
                  width={865.2}
                  height={487.6}
                  alt={slide.props.title}
                  className={cn(
                    "object-cover absolute inset-0 rounded-lg",
                    slide.props.shadow && "shadow-lg"
                  )}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-y-40">{children}</div>
        </div>
      </div>
      {slides.map((slide, index) => (
        <SlideMobileBlock key={index} {...slide.props}>
          {slide.props.children}
        </SlideMobileBlock>
      ))}
      <SlideAnimationClient />
    </section>
  );
};

SlideFeature.displayName = "SlideFeature";

const Slide: React.FC<SlideProps> = ({ children, title }) => {
  return (
    <div className="text-container max-w-[340px] ml-auto text-black-600 h-50vh flex flex-col justify-center text-right active">
      <div className="text-2xl lg:text-3xl font-really mb-2 font-bold">
        {title}
      </div>
      <span className="text-black-600 lg:text-xl xl:text-2xl xl:leading-8">
        {children}
      </span>
    </div>
  );
};

Slide.displayName = "Slide";

const SlideMobileBlock: React.FC<SlideProps> = ({
  src,
  children,
  title,
  shadow,
}) => {
  return (
    <div className="lg:hidden mt-8 pb-3">
      <div className="flex flex-col justify-center items-center text-center">
        <ExportedImage
          alt={title}
          src={src}
          width={500}
          height={300}
          className={cn(
            "sm:max-w-[500px] rounded-lg",
            shadow && "shadow-lg mb-5"
          )}
        />
        <h3 className="font-really font-bold text-black-600 text-2xl mt-4">
          {title}
        </h3>
        <div className="text-gray-600/60 max-w-[600px] mx-auto">{children}</div>
      </div>
    </div>
  );
};

SlideMobileBlock.displayName = "SlideMobileBlock";

export { SlideFeature, Slide, SlideMobileBlock };
