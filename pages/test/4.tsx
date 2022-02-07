import type { NextPage } from 'next';
import Image from 'next/image';
import Progress from 'components/Progress';
import MainPic from 'public/images/4.png';
import Link from 'next/link';
import Head from 'next/head';

const Test: NextPage<{ height: string }> = ({ height }) => {
  return (
    <div className="container" style={{ minHeight: height, height: 'auto' }}>
      <Head>
        <title>4/5 - 여행 유형 테스트</title>
        <meta name="description" content="나는 어떤 여행 유형일까?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Progress max={5} value={4} />
      <h2 className="heading">
        여행지에서 개인 자유시간! 당신은 무엇을 하고싶은가?
      </h2>
      <div className="main-image">
        <Image src={MainPic} alt="인트로 이미지 설명" />
      </div>
      <Link href={'5'} passHref as={'/'}>
        <button className="button option">
          난 쉬러왔어. 숙소에 누워서 핸드폰이나 해야지
        </button>
      </Link>
      <Link href={'5'} passHref as={'/'}>
        <button className="button option">
          여행은 체력이지! 운동을 빼먹을순없어
        </button>
      </Link>
      <Link href={'5'} passHref as={'/'}>
        <button className="button option">
          주변 구경도 할겸 가벼운 산책을 하고싶어!
        </button>
      </Link>
      <Link href={'5'} passHref as={'/'}>
        <button className="button option">
          이따 야시장에 가기위해 지금 잠깐 자야해!
        </button>
      </Link>
    </div>
  );
};

export default Test;
