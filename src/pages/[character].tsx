import ResultPage from 'components/pages/Result';
import { Character, characters } from 'data/character';
import results from 'data/results';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface StaticProps extends ParsedUrlQuery {
  character: Character;
}
export const getStaticPaths: GetStaticPaths<StaticProps> = () => {
  const paths = characters.map((character) => ({
    params: {
      character: character,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface Props {
  character: Character;
}
export const getStaticProps: GetStaticProps<Props, StaticProps> = ({
  params,
}) => {
  const character = params!.character as Character;

  return {
    props: {
      character,
    },
  };
};

const Page: NextPage<Props> = ({ character }: Props) => {
  const descriptions = results[character];

  return <ResultPage character={character} descriptions={descriptions} />;
};

export default Page;
