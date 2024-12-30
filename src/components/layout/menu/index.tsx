"use client";

import { Link, Pathnames } from "@/i18n/routing";
import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "@/components/common/local-switcher";
import MobileMenu from "@/components/layout/mobile-menu";

import "./styles.css";
import { Navigation } from "./navigation";
import ButtonCta from "@/components/ui/button-cta";
import { useTranslations } from "next-intl";

export default function Component() {
  const t = useTranslations("main.menu");
  return (
    <>
      <div className="lg:mt-10" />
      <div
        id="menu"
        className="border-b lg:border lg:border-gray-200 lg:max-w-[990px] lg:mx-auto lg:py-0 lg:rounded-[20px] lg:shadow-menu sticky top-0 z-60"
      >
        <div className="bg-white py-4 top-0 z-10 rounded-[20px]">
          <div className="relative flex flex-wrap items-center justify-between px-2">
            <div className="w-full flex items-center space-x-4">
              <MobileMenu />
              <header
                role="banner"
                className="w-full flex items-center justify-between"
              >
                <Link
                  href={"/"}
                  className="h-6 w-auto sm:h-7 xl:h-8 filter homepage-logo"
                >
                  <span className="sr-only">Air360</span>
                  <Logo isDark />
                </Link>
                <div
                  id="navbar-default"
                  className="w-full hidden lg:flex items-center justify-between"
                  arial-label="Main menu"
                >
                  <Navigation />
                  <div className="flex gap-x-4 mr-5 items-center">
                    <Link
                      href={process.env.NEXT_PUBLIC_APP_URL as Pathnames}
                      target="_blank"
                    >
                      <Button
                        className="hover:opacity-75"
                        variant="outlineGradient"
                      >
                        {t("login")}
                      </Button>
                    </Link>
                    <div className="pt-2 lg:pt-0">
                      <Link href={"/request-demo"}>
                        <ButtonCta>{t("contact-sales")}</ButtonCta>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="local-switcher-hover-card relative order-1 cursor-pointer lg:order-3 lg:pr-4">
                  <LocaleSwitcher />
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
