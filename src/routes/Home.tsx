import { Github, Linkedin, Mail } from "lucide-react";
import { SwipeCards, type CardImage } from "@/components/swipe-cards";
import { AppLayout } from "@/components/app-layout";
import { HeroContent, type Profile } from "@/components/home/hero-content";
import CardImg1 from "@/assets/images/swipe-cards/img-test-1.jpg";
import CardImg2 from "@/assets/images/swipe-cards/img-test-2.jpg";
import TpgImg from "@/assets/images/timeline/experience/tpg.jpeg";
import PupImg from "@/assets/images/timeline/education/pup.png";
import HsnhsImg from "@/assets/images/timeline/education/hsnhs.jpg";
import DostImg from "@/assets/images/timeline/experience/dost-sei.svg";
import { TimelineJourney } from "@/components/home/timeline-journey";
import type { TimelineItem } from "@/components/timeline";
import { FeaturedProjects, type Project } from "@/components/home/featured-projects";
import { SkillsBlock } from "@/components/home/skills-block";
import { groupProjects, personalProjects } from "@/components/projects/data";

export function Home() {
  const profile: Profile = {
    name: "hi viads here.",
    age: 22,
    role: "software developer",
    location: "Quezon City, Philippines",
    flag: "🇵🇭",
    description: "Backend by trade, full-stack by passion. Building meaningful apps, one line at a time.",
    resumeUrl: "/resume.pdf",
    socials: [
      { href: "https://linkedin.com/in/yourprofile", icon: Linkedin, label: "LinkedIn" },
      { href: "https://github.com/yourprofile", icon: Github, label: "GitHub" },
      { href: "mailto:your.email@example.com", icon: Mail, label: "Email" },
    ],
  };

  const cardImagesData: CardImage[] = [
    { id: 1, url: CardImg1 },
    { id: 2, url: CardImg2 },
  ];

  const experienceTimelines: TimelineItem[] = [
    {
      id: 1,
      image: DostImg,
      title: "Software Developer Intern",
      company: "Department of Science and Technology (DOST)",
      date: "July 2025 - Aug 2025",
      bullets: [
        "Contributed to the LODI project by developing full-stack features using Laravel, Blade, React.js, and Vue.js serving government project documentation needs",
        "Refactored and organized codebase by separating Bootstrap and Tailwind examples into modular files, improving maintainability across Libraries, Forms, Feedback, and Tables sections",
        "Implemented File Upload, Contact, and Profile forms with dual framework support (React and Vue), ensuring consistency and proper validation",
      ],
      links: [
        { type: "website", url: "https://techcorp.com", label: "Company Website" },
        { type: "github", url: "https://github.com/project", label: "View Project" },
      ],
    },
    {
      id: 2,
      image: TpgImg,
      title: "Frontend Contributor",
      company: "PUP The Programmers' Guild (PUP TPG)",
      date: "July 2023 - Dec 2023",
      bullets: [
        "Developed and integrated the Info Page and Hero Page for the official organization website using React.js, Next.js, and TypeScript.",
        "Improved content structure and accessibility for prospective members through enhanced UI components",
      ],
      links: [{ type: "website", url: "https://university.edu", label: "University" }],
    },
  ];

  const educationTimelines: TimelineItem[] = [
    {
      id: 1,
      image: PupImg,
      title: "Bachelor of Science in Computer Science (BSCS)",
      company: "Polytechnic University of the Philippines",
      date: "Oct 2022 - Present",
      bullets: ["GWA of 1.23, Consistent President's Lister and DOST MERIT JLSS Scholar"],
      links: [{ type: "website", url: "https://www.pup.edu.ph", label: "University Website" }],
    },
    {
      id: 2,
      image: HsnhsImg,
      title: "High School Diploma",
      company: "Holy Spirit National High School (HSNHS)",
      date: "June 2016 - March 2022",
      bullets: ["GWA of 98, recognized as a Consistent Honor Student and awarded Highest Honors."],
      links: [
        {
          type: "website",
          url: "https://sites.google.com/deped.gov.ph/hsnhs/home",
          label: "School Website",
        },
      ],
    },
  ];

  const featuredProjects: Project[] = [
    personalProjects.find((p) => p.id === 1)!, // Yappr
    groupProjects.find((p) => p.id === 1)!, // TeksStrike
  ];

  return (
    <AppLayout>
      <section className="flex flex-col items-center justify-center gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <SwipeCards cardsImages={cardImagesData} />
        <HeroContent profile={profile} />
      </section>
      <section className="mt-16">
        <TimelineJourney experinceTimelines={experienceTimelines} educationTimelines={educationTimelines} />
      </section>
      <section className="mt-16 flex flex-col gap-6">
        <FeaturedProjects projects={featuredProjects}  />
      </section>
      <section className="mt-16">
        <SkillsBlock />
      </section>
    </AppLayout>
  );
}
