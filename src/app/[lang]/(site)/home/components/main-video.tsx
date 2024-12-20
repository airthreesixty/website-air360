"use client";

import { useEffect, useRef, useState } from "react";

const MainVideo = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showIFrame, setShowIFrame] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!showIFrame && entry.isIntersecting) {
          setShowIFrame(true);
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = targetRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [showIFrame]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative w-full h-full">
      <div className="md:max-w-[750px] mx-auto flex justify-center lg:max-w-[950px] xl:max-w-[1050px] 2xl:max-w-[1150px]">
        <div
          ref={targetRef}
          className="mt-6 w-full"
          style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
        >
          {isMounted && showIFrame && (
            <iframe
              src="https://www.loom.com/embed/ec06bf3738f64c8e960b2c0eccaf89b0?sid=cb91bf0c-e504-4098-91d4-c7afbbb919dc?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
              className="rounded-lg h-full aspect-video"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
