import { Character, characters } from 'data/character';
import { createContext, FunctionComponent, useState } from 'react';

export type ScoreMap = {
  [key in Character]: number;
};

const getInitialScoreMap = (): ScoreMap => {
  const scoreMap: Partial<ScoreMap> = {};

  characters.forEach((character) => {
    scoreMap[character] = 0;
  }, {});

  return scoreMap as ScoreMap;
};

const ScoreMapContext = createContext<{
  scoreMap: ScoreMap;
  increaseScores: (scores: ScoreMap) => void;
  getHighestCharacter: () => Character;
}>({
  scoreMap: getInitialScoreMap(),
  increaseScores: ({}) => {},
  getHighestCharacter: () => characters[0],
});

export const ScoreMapProvider: FunctionComponent = ({ children }) => {
  const [scoreMap, setScoreMap] = useState(getInitialScoreMap());

  const increaseScores = (scores: ScoreMap) => {
    setScoreMap((scoreMap) => {
      const newScoreMap = { ...scoreMap };
      characters.forEach((character) => {
        const score = scores[character];
        newScoreMap[character] = newScoreMap[character] + score;
      });
      return newScoreMap;
    });
  };

  const getHighestCharacter = (): Character => {
    let highestScore = 0;
    let highestCharacter: Character;

    characters.forEach((character) => {
      const score = scoreMap[character];
      if (score > highestScore) {
        highestCharacter = character;
      }
    });

    return highestCharacter!;
  };

  return (
    <ScoreMapContext.Provider
      value={{
        scoreMap,
        increaseScores,
        getHighestCharacter,
      }}
    >
      {children}
    </ScoreMapContext.Provider>
  );
};

export default ScoreMapContext;
