import BackButton from "../components/back-button";
import { motion } from "framer-motion";
import usePageStatusStore from "@/lib/state/use-page-status-store";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import usePreviousPageUrl from "@/lib/state/use-previous-page-url-store";
import { cn } from "@/lib/utils";

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
  const regex = /\/changelog\/[^/]+$/;
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
    // Only allow setIsOpen to be true if the path doesn't contain a slash after /changelog/
    setIsOpen(regex.test(pathname));
  }, [pathname, isLargerThan768]);

  return (
    <div
      id={props.id}
      className={cn(
        "flex relative justify-center items-start min-w-full md:min-w-[834px]",
        props.className,
        isOpen ? (isLargerThan768 ? "pt-28" : "pt-8") : "pt-0",
        isOpen ? "px-4" : "px-0",
        pageStatus.isLoading ? "invisible" : "visible"
      )}
    >
      {isLargerThan768 && (
        <div
          className={cn(
            "relative w-[120px] flex flex-col space-y-4",
            isOpen ? "" : "top-[-8px]"
          )}
        >
          {isOpen && <BackButton />}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-450 text-start w-[125px]">{date}</p>
          </motion.div>
        </div>
      )}

      <div
        className={cn(
          "relative flex items-start",
          isOpen ? "space-x-0" : "space-x-8"
        )}
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
            className={cn(
              "items-start justify-center h-full w-[10px] absolute",
              isOpen ? "hidden" : "flex"
            )}
            hidden={isOpen}
          >
            <div className="h-2 w-2 bg-[#0D131B] rounded-full z-10" />
            <div className="absolute h-full w-[2px] bg-[#E9ECEF] z-5" />
          </motion.div>
        )}

        <div className="flex flex-col items-start space-y-0 md:space-y-2 ms-8">
          {!isLargerThan768 && (
            <div className="relative top-[-8px] flex flex-col space-y-4 mb-4">
              {isOpen && <BackButton />}
              <p className="text-base text-gray-450 text-start w-full">
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
