import type { NextPage } from 'next';
import Image from 'next/image';
import Progress from 'components/Progress';
import MainPic from 'public/images/5.png';
import Link from 'next/link';

const Test: NextPage = () => {
  return (
    <div className="container">
      <Progress max={5} value={5} />
      <h2 className="heading">나만이 알고 있는 나의 비밀은?</h2>
      <div className="main-image">
        <Image src={MainPic} alt="비밀 이미지" />
      </div>
      <Link href={'/result'} passHref>
        <button className="button option">
          때론 사람들의 주목을 받고 싶은데 한편으론 부담도 느껴져.
        </button>
      </Link>
      <Link href={'/result'} passHref>
        <button className="button option">
          난 사실 배고픔을 참지 못하고 바로 배달 음식을 주문한다.
        </button>
      </Link>
      <Link href={'/result'} passHref>
        <button className="button option">
          나는 늘 같은 말을 하는 건데 사람들은 날 고집부린다고 오해해.
        </button>
      </Link>
    </div>
  );
};

export default Test;
