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
              Hi again! Thanks for reading this far!! 🤗 I'm a BS Computer Science graduate from the{" "}
              <a
                className="text-primary font-medium hover:underline"
                href="https://www.pup.edu.ph/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Polytechnic University of the Philippines (PUP) - Manila
              </a>
              . I started learning how to code in my first year, and I've been hooked ever since. What keeps me going is
              the constant challenge of problem-solving and the satisfaction that comes with finishing a project. 🎯
            </p>

            <br />

            <p>
              To continue improving my skills, I'm actively exploring modern web technologies and building projects
              using React, TypeScript, Laravel, and other tools in the JavaScript ecosystem. I enjoy creating small to
              medium-scale applications that help me learn new concepts and write cleaner, more maintainable code.
            </p>

            <br />

            <p>
              Outside of coding, I love playing video games 🎮, lifting at the gym 💪{" "}
              <span className="font-nanumPen text-muted-foreground">(strict form!)</span>, and reading manga 📚{" "}
              <span className="font-nanumPen text-muted-foreground">(waiting for translations... again)</span>. Got any
              game recommendations, fitness tips, or manga I should check out? Let's chat!
            </p>
          </div>

          <div className="relative flex shrink-0 items-center justify-center rounded-xl">
            <div className="relative">
              <img
                src={landscapeImg}
                className="size-48 rounded-xl md:size-60 lg:size-72 dark:hidden"
                alt="Landscape"
              />
              <img
                src={landscapeDarkImg}
                className="hidden size-48 rounded-xl md:size-60 lg:size-72 dark:block"
                alt="Landscape Dark"
              />

              {/* Floating caption with arrow */}
              <div className="absolute -right-24 -bottom-16 my-4">
                <span className="font-nanumPen focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex max-w-36 animate-[bounce_3s_infinite] items-center rounded-xl border border-transparent px-3 py-1 text-center text-sm font-semibold shadow-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none md:max-w-44 md:text-base">
                  ↖ Pictures I took on Skyranch Tagaytay!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
