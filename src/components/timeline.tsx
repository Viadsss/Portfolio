import { Briefcase, GraduationCap, Github, Youtube, GlobeIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "./ui/badge";

// Types
interface Link {
  type: "website" | "youtube" | "github";
  url: string;
  label: string;
}

export interface TimelineItem {
  id: number;
  image?: string;
  title: string;
  company: string;
  date: string;
  links: Link[];
  bullets: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  type: "experience" | "education";
}

interface TimelineItemProps {
  item: TimelineItem;
  isLast: boolean;
  type: "experience" | "education";
}

// Get icon for link type
function getLinkIcon(type: Link["type"]) {
  switch (type) {
    case "github":
      return Github;
    case "youtube":
      return Youtube;
    case "website":
      return GlobeIcon;
  }
}

// Timeline Item Component
function TimelineItemComponent({ item, isLast, type }: TimelineItemProps) {
  const Icon = type === "experience" ? Briefcase : GraduationCap;

  return (
    <div className="relative flex gap-4 pb-8">
      {/* Timeline line */}
      {!isLast && <div className="bg-border absolute top-10 left-4.75 h-full w-0.5" />}

      {/* Icon/Image */}
      {item.image ? (
        <img
          src={item.image}
          alt={item.company}
          className="border-border bg-background relative z-10 size-12 shrink-0 rounded-full border-2 object-cover"
        />
      ) : (
        <div className="border-border bg-background relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2">
          <Icon className="text-muted-foreground size-6" />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 space-y-1">
        <p className="text-muted-foreground -mb-0.5 text-xs">{item.date}</p>

        <div>
          <h3 className="text-lg font-bold">{item.company}</h3>
          {item.company && <p className="text-muted-foreground text-sm">{item.title}</p>}
        </div>

        {/* Bullets */}
        {item.bullets && item.bullets.length > 0 && (
          <ul className="space-y-1 text-sm">
            {item.bullets.map((bullet, index) => (
              <li key={index} className="flex gap-2 text-pretty">
                <span className="text-primary">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Links */}
        {item.links && item.links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {item.links.map((link, index) => {
              const LinkIcon = getLinkIcon(link.type);
              return (
                <Badge key={index} className="rounded-sm" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="h-3.5 w-3.5" />
                    {link.label}
                  </a>
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export function Timeline({ items, type }: TimelineProps) {
  return (
    <Card className="w-full p-6">
      {items.map((item, index) => (
        <TimelineItemComponent key={item.id} item={item} type={type} isLast={index === items.length - 1} />
      ))}
    </Card>
  );
}
