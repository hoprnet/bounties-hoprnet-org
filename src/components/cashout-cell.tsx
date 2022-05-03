import Image from "next/image";
import styles from "../../styles/components/cashout-cell.module.css";

export const CashoutCell: React.FC<{
  title: string;
  description: string;
  iconSide: "left" | "right";
  icon: string;
}> = ({ title, description, iconSide, icon }) => {
  return (
    <div
      className={`${styles.container} ${
        iconSide === "right" ? styles.flowReversed : ""
      }`}
    >
      <div className={styles.iconCell}>
        <div className={styles.icon}>
          <Image
            src={icon}
            height={126}
            width={126}
            alt={`${title} icon`}
            layout="intrinsic"
          />
        </div>
      </div>
      <div className={styles.cell}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
