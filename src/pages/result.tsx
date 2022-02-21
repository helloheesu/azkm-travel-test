import LoadingResultPage from 'components/pages/LoadingResult';
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

  return <LoadingResultPage locale={locale} />;
};

export default Result;
