import Link from 'components/Link';
import MainImage from 'components/MainImage';
import Progress from 'components/Progress';
import { Character } from 'data/character';
import { TestData } from 'data/tests';

interface Props extends TestData {
  pageNumber: number;
  totalPageNumber: number;
  onNext: (characters: Character[]) => void;
  href: React.ComponentProps<typeof Link>['href'];
  as: React.ComponentProps<typeof Link>['as'];
}
const TestPage = ({
  pageNumber,
  totalPageNumber,
  title,
  mainImgDescription,
  options,
  onNext,
  href,
  as,
}: Props) => {
  return (
    <div className="fix-and-stretch-aligner">
      <Progress max={totalPageNumber} value={pageNumber} />
      <div className=" content-aligner stretch">
        <h2 className="title">{title}</h2>
        <MainImage
          src={`/images/main/${pageNumber}.png`}
          alt={mainImgDescription}
        />
        {options.map(({ text, characters }, i) => (
          <Link
            key={i}
            href={href}
            as={as}
            text={text}
            onClick={() => onNext(characters)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestPage;
