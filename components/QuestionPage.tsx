import MainImage from 'components/MainImage';
import Progress from 'components/Progress';
import type { NextPage } from 'next';
import { Question } from 'utils/questions';

interface Props extends Question {
  pageNumber: number;
  totalPageNumber: number;
  onNext: () => void;
}
const QuestionPage: NextPage<Props> = ({
  pageNumber,
  totalPageNumber,
  title,
  mainImgDescription,
  options,
  onNext,
}: Props) => {
  const handleClick = () => {
    onNext();
  };

  return (
    <div className="content-wrapper">
      <Progress max={totalPageNumber} value={pageNumber} />
      <h2 className="heading">{title}</h2>
      <MainImage
        src={`/images/test/${pageNumber}.png`}
        alt={mainImgDescription}
      />
      {options.map((option, i) => (
        <button
          key={i}
          onClick={handleClick}
          className="button option image-background"
        >
          <div>{option}</div>
        </button>
      ))}
    </div>
  );
};

export default QuestionPage;
