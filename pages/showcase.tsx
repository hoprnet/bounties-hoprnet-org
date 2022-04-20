import axios from "axios";
import { NextPage } from "next";
import useSWR from "swr";
import { BountiesGrid } from "../components/bounties-grid";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import styles from "../styles/showcase.module.css";

const ShowcasePage: NextPage = () => {
  const bounties = useSWR("/api/bounties", axios);

  return (
    <div>
      <Navbar />
      <div className={styles.gradient} />
      <div className={styles.titleStyle}>SHOWCASE</div>
      <div className={styles.gridWrapper}>
        <BountiesGrid bounties={bounties.data?.data?.bounties} showcase />
      </div>
      <Footer />
    </div>
  );
};

export default ShowcasePage;
