import { Link } from "react-router";
import { ArrowRight, Github, GlobeIcon, Youtube } from "lucide-react";
import ImgTest2 from "@/assets/images/swipe-cards/img-test-2.jpg";
import { PhotoProvider, PhotoView } from "react-photo-view";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  badges: string[];
  links: Link[];
}

interface Link {
  type: "website" | "youtube" | "github";
  url: string;
  label: string;
}

const project: Project = {
  id: 1,
  title: "Sample Project",
  description: "This is a sample project description. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: ImgTest2,
  date: "Jan 2024",
  badges: ["react", "tailwindcss", "nextjs"],
  links: [
    { type: "website", url: "https://example.com", label: "Website" },
    { type: "github", url: "https://github.com/example", label: "GitHub" },
    { type: "youtube", url: "https://youtube.com", label: "YouTube" },
  ],
};

const project2: Project = {
  id: 2,
  title: "Sample Project 2",
  description:
    "This is a sample project description. lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a sample project description. lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a sample project description. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  image: ImgTest2,
  date: "Jan 2024",
  badges: ["react", "tailwindcss", "nextjs"],
  links: [
    { type: "website", url: "https://example.com", label: "Website" },
    { type: "github", url: "https://github.com/example", label: "GitHub" },
    { type: "youtube", url: "https://youtube.com", label: "YouTube" },
  ],
};

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

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-card text-card-foreground flex flex-col rounded-xl border shadow">
      <div className="flex flex-col space-y-1.5 p-6">
        <PhotoProvider>
          <PhotoView src={project.image}>
            <img
              className="h-40 w-full cursor-pointer object-cover object-top transition-opacity hover:opacity-90"
              src={project.image}
              alt={project.title}
            />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div className="flex flex-col gap-2 p-6 pt-0">
        <h3 className="leading-none font-semibold tracking-tight">{project.title}</h3>
        <div className="prose text-muted-foreground dark:prose-invert max-w-full font-sans text-xs text-pretty">
          <p>{project.description}</p>
        </div>
      </div>
      <div className="flex h-full flex-col items-start justify-between gap-4 p-6 pt-0">
        <div className="mt-2 flex flex-wrap gap-1">
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
                href={link.url}
                key={index}
                className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 items-center gap-2 rounded-md border border-transparent px-2 py-1 text-[10px] font-semibold shadow transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
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

export function FeaturedProjects() {
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
        <ProjectCard project={project} />
        <ProjectCard project={project2} />
      </div>
    </>
  );
}
