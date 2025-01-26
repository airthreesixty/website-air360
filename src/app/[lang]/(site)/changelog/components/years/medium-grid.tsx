"use client";

import dayjs from "dayjs";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { IGridProps } from "./grid-interfaces";
import ExportedImage from "next-image-export-optimizer";

const MediumGrid = (props: IGridProps) => {
  const { changelogs } = props;
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  return changelogs.length < 9 ? (
    <div className="flex flex-col space-y-2">
      {changelogs
        .reverse()
        .reduce<(typeof changelogs)[]>((result, item, index) => {
          const rowIndex = Math.floor(index / 3);
          if (!result[rowIndex]) {
            result[rowIndex] = [];
          }
          result[rowIndex].push(item);
          return result;
        }, [])
        .reverse()
        .map((rowItems, i) => (
          <div key={i} className={`grid grid-cols-${rowItems.length} gap-2`}>
            {rowItems.reverse().map(({ imageUrl, slug }, index) =>
              imageUrl ? (
                <motion.div
                  key={index}
                  layoutId={
                    i === 0 && props.isFirstItem ? rowItems[0].slug : undefined
                  }
                  initial={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 0,
                  }}
                  style={{ height: "100%" }}
                >
                  <ExportedImage
                    src={imageUrl}
                    alt={slug}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/plain-gray.jpg";
                    }}
                    width={682}
                    height={360}
                  />
                </motion.div>
              ) : (
                <div key={index} className="bg-[#F1F3F5] h-full w-full" />
              )
            )}
          </div>
        ))}
    </div>
  ) : (
    <div
      className="
        grid grid-cols-8 
        grid-rows-7 
        gap-2 
        h-full 
        max-h-[601px]
      "
    >
      {changelogs.slice(0, 9).map(({ imageUrl, slug, publishedAt }, index) => {
        const rowSpanClass = [0, 2, 3].includes(index)
          ? "row-span-3"
          : "row-span-2";
        const colSpanClass = [1, 3, 6].includes(index)
          ? "col-span-4"
          : "col-span-2";

        return (
          <div key={index} className={`${rowSpanClass} ${colSpanClass}`}>
            <motion.div
              layoutId={index === 0 && props.isFirstItem ? slug : undefined}
              initial={{
                scale: 1,
              }}
              transition={{
                duration: 0,
              }}
              style={{ height: "100%" }}
            >
              <ExportedImage
                src={imageUrl}
                alt={slug}
                className="h-full w-full object-cover cursor-pointer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/plain-gray.jpg";
                }}
                onClick={() => {
                  const date = dayjs(publishedAt);
                  const targetDate = date.format("MMM YYYY");
                  const year = date.format("YYYY");
                  const hash = targetDate.replace(/[\s_]+/g, "-").toLowerCase();

                  router.push(`/${lang}/years/${year}#${hash}`);
                }}
                width={682}
                height={360}
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default MediumGrid;
