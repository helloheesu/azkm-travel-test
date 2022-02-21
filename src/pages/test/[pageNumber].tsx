import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import TestPage from 'components/pages/Test';
import tests, { TestData } from 'data/tests';
import { ParsedUrlQuery } from 'querystring';
import { Locale } from 'data/languages';

interface StaticProps extends ParsedUrlQuery {
  pageNumber: string;
}
export const getStaticPaths: GetStaticPaths<StaticProps> = ({
  locales = ['ko', 'en'],
}) => {
  const paths = tests.flatMap((_, i) =>
    locales.map((locale) => ({
      params: {
        pageNumber: (i + 1).toString(),
      },
      locale,
    }))
  );

  return {
    paths,
    fallback: false,
  };
};

interface Props {
  totalPageNumber: number;
  pageNumber: number;
  data: TestData;
  locale: Locale;
}
export const getStaticProps: GetStaticProps<Props, StaticProps> = ({
  params,
  locale,
}) => {
  const totalPageNumber = tests.length;
  const pageNumber = parseInt(params!.pageNumber);
  const data = tests[pageNumber - 1];

  return {
    props: {
      totalPageNumber,
      pageNumber,
      data,
      locale: (locale as Locale) || 'ko',
    },
  };
};

const Test: NextPage<Props> = ({
  totalPageNumber,
  pageNumber,
  data: { title, mainImgDescription, options },
  locale,
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
      locale={locale}
    />
  );
};

export default Test;
