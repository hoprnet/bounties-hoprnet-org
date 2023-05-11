import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { HamburgerMenu } from "../src/components/hamburgerMenu";
import { StateContext } from "../src/state/context";
import { useState } from "react";
import Cookies from 'js-cookie';
import { PopUp } from "../src/components/popup-one-time"

// Mui and emotion
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../src/utils/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';


// const popupCheck = () => {
//     try {
//         const ls = window.localStorage.getItem('popupOneTime');
//         const cookie = Cookies.get('popupOneTime');
//
//         if (ls === 'false' || cookie === 'false') {
//             return false;
//         } else {
//             return true;
//         }
//     } catch (err) {
//         return true;
//     }
// }

function MyApp({ Component, pageProps }: AppProps) {
  const [hamburgerMenuOpen, toggleHamburgerMenu] = useState(false);
  // const [popup, setPopup] = useState(popupCheck());
  const emotionCache = createEmotionCache();

    // const onClosePopup = () => {
    //     localStorage.setItem('popupOneTime', 'false');
    //     document.cookie = 'popupOneTime=false';
    //     setPopup(false);
    // }

  return (
    <>
      <Head>
        <title>HOPR | The Bounty Program</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/hopr-favicon.svg" />
        <script src="https://cdn.usefathom.com/script.js" data-site="SLHRXSTV" defer></script>
      </Head>
      <StateContext.Provider value={{ hamburgerMenuOpen, toggleHamburgerMenu }}>
          <CacheProvider value={emotionCache}>
              <ThemeProvider theme={lightTheme}>
                 <CssBaseline />
                 <HamburgerMenu />
                 <Component {...pageProps} />
                  {/*{*/}
                  {/*    popup &&*/}
                  {/*    <PopUp*/}
                  {/*        onClose={onClosePopup}*/}
                  {/*    />*/}
                  {/*}*/}
              </ThemeProvider>
          </CacheProvider>
      </StateContext.Provider>
    </>
  );
}

export default MyApp;
