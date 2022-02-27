import { Character, characterNames } from 'data/character';
import { Locale } from 'data/languages';
import match from 'data/match';
import Image from 'next/image';

interface Props {
  character: Character;
  locale: Locale;
}
const Match = ({ character, locale }: Props) => {
  const { best, worst } = match[character];

  return (
    <div className="match-container">
      <div className="match match-best">
        <p>{best.description[locale]}</p>
        <p>{characterNames[best.name][locale]}</p>
        <div>
          <Image
            src={`/images/characters/${best.name}.png`}
            alt=""
            layout="intrinsic"
            width={2000}
            height={1600}
          />
        </div>
      </div>
      <div className="match match-worst">
        <p>{worst.description[locale]}</p>
        <p>{characterNames[worst.name][locale]}</p>
        <div>
          <Image
            src={`/images/characters/${worst.name}.png`}
            alt=""
            layout="intrinsic"
            width={2000}
            height={1600}
          />
        </div>
      </div>
    </div>
  );
};

export default Match;
