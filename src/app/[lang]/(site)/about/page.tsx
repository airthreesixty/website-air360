import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LetterTemplateLayout from "@/components/mdx/letter-template-layout";
import "./styles.css";
import { mdxMetadata } from "@/lib/metadata";
import { getMdxContent } from "@/lib/utils";

interface PageProps {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { frontmatter } = await getMdxContent(params.lang, "about");
  return mdxMetadata(frontmatter);
}

const Page: React.FC<PageProps> = async ({ params: { lang } }) => {
  try {
    const { Content } = await getMdxContent(lang, "about");
    return (
      <LetterTemplateLayout childClassName="!max-w-full">
        <Content />
      </LetterTemplateLayout>
    );
  } catch (error) {
    notFound();
  }
};

export default Page;
