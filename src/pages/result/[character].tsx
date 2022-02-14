import ResultPage from 'components/pages/Result';
import { Character } from 'data/character';
import results from 'data/results';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Result: NextPage = () => {
  const router = useRouter();
  const character = router.query.character as Character;
  const descriptions = results[character];

  return <ResultPage character={character} descriptions={descriptions} />;
};

export default Result;
