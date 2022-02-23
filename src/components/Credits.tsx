import { Locale } from 'data/languages';
import SocialButton from './SocialButton';

const Credits = ({ locale }: { locale: Locale }) => {
  return (
    <section className="credits">
      <header>{{ ko: '만든 사람들', en: 'Credits' }[locale]}</header>
      <ul>
        <li>
          <a
            href="https://instagram.com/azkm_friends"
            target="_blank"
            rel="noreferrer"
          >
            <SocialButton service="instagram" />
            <span>{{ ko: '화니', en: 'Hwany' }[locale]}</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/helloheesu/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialButton service="github" />
            <span>{{ ko: '히수', en: 'Heesu' }[locale]}</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/jaz.sweeet/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialButton service="instagram" />
            <span>{{ ko: '재즈', en: 'Jaz' }[locale]}</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Credits;
