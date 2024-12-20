import PageLayout from "@/components/layout/page-layout";
import Home from "./(site)/home/main";

// export async function generateStaticParams() {
//   return ['en', 'ja'].map((lang) => ({
//     lang
//   }));
// }

export default function Page({ params }: { params: { lang: string } }) {
  return (
    <PageLayout title={"Home"}>
      <Home lang={params.lang} />
    </PageLayout>
  );
}
