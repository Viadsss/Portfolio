import HTMLSvgLight from "@/assets/images/skills/light/html-light.svg";
import CSSSvgLight from "@/assets/images/skills/light/css-light.svg";
import JSSvgLight from "@/assets/images/skills/light/js-light.svg";
import TSSvgLight from "@/assets/images/skills/light/ts-light.svg";
import BootstrapSvgLight from "@/assets/images/skills/light/bootstrap-light.svg";
import TailwindSvgLight from "@/assets/images/skills/light/tailwind-light.svg";
import ReactSvgLight from "@/assets/images/skills/light/react-light.svg";
import NodeSvgLight from "@/assets/images/skills/light/nodejs-light.svg";
import ExpressSvgLight from "@/assets/images/skills/light/express-light.svg";
import PHPSvgLight from "@/assets/images/skills/light/php-light.svg";
import LaravelSvgLight from "@/assets/images/skills/light/laravel-light.svg";
import JavaSvgLight from "@/assets/images/skills/light/java-light.svg";
import MySQLSvgLight from "@/assets/images/skills/light/mysql-light.svg";
import PostgreSQLSvgLight from "@/assets/images/skills/light/postgres-light.svg";
import JestSvgLight from "@/assets/images/skills/light/jest-light.svg";
import WebpackSvgLight from "@/assets/images/skills/light/webpack-light.svg";
import ViteSvgLight from "@/assets/images/skills/light/vite-light.svg";
import GitSvgLight from "@/assets/images/skills/light/git-light.svg";
import GitHubSvgLight from "@/assets/images/skills/light/github-light.svg";
import PostmanSvgLight from "@/assets/images/skills/light/postman-light.svg";
import VSCodeSvgLight from "@/assets/images/skills/light/vscode-light.svg";

import HTMLSvgDark from "@/assets/images/skills/dark/html-dark.svg";
import CSSSvgDark from "@/assets/images/skills/dark/css-dark.svg";
import JSSvgDark from "@/assets/images/skills/dark/js-dark.svg";
import TSSvgDark from "@/assets/images/skills/dark/ts-dark.svg";
import BootstrapSvgDark from "@/assets/images/skills/dark/bootstrap-dark.svg";
import TailwindSvgDark from "@/assets/images/skills/dark/tailwind-dark.svg";
import ReactSvgDark from "@/assets/images/skills/dark/react-dark.svg";
import NodeSvgDark from "@/assets/images/skills/dark/nodejs-dark.svg";
import ExpressSvgDark from "@/assets/images/skills/dark/express-dark.svg";
import PHPSvgDark from "@/assets/images/skills/dark/php-dark.svg";
import LaravelSvgDark from "@/assets/images/skills/dark/laravel-dark.svg";
import JavaSvgDark from "@/assets/images/skills/dark/java-dark.svg";
import MySQLSvgDark from "@/assets/images/skills/dark/mysql-dark.svg";
import PostgreSQLSvgDark from "@/assets/images/skills/dark/postgres-dark.svg";
import JestSvgDark from "@/assets/images/skills/dark/jest-dark.svg";
import WebpackSvgDark from "@/assets/images/skills/dark/webpack-dark.svg";
import ViteSvgDark from "@/assets/images/skills/dark/vite-dark.svg";
import GitSvgDark from "@/assets/images/skills/dark/git-dark.svg";
import GitHubSvgDark from "@/assets/images/skills/dark/github-dark.svg";
import PostmanSvgDark from "@/assets/images/skills/dark/postman-dark.svg";
import VSCodeSvgDark from "@/assets/images/skills/dark/vscode-dark.svg";

import { Card, CardContent } from "@/components/ui/card";

interface SkillTool {
  name: string;
  hrefLight: string;
  hrefDark: string;
}

const SkillsTools: SkillTool[] = [
  { name: "HTML", hrefLight: HTMLSvgLight, hrefDark: HTMLSvgDark },
  { name: "CSS", hrefLight: CSSSvgLight, hrefDark: CSSSvgDark },
  { name: "JavaScript", hrefLight: JSSvgLight, hrefDark: JSSvgDark },
  { name: "TypeScript", hrefLight: TSSvgLight, hrefDark: TSSvgDark },
  { name: "Bootstrap", hrefLight: BootstrapSvgLight, hrefDark: BootstrapSvgDark },
  { name: "Tailwind", hrefLight: TailwindSvgLight, hrefDark: TailwindSvgDark },
  { name: "React", hrefLight: ReactSvgLight, hrefDark: ReactSvgDark },
  { name: "Node.js", hrefLight: NodeSvgLight, hrefDark: NodeSvgDark },
  { name: "Express", hrefLight: ExpressSvgLight, hrefDark: ExpressSvgDark },
  { name: "PHP", hrefLight: PHPSvgLight, hrefDark: PHPSvgDark },
  { name: "Laravel", hrefLight: LaravelSvgLight, hrefDark: LaravelSvgDark },
  { name: "Java", hrefLight: JavaSvgLight, hrefDark: JavaSvgDark },
  { name: "MySQL", hrefLight: MySQLSvgLight, hrefDark: MySQLSvgDark },
  { name: "PostgreSQL", hrefLight: PostgreSQLSvgLight, hrefDark: PostgreSQLSvgDark },
  { name: "Jest", hrefLight: JestSvgLight, hrefDark: JestSvgDark },
  { name: "Webpack", hrefLight: WebpackSvgLight, hrefDark: WebpackSvgDark },
  { name: "Vite", hrefLight: ViteSvgLight, hrefDark: ViteSvgDark },
  { name: "Git", hrefLight: GitSvgLight, hrefDark: GitSvgDark },
  { name: "GitHub", hrefLight: GitHubSvgLight, hrefDark: GitHubSvgDark },
  { name: "Postman", hrefLight: PostmanSvgLight, hrefDark: PostmanSvgDark },
  { name: "VSCode", hrefLight: VSCodeSvgLight, hrefDark: VSCodeSvgDark },
];

function SkillToolCard({ skillTool }: { skillTool: SkillTool }) {
  return (
    <Card className="hover:bg-secondary/25 dark:hover:bg-primary/25 flex aspect-square w-32 flex-col items-center justify-around p-4 transition">
      <div className="flex flex-1 items-center justify-center">
        <img src={skillTool.hrefLight} alt={skillTool.name} className="w-12 dark:hidden" />
        <img src={skillTool.hrefDark} alt={skillTool.name} className="hidden w-12 dark:block" />
      </div>
      <CardContent className="p-0 text-center">
        <p className="text-sm font-semibold">{skillTool.name}</p>
      </CardContent>
    </Card>
  );
}

export function SkillsBlock() {
  return (
    <div>
      <h2 className="mb-6 font-serif text-2xl sm:text-3xl">skills & tools.</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {SkillsTools.map((skillTool) => (
          <SkillToolCard key={skillTool.name} skillTool={skillTool} />
        ))}
      </div>
    </div>
  );
}
