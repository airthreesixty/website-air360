import React from "react";
import "./styles.css";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { SVGProps } from "react";

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
const LogoBrandStellantis = dynamic(
  () => import("/public/logo-brand/stellantis.svg")
);
const LogoBrandPlaybac = dynamic(
  () => import("/public/logo-brand/playbac.svg")
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
  { component: LogoBrandStellantis, scale: 1, width: "w-60" },
  { component: LogoBrandPlaybac, scale: 1, width: "w-40" },
  { component: LogoBrandOlympiqueLyonnais, scale: 1, width: "w-28" },
  { component: LogoBrandPsaBank, scale: 2.7, width: "w-32" },
  { component: LogoBrandMaVilleMonShopping, scale: 1, width: "w-52" },
  { component: LogoBrandAirCaraibes, scale: 0.75, width: "w-52" },
  { component: LogoBrandDubreuil, scale: 1, width: "w-25" },
  { component: LogoBrandProduct, scale: 0.75, width: "w-40" },
];

const HeroSliderCompanies: React.FC = () => {
  return (
    <ul className="autoplay-slider-hero h-15 font-bold">
      {logos.map((logo, index) => (
        <li
          key={index}
          className={cn(
            `flex items-center justify-center slider-company-logos-list-hero`,
            logo.width
          )}
        >
          <React.Suspense fallback={<div>Loading...</div>}>
            <logo.component
              className="h-9 object-contain w-full md:h-10"
              style={{ transform: `scale(${logo.scale})` }}
            />
          </React.Suspense>
        </li>
      ))}
      {logos.map((logo, index) => (
        <li
          key={index + logos.length}
          className={cn(
            `flex items-center justify-center slider-company-logos-list-hero`,
            logo.width
          )}
        >
          <React.Suspense fallback={<div>Loading...</div>}>
            <logo.component
              className="h-9 object-contain w-full md:h-10"
              style={{ transform: `scale(${logo.scale})` }}
            />
          </React.Suspense>
        </li>
      ))}
    </ul>
  );
};

export default HeroSliderCompanies;
