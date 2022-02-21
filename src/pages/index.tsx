import Head from 'components/Head';
import Link from 'components/Link';
import LocaleToggler from 'components/LocaleToggler';
import MainImage from 'components/MainImage';
import { Locale } from 'data/languages';
import type { GetStaticProps, NextPage } from 'next';

interface Props {
  locale: Locale;
}
export const getStaticProps: GetStaticProps<Props> = ({ locale }) => {
  return {
    props: {
      locale: (locale as Locale) || 'ko',
    },
  };
};
const Home: NextPage<Props> = ({ locale }) => {
  return (
    <div className="content-wrapper content-aligner">
      <Head />
      <div
        style={{
          position: 'absolute',
          top: '2em',
          right: '1em',
        }}
      >
        <LocaleToggler currentLocale={locale} />
      </div>
      <header>
        <p>{{ ko: '여행 유형 테스트', en: 'Travel Type Test' }[locale]}</p>
        <h1 className="title">
          {{ ko: '나는 어떤 유형일까?', en: 'Which type am I?' }[locale]}
        </h1>
      </header>
      <MainImage src={'/images/main/intro.png'} alt="인트로 이미지" />
      <Link
        href={{
          pathname: '/test/[pageNumber]',
          query: { pageNumber: '1' },
        }}
        as={'/'}
        text={`${{ ko: '테스트 시작', en: 'Start' }[locale]} >`}
      />
    </div>
  );
};

export default Home;
