import MainImage from 'components/MainImage';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage<{ height: string }> = ({ height }) => {
  return (
    <div className="content-wrapper content-aligner">
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
      <MainImage src={'/images/intro.png'} alt="인트로 이미지 설명" />
      <Link href={'/test'} as={'/'}>
        <a className="button image-background">
          <div>테스트 시작 &gt;</div>
        </a>
      </Link>
    </div>
  );
};

export default Home;
