import Head from 'components/Head';
import MainImage from 'components/MainImage';
import { Character, characterNames } from 'data/character';

interface Props {
  character: Character;
  descriptions: string[];
}
const ResultPage = ({ character, descriptions }: Props) => {
  const characterName = characterNames[character];

  return (
    <div className="content-wrapper content-aligner result">
      <Head title={`당신의 베스트 여행메이트는: ${characterName}`} />
      <header className="heading">
        <p className="subtitle">당신의 베스트 여행메이트는:</p>
        <h1 className="title">{characterName}</h1>
      </header>
      <MainImage src={`/images/characters/${character}.png`} alt={character} />
      <div className="description">
        <ul>
          {descriptions.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultPage;