import MainImage from 'components/MainImage';
import Progress from 'components/Progress';
import { Character } from 'data/character';
import { TestData } from 'data/tests';
import Link from 'next/link';

interface Props extends TestData {
  pageNumber: number;
  totalPageNumber: number;
  onNext: (characters: Character[]) => void;
  href: React.ComponentProps<typeof Link>['href'];
  as: string;
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
          <Link key={i} href={href} as={as}>
            <a
              className="button image-background content-container"
              onClick={() => onNext(characters)}
            >
              <div>{text}</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
