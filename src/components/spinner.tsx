import React from "react";
import styles from "../../styles/components/spinner.module.css";

export const Spinner: React.FC<{ size: number }> = ({ size }) => {
  return (
    <div style={{ height: size, width: size }} className={styles.loading}></div>
  );
};
