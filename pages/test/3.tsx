import MainImage from 'components/MainImage';
import Progress from 'components/Progress';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Test: NextPage<{ height: string }> = ({ height }) => {
  return (
    <div className="container" style={{ minHeight: height, height: 'auto' }}>
      <Head>
        <title>3/5 - 여행 유형 테스트</title>
        <meta name="description" content="나는 어떤 여행 유형일까?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Progress max={5} value={3} />
      <h2 className="heading">
        드디어 도착! 여행지에서 가장먼저 눈에들어 온것은 무엇인가?
      </h2>
      <MainImage src={'/images/3.png'} alt="계획 이미지" />
      <Link href={'4'} as={'/'}>
        <a className="button option">
          <div>눈에보이는건 걸어다니는 사람들 그리고 또 사람들...</div>
        </a>
      </Link>
      <Link href={'4'} as={'/'}>
        <a className="button option">
          <div>일단 지도앱부터 켜서 숙소에 짐을 가져다 놔야지!</div>
        </a>
      </Link>
      <Link href={'4'} as={'/'}>
        <a className="button option">
          <div>아~ 즐겁다 즐거워~ 이 순간을 그냥 즐겨~</div>
        </a>
      </Link>
    </div>
  );
};

export default Test;
