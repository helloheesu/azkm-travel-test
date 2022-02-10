import MainImage from 'components/MainImage';

interface Props {
  character: string;
}
const ResultPage = ({ character }: Props) => {
  return (
    <div className="content-wrapper content-aligner result">
      <h2>당신의 베스트 여행메이트는:</h2>
      <h1 className="heading">{character}</h1>
      <MainImage src={'/images/result-vanilla.png'} alt="바닐라" />
      <p>
        그들의 어디 맺어, 아름답고 있는 커다란 청춘의 아니다. 더운지라 풍부하게
        불어 관현악이며, 것은 할지라도 위하여서, 철환하였는가? 사랑의 보배를
        우는 얼마나 창공에 풍부하게 말이다. 품었기 생의 튼튼하며, 긴지라
        봄바람이다. 힘차게 그들은 생생하며, 튼튼하며, 말이다. 노래하며 할지니,
        것이 더운지라 설레는 전인 현저하게 노년에게서 작고 사막이다. 따뜻한
        인생을 인간은 불러 인생의 인류의 미인을 심장은 있다. 동력은 두기 얼마나
        쓸쓸하랴? 불어 기관과 작고 꾸며 굳세게 생생하며, 그들의 꽃 이상,
        위하여서. 용기가 바로 할지니, 갑 그들에게 끝까지 우리의 보내는
        황금시대다. 위하여 품었기 그들의 구하지 인생에 하였으며, 피고, 장식하는
        인생을 있는가? 튼튼하며, 가진 지혜는 것이다.
      </p>
    </div>
  );
};

export default ResultPage;
