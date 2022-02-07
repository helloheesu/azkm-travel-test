import type { NextPage } from 'next';
import Progress from 'components/Progress';
import Link from 'next/link';
import Head from 'next/head';

const Test: NextPage<{ height: string }> = ({ height }) => {
  return (
    <div className="container" style={{ minHeight: height, height: 'auto' }}>
      <Head>
        <title>4/5 - 여행 유형 테스트</title>
        <meta name="description" content="나는 어떤 여행 유형일까?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Progress max={5} value={4} />
      <h2 className="heading">
        여행지에서 개인 자유시간! 당신은 무엇을 하고싶은가?
      </h2>
      <div className="main-image">
        <div style={{ backgroundImage: `url('/images/4.png')` }}></div>
      </div>
      <Link href={'5'} as={'/'}>
        <a className="button option">
          <div>난 쉬러왔어. 숙소에 누워서 핸드폰이나 해야지</div>
        </a>
      </Link>
      <Link href={'5'} as={'/'}>
        <a className="button option">
          <div>여행은 체력이지! 운동을 빼먹을순없어</div>
        </a>
      </Link>
      <Link href={'5'} as={'/'}>
        <a className="button option">
          <div>주변 구경도 할겸 가벼운 산책을 하고싶어!</div>
        </a>
      </Link>
    </div>
  );
};

export default Test;
