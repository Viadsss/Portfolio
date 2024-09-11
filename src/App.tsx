import CursorTrack from "./components/CursorTrack";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Projects from "./layout/Projects";
import Skills from "./layout/Skills";

export default function App() {
  console.log("Rendering App");

  return (
    <>
      <div className="grid-gradient-white dark:grid-gradient-dark relative h-full min-h-screen bg-zinc-100 font-sora text-black transition dark:bg-zinc-900 dark:text-white">
        <CursorTrack />
        <Header />
        <Home />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
