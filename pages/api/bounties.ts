import type { NextApiRequest, NextApiResponse } from "next";
import { type IBounty } from "../../shared/bounties";

type Data = {
  bounties: IBounty[];
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    bounties: [],
  });
}
