import styles from "../styles/components/about-cell.module.css";

export const AboutCell: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}></div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
