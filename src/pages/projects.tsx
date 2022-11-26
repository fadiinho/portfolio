import Head from "next/head";
import { GetServerSideProps } from "next/types";

import ProjectCard from "@components/ProjectCard";
import ProjectPlaceholder from "@components/ProjectPlaceholder";
import SubTitle from "@components/SubTitle";

import { Project } from "@prisma/client";
import { prisma } from "@lib/prisma";

export default function Projects({ projects }: { projects: Project[] }) {
  const completeApps = projects ? projects.filter((project) => !!project.screenshotUrl) : [];
  const smallProjects = projects ? projects.filter((project) => !project.screenshotUrl) : [];

  return <>
    <Head>
      <title>Projects</title>
    </Head>
    <main className="m-4 px-2 sm:m-0 sm:max-w-screen-lg flex flex-col gap-8">
      <SubTitle titleChar="/">
        projects
        <p className="text-secondary text-sm font-normal">List of my projects</p>
      </SubTitle>
      <section className="sm:min-w-[720px] flex flex-col gap-4 sm:gap-8 sm:flex-row">
        {!!completeApps.length && (
          <div id="complete-apps" className="flex flex-col gap-2">
            <SubTitle>complete-apps</SubTitle>
            <div className="flex flex-col gap-4 sm:flex-row">
              {completeApps.map((project) => <ProjectCard key={project.id} project={project} />)}

              {(!completeApps.length || completeApps.length < 3) && (
                Array.from({ length: completeApps.length ? 3 - completeApps.length : 3 }).map((_, i) => <ProjectPlaceholder key={i} />)
              )}
            </div>
          </div>
        )}

        {!!smallProjects.length && (
          <div id="small-apps">
            <div className="flex flex-col gap-4">
              <SubTitle>small-projects</SubTitle>
              <div className="flex flex-col gap-4 sm:flex-row">
                {smallProjects?.map((project) => <ProjectCard key={project.id} project={project} />)}

                {(!smallProjects?.length || smallProjects?.length < 3) && (
                  Array.from({ length: smallProjects.length ? 3 - smallProjects.length : 3 }).map((_, i) => <ProjectPlaceholder key={i} />)
                )}
              </div>
            </div>
          </div>
        )}

        {!projects?.length && (
          <div id="placeholders" className="flex flex-col gap-4 sm:flex-row">
            {Array.from({ length: 3 }).map((_, i) => <ProjectPlaceholder key={i} />)}
          </div>
        )}
      </section>
    </main>
  </>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await prisma.project.findMany();

  return {
    props: {
      projects
    }
  }
}
