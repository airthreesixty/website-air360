import { MdxLayout } from "@/components/layout/mdx-layout";
import { MdxMeta } from "@/lib/models/mdx-meta";
import { getAllChangelogs, getChangelogBySlug } from "@/lib/query-content";
import { allChangelogs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { MainLayout } from "../layout/main-layout";

interface Props {
  params: { slug: string[]; lang: string };
}

export async function generateStaticParams() {
  return allChangelogs.map((changelog) => ({
    slug: changelog.slug.split("/"),
  }));
}

const Page = ({ params }: Props) => {
  console.log(params);
  const content = getChangelogBySlug(params.slug, params.lang);

  if (!content) {
    return null;
  }

  const meta: MdxMeta = {
    slug: content.slug,
    publishedAt: content.publishedAt,
    title: content.title,
    headerImage: content.headerImage,
  };

  const MDXContent = useMDXComponent(content?.body.code ?? "");
  return (
    <MdxLayout meta={meta}>
      <MDXContent />
    </MdxLayout>
  );
};

export default Page;
