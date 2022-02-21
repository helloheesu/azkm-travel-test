import { Locale } from 'data/languages';

const Credits = ({ locale }: { locale: Locale }) => {
  return (
    <section className="credits">
      <header>{{ ko: '만든 사람들', en: 'Credits' }[locale]}</header>
      <ul>
        <li>{{ ko: '윤서', en: 'Jasmine' }[locale]}</li>
        <li>{{ ko: '신재', en: 'Hwany' }[locale]}</li>
        <li>{{ ko: '히수', en: 'Heesu' }[locale]}</li>
      </ul>
    </section>
  );
};

export default Credits;
