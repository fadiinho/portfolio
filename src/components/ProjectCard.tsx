import { Project } from "@prisma/client";
import { ReactNode } from "react";
import Image from "next/image";
import NoScreenshotPng from "../../public/assets/no_screenshot.png";

const StackBadge = ({ stack }: { stack: string }) => {
  return (
    <p className="m-2 text-secondary">{stack}</p>
  )
}

const GenericButton = ({ children, className, href }: { children: ReactNode | string, className: string, href: string }) => {
  return <a target="_blank" rel="noreferrer" className={`min-w-[6rem] py-1 px-2 text-center rounded  ${className}`} href={href}>{children}</a>
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="max-w-xs max-h-96 min-w-[320px] border border-opacity-50 border-secondary rounded overflow-hidden flex flex-col">
      {project.screenshotUrl &&
        <div className="w-full">
          <Image
            src={project.screenshotUrl}
            width="1200"
            height="720"
            alt="No Screenshot"
          />
        </div>
      }
      {!project.screenshotUrl && (
        <div className="w-full">
          <Image src={NoScreenshotPng} alt="No Screenshot" />
        </div>
      )}
      <div className="flex flex-wrap flex-grow min-height-[82px] justify-center border border-opacity-50 border-secondary border-r-0 border-l-0">
        {(project.stacks as string[]).map((stack) => <StackBadge key={stack} stack={stack} />)}
      </div>
      <div className="p-2 text-center flex flex-col justify-center">
        <h3 className="text-lg font-semibold tracking-wider">{project.name}</h3>
        <p className="text-secondary">{project.description}</p>
        <div id="buttons" className="my-2 mt-2 flex justify-center gap-4">
          {project.liveDemo && <GenericButton
            href={project.liveDemo}
            className="border border-primary hover:bg-primary hover:bg-opacity-20"
          >
            Demo
          </GenericButton>}

          <GenericButton
            className="border border-opacity-50 border-secondary hover:bg-secondary hover:bg-opacity-20"
            href={project.github}
          >
            Github
          </GenericButton>
        </div>
      </div>
    </div>
  )
}
