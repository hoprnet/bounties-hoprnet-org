import { BountyCell } from "./bounty-cell";
import styles from "../styles/components/bounties-grid.module.css";
import { IBounty } from "../shared/bounties";
import { Spinner } from "./spinner";

export const BountiesGrid: React.FC<{
  bounties: IBounty[];
  showcase?: boolean;
}> = ({ bounties, showcase }) => {
  return (
    <div>
      <div className={styles.container}>
        {bounties &&
          bounties.map((bounty) => (
            <BountyCell
              key={bounty.bountyGithubUrl}
              bounty={bounty}
              showcase={showcase}
            />
          ))}
      </div>
      <div className={styles.spinnerWrapper}>
        {(!bounties || bounties.length <= 0) && <Spinner size={50} />}
      </div>
    </div>
  );
};
