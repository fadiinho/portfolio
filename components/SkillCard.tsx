
export default function SkillCard({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div className="text-md text-secondary border border-secondary border-opacity-50 rounded">
      <p className="p-2 text-white font-bold border-b border-secondary border-opacity-50">{title}</p>
      <div className="p-2 max-w-[200px] flex flex-row flex-wrap">
        {skills.map((skill) => <p className="mx-1" key={skill}>{skill}</p>)}
      </div>
    </div>
  )

}
