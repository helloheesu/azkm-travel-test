import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const [height, setHeight] = useState('100vh');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(`${window.innerHeight}px`);
    }
  }, []);

  return (
    <div className="wrapper" style={{ minHeight: height, height: 'auto' }}>
      <Head>
        <title>아찌끄미 여행 유형 테스트</title>
        <meta
          name="description"
          content="나와 가장 잘 맞는 여행 스타일의 캐릭터는?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} height={height} />
    </div>
  );
}

export default MyApp;
