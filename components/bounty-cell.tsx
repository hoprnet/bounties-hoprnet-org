import Image from "next/image";
import React from "react";
import { BountyStatusE, IBounty } from "../shared/bounties";
import styles from "../styles/components/bounty-cell.module.css";

export const BountyCell: React.FC<{ bounty: IBounty; showcase?: boolean }> = ({
  bounty,
  showcase,
}) => {
  const { date, price, status, title, description, url } = bounty;
  return (
    <div className={styles.container} key={url}>
      <div className={styles.bountyImgWrapper}>
        <Image src={"/Tile-BG.png"} height={220} width={240} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.footer}>
        <div className={styles.dateWrapper}>Date finished: {date}</div>
        <div className={styles.statusWrapper}>
          {!showcase && (
            <div
              className={`${styles.statusBadge} ${
                status === BountyStatusE.COMPLETED
                  ? styles.completedBadge
                  : styles.takenBadge
              }`}
            >
              {status}
            </div>
          )}
          <div className={styles.bountyPriceWrapper}>
            BOUNTY: <span className={styles.priceWrapper}>{price}</span> ETH
          </div>
        </div>
      </div>
      {showcase && (
        <div className={styles.showcaseFooter}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <div className={styles.showcaseBadge}>GITHUB</div>
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.showcaseBadge}>DEMO-PAGE</div>
          </a>
        </div>
      )}
    </div>
  );
};
