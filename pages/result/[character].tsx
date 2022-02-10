import LoadingResultPage from 'components/LoadingResultPage';
import ResultPage from 'components/ResultPage';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Result: NextPage = () => {
  const router = useRouter();
  const character = router.query.character as string;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingResultPage />;
  } else {
    return <ResultPage character={character} />;
  }
};

export default Result;
