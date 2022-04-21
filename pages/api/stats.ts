import type { NextApiRequest, NextApiResponse } from "next";
import type { IStats } from "../../shared/stats";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IStats>
) {
  res.status(200).json({
    active: 3,
    completed: 3,
    totalPayout: 3504,
    hunters: 4,
  });
}
