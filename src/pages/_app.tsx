import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ScoreMapProvider } from 'components/ScoreMapContext';

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
      <div className="container" style={{ height: height }}>
        <ScoreMapProvider>
          <Component {...pageProps} />
        </ScoreMapProvider>
      </div>
      <div className="image-preloader" />
    </div>
  );
}

export default MyApp;
