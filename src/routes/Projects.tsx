import { AppLayout } from "@/components/app-layout";
import { ProjectCard } from "@/components/home/featured-projects";
import { PhotoProvider } from "react-photo-view";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { groupProjects, personalProjects } from "@/components/projects/data";
import { useRef } from "react";

export function Projects() {
  const personalCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const groupCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handlePersonalIndexChange = (index: number) => {
    personalCardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleGroupIndexChange = (index: number) => {
    groupCardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

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
            <PhotoProvider onIndexChange={handlePersonalIndexChange}>
              {personalProjects.map((project, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    personalCardRefs.current[index] = el;
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </PhotoProvider>
          </div>
        </TabsContent>
        <TabsContent value="group">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <PhotoProvider onIndexChange={handleGroupIndexChange}>
              {groupProjects.map((project, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    groupCardRefs.current[index] = el;
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </PhotoProvider>
          </div>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}
