import { Locale } from 'data/languages';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  currentLocale: Locale;
}
const LocaleToggler = ({ currentLocale }: Props) => {
  const destinationLocale = currentLocale === 'en' ? 'ko' : 'en';
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const onClick = () => {
    Cookies.set('NEXT_LOCALE', destinationLocale);
  };

  return (
    <Link
      href={{ pathname, query }}
      locale={destinationLocale}
      as={asPath}
      replace={true}
    >
      <a onClick={onClick}>
        {{ ko: '한국어', en: 'English' }[destinationLocale]} {'>'}
      </a>
    </Link>
  );
};

export default LocaleToggler;
