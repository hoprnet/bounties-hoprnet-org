import type { NextApiRequest, NextApiResponse } from "next";
import { exampleBounty, IBounty } from "../../shared/bounties";

type Data = {
  bounties: IBounty[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    bounties: [
      exampleBounty,
      exampleBounty,
      exampleBounty,
      exampleBounty,
      exampleBounty,
      exampleBounty,
    ],
  });
}
