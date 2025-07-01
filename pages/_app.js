// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Monetag / PropellerAds verification */}
        <meta name="monetag" content="b077c7db1cc69dfdcaa70a6eb9e499fe" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
