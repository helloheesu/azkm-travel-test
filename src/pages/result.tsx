import LoadingResultPage from 'components/pages/LoadingResult';
import ScoreMapContext from 'components/ScoreMapContext';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

const Result: NextPage = () => {
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

  return <LoadingResultPage />;
};

export default Result;
