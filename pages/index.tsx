import Link from "next/link"
import Head from "next/head";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProjectCard, { Project } from "../components/ProjectCard"
import Socials, { githubProfile, discordProfile } from "../components/Socials";
import SkillCard from "../components/SkillCard";

import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"
import Tooltip from "../components/Tooltip";

const projects: Project[] = [{
  name: "Rest Countries App",
  github: "https://github.com/fadiinho/rest-countries-api",
  screenshot: "https://i.imgur.com/5MVvHvB.png",
  description: "Website to search countries.",
  liveDemo: "https://rest-countries-api-fadiinho.vercel.app",
  stacks: ["React", "TailwindCSS", "Typescript", "NodeJS"]
}, 
{
  name: "Rest Countries App 2",
  github: "https://github.com/fadiinho/rest-countries-api",
  screenshot: "https://i.imgur.com/5MVvHvB.png",
  description: "Website to search countries.",
  liveDemo: "https://rest-countries-api-fadiinho.vercel.app",
  stacks: ["React", "TailwindCSS", "Typescript", "NodeJS"]
}, {
  name: "Rest Countries App 3",
  github: "https://github.com/fadiinho/rest-countries-api",
  screenshot: "https://i.imgur.com/5MVvHvB.png",
  description: "Website to search countries.",
  liveDemo: "https://rest-countries-api-fadiinho.vercel.app",
  stacks: ["React", "TailwindCSS", "Typescript", "NodeJS"]
}]

const SubTitle = ({ children, className }: { children: string, className?: string }) => {
  return (
    <h2 className={`my-2 font-bold text-xl tracking-widest sm:text-2xl ${className ?? ""}`}>
      <span className="text-primary">#</span>
      {children}
    </h2>
  )
}

export default function Home() {
  return (
    <> 
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <main className="m-4 px-2 sm:m-0 sm:max-w-screen-lg flex flex-col gap-8">
        <Socials className="hidden left-2 top-0 sm:flex sm:flex-col sm:absolute sm:gap-4 sm:items-center">
          <div className="w-1 h-52 bg-secondary sm:opacity-50"></div>
        </Socials>
        <section className="my-8 sm:flex sm:flex-row sm:justify-center sm:gap-8">
          <div className="max-w-2xl sm:flex sm:flex-col sm:justify-center sm:gap-4 whitespace-normal">
            <h1 className="my-2 text-4xl font-bold">Emerson do Amaral (aka Fadiinho) is a <span className="text-primary">fullstack</span> developer.</h1>
            <p className="text-secondary">Fullstack developer experienced with modern and responsive websites, always looking to grow my knowledge.</p>
          </div>
          <div className="w-[340px] h-[340px] bg-blend-lighten bg-background bg-no-repeat bg-center bg-cover bg-kanae-kocho"></div>
        </section>
        <section id="projects" className="flex flex-col justify-center items-center gap-4">
          <div className="w-full flex flex-row items-center justify-between">
            <SubTitle>projects</SubTitle>
            <Link className="text-secondary hover:text-white flex flex-row items-center gap-1 cursor-pointer" href="/projects">
              View all
              <AiOutlineArrowRight size="20"/>
            </Link>
          </div>
          <div className="w-full flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
          </div>
        </section>
        <section id="skills" className="flex flex-col justify-center items-center">
          <SubTitle className="self-start">skills</SubTitle>
          <div className="sm:p-2 w-auto sm:w-full flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
            <SkillCard title="Languages" skills={[ "TypeScript", "Javascript", "Lua", "Python", "Rust", "HTML", "CSS" ]}/>
            <SkillCard title="Frameworks" skills={[ "React", "Svelte", "Flask", "Discord.js", "Express.js", "NextJS", "p5js" ]}/>
          </div>
        </section>
        <section id="about-me" className="flex flex-col">
          <SubTitle>about-me</SubTitle>
          <div className="p-2 flex flex-col sm:flex-row justify-between">
            <p className="text-secondary">
              I&apos;m a self-taught Fullstack Developer and I can develop full responsive websites from scratch.
            </p>
            <div className="w-[340px] h-[340px] bg-blend-lighten bg-background bg-no-repeat bg-center bg-cover bg-kanae-kocho-2"></div>
          </div>
        </section>
        <section id="contacts" className="flex flex-col">
          <SubTitle>contacts</SubTitle>
          <div className="p-2 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-start sm:gap-0">
            <p className="text-secondary">
              I&apos;m interested in any freelance opportunities.
              Don&apos;t hesitate to contact me.
            </p>
            <div className="p-2 border border-secondary border-opacity-50 rounded">
              <p className="font-semibold">Message me here</p>
              <Tooltip
                onClick={() => navigator.clipboard.writeText("ffadiinho@gmail.com") }
                text="Copy Email">
                <div className="flex items-center text-secondary gap-2 cursor-pointer">
                  <AiOutlineMail className="text-secondary hover:text-white cursor-pointer" size="32"/>
                  ffadiinho@gmail.com
                </div>
              </Tooltip>

              <Tooltip
                onClick={() => navigator.clipboard.writeText("Fadiinho#5739") }
                text="Copy Discord Tag">
                <div className="flex items-center text-secondary gap-2 cursor-pointer">
                  <FaDiscord className="text-secondary hover:text-white cursor-pointer" size="32"/>
                  Fadiinho#5739
                </div>
              </Tooltip>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
