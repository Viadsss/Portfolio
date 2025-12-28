import { ScrollRestoration } from "react-router";
import { Footer } from "./footer";
import { Header } from "./header";
import { ChevronUp } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

export function AppLayout({ children }: Props) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-3xl flex-col px-8 pt-4 pb-12">{children}</main>
      <div onClick={scrollToTop} className="mx-auto w-full p-4 opacity-30 transition hover:opacity-100">
        <ChevronUp className="mx-auto animate-bounce" />
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
