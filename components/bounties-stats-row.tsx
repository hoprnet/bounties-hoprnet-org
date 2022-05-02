import { useWindowSize } from "../hooks/windowSize";
import { IStats } from "../shared/stats";
import styles from "../styles/components/bounties-stats-row.module.css";
import { Spinner } from "./spinner";

export const BountiesStatsRow: React.FC<{ stats: IStats }> = ({ stats }) => {
  const windowSize = useWindowSize();
  // because of design to fit bounties in one row on tablet we make cells look like mobile ones faster
  // thats why here 'mobile' starts from 760px instead of usual 650px
  const mobile = (windowSize.width || 0) <= 760;
  const tablet = (windowSize.width || 0) <= 1000;
  const resolution = mobile ? "mobile" : tablet ? "tablet" : "pc";

  return (
    <div className={styles.container}>
      <BountyStatCell
        text={"AVAILABLE BOUNTIES"}
        value={stats?.active}
        resolution={resolution}
      />
      <BountyStatCell
        text={"COMPLETED BOUNTIES"}
        value={stats?.completed}
        resolution={resolution}
      />
      <BountyStatCell
        text={"TOTAL PAYOUT"}
        value={stats?.totalPayout}
        unit={"USD*"}
        resolution={resolution}
      />
      <BountyStatCell
        text={"HUNTERS"}
        value={stats?.hunters}
        resolution={resolution}
      />
    </div>
  );
};

const BountyStatCell: React.FC<{
  resolution: "mobile" | "tablet" | "pc";
  text: string;
  value: number;
  unit?: string;
}> = ({ text, value, unit, resolution }) => {
  return (
    <div className={styles.cell}>
      <div>{text}</div>
      {value ? (
        <div className={styles.cellValue}>
          {value}
          {unit && <pre className={styles.cellUnit}>{unit}</pre>}
        </div>
      ) : (
        <Spinner
          size={
            resolution === "mobile" ? 20 : resolution === "tablet" ? 40 : 50
          }
        />
      )}
    </div>
  );
};
