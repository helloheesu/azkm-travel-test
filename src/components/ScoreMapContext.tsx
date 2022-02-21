import { Character, characters } from 'data/character';
import { createContext, FunctionComponent, useState } from 'react';

export type ScoreMap = Map<Character, number>;
export type Scores = {
  [key in Character]: number;
};

const ScoreMapContext = createContext<{
  scoreMap: ScoreMap;
  increaseScores: (scores: Scores) => void;
}>({
  scoreMap: new Map(),
  increaseScores: ({}) => {},
});

const getInitialScoreMap = (): ScoreMap => {
  const scoreMap: ScoreMap = new Map();

  characters.forEach((character) => {
    scoreMap.set(character, 0);
  }, new Map<Character, number>());

  return scoreMap;
};

export const getHighestCharacter = (scoreMap: ScoreMap): Character => {
  let highest: [character: Character, score: number] | null = null;
  const iterator = scoreMap.entries();

  for (
    let current = iterator.next();
    current.done === false;
    current = iterator.next()
  ) {
    const [character, score] = current.value;

    if (!highest || score > highest[1]) {
      highest = [character, score];
    }
  }

  return highest![0];
};

export const ScoreMapProvider: FunctionComponent = ({ children }) => {
  const [scoreMap, setScoreMap] = useState(getInitialScoreMap());

  const increaseScores = (scores: Scores) => {
    setScoreMap((scoreMap) => {
      const newScoreMap = new Map(scoreMap);
      characters.forEach((character) => {
        const score = scores[character];
        newScoreMap.set(character, (newScoreMap.get(character) || 0) + score);
      });
      return newScoreMap;
    });
  };

  return (
    <ScoreMapContext.Provider
      value={{
        scoreMap,
        increaseScores,
      }}
    >
      {children}
    </ScoreMapContext.Provider>
  );
};

export default ScoreMapContext;
