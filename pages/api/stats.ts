import type { NextApiRequest, NextApiResponse } from "next";
import type { IStats } from "../../shared/stats";
import initializeSheet from "../../shared/sheet";

const KEYS = <const>[
  "N_AVAIL_BOUNTIES",
  "N_ACTIVE_BOUNTIES",
  "N_COMPLETED_BOUNTIES",
  "TOTAL_AMOUNT_AWARDED_USD",
  "TOTAL_UNIQUE_HUNTERS",
];

const getStats = async (): Promise<Record<typeof KEYS[number], number>> => {
  const sheet = await initializeSheet();
  await sheet.loadInfo();
  const apiSheet = sheet.sheetsByTitle.API;
  const rows = await apiSheet.getRows();
  const result: Record<typeof KEYS[number], number> = {} as any;

  for (const row of rows) {
    if (KEYS.includes(row.key)) {
      result[row.key as typeof KEYS[number]] = Number(row.value);
    }
  }

  return result;
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IStats>
) {
  const stats = await getStats();

  res.setHeader("Cache-Control", "s-maxage=600");
  res.status(200).json({
    available: stats.N_AVAIL_BOUNTIES,
    active: stats.N_ACTIVE_BOUNTIES,
    completed: stats.N_COMPLETED_BOUNTIES,
    totalPayout: stats.TOTAL_AMOUNT_AWARDED_USD,
    hunters: stats.TOTAL_UNIQUE_HUNTERS,
  });
}
