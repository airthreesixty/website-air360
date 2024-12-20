import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ButtonPrimary from "@/components/common/button-primary";

const CtaNew = () => {
  const t = useTranslations("main.cta-new");
  return (
    <section className="bg-white">
      <div className="container pb-16 pt-10">
        <div className="relative overflow-hidden rounded-lg bg-primary-600 shadow-xl md:grid md:grid-cols-2 md:gap-4">
          <div className="px-6 pt-10 pb-12 md:px-12 md:py-12 lg:px-14 lg:py-16 md:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-2xl tracking-wider font-really text-center font-bold text-white md:text-left md:text-3xl lg:text-4xl">
                {t("get-started")}
              </h2>
              <div>
                <p className="mt-4 text-md text-center leading-6 text-white md:text-left lg:text-xl">
                  {t("cta-description")}
                </p>
              </div>

              <ButtonPrimary href="/request-demo" text={t("try-air360")} />
            </div>
          </div>
          <div className="hidden aspect-w-5 aspect-h-3 -mt-6 z-0 md:block md:max-w-[450px] lg:max-w-[580px] xl:max-w-[800px] md:aspect-w-2 md:aspect-h-1 absolute top-0 right-0">
            <Image
              src="/images/cta-image.png"
              width={650 * 1.15}
              height={420 * 1.15}
              className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top md:translate-x-16 md:translate-y-[88px]"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaNew;
