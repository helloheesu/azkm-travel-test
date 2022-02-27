import { Character, characterNames } from 'data/character';
import { Locale } from 'data/languages';
import match from 'data/match';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  character: Character;
  locale: Locale;
}
const Match = ({ character, locale }: Props) => {
  const { best, worst } = match[character];

  return (
    <div className="match-container">
      <Link
        href={{
          pathname: '/[character]',
          query: { character: best.name },
        }}
        as={`/${best.name}`}
        passHref
      >
        <div className="match match-best">
          <p className="description">{best.description[locale]}</p>
          <p className="name">{characterNames[best.name][locale]}</p>
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
      </Link>
      <Link
        href={{
          pathname: '/[character]',
          query: { character: worst.name },
        }}
        as={`/${worst.name}`}
        passHref
      >
        <div className="match match-worst">
          <p className="description">{worst.description[locale]}</p>
          <p className="name">{characterNames[worst.name][locale]}</p>
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
      </Link>
    </div>
  );
};

export default Match;
