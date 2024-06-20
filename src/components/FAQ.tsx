import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

export const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="mt-12">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is this?</AccordionTrigger>
        <AccordionContent>
          This website offers an easy way to download starters to make your
          dream figma plugin without messing with config files
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What comes bundled?</AccordionTrigger>
        <AccordionContent>
          All projects come with all the config created and also bring in{" "}
          <a href="https://tailwindcss.com/" target="_blank">
            tailwind
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/thomas-lowry/figma-plugin-ds"
            target="_blank"
          >
            Figma Plugin Design System
          </a>{" "}
          that is a lightweight UI library for creating Figma plugins. In terms
          of functionality, it's a small plugin that creates rectangles.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I run this?</AccordionTrigger>
        <AccordionContent>
          You will need to have node installed, after that in your terminal{" "}
          <code>cd</code> into the folder and run{" "}
          <code>npm i && npm run dev</code> to start the server.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
