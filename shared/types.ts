export interface Bounty {
  title: string;
  description: string;
  prize: string;
  status: "AVAILABLE" | "TAKEN" | "COMPLETED";
  submittedOn: string;
  completedOn: string;
  bountyGithubUrl: string;
  bountyServiceUrl: string;
  contest: boolean;
  category: "development" | "analytics" | "documentation" | "dapp"
}

export interface BountyCompleted extends Bounty {
  submissionUrl: string;
  demoUrl: string;
}

export type AnyBounty = Partial<BountyCompleted> & Bounty;

export interface Statistics {
  available: number;
  active: number;
  completed: number;
  totalPayout: number;
  hunters: number;
}
