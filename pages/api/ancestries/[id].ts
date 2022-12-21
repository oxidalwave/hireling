import { Ancestry } from "@prisma/client";
import {
  deleteAncestry,
  getAncestryById,
  updateAncestry,
} from "lib/ancestry/ancestry.service";
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

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const id: string | string[] | undefined = req.query.id;
  if (typeof id !== "string") {
    res.status(400).json({ error: `Bad ID: ${id}` });
  } else {
    const ancestry = await deleteAncestry(id);
    res.status(200).json(ancestry);
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const id: string | string[] | undefined = req.query.id;
  if (typeof id !== "string") {
    res.status(400).json({ error: `Bad ID: ${id}` });
  } else {
    const ancestry = await getAncestryById(id);
    res.status(200).json(ancestry);
  }
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  const id: string | string[] | undefined = req.query.id;
  const ancestryDto: Omit<Ancestry, "id"> = req.body;
  const sourceName: string | string[] | undefined = req.body.source;
  if (typeof id !== "string") {
    res.status(400).json({ error: `Bad ID: ${id}` });
  } else if (typeof sourceName !== "string") {
    res.status(400).json({ error: `Bad source name: ${sourceName}` });
  } else {
    const ancestry = await updateAncestry(id, ancestryDto, sourceName);
    res.status(201).json(ancestry);
  }
}
