import Head from 'next/head';
import '../styles/globals.css';
import { useEffect } from 'react';

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('sw.js');
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

function MyApp({ Component, pageProps }) {
  useEffect(() => { registerServiceWorker() });

  return(
    <>
      <Head>
        <meta name="description" content="Der digitale Würfelbecher fürs Schocken: Ihr wollt Schocken spielen, aber habt nicht genug Würfel? Benutzt einfach die Schocken App!" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
