import { MdxLayout } from "@/components/layout/mdx-layout";
import { MdxMeta } from "@/lib/models/mdx-meta";
import { getAllChangelogs } from "@/lib/query-content";

interface Props {
  params: { slug: string; lang: string };
}

const Page = ({ params }: Props) => {
  const changelogs = getAllChangelogs(params.lang);
  const meta: MdxMeta = {
    slug: params.slug,
    publishedAt: changelogs.find((changelog) => changelog.slug === params.slug)
      ?.publishedAt!,
    title: changelogs.find((changelog) => changelog.slug === params.slug)
      ?.title!,
    headerImage: changelogs.find((changelog) => changelog.slug === params.slug)
      ?.headerImage!,
  };
  console.log(meta);
  return <MdxLayout meta={meta}>hello</MdxLayout>;
};

export default Page;
