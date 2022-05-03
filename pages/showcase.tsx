import type { BountyCompleted } from "../shared/types";
import axios from "axios";
import { NextPage } from "next";
import { useMemo } from "react";
import useSWR from "swr";
import { BountiesGrid } from "../src/components/bounties-grid";
import { Footer } from "../src/components/footer";
import { Navbar } from "../src/components/navbar";
import styles from "../styles/showcase.module.css";

const filterAndSortBounties = (
  bounties: BountyCompleted[]
): BountyCompleted[] => {
  console.log(bounties);
  return (
    bounties
      // remove statuses which we don't care about
      .filter((bounty) => bounty.status === "COMPLETED")
      // sort by date
      .sort((a, b) => {
        return (
          new Date(b.completedOn).valueOf() - new Date(a.completedOn).valueOf()
        );
      })
  );
};

const ShowcasePage: NextPage = () => {
  const bounties = useSWR("/api/bounties/showcase", axios);
  const bountiesFiltered: BountyCompleted[] = useMemo(() => {
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
