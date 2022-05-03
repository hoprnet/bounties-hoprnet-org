import type { AnyBounty } from "../../shared/types";
import { BountyCell } from "./bounty-cell";
import styles from "../../styles/components/bounties-grid.module.css";
import { Spinner } from "./spinner";

export const BountiesGrid: React.FC<{
  bounties: AnyBounty[];
  showcase?: boolean;
}> = ({ bounties, showcase }) => {
  return (
    <div>
      <div className={styles.container}>
        {bounties &&
          bounties.map((bounty) => (
            <BountyCell
              key={bounty.bountyServiceUrl}
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
