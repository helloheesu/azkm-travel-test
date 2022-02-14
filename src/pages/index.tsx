import Head from 'components/Head';
import Link from 'components/Link';
import MainImage from 'components/MainImage';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="content-wrapper content-aligner">
      <Head />
      <header>
        <p>성격 유형 테스트</p>
        <h1 className="title">나는 어떤 유형일까?</h1>
      </header>
      <MainImage src={'/images/main/intro.png'} alt="인트로 이미지" />
      <Link
        href={{
          pathname: '/test/[pageNumber]',
          query: { pageNumber: '1' },
        }}
        as={'/'}
        text={'테스트 시작 >'}
      />
    </div>
  );
};

export default Home;
