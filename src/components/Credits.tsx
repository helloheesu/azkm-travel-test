import { Locale } from 'data/languages';
import { credits } from 'data/sentences';
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
      <header>{credits.credits[locale]}</header>
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
            <span>{credits.hwany[locale]}</span>
          </a>
        </li>
        <li onClick={() => onClickLink('Heesu')}>
          <a
            href="https://github.com/helloheesu/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialButton service="github" />
            <span>{credits.heesu[locale]}</span>
          </a>
        </li>
        <li onClick={() => onClickLink('Jaz')}>
          <a
            href="https://www.instagram.com/jaz.sweeet/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialButton service="instagram" />
            <span>{credits.jaz[locale]}</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Credits;
