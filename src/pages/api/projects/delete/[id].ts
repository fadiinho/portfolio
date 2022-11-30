import { PrismaResponse } from "../index";
import { prisma } from "@lib/prisma";

import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (req.method !== "DELETE") {
    res.setHeader('Allow', ['DELETE'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
    return;
  }

  if (!session || session.user.role !== "admin") {
    res.status(401).end();
    return;
  }

  const { id } = req.query;
  
  const { status, prismaResponse } = await deleteProject(id as string);
  res.status(status).json(prismaResponse);
}

export const deleteProject = async (id: string) => {
  const prismaResponse: PrismaResponse = await prisma.project.delete({
    where: {
      id: id
    }
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
  
  return { status: 200, prismaResponse };
}
