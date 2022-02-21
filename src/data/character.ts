import { i18nText } from './languages';

// order matters, as it is the tie breaker
export const characters = [
  'Vanilla',
  'Munboo',
  'Totti',
  'Somsom',
  'Hiff',
  'Cinamon',
  'Coby',
] as const;

export type Character = typeof characters[number];

export const characterNames: {
  [key in Character]: i18nText;
} = {
  Totti: { ko: '또띠', en: 'Totti' },
  Munboo: { ko: '먼부', en: 'Munboo' },
  Vanilla: { ko: '바닐라', en: 'Vanilla' },
  Cinamon: { ko: '시나몽', en: 'Cinamon' },
  Coby: { ko: '코비', en: 'Coby' },
  Hiff: { ko: '히프', en: 'Hiff' },
  Somsom: { ko: '솜솜이', en: 'Somsom' },
};
