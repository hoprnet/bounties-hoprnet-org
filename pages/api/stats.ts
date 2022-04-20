import type { NextApiRequest, NextApiResponse } from "next";
import { exampleStats, IStats } from "../../shared/stats";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IStats>
) {
  res.status(200).json(exampleStats);
}
