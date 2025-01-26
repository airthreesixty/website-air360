import dayjs from "dayjs";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { IGridProps } from "./grid-interfaces";

const SmallGrid = (props: IGridProps) => {
  const { changelogs } = props;
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  return (
    <div className="flex h-full max-h-[360px] max-w-[682px] md:gap-x-2">
      <div className="w-full">
        <motion.div
          layoutId={props.isFirstItem ? changelogs[0].slug : ``}
          initial={{
            scale: 1,
          }}
          transition={{
            duration: 0,
          }}
          style={{ overflow: "hidden" }}
        >
          <img
            src={changelogs[0]?.imageUrl}
            alt={changelogs[0]?.slug}
            className="
              min-h-[176px] 
              md:min-h-[360px] 
              w-full 
              object-cover 
              cursor-pointer
            "
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/plain-gray.jpg";
            }}
            onClick={() => {
              const date = dayjs(changelogs[0]?.publishedAt);
              const targetDate = date.format("MMM YYYY");
              const year = date.format("YYYY");
              const hash = targetDate.replace(/[\s_]+/g, "-").toLowerCase();

              router.push(`/${lang}/years/${year}#${hash}`);
            }}
          />
        </motion.div>
      </div>
      <div className="flex flex-col w-[176px] h-full space-y-2">
        {changelogs
          .slice(1, changelogs.length)
          .map(({ imageUrl, slug, publishedAt }, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={slug}
              className="
                object-cover
                max-h-[176px]
                h-full
                max-w-[176px]
                cursor-pointer
              "
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
            />
          ))}
      </div>
    </div>
  );
};

export default SmallGrid;
