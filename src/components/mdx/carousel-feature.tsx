import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const CarouselFeature = ({}) => {
  return (
    <Carousel className="w-full max-w-[300px] sm:max-w-lg lg:max-w-2xl">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col p-0">
                  {/* テキストコンテナ */}
                  <div className="px-6 pt-6 pb-2">
                    <h3 className="title3">On-Page-Analytics</h3>
                    <p className="textp">
                      Understand the page and any element performance with just
                      a click
                    </p>
                  </div>
                  {/* 画像コンテナ */}
                  <div className="relative w-full aspect-video">
                    <Image
                      src="/sunburst.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-inherit border-inherit" />
      <CarouselNext className="text-inherit border-inherit" />
    </Carousel>
  );
};

CarouselFeature.displayName = "CarouselFeature";

export default CarouselFeature;
