import type { NextPage } from 'next';
import Image from 'next/image';
import IntroPic from '../public/images/intro.png';

const Test: NextPage = () => {
  return (
    <div className="container">
      <div className="main-image">
        <Image src={IntroPic} alt="인트로 이미지 설명" />
      </div>
      <button className="button option">선택지 1번</button>
      <button className="button option">선택지 2번</button>
      <button className="button option">선택지 3번</button>
    </div>
  );
};

export default Test;
