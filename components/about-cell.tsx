import { CSSProperties } from "react";

export const AboutCell: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.icon}></div>
      <div style={styles.title}>{title}</div>
      <div style={styles.description}>{description}</div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: 270,
  },
  icon: {
    alignSelf: "center",
    height: 140,
    width: 140,
    borderRadius: "50%",
    backgroundColor: "#000050",
  },
  title: {
    paddingTop: 24,
    paddingBottom: 24,
    textAlign: "center",
    fontWeight: 700,
    fontSize: 28,
    lineHeight: "25px",
  },
  description: {
    fontWeight: 18,
    lineHeight: "26px",
    letterSpacing: "0.15px",
  },
};
