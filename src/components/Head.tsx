import Head from 'next/head';
import { useEffect, useState } from 'react';

interface Props {
  title?: string;
  description?: string;
  img?: string;
  pathname?: string;
}
const Comp = ({
  title = '여행 유형 테스트',
  description = '나랑 잘 맞는 아찌끄미 친구 찾기',
  img = '/og.png',
  pathname = '',
}: Props) => {
  const [baseUrl, setBaseUrl] = useState(
    'https://azkm-travel-test.vercel.app/'
  );
  useEffect(() => {
    setBaseUrl(document.location.href);
  }, []);

  const fullImgUrl = new URL(img, baseUrl).href;
  const englishUrl = new URL(`/en/${pathname}`, baseUrl).href;
  const koreanUrl = new URL(`/${pathname}`, baseUrl).href;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="apple-touch-icon" sizes="192x192" href="/favicon.png" />
      <link rel="icon" type="image/png" href="/favicon.png" sizes="192x192" />
      {/* IE */}
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      {/* other browsers */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="msapplication-TileImage" content="/favicon.png" />
      <meta name="msapplication-TileColor" content="#f5d57e"></meta>
      <meta property="og:image" content={fullImgUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <link rel="alternate" hrefLang="en" href={englishUrl} /> */}
      {/* <link rel="alternate" hrefLang="ko" href={koreanUrl} /> */}
    </Head>
  );
};

export default Comp;
