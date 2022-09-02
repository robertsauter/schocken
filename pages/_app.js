import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="description" content="Der digitale Würfelbecher fürs Schocken: Ihr wollt Schocken spielen, aber habt nicht genug Würfel? Benutzt einfach die Schocken App!" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/180.png"></link>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
