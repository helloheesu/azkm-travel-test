import type { NextPage } from 'next';
import TestPage from 'components/pages/Test';
import tests from 'data/tests';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Character } from 'data/character';

const getInitialScoreMap = () => {
  const scoreMap: { [key: string]: number } = {};
  Object.values(Character).forEach((character) => {
    scoreMap[character] = 0;
  });
  return scoreMap;
};

const Test: NextPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPageNumber = tests.length;

  const [scoreMap, setScoreMap] = useState(getInitialScoreMap());

  const router = useRouter();

  const onNext = (characters: Character[]) => {
    setScoreMap((scoreMap) => {
      const newScoreMap = { ...scoreMap };
      characters.forEach((character) => newScoreMap[character]++);
      return newScoreMap;
    });

    if (pageNumber < totalPageNumber) {
      setPageNumber((pageNumber) => pageNumber + 1);
    } else {
      const highestCharacter = Object.keys(scoreMap).reduce(
        (highestCharacter, character) => {
          const score = scoreMap[character];
          const highestScore = scoreMap[highestCharacter];
          return score > highestScore ? character : highestCharacter;
        }
      );

      router.push(`/result/${highestCharacter}`);
    }
  };

  return (
    <TestPage
      pageNumber={pageNumber}
      totalPageNumber={totalPageNumber}
      {...tests[pageNumber - 1]}
      onNext={onNext}
    />
  );
};

export default Test;
