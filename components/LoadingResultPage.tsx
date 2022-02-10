import MainImage from 'components/MainImage';
import { NextPage } from 'next';

const LoadingResultPage: NextPage = () => {
  return (
    <div className="content-wrapper content-aligner">
      <MainImage src={'/images/loading.png'} alt="로딩 이미지 설명" />
      분석 중...
    </div>
  );
};

export default LoadingResultPage;
