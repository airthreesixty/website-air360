"use client";

import React, { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useTimelineStore from "@/lib/state/use-timeline-store";
import usePageStatusStore from "@/lib/state/use-page-status-store";
import useAnimatePageStore from "@/lib/state/use-animate-page-store";
import { motion } from "framer-motion";

import TimeSelectionTabs from "../components/time-selection-tabs";
import { useTranslations } from "next-intl";

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
  page = 0,
  children,
  itemsPerPage,
  totalItems,
  infiniteScrollingView,
}: MainLayoutProps) => {
  const timeline = useTimelineStore();
  const { animatePage, setAnimatePage } = useAnimatePageStore();
  const pathname = usePathname();
  const pageStatus = usePageStatusStore();
  const t = useTranslations("changelog");

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

    pageStatus.setIsLoading(false);
  }, [pathname]);

  const hasMorePage =
    !infiniteScrollingView &&
    page !== undefined &&
    page <
      Math.floor((totalItems?.[timeline.view] ?? 0) / (itemsPerPage ?? 1)) - 1;
  console.log("infinitescrollingview", infiniteScrollingView);
  console.log("totalItems", totalItems);
  console.log("timeline.view", timeline.view);
  console.log("itemsPerPage", itemsPerPage);

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
            className="sticky top-[100px] lg:top-[120px] mt-5 z-10 pb-8"
          >
            <TimeSelectionTabs />
          </motion.div>
        )}
        <div className="w-screen max-w-full z-[100]">
          <div className="container flex justify-center">
            <div className="flex flex-col items-center w-full space-y-8">
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
                <div className="flex flex-col justify-start items-start gap-8 md:gap-14 min-w-full md:min-w-[834px] min-h-screen">
                  {!isInBlogPage && (
                    <div className="flex flex-col items-start w-full gap-2">
                      <h1 className="title1 text-left">{t("title")}</h1>
                      <p className="max-w-2xl text-2xl font-bold leading-8 text-gray-900 text-left">
                        {t("description")}
                      </p>
                    </div>
                  )}
                  <div className="flex flex-col justify-center">{children}</div>
                </div>
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
                <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4">
                  {page === 0 && hasMorePage ? (
                    <Link href={`/changelog/page/1#${timeline.view}`}>
                      <button className="btn btn-outline">Load more</button>
                    </Link>
                  ) : (
                    <>
                      {page > 0 && (
                        <Link
                          href={`/changelog/page/${page - 1}#${timeline.view}`}
                        >
                          <button className="btn btn-outline">
                            Previous page
                          </button>
                        </Link>
                      )}
                      {hasMorePage && (
                        <Link
                          href={`/changelog/page/${page + 1}#${timeline.view}`}
                        >
                          <button className="btn btn-outline">Next page</button>
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
