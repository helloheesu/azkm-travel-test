import { logPageview } from 'components/GA';
import BorderBox from 'components/BorderBox';
import ScoreMapContext from 'components/ScoreMapContext';
import { Locale } from 'data/languages';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
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
const Result: NextPage<Props> = ({ locale }) => {
  const { getHighestCharacter } = useContext(ScoreMapContext);
  const highestCharacter = getHighestCharacter();

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace(
        {
          pathname: '/[character]',
          query: { character: highestCharacter },
        },
        `/${highestCharacter}`,
        {
          shallow: true,
        }
      );
    }, 1000);
  }, [highestCharacter, router]);

  useEffect(() => {
    logPageview('/loading');
  }, []);

  return (
    <div className="content-wrapper content-aligner">
      <BorderBox>
        <MainImage src={'/images/ui/loading.gif'} alt="로딩 이미지 설명" />
      </BorderBox>
      {{ ko: '분석 중...', en: 'Loading...' }[locale]}
    </div>
  );
};

export default Result;
