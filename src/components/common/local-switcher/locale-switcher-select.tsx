"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/routing";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import Icon from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import ExportedImage from "next-image-export-optimizer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  defaultValue: string;
  otherLang: string;
  label: string;
};

export default function LocaleSwitcher({ otherLang }: Props) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [isIPad, setIsIPad] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations("main.LocaleSwitcher");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsIPad(/ipad|macintosh/.test(userAgent) && "ontouchend" in document);
  }, []);

  function onSelected(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  const flagName = otherLang === "en" ? "america" : "japan";

  if (isIPad) {
    return (
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <Icon
                prefix="fas"
                name="earth-america"
                className="fa-lg text-slate-900"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit">
            <Button
              variant="ghost"
              key={otherLang}
              value={otherLang}
              onClick={() => onSelected(otherLang)}
            >
              <ExportedImage
                src={`/flags/${flagName}.svg`}
                alt="Flag"
                fill
                className="!w-6 !h-6 !relative mr-2"
              />
              {t("locale", { locale: otherLang })}
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    );
  }

  return (
    <>
      <div className="hidden lg:block">
        <HoverCard openDelay={200}>
          <HoverCardTrigger asChild>
            <Button variant="ghost" size="icon">
              <Icon
                prefix="fas"
                name="earth-america"
                className="fa-lg text-slate-900"
              />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-fit">
            <Button
              variant="ghost"
              key={otherLang}
              value={otherLang}
              onClick={() => onSelected(otherLang)}
            >
              <ExportedImage
                src={`/flags/${flagName}.svg`}
                alt="Flag"
                fill
                className="!w-6 !h-6 !relative mr-2"
              />
              {t("locale", { locale: otherLang })}
            </Button>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="lg:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <Icon
                prefix="fas"
                name="earth-america"
                className="fa-lg text-slate-900"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit">
            <Button
              variant="ghost"
              key={otherLang}
              value={otherLang}
              onClick={() => onSelected(otherLang)}
            >
              <ExportedImage
                src={`/flags/${flagName}.svg`}
                alt="Flag"
                fill
                className="!w-6 !h-6 !relative mr-2"
              />
              {t("locale", { locale: otherLang })}
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
