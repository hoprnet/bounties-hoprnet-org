import styled from "@emotion/styled";
import axios from "axios";
import lottie from "lottie-web";
import useSWR from "swr";
import styles from "../styles/index.module.css";

import { useEffect, useMemo, useRef, useState } from "react";
import { BountiesGrid } from "../src/components/bounties-grid";
import { BountiesStatsRow } from "../src/components/bounties-stats-row";
import { Footer } from "../src/components/footer";
import { Navbar } from "../src/components/navbar";
import { useWindowSize } from "../src/hooks/windowSize";

import type { NextPage } from "next";
import type { Bounty } from "../shared/types";

import terminalRobotAnimation from "../src/animation/anim_robot_terminal.json";
import robotsAnimationDesktop from "../src/animation/desktop_anim_three_robots.json";
import robotsAnimationMobile from "../src/animation/mobile_anim_two_robots.json";

type AnimationContainerProps = {
  show: boolean;
};

const AnimationContainer = styled.div<AnimationContainerProps>`
  display: ${(props) => (props.show ? "block" : "none")};
  margin: 0 4%;
  padding-top: 80px;

  @media (min-width: 650px) {
    margin: 4% 12%;
    padding-top: 0;
  }
`;

const YellowBall = styled.img`
  left: 50%;
  position: absolute;
  top: 8%;
  transform: translate(-50%, -50%);
  width: min(800px, 85%);
  z-index: -2;

  @media (min-width: 650px) {
    top: 0;
  }
`;

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

  const [showMobileAnimation, setShowMobileAnimation] = useState(false);

  // nextjs remounts page on first load to properly hydrate it
  // this flag is to prevent loading animation twice
  const animationLoaded = useRef(false);

  useEffect(() => {
    // check to prevent double animation load on page remount
    if (!animationLoaded.current) {
      lottie.loadAnimation({
        container: document.querySelector("#robotsAnimationDesktop")!,
        animationData: robotsAnimationDesktop,
      });

      lottie.loadAnimation({
        container: document.querySelector("#robotsAnimationMobile")!,
        animationData: robotsAnimationMobile,
      });

      lottie.loadAnimation({
        container: document.querySelector("#terminalRobotAnimation")!,
        animationData: terminalRobotAnimation,
      });
    }
    animationLoaded.current = true;
  }, []);

  useEffect(() => {
    if (windowSize.width && windowSize.width <= 1000) {
      setShowMobileAnimation(true);
    } else {
      setShowMobileAnimation(false);
    }
  }, [windowSize.width]);
  return (
    <div>
      <Navbar />
      <div className="gradient-bg" />
      <YellowBall src="/yellow_ball.svg" alt="HOPR's yellow ball" />
      <AnimationContainer
        id="robotsAnimationDesktop"
        show={!showMobileAnimation}
      ></AnimationContainer>
      <AnimationContainer
        id="robotsAnimationMobile"
        show={showMobileAnimation}
      ></AnimationContainer>
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
