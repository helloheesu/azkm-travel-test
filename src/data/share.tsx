import { i18nText } from './languages';

export type Service =
  | 'share'
  | 'kakao'
  | 'url'
  | 'download'
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'smartstore'
  | 'idus'
  | 'github';

export const serviceNames: {
  [key in Service]: i18nText;
} = {
  share: { ko: '', en: '' },
  kakao: { ko: '', en: '' },
  url: { ko: '', en: '' },
  download: { ko: '', en: '' },
  facebook: { ko: '', en: '' },
  twitter: { ko: '', en: '' },
  instagram: { ko: '인스타그램', en: 'Instagram' },
  smartstore: { ko: '공식스토어', en: 'Smartstore' },
  idus: { ko: '아이디어스', en: 'Idus' },
  github: { ko: '', en: '' },
};
