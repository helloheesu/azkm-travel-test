import { Character, characters } from 'data/character';
import { createContext, FunctionComponent, useEffect, useState } from 'react';

export type ScoreMap = Map<Character, number>;

const ScoreMapContext = createContext<{
  scoreMap: ScoreMap;
  increaseScoreToCharacters: (characters: Character[]) => void;
}>({
  scoreMap: new Map(),
  increaseScoreToCharacters: ([]) => {},
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

  const increaseScoreToCharacters = (characters: Character[]) => {
    setScoreMap((scoreMap) => {
      const newScoreMap = new Map(scoreMap);
      characters.forEach((character) =>
        newScoreMap.set(character, (newScoreMap.get(character) || 0) + 1)
      );
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
