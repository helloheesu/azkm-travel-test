import type { NextPage } from 'next';
import Image from 'next/image';
import Progress from 'components/Progress';
import MainPic from 'public/images/4.png';
import Link from 'next/link';

const Test: NextPage = () => {
  return (
    <div className="container">
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
