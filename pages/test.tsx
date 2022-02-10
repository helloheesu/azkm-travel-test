import type { NextPage } from 'next';
import QuestionPage from 'components/QuestionPage';
import data from 'utils/questions';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Test: NextPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPageNumber = data.length;

  const router = useRouter();

  const onNext = () => {
    if (pageNumber < totalPageNumber) {
      setPageNumber((pageNumber) => pageNumber + 1);
    } else {
      router.push('/result');
    }
  };

  return (
    <QuestionPage
      pageNumber={pageNumber}
      totalPageNumber={totalPageNumber}
      {...data[pageNumber - 1]}
      onNext={onNext}
    />
  );
};

export default Test;
