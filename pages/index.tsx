import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import IntroPic from 'public/images/intro.png';

const Home: NextPage<{ height: string }> = ({ height }) => {
  return (
    <div className="container" style={{ minHeight: height, height: 'auto' }}>
      <Head>
        <title>여행 유형 테스트</title>
        <meta name="description" content="나는 어떤 여행 유형일까?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="upper"> */}
      <header>
        <p>성격 유형 테스트</p>
        <h1 className="heading">나는 어떤 유형일까?</h1>
      </header>
      <div className="main-image">
        <div style={{ backgroundImage: `url('/images/intro.png')` }}></div>
      </div>
      <Link href={'test/1'} as={'/'}>
        <a className="button accent">테스트 시작 &gt;</a>
      </Link>
    </div>
  );
};

export default Home;
