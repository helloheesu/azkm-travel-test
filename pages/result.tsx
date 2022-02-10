import LoadingResultPage from 'components/LoadingResultPage';
import ResultPage from 'components/ResultPage';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

const Result: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingResultPage />;
  } else {
    return <ResultPage />;
  }
};

export default Result;
