import { Source } from "@prisma/client";
import { getSources, getSourcesFor } from "lib/source/source.service";
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
  const resourceType = req?.query?.resourcetype
  let sources: Source[]
  if (resourceType) {
    sources = await getSourcesFor(resourceType);
  } else {
    sources = await getSources();
  }
  res.status(200).json(sources);
}
