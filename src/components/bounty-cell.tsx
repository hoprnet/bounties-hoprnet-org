import type { AnyBounty } from "../../shared/types";
import React from "react";
import styles from "../../styles/components/bounty-cell.module.css";
import Image from "next/image";

export const BountyCell: React.FC<{
  bounty: AnyBounty;
  showcase?: boolean;
}> = ({ bounty, showcase }) => {
  return (
    <div className={styles.container} key={bounty.bountyServiceUrl}>
      <div className={styles.topContainer}>
        <a href={bounty.bountyServiceUrl} target="_blank" rel="noreferrer">
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={bounty.category ? `/images/bounties${bounty.category.toLowerCase()}.svg` : '/images/bounties/development.svg'}
              alt="App dev"
              height={160}
              width={300}
            />
          </div>
          <div className={styles.title}>{bounty.title}</div>
          {bounty.description ? (
            <div className={styles.description}>{bounty.description}</div>
          ) : null}
        </a>
      </div>
      <div className={styles.footer}>
        {bounty.completedOn && bounty.status === "COMPLETED" ? (
          <div className={styles.dateWrapper}>
            Date finished: {new Date(bounty.completedOn).toDateString()}
          </div>
        ) : null}
        <div className={styles.statusWrapper}>
          {!showcase && (
            <div className={`${styles.statusContainer}`}>
              {bounty.contest && (
                <div className={`${styles.contestBadge} ${styles.statusBadge}`}>
                  CONTEST
                </div>
              )}

              <div
                className={`${styles.statusBadge} ${
                  bounty.status === "COMPLETED" || bounty.status === "AVAILABLE"
                    ? styles.completedBadge
                    : styles.takenBadge
                }`}
              >
                {bounty.status}
              </div>
            </div>
          )}
          <div className={styles.bountyPriceWrapper}>
            BOUNTY: <span className={styles.priceWrapper}>{bounty.prize}</span>{" "}
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
            <a href={bounty.demoUrl} target="_blank" rel="noopener noreferrer">
              <div className={styles.showcaseBadge}>DEMO-PAGE</div>
            </a>
          ) : null}
        </div>
      )}
    </div>
  );
};
