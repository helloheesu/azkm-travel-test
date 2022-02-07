import type { NextPage } from 'next';
import Image from 'next/image';
import Progress from 'components/Progress';
import MainPic from 'public/images/test-2.png';
import Link from 'next/link';
import Head from 'next/head';

const Test: NextPage<{ height: string }> = ({ height }) => {
  return (
    <div className="container" style={{ minHeight: height, height: 'auto' }}>
      <Head>
        <title>1/5 - 여행 유형 테스트</title>
        <meta name="description" content="나는 어떤 여행 유형일까?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Progress max={5} value={1} />
      <h2 className="heading">
        친구들과 함께 여행가기로 전날 밤이다. 당신이 자기전 하는일은?
      </h2>
      <div className="main-image">
        <Image src={MainPic} alt="요리 이미지" />
      </div>
      <Link href={'2'} passHref as={'/'}>
        <button className="button option">
          여권, 필수품, 옷가지 등 꼼꼼하게 계속 체크해 본다.
        </button>
      </Link>
      <Link href={'2'} passHref as={'/'}>
        <button className="button option">
          친구한테 전화 통화를 걸어 여행에 관한 대화를 나눈다.
        </button>
      </Link>
      <Link href={'2'} passHref as={'/'}>
        <button className="button option">
          빨리자야지! 내일 아침에 제 시간에 일어나야 하니까
        </button>
      </Link>
      <Link href={'2'} passHref as={'/'}>
        <button className="button option">
          빼먹은 게 있어도, 가서 사면되지! 짐 싸는 건 귀찮아~
        </button>
      </Link>
    </div>
  );
};

export default Test;
