import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileText,
  IconMail,
  IconWorldWww,
} from "@tabler/icons-react";
import SocialIcon from "../components/SocialIcon";

const Footer = () => {
  return (
    <footer className="border-t border-blue-600/30 border-zinc-900 bg-zinc-100 px-8 py-4 backdrop-blur-0 transition dark:border-violet-600/30 dark:border-zinc-100 dark:bg-zinc-900">
      <div className="flex items-center justify-center gap-x-2 text-xl">
        <SocialIcon
          href="https://github.com/johnpaulviado"
          label="GitHub"
          icon={<IconBrandGithub />}
          rounded={true}
        />
        <SocialIcon
          href="https://linkedin.com/in/johnpaulviado"
          label="LinkedIn"
          icon={<IconBrandLinkedin />}
          rounded={true}
        />
        <SocialIcon
          href="mailto:johnpaulviado20@gmail.com"
          label="Email"
          icon={<IconMail />}
          rounded={true}
        />
        <SocialIcon
          href="/resume.pdf"
          label="Resume"
          icon={<IconFileText />}
          rounded={true}
        />
        <SocialIcon
          href="https://viadsss.github.io/Projects-site/"
          label="Website"
          icon={<IconWorldWww />}
          rounded={true}
        />
      </div>
      <div className="mt-4 text-center">
        &copy; 2024 | Designed and coded with 💖 by{" "}
        <span className="font-medium text-blue-600 dark:text-violet-400">
          John Paul Viado
        </span>
      </div>
    </footer>
  );
};

export default Footer;
