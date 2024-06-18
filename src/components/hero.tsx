export const Hero = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="grid items-center justify-center skew-y-[-10deg]">
        <h1 className="title order-2 text-red-50 uppercase font-black text-center">
          <span data-text="Figma" className="block relative">
            Figma
          </span>
          <span data-text="Plugins" className="block relative">
            Plugins
          </span>
        </h1>
        <span className="top-title text-foreground order-1 text-center mb-4 pr-8 block">
          So you want to make
        </span>
      </div>
    </section>
  );
};
