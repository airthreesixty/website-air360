import { Link } from "@/i18n/routing";
import React from "react";
import LocaleSwitcher from "@/components/common/local-switcher";
import { useTranslations } from "next-intl";
import Logo from "@/components/common/logo";
import SocialLinks from "@/components/common/social-links";

const Footer: React.FC = () => {
  const t = useTranslations("main");
  return (
    <footer className="border-gray-200 border-t pt-8 pb-12">
      <div className="container md:flex md:justify-between">
        <div className="mb-6 md:mb-0 mr-4">
          <Link href="/">
            <span className="sr-only">Air360</span>
            <Logo isDark />
          </Link>
          <SocialLinks pathname={""} variant="follow" />
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-3 xl:ml-8">
          {/* <div>
            <div className="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white">
              {t("menu.company")}
            </div>
            <ul className="text-black-600">
              <li className="mb-4">
                <Link href="/about">
                  <div className="hover:underline">{t("menu.about.title")}</div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/privacy-policy">
                  <div className="hover:underline">
                    {t("menu.privacy-policy.title")}
                  </div>
                </Link>
              </li>
            </ul>
          </div> */}
          <div>
            <div className="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white">
              {t("menu.use-cases")}
            </div>
            <ul className="text-black-600">
              <li className="mb-4">
                <Link href="/use-cases/e-commerce">
                  <div className="hover:underline">
                    {t("menu.subMenu.e-commerce")}
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/use-cases/luxury-brands">
                  <div className="hover:underline">
                    {t("menu.subMenu.luxury-brands")}
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/use-cases/airlines">
                  <div className="hover:underline">
                    {t("menu.subMenu.airlines")}
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/use-cases/sport-team">
                  <div className="hover:underline">
                    {t("menu.subMenu.sport-team")}
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/use-cases/hotels">
                  <div className="hover:underline">
                    {t("menu.subMenu.hotels")}
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/use-cases/banks-and-insurance">
                  <div className="hover:underline">
                    {t("menu.subMenu.insurance")}
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/use-cases/gaming">
                  <div className="hover:underline">
                    {t("menu.subMenu.gaming")}
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/use-cases/multi-brand-companies">
                  <div className="hover:underline">
                    {t("menu.subMenu.multi-brand-companies")}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <div className="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white">
              {t("menu.product")}
            </div>
            <ul className="text-black-600">
              <li className="mb-4">
                <Link href="/product/website-analysis">
                  <div className="hover:underline">
                    {t("menu.subMenu.website-analysis")}
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/product/app-analysis">
                  <div className="hover:underline">
                    {t("menu.subMenu.app-analysis")}
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/product/capabilities/data-collection">
                  <div className="hover:underline">
                    {t("menu.subMenu.data-collection")}
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/product/capabilities/events-segments">
                  <div className="hover:underline">
                    {t("menu.subMenu.events-segments")}
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/product/capabilities/data-analysis">
                  <div className="hover:underline">
                    {t("menu.subMenu.data-analysis")}
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/product/capabilities/data-activation">
                  <div className="hover:underline">
                    {t("menu.subMenu.data-activation")}
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/product/security-compliance">
                  <div className="hover:underline">
                    {t("menu.security.title")}
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/product/data-integrations">
                  <div className="hover:underline">
                    {t("menu.subMenu.data-integrations")}
                  </div>
                </Link>
              </li>
            </ul>
          </div> */}
          <div>
            <div className="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white">
              {t("menu.about-us")}
            </div>
            <ul className="text-black-600">
              <li className="mb-4">
                <Link href="/about">
                  <div className="hover:underline">{t("menu.about.title")}</div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/manifesto">
                  <div className="hover:underline">{t("menu.manifesto")}</div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/values">
                  <div className="hover:underline">{t("menu.our-values")}</div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/ai">
                  <div className="hover:underline">{t("menu.our-stance")}</div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/privacy-policy">
                  <div className="hover:underline">
                    {t("menu.privacy-policy.title")}
                  </div>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/product/security-compliance">
                  <div className="hover:underline">
                    {t("menu.subMenu.security-compliance")}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white">
              {t("menu.inspiration")}
            </div>
            <ul className="text-black-600">
              <li className="mb-4">
                <Link href="/blog">
                  <div className="hover:underline">{t("menu.blog")}</div>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white">
              {t("menu.help")}
            </div>
            <ul className="text-black-600">
              <li className="mb-4">
                <Link href="/contact">
                  <div className="hover:underline">{t("menu.contact-us")}</div>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-6 text-sm font-semibold text-black-600 uppercase dark:text-white">
              {t("menu.language")}
            </div>
            <ul className="text-gray-600">
              <li className="mb-4">
                <LocaleSwitcher footer />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
