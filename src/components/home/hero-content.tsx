import { FileDown, type LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

interface HeroHeaderProps {
  name: string;
  age: number;
  role: string;
  location: string;
  flag: string;
}

interface HeroDescriptionProps {
  description: string;
}

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

interface SocialLinksProps {
  socials: SocialLink[];
}

interface CTASectionProps {
  resumeUrl: string;
  socials: SocialLink[];
}

export interface Profile {
  name: string;
  age: number;
  role: string;
  location: string;
  flag: string;
  description: string;
  resumeUrl: string;
  socials: SocialLink[];
}

interface HeroContentProps {
  profile: Profile;
}

function HeroHeader({ name, age, role, location, flag }: HeroHeaderProps) {
  return (
    <div>
      <h1 className="text-center font-serif text-4xl sm:text-5xl md:text-start">{name} 👋</h1>
      <p className="mt-2 flex flex-wrap items-center justify-center text-sm font-medium whitespace-nowrap sm:text-base md:justify-start">
        {age} yo {role} from{" "}
        <span className="pl-1">
          {location} <span className="ml-1">{flag}</span>
        </span>
      </p>
    </div>
  );
}

function HeroDescription({ description }: HeroDescriptionProps) {
  return <p className="mt-4 max-w-sm text-center text-sm text-balance sm:text-base md:text-start">{description}</p>;
}

function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="hover:text-primary opacity-70 transition hover:opacity-100"
    >
      <span className="sr-only">{label}</span>
      <Icon size={20} strokeWidth={2.25} />
    </a>
  );
}

function SocialLinks({ socials }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-6">
      {socials.map((social) => (
        <SocialLink key={social.label} {...social} />
      ))}
    </div>
  );
}

function CTASection({ resumeUrl, socials }: CTASectionProps) {
  return (
    <section className="mt-6 flex flex-wrap items-center justify-center gap-6 md:justify-start">
      <Button asChild className="px-6!">
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          Resume
          <FileDown className="ml-1 hover:animate-bounce" size={16} />
        </a>
      </Button>
      <SocialLinks socials={socials} />
    </section>
  );
}

export function HeroContent({ profile }: HeroContentProps) {
  return (
    <div>
      <HeroHeader
        name={profile.name}
        age={profile.age}
        role={profile.role}
        location={profile.location}
        flag={profile.flag}
      />
      <HeroDescription description={profile.description} />
      <CTASection resumeUrl={profile.resumeUrl} socials={profile.socials} />
    </div>
  );
}
