import LazyLoad from "react-lazyload";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IAggregatedChangelogs, IImagePreviewMeta } from "@/lib/models/view";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import MoreItems from "../components/more-items";
import Timeline from "./timeline";
import ExportedImage from "next-image-export-optimizer";

interface IMonthsProps {
  monthChangelogsMap: IAggregatedChangelogs;
  isInfiniteScrollingView?: boolean;
}

const Months = ({
  monthChangelogsMap,
  isInfiniteScrollingView,
}: IMonthsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const yearMatch = pathname.match(/\/years\/(\d{4})/);
  const year = yearMatch ? yearMatch[1] : null;
  const lang = pathname.split("/")[1];

  const sortedChangelogsArrayByMonth: IImagePreviewMeta[][] = Object.keys(
    monthChangelogsMap || {}
  )
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
    .map((date) => monthChangelogsMap[date]);

  useEffect(() => {
    if (
      year &&
      sortedChangelogsArrayByMonth[0] &&
      dayjs(sortedChangelogsArrayByMonth[0][0].publishedAt).format("YYYY") !==
        year
    ) {
      const yearIndex = sortedChangelogsArrayByMonth.findIndex(
        (changelogs) => dayjs(changelogs[0].publishedAt).format("YYYY") === year
      );
      if (yearIndex !== -1) {
        window.scrollTo({
          top:
            (document.getElementById(`timeline-month-${yearIndex}`)
              ?.offsetTop || 0) - 70,
          behavior: "smooth",
        });
      }
    }
  }, [year, sortedChangelogsArrayByMonth]);

  const handleFindWeekChangelog = (publishedAt: string) => {
    const date = dayjs(publishedAt);
    const targetDate = date.format("MMM DD YYYY");
    const month = date.format("MM");
    const year = date.format("YYYY");
    const hash = targetDate.replace(/\s+/g, "-").toLowerCase();

    router.push(`/${lang}/years/${year}/months/${month}#${hash}`);
  };

  return (
    <>
      {sortedChangelogsArrayByMonth.map((changelogs, index) => (
        <Timeline
          id={`timeline-month-${index}`}
          key={index}
          date={dayjs(Object.keys(monthChangelogsMap)[index]).format(
            "MMM YYYY"
          )}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex pb-12 lg:pb-20">
              <div className="rounded-xl overflow-hidden cursor-pointer">
                <div className="flex relative w-full max-w-[682px] h-[360px] hover:shadow-lg transition-shadow duration-300">
                  <LazyLoad height="100%" once>
                    {changelogs.length > 3 && (
                      <MoreItems numberOfItems={changelogs.length - 3} />
                    )}
                    <div
                      className="grid gap-2 h-full"
                      style={{
                        gridTemplateColumns:
                          changelogs.length === 1
                            ? "repeat(1, 1fr)"
                            : "repeat(2, 1fr)",
                      }}
                    >
                      {changelogs.map(
                        ({ imageUrl, slug, publishedAt }, index) => (
                          <div key={index}>
                            <motion.div
                              layoutId={
                                index === 0 && isInfiniteScrollingView
                                  ? slug
                                  : ""
                              }
                              initial={{
                                scale:
                                  index === 0 && isInfiniteScrollingView
                                    ? 0.7
                                    : 1,
                                opacity: 1,
                              }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.6 }}
                              className="w-full h-full"
                            >
                              <ExportedImage
                                src={imageUrl}
                                alt={`${
                                  Object.keys(monthChangelogsMap)[index]
                                } - ${index}`}
                                className="object-cover w-full h-full min-h-[176px]"
                                onClick={() =>
                                  handleFindWeekChangelog(publishedAt)
                                }
                                width={682}
                                height={360}
                              />
                            </motion.div>
                          </div>
                        )
                      )}
                    </div>
                  </LazyLoad>
                </div>
              </div>
            </div>
          </motion.div>
        </Timeline>
      ))}
    </>
  );
};

export default Months;
