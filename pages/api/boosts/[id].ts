import { getBoost, getFreeBoosts } from "lib/boosts/boosts.service";
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
  if (typeof id === "string") {
    let boosts;
    if (id === "free") {
      const take = Number(req.query.take) ?? 4;
      boosts = await getFreeBoosts(take);
    } else {
      boosts = await getBoost(id);
    }
    res.status(200).json(boosts);
  } else if (id === null) {
    res.status(404).json({ error: "Boost could not be found" });
  } else {
    res.status(400).json({ error: "Boost must be a string" });
  }
}
