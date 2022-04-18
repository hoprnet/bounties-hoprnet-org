import { CSSProperties } from "react";
import { BountyCell, IBounty } from "./bounty-cell";

export const BountiesGrid: React.FC<{
  bounties: IBounty[];
  showcase?: boolean;
}> = ({ bounties, showcase }) => {
  return (
    <div style={styles.container}>
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
          <BountyCell bounty={bounty} showcase={showcase} />
        )
      )}
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    display: "grid",
    gridTemplateColumns: "300px 300px 300px",
    columnGap: 20,
    rowGap: 58,
    justifyContent: "center",
  },
};
