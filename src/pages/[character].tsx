import Credits from 'components/Credits';
import { logPageview } from 'components/GA';
import Head from 'components/Head';
import Link from 'components/Link';
import MainImage from 'components/MainImage';
import Match from 'components/Match';
import Product from 'components/Product';
import Share from 'components/Share';
import { Character, characterNames, characters } from 'data/character';
import { Locale } from 'data/languages';
import results from 'data/results';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useEffect } from 'react';

interface StaticProps extends ParsedUrlQuery {
  character: Character;
}
export const getStaticPaths: GetStaticPaths<StaticProps> = ({
  locales = ['ko', 'en'],
}) => {
  const paths = characters.flatMap((character) =>
    locales.map((locale) => ({
      params: {
        character: character,
      },
      locale,
    }))
  );

  return {
    paths,
    fallback: false,
  };
};

interface Props {
  character: Character;
  locale: Locale;
  title: string;
  characterName: string;
  summary: string;
  imgSrc: string;
  descriptions: string[];
}
export const getStaticProps: GetStaticProps<Props, StaticProps> = ({
  params,
  locale,
}) => {
  const character = params!.character as Character;
  const _locale = (locale as Locale) || 'ko';

  const { descriptions, summary } = results[character];
  const characterName = characterNames[character][_locale];
  const imgSrc = `/images/characters/${character}.png`;
  const title = {
    ko: '나랑 잘 맞는 여행 친구는',
    en: 'You best travel mate',
  }[_locale];

  return {
    props: {
      character,
      locale: _locale,
      title,
      characterName,
      summary: summary[_locale],
      imgSrc,
      descriptions: descriptions[_locale],
    },
  };
};

const Page: NextPage<Props> = ({
  character,
  locale,
  title,
  characterName,
  summary,
  imgSrc,
  descriptions,
}: Props) => {
  useEffect(() => {
    logPageview(`/result/${character}`);
  }, [character]);

  return (
    <div className="content-wrapper content-aligner result">
      <style jsx>{`
        .description li::before {
          background-image: url('/images/list-icons/${character}.png');
        }
      `}</style>
      <Head
        title={`${title}: ${characterName}`}
        description={summary}
        img={imgSrc}
        pathname={character}
      />
      <section>
        <header className="heading">
          <p className="subtitle">{title}:</p>
          <h1 className="title">{characterName}</h1>
        </header>
        <main className="main">
          <div
            style={{
              position: 'relative',
            }}
          >
            <MainImage src={imgSrc} alt={character} />
            <div
              style={{
                position: 'absolute',
                right: '1em',
                top: '1em',
              }}
            >
              {/* <LocaleToggler currentLocale={locale} /> */}
            </div>
          </div>
          <div className="description">
            <ul>
              {descriptions.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        </main>
        <footer className="footer">
          <Match character={character} locale={locale} />
        </footer>
      </section>
      <Product locale={locale} />
      <footer className="footer">
        <Link
          text={{ ko: '테스트 다시하기', en: 'Restart' }[locale]}
          href={'/'}
        />
        <Share character={character} />
      </footer>
      <Credits locale={locale} />
    </div>
  );
};

export default Page;
