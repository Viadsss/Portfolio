import Carousel from "../components/Carousel";
import hidespot1 from "../assets/imgs/hidespot/Hidespot-1.png";
import hidespot2 from "../assets/imgs/hidespot/Hidespot-2.png";
import hidespot3 from "../assets/imgs/hidespot/Hidespot-3.png";
import shopco1 from "../assets/imgs/shop.co/shop.co-1.png";
import shopco2 from "../assets/imgs/shop.co/shop.co-2.png";
import shopco3 from "../assets/imgs/shop.co/shop.co-3.png";
import shopco4 from "../assets/imgs/shop.co/shop.co-4.png";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  techStack: string;
  description: string;
  liveLink: string;
  githubLink: string;
};

const projects: Project[] = [
  {
    title: "HideSpot",
    techStack: "Node.js, Express.js, PostgreSQL, EJS",
    description:
      "An exclusive clubhouse app where members can post anonymously. Inside the club, members can see who posted, while outsiders only see the posts. Admins have the ability to delete posts, and access is controlled by a secret passcode for membership.",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "HideSpot",
    techStack: "Node.js, Express.js, PostgreSQL, EJS",
    description:
      "An exclusive clubhouse app where members can post anonymously. Inside the club, members can see who posted, while outsiders only see the posts. Admins have the ability to delete posts, and access is controlled by a secret passcode for membership.",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "HideSpot",
    techStack: "Node.js, Express.js, PostgreSQL, EJS",
    description:
      "An exclusive clubhouse app where members can post anonymously. Inside the club, members can see who posted, while outsiders only see the posts. Admins have the ability to delete posts, and access is controlled by a secret passcode for membership.",
    liveLink: "#",
    githubLink: "#",
  },
];

const slidesSets = [
  [hidespot1, hidespot2, hidespot3], // Slides for index 0
  [shopco1, shopco2, shopco3, shopco4], // Slides for index 1
  [hidespot1, hidespot3], // Slides for index 2
];

const colorMapping = ["bg-yellow-400/60", "bg-red-400/60", "bg-orange-400/60"];

const Projects = () => {
  const projectParentRef = useRef<HTMLDivElement | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
    if (!projectParentRef.current) return;

    const options = {
      rootMargin: "-50% 0% -50% 0%",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.id);
          console.log(id);
          setActiveProjectIndex(id);
        }
      });
    }, options);

    const children = projectParentRef.current.children;

    for (const child of children) {
      observer.observe(child);
    }
  }, []);

  return (
    <section
      className="h-full border-y-2 border-zinc-900 bg-zinc-100 px-8 backdrop-blur-0 transition dark:border-zinc-100 dark:bg-zinc-900"
      id="projects"
    >
      <div className="mx-auto h-full max-w-screen-2xl py-24 md:px-8 lg:px-32">
        <h1 className="mb-12 text-center text-2xl font-bold text-blue-600 dark:text-violet-400">
          Projects
        </h1>
        <div className="flex lg:gap-x-10">
          <div
            ref={projectParentRef}
            className="space-y-16 pt-8 md:basis-1/2 md:space-y-36 md:pb-60 md:pr-12"
          >
            {projects.map((project, index) => (
              <ProjectCard
                id={index.toString()}
                key={index}
                title={project.title}
                techStack={project.techStack}
                description={project.description}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
                isActive={activeProjectIndex === index}
              >
                <div
                  className={`mt-8 max-w-2xl rounded-lg py-2 md:hidden ${colorMapping[activeProjectIndex]}`}
                >
                  <Carousel
                    slides={slidesSets[index]}
                    key={index}
                    isActive={activeProjectIndex === index}
                  />
                </div>
              </ProjectCard>
            ))}
          </div>
          <div className="mb-32 hidden flex-col items-center md:flex md:basis-1/2">
            <div className="sticky top-[calc(50vh-10rem)] block">
              <div
                className={`max-w-2xl rounded-lg py-8 ${colorMapping[activeProjectIndex]}`}
              >
                {slidesSets.map((slides, index) => (
                  <Carousel
                    slides={slides}
                    key={index}
                    isActive={activeProjectIndex === index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
