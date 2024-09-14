import { useState } from "react";
import useTheme from "../hooks/useTheme";
import useScrollHide from "../hooks/useScrollHide";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import VlogoLight from "../assets/svgs/V-light.svg";
import VLogoDark from "../assets/svgs/V-dark.svg";
import MenuButton from "../components/MenuButton";

type Link = {
  name: string;
  href: string;
};

type SmallNavProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const links: Link[] = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const hidden = useScrollHide(150);

  return (
    <div
      className={`sticky top-0 z-10 border-b border-blue-600/30 bg-zinc-100 px-8 backdrop-blur-0 transition dark:border-violet-600/30 dark:bg-zinc-900 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <header className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between">
        <a className="flex items-center gap-x-2" href="/">
          <img
            src={VLogoDark}
            className={`h-8 w-auto max-w-full ${theme === "light" ? "block" : "hidden"}`}
            alt="Viads Dark Logo"
          />
          <img
            src={VlogoLight}
            className={`h-8 w-auto max-w-full ${theme === "dark" ? "block" : "hidden"}`}
            alt="Viads Light Logo"
          />
          <div className="text-2xl font-bold">Viads</div>
        </a>
        <BigNav />
        <div className="mr-2 flex items-center gap-x-8">
          <button
            onClick={toggleTheme}
            className="rounded-full p-1 transition-all hover:scale-110 hover:bg-blue-600 hover:text-white dark:hover:bg-violet-600"
          >
            {theme === "light" ? <IconMoonStars /> : <IconSun />}
          </button>
          <MenuButton isOpen={isNavbarOpen} setIsOpen={setIsNavbarOpen} />
        </div>
      </header>

      <SmallNav isOpen={isNavbarOpen} setIsOpen={setIsNavbarOpen} />
    </div>
  );
};

const BigNav = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-x-8">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="font-bold transition hover:text-blue-600 dark:hover:text-violet-600"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const SmallNav: React.FC<SmallNavProps> = ({ isOpen, setIsOpen }) => {
  return (
    <nav
      className={`absolute left-0 top-16 z-10 w-full border-b border-blue-600/30 bg-zinc-100 transition md:hidden dark:border-violet-600/30 dark:bg-zinc-900 ${isOpen ? "block" : "hidden"}`}
    >
      <ul className="text-center">
        {links.map((link) => (
          <li
            key={link.name}
            className="py-8 font-bold transition duration-200 hover:bg-blue-600 hover:text-white dark:hover:bg-violet-600"
          >
            <a href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
