export type Locale = 'en' | 'ko';
export type i18nText<T = string> = {
  [key in Locale]: T;
};

export const getLocale = (): Locale => {
  if (!window?.navigator?.language) {
    return 'ko';
  }

  const locale = window.navigator.language.slice(0, 2);
  if (locale === 'en' || locale === 'ko') {
    return locale;
  } else {
    return 'ko';
  }
};
