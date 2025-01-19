import { MdxLayout, MdxLayoutProps } from "@/components/layout/mdx-layout";
import { getAllChangelogs } from "@/lib/query-content";
import { allChangelogs } from "contentlayer/generated";

export async function generateStaticParams() {
  return allChangelogs.map((changelog) => ({
    slug: changelog.slug,
  }));
}

// export async function getStaticProps({
//   params,
// }: {
//   params: { slug: string; lang: string };
// }) {
//   const changelogs = getAllChangelogs(params.lang);
//   const meta = {
//     slug: params.slug,
//     publishedAt: changelogs.find((changelog) => changelog.slug === params.slug)
//       ?.publishedAt,
//     title: changelogs.find((changelog) => changelog.slug === params.slug)
//       ?.title,
//     headerImage: changelogs.find((changelog) => changelog.slug === params.slug)
//       ?.headerImage,
//   };
//   console.log(meta);

//   return {
//     props: {
//       meta,
//     },
//   };
// }

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) => {
  console.log("params", params);
  //   console.log("children", children);
  //   console.log("lang", lang);
  //   console.log("slug", slug);
  //   const changelogs = getAllChangelogs(lang);
  //   const meta = {
  //     slug: slug,
  //     publishedAt: changelogs.find((changelog) => changelog.slug === slug)
  //       ?.publishedAt,
  //     title: changelogs.find((changelog) => changelog.slug === slug)?.title,
  //     headerImage: changelogs.find((changelog) => changelog.slug === slug)
  //       ?.headerImage,
  //   };
  //   console.log(meta);
  return <>{children}</>;
};

export default Layout;
