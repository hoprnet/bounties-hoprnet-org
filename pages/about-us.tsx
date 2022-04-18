import { NextPage } from "next";
import { CSSProperties } from "react";
import { AboutCell } from "../components/about-cell";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

const AboutUsPage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.gradient} />
      <div
        style={{ ...styles.titleStyle, fontSize: 100, padding: "200px 0px" }}
      >
        ABOUT
      </div>
      <div style={{ ...styles.titleStyle, paddingBottom: 70 }}>
        ABOUT THE HOPR BOUNTY PROGRAM
      </div>
      <div style={styles.aboutGrid}>
        <AboutCell
          title="BUILD"
          description="Create dApps, services, tools and more to expand the HOPR ecosystem and help build a private web3"
        />
        <AboutCell
          title="EARN"
          description="Earn HOPR tokens for completing bounties, along with additional rewards for dedicated hunters"
        />
        <AboutCell
          title="GROW"
          description="Lock HOPR tokens in your node to relay user data and cover traffic. The more you stake, the more data you can relay, and the more you earn. A quarter of all HOPR tokens are available only to stakers as a reward for relaying cover traffic."
        />
      </div>
      <div style={{ ...styles.titleStyle, paddingBottom: 50 }}>ABOUT HOPR</div>
      <div style={styles.videoRow}>
        <div>
          <iframe
            width="460"
            height="259"
            src="https://www.youtube.com/embed/DLpF7NQ3CTo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{ ...styles.wideText, maxWidth: 460 }}>
          <div>
            HOPR is free and open source privacy infrastructure for web3. The
            HOPR protocol is built by the community for the community and
            powered by the HOPR token.
          </div>
          <br />
          <div>
            The HOPR Association offers bounties for software developers who
            help us BUIDL the protocol and for developers of privacy-first apps
            running on top of HOPR.
          </div>
          <br />
          <div>
            <a
              href="https://twitter.com/hoprnet"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              HOPR website
            </a>
            {", "}
            <a
              href="https://twitter.com/hoprnet"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              HOPR on GitHub
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  videoRow: {
    display: "flex",
    gap: 40,
    paddingBottom: 300,
    justifyContent: "center",
    alignItems: "center",
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
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "270px 270px 270px",
    paddingBottom: 120,
    columnGap: "50px",
    justifyContent: "center",
  },
  link: {
    textDecoration: "underline",
    color: "#000050",
  },
};

export default AboutUsPage;
