import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  return (
    <header className="container m-auto py-4 justify-end flex items-center">
      <ModeToggle />
    </header>
  );
};
