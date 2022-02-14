import { Character } from 'data/character';
import { createContext, FunctionComponent, useState } from 'react';

export type ScoreMap = { [key: string]: number };

const ScoreMapContext = createContext<{
  scoreMap: ScoreMap;
  increaseScoreToCharacters: (characters: Character[]) => void;
}>({
  scoreMap: {},
  increaseScoreToCharacters: ([]) => {},
});

const getInitialScoreMap = () => {
  const scoreMap: ScoreMap = {};
  Object.values(Character).forEach((character) => {
    scoreMap[character] = 0;
  });
  return scoreMap;
};

export const getHighestCharacter = (scoreMap: ScoreMap) => {
  return Object.keys(scoreMap).reduce((highestCharacter, character) => {
    const score = scoreMap[character];
    const highestScore = scoreMap[highestCharacter];
    return score > highestScore ? character : highestCharacter;
  });
};

export const ScoreMapProvider: FunctionComponent = ({ children }) => {
  const [scoreMap, setScoreMap] = useState(getInitialScoreMap());

  const increaseScoreToCharacters = (characters: Character[]) => {
    setScoreMap((scoreMap) => {
      const newScoreMap = { ...scoreMap };
      characters.forEach((character) => newScoreMap[character]++);
      return newScoreMap;
    });
  };

  return (
    <ScoreMapContext.Provider
      value={{
        scoreMap,
        increaseScoreToCharacters,
      }}
    >
      {children}
    </ScoreMapContext.Provider>
  );
};

export default ScoreMapContext;
