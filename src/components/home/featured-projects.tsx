import { Link } from "react-router";
import { ArrowRight, Github, GlobeIcon, Youtube } from "lucide-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useEffect, useRef, useState } from "react";

export interface Project {
  title: string;
  description: string;
  image: () => Promise<{ default: string }>;
  date: string;
  badges: string[];
  links: Link[];
}

interface Link {
  type: "website" | "youtube" | "github";
  url: string;
  label: string;
}

const getLinkIcon = (type: Link["type"]) => {
  switch (type) {
    case "github":
      return Github;
    case "youtube":
      return Youtube;
    case "website":
      return GlobeIcon;
  }
};

export function ProjectCard({ project }: { project: Project }) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    project
      .image()
      .then((module) => {
        if (isMounted) {
          setImageSrc(module.default);
        }
      })
      .catch((error) => {
        console.error("Failed to load image:", error);
        if (isMounted) {
          setImageSrc("");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [project]);

  return (
    <div className="bg-card text-card-foreground flex h-full flex-col rounded-xl border shadow">
      <div className="flex flex-col space-y-1.5 p-6">
        {imageSrc === null ? (
          <div className="bg-muted h-40 w-full animate-pulse rounded-lg" />
        ) : (
          <PhotoView src={imageSrc}>
            <img
              className="h-40 w-full cursor-pointer object-cover object-top drop-shadow-lg transition-opacity hover:opacity-90"
              src={imageSrc}
              alt={project.title}
              loading="lazy"
            />
          </PhotoView>
        )}
      </div>
      <div className="flex flex-col gap-2 p-6 pt-0">
        <h3 className="leading-none font-semibold tracking-tight">{project.title}</h3>
        <p className="text-muted-foreground -mt-1 font-mono text-[11px]">{project.date}</p>
        <div className="prose dark:prose-invert text-card-foreground max-w-full font-sans text-sm text-justify">
          <p>{project.description}</p>
        </div>
      </div>
      <div className="flex h-full flex-col items-start justify-end gap-4 p-6 pt-0">
        <div className="mt-1 flex flex-wrap gap-1">
          {project.badges.map((badge, index) => (
            <div
              key={index}
              className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-3 py-0 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              {badge}
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap items-start gap-1">
          {project.links.map((link, index) => {
            const LinkIcon = getLinkIcon(link.type);
            return (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link.url}
                key={index}
                className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 items-center gap-2 rounded-md border border-transparent px-2 py-1 text-[10px] font-medium shadow transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <LinkIcon className="size-3.5" />
                  {link.label}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const featuredCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleIndexChange = (index: number) => {
    featuredCardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      <div className="flex w-full items-end justify-between gap-2">
        <h2 className="font-serif text-2xl sm:text-3xl">featured projects.</h2>
        <Link to="/projects" className="flex items-center gap-1 font-light opacity-60 transition hover:opacity-100">
          <span>view more</span>
          <ArrowRight size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <PhotoProvider onIndexChange={handleIndexChange}>
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                featuredCardRefs.current[index] = el;
              }}
            >
              <ProjectCard key={index} project={project} />
            </div>
          ))}
        </PhotoProvider>
      </div>
    </>
  );
}
