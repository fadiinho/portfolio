import Head from "next/head";

import { GetServerSideProps } from "next/types";
import { authOptions } from "@pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

import { HiOutlinePlusCircle, HiOutlineViewList, HiX } from "react-icons/hi";

import { Navitem } from "@components/Navbar";
import { useEffect, useState } from "react";
import { Project } from "@prisma/client";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }

  if (session?.user.role !== "admin") {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export const Menu = () => {
  return (
    <>
      <div className="w-full bg-background left-0 flex border-b border-t border-secondary">
        <ul className="w-full flex justify-around">
          <Navitem href="/dashboard">
            <HiOutlineViewList size="32" />
            <p className="text-sm pl-2">List</p>
          </Navitem>

          <Navitem href="/dashboard/new-project">
            <HiOutlinePlusCircle size="32" />
            <p className="text-sm pl-2">Add</p>
          </Navitem>
        </ul>
      </div>
    </>
  )
}

const ProjectItem = ({ id, name, screenshotUrl, onClick, removeProject }: Project & { onClick: (id: string) => void, removeProject: (id: string) => void }) => {
  return (
    <div onClick={() => onClick(id)} className="text-secondary text-center border border-secondary border-opacity-50 rounded relative flex flex-col">
      <HiX onClick={() => removeProject(id)} className="absolute right-0 hover:text-white" size="28" />
      {screenshotUrl && ( <img className="w-44" src={screenshotUrl} alt={`${name} Screenshot`}/> )}
      <div className="w-full px-2">
        <p className="text-ellipsis whitespace-nowrap overflow-hidden max-w-[160px]">{name}</p>
      </div>
    </div>
  )
}

// const EditProjectModal = ({ name, description, screenshotUrl, github, liveDemo, stacks, closeModal }: Project & { closeModal: () => void }) => {
//   const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//   }
//
//   return (
//     <div className="p-4 absolute bg-background border border-secondary rounded flex flex-col gap-4">
//       <div className="w-full flex justify-between items-center">
//         <h3 className="font-semibold">Update Project</h3>
//         <HiX onClick={closeModal} className="self-end" size="32" />
//       </div>
//       <form
//         id="new-project-form"
//         className="flex flex-col gap-4 items-center"
//         onSubmit={handleFormSubmit}
//         action="/api/projects/update"
//         method="post"
//       >
//         <Input
//           placeholderAlwaysVisible
//           placeholder="Name" 
//           defaultValue={name}
//         />
//         <Input 
//           placeholderAlwaysVisible 
//           placeholder="Description" 
//           defaultValue={description}
//         />
//         <Input 
//           placeholderAlwaysVisible 
//           placeholder="Github URL" 
//           defaultValue={github}
//         />
//         <Input 
//           placeholderAlwaysVisible={!!screenshotUrl} 
//           required={false}
//           placeholder="Demo URL"
//           defaultValue={liveDemo ?? ""}
//         />
//         <Input
//           placeholderAlwaysVisible 
//           placeholder="Screenshot URL" 
//           defaultValue={screenshotUrl ?? ""}
//         />
//         <Input 
//           placeholderAlwaysVisible 
//           placeholder="Stacks" 
//           defaultValue={(stacks as string[]).join(", ")}
//
//         />
//         <button type="submit" className="px-2 py-1 max-w-min border border-primary rounded hover:bg-primary hover:bg-opacity-20">Update</button>
//       </form>
//     </div>
//   )
// }

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);

  const removeProject = () => {
    // TODO: handle remove project
  }

  const getProjects = async () => {
    const _projects = await fetch("/api/projects");
    setProjects(await _projects.json());
  }

  useEffect(() => {
    getProjects()
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className="w-full m-4 sm:m-0 sm:max-w-screen-lg flex flex-col gap-4">
        <Menu />
        <div id="projects-list" className="grid grid-cols-2 justify-items-center gap-4">
          {projects.map((project) => (
            <ProjectItem removeProject={removeProject} onClick={() => {}} key={project.id} {...project} />
          ))}
          {/* {selectedProjectId && ( */}
          {/*   <EditProjectModal closeModal={() => setSelectedProjectId("")} {...projects.find((_proj) => _proj.id === selectedProjectId)!} /> */}
          {/* )} */}
        </div>
      </main>
    </>
  )
}
