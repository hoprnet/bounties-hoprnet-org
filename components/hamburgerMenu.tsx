import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/hamburgerMenu.module.css";
import { slide as Menu } from "react-burger-menu";
import { useWindowSize } from "../hooks/windowSize";
import React, { useContext, useState } from "react";
import { StateContext } from "../state/context";

// menu hidden offscreen with all the header content
export const HamburgerMenu = () => {
  const windowSize = useWindowSize();
  const { hamburgerMenuOpen, toggleHamburgerMenu } = useContext(StateContext);

  const isMobileView = (windowSize.width || 0) <= 1000;

  return isMobileView ? (
    <Menu
      right
      onStateChange={(state) => toggleHamburgerMenu(state.isOpen)}
      isOpen={hamburgerMenuOpen}
      styles={burgerStyles}
    >
      <div className={styles.list}>
        <Link href="/about-us">
          <a onClick={() => toggleHamburgerMenu(false)}>ABOUT US</a>
        </Link>
        <Link href="/showcase">
          <a onClick={() => toggleHamburgerMenu(false)}>SHOWCASE</a>
        </Link>
        <Link href="/earn">
          <a onClick={() => toggleHamburgerMenu(false)}>EARN</a>
        </Link>
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
    </Menu>
  ) : null;
};

// hamburger icon that act as global trigger that opens and closes the menu when you click on it
export const HamburgerMenuButton = () => {
  const { hamburgerMenuOpen, toggleHamburgerMenu } = useContext(StateContext);

  return (
    <div className={styles.burgerWrapper}>
      <button
        onClick={() => toggleHamburgerMenu(!hamburgerMenuOpen)}
        className={styles.burgerButton}
      ></button>
      <div className={styles.burgerBarsWrapper}>
        <div className={styles.burgerBar} />
        <div className={styles.burgerBar} />
        <div className={styles.burgerBar} />
      </div>
    </div>
  );
};

// styles for hamburger menu, we hide the default icon here and use our more flexible icon to be able to place our icon wherever we want
const burgerStyles = {
  bmBurgerButton: {
    position: "relative",
    width: "0px",
    height: "0px",
    left: "0px",
    top: "0px",
    zIndex: "-99999999",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "white",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
