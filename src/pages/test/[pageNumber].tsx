import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import tests, { TestData } from 'data/tests';
import { ParsedUrlQuery } from 'querystring';
import { Locale } from 'data/languages';
import Head, { DEFAULT_TITLE } from 'components/Head';
import Link from 'components/Link';
import BorderBox from 'components/BorderBox';
import Modal from 'components/Modal';
import Progress from 'components/Progress';
import ScoreMapContext, { ScoreMap } from 'components/ScoreMapContext';
import { useContext, useState, useEffect } from 'react';
import { logEvent, logPageview } from 'components/GA';
import Poi from 'components/Poi';
import MainImage from 'components/MainImage';

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

  const imgSrc = `/images/main/${pageNumber}.png`;
  const { increaseScores } = useContext(ScoreMapContext);

  const [isPoiShown, setIsPoiShown] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);

  useEffect(() => {
    const showPoi = () => {
      logEvent('easter_egg', {
        visible: !isPoiShown,
        pageNumber,
      });
      if (isPoiShown) {
        return;
      }
      setIsPoiShown(true);
      setIsModalOn(true);
    };

    const SECOND = 1000;
    const timeoutId = setTimeout(showPoi, 60 * SECOND);
    return () => clearTimeout(timeoutId);
  }, [isPoiShown, pageNumber]);

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
        title={`${DEFAULT_TITLE} - ${pageNumber}/${totalPageNumber}`}
      />
      {isModalOn && (
        <Modal
          onClose={() => setIsModalOn(false)}
          closeText={'테스트 계속 하기 >'}
        >
          <Poi />
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
          />
        ))}
      </div>
    </div>
  );
};

export default Test;
