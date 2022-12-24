import { Background } from "@prisma/client";
import {
  deleteBackground,
  getBackground,
  updateBackground,
} from "lib/backgrounds/backgrounds.service";
import { getFreeBoosts } from "lib/boosts/boosts.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "DELETE":
      await handleDelete(req, res);
      break;
    case "GET":
      await handleGet(req, res);
      break;
    case "PUT":
      await handlePut(req, res);
      break;
    default:
      res.status(405).json({});
      break;
  }
}

async function handleDelete(
  req: NextApiRequest,
  res: NextApiResponse<Background | { error }>
) {
  const id: string | string[] | undefined = req.query.id;
  if (id !== "string") {
    res.status(400).json({ error: `Bad ID` });
  } else {
    const background = await deleteBackground(id);
    if (background === undefined) {
      res.status(404).json({ error: "Background could not be found" });
    } else {
      res.status(200).json(background);
    }
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const id: string | string[] | undefined = req.query.id;
  if (id !== "string") {
    const background = await getBackground(id);
    if (background === null) {
      res.status(404).json({ error: "Background could not be found" });
    } else {
      res.status(200).json(background);
    }
  } else {
    res.status(400).json({ error: "Bad ID" });
  }
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  const id: string | string[] | undefined = req.query.id;
  const backgroundDto: Omit<Background, "id"> = req.body;
  const sourceName: string | string[] | undefined = req.body.source;
  if (typeof id !== "string") {
    res.status(400).json({ error: `Bad ID` });
  } else if (typeof sourceName !== "string") {
    res.status(400).json({ error: `Bad source name: ${sourceName}` });
  } else {
    const background = await updateBackground(id, backgroundDto, sourceName);
    res.status(201).json(background);
  }
}
