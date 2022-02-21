import Head from 'components/Head';
import Link from 'components/Link';
import MainImage from 'components/MainImage';
import Progress from 'components/Progress';
import ScoreMapContext from 'components/ScoreMapContext';
import { TestData } from 'data/tests';
import { useContext } from 'react';

interface Props extends TestData {
  pageNumber: number;
  totalPageNumber: number;
  href: React.ComponentProps<typeof Link>['href'];
  as: React.ComponentProps<typeof Link>['as'];
}
const TestPage = ({
  pageNumber,
  totalPageNumber,
  title,
  mainImgDescription,
  options,
  href,
  as,
}: Props) => {
  const imgSrc = `/images/main/${pageNumber}.png`;
  const { increaseScoreToCharacters } = useContext(ScoreMapContext);

  return (
    <div className="fix-and-stretch-aligner">
      <Head img={imgSrc} />
      <Progress max={totalPageNumber} value={pageNumber} />
      <div className=" content-aligner stretch">
        <h2 className="title">{title}</h2>
        <MainImage src={imgSrc} alt={mainImgDescription} />
        {options.map(({ text, characters }, i) => (
          <Link
            key={i}
            href={href}
            as={as}
            text={text}
            onClick={() => increaseScoreToCharacters(characters)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestPage;
