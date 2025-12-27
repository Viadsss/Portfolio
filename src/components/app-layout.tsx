import { ScrollRestoration } from "react-router";
import { Footer } from "./footer";
import { Header } from "./header";

interface Props {
  children: React.ReactNode;
}

export function AppLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-3xl flex-col px-8 pt-4 pb-12">{children}</main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
