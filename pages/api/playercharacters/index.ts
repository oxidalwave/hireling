import {
  createPlayerCharacter,
  getPlayerCharacters,
  getUserPlayerCharacters,
} from "lib/playercharacters/playercharacters.service";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await handleGet(req, res);
      break;
    case "POST":
      await handlePost(req, res);
      break;
    default:
      res.status(405).json({});
      break;
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  try {
    let playercharacters;
    if (req.query.email) {
      playercharacters = await getUserPlayerCharacters(req.query.email);
    } else {
      playercharacters = await getPlayerCharacters();
    }
    res.status(200).json(playercharacters);
  } catch (e) {
    res.status(500).json({ message: e });
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (session) {
    const email = session.user?.email;
    if (email) {
      const character = await createPlayerCharacter(email, req.body);
      res.status(201).json(character);
    } else {
      res.status(500).json({ error: 'No email was defined for the user' })
    }
    res.status(200).json({ error: 'Character Creation is not yet available' })
  } else {
    res.status(200).json({ error: "Please log in for this functionality" })
  }
}
