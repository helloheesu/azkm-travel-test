import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ScoreMapProvider } from 'components/ScoreMapContext';
import Script from 'next/script';
import GA from 'components/GA';

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
      <GA />
      <div className="container" style={{ height: height }}>
        <ScoreMapProvider>
          <Component {...pageProps} />
        </ScoreMapProvider>
      </div>
    </div>
  );
}

export default MyApp;
