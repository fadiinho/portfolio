import Head from "next/head";
import { signOut } from "next-auth/react";
import { GetServerSideProps } from "next/types";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

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

export default function Dashboard() {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" })
  }
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>Dashboard</div>
      <button className="p-1 border border-primary hover:bg-primary hover:bg-opacity-20 rounded" onClick={handleSignOut}>Sign out</button>
    </>
  )
}
