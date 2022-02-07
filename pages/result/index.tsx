import MainImage from 'components/MainImage';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Result: NextPage<{ height: string }> = ({ height }) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('result/vanilla');
    }, 1000);
  }, [router]);

  return (
    <div className="container" style={{ minHeight: height, height: 'auto' }}>
      <MainImage src={'/images/loading.png'} alt="로딩 이미지 설명" />
      분석 중...
    </div>
  );
};

export default Result;
