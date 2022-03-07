import { logPageview } from 'components/GA';
import Head from 'components/Head';
import Link from 'components/Link';
import LocaleToggler from 'components/LocaleToggler';
import BorderBox from 'components/BorderBox';
import { Locale } from 'data/languages';
import type { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import MainImage from 'components/MainImage';
import ImagePreLoader from 'components/ImagePreLoader';
import LoadingImage from '../../public/images/ui/loading.gif';
import { index } from 'data/sentences';

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
      <ImagePreLoader src="/images/main/1.png" />
      <header>
        <p>{index.subtitle[locale]}</p>
        <h1 className="no-margin">{index.title[locale]}</h1>
      </header>
      <BorderBox>
        <MainImage src={'/images/main/intro.png'} alt="인트로 이미지" />
        <div className="guide guide-top-right">
          <LocaleToggler currentLocale={locale} />
        </div>
      </BorderBox>
      <Link
        href={{
          pathname: '/test/[pageNumber]',
          query: { pageNumber: '1' },
        }}
        as={'/'}
        text={`${index.start[locale]} >`}
      />
    </div>
  );
};

export default Home;
