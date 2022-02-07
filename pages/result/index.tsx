import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LoadingPic from 'public/images/loading.png';
import { useEffect } from 'react';

const Result: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('result/vanilla');
    }, 1000);
  }, [router]);

  return (
    <div className="container">
      <div className="main-image">
        <Image src={LoadingPic} alt="로딩 이미지" />
      </div>
      분석 중...
    </div>
  );
};

export default Result;
