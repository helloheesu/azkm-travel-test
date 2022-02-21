import Credits from 'components/Credits';
import Head from 'components/Head';
import Link from 'components/Link';
import LocaleToggler from 'components/LocaleToggler';
import MainImage from 'components/MainImage';
import Product from 'components/Product';
import Share from 'components/Share';
import { Character } from 'data/character';
import { Locale } from 'data/languages';
import { useRouter } from 'next/router';

interface Props {
  character: Character;
  characterName: string;
  descriptions: string[];
  locale: Locale;
}
const ResultPage = ({
  character,
  characterName,
  descriptions,
  locale,
}: Props) => {
  const imgSrc = `/images/characters/${character}.png`;
  const title = {
    ko: '당신의 베스트 여행메이트는',
    en: 'You best travel mate',
  }[locale];

  return (
    <div className="content-wrapper content-aligner result">
      <Head
        title={`${title}: ${characterName}`}
        img={imgSrc}
        pathname={character}
      />
      <section>
        <header className="heading">
          <p className="subtitle">{title}:</p>
          <h1 className="title">{characterName}</h1>
        </header>
        <main className="main">
          <div
            style={{
              position: 'relative',
            }}
          >
            <MainImage src={imgSrc} alt={character} />
            <div
              style={{
                position: 'absolute',
                right: '1em',
                top: '1em',
              }}
            >
              <LocaleToggler currentLocale={locale} />
            </div>
          </div>
          <div className="description">
            <ul>
              {descriptions.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        </main>
        <footer className="footer">
          <Link
            text={{ ko: '테스트 다시하기', en: 'Restart' }[locale]}
            href={'/'}
          />
          <Share />
        </footer>
      </section>
      <Product locale={locale} />
      <Credits locale={locale} />
    </div>
  );
};

export default ResultPage;
