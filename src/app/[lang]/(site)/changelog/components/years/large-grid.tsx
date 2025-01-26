import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { IGridProps } from "./grid-interfaces";
import LargeSubGrid from "./large-sub-grid";
import ExportedImage from "next-image-export-optimizer";

const LargeGrid = (props: IGridProps) => {
  const { changelogs } = props;
  const router = useRouter();

  return (
    <div
      className="grid gap-[2px]"
      style={{
        gridTemplateColumns: "repeat(1, 1fr)",
        gridTemplateRows: `repeat(${Math.floor(
          changelogs.slice(0, 27).length / 9
        )}, 1fr)`,
        height: "100%",
      }}
    >
      {changelogs
        .slice(0, 27)
        .reduce<(typeof changelogs)[]>((result, item, index) => {
          const rowIndex = Math.floor(index / 9);
          if (!result[rowIndex]) {
            result[rowIndex] = [];
          }
          result[rowIndex].push(item);

          return result;
        }, [])
        .map((rowItems, i) => (
          <div className="grid-item" key={i}>
            <div className="flex space-x-[2px]">
              {i % 2 === 0 && (
                <>
                  <motion.div
                    layoutId={
                      i === 0 && props.isFirstItem ? rowItems[0].slug : ``
                    }
                    initial={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 0,
                    }}
                  >
                    <ExportedImage
                      src={rowItems[0].imageUrl}
                      alt={rowItems[0].slug}
                      className={`h-[198px] object-cover ${
                        rowItems.length === 1 ? "w-full" : "w-[282px]"
                      }`}
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.onerror = null;
                        img.className += " bg-gray-200 animate-pulse";
                      }}
                      onClick={() => {
                        const date = dayjs(rowItems[0].publishedAt);
                        const targetDate = date.format("MMM YYYY");
                        const year = date.format("YYYY");
                        const hash = targetDate
                          .replace(/[\s_]+/g, "-")
                          .toLowerCase();

                        router.push(`/years/${year}#${hash}`);
                      }}
                      width={682}
                      height={360}
                    />
                  </motion.div>
                  <div className="flex flex-col space-y-[2px]">
                    {rowItems
                      .slice(1, rowItems.length)
                      .reduce<(typeof changelogs)[]>((result, item, index) => {
                        const rowIndex = Math.floor(index / 4);
                        if (!result[rowIndex]) {
                          result[rowIndex] = [];
                        }
                        result[rowIndex].push(item);

                        return result;
                      }, [])
                      .map((subGridRowItems, subIndex) => (
                        <LargeSubGrid
                          key={subIndex}
                          changelogs={subGridRowItems}
                          rowLength={rowItems.length}
                        />
                      ))}
                  </div>
                </>
              )}
              {i % 2 === 1 && (
                <>
                  <div className="flex flex-col space-y-[2px]">
                    {rowItems
                      .slice(0, rowItems.length - 1)
                      .reduce<(typeof changelogs)[]>((result, item, index) => {
                        const rowIndex = Math.floor(index / 4);
                        if (!result[rowIndex]) {
                          result[rowIndex] = [];
                        }
                        result[rowIndex].push(item);

                        return result;
                      }, [])
                      .map((subGridRowItems, subIndex) => (
                        <LargeSubGrid
                          key={subIndex}
                          changelogs={subGridRowItems}
                          rowLength={rowItems.length}
                        />
                      ))}
                  </div>
                  <ExportedImage
                    src={rowItems[rowItems.length - 1].imageUrl}
                    alt={rowItems[rowItems.length - 1].slug}
                    className={`h-[198px] object-cover ${
                      rowItems.length === 1 ? "w-full" : "w-[282px]"
                    }`}
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.onerror = null;
                      img.className += " bg-gray-200 animate-pulse";
                    }}
                    onClick={() => {
                      const date = dayjs(
                        rowItems[rowItems.length - 1].publishedAt
                      );
                      const targetDate = date.format("MMM YYYY");
                      const year = date.format("YYYY");
                      const hash = targetDate
                        .replace(/[\s_]+/g, "-")
                        .toLowerCase();

                      router.push(`/years/${year}#${hash}`);
                    }}
                    width={682}
                    height={360}
                  />
                </>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default LargeGrid;
