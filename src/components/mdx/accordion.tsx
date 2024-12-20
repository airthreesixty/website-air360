// 'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const MdxAccordion: React.FC<AccordionProps> = ({ title, children }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="bg-white border-l-[5px] border-[1px] border-l-primary-600 px-5 rounded-lg shadow-sm mb-5"
    >
      <AccordionItem value="item-1" className="border-none ">
        <AccordionTrigger className="text-black-600 text-left font-semibold transition-all text-lg lg:text-xl py-5 no-underline hover:no-underline">
          {title}
        </AccordionTrigger>
        <AccordionContent className="prose text-gray-450">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MdxAccordion;
