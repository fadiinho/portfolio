import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const dbUser = await prisma.user.findUnique({
        where: {
          id: user.id
        }
      }).catch((error) => error);

      if (dbUser?.role) { 
        session.user.role = dbUser.role;
      } else {
        session.user.role = "user";
      }

      return session;
    }
  },
  pages: {
    signOut: "/",
    error: '/'
  },
  debug: process.env.NODE_ENV !== "production"
}


export default NextAuth(authOptions)
