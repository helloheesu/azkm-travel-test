import MainImage from 'components/MainImage';

const LoadingResultPage = () => {
  return (
    <div className="content-wrapper content-aligner">
      <MainImage src={'/images/ui/loading.png'} alt="로딩 이미지 설명" />
      분석 중...
    </div>
  );
};

export default LoadingResultPage;
