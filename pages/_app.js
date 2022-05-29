import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="description" content="Der digitale Würfelbecher fürs Schocken: Ihr wollt Schocken spielen, aber habt nicht genug Würfel? Benutzt einfach die Schocken App!" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
