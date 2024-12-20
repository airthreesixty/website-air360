import { ReactNode } from "react";
import CookieBanner from "@/components/common/cookie-banner";
import Menu from "@/components/layout/menu";
import Footer from "@/components/layout/footer";

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <CookieBanner />
      <Footer />
    </>
  );
}
