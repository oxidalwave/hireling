import { createEquipment, getAllEquipment } from "lib/equipment/equipment.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      handleGet(req, res);
      break;
    default:
      res.status(405).json({});
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const equipment = await getAllEquipment();
  res.status(200).json(equipment);
}
