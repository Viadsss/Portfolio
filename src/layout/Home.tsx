import SocialIcon from "../components/SocialIcon";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileText,
  IconMail,
} from "@tabler/icons-react";

const Home = () => {
  return (
    <section
      className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-screen-2xl flex-col transition"
      id="home"
    >
      <div className="flex flex-col items-center justify-center gap-4 px-6 py-8 text-center backdrop-blur-0 lg:my-12 lg:flex-row-reverse lg:text-left">
        <div className="my-8 aspect-square w-full max-w-80 basis-1/2 animate-morph border-4 border-blue-800 bg-profile-img bg-cover bg-center dark:border-violet-800"></div>
        <div className="basis-1/2 space-y-8">
          <h1 className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-5xl font-bold tracking-widest text-transparent lg:text-6xl dark:from-violet-600 dark:to-white">
            Full Stack Developer
          </h1>
          <p className="text-balance text-xl">
            Hi!👋{" "}
            <span className="font-bold text-blue-600 dark:text-violet-400">
              I'm John Paul Viado
            </span>
            . A dedicated Full Stack developer based in Quezon City,
            Philippines. 📍
          </p>
          <div className="flex items-center justify-center gap-x-6 text-xl lg:justify-start">
            <SocialIcon
              href="https://github.com/johnpaulviado"
              label="GitHub"
              icon={<IconBrandGithub className="h-10 w-10" />}
            />
            <SocialIcon
              href="https://linkedin.com/in/johnpaulviado"
              label="LinkedIn"
              icon={<IconBrandLinkedin className="h-10 w-10" />}
            />
            <SocialIcon
              href="mailto:johnpaulviado20@gmail.com"
              label="Email"
              icon={<IconMail className="h-10 w-10" />}
            />
            <SocialIcon
              href="/resume.pdf"
              label="Resume"
              icon={<IconFileText className="h-10 w-10" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
