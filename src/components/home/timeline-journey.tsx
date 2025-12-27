import { Timeline, type TimelineItem } from "../timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface Props {
  experinceTimelines: TimelineItem[];
  educationTimelines: TimelineItem[];
}

export function TimelineJourney({ experinceTimelines, educationTimelines }: Props) {
  return (
    <Tabs defaultValue="experience" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="experience" className="flex-1">
          Experience
        </TabsTrigger>
        <TabsTrigger value="education" className="flex-1">
          Education
        </TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <Timeline items={experinceTimelines} type="experience" />
      </TabsContent>
      <TabsContent value="education">
        <Timeline items={educationTimelines} type="education" />
      </TabsContent>
    </Tabs>
  );
}
