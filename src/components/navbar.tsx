import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";
import { NavbarMenu } from "./navbar-menu";

export const Navbar = () => {
  return (
    <div className={`border-b-2 p-4 flex justify-between items-center`}>
      <nav className={`flex gap-4 items-center`}>
        <NavbarMenu />
        <Link href="/">
          <h1 className="text-xl md:text-2xl">TO-DO</h1>
        </Link>
      </nav>
      <ThemeToggle />
    </div>
  );
};
