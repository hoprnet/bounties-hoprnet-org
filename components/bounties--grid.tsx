import { CSSProperties } from "react";
import { BountyCell, IBounty } from "./bounty-cell";

export const BountiesGrid: React.FC<{ bounties: IBounty[] }> = ({
  bounties,
}) => {
  return (
    <div style={styles.container}>
      {bounties.map((bounty) => (
        <BountyCell bounty={bounty} />
      ))}
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    columnGap: 20,
    rowGap: 58,
  },
};
