import Head from "next/head";
import { signIn } from "next-auth/react";
import { GetServerSideProps } from "next";
import { AiOutlineGithub } from "react-icons/ai";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session && session?.user.role !== "admin") {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false
      }
    }
  }

  return {
    props: {

    }
  }
}

export default function Login() {
  const handleSignIn = () => {
    signIn("github");
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <button 
        className="p-1 border border-primary hover:bg-primary hover:bg-opacity-20 rounded"
        onClick={handleSignIn}>
        <AiOutlineGithub size="32" />
      </button>
    </>
  )
}
