import Credits from 'components/Credits';
import Head from 'components/Head';
import Link from 'components/Link';
import MainImage from 'components/MainImage';
import Product from 'components/Product';
import Share from 'components/Share';
import { Character, characterNames, characters } from 'data/character';
import { Locale } from 'data/languages';
import results from 'data/results';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

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
}
export const getStaticProps: GetStaticProps<Props, StaticProps> = ({
  params,
  locale,
}) => {
  const character = params!.character as Character;

  return {
    props: {
      character,
      locale: (locale as Locale) || 'ko',
    },
  };
};

const Page: NextPage<Props> = ({ character, locale }: Props) => {
  const { descriptions, summary } = results[character];
  const characterName = characterNames[character][locale];

  const imgSrc = `/images/characters/${character}.png`;
  const title = {
    ko: '나랑 잘 맞는 여행 친구는',
    en: 'You best travel mate',
  }[locale];

  return (
    <div className="content-wrapper content-aligner result">
      <Head
        title={`${title}: ${characterName}`}
        description={summary[locale]}
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
              {descriptions[locale].map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        </main>
        <footer className="footer">
          <Link
            text={{ ko: '테스트 다시하기', en: 'Restart' }[locale]}
            href={'/'}
          />
          <Share character={character} />
        </footer>
      </section>
      <Product locale={locale} />
      <Credits locale={locale} />
    </div>
  );
};

export default Page;
