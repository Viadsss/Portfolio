import { useEffect, useRef } from "react";

export default function useCursorImage(
  offsetX: number = 0,
  offsetY: number = 0,
  animationDuration: number = 0,
): React.RefObject<HTMLDivElement> {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMousMove = (event: MouseEvent) => {
      if (imageRef.current) {
        const posX = event.pageX + offsetX;
        const posY = event.pageY + offsetY;

        console.log("X:", event.clientX, "Y:", event.clientY);

        imageRef.current.animate(
          [{ transform: `translate(${posX}px, ${posY}px)` }],
          {
            duration: animationDuration,
            fill: "forwards",
            easing: "ease",
          },
        );
      }
    };

    window.addEventListener("mousemove", handleMousMove);

    return () => {
      window.removeEventListener("mousemove", handleMousMove);
    };
  }, [offsetX, offsetY, animationDuration]);

  return imageRef;
}
