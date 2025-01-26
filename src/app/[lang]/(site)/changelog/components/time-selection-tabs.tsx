"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useTimelineStore from "@/lib/state/use-timeline-store";

const TimeSelectionTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const buttonGroup: Array<"weeks" | "months" | "years"> = [
    "weeks",
    "months",
    "years",
  ];
  const lang = pathname.split("/")[1];

  const timeline = useTimelineStore();
  const [selectedView, setSelectedView] = useState(timeline.view);

  const changeTimelineView = (view: "weeks" | "months" | "years") => {
    if (
      (pathname.includes("/page/") || pathname.includes("/years/")) &&
      timeline.view !== view
    ) {
      router.push(`/${lang}/page/0#${view}`);
      timeline.setView(view);
      setSelectedView(view);
    } else if (timeline.view === view) {
      return window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      if (timeline.view !== view) {
        router.push(`#${view}`);
        timeline.setView(view);
        setSelectedView(view);
      }
    }

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-center space-x-1 p-1 h-[46px] w-[268px] rounded-full border border-transparent bg-white/70 backdrop-blur-md relative shadow">
        {buttonGroup.map((view) => (
          <button
            key={view}
            className={`relative flex-1 py-2 text-sm font-medium capitalize transition-colors rounded-full ${
              selectedView === view
                ? "text-black font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => changeTimelineView(view)}
          >
            {selectedView === view && (
              <motion.div
                layoutId="tab-selector"
                className="absolute inset-0 bg-white rounded-full shadow-md"
                transition={{ type: "linear", duration: 0.3 }}
              />
            )}
            <span className="relative z-10">{view}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSelectionTabs;
