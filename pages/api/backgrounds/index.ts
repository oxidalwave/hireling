import {
  createBackground,
  getBackgrounds,
} from "lib/backgrounds/backgrounds.service";
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
  const Backgrounds = await getBackgrounds();
  res.status(200).json(Backgrounds);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const ancestry = await createBackground(req.body, req.body.source);
  res.status(201).json(ancestry);
}
