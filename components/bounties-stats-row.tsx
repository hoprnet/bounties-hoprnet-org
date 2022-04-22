import { useWindowSize } from "../hooks/windowSize";
import { IStats } from "../shared/stats";
import styles from "../styles/components/bounties-stats-row.module.css";
import { Spinner } from "./spinner";

export const BountiesStatsRow: React.FC<{ stats: IStats }> = ({ stats }) => {
  const windowSize = useWindowSize();
  const mobile = (windowSize.width || 0) <= 650;

  return (
    <div className={styles.container}>
      <BountyStatCell
        text={"AVAILABLE BOUNTIES"}
        value={stats?.active}
        mobile={mobile}
      />
      <BountyStatCell
        text={"COMPLETED BOUNTIES"}
        value={stats?.completed}
        mobile={mobile}
      />
      <BountyStatCell
        text={"TOTAL PAYOUT"}
        value={stats?.totalPayout}
        unit={"USD*"}
        mobile={mobile}
      />
      <BountyStatCell text={"HUNTERS"} value={stats?.hunters} mobile={mobile} />
    </div>
  );
};

const BountyStatCell: React.FC<{
  mobile: boolean;
  text: string;
  value: number;
  unit?: string;
}> = ({ text, value, unit, mobile }) => {
  return (
    <div className={styles.cell}>
      <div>{text}</div>
      {value ? (
        <div className={styles.cellValue}>
          {value}
          {unit && <pre className={styles.cellUnit}>{unit}</pre>}
        </div>
      ) : (
        <Spinner size={mobile ? 20 : 50} />
      )}
    </div>
  );
};
