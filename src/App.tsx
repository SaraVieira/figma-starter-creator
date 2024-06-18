import { z } from "zod";
import { Header } from "./components/header";
import { Button } from "./components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "./components/ui/use-toast";
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

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("HERE");
    toast({
      title: "You submitted the following values:",
      description: <pre>{JSON.stringify(data)}</pre>,
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
            className="w-2/3 space-y-6 mt-12"
          >
            <div className="flex justify-between gap-8">
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
                        className="flex flex-col space-y-1"
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
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </main>
    </div>
  );
}

export default App;
