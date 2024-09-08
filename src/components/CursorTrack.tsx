import useCursorImage from "../hooks/useCusrorImage";
import amongusGif from "../assets/among-us.gif";

const CursorTrack = () => {
  const cursorRef = useCursorImage(16, 16, 10000);

  console.log("Rendering CursorTrack");

  return (
    <div className="relative">
      <div
        ref={cursorRef}
        className="pointer-events-none absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform"
      >
        <img src={amongusGif} alt="Among Us gif" className="h-full w-full" />
      </div>
    </div>
  );
};

export default CursorTrack;
