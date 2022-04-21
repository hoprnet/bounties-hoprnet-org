import axios from "axios";
import { NextPage } from "next";
import { useMemo } from "react";
import useSWR from "swr";
import { BountiesGrid } from "../components/bounties-grid";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { IBounty, BountyStatusE } from "../shared/bounties";
import styles from "../styles/showcase.module.css";

const ShowcasePage: NextPage = () => {
  const bounties = useSWR("/api/bounties", axios);
  const bountiesFiltered: IBounty[] = useMemo(() => {
    return ((bounties.data?.data?.bounties || []) as IBounty[]).filter(
      (b) => b.status === BountyStatusE.COMPLETED
    );
  }, [bounties]);

  return (
    <div>
      <Navbar />
      <div className="gradient-bg" />
      <div className={styles.titleStyle}>SHOWCASE</div>
      <div className={styles.gridWrapper}>
        <BountiesGrid bounties={bountiesFiltered} showcase />
      </div>
      <Footer />
    </div>
  );
};

export default ShowcasePage;
