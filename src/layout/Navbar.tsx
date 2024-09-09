import useTheme from "../hooks/useTheme";
import { IconSun, IconMoonStars, IconFileText } from "@tabler/icons-react";
import VlogoLight from "../assets/V - light.svg";
import VLogoDark from "../assets/V - dark.svg";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex h-16 items-center justify-between border-b border-blue-500/30 bg-zinc-100 px-8 backdrop-blur-0 transition dark:border-violet-600/30 dark:bg-zinc-900">
      <a className="f flex items-center gap-x-2" href="/">
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
      <nav>
        <ul className="flex gap-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition hover:text-blue-600 dark:hover:text-violet-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-x-3">
        <button
          onClick={toggleTheme}
          className="rounded-full p-1 transition-all hover:scale-110 hover:bg-blue-600 hover:text-white dark:hover:bg-violet-600"
        >
          {theme === "light" ? <IconMoonStars /> : <IconSun />}
        </button>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 flex items-center gap-x-2 rounded bg-blue-600 px-4 py-2 text-white transition dark:bg-violet-600 dark:hover:bg-violet-700"
        >
          <IconFileText />
          <span>Resume</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
