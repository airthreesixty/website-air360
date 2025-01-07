"use client";

import "@/app/globals.css";
import { Button } from "@/components/ui/button";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import enMessage from "@/messages/en/main.json";
import jaMessage from "@/messages/ja/main.json";

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  const pathname = usePathname();
  const lang = pathname?.split("/")[1] || "en";
  const localeMessages = lang === "en" ? enMessage : jaMessage;
  const toHome = lang === "en" ? "en" : "ja";

  return (
    <html>
      <body>
        <div className="container py-8 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <div className="flex justify-center w-24 lg:w-44 relative m-auto">
              <ExportedImage
                src={`/favicon2.webp`}
                alt="Mochi"
                fill
                className="!w-auto !relative"
                placeholder="empty"
              />
            </div>
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              {localeMessages.main.errorStatusCode}
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              {localeMessages.main.errorStatusMessage}: {pathname}
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              {localeMessages.main["error-message"]}
            </p>
            <Link href={`/${toHome}`}>
              <Button>{localeMessages.main.home}</Button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
