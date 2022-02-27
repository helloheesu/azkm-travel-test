import { Character, characterNames } from 'data/character';
import { Locale } from 'data/languages';
import match from 'data/match';
import Image from 'next/image';
import Link from 'next/link';
import { logEvent } from './GA';

interface Props {
  character: Character;
  locale: Locale;
}
const Match = ({ character, locale }: Props) => {
  const { best, worst } = match[character];
  const onClick = ({ relationship }: { relationship: 'best' | 'worst' }) =>
    logEvent('click_match', {
      character,
      relationship,
    });

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
        <div className="match">
          <div
            className="match-box match-best"
            onClick={() => onClick({ relationship: 'best' })}
          >
            <p>찰떡친구</p>
            <div>
              <Image
                src={`/images/characters/${best.name}.png`}
                alt=""
                layout="intrinsic"
                width={2000}
                height={1600}
              />
            </div>
            <p className="description">{best.description[locale]}</p>
            <p className="name">{characterNames[best.name][locale]}</p>
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
        <div className="match">
          <div
            className="match-box match-worst"
            onClick={() => onClick({ relationship: 'worst' })}
          >
            <p>개떡친구</p>
            <div>
              <Image
                src={`/images/characters/${worst.name}.png`}
                alt=""
                layout="intrinsic"
                width={2000}
                height={1600}
              />
            </div>
            <p className="description">{worst.description[locale]}</p>
            <p className="name">{characterNames[worst.name][locale]}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Match;
