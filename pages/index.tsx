import type { NextPage } from "next";
import Image from "next/image";
import { CSSProperties } from "react";
import { BountiesStatsRow } from "../components/bounties-stats-row";
import { BountyCell, BountyStatusE } from "../components/bounty-cell";
import { Navbar } from "../components/navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.gradient} />
      <div style={styles.robotsImage}>
        <Image src="/Hero-BG-png.png" height={500} width={700} />
      </div>
      <div style={styles.bountiesStatsWrapper}>
        <BountiesStatsRow />
      </div>
      <div style={styles.textContainer}>
        <div style={styles.titleStyle}>
          HELP BUILD THE FUTURE OF TRANSPORT LAYER PRIVACY
        </div>
        <div style={{ width: 600 }}>
          <div style={styles.wideText}>
            Join a passionate, skilled, and dedicated development community
            building free and open source privacy infrastructure for web3.
          </div>
        </div>
      </div>
      <div>OPEN BOUNTIES</div>
      <div>
        <BountyCell
          bounty={{
            date: "10rd April 2022",
            description:
              "A 2-day conference (+ 2-day hackathon) to unite all regens in the capital of Europe and explore the potential of Web3 to regenerate the ea...",
            price: 0.2,
            status: BountyStatusE.COMPLETED,
            title: "HOPR - decentralized privacy-preserving messaging protocol",
          }}
        />
      </div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  textContainer: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    gap: 34,
  },
  robotsImage: {
    display: "flex",
    justifyContent: "center",
  },
  gradient: {
    position: "absolute",
    zIndex: -2,
    width: "100%",
    height: 827,
    left: 0,
    top: 74,
    background:
      "linear-gradient(180.13deg, #0000B4 -110.52%, rgba(216, 216, 216, 0.0001) 99.89%)",
  },
  bountiesStatsWrapper: {
    position: "absolute",
    top: 100,
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  titleStyle: {
    fontSize: 60,
    lineHeight: "60px",
    color: "#414141",
  },
  wideText: {
    fontSize: 18,
    lineHeight: "26px",
    letterSpacing: "0.15px",
    color: "#414141",
  },
};

export default Home;
