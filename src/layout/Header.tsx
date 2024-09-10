import useTheme from "../hooks/useTheme";
import useScrollHide from "../hooks/useScrollHide";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import VlogoLight from "../assets/V - light.svg";
import VLogoDark from "../assets/V - dark.svg";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const hidden = useScrollHide(150);

  return (
    <>
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
          <div className="mr-2 flex items-center gap-x-8">
            <button
              onClick={toggleTheme}
              className="rounded-full p-1 transition-all hover:scale-110 hover:bg-blue-600 hover:text-white dark:hover:bg-violet-600"
            >
              {theme === "light" ? <IconMoonStars /> : <IconSun />}
            </button>
            <button
              className="relative h-8 w-8 md:hidden"
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            >
              <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
                {/* Top line */}
                <span
                  className={`absolute block h-0.5 w-5 transform bg-current transition ${isNavbarOpen ? "rotate-45" : "-translate-y-1.5"}`}
                ></span>
                {/* Middle line */}
                <span
                  className={`d absolute block h-0.5 w-5 transform bg-current transition ${isNavbarOpen ? "opacity-0" : ""}`}
                ></span>
                {/* Bottom line */}
                <span
                  className={`absolute block h-0.5 w-5 transform bg-current transition ${isNavbarOpen ? "-rotate-45" : "translate-y-1.5"}`}
                ></span>
              </div>
            </button>
          </div>
        </header>

        <nav
          className={`absolute left-0 top-16 z-10 w-full border-b border-blue-600/30 bg-zinc-100 transition md:hidden dark:border-violet-600/30 dark:bg-zinc-900 ${isNavbarOpen ? "block" : "hidden"}`}
        >
          <ul className="text-center">
            {links.map((link) => (
              <li
                key={link.name}
                className="py-8 font-bold transition duration-200 hover:bg-blue-600 hover:text-white dark:hover:bg-violet-600"
                onClick={() => setIsNavbarOpen(false)}
              >
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
