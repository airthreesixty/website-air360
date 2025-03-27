import { IAggregatedChangelogs, IImagePreviewMeta } from "@/lib/models/view";
import dayjs from "dayjs";
import MediumGrid from "../components/years/medium-grid";
import LargeGrid from "../components/years/large-grid";
import Timeline from "./timeline";
import { motion } from "framer-motion";
import MoreItems from "../components/more-items";
import SmallGrid from "../components/years/small-grid";
import LazyLoad from "react-lazyload";
import { useState, useEffect } from "react";

interface IYearsProps {
  yearChangelogsMap: IAggregatedChangelogs;
}

const Years = ({ yearChangelogsMap }: IYearsProps) => {
  const [isLargerThan768, setIsLargerThan768] = useState(false);

  useEffect(() => {
    setIsLargerThan768(window.innerWidth >= 768);
    const handleResize = () => {
      setIsLargerThan768(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sortedYearKeys = Object.keys(yearChangelogsMap || {}).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateB.getTime() - dateA.getTime();
  });

  const sortedChangelogsByYear: IImagePreviewMeta[][] = sortedYearKeys.map(
    (year) => {
      return yearChangelogsMap[year];
    }
  );

  return (
    <>
      {sortedChangelogsByYear.map((changelogs, index) => (
        <Timeline
          key={index}
          date={dayjs(sortedYearKeys[index]).format("YYYY")}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`
                flex 
                pb-${
                  index === sortedChangelogsByYear.length - 1
                    ? "0"
                    : "12 md:pb-16 lg:pb-20"
                }
              `}
            >
              <div
                className="
                  cursor-pointer 
                  flex 
                  flex-col
                "
                onClick={() => {}}
              >
                <div
                  className="
                    overflow-hidden 
                    rounded-2xl 
                    max-w-[682px] 
                    w-full 
                    md:w-[682px] 
                    flex 
                    relative 
                    transition-all 
                    duration-300 
                    hover:shadow-md 
                    group
                  "
                  onClick={() => {}}
                >
                  {changelogs.length > 27 && (
                    <MoreItems numberOfItems={changelogs.length - 27} />
                  )}
                  {changelogs.length === 3 && (
                    <LazyLoad height="421px" once>
                      <SmallGrid changelogs={changelogs} />
                    </LazyLoad>
                  )}
                  {((changelogs.length <= 9 && changelogs.length !== 3) ||
                    !isLargerThan768) && (
                    <LazyLoad
                      height={changelogs.length < 9 ? "300px" : "681px"}
                      offset={!isLargerThan768 ? 100 : 0}
                      once
                    >
                      <MediumGrid
                        changelogs={changelogs}
                        isFirstItem={index === 0}
                      />
                    </LazyLoad>
                  )}
                  {changelogs.length > 9 && isLargerThan768 && (
                    <LazyLoad height="678px" offset={0} once>
                      <LargeGrid
                        changelogs={changelogs}
                        isFirstItem={index === 0}
                      />
                    </LazyLoad>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </Timeline>
      ))}
    </>
  );
};

export default Years;
