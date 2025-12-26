import { NavigationLink } from "./navigation-link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="bg-background/75 sticky top-0 z-50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-8 py-6">
        <nav>
          <NavigationLink to="/">home</NavigationLink>
          <NavigationLink to="/projects">projects</NavigationLink>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
