export enum BountyStatusE {
  COMPLETED = "COMPLETED",
  TAKEN = "TAKEN",
}

export interface IBounty {
  date: string;
  status: BountyStatusE;
  price: number;
  title: string;
  description: string;
  url: string;
}

export const exampleBounty = {
  date: "10rd April 2022",
  description:
    "A 2-day conference (+ 2-day hackathon) to unite all regens in the capital of Europe and explore the potential of Web3 to regenerate the ea...",
  price: 0.2,
  status: BountyStatusE.COMPLETED,
  title: "HOPR - decentralized privacy-preserving messaging protocol",
  url: "https://gitcoin.com",
};
