import landscapeImg from "../assets/imgs/landscape.jpg";
import landscapeDarkImg from "../assets/imgs/landscape-dark.jpg";

const About = () => {
  return (
    <section
      className="mx-auto grid min-h-screen max-w-screen-2xl place-content-center px-8 backdrop-blur-0"
      id="about"
    >
      <h1 className="my-6 text-center text-2xl font-bold text-blue-600 dark:text-violet-400">
        About Me
      </h1>
      <div className="flex flex-col justify-center gap-x-16 gap-y-8 text-pretty py-8 lg:flex-row lg:px-20">
        <div className="basis-1/2 text-sm leading-relaxed md:text-base dark:text-slate-100">
          <p>
            Hi again! Thanks for scrolling this far!! 🤗 I'm currently a
            third-year BS Computer Science student at{" "}
            <a
              className="font-medium text-blue-600 dark:text-violet-400"
              href="https://www.pup.edu.ph/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PUP Manila
            </a>
            . I started learning how to code in my first year, and ever since,
            I've been hooked! What keeps me going is the constant challenge and
            the fulfillment of completing a project. 🎯
          </p>
          <br />
          <p>
            To level up my web development skills, I'm actively working through{" "}
            <a
              className="font-medium text-blue-600 dark:text-violet-400"
              href="https://www.theodinproject.com/paths/full-stack-javascript"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Odin Project's Full Stack JavaScript curriculum
            </a>{" "}
            and diving deep into{" "}
            <a
              className="font-medium text-blue-600 dark:text-violet-400"
              href="https://laracasts.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Laracasts
            </a>{" "}
            to sharpen my PHP and Laravel skills. I'm always experimenting with
            new projects and applying what I learn right away.
          </p>
          <br />
          <p>
            Outside of coding, I love playing video games 🎮, doing calisthenics
            💪{" "}
            <span className="font-nanumPen text-slate-800 dark:text-slate-200">
              (strict form!)
            </span>{" "}
            , and reading manga 📚{" "}
            <span className="font-nanumPen text-slate-800 dark:text-slate-200">
              (waiting for translations... again)
            </span>
            . Got any game recommendations, fitness tips, or manga I should
            check out? Let's chat!
          </p>
        </div>
        <div className="flex shrink-0 items-center justify-center rounded-xl">
          <img
            src={landscapeImg}
            className="h-64 w-64 rounded-xl md:h-80 md:w-80 lg:h-96 lg:w-96 dark:hidden"
            alt="Landscape"
          />
          <img
            src={landscapeDarkImg}
            className="hidden h-64 w-64 rounded-xl md:h-80 md:w-80 lg:h-96 lg:w-96 dark:block"
            alt="Landscape Dark"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
