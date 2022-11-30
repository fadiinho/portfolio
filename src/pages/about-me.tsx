import Head from "next/head";
import SubTitle from "@components/SubTitle";
import SkillCard from "@components/SkillCard";

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <main className="px-2 w-full m-4 sm:m-0 sm:max-w-screen-lg flex flex-col gap-4">
        <section>
          <SubTitle titleChar="/" >about-me</SubTitle>
          <div id="about" className="flex flex-col sm:flex-row">
            <div className="max-w-xl text-secondary flex flex-col justify-evenly">
              <p>
                I&apos;m a self-taught Fullstack Developer and I can develop full responsive websites from scratch.
                I can develop creative solutions and raise your idea into concrete websites.
              </p>
              <p>Always learning and growing my knowledge.</p>
            </div>
            <div className="w-[340px] h-[340px] bg-blend-lighten bg-background bg-no-repeat bg-center bg-cover bg-akame rounded-3xl"></div>
          </div>
        </section>
        <section id="skills" className="flex flex-col justify-center items-center">
          <SubTitle className="self-start">skills</SubTitle>
          <div className="sm:p-2 w-auto sm:w-full flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
            <SkillCard title="Languages" skills={[ "TypeScript", "Javascript", "Lua", "Python", "Rust", "HTML", "CSS", "C#" ]}/>
            <SkillCard title="Frameworks" skills={[ "React", "Svelte", "Flask", "Discord.js", "Express.js", "NextJS", "p5js" ]}/>
          </div>
        </section>
      </main>
    </>
  )
}

