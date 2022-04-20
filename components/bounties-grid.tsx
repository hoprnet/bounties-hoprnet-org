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
          bounties.map((bounty) =>
            showcase ? (
              // <a
              //   key={bounty.url}
              //   href={bounty.url}
              //   target="_blank"
              //   rel="noopener noreferrer"
              // >
              <BountyCell bounty={bounty} showcase={showcase} />
            ) : (
              // </a>
              <BountyCell
                key={bounty.url}
                bounty={bounty}
                showcase={showcase}
              />
            )
          )}
      </div>
      <div className={styles.spinnerWrapper}>
        {(!bounties || bounties.length <= 0) && <Spinner />}
      </div>
    </div>
  );
};
