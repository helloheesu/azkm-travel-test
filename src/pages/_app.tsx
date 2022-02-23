import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ScoreMapProvider } from 'components/ScoreMapContext';
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const [height, setHeight] = useState('100vh');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(`${window.innerHeight}px`);
      window.addEventListener('resize', () => {
        setHeight(`${window.innerHeight}px`);
      });
    }
  }, []);

  return (
    <div
      className="fullscreen-container"
      style={{ minHeight: height, height: 'auto' }}
    >
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="ga-setting">{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
      `}</Script>
      <div className="container" style={{ height: height }}>
        <ScoreMapProvider>
          <Component {...pageProps} />
        </ScoreMapProvider>
      </div>
    </div>
  );
}

export default MyApp;
