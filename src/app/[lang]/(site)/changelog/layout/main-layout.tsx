"use client";

import React, { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { defaultPx } from "@/lib/utils";
import useTimelineStore from "@/lib/state/use-timeline-store";
import usePageStatusStore from "@/lib/state/use-page-status-store";
import useAnimatePageStore from "@/lib/state/use-animate-page-store";
import { motion } from "framer-motion";
import Menu from "@/components/layout/menu";

import { Box, Button, Container, HStack, VStack } from "@chakra-ui/react";
import TimeSelectionTabs from "../components/time-selection-tabs";
import Footer from "@/components/layout/footer";

export interface MainLayoutProps {
  page?: number;
  children: ReactNode;
  itemsPerPage?: number;
  totalItems?: {
    weeks: number;
    months: number;
    years: number;
  };
  infiniteScrollingView?: "year" | "month";
}

export const MainLayout = ({
  page,
  children,
  itemsPerPage,
  totalItems,
  infiniteScrollingView,
}: MainLayoutProps) => {
  const timeline = useTimelineStore();
  const { animatePage, setAnimatePage } = useAnimatePageStore();
  const pathname = usePathname();
  const pageStatus = usePageStatusStore();

  React.useEffect(() => {
    const hash = window?.location.hash ?? "";

    timeline.setView(
      hash
        ? hash === "#months"
          ? "months"
          : hash === "#years"
          ? "years"
          : "weeks"
        : "weeks"
    );
  }, []);

  useEffect(() => {
    if (!pathname.includes("/changelog/")) {
      window.scrollTo({ top: 0 });
    }

    pageStatus.setIsLoading(true);

    if (pathname.includes("/years") && !pathname.includes("/months")) {
      timeline.setView("months");
    } else if (pathname.includes("/years") && pathname.includes("/months")) {
      timeline.setView("weeks");
    }

    // URL変更時にロード完了を設定
    pageStatus.setIsLoading(false);
  }, [pathname]);

  const hasMorePage =
    !infiniteScrollingView &&
    page !== undefined &&
    page < Math.floor(totalItems[timeline.view] / itemsPerPage) - 1;

  const isInBlogPage = pathname.startsWith("/changelog/");

  return (
    <>
      <motion.div
        initial={animatePage ? "hidden" : "visible"}
        animate="visible"
        onAnimationComplete={() => {
          setAnimatePage(false);
        }}
      >
        {/* <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6 } },
          }}
        >
          <Menu />
        </motion.div> */}
        {!isInBlogPage && (
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
            layout
            layoutId="timeline-switcher-button"
            transition={{ duration: 0 }}
            style={{
              position: "sticky",
              top: "120px",
              zIndex: 1,
              paddingBottom: "32px",
            }}
          >
            <TimeSelectionTabs />
          </motion.div>
        )}
        <Box w="100vw" maxW={"100%"} zIndex="docked">
          <Container
            maxW="landingMax"
            display="flex"
            justifyContent="center"
            px={defaultPx(32)}
          >
            <VStack spacing={8} alignItems="center" w="full">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.2 },
                  },
                }}
              >
                <VStack
                  display="flex"
                  justifyContent="start"
                  alignItems="start"
                  gap={[8, 8, 14]}
                  minWidth={["100%", "100%", "834px"]}
                  minHeight="100vh"
                >
                  {!isInBlogPage && (
                    <div className="font-hero flex flex-col items-start w-full gap-2">
                      <h1 className="title1 text-left">Changelog</h1>
                      <p className="max-w-2xl text-2xl font-hero font-bold leading-8 text-gray-900 text-left">
                        New features, improvements, and fixes every week
                      </p>
                    </div>
                  )}
                  <div className="flex flex-col justify-center">{children}</div>
                </VStack>
              </motion.div>
              <motion.div
                hidden={!!infiniteScrollingView}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.3 },
                  },
                }}
              >
                <VStack align={["stretch", "stretch", "center"]}>
                  {page === 0 && hasMorePage ? (
                    <Link href={`/page/1#${timeline.view}`}>
                      <Button variant="landingOutline" size="landingLg">
                        Load more
                      </Button>
                    </Link>
                  ) : (
                    <HStack justifyContent="center" spacing={4}>
                      {page > 0 && (
                        <Link href={`/page/${page - 1}${"#" + timeline.view}`}>
                          <Button variant="landingOutline" size="landingLg">
                            Previous page
                          </Button>
                        </Link>
                      )}
                      {hasMorePage && (
                        <Link href={`/page/${page + 1}${"#" + timeline.view}`}>
                          <Button variant="landingOutline" size="landingLg">
                            Next page
                          </Button>
                        </Link>
                      )}
                    </HStack>
                  )}
                </VStack>
              </motion.div>
            </VStack>
          </Container>
        </Box>
      </motion.div>
    </>
  );
};
