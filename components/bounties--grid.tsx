import { BountyCell, IBounty } from "./bounty-cell";
import styles from "../styles/components/bounties-grid.module.css";

export const BountiesGrid: React.FC<{
  bounties: IBounty[];
  showcase?: boolean;
}> = ({ bounties, showcase }) => {
  return (
    <div className={styles.container}>
      {bounties.map((bounty) =>
        showcase ? (
          <a
            key={bounty.url}
            href={bounty.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BountyCell bounty={bounty} showcase={showcase} />
          </a>
        ) : (
          <BountyCell key={bounty.url} bounty={bounty} showcase={showcase} />
        )
      )}
    </div>
  );
};
