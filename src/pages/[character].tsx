import ResultPage from 'components/pages/Result';
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

  return (
    <ResultPage
      character={character}
      characterName={characterName}
      descriptions={descriptions[locale]}
      summary={summary[locale]}
      locale={locale}
    />
  );
};

export default Page;
