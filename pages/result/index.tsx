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
      <div className="main-image">
        <div style={{ backgroundImage: `url('/images/loading.png')` }}></div>
      </div>
      분석 중...
    </div>
  );
};

export default Result;
