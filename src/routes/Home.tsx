import { AppLayout } from "@/components/app-layout";
import { SwipeCards } from "@/components/swipe-cards";
import { Button } from "@/components/ui/button";
import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";

export function Home() {
  return (
    <AppLayout>
      <section className="flex flex-col items-center justify-center gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <div>
          <SwipeCards />
        </div>
        <div>
          <h1 className="h1 text-center font-serif text-4xl sm:text-5xl md:text-start">hi viads here. 👋</h1>
          <p className="mt-2 flex flex-wrap items-center justify-center text-sm font-medium whitespace-nowrap sm:text-base md:justify-start">
            22 yo software developer from{" "}
            <span className="pl-1">
              Quezon City, Philippines <span className="ml-1">🇵🇭</span>
            </span>
          </p>
          {/* text-center md:text-start */}
          <p className="mt-4 max-w-sm text-center text-sm text-balance sm:text-base md:text-start">
            Backend by trade, full-stack by passion. Building meaningful apps, one line at a time.
          </p>
          <section className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Button size="sm" asChild className="px-5!">
              <Link to="/Viado_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
                <FileDown className="ml-1" />
              </Link>
            </Button>
            <div className="flex items-center gap-6">
              <Linkedin size={20} strokeWidth={2.25} className="opacity-70 transition hover:opacity-100" />
              <Github size={20} strokeWidth={2.25} className="opacity-70 transition hover:opacity-100" />
              <Mail size={20} strokeWidth={2.25} className="opacity-70 transition hover:opacity-100" />
            </div>
          </section>
        </div>
      </section>
    </AppLayout>
  );
}
