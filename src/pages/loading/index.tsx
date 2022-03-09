import { logPageview } from 'components/GA';
import BorderBox from 'components/BorderBox';
import ScoreMapContext from 'components/ScoreMapContext';
import { Locale } from 'data/languages';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import MainImage from 'components/MainImage';
import ImagePreLoader from 'components/ImagePreLoader';
import { result } from 'data/sentences';

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
const Result: NextPage<Props> = ({ locale }) => {
  const { getHighestCharacter } = useContext(ScoreMapContext);
  const highestCharacter = getHighestCharacter();
  const router = useRouter();

  useEffect(() => {
    logPageview('/loading');
  }, []);

  useEffect(() => {
    setTimeout(() => {
      router.replace({
        pathname: '/loading/[character]',
        query: { character: highestCharacter },
      });
    }, 1000);
  }, [highestCharacter, router]);

  return (
    <div className="content-wrapper content-aligner">
      <ImagePreLoader
        src={'/images/product/product.png'}
        size={{
          width: 1000,
          height: 1000,
        }}
      />
      <BorderBox>
        <MainImage src={'/images/ui/loading.gif'} alt="로딩 이미지 설명" />
      </BorderBox>
      {result.loading[locale]}
    </div>
  );
};

export default Result;
