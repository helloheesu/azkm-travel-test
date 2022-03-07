import { i18nText } from './languages';

// order matters, as it is the tie breaker
export const characters = [
  'vanilla',
  'munboo',
  'totti',
  'somsom',
  'hief',
  'cinnamong',
  'kobi',
] as const;

export type Character = typeof characters[number];

export const characterNames: {
  [key in Character]: i18nText;
} = {
  totti: { ko: '또띠', en: 'Totti' },
  munboo: { ko: '먼부', en: 'Munboo' },
  vanilla: { ko: '바닐라', en: 'Vanilla' },
  cinnamong: { ko: '시나몽', en: 'Cinnamong' },
  kobi: { ko: '코비', en: 'Kobi' },
  hief: { ko: '히프', en: 'Hief' },
  somsom: { ko: '솜솜이', en: 'Somsom' },
};
