import { IconBrandGithub, IconEye } from "@tabler/icons-react";

type ProjectCardProps = {
  title: string;
  techStack: string;
  description: string;
  liveLink: string;
  githubLink: string;
};

const ProjectCard = ({
  title,
  techStack,
  description,
  liveLink,
  githubLink,
}: ProjectCardProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">{title}</h2>
      <h3 className="font-bold text-slate-600 dark:text-slate-300">
        <span className="text-blue-600 dark:text-violet-400">Tech Stack: </span>
        {techStack}
      </h3>
      <p>{description}</p>
      <div className="flex items-center gap-x-4 font-martianMono text-sm">
        <a
          href={liveLink}
          className="flex items-center gap-x-2 rounded-lg border-2 border-blue-400 px-5 py-2 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-violet-400 dark:hover:border-violet-800 dark:hover:bg-violet-800"
        >
          Live <IconEye />
        </a>
        <a
          href={githubLink}
          className="flex items-center gap-x-2 rounded-lg border-2 border-blue-400 px-5 py-2 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-violet-400 dark:hover:border-violet-800 dark:hover:bg-violet-800"
        >
          GitHub <IconBrandGithub />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
