import type { NextPage } from 'next';
import Image from 'next/image';
import Progress from 'components/Progress';
import MainPic from 'public/images/2.png';
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
      <div className="main-image">
        <Image src={MainPic} alt="자유시간 이미지" />
      </div>
      <Link href={'3'} passHref as={'/'}>
        <button className="button option">
          아..졸려 약속에 늦지않게 10분만 더 잔다.
        </button>
      </Link>
      <Link href={'3'} passHref as={'/'}>
        <button className="button option">
          만나는 시간 전까지 인터넷 서핑을 한다.
        </button>
      </Link>
      <Link href={'3'} passHref as={'/'}>
        <button className="button option">
          금강산도 식후경! 아침밥을 간단히 먹는다
        </button>
      </Link>
      <Link href={'3'} passHref as={'/'}>
        <button className="button option">
          늦으면 안돼! 미리 약속장소에 나가있는다.
        </button>
      </Link>
    </div>
  );
};

export default Test;
