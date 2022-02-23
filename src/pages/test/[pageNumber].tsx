import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import tests, { TestData } from 'data/tests';
import { ParsedUrlQuery } from 'querystring';
import { Locale } from 'data/languages';
import Head, { DEFAULT_TITLE } from 'components/Head';
import Link from 'components/Link';
import MainImage from 'components/MainImage';
import Modal from 'components/Modal';
import Progress from 'components/Progress';
import ScoreMapContext from 'components/ScoreMapContext';
import Image from 'next/image';
import { useContext, useState, useEffect } from 'react';
import PoiImage from '/public/images/characters/Poi.png';

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
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'center',
            }}
          >
            <header
              style={{
                fontSize: '1.4em',
              }}
            >
              <h1>포이 사우루스</h1>
            </header>
            <Image src={PoiImage} alt="" />
            <main
              style={{
                fontSize: '1.2em',
                lineHeight: '1.6em',
              }}
            >
              <p>멍때리기를 좋아하는 당신</p>
              <p>어쩌면 포이 사우루스와 잘 맞을지도?!</p>
            </main>
          </section>
        </Modal>
      )}
      <Progress max={totalPageNumber} value={pageNumber} />
      <div className="content-aligner stretch">
        <h2 className="title">{title[locale]}</h2>
        <MainImage src={imgSrc} alt={mainImgDescription} />
        {options.map(({ text, scores }, i) => (
          <Link
            key={i}
            href={href}
            as={as}
            text={text[locale]}
            onClick={() => increaseScores(scores)}
          />
        ))}
      </div>
    </div>
  );
};

export default Test;
