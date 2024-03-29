import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import tests, { TestData } from 'data/tests';
import { ParsedUrlQuery } from 'querystring';
import { Locale } from 'data/languages';
import Head from 'components/Head';
import Link from 'components/Link';
import BorderBox from 'components/BorderBox';
import Modal from 'components/Modal';
import Progress from 'components/Progress';
import ScoreMapContext, { ScoreMap } from 'components/ScoreMapContext';
import { useContext, useState, useEffect } from 'react';
import { logEvent, logPageview } from 'components/GA';
import Foy from 'components/Foy';
import MainImage from 'components/MainImage';
import ImagePreLoader from 'components/ImagePreLoader';
import { foy, index } from 'data/sentences';

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
      : '/loading';
  const as = pageNumber < totalPageNumber ? '/' : undefined;
  const replace = pageNumber < totalPageNumber;

  const imgSrc = `/images/main/${pageNumber}.png`;
  const { increaseScores } = useContext(ScoreMapContext);

  const [isFoyShown, setIsFoyShown] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);

  useEffect(() => {
    const showFoy = () => {
      logEvent('easter_egg', {
        visible: !isFoyShown,
        pageNumber,
      });
      if (isFoyShown) {
        return;
      }
      setIsFoyShown(true);
      setIsModalOn(true);
    };

    const SECOND = 1000;
    const timeoutId = setTimeout(showFoy, 60 * SECOND);
    return () => clearTimeout(timeoutId);
  }, [isFoyShown, pageNumber]);

  useEffect(() => {
    logPageview(`/test/${pageNumber}`);
  }, [pageNumber]);

  const onClickItem = (scores: ScoreMap, itemNumber: number) => {
    increaseScores(scores);
    logEvent('select_item', {
      pageNumber,
      itemNumber,
    });
  };

  return (
    <div className="fix-and-stretch-aligner">
      <Head
        img={imgSrc}
        title={`${index.subtitle[locale]} - ${pageNumber}/${totalPageNumber}`}
        description={index.title[locale]}
      />
      <ImagePreLoader
        src={
          pageNumber < totalPageNumber
            ? `/images/main/${pageNumber + 1}.png`
            : '/images/ui/loading.gif'
        }
      />
      {isModalOn && (
        <Modal
          onClose={() => setIsModalOn(false)}
          closeText={`${foy.continue[locale]} >`}
        >
          <Foy locale={locale} />
        </Modal>
      )}
      <Progress max={totalPageNumber} value={pageNumber} />
      <div className="content-aligner stretch">
        <h2 className="no-margin test-title">{title[locale]}</h2>
        <BorderBox>
          <MainImage src={imgSrc} alt={mainImgDescription} />
        </BorderBox>
        {options.map(({ text, scores }, i) => (
          <Link
            key={i}
            href={href}
            as={as}
            text={text[locale]}
            onClick={() => onClickItem(scores, i + 1)}
            replace={replace}
          />
        ))}
      </div>
    </div>
  );
};

export default Test;
