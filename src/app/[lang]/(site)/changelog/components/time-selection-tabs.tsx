"use client";

import { Button, VStack, ButtonGroup } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useTimelineStore from "@/lib/state/use-timeline-store";
import { usePathname, useRouter } from "next/navigation";

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

  const changeTimelineView = (view: "weeks" | "months" | "years") => {
    if (
      (pathname.includes("/page/") || pathname.includes("/years/")) &&
      timeline.view !== view
    ) {
      router.push(`/${lang}/page/0#${view}`);
      timeline.setView(view);
    } else if (timeline.view === view) {
      return window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      if (timeline.view !== view) {
        router.push(`#${view}`);
        timeline.setView(view);
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
    <motion.div>
      <VStack>
        <ButtonGroup
          variant="outline"
          spacing={0}
          padding="5px"
          color="#868E96"
          h="46px"
          width="268px"
          borderRadius="36px"
          border="0px solid #6868F7"
          background="rgba(248, 249, 250, 0.70)"
          backdropFilter="blur(8px)"
          overflow={"hidden"}
          position="relative"
        >
          {buttonGroup.map((view, index) => (
            <Button
              key={view}
              borderRadius="100px"
              height="full"
              border="0px"
              fontSize="14px"
              lineHeight="20px"
              verticalAlign="middle"
              width="full"
              fontWeight="medium"
              style={
                timeline.view === view
                  ? {
                      background: "transparent",
                      color: "#0D131B",
                      fontWeight: "semiBold",
                    }
                  : {}
              }
              // onClick={() => timeline.setView(view)}
              onClick={() => changeTimelineView(view)}
              isActive={timeline.view === view}
              _hover={{
                color: "#0D131B",
              }}
              textTransform="capitalize"
              position="relative"
              _focus={{ boxShadow: "none" }}
            >
              {timeline.view === view && (
                <motion.div
                  layoutId="tab-selector"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#FFFFFF",
                    borderRadius: "9999px",
                    boxShadow: "0px 0.636364px 2.24px rgba(33, 40, 54, 0.16)",
                    zIndex: 5,
                  }}
                  transition={{ type: "linear", duration: 0.3 }}
                />
              )}
              <span style={{ position: "relative", zIndex: 10 }}>{view}</span>
            </Button>
          ))}
        </ButtonGroup>
      </VStack>
    </motion.div>
  );
};

export default TimeSelectionTabs;
