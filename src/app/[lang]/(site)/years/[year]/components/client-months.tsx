"use client";

import { useEffect, useState } from "react";
import Months from "../../../changelog/layout/months";
import { IAggregatedChangelogs } from "@/lib/models/view";

const MONTHS_PER_RENDER = 12;

export default function ClientMonths({
  initialMonthChangelogsMap,
}: {
  initialMonthChangelogsMap: IAggregatedChangelogs;
  year: string;
}) {
  const [renderedMonths, setRenderedMonths] = useState(0);
  const [monthsToRender, setMonthsToRender] = useState(
    initialMonthChangelogsMap
  );

  useEffect(() => {
    setRenderedMonths((prev) => prev + MONTHS_PER_RENDER);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    const targetElementId = hash.slice(hash.indexOf("#") + 1);

    setTimeout(() => {
      const element = document.getElementById(targetElementId);
      const firstElement = document.querySelector(".timeline-item");

      if (element === firstElement) return;

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 1000);
  }, []);

  useEffect(() => {
    const entries = Object.entries(initialMonthChangelogsMap);
    const limitedEntries = entries.slice(0, renderedMonths);
    const newMonthsToRender = limitedEntries.reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {} as IAggregatedChangelogs);

    setMonthsToRender(newMonthsToRender);
  }, [renderedMonths, initialMonthChangelogsMap]);

  return <Months monthChangelogsMap={monthsToRender} isInfiniteScrollingView />;
}
