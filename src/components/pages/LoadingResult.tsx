import MainImage from 'components/MainImage';
import { Locale } from 'data/languages';

const LoadingResultPage = ({ locale }: { locale: Locale }) => {
  return (
    <div className="content-wrapper content-aligner">
      <MainImage src={'/images/ui/loading.png'} alt="로딩 이미지 설명" />
      {{ ko: '분석 중...', en: 'Loading...' }[locale]}
    </div>
  );
};

export default LoadingResultPage;
