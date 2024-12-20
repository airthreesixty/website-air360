"use client";
import React, { useState, useCallback } from "react";
import ItemBlock from "./item-block";
import SubItems from "./sub-items";
import Items from "./items";
import { Link, Pathnames } from "@/i18n/routing";
import ButtonCta from "@/components/ui/button-cta";
import { Button } from "@/components/ui/button";
import { useCasesMobile } from "../menu/use-cases";
import { useTranslations } from "next-intl";
import { SheetTrigger } from "@/components/ui/sheet";
import { aboutUsMobile } from "../menu/about-us";

interface ShowState {
  aboutUs: boolean;
  usecase: boolean;
}

const ItemBlocks: React.FC = () => {
  const [show, setShow] = useState<ShowState>({
    aboutUs: false,
    usecase: false,
  });
  const t = useTranslations("main.menu");

  const onToggle = useCallback((item: keyof ShowState) => {
    setShow((prevShow) => ({ ...prevShow, [item]: !prevShow[item] }));
  }, []);

  return (
    <ul className="p-6">
      <ItemBlock title={t("use-cases")} onToggle={() => onToggle("usecase")}>
        {show.usecase &&
          useCasesMobile.map((menu, idx) => {
            return (
              <SubItems
                key={`${menu.title}-${idx}`}
                title={menu.title ? t(menu.title) : undefined}
              >
                {menu.items.map((component, index) => (
                  <Items
                    key={`${component.label}-${index}`}
                    textColor={component.iconColor}
                    slug={component.slug}
                    icon={component.icon}
                    text={t(component.label)}
                  />
                ))}
              </SubItems>
            );
          })}
      </ItemBlock>
      <ItemBlock title={t("about-us")} onToggle={() => onToggle("aboutUs")}>
        {show.aboutUs &&
          aboutUsMobile.map((menu, idx) => {
            return (
              <SubItems
                key={`${menu.title}-${idx}`}
                title={menu.title ? t(menu.title) : undefined}
              >
                {menu.items.map((component, index) => (
                  <Items
                    key={`${component.label}-${index}`}
                    textColor={component.iconColor}
                    slug={component.slug}
                    icon={component.icon}
                    text={t(component.label)}
                  />
                ))}
              </SubItems>
            );
          })}
      </ItemBlock>
      <li className="mb-3 mt-8">
        <SheetTrigger asChild>
          <Link href="/request-demo">
            <ButtonCta>Contact sales</ButtonCta>
          </Link>
        </SheetTrigger>
      </li>
      <li className="mb-3">
        <SheetTrigger className="!flex w-full">
          <Button variant="outlineGradient" className="!flex w-full" asChild>
            <Link
              href={process.env.NEXT_PUBLIC_APP_URL as Pathnames}
              target="_blank"
            >
              Login
            </Link>
          </Button>
        </SheetTrigger>
      </li>
    </ul>
  );
};

export default ItemBlocks;
