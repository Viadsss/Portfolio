import { NavigationLink } from "./navigation-link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="bg-background/75 sticky top-0 z-50 backdrop-blur-sm">
      <div className="scroll-x mx-auto flex max-w-3xl items-center justify-between px-8 py-6">
        <nav className="hidden sm:block">
          <NavigationLink size="default" to="/">
            home
          </NavigationLink>
          <NavigationLink size="default" to="/projects">
            projects
          </NavigationLink>
          <NavigationLink size="default" to="/about">
            about
          </NavigationLink>
        </nav>
        <nav className="block sm:hidden">
          <NavigationLink size="sm" to="/">
            home
          </NavigationLink>
          <NavigationLink size="sm" to="/projects">
            projects
          </NavigationLink>
          <NavigationLink size="sm" to="/about">
            about
          </NavigationLink>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
