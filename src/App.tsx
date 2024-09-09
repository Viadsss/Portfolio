import CursorTrack from "./components/CursorTrack";
import Navbar from "./layout/Navbar";

export default function App() {
  console.log("Rendering App");

  return (
    <>
      <div className="grid-gradient-white dark:grid-gradient-dark gray-200 font-sora min-h-screen overflow-x-hidden bg-zinc-100 transition dark:bg-zinc-900 dark:text-white">
        <CursorTrack />
        <Navbar />
      </div>
    </>
  );
}
