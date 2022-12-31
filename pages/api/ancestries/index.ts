import { Ancestry } from "@prisma/client";
import { createAncestry, getAncestries } from "lib/ancestry/ancestries.service";
import { NextApiRequest, NextApiResponse } from "next";

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
  const ancestries = await getAncestries();
  res.status(200).json(ancestries);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const ancestryDto: Omit<Ancestry, "id"> = req.body;
  const sourceName: string | string[] | undefined = req.body.source;
  if (typeof sourceName !== "string") {
    res.status(400).json({ error: `Bad source name: ${sourceName}` });
  } else {
    const ancestry = await createAncestry(ancestryDto, sourceName);
    res.status(201).json(ancestry);
  }
}
