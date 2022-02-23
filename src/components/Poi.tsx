import Image from 'next/image';
import PoiImage from '/public/images/characters/Poi.png';

const Poi = () => {
  return (
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
  );
};

export default Poi;
