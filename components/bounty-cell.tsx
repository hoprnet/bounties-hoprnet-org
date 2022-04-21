import Image from "next/image";
import React from "react";
import { BountyStatusE, IBounty } from "../shared/bounties";
import styles from "../styles/components/bounty-cell.module.css";

export const BountyCell: React.FC<{ bounty: IBounty; showcase?: boolean }> = ({
  bounty,
  showcase,
}) => {
  return (
    <div className={styles.container} key={bounty.bountyServiceUrl}>
      <a href={bounty.bountyGithubUrl} target="_blank" rel="noreferrer">
        <div className={styles.bountyImgWrapper}>
          <Image
            src={"/Tile-BG.png"}
            alt="bounty background"
            height={220}
            width={240}
          />
        </div>
        <div className={styles.title}>{bounty.title}</div>
        {bounty.description ? (
          <div className={styles.description}>{bounty.description}</div>
        ) : null}
      </a>
      <div className={styles.footer}>
        {/* <div className={styles.dateWrapper}>Date finished: {date}</div> */}
        <div className={styles.statusWrapper}>
          {!showcase && (
            <div
              className={`${styles.statusBadge} ${
                bounty.status === BountyStatusE.COMPLETED ||
                bounty.status === BountyStatusE.AVAILABLE
                  ? styles.completedBadge
                  : styles.takenBadge
              }`}
            >
              {bounty.status}
            </div>
          )}
          <div className={styles.bountyPriceWrapper}>
            BOUNTY: <span className={styles.priceWrapper}>{bounty.price}</span>{" "}
            USD
          </div>
        </div>
      </div>
      {showcase && (bounty.submissionUrl || bounty.demoUrl) && (
        <div className={styles.showcaseFooter}>
          {bounty.submissionUrl ? (
            <a
              href={bounty.submissionUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.showcaseBadge}>GITHUB</div>
            </a>
          ) : null}
          {bounty.demoUrl ? (
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.showcaseBadge}>DEMO-PAGE</div>
            </a>
          ) : null}
        </div>
      )}
    </div>
  );
};
