import MainImage from 'components/MainImage';
import Progress from 'components/Progress';
import type { NextPage } from 'next';
import Link from 'next/link';

export interface Question {
  title: string;
  mainImgDescription?: string;
  options: string[];
}
interface Props extends Question {
  pageNumber: number;
  totalPageNumber: number;
  height: string;
}
const QuestionPage: NextPage<Props> = ({
  pageNumber,
  totalPageNumber,
  title,
  mainImgDescription,
  options,
  height,
}: Props) => {
  return (
    <div className="content-wrapper">
      <Progress max={totalPageNumber} value={pageNumber} />
      <h2 className="heading">{title}</h2>
      <MainImage
        src={`/images/test/${pageNumber}.png`}
        alt={mainImgDescription}
      />
      {options.map((option, i) => (
        <Link
          key={i}
          href={{
            pathname: '/test/[pid]',
            query: { pid: pageNumber + 1 },
          }}
          as={'/'}
        >
          <a className="button option image-background">
            <div>{option}</div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default QuestionPage;
