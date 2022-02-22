import Head from 'components/Head';
import Link from 'components/Link';
import MainImage from 'components/MainImage';
import Modal from 'components/Modal';
import Progress from 'components/Progress';
import ScoreMapContext from 'components/ScoreMapContext';
import { Locale } from 'data/languages';
import { TestData } from 'data/tests';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import PoiImage from '/public/images/characters/Poi.png';

interface Props extends TestData {
  pageNumber: number;
  totalPageNumber: number;
  href: React.ComponentProps<typeof Link>['href'];
  as: React.ComponentProps<typeof Link>['as'];
  locale: Locale;
}
const TestPage = ({
  pageNumber,
  totalPageNumber,
  title,
  mainImgDescription,
  options,
  href,
  as,
  locale,
}: Props) => {
  const imgSrc = `/images/main/${pageNumber}.png`;
  const { increaseScores } = useContext(ScoreMapContext);

  const [isModalOn, setIsModalOn] = useState(false);
  const showPoi = () => setIsModalOn(true);
  useEffect(() => {
    const SECOND = 1000;
    const timeoutId = setTimeout(showPoi, 60 * 60 * SECOND);
    return () => clearTimeout(timeoutId);
  }, [pageNumber]);

  return (
    <div className="fix-and-stretch-aligner">
      <Head img={imgSrc} />
      <Modal
        isOn={isModalOn}
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

export default TestPage;
