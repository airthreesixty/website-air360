"use client";

import React from "react";
import { usePathname } from "next/navigation";

import usePreviousPageUrl from "@/lib/state/use-previous-page-url-store";
import { MdxMeta } from "@/lib/models/mdx-meta";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import Timeline from "@/app/[lang]/(site)/changelog/layout/timeline";
import { Link, Pathnames } from "@/i18n/routing";
import { components } from "@/components/mdx";
import ExportedImage from "next-image-export-optimizer";

export interface MdxLayoutProps {
  meta: MdxMeta;
  children: ReactNode;
  hideLayout?: boolean;
  hideHead?: boolean;
  hideAuthors?: boolean;
  imagePreviewMode?: boolean;
  tags?: string[];
  index?: number;
  isInfiniteScrollingView?: boolean;
}

export const MdxLayout = (props: MdxLayoutProps) => {
  const { setPrevUrl } = usePreviousPageUrl();
  const pathname = usePathname();

  React.useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      const month = pathname.split("month=")[1];
      const articleMonth = dayjs(props.meta.publishedAt).format("MM");

      if (
        month &&
        month !== articleMonth &&
        props.index === 0 &&
        props.hideLayout
      ) {
        const element = document.querySelector(`.timeline-month-${month}`);
        const rect = element?.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const top = rect ? rect.top + scrollTop : 0;

        window.scrollTo({
          behavior: "smooth",
          top: top - 70,
        });
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (props.imagePreviewMode) {
    return (
      <ExportedImage
        src={props.meta.headerImage}
        alt={props.meta.title}
        className="h-full object-cover"
      />
    );
  }

  const shouldAnimateFromPreviousPage =
    props.hideLayout && props.isInfiniteScrollingView && props.index === 0;

  const isInBlogPage = pathname.startsWith("/changelog/");

  const MDX = () => (
    <MDXProvider components={components}>
      <Timeline
        date={dayjs(props.meta.publishedAt).format("MMM DD YYYY")}
        className={`timeline-month-${dayjs(props.meta.publishedAt).format(
          "MM"
        )}`}
      >
        <div
          className="
            w-full 
            md:w-[682px] 
            max-w-[682px] 
            mx-auto
          "
        >
          {/* Article header */}
          <div className="flex flex-col space-y-4 md:space-y-6 items-start">
            {props.tags !== undefined && (
              <div className="flex gap-2">
                {props.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="
                      h-[22px] 
                      bg-[#F1F3F5] 
                      text-[#0D131B] 
                      text-sm 
                      rounded-full 
                      px-2 
                      leading-[21px] 
                      font-medium 
                      relative 
                      top-[-8px] 
                      mb-[-10px]
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <motion.div
              layoutId={
                shouldAnimateFromPreviousPage ? `${props.meta.slug}` : ``
              }
              initial={{
                opacity: shouldAnimateFromPreviousPage ? 1 : 0,
                y: shouldAnimateFromPreviousPage ? 0 : 20,
                scale: shouldAnimateFromPreviousPage ? 0.9 : 1,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
                scale: 1,
              }}
              style={{
                width: "100%",
                overflow: "hidden",
                borderRadius: "16px",
                height: "100%",
              }}
            >
              {isInBlogPage ? (
                <ExportedImage
                  src={props.meta.headerImage}
                  alt={props.meta.title}
                  className={`
                    w-full 
                    h-[100%] 
                    md:h-[360px] 
                    object-cover 
                    ${props.hideLayout ? "cursor-pointer" : "cursor-default"}
                    hover:shadow-md
                  `}
                />
              ) : (
                <Link href={`/changelog/${props.meta.slug}` as Pathnames}>
                  <ExportedImage
                    src={props.meta.headerImage}
                    alt={props.meta.title}
                    className={`
                      w-full 
                      h-[100%] 
                      md:h-[360px] 
                      object-cover 
                      cursor-pointer 
                      hover:shadow-md
                    `}
                    onClick={() => {
                      setPrevUrl(pathname);
                    }}
                    width={682}
                    height={360}
                  />
                </Link>
              )}
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: shouldAnimateFromPreviousPage ? 0 : 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, delay: 0.2 },
              }}
            >
              {isInBlogPage ? (
                <h1
                  className={`
                    article-title 
                    text-gray-900 
                    font-hero 
                    text-2xl 
                    leading-8 
                    font-bold 
                    ${
                      props.hideLayout
                        ? "cursor-pointer hover:underline underline-offset-[3px]"
                        : "cursor-text hover:no-underline"
                    }
                  `}
                >
                  {props.meta.title}
                </h1>
              ) : (
                <Link href={`/changelog/${props.meta.slug}` as Pathnames}>
                  <h2
                    className={`
                      article-title 
                      text-gray-900 
                      font-hero 
                      text-2xl 
                      leading-8 
                      font-bold 
                      ${
                        props.hideLayout
                          ? "cursor-pointer hover:underline underline-offset-[3px]"
                          : "cursor-text hover:no-underline"
                      }
                    `}
                    onClick={() => {
                      setPrevUrl(pathname);
                    }}
                  >
                    {props.meta.title}
                  </h2>
                </Link>
              )}
            </motion.div>
          </div>
          {/* Article content */}
          <motion.div
            initial={{ opacity: 0, y: props.hideLayout ? 0 : 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.2 },
            }}
          >
            <div className="pb-16 prose">{props.children}</div>
          </motion.div>
        </div>
      </Timeline>
    </MDXProvider>
  );

  return <MDX />;
};
