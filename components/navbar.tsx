import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/navbar.module.css";
import { slide as Menu } from "react-burger-menu";
import { useWindowSize } from "../hooks/windowSize";
import { HamburgerMenuButton } from "./hamburgerMenu";

export const Navbar = () => {
  const windowSize = useWindowSize();
  const isMobileView = (windowSize.width || 0) <= 1000;

  if (isMobileView) {
    return (
      <div className={styles.containerMobile}>
        <Link href="/">
          <span className={styles.hoprLogoMobile}>
            <Image src="/logo.svg" height={60} width={120} alt="hopr" />
          </span>
        </Link>
        <div className={styles.hamburgerWrapper}>
          <HamburgerMenuButton />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <Link href="/">
          <span className={styles.hoprLogo}>
            <Image src="/logo.svg" height={60} width={120} alt="hopr" />
          </span>
        </Link>

        <div className={styles.linksRow}>
          <Link href="/about-us">
            <a>ABOUT US</a>
          </Link>
          <Link href="/showcase">
            <a>SHOWCASE</a>
          </Link>
          <Link href="/earn">
            <a>EARN</a>
          </Link>
        </div>
        <a
          className={styles.githubIcon}
          href="https://github.com/hoprnet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            layout="fixed"
            src="/github-icon.svg"
            height={40}
            width={40}
            alt="github"
          />
        </a>
      </div>
    );
  }
};
