import type { NextPage } from "next";
import Image from "next/image";
import { BountiesGrid } from "../components/bounties--grid";
import { BountiesStatsRow } from "../components/bounties-stats-row";
import { BountyStatusE } from "../components/bounty-cell";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import styles from "../styles/index.module.css";

export const exampleBounty = {
  date: "10rd April 2022",
  description:
    "A 2-day conference (+ 2-day hackathon) to unite all regens in the capital of Europe and explore the potential of Web3 to regenerate the ea...",
  price: 0.2,
  status: BountyStatusE.COMPLETED,
  title: "HOPR - decentralized privacy-preserving messaging protocol",
  url: "https://gitcoin.com",
};

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.gradient} />
      <div className={styles.robotsImage}>
        <Image src="/Hero-BG-png.png" height={400} width={588} />
      </div>
      <div className={styles.bountiesStatsWrapper}>
        <BountiesStatsRow />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <div className={`${styles.titleStyle} ${styles.mainTitle}`}>
            HELP BUILD THE FUTURE OF TRANSPORT LAYER PRIVACY
          </div>
          <div className={`${styles.wideText} ${styles.mainSubtext}`}>
            Join a passionate, skilled, and dedicated development community
            building free and open source privacy infrastructure for web3.
          </div>
        </div>
        <div className={`${styles.titleStyle} ${styles.openBountiesTitle}`}>
          OPEN BOUNTIES
        </div>
        <div className={styles.gridWrapper}>
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
        <div className={styles.centeringWrapper}>
          <div className={`${styles.wideText} ${styles.shareIdeasText}`}>
            Don’t see a bounty for you? Announce your interest in being a hunter
            and share your bounty ideas in the{" "}
            <a href="/" className={styles.linkStyle}>
              bounty forum
            </a>
            .
          </div>
        </div>
        <div className={styles.titleStyle}>BE PART OF THE HOPR ECOSYSTEM</div>
        <div>
          <div className={styles.sectionWrapper}>
            <div>
              <Image
                src={"/Section-img.png"}
                height={400}
                width={325}
                layout="intrinsic"
              />
            </div>
            <div className={`${styles.wideText} ${styles.ecosystemText}`}>
              HOPR is building the transport layer privacy needed to make web3
              work. Work with us to build dApps that change data privacy for
              good.{" "}
            </div>
          </div>
        </div>
        <div className={`${styles.centeringWrapper} ${styles.asterixText}`}>
          <div className={styles.wideText}>
            * Bounties are valued in USD but paid out in HOPR tokens
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
