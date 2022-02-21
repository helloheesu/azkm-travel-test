import Head from 'components/Head';
import Link from 'components/Link';
import MainImage from 'components/MainImage';
import Progress from 'components/Progress';
import ScoreMapContext from 'components/ScoreMapContext';
import { Locale } from 'data/languages';
import { TestData } from 'data/tests';
import { useContext } from 'react';

interface Props extends TestData {
  pageNumber: number;
  totalPageNumber: number;
  href: React.ComponentProps<typeof Link>['href'];
  as: React.ComponentProps<typeof Link>['as'];
  locale: Locale;
}
const TestPage = ({
  pageNumber,
  totalPageNumber,
  title,
  mainImgDescription,
  options,
  href,
  as,
  locale,
}: Props) => {
  const imgSrc = `/images/main/${pageNumber}.png`;
  const { increaseScores } = useContext(ScoreMapContext);

  return (
    <div className="fix-and-stretch-aligner">
      <Head img={imgSrc} />
      <Progress max={totalPageNumber} value={pageNumber} />
      <div className=" content-aligner stretch">
        <h2 className="title">{title[locale]}</h2>
        <MainImage src={imgSrc} alt={mainImgDescription} />
        {options.map(({ text, scores }, i) => (
          <Link
            key={i}
            href={href}
            as={as}
            text={text[locale]}
            onClick={() => increaseScores(scores)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestPage;
