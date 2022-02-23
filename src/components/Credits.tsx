import { Locale } from 'data/languages';
import { logEvent } from './GA';
import SocialButton from './SocialButton';

const Credits = ({ locale }: { locale: Locale }) => {
  const onImageRendered = () => {
    logEvent('credit_shown', {});
  };
  const onClickLink = (name: string) => {
    logEvent('credit_click', {
      name,
    });
  };

  return (
    <section className="credits">
      <header>{{ ko: '만든 사람들', en: 'Credits' }[locale]}</header>
      <ul>
        <li onClick={() => onClickLink('Hwany')}>
          <a
            href="https://instagram.com/azkm_friends"
            target="_blank"
            rel="noreferrer"
          >
            <SocialButton
              service="instagram"
              onLoadingComplete={onImageRendered}
            />
            <span>{{ ko: '화니', en: 'Hwany' }[locale]}</span>
          </a>
        </li>
        <li onClick={() => onClickLink('Heesu')}>
          <a
            href="https://github.com/helloheesu/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialButton service="github" />
            <span>{{ ko: '히수', en: 'Heesu' }[locale]}</span>
          </a>
        </li>
        <li onClick={() => onClickLink('Jaz')}>
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
