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
      className="bg-white px-5 mb-5 border-t border-t-1 border-gray-100"
    >
      <AccordionItem value="item-1" className="border-none">
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
