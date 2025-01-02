import React from "react";
import "./styles.css";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { SVGProps } from "react";
import LoadingDots from "../LoadingDots";

const LogoBrandClubMed = dynamic(
  () => import("/public/logo-brand/club-med.svg")
);
const LogoBrandVerychic = dynamic(
  () => import("/public/logo-brand/verychic.svg")
);
const LogoBrandOlympiqueLyonnais = dynamic(
  () => import("/public/logo-brand/olympique-lyonnais.svg")
);
const LogoBrandMaVilleMonShopping = dynamic(
  () => import("/public/logo-brand/ma-ville-mon-shopping.svg")
);
const LogoBrandDubreuil = dynamic(
  () => import("/public/logo-brand/dubreuil.svg")
);
const LogoBrandPsaBank = dynamic(
  () => import("/public/logo-brand/psa-bank.svg")
);
const LogoBrandProduct = dynamic(
  () => import("/public/logo-brand/product.svg")
);
const LogoBrandAirCaraibes = dynamic(
  () => import("/public/logo-brand/air-caraibes.svg")
);

const logos: {
  component: React.ComponentType<SVGProps<SVGElement>>;
  scale: number;
  width: string;
}[] = [
  { component: LogoBrandClubMed, scale: 0.8, width: "w-52" },
  { component: LogoBrandVerychic, scale: 0.85, width: "w-52" },
  { component: LogoBrandOlympiqueLyonnais, scale: 1, width: "w-20" },
  { component: LogoBrandMaVilleMonShopping, scale: 1.2, width: "w-52" },
  { component: LogoBrandAirCaraibes, scale: 0.9, width: "w-52" },
  { component: LogoBrandDubreuil, scale: 0.9, width: "w-25" },
  { component: LogoBrandPsaBank, scale: 2.3, width: "w-30" },
  { component: LogoBrandProduct, scale: 0.75, width: "w-40" },
];

const CompanyLogos: React.FC = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-[500px] md:max-w-screen-[560px] lg:max-w-screen-[800px] px-6 lg:px-8">
        <h3 className="text-center text-sm font-bold font-sans2 text-black-600 mb-8 tracking-widest">
          TRUSTED BY
        </h3>
        <ul className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4">
          {logos.map((logo, index) => (
            <li
              key={index}
              className={cn(
                `flex justify-center items-center company-logos-list`
              )}
            >
              <React.Suspense
                fallback={<LoadingDots className="w-6" numDots={3} />}
              >
                <logo.component
                  className="h-7.5 object-contain w-full lg:h-9.5"
                  style={{ transform: `scale(${logo.scale})` }}
                />
              </React.Suspense>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

/*
<section>
    <div class="mx-auto max-w-screen-[500px] md:max-w-screen-[560px] lg:max-w-screen-[800px] px-6 lg:px-8">
      <h3 class="text-center text-sm font-bold font-sans2 text-black-600 mb-8 tracking-widest">
        TRUSTED BY
      </h3>
      <ul
        class="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4"
      >
        <li v-for="(logo, index) in logos" :key="index" class="flex justify-center items-center company-logos-list">
          <component :is="logo.component" class="h-7.5 object-contain w-full lg:h-9.5" :style="`transform: scale(${logo.scale})`" />
        </li>
      </ul>
    </div>
  </section>
*/

export default CompanyLogos;
