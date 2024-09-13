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

import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <section
      className="mx-auto grid min-h-screen max-w-screen-2xl place-content-center px-8 backdrop-blur-0"
      id="skills"
    >
      <div className="flex flex-col items-center justify-center py-8 lg:px-32">
        <h1 className="mb-12 text-center text-2xl font-bold text-blue-600 dark:text-violet-400">
          Skills & Tools
        </h1>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
          <SkillCard imgSrc={htmlSvg} title="HTML" />
          <SkillCard imgSrc={cssSvg} title="CSS" />
          <SkillCard imgSrc={jsSvg} title="JavaScript" />
          <SkillCard imgSrc={tsSvg} title="TypeScript" />
          <SkillCard imgSrc={reactSvg} title="React" />
          <SkillCard imgSrc={reactRouterSvg} title="React Router" />
          <SkillCard imgSrc={tailwindSvg} title="Tailwind CSS" />
          <SkillCard imgSrc={chakrauiSvg} title="Chakra UI" />
          <SkillCard imgSrc={nodejsSvg} title="Node.js" />
          <SkillCard imgSrc={expressjsSvg} title="Express.js" dark={true} />
          <SkillCard imgSrc={jestSvg} title="Jest" />
          <SkillCard imgSrc={postgresqlSvg} title="PostgreSQL" />
          <SkillCard imgSrc={prismaSvg} title="Prisma" dark={true} />
          <SkillCard imgSrc={mysqlSvg} title="MySQL" />
          <SkillCard imgSrc={gitSvg} title="Git" />
          <SkillCard imgSrc={githubSvg} title="GitHub" dark={true} />
          <SkillCard imgSrc={postmanSvg} title="Postman" />
        </ul>
      </div>
    </section>
  );
};

export default Skills;
