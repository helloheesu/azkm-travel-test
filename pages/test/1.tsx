import type { NextPage } from 'next';
import Image from 'next/image';
import Progress from 'components/Progress';
import MainPic from 'public/images/1.png';
import Link from 'next/link';
import Head from 'next/head';

const Test: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>1/5 - 여행 유형 테스트</title>
        <meta name="description" content="나는 어떤 여행 유형일까?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Progress max={5} value={1} />
      <h2 className="heading">
        요리를 할래 아님 뒷정리를 할래? 라고 묻는다면?
      </h2>
      <div className="main-image">
        <Image src={MainPic} alt="요리 이미지" />
      </div>
      <Link href={'2'} passHref as={'/'}>
        <button className="button option">
          요리도 할 수 있지만 난 청소를 할래.
          <br />
          깔끔한 게 좋거든.
        </button>
      </Link>
      <Link href={'2'} passHref as={'/'}>
        <button className="button option accent">
          요리도 할 수 있지만 난 청소를 할래.
          <br />
          깔끔한 게 좋거든.
        </button>
      </Link>
      <Link href={'2'} passHref as={'/'}>
        <button className="button option">
          당연히 요리를 할래. 설거지나 뒷정리는 귀찮거든.
        </button>
      </Link>
      <Link href={'2'} passHref as={'/'}>
        <button className="button option accent">
          당연히 요리를 할래. 설거지나 뒷정리는 귀찮거든.
        </button>
      </Link>
    </div>
  );
};

export default Test;
