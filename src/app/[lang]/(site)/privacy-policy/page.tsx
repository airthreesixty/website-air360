import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { mdxMetadata } from "@/lib/metadata";
import enContent from "./en.mdx";
import jaContent from "./ja.mdx";

interface PageProps {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { frontmatter } = await import(`./${params.lang}.mdx`);
  return mdxMetadata(frontmatter);
}

const Page: React.FC<PageProps> = async ({ params: { lang } }) => {
  try {
    const Content = lang === "en" ? enContent : jaContent;

    return (
      <div className="flex justify-center">
        <div className="prose max-w-screen-md px-6 py-12 lg:px-8 lg:py-16">
          <Content />
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
};

export default Page;
