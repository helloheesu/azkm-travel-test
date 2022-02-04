import type { NextPage } from 'next';
import Image from 'next/image';
import Progress from '../../components/Progress';
import IntroPic from '../../public/images/intro.png';

const Test: NextPage = () => {
  return (
    <div className="container">
      <Progress max={10} value={1} />
      <h2 className="heading">
        요리를 할래 아님 뒷정리를 할래? <br />
        라고 묻는다면?
      </h2>
      <div className="main-image">
        <Image src={IntroPic} alt="인트로 이미지 설명" />
      </div>
      <button className="button option">
        요리도 할 수 있지만 난 청소를 할래.
        <br />
        깔끔한 게 좋거든.
      </button>
      <button className="button option">
        당연히 요리를 할래. 설거지나 뒷정리는 귀찮거든.
      </button>
    </div>
  );
};

export default Test;
