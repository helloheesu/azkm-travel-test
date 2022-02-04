import type { NextPage } from 'next';
import Image from 'next/image';
import Progress from 'components/Progress';
import MainPic from 'public/images/3.png';
import Link from 'next/link';

const Test: NextPage = () => {
  return (
    <div className="container">
      <Progress max={5} value={3} />
      <h2 className="heading">어떤 여행스타일이야?</h2>
      <div className="main-image">
        <Image src={MainPic} alt="여행 스타일 이미지" />
      </div>
      <Link href={'4'} passHref as={'/'}>
        <button className="button option">
          여행보단 사실 집에서 쉬는 게 좋은 걸. 여행을 가서도 숙소에 있곤해.
        </button>
      </Link>
      <Link href={'4'} passHref as={'/'}>
        <button className="button option">
          나는 역사적인 유적지나 유명한 장소보단 식도락 여행이 좋아.
        </button>
      </Link>
      <Link href={'4'} passHref as={'/'}>
        <button className="button option">
          미리 시간에 맞춰 동선을 짜놓는게 좋아.
        </button>
      </Link>
    </div>
  );
};

export default Test;
