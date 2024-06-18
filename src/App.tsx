import { z } from "zod";
import { Header } from "./components/header";
import { Button } from "./components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "./components/ui/use-toast";
import { saveAs } from "file-saver";
import slugify from "slugify";
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

const FormSchema = z.object({
  framework: z.enum(["none", "react", "vue"], {
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
    const name = slugify(data.name);
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
    <div className="min-h-screen">
      <Toaster />
      <Header />
      <main className="container m-auto mt-12">
        <section className="header">
          <div className="title-wrapper">
            <h1 className="sweet-title">
              <span data-text="Figma" className="left-3">
                Figma
              </span>
              <span data-text="Plugins">Plugins</span>
            </h1>
            <span className="top-title">So you want to make</span>
            <span className="bottom-title">You came to the right place!</span>
          </div>
        </section>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6 mx-auto mt-12"
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
                            <RadioGroupItem value="none" />
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
            <Button type="submit" className="w-full">
              Download Zip
            </Button>
          </form>
        </Form>
      </main>
    </div>
  );
}

export default App;
