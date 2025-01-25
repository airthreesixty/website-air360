"use client";

import React from "react";
import { usePathname } from "next/navigation";
import useTimelineStore from "@/lib/state/use-timeline-store";
import { MainLayout } from "../layout/main-layout";
import { TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Years from "../layout/years";
import Weeks from "../layout/weeks";
import Months from "../layout/months";
import { IAggregatedChangelogs } from "@/lib/models/view";

const ITEMS_PER_PAGE = 4;

export interface IPageProps {
  slugs: string[];
  changelogsMap: {
    months: IAggregatedChangelogs;
    years: IAggregatedChangelogs;
  };
  totalItems: { weeks: number; months: number; years: number };
}

export default function ChangelogPage({
  slugs,
  changelogsMap,
  totalItems,
}: IPageProps) {
  const timeline = useTimelineStore();
  const pathname = usePathname();
  const match = pathname.match(/\/page\/(\d+)/);
  const page = parseInt(match ? match[1] : "0", 10);

  return (
    <MainLayout
      page={page}
      itemsPerPage={ITEMS_PER_PAGE}
      totalItems={totalItems}
    >
      <Tabs
        isLazy
        lazyBehavior="keepMounted"
        isFitted
        index={
          timeline.view === "weeks" ? 0 : timeline.view === "months" ? 1 : 2
        }
        onChange={(index) => {
          timeline.setView(
            index === 0 ? "weeks" : index === 1 ? "months" : "years"
          );
        }}
      >
        <TabPanels>
          <TabPanel padding={0}>
            <Weeks slugs={slugs} />
          </TabPanel>
          <TabPanel padding={0}>
            <Months monthChangelogsMap={changelogsMap.months} />
          </TabPanel>
          <TabPanel padding={0}>
            <Years yearChangelogsMap={changelogsMap.years} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
}
