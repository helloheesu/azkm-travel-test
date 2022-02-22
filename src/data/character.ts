import { i18nText } from './languages';

// order matters, as it is the tie breaker
export const characters = [
  'vanilla',
  'munboo',
  'totti',
  'somsom',
  'hiff',
  'cinamon',
  'coby',
] as const;

export type Character = typeof characters[number];

export const characterNames: {
  [key in Character]: i18nText;
} = {
  totti: { ko: '또띠', en: 'Totti' },
  munboo: { ko: '먼부', en: 'Munboo' },
  vanilla: { ko: '바닐라', en: 'Vanilla' },
  cinamon: { ko: '시나몽', en: 'Cinamon' },
  coby: { ko: '코비', en: 'Coby' },
  hiff: { ko: '히프', en: 'Hiff' },
  somsom: { ko: '솜솜이', en: 'Somsom' },
};
