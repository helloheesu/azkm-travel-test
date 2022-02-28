import { logPageview } from 'components/GA';
import Head from 'components/Head';
import Link from 'components/Link';
import LocaleToggler from 'components/LocaleToggler';
import BorderBox from 'components/BorderBox';
import { Locale } from 'data/languages';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useEffect } from 'react';
import MainImage from 'components/MainImage';

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
  useEffect(() => {
    logPageview(`/`);
  }, []);

  return (
    <div className="content-wrapper content-aligner">
      <Head />
      <Image
        src="/images/ui/loading.gif"
        width="0"
        height="0"
        alt="preload-loading"
      />
      <div
        style={{
          position: 'absolute',
          top: '2em',
          right: '1em',
        }}
      >
        {/* <LocaleToggler currentLocale={locale} /> */}
      </div>
      <header>
        <p>
          {{ ko: '여행 스타일로 알아보는', en: 'Travel Type Test' }[locale]}
        </p>
        <h1 className="no-margin">
          {{ ko: '아찌끄미 친구 찾기', en: 'Which type am I?' }[locale]}
        </h1>
      </header>
      <BorderBox>
        <MainImage src={'/images/main/intro.png'} alt="인트로 이미지" />
      </BorderBox>
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
