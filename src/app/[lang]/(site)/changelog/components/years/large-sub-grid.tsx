import dayjs from "dayjs";
import { IImagePreviewMeta } from "@/lib/models/view";
import { useRouter } from "next/navigation";

interface ISubGridProps {
  changelogs: IImagePreviewMeta[];
  rowLength?: number;
}

const LargeSubGrid = (props: ISubGridProps) => {
  const { changelogs, rowLength = 0 } = props;
  const router = useRouter();

  const imageHeight = rowLength - 1 <= 4 ? "198px" : "98px";
  const imageWidth = `${400 / changelogs.length - 2}px`;

  return (
    <div
      className="grid gap-[2px]"
      style={{
        gridTemplateColumns: `repeat(${changelogs.length}, 1fr)`,
      }}
    >
      {changelogs.map(({ imageUrl, slug, publishedAt }, subI) => (
        <div key={subI}>
          <img
            src={imageUrl}
            alt={slug}
            className="object-cover cursor-pointer"
            style={{
              height: imageHeight,
              width: imageWidth,
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/plain-gray.jpg";
            }}
            onClick={() => {
              const date = dayjs(publishedAt);
              const targetDate = date.format("MMM YYYY");
              const year = date.format("YYYY");
              const hash = targetDate.replace(/[\s_]+/g, "-").toLowerCase();

              router.push(`/years/${year}#${hash}`);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default LargeSubGrid;
