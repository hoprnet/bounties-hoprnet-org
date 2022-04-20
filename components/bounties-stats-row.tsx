import styles from "../styles/components/bounties-stats-row.module.css";

const apiData = {
  active: 6,
  completed: 4,
  totalPayout: 12,
  hunters: 12,
};

export const BountiesStatsRow = () => {
  return (
    <div className={styles.container}>
      <BountyStatCell text={"ACTIVE BOUNTIES"} value={apiData.active} />
      <BountyStatCell text={"COMPLETED BOUNTIES"} value={apiData.completed} />
      <BountyStatCell
        text={"TOTAL PAYOUT"}
        value={apiData.totalPayout}
        unit={"USD*"}
      />
      <BountyStatCell text={"HUNTERS"} value={apiData.hunters} />
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
      <div className={styles.cellValue}>
        {value}
        <div className={styles.cellUnitWrapper}>
          {unit && <div className={styles.cellUnit}>{unit}</div>}
        </div>
      </div>
    </div>
  );
};
