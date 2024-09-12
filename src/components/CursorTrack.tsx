import useCursorImage from "../hooks/useCursorImage";
import amongusGif from "../assets/imgs/among-us.gif";

const CursorTrack = () => {
  const cursorRef = useCursorImage(16, 16, 10000);

  return (
    <div className="absolute">
      <div
        ref={cursorRef}
        className="pointer-events-none absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform opacity-30 md:opacity-100"
      >
        <img src={amongusGif} alt="Among Us gif" className="h-full w-full" />
      </div>
    </div>
  );
};

export default CursorTrack;
