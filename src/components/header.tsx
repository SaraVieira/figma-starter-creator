import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  return (
    <header className="container m-auto py-4 justify-between flex items-center">
      <h1>Title</h1>
      <ModeToggle />
    </header>
  );
};
