import CursorTrack from "./components/CursorTrack";
import About from "./layout/About";
import Home from "./layout/Home";
import Navbar from "./layout/Navbar";
import Projects from "./layout/Projects";

export default function App() {
  console.log("Rendering App");

  return (
    <>
      <div className="grid-gradient-white dark:grid-gradient-dark relative h-full min-h-screen bg-zinc-100 font-sora text-black transition dark:bg-zinc-900 dark:text-white">
        <CursorTrack />
        <Navbar />
        <Home />
        <About />
        <Projects />
      </div>
    </>
  );
}
