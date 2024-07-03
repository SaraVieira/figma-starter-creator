import { z } from "zod";
import { Header } from "./components/header";
import { Button } from "./components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "./components/ui/use-toast";
import { saveAs } from "file-saver";
import slugify from "slugify";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/toaster";
import { createZip } from "./lib/zip";
import { Hero } from "./components/hero";
import { FAQ } from "./components/FAQ";

const FormSchema = z.object({
  framework: z.enum(["vanilla", "react", "vue"], {
    required_error: "You need to select a framework.",
  }),
  name: z.string({
    required_error: "You need to select a framework.",
  }),
});

function App() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const name = slugify(data.name, { lower: true });
    const zip = createZip({
      ...data,
      name,
    });
    const blob = await zip.generateAsync({ type: "blob" });

    saveAs(blob, `${name}.zip`);
    toast({
      title: "Your new zip is ready",
    });
  }
  return (
    <div className="min-h-screen mb-12">
      <Toaster />
      <main className="container m-auto mt-12">
        <Hero />
        <div className="w-2/3 mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" pace-y-6 pt-32"
            >
              <div className="flex justify-center gap-8 items-center">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-3 grow">
                      <FormLabel>What is the name of your plugin?</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="framework"
                  render={({ field }) => (
                    <FormItem className="space-y-3 grow">
                      <FormLabel>What framework do you want to use?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-2"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="react" />
                            </FormControl>
                            <FormLabel className="font-normal">React</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="vue" />
                            </FormControl>
                            <FormLabel className="font-normal">Vue</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="vanilla" />
                            </FormControl>
                            <FormLabel className="font-normal">None</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full mt-8">
                Download Zip
              </Button>
            </form>
          </Form>
          <FAQ />
        </div>
      </main>
      <footer className="text-muted-foreground container mx-auto justify-center flex mt-12 text-sm gap-12">
        <span>
          Made by{" "}
          <a
            href="https://twitter.com/NikkitaFTW"
            target="_blank"
            className="underline"
          >
            @NikkitaFTW
          </a>
        </span>
        <span>
          <a href="https://github.com/SaraVieira/figma-starter-creator">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <title>GitHub</title>
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
