import type { NextPage } from "next";
import type { Bounty } from "../shared/types";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { BountiesGrid } from "../src/components/bounties-grid";
import { BountiesStatsRow } from "../src/components/bounties-stats-row";
import { Footer } from "../src/components/footer";
import { Navbar } from "../src/components/navbar";
import styles from "../styles/index.module.css";
import useSWR from "swr";
import axios from "axios";
import { useWindowSize } from "../src/hooks/windowSize";
import lottie, { AnimationItem } from "lottie-web";
import robotsAnimation from "../src/animation/anim_hero.json";
import terminalRobotAnimation from "../src/animation/anim_robot_terminal.json";

const BOUNTY_SORT_PREFERENCE: Bounty["status"][] = ["AVAILABLE", "TAKEN"];
const filterAndSortBounties = (bounties: Bounty[]): Bounty[] => {
  return (
    bounties
      // remove statuses which we don't care about
      .filter((bounty) => BOUNTY_SORT_PREFERENCE.includes(bounty.status))
      // sort first status, then date
      .sort((a, b) => {
        return (
          BOUNTY_SORT_PREFERENCE.findIndex((v) => v === a.status) -
            BOUNTY_SORT_PREFERENCE.findIndex((v) => v === b.status) ||
          new Date(b.submittedOn).valueOf() - new Date(a.submittedOn).valueOf()
        );
      })
  );
};

const Home: NextPage = () => {
  const windowSize = useWindowSize();
  const bounties = useSWR("/api/bounties/homepage", axios);
  const stats = useSWR("/api/stats", axios).data?.data || {};
  const bountiesSorted: Bounty[] = useMemo(() => {
    return filterAndSortBounties(bounties.data?.data?.bounties || []);
  }, [bounties]);

  // nextjs remounts page on first load to properly hydrate it
  // this flag is to prevent loading animation twice
  let animationLoaded = false;
  const [robotsAnimObj, setRobotsAnimObj] = useState<AnimationItem>();
  useEffect(() => {
    // check to prevent double animation load on page remount
    if (!animationLoaded) {
      setRobotsAnimObj(
        lottie.loadAnimation({
          container: document.querySelector("#robotsAnimation")!,
          animationData: robotsAnimation,
        })
      );
      lottie.loadAnimation({
        container: document.querySelector("#terminalRobotAnimation")!,
        animationData: terminalRobotAnimation,
      });
    }
    animationLoaded = true;
  }, []);

  // for now we only have animated svgs for pc so we hide it on mobile resolutions
  useEffect(() => {
    if (!robotsAnimObj) return;

    if ((windowSize.width || 0) <= 1000) {
      robotsAnimObj.hide();
    } else {
      robotsAnimObj.show();
    }
  }, [windowSize.width, robotsAnimObj]);

  return (
    <div>
      <Navbar />
      <div className="gradient-bg" />
      <div className={styles.robotsAnimatedImage} id="robotsAnimation"></div>
      <div className={styles.robotsImage}>
        {(windowSize.width || 0) <= 650 ? (
          <Image
            src="/HOPR_BOUNTY_HERO_MOBILE.png"
            alt="hopr bounty hero"
            height={350}
            width={350}
          />
        ) : (windowSize.width || 0) <= 1000 ? (
          <Image
            src="/HOPR_BOUNTY_HERO_TABLET.png"
            alt="hopr bounty hero"
            height={584}
            width={693}
          />
        ) : null}
      </div>
      <div className={styles.bountiesStatsWrapper}>
        <BountiesStatsRow stats={stats} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <div className={`${styles.titleStyle} ${styles.mainTitle}`}>
            HELP BUILD THE FUTURE OF WEB3 PRIVACY
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
          <BountiesGrid bounties={bountiesSorted} />
        </div>
        <div className={styles.titleStyle}>BE PART OF THE HOPR ECOSYSTEM</div>
        <div>
          <div className={styles.sectionWrapper}>
            <div
              className={styles.sectionImage}
              id="terminalRobotAnimation"
            ></div>
            <div className={`${styles.wideText} ${styles.ecosystemText}`}>
              HOPR is building the transport layer privacy needed to make web3
              work. Work with us to build dApps that change data privacy for
              good.{" "}
            </div>
          </div>
        </div>
        <div
          className={`${styles.centeringWrapper} ${styles.asterixText}`}
          id="amount_disclaimer"
        >
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
