import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import TestPage from 'components/pages/Test';
import tests, { TestData } from 'data/tests';
import { ParsedUrlQuery } from 'querystring';

interface StaticProps extends ParsedUrlQuery {
  pageNumber: string;
}
export const getStaticPaths: GetStaticPaths<StaticProps> = () => {
  const paths = tests.map((_, i) => ({
    params: {
      pageNumber: (i + 1).toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface Props {
  totalPageNumber: number;
  pageNumber: number;
  data: TestData;
}
export const getStaticProps: GetStaticProps<Props, StaticProps> = ({
  params,
}) => {
  const totalPageNumber = tests.length;
  const pageNumber = parseInt(params!.pageNumber);
  const data = tests[pageNumber - 1];

  return {
    props: {
      totalPageNumber,
      pageNumber,
      data,
    },
  };
};

const Test: NextPage<Props> = ({
  totalPageNumber,
  pageNumber,
  data: { title, mainImgDescription, options },
}: Props) => {
  const href =
    pageNumber < totalPageNumber
      ? {
          pathname: '/test/[pageNumber]',
          query: { pageNumber: (pageNumber + 1).toString() },
        }
      : '/result';
  const as = '/';

  return (
    <TestPage
      pageNumber={pageNumber}
      totalPageNumber={totalPageNumber}
      title={title}
      mainImgDescription={mainImgDescription}
      options={options}
      href={href}
      as={as}
    />
  );
};

export default Test;
