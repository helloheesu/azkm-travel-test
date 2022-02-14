import LoadingResultPage from 'components/pages/LoadingResult';
import ScoreMapContext, {
  getHighestCharacter,
} from 'components/ScoreMapContext';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

const Result: NextPage = () => {
  const { scoreMap } = useContext(ScoreMapContext);
  const highestCharacter = getHighestCharacter(scoreMap);

  const router = useRouter();
  router.replace(
    {
      pathname: '/result/[character]',
      query: { character: highestCharacter },
    },
    `/${highestCharacter}`
  );

  return <LoadingResultPage />;
};

export default Result;
