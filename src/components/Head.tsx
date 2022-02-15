import Head from 'next/head';
import { useEffect, useState } from 'react';

interface Props {
  title?: string;
  description?: string;
  img?: string;
}
const Comp = ({
  title = '아찌끄미 여행 유형 테스트',
  description = '나와 가장 잘 맞는 여행 스타일의 캐릭터는?',
  img = '/og.png',
}: Props) => {
  const [fullImgUrl, setFullImgUrl] = useState(img);
  useEffect(() => {
    const baseUrl = document.location.href;
    const urlObj = new URL(img, baseUrl);
    setFullImgUrl(urlObj.href);
  }, [img]);

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
    </Head>
  );
};

export default Comp;
