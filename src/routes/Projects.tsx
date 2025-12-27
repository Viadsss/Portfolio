import { AppLayout } from "@/components/app-layout";
import { ProjectCard } from "@/components/home/featured-projects";
import { PhotoProvider } from "react-photo-view";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { groupProjects, personalProjects } from "@/components/projects/data";

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
