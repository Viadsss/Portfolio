import { useEffect, useRef } from "react";
import SkillCard from "../components/SkillCard";
import htmlSvg from "../assets/svgs/skills/html.svg";
import cssSvg from "../assets/svgs/skills/css.svg";
import jsSvg from "../assets/svgs/skills/js.svg";
import tsSvg from "../assets/svgs/skills/ts.svg";
import reactSvg from "../assets/svgs/skills/react.svg";
import tailwindSvg from "../assets/svgs/skills/tailwind.svg";
import chakrauiSvg from "../assets/svgs/skills/chakra-ui.svg";
import nodejsSvg from "../assets/svgs/skills/node-js.svg";
import expressLightSvg from "../assets/svgs/skills/ExpressJS-Light.svg";
import expressDarkSvg from "../assets/svgs/skills/ExpressJS-Dark.svg";
import gitSvg from "../assets/svgs/skills/git.svg";
import postmanSvg from "../assets/svgs/skills/postman.svg";
import jestSvg from "../assets/svgs/skills/jest.svg";
import postgresqlSvg from "../assets/svgs/skills/postgresql.svg";
import mysqlSvg from "../assets/svgs/skills/mysql.svg";
import GitHubLightSvg from "../assets/svgs/skills/GitHub-Light.svg";
import GitHubDarkSvg from "../assets/svgs/skills/GitHub-Dark.svg";
import PHPLightSvg from "../assets/svgs/skills/PHP-Light.svg";
import PHPDarkSvg from "../assets/svgs/skills/PHP-Dark.svg";
import LaravelSvg from "../assets/svgs/skills/Laravel.svg";
import reactRouterSvg from "../assets/svgs/skills/react-router.svg";

import useTheme from "../hooks/useTheme";

interface Skill {
  imgSrc: string;
  imgSrcDark?: string;
  title: string;
}

const skills: Skill[] = [
  { imgSrc: htmlSvg, title: "HTML" },
  { imgSrc: cssSvg, title: "CSS" },
  { imgSrc: jsSvg, title: "JavaScript" },
  { imgSrc: tsSvg, title: "TypeScript" },
  { imgSrc: reactSvg, title: "React" },
  { imgSrc: reactRouterSvg, title: "React Router" },
  { imgSrc: tailwindSvg, title: "Tailwind CSS" },
  { imgSrc: chakrauiSvg, title: "Chakra UI" },
  { imgSrc: nodejsSvg, title: "Node.js" },
  { imgSrc: expressDarkSvg, imgSrcDark: expressLightSvg, title: "Express.js" },
  { imgSrc: PHPDarkSvg, imgSrcDark: PHPLightSvg, title: "PHP" },
  { imgSrc: LaravelSvg, title: "Laravel" },
  { imgSrc: postgresqlSvg, title: "PostgreSQL" },
  // { imgSrc: prismaSvg, title: "Prisma", dark: true },
  { imgSrc: mysqlSvg, title: "MySQL" },
  { imgSrc: jestSvg, title: "Jest" },
  { imgSrc: gitSvg, title: "Git" },
  { imgSrc: GitHubDarkSvg, imgSrcDark: GitHubLightSvg, title: "GitHub" },
  { imgSrc: postmanSvg, title: "Postman" },
];

const Skills = () => {
  const { theme } = useTheme();
  const ulRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!ulRef.current) return;

    const options = {};

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "-translate-x-full");
          entry.target.classList.add("duration-1000");
        } else {
          entry.target.classList.remove("duration-1000");
          entry.target.classList.add("opacity-0", "-translate-x-full");
        }
      });
    }, options);

    const children = ulRef.current.children;

    for (const child of children) {
      observer.observe(child);
    }

    return () => {
      for (const child of children) {
        observer.unobserve(child);
      }
    };
  }, []);

  console.log("Theme:", theme);

  return (
    <section
      className="mx-auto grid min-h-screen max-w-screen-2xl place-content-center px-8 backdrop-blur-0"
      id="skills"
    >
      <div className="flex flex-col items-center justify-center py-8 lg:px-32">
        <h1 className="mb-12 text-center text-2xl font-bold text-blue-600 dark:text-violet-400">
          Skills & Tools
        </h1>
        <ul
          ref={ulRef}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              imgSrc={skill.imgSrc}
              imgSrcDark={skill.imgSrcDark}
              theme={theme}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
