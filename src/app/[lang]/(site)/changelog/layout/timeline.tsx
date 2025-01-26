import BackButton from "../components/back-button";
import { motion } from "framer-motion";
import usePageStatusStore from "@/lib/state/use-page-status-store";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import usePreviousPageUrl from "@/lib/state/use-previous-page-url-store";

export interface TimelineProps {
  date: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

const Timeline = (props: TimelineProps) => {
  const { children, date } = props;
  const { prevUrl } = usePreviousPageUrl();

  const pathname = usePathname();
  const pageStatus = usePageStatusStore();
  const [isLargerThan768, setIsLargerThan768] = useState(false);

  useEffect(() => {
    setIsLargerThan768(window.innerWidth >= 768);
    const handleResize = () => {
      setIsLargerThan768(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(pathname.includes("/changelog/"));
  }, [pathname, isLargerThan768]);

  return (
    <div
      id={props.id}
      className={`
        flex relative justify-center items-start 
        ${props.className || ""}
        pt-${isOpen ? (isLargerThan768 ? "28" : "8") : "0"}
        px-${isOpen ? "4" : "0"}
        min-w-full md:min-w-[834px]
        ${pageStatus.isLoading ? "invisible" : "visible"}
      `}
    >
      {isLargerThan768 && (
        <div
          className={`
            relative 
            ${isOpen ? "" : "top-[-8px]"}
            w-[120px] 
            flex flex-col space-y-4
          `}
        >
          {isOpen && <BackButton />}

          <p
            className="
              text-base 
              text-gray-500 
              text-start 
              w-[125px]
            "
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {date}
            </motion.div>
          </p>
        </div>
      )}

      <div
        className={`
          flex items-start 
          ${isOpen ? "space-x-0" : "space-x-8"}
          relative
        `}
        id={date.replace(/[\s_]+/g, "-").toLowerCase()}
      >
        {!isOpen && (
          <motion.div
            initial={{
              opacity:
                pathname.includes("/year") || prevUrl.includes("/year") ? 0 : 1,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`
              ${isOpen ? "hidden" : "flex"}
              items-start 
              justify-center 
              h-full 
              w-[10px] 
              absolute
            `}
            hidden={isOpen}
          >
            <div
              className="
                h-2 
                w-2 
                bg-[#0D131B] 
                rounded-full 
                z-10
              "
            />
            <div
              className="
                absolute 
                h-full 
                w-[2px] 
                bg-[#E9ECEF] 
                z-5
              "
            />
          </motion.div>
        )}

        <div className="flex flex-col items-start space-y-0 md:space-y-2 ms-8">
          {!isLargerThan768 && (
            <div
              className="
                relative 
                top-[-8px] 
                flex flex-col 
                space-y-4 
                mb-4
              "
            >
              {isOpen && <BackButton />}
              <p
                className="
                  text-base 
                  text-gray-500 
                  text-start 
                  w-full
                "
              >
                {date}
              </p>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
