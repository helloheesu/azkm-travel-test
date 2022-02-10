import MainImage from 'components/MainImage';
import Progress from 'components/Progress';
import { Character } from 'data/character';
import { TestData } from 'data/tests';

interface Props extends TestData {
  pageNumber: number;
  totalPageNumber: number;
  onNext: (characters: Character[]) => void;
}
const TestPage = ({
  pageNumber,
  totalPageNumber,
  title,
  mainImgDescription,
  options,
  onNext,
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
          <button
            key={i}
            onClick={() => onNext(characters)}
            className="button image-background content-container"
          >
            <div>{text}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
