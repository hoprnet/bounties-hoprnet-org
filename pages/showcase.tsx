import axios from "axios";
import { NextPage } from "next";
import { useMemo } from "react";
import useSWR from "swr";
import { BountiesGrid } from "../components/bounties-grid";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { IBounty, BountyStatusE } from "../shared/bounties";
import styles from "../styles/showcase.module.css";

const filterAndSortBounties = (bounties: IBounty[]): IBounty[] => {
  return (
    bounties
      // remove statuses which we don't care about
      .filter((bounty) => bounty.status === BountyStatusE.COMPLETED)
      // sort by date
      .sort((a, b) => {
        return a.date.localeCompare(b.date);
      })
  );
};

const ShowcasePage: NextPage = () => {
  const bounties = useSWR("/api/bounties", axios);
  const bountiesFiltered: IBounty[] = useMemo(() => {
    return filterAndSortBounties(bounties.data?.data?.bounties || []);
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
