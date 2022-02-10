import MainImage from 'components/MainImage';
import Progress from 'components/Progress';
import { Character, Question } from 'utils/questions';

interface Props extends Question {
  pageNumber: number;
  totalPageNumber: number;
  onNext: (characters: Character[]) => void;
}
const QuestionPage = ({
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
        <h2 className="heading">{title}</h2>
        <MainImage
          src={`/images/test/${pageNumber}.png`}
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

export default QuestionPage;
