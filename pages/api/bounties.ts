import type { NextApiRequest, NextApiResponse } from "next";
import { BountyStatusE, type IBounty } from "../../shared/bounties";
import initializeSheet from "../../shared/sheet";
// import fetch from "node-fetch";

const getBounties = async (): Promise<IBounty[]> => {
  const sheet = await initializeSheet();
  await sheet.loadInfo();
  const bountiesSheet = sheet.sheetsByTitle.bounties;
  const rows = await bountiesSheet.getRows();

  const bounties: IBounty[] = await Promise.all(
    rows.map(async (row) => {
      try {
        const status =
          row.status === "paid"
            ? BountyStatusE.COMPLETED
            : row.status === "submitted"
            ? BountyStatusE.AVAILABLE
            : row.status === "in progress"
            ? BountyStatusE.TAKEN
            : undefined;
        if (!status) return {} as IBounty;

        // const url = `https://api.github.com/repos/hoprnet/hoprnet/issues/${row.link.slice(
        //   1
        // )}`;
        // const githubInfo = await fetch(url).then(
        //   (res) =>
        //     res.json() as Promise<{
        //       url: string;
        //       html_url: string;
        //       title: string;
        //     }>
        // );

        return {
          title: row.title,
          status,
          price: row["prize (USD)"],
          bountyGithubUrl: row.link,
          bountyServiceUrl: row["service url"],
          submissionUrl: row["submission url"],
          demoUrl: row["demo url"],
          description: row["description"],
          date: row["submitted on"].slice(1),
        } as IBounty;
      } catch (error) {
        console.error(error);
        return {} as IBounty;
      }
    })
  ).then((res) => res.filter((b) => !!b.status));

  return bounties;
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<{
    bounties: IBounty[];
  }>
) {
  const bounties = await getBounties();

  res.status(200).json({
    bounties,
  });
}
