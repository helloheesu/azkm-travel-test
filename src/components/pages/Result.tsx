import Head from 'components/Head';
import Link from 'components/Link';
import MainImage from 'components/MainImage';
import Share from 'components/Share';
import { Character, characterNames } from 'data/character';

interface Props {
  character: Character;
  descriptions: string[];
}
const ResultPage = ({ character, descriptions }: Props) => {
  const characterName = characterNames[character];
  const imgSrc = `/images/characters/${character}.png`;

  return (
    <div className="content-wrapper content-aligner result">
      <Head
        title={`당신의 베스트 여행메이트는: ${characterName}`}
        img={imgSrc}
      />
      <header className="heading">
        <p className="subtitle">당신의 베스트 여행메이트는:</p>
        <h1 className="title">{characterName}</h1>
      </header>
      <main>
        <MainImage src={imgSrc} alt={character} />
        <div className="description">
          <ul>
            {descriptions.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
      </main>
      <footer>
        <Link text="테스트 다시하기" href={'/'} />
        <Share />
      </footer>
    </div>
  );
};

export default ResultPage;
