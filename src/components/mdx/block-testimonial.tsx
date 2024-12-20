import React from "react";
import Image from "next/image";

interface BlockHeroProps {
  children: React.ReactNode;
  name: string;
  src: string;
  // role: string;
}

const BlockTestimonial: React.FC<BlockHeroProps> = ({
  children,
  src,
  // role,
  name,
}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container pt-18 pb-10 text-center md:pt-24 lg:pt-32 lg:pb-20">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            ></path>
          </svg>
          <blockquote>
            <div className="prose text-2xl lg:text-3xl font-medium text-black-600">
              {children}
            </div>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <Image
                src={src}
                className="w-25 h-auto pr-3"
                width={100}
                height={100}
                alt="Logo"
              />
              <div className="pl-3 font-medium text-black-600 dark:text-white">
                {name}
              </div>
              {/* <div className="pl-3 text-sm font-light text-gray-400 dark:text-gray-400">
                {role}
              </div> */}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

BlockTestimonial.displayName = "BlockHero";

export { BlockTestimonial };
