import type { NextApiRequest, NextApiResponse } from "next";
import type { Bounty } from "../../../shared/types";
import { getHomePageBounties } from "../../../shared/sheet";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<{
    bounties: Bounty[];
  }>
) {
  const bounties = await getHomePageBounties();

  res.setHeader("Cache-Control", "s-maxage=600");
  res.status(200).json({
    bounties,
  });
}
