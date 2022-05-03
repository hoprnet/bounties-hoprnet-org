import { NextPage } from "next";
import { AboutCell } from "../src/components/about-cell";
import { Footer } from "../src/components/footer";
import { Navbar } from "../src/components/navbar";
import styles from "../styles/about-us.module.css";

const AboutUsPage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="gradient-bg" />
      <div className={styles.contentWrapper}>
        <div className={styles.mainTitle}>ABOUT</div>
        <div className={styles.titleStyle}>ABOUT THE HOPR BOUNTY PROGRAM</div>
        <div className={styles.aboutGrid}>
          <AboutCell
            title="BUILD"
            description="Create dApps, services, tools and more to expand the HOPR ecosystem and help build a private web3"
            icon="/hopr-build.png"
          />
          <AboutCell
            title="EARN"
            description="Earn HOPR tokens for completing bounties, along with additional rewards for dedicated hunters"
            icon="/hopr-earn.png"
          />
          <AboutCell
            title="GROW"
            description="Lock HOPR tokens in your node to relay user data and cover traffic. The more you stake, the more data you can relay, and the more you earn. A quarter of all HOPR tokens are available only to stakers as a reward for relaying cover traffic."
            icon="/hopr-grow.png"
          />
        </div>
        <div className={styles.titleStyle}>ABOUT HOPR</div>
        <div className={styles.videoRow}>
          <div>
            <iframe
              width="460"
              height="259"
              src="https://player.vimeo.com/video/508840889"
              title="Vimeo video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.aboutDescription}>
            <div>
              HOPR is free and open source privacy infrastructure for web3. The
              HOPR protocol is built by the community for the community and
              powered by the HOPR token.
            </div>
            <br />
            <div>
              The HOPR Association offers bounties for software developers who
              help us BUIDL the protocol and for developers of privacy-first
              apps running on top of HOPR.
            </div>
            <br />
            <div>
              <a
                href="https://hoprnet.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                HOPR website
              </a>
              {", "}
              <a
                href="https://github.com/hoprnet/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                HOPR on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
