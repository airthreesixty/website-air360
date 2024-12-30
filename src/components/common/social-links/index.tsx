"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Icon, { IconName } from "@/components/common/icons";
import CopyLink from "./copy-link";
import { cn } from "@/lib/utils";
import { getBaseUrl } from "@/lib/metadata";
import { useLocale } from "next-intl";

interface ShareSocialProps {
  pathname: string;
  variant: "share" | "follow";
}

const socialMedia: {
  name: string | IconName;
  url?: string;
  shareUrl?: string;
}[] = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/company/air360/",
    shareUrl: "https://www.linkedin.com/sharing/share-offsite/?url=",
  },
  {
    name: "twitter",
    url: "https://twitter.com/weareair360",
    shareUrl: "https://twitter.com/intent/tweet?text=",
  },
  {
    name: "facebook",
    shareUrl: "http://www.facebook.com/share.php?u=",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/weareair360/",
  },
];

const SocialLinks: React.FC<ShareSocialProps> = ({
  pathname,
  variant = "share",
}) => {
  const baserUrl = getBaseUrl();
  const locale = useLocale();
  const url = `${baserUrl}/${locale}${pathname}`;
  const color =
    variant === "share"
      ? "text-primary-600 hover:text-primary-700 hover:bg-gray-100"
      : "text-gray-600 hover:text-gray-800";
  const size = variant === "share" ? "sm" : "icon";
  return (
    <div
      className={cn(
        "flex items-center",
        variant === "follow" && "my-6  md:justify-start md:mt-4 lg:mt-6"
      )}
    >
      {socialMedia
        .filter((s) => (variant === "share" ? s.shareUrl : s.url))
        .map((social) => {
          if (social.name === "instagram" && locale === "ja") {
            social.url = "https://www.instagram.com/weareair360_jp/";
          }
          return (
            <Button
              key={social.name}
              variant="ghost"
              size={size}
              className={cn("transition ease-in-out duration-300", color)}
              asChild
            >
              <a
                href={
                  variant === "share" ? `${social.shareUrl}${url}` : social.url
                }
                className="blog__share-link"
                rel="nofollow noopener"
                target="_blank"
                aria-labelledby={`tooltip-${social.name}`}
              >
                <Icon
                  name={social.name as IconName}
                  prefix="fab"
                  className="fa-xl"
                />
              </a>
            </Button>
          );
        })}

      {variant === "share" && <CopyLink url={url} />}
    </div>
  );
};

export default SocialLinks;
