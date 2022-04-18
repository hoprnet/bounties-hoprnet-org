import { NextPage } from "next";
import { CSSProperties } from "react";
import { exampleBounty } from ".";
import { BountiesGrid } from "../components/bounties--grid";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

const ShowcasePage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.gradient} />
      <div
        style={{ ...styles.titleStyle, fontSize: 100, padding: "200px 0px" }}
      >
        SHOWCASE
      </div>
      <div style={{ paddingBottom: 200 }}>
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

const styles: Record<string, CSSProperties> = {
  titleStyle: {
    fontSize: 60,
    lineHeight: "60px",
    color: "#414141",
    textAlign: "center",
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
};

export default ShowcasePage;
