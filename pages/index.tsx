import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { BountiesGrid } from "../components/bounties-grid";
import { BountiesStatsRow } from "../components/bounties-stats-row";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import styles from "../styles/index.module.css";
import useSWR from "swr";
import axios from "axios";

const Home: NextPage = () => {
  const bounties = useSWR("/api/bounties", axios);
  const stats = useSWR("/api/stats", axios);

  return (
    <div>
      <Head>
        <title>HOPR bounties</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="gradient-bg" />
      <div className={styles.robotsImage}>
        <Image
          src="/hopr-bounty-hero.png"
          alt="hopr bounty hero"
          height={400}
          width={588}
        />
      </div>
      <div className={styles.bountiesStatsWrapper}>
        <BountiesStatsRow stats={stats.data?.data as any} />
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
          <BountiesGrid bounties={bounties.data?.data?.bounties} />
        </div>
        <div className={styles.centeringWrapper}>
          <div className={`${styles.wideText} ${styles.shareIdeasText}`}>
            Don’t see a bounty for you? Announce your interest in being a hunter
            and share your bounty ideas in the{" "}
            <a
              href="https://forum.hoprnet.org/c/hopr-bounty-program/69"
              target="_blank"
              rel="noreferrer"
              className={styles.linkStyle}
            >
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
                src={"/section-robot.png"}
                alt="section robot"
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
