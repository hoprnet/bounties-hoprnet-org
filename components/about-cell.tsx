import Image from "next/image";
import styles from "../styles/components/about-cell.module.css";

export const AboutCell: React.FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ title, description, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Image
          src={icon}
          height={126}
          width={126}
          alt={`${title} icon`}
          layout="intrinsic"
        />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
