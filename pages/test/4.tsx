import type { NextPage } from 'next';
import Image from 'next/image';
import Progress from 'components/Progress';
import MainPic from 'public/images/4.png';
import Link from 'next/link';
import Head from 'next/head';

const Test: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>4/5 - 여행 유형 테스트</title>
        <meta name="description" content="나는 어떤 여행 유형일까?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Progress max={5} value={4} />
      <h2 className="heading">운동을 좋아해?</h2>
      <div className="main-image">
        <Image src={MainPic} alt="인트로 이미지 설명" />
      </div>
      <Link href={'5'} passHref as={'/'}>
        <button className="button option">
          운동이 싫어. 운동하느니 차라리 한숨 자는 게 낫지!
        </button>
      </Link>
      <Link href={'5'} passHref as={'/'}>
        <button className="button option">
          난 무거운 돌을 들지 못하면 화가 나!
        </button>
      </Link>
    </div>
  );
};

export default Test;
