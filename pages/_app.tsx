import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useLayoutEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [height, setHeight] = useState('100vh');
  useLayoutEffect(() => {
    setHeight(`${window.innerHeight}px`);
  }, []);
  return <Component {...pageProps} height={height} />;
}

export default MyApp;
