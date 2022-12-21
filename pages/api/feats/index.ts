import { PlayerClassFeat } from "@prisma/client";
import { getClassFeats, getFeats } from "lib/feats/feats.service";
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
  const className = req.query.className;
  if (typeof className === 'string') {
    const classFeats = await getClassFeats(className);
    res.status(200).json(classFeats);
  } else {
    const classFeats = await getFeats();
    res.status(200).json(classFeats);
  }
}
