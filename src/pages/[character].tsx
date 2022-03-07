import Credits from 'components/Credits';
import { logPageview } from 'components/GA';
import Head from 'components/Head';
import Link from 'components/Link';
import BorderBox from 'components/BorderBox';
import Match from 'components/Match';
import Product from 'components/Product';
import Share from 'components/Share';
import { Character, characterNames, characters } from 'data/character';
import { Locale } from 'data/languages';
import results from 'data/results';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { useEffect } from 'react';
import { result } from 'data/sentences';
import LocaleToggler from 'components/LocaleToggler';

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
  characterImgSrc: string;
  characterWithPatternImgSrc: string;
  characterWithBgcolorImgSrc: string;
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
  const title = result.title[_locale];

  return {
    props: {
      character,
      locale: _locale,
      title,
      characterName,
      summary: summary[_locale],
      characterImgSrc: `/images/characters/${character}.png`,
      characterWithPatternImgSrc: `/images/characters-with-pattern/${character}.png`,
      characterWithBgcolorImgSrc: `/images/characters-with-bgcolor/${character}.png`,
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
  characterImgSrc,
  characterWithPatternImgSrc,
  characterWithBgcolorImgSrc,
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
        img={characterImgSrc}
        pathname={character}
      />
      <section>
        <header className="heading">
          <p>{title}:</p>
          <h1 className="no-margin bold">{characterName}</h1>
        </header>
        <main className="main">
          <BorderBox>
            <Image
              src={characterWithPatternImgSrc}
              alt={character}
              width={2000}
              height={2000}
              priority={true}
              loading="eager"
              objectFit="contain"
              objectPosition="center"
            />
            <p className="guide guide-bottom nonselectable">
              &#9650;{result.save[locale]}&#9650;
            </p>
            <div className="guide guide-top-right">
              <LocaleToggler currentLocale={locale} />
            </div>
          </BorderBox>
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
        <Link text={result.restart[locale]} href={'/'} />
        <Share
          character={character}
          attachmentSrc={characterWithBgcolorImgSrc}
        />
      </footer>
      <Credits locale={locale} />
    </div>
  );
};

export default Page;
