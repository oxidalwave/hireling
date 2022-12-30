import { PlayerCharacter } from "@prisma/client";
import {
  getPlayerCharacterById
} from "lib/playercharacters/playercharacters.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await handleGet(req, res);
      break;
    default:
      res.status(405).json({});
      break;
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const id: string | string[] | undefined = req.query.id;
  if (typeof id !== "string") {
    res.status(400).json({ error: `Bad ID: ${id}` });
  } else {
    const ancestry = await getPlayerCharacterById(id);
    res.status(200).json(ancestry);
  }
}
