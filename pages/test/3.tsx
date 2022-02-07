import type { NextPage } from 'next';
import Image from 'next/image';
import Progress from 'components/Progress';
import MainPic from 'public/images/3.png';
import Link from 'next/link';
import Head from 'next/head';

const Test: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>3/5 - 여행 유형 테스트</title>
        <meta name="description" content="나는 어떤 여행 유형일까?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Progress max={5} value={3} />
      <h2 className="heading">
        드디어 도착! 여행지에서 가장먼저 눈에들어 온것은 무엇인가?
      </h2>
      <div className="main-image">
        <Image src={MainPic} alt="여행 스타일 이미지" />
      </div>
      <Link href={'4'} passHref as={'/'}>
        <button className="button option">
          눈에보이는건 걸어다니는 사람들 그리고 또 사람들...
        </button>
      </Link>
      <Link href={'4'} passHref as={'/'}>
        <button className="button option">
          일단 지도앱부터 켜서 숙소에 짐을 가져다 놔야지!
        </button>
      </Link>
      <Link href={'4'} passHref as={'/'}>
        <button className="button option">
          아~ 즐겁다 즐거워~ 이 순간을 그냥 즐겨~
        </button>
      </Link>
      <Link href={'4'} passHref as={'/'}>
        <button className="button option">
          아..배고파 체력이 떨어진다! 식당부터 찾는다.
        </button>
      </Link>
    </div>
  );
};

export default Test;
