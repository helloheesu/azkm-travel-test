import { Locale } from 'data/languages';
import { foy } from 'data/sentences';
import Image from 'next/image';
import FoyImage from '/public/images/characters/foy.png';

const Foy = ({ locale }: { locale: Locale }) => {
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
        <h1>{foy.foy[locale]}</h1>
      </header>
      <Image src={FoyImage} alt="" />
      <main
        style={{
          fontSize: '1.2em',
          lineHeight: '1.6em',
        }}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: foy.description[locale],
          }}
        />
      </main>
    </section>
  );
};

export default Foy;
