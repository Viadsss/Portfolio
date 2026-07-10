import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const footerLinks: SocialLinkProps[] = [
  { href: "https://linkedin.com/in/jpviado", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/Viadsss", icon: Github, label: "GitHub" },
  { href: "mailto:johnpaulviado20@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  const { hostname } = window.location;

  return (
    <footer className="w-full pt-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-8 pb-6 sm:flex-row-reverse sm:justify-between">
        <section className="flex gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <span className="sr-only">{link.label}</span>
              <link.icon className="size-5" strokeWidth={2.25} />
            </a>
          ))}
        </section>
        <section className="mt-8 text-center sm:mt-0 sm:text-left">
          <p className="text-muted-foreground text-xs">
            © 2025{" "}
            <Button variant="link" size="sm" asChild>
              <Link to="/">{hostname}</Link>
            </Button>
          </p>
        </section>
      </div>
    </footer>
  );
}
