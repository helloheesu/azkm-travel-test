import MainImage from 'components/MainImage';
import Progress from 'components/Progress';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Test: NextPage<{ height: string }> = ({ height }) => {
  return (
    <div className="container" style={{ minHeight: height, height: 'auto' }}>
      <Head>
        <title>2/5 - 여행 유형 테스트</title>
        <meta name="description" content="나는 어떤 여행 유형일까?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Progress max={5} value={2} />
      <h2 className="heading">
        여행 당일날 눈을 떴다! 당신이 가장먼저 하는 일은?
      </h2>
      <MainImage src={'/images/2.png'} alt="계획 이미지" />
      <Link href={'3'} as={'/'}>
        <a className="button option">
          <div>아..졸려 약속에 늦지않게 10분만 더 잔다.</div>
        </a>
      </Link>
      <Link href={'3'} as={'/'}>
        <a className="button option">
          <div>만나는 시간 전까지 인터넷 서핑을 한다.</div>
        </a>
      </Link>
      <Link href={'3'} as={'/'}>
        <a className="button option">
          <div>금강산도 식후경! 아침밥을 간단히 먹는다</div>
        </a>
      </Link>
    </div>
  );
};

export default Test;
