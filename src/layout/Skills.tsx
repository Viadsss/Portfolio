import { useEffect, useRef } from "react";
import SkillCard from "../components/SkillCard";
import htmlSvg from "../assets/svgs/skills/html.svg";
import cssSvg from "../assets/svgs/skills/css.svg";
import jsSvg from "../assets/svgs/skills/js.svg";
import tsSvg from "../assets/svgs/skills/ts.svg";
import reactSvg from "../assets/svgs/skills/react.svg";
import reactRouterSvg from "../assets/svgs/skills/react-router.svg";
import tailwindSvg from "../assets/svgs/skills/tailwind.svg";
import chakrauiSvg from "../assets/svgs/skills/chakra-ui.svg";
import nodejsSvg from "../assets/svgs/skills/node-js.svg";
import expressjsSvg from "../assets/svgs/skills/express-js.svg";
import gitSvg from "../assets/svgs/skills/git.svg";
import githubSvg from "../assets/svgs/skills/github.svg";
import postmanSvg from "../assets/svgs/skills/postman.svg";
import jestSvg from "../assets/svgs/skills/jest.svg";
import postgresqlSvg from "../assets/svgs/skills/postgresql.svg";
import prismaSvg from "../assets/svgs/skills/prisma.svg";
import mysqlSvg from "../assets/svgs/skills/mysql.svg";

const skills = [
  { imgSrc: htmlSvg, title: "HTML" },
  { imgSrc: cssSvg, title: "CSS" },
  { imgSrc: jsSvg, title: "JavaScript" },
  { imgSrc: tsSvg, title: "TypeScript" },
  { imgSrc: reactSvg, title: "React" },
  { imgSrc: reactRouterSvg, title: "React Router" },
  { imgSrc: tailwindSvg, title: "Tailwind CSS" },
  { imgSrc: chakrauiSvg, title: "Chakra UI" },
  { imgSrc: nodejsSvg, title: "Node.js" },
  { imgSrc: expressjsSvg, title: "Express.js", dark: true },
  { imgSrc: jestSvg, title: "Jest" },
  { imgSrc: postgresqlSvg, title: "PostgreSQL" },
  { imgSrc: prismaSvg, title: "Prisma", dark: true },
  { imgSrc: mysqlSvg, title: "MySQL" },
  { imgSrc: gitSvg, title: "Git" },
  { imgSrc: githubSvg, title: "GitHub", dark: true },
  { imgSrc: postmanSvg, title: "Postman" },
];

const Skills = () => {
  const ulRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!ulRef.current) return;

    const options = {};

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("opacity-0", !entry.isIntersecting);
        entry.target.classList.toggle(
          "-translate-x-full",
          !entry.isIntersecting,
        );
        entry.target.classList.toggle("duration-1000", entry.isIntersecting);
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
              imgSrc={skill.imgSrc}
              title={skill.title}
              dark={skill.dark}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
