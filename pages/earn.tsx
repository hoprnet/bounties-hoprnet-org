import { NextPage } from "next";
import { CashoutCell } from "../components/cashout-cell";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import styles from "../styles/earn.module.css";

const EarnPage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="gradient-bg" />
      <div className={styles.contentWrapper}>
        <div className={`${styles.titleStyle} ${styles.mainTitle}`}>EARN</div>
        <div className={`${styles.titleStyle} ${styles.howToCashOutTitle}`}>
          BUILD AND EARN WITH HOPR
        </div>
        <div className={styles.cashoutGrid}>
          <CashoutCell
            iconSide="left"
            title="1 - APPLY"
            description="Select an open bounty and apply to work on it. If none match your skills, announce yourself as a hunter in the forum and submit your bounty ideas"
            icon="/hopr-apply.png"
          />
          <CashoutCell
            iconSide="right"
            title="2 - BUILD"
            description="Once accepted, complete the bounty and submit your work for the HOPR team to assess"
            icon="/hopr-build.png"
          />
          <CashoutCell
            iconSide="left"
            title="3 - CASH OUT"
            description="You’ll earn HOPR tokens for each bounty you complete. Cashing out is simple and fast, even if you’re new to crypto"
            icon="/hopr-earn.png"
          />
        </div>
        <div className={styles.learnMoreWrapper}>
          <a
            href="https://forum.hoprnet.org/t/cash-out-guide/3971"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${styles.wideText} ${styles.link}`}>
              Learn more
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EarnPage;
