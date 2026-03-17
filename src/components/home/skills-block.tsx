import { useEffect, useState } from "react";
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
import DockerSvgLight from "@/assets/images/skills/light/docker-light.svg";
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
import DockerSvgDark from "@/assets/images/skills/dark/docker-dark.svg";
import PostmanSvgDark from "@/assets/images/skills/dark/postman-dark.svg";
import VSCodeSvgDark from "@/assets/images/skills/dark/vscode-dark.svg";

import { Card, CardContent } from "@/components/ui/card";

interface SkillTool {
  id: number;
  name: string;
  hrefLight: string;
  hrefDark: string;
}

const SkillsTools: SkillTool[] = [
  { id: 1, name: "HTML", hrefLight: HTMLSvgLight, hrefDark: HTMLSvgDark },
  { id: 2, name: "CSS", hrefLight: CSSSvgLight, hrefDark: CSSSvgDark },
  { id: 3, name: "JavaScript", hrefLight: JSSvgLight, hrefDark: JSSvgDark },
  { id: 4, name: "TypeScript", hrefLight: TSSvgLight, hrefDark: TSSvgDark },
  { id: 5, name: "Bootstrap", hrefLight: BootstrapSvgLight, hrefDark: BootstrapSvgDark },
  { id: 6, name: "Tailwind", hrefLight: TailwindSvgLight, hrefDark: TailwindSvgDark },
  { id: 7, name: "React", hrefLight: ReactSvgLight, hrefDark: ReactSvgDark },
  { id: 8, name: "Node.js", hrefLight: NodeSvgLight, hrefDark: NodeSvgDark },
  { id: 9, name: "Express", hrefLight: ExpressSvgLight, hrefDark: ExpressSvgDark },
  { id: 10, name: "PHP", hrefLight: PHPSvgLight, hrefDark: PHPSvgDark },
  { id: 11, name: "Laravel", hrefLight: LaravelSvgLight, hrefDark: LaravelSvgDark },
  { id: 12, name: "Java", hrefLight: JavaSvgLight, hrefDark: JavaSvgDark },
  { id: 13, name: "MySQL", hrefLight: MySQLSvgLight, hrefDark: MySQLSvgDark },
  { id: 14, name: "PostgreSQL", hrefLight: PostgreSQLSvgLight, hrefDark: PostgreSQLSvgDark },
  { id: 15, name: "Jest", hrefLight: JestSvgLight, hrefDark: JestSvgDark },
  { id: 16, name: "Webpack", hrefLight: WebpackSvgLight, hrefDark: WebpackSvgDark },
  { id: 17, name: "Vite", hrefLight: ViteSvgLight, hrefDark: ViteSvgDark },
  { id: 18, name: "Git", hrefLight: GitSvgLight, hrefDark: GitSvgDark },
  { id: 19, name: "GitHub", hrefLight: GitHubSvgLight, hrefDark: GitHubSvgDark },
  { id: 20, name: "Docker", hrefLight: DockerSvgLight, hrefDark: DockerSvgDark },
  { id: 20, name: "Postman", hrefLight: PostmanSvgLight, hrefDark: PostmanSvgDark },
  { id: 21, name: "VSCode", hrefLight: VSCodeSvgLight, hrefDark: VSCodeSvgDark },
];

function SkillToolCard({ skillTool, isVisible }: { skillTool: SkillTool; isVisible: boolean }) {
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsThemeChanging(true);
      setTimeout(() => setIsThemeChanging(false), 0);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Card
      data-skill-card
      data-id={skillTool.id}
      className={`hover:bg-secondary/25 dark:hover:bg-primary/25 flex aspect-square w-32 flex-col items-center justify-around p-4 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{
        transitionProperty: isThemeChanging ? "opacity, transform" : "opacity, transform, background-color",
        transitionDuration: isThemeChanging ? "0.5s, 0.5s" : "0.5s, 0.5s, 0.3s",
        transitionTimingFunction: "ease",
        transitionDelay: `${skillTool.id * 0.05}s, ${skillTool.id * 0.05}s, 0s`,
      }}
    >
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
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setVisibleCards((prev) => new Set(prev).add(id));
          }
        });
      },
      { threshold: 0.05 }
    );

    const cards = document.querySelectorAll("[data-skill-card]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h2 className="mb-6 font-serif text-2xl sm:text-3xl">skills & tools.</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {SkillsTools.map((skillTool) => (
          <SkillToolCard key={skillTool.id} skillTool={skillTool} isVisible={visibleCards.has(skillTool.id)} />
        ))}
      </div>
    </div>
  );
}
