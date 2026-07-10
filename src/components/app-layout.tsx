import { ScrollRestoration } from "react-router";
import { Footer } from "./footer";
import { Header } from "./header";
import { ChevronUp } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import Particles from "./Particles";

interface Props {
  children: React.ReactNode;
}

export function AppLayout({ children }: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={[isDark ? "#ffdfb1" : "#63493f"]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={true}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <main className="mx-auto flex max-w-3xl flex-col px-8 pt-4 pb-12">{children}</main>
        <div onClick={scrollToTop} className="mx-auto w-full p-4 opacity-30 transition hover:opacity-100">
          <ChevronUp className="mx-auto animate-bounce" />
        </div>
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  );
}
