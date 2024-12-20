import { ReactNode } from "react";
import CookieBanner from "@/components/common/cookie-banner";
import Footer from "@/components/layout/footer";

type Props = {
  children?: ReactNode;
};

export default function RequestDemoLayout({ children }: Props) {
  return (
    <>
      <main>{children}</main>
      <CookieBanner />
      <Footer />
    </>
  );
}
