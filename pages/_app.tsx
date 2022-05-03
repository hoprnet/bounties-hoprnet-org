import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { HamburgerMenu } from "../src/components/hamburgerMenu";
import { StateContext } from "../src/state/context";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [hamburgerMenuOpen, toggleHamburgerMenu] = useState(false);

  return (
    <>
      <Head>
        <title>HOPR | The Bounty Program</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/hopr-favicon.svg" />
      </Head>
      <StateContext.Provider value={{ hamburgerMenuOpen, toggleHamburgerMenu }}>
        <HamburgerMenu />
        <Component {...pageProps} />
      </StateContext.Provider>
    </>
  );
}

export default MyApp;
