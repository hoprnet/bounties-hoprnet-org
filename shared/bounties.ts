export enum BountyStatusE {
  COMPLETED = "COMPLETED",
  TAKEN = "TAKEN",
  AVAILABLE = "AVAILABLE",
}

export interface IBounty {
  title: string;
  status: BountyStatusE;
  price: string;
  description: string;
  date: string;
  bountyServiceUrl?: string;
  submissionUrl?: string;
  demoUrl?: string;
}
