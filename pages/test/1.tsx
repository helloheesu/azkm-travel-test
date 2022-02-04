import type { NextPage } from 'next';
import Image from 'next/image';
import Progress from 'components/Progress';
import MainPic from 'public/images/1.png';
import Link from 'next/link';

const Test: NextPage = () => {
  return (
    <div className="container">
      <Progress max={5} value={1} />
      <h2 className="heading">
        요리를 할래 아님 뒷정리를 할래? <br />
        라고 묻는다면?
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
        <button className="button option">
          당연히 요리를 할래. 설거지나 뒷정리는 귀찮거든.
        </button>
      </Link>
    </div>
  );
};

export default Test;
