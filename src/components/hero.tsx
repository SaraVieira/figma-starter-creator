export const Hero = () => {
  return (
    <section className="flex items-center justify-center mt-24">
      <div className="grid items-center justify-center skew-y-[-10deg]">
        <h1 className="title order-2 text-red-50 uppercase font-black text-center">
          <span data-text="Figma" className="block relative">
            Figma
          </span>
          <span data-text="Plugins" className="block relative">
            Plugins
          </span>
          <span data-text="Starters" className="block relative">
            Starters
          </span>
        </h1>
      </div>
    </section>
  );
};
