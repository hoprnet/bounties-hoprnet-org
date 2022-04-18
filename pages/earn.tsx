import { NextPage } from "next";
import { CSSProperties } from "react";
import { CashoutCell } from "../components/cashout-cell";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

const EarnPage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.gradient} />
      <div
        style={{ ...styles.titleStyle, fontSize: 100, padding: "200px 0px" }}
      >
        EARN
      </div>
      <div style={{ ...styles.titleStyle, paddingBottom: 90 }}>
        HOW TO CASH OUT
      </div>
      <div style={styles.cashoutGrid}>
        <CashoutCell
          iconSide="left"
          title="1 - APPLY"
          description="Select an open bounty and apply to work on it. If none match your skills, announce yourself as a hunter in the forum and submit your bounty ideas"
        />
        <CashoutCell
          iconSide="right"
          title="2 - BUILD"
          description="Once accepted, complete the bounty and submit your work for the HOPR team to assess"
        />
        <CashoutCell
          iconSide="left"
          title="3 - CASH OUT"
          description="You’ll earn HOPR tokens for each bounty you complete. Cashing out is simple and fast, even if you’re new to crypto"
        />
      </div>
      <div style={{ padding: 160, paddingBottom: 80 }}>
        <a
          href="https://forum.hoprnet.org/t/cash-out-guide/3971"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{ ...styles.wideText, textDecoration: "underline" }}>
            Learn more
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  cashoutGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 120,
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 60,
    lineHeight: "60px",
    color: "#414141",
    textAlign: "center",
  },
  wideText: {
    fontSize: 18,
    lineHeight: "26px",
    letterSpacing: "0.15px",
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

export default EarnPage;
