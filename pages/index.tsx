import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import IntroPic from '../public/images/intro.png';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>아찌끄미 유형 테스트</title>
        <meta name="description" content="나는 어떤 유형일까?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <p>성격 유형 테스트</p>
        <h1 className="heading">나는 어떤 유형일까?</h1>
      </header>
      <div className="main-image">
        <Image src={IntroPic} alt="인트로 이미지 설명" />
      </div>
      <button className="button accent">테스트 시작 &gt;</button>
    </div>
  );
};

export default Home;
