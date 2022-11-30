import { prisma } from "@lib/prisma";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { Project } from "@prisma/client";
import { PrismaResponse } from ".";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await unstable_getServerSession(req, res, authOptions);

  switch (req.method) {
    case "POST":
      if (!session || session.user.role !==  "admin") {
        res.status(401).end();
        return;
      }

      const data = req.body as Project;

      res.json(data)
      return;

      if (Object.keys(data).length < 4 && data.constructor === Object) {
        res.status(400).json({
          message: `Body is missing required properties`
        })
        return;
      }

      const { status, prismaResponse } = await updateProject({...data, stacks: (data.stacks as string).split(', ') });

      res.status(status).json(prismaResponse);
      return
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      return
  }
}

const updateProject = async (_project: Partial<Project>) => {
  const { id, stacks, ...project} = _project;
  const prismaResponse: PrismaResponse = await prisma.project.update({
    where: {
      id: id
    },
    data: { stacks: stacks as string[], ...project }
  }).catch((error) => error);

  if (prismaResponse instanceof Error) {
    return {
      status: 500,
      prismaResponse: {
        cause: prismaResponse.cause,
        message: prismaResponse.message
      }
    };
  }

  return { status: 200, prismaResponse }
}
