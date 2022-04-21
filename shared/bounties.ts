export enum BountyStatusE {
  COMPLETED = "COMPLETED",
  TAKEN = "TAKEN",
  AVAILABLE = "AVAILABLE",
}

export interface IBounty {
  title: string;
  status: BountyStatusE;
  price: number;
  description: string;
  date: string;
  bountyGithubUrl: string;
  bountyServiceUrl?: string;
  submissionUrl?: string;
  demoUrl?: string;
}
