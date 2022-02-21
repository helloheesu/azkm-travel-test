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
  [key in Character]: string;
} = {
  Totti: '또띠',
  Munboo: '먼부',
  Vanilla: '바닐라',
  Cinamon: '시나몽',
  Coby: '코비',
  Hiff: '히프',
  Somsom: '솜솜이',
};
