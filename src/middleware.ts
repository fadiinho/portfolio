import { withAuth } from "next-auth/middleware";

export default withAuth(
  {
    callbacks: {
      authorized: async ({ token }) => {
        if (token) return token.role === "admin";

        return false;
      }
    }
  }
);

export const config = { matcher: ['/dashboard/:path*'] };
