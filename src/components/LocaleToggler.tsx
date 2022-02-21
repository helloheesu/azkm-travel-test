import { Locale } from 'data/languages';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  currentLocale: Locale;
}
const LocaleToggler = ({ currentLocale }: Props) => {
  const destinationLocale = currentLocale === 'en' ? 'ko' : 'en';
  const router = useRouter();
  const { pathname, asPath, query } = router;

  return (
    <Link
      href={{ pathname, query }}
      locale={destinationLocale}
      as={asPath}
      replace={true}
    >
      <a>
        {{ ko: '한국어', en: 'English' }[destinationLocale]} {'>'}
      </a>
    </Link>
  );
};

export default LocaleToggler;
