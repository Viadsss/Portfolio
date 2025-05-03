import {
  IconBrandGithub,
  IconEye,
  IconBrandYoutube,
} from "@tabler/icons-react";

type ProjectCardProps = {
  index: string;
  title: string;
  techStack: string;
  description: string;
  liveLink: string;
  githubLink: string;
  isActive: boolean;
  videoOnly?: boolean;
  children?: React.ReactNode;
};

const ProjectCard = ({
  index,
  title,
  techStack,
  description,
  liveLink,
  githubLink,
  isActive,
  videoOnly,
  children,
}: ProjectCardProps) => {
  return (
    <li
      className={`list-none space-y-4 pb-8 ${isActive ? "opacity-100" : "opacity-25"}`}
      data-project-index={index}
    >
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      <h3 className="text-sm font-bold text-slate-600 md:text-base dark:text-slate-300">
        <span className="text-sm text-blue-600 md:text-base dark:text-violet-400">
          Tech Stack:{" "}
        </span>
        {techStack}
      </h3>
      <p className="text-sm md:text-base">{description}</p>
      <div className="flex items-center gap-x-4 font-martianMono text-xs md:text-sm">
        <a
          href={liveLink}
          className="flex items-center gap-x-2 rounded-lg border-2 border-blue-400 px-5 py-2 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-violet-400 dark:hover:border-violet-800 dark:hover:bg-violet-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          {videoOnly ? "Video" : "Live"}{" "}
          {videoOnly ? <IconBrandYoutube /> : <IconEye />}
        </a>
        <a
          href={githubLink}
          className="flex items-center gap-x-2 rounded-lg border-2 border-blue-400 px-5 py-2 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-violet-400 dark:hover:border-violet-800 dark:hover:bg-violet-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <IconBrandGithub />
        </a>
      </div>
      {children && <div>{children}</div>}
    </li>
  );
};

export default ProjectCard;
