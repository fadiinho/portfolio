import { Project } from "@prisma/client";
import ProjectCard from "./ProjectCard";

const uuid = () => String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now();

export default function ProjectCardPlaceholder() {
  const placeHolderProject: Project = {
    id: uuid(),
    name: "Coming soon",
    github: "https://github.com/fadiinho",
    description: "Looks like I don't have this project yet.",
    stacks: ["Coming", "Soon"],
    screenshotUrl: "/assets/coming_soon.png",
    liveDemo: null
  }

  return (
    <ProjectCard project={placeHolderProject} />
  )
}
