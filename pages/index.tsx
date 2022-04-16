import type { NextPage } from "next";
import Image from "next/image";
import { CSSProperties } from "react";
import { BountiesGrid } from "../components/bounties--grid";
import { BountiesStatsRow } from "../components/bounties-stats-row";
import { BountyCell, BountyStatusE } from "../components/bounty-cell";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

const exampleBounty = {
  date: "10rd April 2022",
  description:
    "A 2-day conference (+ 2-day hackathon) to unite all regens in the capital of Europe and explore the potential of Web3 to regenerate the ea...",
  price: 0.2,
  status: BountyStatusE.COMPLETED,
  title: "HOPR - decentralized privacy-preserving messaging protocol",
};

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
      <div style={{ ...styles.titleStyle, paddingBottom: 60 }}>
        OPEN BOUNTIES
      </div>
      <div style={styles.gridWrapper}>
        <BountiesGrid
          bounties={[
            exampleBounty,
            exampleBounty,
            exampleBounty,
            exampleBounty,
            exampleBounty,
            exampleBounty,
          ]}
        />
      </div>
      <div style={styles.centeringWrapper}>
        <div style={{ ...styles.wideText, width: 650, paddingBottom: 200 }}>
          Don’t see a bounty for you? Announce your interest in being a hunter
          and share your bounty ideas in the{" "}
          <a href="/" style={styles.linkStyle}>
            bounty forum
          </a>
          .
        </div>
      </div>
      <div style={styles.titleStyle}>BE PART OF THE HOPR ECOSYSTEM</div>
      <div style={styles.sectionWrapper}>
        <Image src={"/Section-img.png"} height={400} width={400} />
        <div>
          HOPR is building the transport layer privacy needed to make web3 work.
          Work with us to build dApps that change data privacy for good.{" "}
        </div>
      </div>
      <div style={styles.centeringWrapper}>
        <div style={styles.wideText}>
          * Bounties are valued in USD but paid out in HOPR tokens
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  textContainer: {
    paddingTop: 20,
    paddingBottom: 120,
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
    textAlign: "center",
  },
  wideText: {
    fontSize: 18,
    lineHeight: "26px",
    letterSpacing: "0.15px",
    color: "#414141",
    textAlign: "center",
  },
  gridWrapper: {
    paddingBottom: 60,
  },
  linkStyle: {
    textDecoration: "underline",
    color: "#0000B4",
  },
  centeringWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionWrapper: {
    display: "flex",
    gap: 180,
  },
};

export default Home;
