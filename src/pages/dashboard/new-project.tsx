import Head from "next/head";
import { Menu } from "./index"
import { NewProjectForm } from "@components/Form";

export default function NewProject() {
  return (
    <>
      <Head>
        <title>Dashboard | Add New Project</title>
      </Head>
      <main className="w-full m-4 px-2 sm:m-0 sm:max-w-screen-lg flex flex-col gap-8">
        <Menu />
        <NewProjectForm />
      </main>
    </>
  )
}
