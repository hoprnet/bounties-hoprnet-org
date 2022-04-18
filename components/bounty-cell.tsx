import Image from "next/image";
import React, { CSSProperties } from "react";

export enum BountyStatusE {
  COMPLETED = "COMPLETED",
  TAKEN = "TAKEN",
}

export interface IBounty {
  date: string;
  status: BountyStatusE;
  price: number;
  title: string;
  description: string;
  url: string;
}

export const BountyCell: React.FC<{ bounty: IBounty; showcase?: boolean }> = ({
  bounty,
  showcase,
}) => {
  const { date, price, status, title, description } = bounty;
  return (
    <div style={styles.container} key={title}>
      <div style={styles.bountyImgWrapper}>
        <Image src={"/Tile-BG.png"} height={220} width={240} />
      </div>
      <div style={styles.title}>{title}</div>
      <div style={styles.description}>{description}</div>
      <div style={styles.footer}>
        <div style={styles.dateWrapper}>Date finished: {date}</div>
        <div style={styles.statusWrapper}>
          {!showcase && (
            <div style={styles.statusBadge(status === BountyStatusE.COMPLETED)}>
              {status}
            </div>
          )}
          <div style={styles.bountyPriceWrapper}>
            BOUNTY: <span style={styles.priceWrapper}>{price}</span> ETH
          </div>
        </div>
      </div>
      {showcase && (
        <div style={styles.showcaseFooter}>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={styles.showcaseBadge}>GITHUB</div>
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={styles.showcaseBadge}>DEMO-PAGE</div>
          </a>
        </div>
      )}
    </div>
  );
};

const styles: Record<string, CSSProperties | any> = {
  container: {
    // height: 500,
    width: 300,
    borderRadius: 9,
    backgroundColor: "#F8F8FB",
    boxShadow: "0px 2px 34px -7px rgba(0, 0, 0, 0.5)",
  },
  bountyImgWrapper: {
    borderRadius: "9px 9px 0px 0px",
    display: "flex",
    justifyContent: "center",
    height: 220,
    background: "linear-gradient(23.3deg, #0000DB 12.97%, #000050 83.56%)",
  },
  title: {
    padding: 20,
    fontSize: 20,
    lineHeight: "25px",
    fontWeight: 700,
  },
  description: {
    padding: "0px 20px 20px 20px",
    fontSize: 14,
    lineHeight: "18px",
  },
  footer: {
    borderTop: "1px solid #ADADAD",
    padding: "2px 15px 10px 15px",
  },
  priceWrapper: {
    color: "#0000B4",
  },
  bountyPriceWrapper: {
    fontWeight: 600,
  },
  statusWrapper: {
    display: "flex",
    alignItems: "center",
  },
  dateWrapper: {
    color: "#868686",
    fontWeight: 600,
    fontSize: 10,
    lineHeight: "25px",
  },
  showcaseFooter: {
    padding: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
    borderTop: "1px solid #ADADAD",
  },
  statusBadge: (completed: boolean) => ({
    borderRadius: 9,
    padding: "1px 5px",
    color: completed ? "#25FF00" : "#FF0000",
    backgroundColor: completed ? "#285E13" : "#5E1313",
    marginRight: 14,
  }),
  showcaseBadge: {
    borderRadius: 20,
    padding: "3px 8px",
    color: "white",
    background: "linear-gradient(180deg, #0000B2 15.32%, #000050 83.35%)",
    fontWeight: 700,
  },
};
