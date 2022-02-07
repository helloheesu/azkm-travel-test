import type { NextPage } from 'next';
import Image from 'next/image';
import Progress from 'components/Progress';
import MainPic from 'public/images/5.png';
import Link from 'next/link';
import Head from 'next/head';

const Test: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>5/5 - 여행 유형 테스트</title>
        <meta name="description" content="나는 어떤 여행 유형일까?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Progress max={5} value={5} />
      <h2 className="heading">여행이 이제 끝났다. 마지막으로 하고싶은것은?</h2>
      <div className="main-image">
        <Image src={MainPic} alt="비밀 이미지" />
      </div>
      <Link href={'/result'} passHref>
        <button className="button option">
          여행에 마지막은 기념품이지!! 기념품점으로 간다.
        </button>
      </Link>
      <Link href={'/result'} passHref>
        <button className="button option">
          피곤해.. 아무런 생각이 들지않아!
        </button>
      </Link>
      <Link href={'/result'} passHref>
        <button className="button option">
          아쉬워서 다음여행은 언제 어디로갈지 이야기한다.
        </button>
      </Link>
      <Link href={'/result'} passHref>
        <button className="button option">
          여행지에서 하지못하고 빼먹은 것이 있나 찾아본다.
        </button>
      </Link>
    </div>
  );
};

export default Test;
