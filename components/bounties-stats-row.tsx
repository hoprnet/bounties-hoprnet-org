import { CSSProperties } from "react";

const apiData = {
  active: 6,
  completed: 4,
  totalPayout: 12,
  hunters: 12,
};

export const BountiesStatsRow = () => {
  return (
    <div style={styles.container}>
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
    <div style={styles.cell}>
      <div>{text}</div>
      <div style={styles.cellValue}>
        {value}
        <div style={styles.cellUnitWrapper}>
          {unit && <div style={styles.cellUnit}>{unit}</div>}
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    gap: 42,
    width: "fit-content",
  },
  cell: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    borderRadius: 9,
    backgroundColor: "#F8F8FB",
    minHeight: 100,
    minWidth: 200,
  },
  cellValue: {
    fontSize: 50,
    color: "#0000B4",
    display: "flex",
  },
  cellUnit: {
    position: "absolute",
    bottom: 10,
    left: 6,
    fontSize: "initial",
    color: "#414141",
  },
  cellUnitWrapper: {
    position: "relative",
  },
};
