import type { NextApiRequest, NextApiResponse } from "next";
import type { BountyCompleted } from "../../../shared/types";
import { getShowcaseBounties } from "../../../shared/sheet";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<{
    bounties: BountyCompleted[];
  }>
) {
  const bounties = await getShowcaseBounties();

  res.setHeader("Cache-Control", "s-maxage=600");
  res.status(200).json({
    bounties,
  });
}
