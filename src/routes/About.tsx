import { AppLayout } from "@/components/app-layout";
import landscapeImg from "@/assets/images/about/landscape.jpg";
import landscapeDarkImg from "@/assets/images/about/landscape-dark.jpg";

export function About() {
  return (
    <AppLayout>
      <section className="grid place-content-center">
        <h1 className="mt-6 font-serif text-3xl md:text-4xl">about me.</h1>

        <div className="flex flex-col justify-center gap-8 py-6 text-pretty">
          <div className="text-foreground text-sm leading-relaxed md:text-base">
            <p>
              Hi again! Thanks for reading this far!! 🤗 I'm currently a fourth-year BS Computer Science student at{" "}
              <a
                className="text-primary font-medium hover:underline"
                href="https://www.pup.edu.ph/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PUP Sta. Mesa, Manila
              </a>
              . I started learning how to code in my first year, and I've been hooked ever since. What keeps me going is
              the constant challenge of problem-solving and the satisfaction that comes with finishing a project. 🎯
            </p>

            <br />

            <p>
              To further improve my web development skills, I’m actively working through{" "}
              <a
                className="text-primary font-medium hover:underline"
                href="https://www.theodinproject.com/paths/full-stack-javascript"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Odin Project's Full Stack JavaScript curriculum
              </a>{" "}
              while diving deep into{" "}
              <a
                className="text-primary font-medium hover:underline"
                href="https://laracasts.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Laracasts
              </a>{" "}
              to strengthen my PHP and Laravel skills. I enjoy building small to medium-scale projects and applying what
              I learn as I go.
            </p>

            <br />

            <p>
              Outside of coding, I love playing video games 🎮, doing calisthenics 💪{" "}
              <span className="font-nanumPen text-muted-foreground">(strict form!)</span>, and reading manga 📚{" "}
              <span className="font-nanumPen text-muted-foreground">(waiting for translations... again)</span>. Got any
              game recommendations, fitness tips, or manga I should check out? Let's chat!
            </p>
          </div>

          <div className="flex shrink-0 items-center justify-center rounded-xl">
            <img src={landscapeImg} className="size-48 rounded-xl md:size-60 lg:size-72 dark:hidden" alt="Landscape" />
            <img
              src={landscapeDarkImg}
              className="hidden size-48 rounded-xl md:size-60 lg:size-72 dark:block"
              alt="Landscape Dark"
            />
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
