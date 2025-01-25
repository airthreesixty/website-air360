"use client";

import React from "react";
import { usePathname } from "next/navigation";

import usePreviousPageUrl from "@/lib/state/use-previous-page-url-store";
import { MdxMeta } from "@/lib/models/mdx-meta";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import Timeline from "@/app/[lang]/(site)/changelog/layout/timeline";
import { Link, Pathnames } from "@/i18n/routing";
import { components } from "@/components/mdx";

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
    // using a timeout to wait for the page to render and get the right scroll position
    const timeout = setTimeout(() => {
      const month = pathname.split("month=")[1];

      const articleMonth = dayjs(props.meta.publishedAt).format("MM");

      // if the current article is the first one in the page
      // and the month is different from the current month
      // scroll to the month
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
      <Image
        src={props.meta.headerImage}
        alt={props.meta.title}
        height="100%"
        objectFit={"cover"}
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
        <Box
          // mt={!props.hideLayout && [86, 86, 140]}
          // maxW="4xl"
          // mx="auto"
          width={["100%", "100%", "682px"]}
          // w="100%"
          maxW="682px"
          // px={defaultPx(32)}
        >
          {/* Article header */}
          <VStack align="start" spacing={[4, 4, 6]}>
            {props.tags !== undefined && (
              <Flex gap={2}>
                {props.tags?.map((tag, index) => (
                  <Box
                    key={index}
                    height="22px"
                    bg="#F1F3F5"
                    color="#0D131B"
                    fontSize="14px"
                    borderRadius="full"
                    px={2}
                    lineHeight="21px"
                    fontWeight={500}
                    position="relative"
                    top="-8px"
                    mb="-10px"
                  >
                    {tag}
                  </Box>
                ))}
              </Flex>
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
                <Image
                  src={props.meta.headerImage}
                  alt={props.meta.title}
                  w="full"
                  height={["100%", "100%", "360px"]}
                  objectFit={"cover"}
                  cursor={props.hideLayout ? "pointer" : "default"}
                  _hover={{
                    // apply underline on hover to the next first .article-title
                    // "& + .article-title": {
                    //   textDecoration: "underline",
                    // },
                    boxShadow: props.hideLayout
                      ? "0px 2px 4px 0px rgba(0, 0, 0, 0.1)"
                      : "",
                  }}
                  fallback={
                    props.isInfiniteScrollingView ? (
                      <Box height={["100%", "100%", "360px"]} />
                    ) : (
                      <Image
                        src="/plain-gray.jpg"
                        height={["100%", "100%", "360px"]}
                        objectFit={"cover"}
                        w="full"
                      />
                    )
                  }
                />
              ) : (
                <Link href={`/changelog/${props.meta.slug}` as Pathnames}>
                  <Image
                    src={props.meta.headerImage}
                    alt={props.meta.title}
                    className="cursor-pointer"
                    w="full"
                    height={["100%", "100%", "360px"]}
                    objectFit={"cover"}
                    // cursor={props.hideLayout ? "pointer" : "pointer"}
                    _hover={{
                      // apply underline on hover to the next first .article-title
                      // "& + .article-title": {
                      //   textDecoration: "underline",
                      // },
                      boxShadow: props.hideLayout
                        ? "0px 2px 4px 0px rgba(0, 0, 0, 0.1)"
                        : "",
                    }}
                    fallback={
                      props.isInfiniteScrollingView ? (
                        <Box height={["100%", "100%", "360px"]} />
                      ) : (
                        <Image
                          src="/plain-gray.jpg"
                          height={["100%", "100%", "360px"]}
                          objectFit={"cover"}
                          w="full"
                        />
                      )
                    }
                    onClick={() => {
                      setPrevUrl(pathname);
                    }}
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
                  className={`article-title text-gray-900 font-hero text-[24px] leading-[32px] font-bold ${
                    props.hideLayout
                      ? "cursor-pointer hover:underline underline-offset-[3px]"
                      : "cursor-text hover:no-underline"
                  }`}
                >
                  {props.meta.title}
                </h1>
              ) : (
                <Link href={`/changelog/${props.meta.slug}` as Pathnames}>
                  <h2
                    className={`article-title text-gray-900 font-hero text-[24px] leading-[32px] font-bold ${
                      props.hideLayout
                        ? "cursor-pointer hover:underline underline-offset-[3px]"
                        : "cursor-text hover:no-underline"
                    }`}
                    onClick={() => {
                      setPrevUrl(pathname);
                    }}
                  >
                    {props.meta.title}
                  </h2>
                </Link>
              )}
            </motion.div>
          </VStack>
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
          {/* Article authors */}
          {/* {!props.hideAuthors && <Contributors authors={props.meta.authors} />} */}
        </Box>
      </Timeline>
    </MDXProvider>
  );

  return <MDX />;
};
