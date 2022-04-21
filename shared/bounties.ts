export enum BountyStatusE {
  COMPLETED = "COMPLETED",
  TAKEN = "TAKEN",
}

export interface IBounty {
  title: string;
  url: string;
  status: BountyStatusE;
  price: number;
  // description: string;
  // date: string;
}
