import React from "react";
import { notFound } from "next/navigation";
import LetterTemplateLayout from "@/components/mdx/letter-template-layout";
import type { Metadata } from "next";
import { mdxMetadata } from "@/lib/metadata";
import { getMdxContent } from "@/lib/utils";

interface PageProps {
  params: { lang: string };
}

export async function generateMetadata({
  params: { lang },
}: PageProps): Promise<Metadata> {
  const { frontmatter } = await getMdxContent(lang, "ai");
  return mdxMetadata(frontmatter);
}

const Page: React.FC<PageProps> = async ({ params: { lang } }) => {
  try {
    const { Content, frontmatter } = await getMdxContent(lang, "ai");
    return (
      <LetterTemplateLayout title={frontmatter.title} childClassName="prose-lg">
        <Content />
      </LetterTemplateLayout>
    );
  } catch (error) {
    notFound();
  }
};

export default Page;
