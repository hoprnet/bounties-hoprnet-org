import { IStats } from "../shared/stats";
import styles from "../styles/components/bounties-stats-row.module.css";
import { Spinner } from "./spinner";

export const BountiesStatsRow: React.FC<{ stats: IStats }> = ({ stats }) => {
  return (
    <div className={styles.container}>
      <BountyStatCell text={"ACTIVE BOUNTIES"} value={stats?.active} />
      <BountyStatCell text={"COMPLETED BOUNTIES"} value={stats?.completed} />
      <BountyStatCell
        text={"TOTAL PAYOUT"}
        value={stats?.totalPayout}
        unit={"USD*"}
      />
      <BountyStatCell text={"HUNTERS"} value={stats?.hunters} />
    </div>
  );
};

const BountyStatCell: React.FC<{
  text: string;
  value: number;
  unit?: string;
}> = ({ text, value, unit }) => {
  return (
    <div className={styles.cell}>
      <div>{text}</div>
      {value ? (
        <div className={styles.cellValue}>
          {value}
          <div className={styles.cellUnitWrapper}>
            {unit && <div className={styles.cellUnit}>{unit}</div>}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
