import Image from 'next/image';
import FoyImage from '/public/images/characters/foy.png';

const Foy = () => {
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
      <Image src={FoyImage} alt="" />
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

export default Foy;
