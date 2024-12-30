"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { useEffect, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function Component() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [open, setOpen] = useState(false);

  const t = useTranslations("home.cookie-banner");

  const ONE_DAY_MS = 24 * 60 * 60 * 1000;

  const onAccept = () => {
    setIsAccepted(true);
  };

  const hideBanner = () => {
    localStorage.setItem("bannerClosedTime", new Date().getTime().toString());
    setOpen(false);
  };
  const showBanner = () => {
    setOpen(true);
  };
  const checkBanner = () => {
    const lastClosedTime = localStorage.getItem("bannerClosedTime");

    if (lastClosedTime) {
      const elapsedTime = new Date().getTime() - parseInt(lastClosedTime);

      if (elapsedTime < ONE_DAY_MS) {
        return;
      }
    }
    showBanner();
  };

  const onOpenChange = (isOpen: boolean) => {
    return isOpen ? showBanner() : hideBanner();
  };

  useEffect(() => {
    checkBanner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog open={open} modal={false} onOpenChange={onOpenChange}>
      <DialogContent
        position="br"
        size={"sm"}
        className="w-full py-8 h-[334px] px-4 max-w-[340px] shadow-2xl"
        onEscapeKeyDown={(e) => e.preventDefault()}
        onPointerDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <VisuallyHidden asChild>
          <DialogTitle>Cookies</DialogTitle>
        </VisuallyHidden>

        <div className="space-y-4">
          <div
            className={cn("justify-center mb-2", isAccepted ? "flex mt-2" : "")}
          >
            {!isAccepted ? (
              <ExportedImage
                src={`/cookie.webp`}
                alt="Cookie"
                fill
                className="!w-24 !h-24 !relative m-auto"
              />
            ) : (
              <ExportedImage
                src={`/en/data-collection/cookies.png`}
                alt="Cookie"
                fill
                className="!w-full  !relative m-auto"
              />
            )}
          </div>

          <div
            className={`flex-col items-center justify-center ${
              isAccepted ? "hidden" : "flex"
            }`}
          >
            <div className="text-black-600 font-bold text-2xl mb-1">
              {t("title")}
            </div>
            <p className="text-gray-400 text-center mb-4 text-sm">
              {t("description")}
            </p>
            <Button className="w-full" onClick={onAccept}>
              {t("accept")}
            </Button>
            <Button
              variant="ghost"
              className="w-full mb-1 close-button"
              onClick={hideBanner}
            >
              {t("close")}
            </Button>
          </div>
          <div
            className={`text-center text-black-600 text-xl mt-5 font-bold ${
              isAccepted ? "block" : "hidden"
            }`}
          >
            {t("message")}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
