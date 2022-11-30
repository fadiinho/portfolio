import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@lib/prisma";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // @ts-ignore
      if (token?.role) {
        // @ts-ignore
        session.user.role = token.role;
      } else {
        session.user.role = "user";
      }

      return session;
    },
    async jwt({ token, user }) {
      // @ts-ignore
      if (user && user?.role) {
        // @ts-ignore
        token.role = user.role;
      }

      return token;
    }
  },
  pages: {
    signOut: "/",
    error: '/'
  },
  debug: process.env.NODE_ENV !== "production"
}


export default NextAuth(authOptions)
