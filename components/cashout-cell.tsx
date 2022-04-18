import { CSSProperties } from "react";

export const CashoutCell: React.FC<{
  title: string;
  description: string;
  iconSide: "left" | "right";
}> = ({ title, description, iconSide }) => {
  return (
    <div style={styles.container(iconSide === "right")}>
      <div
        style={{ ...styles.cell, display: "flex", justifyContent: "center" }}
      >
        <div style={styles.icon}></div>
      </div>
      <div style={styles.cell}>
        <div style={{ ...styles.title, paddingBottom: 15 }}>{title}</div>
        <div style={styles.description}>{description}</div>
      </div>
    </div>
  );
};

const styles: Record<string, CSSProperties | any> = {
  container: (reverseOrder: boolean) => ({
    display: "flex",
    flexDirection: reverseOrder ? "row-reverse" : "initial",
    width: 460 * 2,
  }),
  cell: {
    width: 460,
  },
  icon: {
    alignSelf: "center",
    height: 140,
    width: 140,
    borderRadius: "50%",
    backgroundColor: "#000050",
  },
  title: {
    fontSize: 28,
    lineHeight: "25px",
    fontWeight: 700,
  },
  description: {
    fontSize: 18,
    lineHeight: "26px",
  },
};
