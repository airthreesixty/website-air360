"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import useTimelineStore from "@/lib/state/use-timeline-store";
import { MainLayout } from "../layout/main-layout";
import Years from "../layout/years";
import Weeks from "../layout/weeks";
import Months from "../layout/months";
import { IAggregatedChangelogs } from "@/lib/models/view";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      switch (hash) {
        case "weeks":
          timeline.setView("weeks");
          break;
        case "months":
          timeline.setView("months");
          break;
        case "years":
          timeline.setView("years");
          break;
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [timeline.view]);

  const handleValueChange = (value: string) => {
    if (value === "weeks" || value === "months" || value === "years") {
      timeline.setView(value);
    }
  };

  return (
    <MainLayout
      page={page}
      itemsPerPage={ITEMS_PER_PAGE}
      totalItems={totalItems}
    >
      <Tabs value={timeline.view} onValueChange={handleValueChange}>
        <TabsContent value="weeks">
          <Weeks slugs={slugs} />
        </TabsContent>
        <TabsContent value="months">
          <Months monthChangelogsMap={changelogsMap.months} />
        </TabsContent>
        <TabsContent value="years">
          <Years yearChangelogsMap={changelogsMap.years} />
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
}
