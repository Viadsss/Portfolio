import CursorTrack from "./components/CursorTrack";
import Navbar from "./layout/Navbar";

export default function App() {
  console.log("Rendering App");

  return (
    <>
      <div className="grid-gradient-white dark:grid-gradient-dark min-h-screen overflow-x-hidden bg-zinc-100 text-gray-800 dark:bg-zinc-900 dark:text-gray-200">
        <CursorTrack />
        <Navbar />
      </div>
    </>
  );
}
