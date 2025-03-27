import { MdxLayout } from "@/components/layout/mdx-layout";
import { components } from "@/components/mdx";
import { mdxMetadata } from "@/lib/metadata";
import { MdxMeta } from "@/lib/models/mdx-meta";
import { getChangelogBySlug } from "@/lib/query-content";
import { allChangelogs } from "contentlayer/generated";
import { Metadata, NextPage } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string[]; lang: string };
}

export async function generateStaticParams() {
  return allChangelogs.map((changelog) => ({
    slug: changelog.slug.split("/"),
  }));
}

export async function generateMetadata({
  params: { lang, slug },
}: Props): Promise<Metadata> {
  const changelog = getChangelogBySlug(slug, lang)!;
  if (!changelog) return notFound();
  const { title, headerImage, description } = changelog;
  const meta = { title, headerImage, description };
  return mdxMetadata(meta);
}

const Page: NextPage<Props> = ({ params }: Props) => {
  const content = getChangelogBySlug(params.slug, params.lang);
  const MDXContent = useMDXComponent(content?.body.code ?? "");

  if (!content) {
    return null;
  }

  const meta: MdxMeta = {
    slug: content.slug,
    publishedAt: content.publishedAt,
    title: content.title,
    headerImage: content.headerImage,
  };

  return (
    <MdxLayout meta={meta}>
      <MDXContent components={components} />
    </MdxLayout>
  );
};

export default Page;
