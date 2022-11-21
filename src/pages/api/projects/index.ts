import { prisma } from "@lib/prisma";
import { Project } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

type PrismaResponse = ReturnType<typeof prisma.project.create> | Error;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await unstable_getServerSession(req, res, authOptions);

  switch (req.method) {
    case "GET":
      const projects = await prisma.project.findMany();

      res.status(200).json(projects);
      return;

    case "POST":
      if (!session || session.user.role !==  "admin") {
        res.status(401).end();
        return;
      }

      const data = req.body as Project;

      if (Object.keys(data).length < 4 && data.constructor === Object) {
        res.status(400).json({
          message: `Body is missing required properties`
        })
        return;
      }

      const { status, prismaResponse } = await createProject(data);

      res.status(status).json(prismaResponse);
      return
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      return
  }

}

export const createProject = async (data: Project) => {
  const prismaResponse: PrismaResponse = await prisma.project.create({ data: {
    name: data.name,
    description: data.description,
    screenshotUrl: data.screenshotUrl,
    github: data.github,
    liveDemo: data.liveDemo,
    stacks: data.stacks!,
  }}).catch((error) => error);


  if (prismaResponse instanceof Error) {
    return {
      status: 400,
      prismaResponse: {
        cause: prismaResponse.cause,
        message: prismaResponse.message
      }
    };
  }
  
  return { status: 201, prismaResponse };
}
