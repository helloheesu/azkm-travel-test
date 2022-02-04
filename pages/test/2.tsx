import type { NextPage } from 'next';
import Image from 'next/image';
import Progress from 'components/Progress';
import MainPic from 'public/images/2.png';
import Link from 'next/link';
import Head from 'next/head';

const Test: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>2/5 - 여행 유형 테스트</title>
        <meta name="description" content="나는 어떤 여행 유형일까?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Progress max={5} value={2} />
      <h2 className="heading">자유시간이 생겼다. 무엇을 할까?</h2>
      <div className="main-image">
        <Image src={MainPic} alt="자유시간 이미지" />
      </div>
      <Link href={'3'} passHref as={'/'}>
        <button className="button option">
          친구가 있다면 바둑이나 체스 하기를 하자고 말해볼래.
        </button>
      </Link>
      <Link href={'3'} passHref as={'/'}>
        <button className="button option">자연에서 휴식하는 게 좋아.</button>
      </Link>
    </div>
  );
};

export default Test;
