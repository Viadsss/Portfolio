import { AppLayout } from "@/components/app-layout";
import { ProjectCard, type Project } from "@/components/home/featured-projects";
import { PhotoProvider } from "react-photo-view";
import CardImg1 from "@/assets/images/swipe-cards/img-test-1.jpg";
import CardImg2 from "@/assets/images/swipe-cards/img-test-2.jpg";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

const personalProjects: Project[] = [
  {
    id: 1,
    title: "Sample Project",
    description: "This is a sample project description. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: CardImg1,
    date: "Jan 2024",
    badges: ["react", "tailwindcss", "nextjs"],
    links: [
      { type: "website", url: "https://example.com", label: "Website" },
      { type: "github", url: "https://github.com/example", label: "GitHub" },
      { type: "youtube", url: "https://youtube.com", label: "YouTube" },
    ],
  },
  {
    id: 2,
    title: "Sample Project 2",
    description:
      "This is a sample project description. lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a sample project description. lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a sample project description. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    image: CardImg2,
    date: "Jan 2024",
    badges: ["react", "tailwindcss", "nextjs"],
    links: [
      { type: "website", url: "https://example.com", label: "Website" },
      { type: "github", url: "https://github.com/example", label: "GitHub" },
      { type: "youtube", url: "https://youtube.com", label: "YouTube" },
    ],
  },
  {
    id: 3,
    title: "Sample Project",
    description: "This is a sample project description. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: CardImg1,
    date: "Jan 2024",
    badges: ["react", "tailwindcss", "nextjs"],
    links: [
      { type: "website", url: "https://example.com", label: "Website" },
      { type: "github", url: "https://github.com/example", label: "GitHub" },
      { type: "youtube", url: "https://youtube.com", label: "YouTube" },
    ],
  },
];

const groupProjects: Project[] = [
  {
    id: 1,
    title: "Sample Project",
    description: "This is a sample project description. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: CardImg1,
    date: "Jan 2024",
    badges: ["react", "tailwindcss", "nextjs"],
    links: [
      { type: "website", url: "https://example.com", label: "Website" },
      { type: "github", url: "https://github.com/example", label: "GitHub" },
      { type: "youtube", url: "https://youtube.com", label: "YouTube" },
    ],
  },
  {
    id: 2,
    title: "Sample Project",
    description: "This is a sample project description. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: CardImg1,
    date: "Jan 2024",
    badges: ["react", "tailwindcss", "nextjs"],
    links: [
      { type: "website", url: "https://example.com", label: "Website" },
      { type: "github", url: "https://github.com/example", label: "GitHub" },
      { type: "youtube", url: "https://youtube.com", label: "YouTube" },
    ],
  },
  {
    id: 3,
    title: "Sample Project",
    description: "This is a sample project description. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: CardImg1,
    date: "Jan 2024",
    badges: ["react", "tailwindcss", "nextjs"],
    links: [
      { type: "website", url: "https://example.com", label: "Website" },
      { type: "github", url: "https://github.com/example", label: "GitHub" },
      { type: "youtube", url: "https://youtube.com", label: "YouTube" },
    ],
  },
  {
    id: 4,
    title: "Sample Project",
    description: "This is a sample project description. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: CardImg1,
    date: "Jan 2024",
    badges: ["react", "tailwindcss", "nextjs"],
    links: [
      { type: "website", url: "https://example.com", label: "Website" },
      { type: "github", url: "https://github.com/example", label: "GitHub" },
      { type: "youtube", url: "https://youtube.com", label: "YouTube" },
    ],
  },
  {
    id: 5,
    title: "Sample Project",
    description: "This is a sample project description. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: CardImg1,
    date: "Jan 2024",
    badges: ["react", "tailwindcss", "nextjs"],
    links: [
      { type: "website", url: "https://example.com", label: "Website" },
      { type: "github", url: "https://github.com/example", label: "GitHub" },
      { type: "youtube", url: "https://youtube.com", label: "YouTube" },
    ],
  },
];

export function Projects() {
  return (
    <AppLayout>
      <h2 className="my-6 font-serif text-3xl md:text-4xl">projects.</h2>
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="personal" className="flex-1">
            Personal
          </TabsTrigger>
          <TabsTrigger value="group" className="flex-1">
            Group
          </TabsTrigger>
        </TabsList>
        <TabsContent value="personal">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <PhotoProvider>
              {personalProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </PhotoProvider>
          </div>
        </TabsContent>
        <TabsContent value="group">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <PhotoProvider>
              {groupProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </PhotoProvider>
          </div>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}
