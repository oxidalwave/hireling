import {
  getAbilityScoreBoostById,
  getFreeAbilityScoreBoosts,
} from "lib/abilityScoreBoosts/abilityScoreBoosts.service";
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
    let abilityScoreBoost;
    if (id === "free") {
      const take = Number(req.query.take) ?? 4;
      abilityScoreBoost = await getFreeAbilityScoreBoosts(4);
    } else {
      abilityScoreBoost = await getAbilityScoreBoostById(id);
    }
    res.status(200).json(abilityScoreBoost);
  } else if (id === null) {
    res.status(404).json({ error: "Ability Score Boost could not be found" });
  } else {
    res.status(400).json({ error: "Ability Score Boost must be a string" });
  }
}
