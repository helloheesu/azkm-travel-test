import MainImage from 'components/MainImage';
import ScoreMapContext from 'components/ScoreMapContext';
import { Locale } from 'data/languages';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

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
    router.replace(
      {
        pathname: '/[result]',
        query: { result: highestCharacter },
      },
      `/${highestCharacter}`,
      {
        shallow: true,
      }
    );
  }, [highestCharacter, router]);

  return (
    <div className="content-wrapper content-aligner">
      <MainImage src={'/images/ui/loading.png'} alt="로딩 이미지 설명" />
      {{ ko: '분석 중...', en: 'Loading...' }[locale]}
    </div>
  );
};

export default Result;
