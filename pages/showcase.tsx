import { NextPage } from "next";
import { exampleBounty } from ".";
import { BountiesGrid } from "../components/bounties--grid";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import styles from "../styles/showcase.module.css";

const ShowcasePage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.gradient} />
      <div className={styles.titleStyle}>SHOWCASE</div>
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
          showcase
        />
      </div>
      <Footer />
    </div>
  );
};

export default ShowcasePage;
