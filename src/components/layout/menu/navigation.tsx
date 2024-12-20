"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { useCases } from "./use-cases";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Icon from "@/components/common/icons";
import { SubmenuItem } from "./models";
import { aboutUs } from "./about-us";

export function Navigation() {
  const t = useTranslations("main.menu");
  const [offsetTop, setOffset] = React.useState(0);
  const [menu, setMenuElement] = React.useState<HTMLElement | null>();

  React.useEffect(() => {
    const menuOffsetTop = menu?.getBoundingClientRect().top;
    if (typeof menuOffsetTop === "undefined") return;
    if (offsetTop > menuOffsetTop) {
      menu?.classList.add("menu-expand");
    } else {
      menu?.classList.remove("menu-expand");
    }
  }, [offsetTop, menu]);

  React.useEffect(() => {
    const menu = document.getElementById("menu");
    setMenuElement(menu);
  }, []);

  React.useLayoutEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <NavigationMenu className="relative lg:font-medium lg:gap-x-1 lg:mt-0 lg:p-4 lg:text-base mt-4 pb-2">
      <NavigationMenuList>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>{t("how-it-works")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid md:grid-cols-3 w-[900px] p-4 rounded-[20px] border shadow-lg overflow-hidden bg-popover">
              {product.map((menu) => {
                return (
                  <div key={menu.title}>
                    {menu.title && (
                      <div className="text-left mb-3 text-black-600">
                        <div className="font-bold">{t(menu.title)}</div>
                      </div>
                    )}
                    <ul className="">
                      {menu.items.map((component) => (
                        <ListItem
                          key={component.label}
                          title={t(component.label)}
                          href={component.slug}
                          {...component}
                        >
                          {component.description
                            ? t(component.description)
                            : null}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("use-cases")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-[600px] rounded-[20px] border shadow-lg overflow-hidden bg-popover">
              <div className="text-left mb-3 text-black-600">
                <div className="font-bold">{t("use-cases")}</div>
              </div>
              <div className="grid md:grid-cols-2 ">
                {useCases.map((menu, idx) => {
                  return (
                    <div key={`${idx}`}>
                      <div>
                        <span className="text-sm flex">
                          {menu.title ? t(menu.title) : "\u00A0"}
                        </span>
                      </div>
                      <ul>
                        {menu.items.map((component) => (
                          <ListItem
                            key={component.label}
                            title={t(component.label)}
                            href={component.slug}
                            {...component}
                          >
                            {component.description
                              ? t(component.description)
                              : null}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("about-us")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-[600px] rounded-[20px] border shadow-lg overflow-hidden bg-popover">
              <div className="text-left mb-3 text-black-600">
                <div className="font-bold">{t("about-us")}</div>
              </div>

              <div className="grid  md:grid-cols-2 ">
                {aboutUs.map((menu, idx) => {
                  return (
                    <div key={`${idx}`}>
                      <div>
                        <span className="text-sm flex">
                          {menu.title ? t(menu.title) : "\u00A0"}
                        </span>
                      </div>
                      <ul>
                        {menu.items.map((component) => (
                          <ListItem
                            key={component.label}
                            title={t(component.label)}
                            href={component.slug}
                            {...component}
                          >
                            {component.description
                              ? t(component.description)
                              : null}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href="/manifesto">{t("manifesto")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
        {/* <NavigationMenuItem asChild>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href="/ai">AI</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & SubmenuItem
>(({ className, title, children, iconColor, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "select-none p-3 pl-0 leading-none no-underline outline-none hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center w-64 my-3 py-1.5 rounded-[14px] transition cursor-pointer hover:bg-gray-75",
            className
          )}
          {...props}
        >
          <div className="h-12 w-12 mr-4 flex-shrink-0 rounded-lg flex justify-center items-center">
            <Icon name={props.icon} className={`text-xl w-7 ${iconColor}`} />
          </div>
          <div className="text-left text-sm">
            {title}
            <div className="text-gray-400">{children}</div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

/*
<div className="h-12 w-12 mr-4 flex-shrink-0 rounded-lg flex justify-center items-center" :className="bgColor">
        <fa-icon className="text-lg w-7" :icon="['far', icon]" :className="textColor" />
      </div>
      <div className="text-left text-sm">
        {{ label }}
        <div className="text-gray-400">
          {{ description }}
        </div>
      </div>
*/
