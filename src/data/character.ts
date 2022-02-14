export const characters = [
  'Totti',
  'Munboo',
  'Vanilla',
  'Cinamon',
  'Coby',
  'Hiff',
  'Somsom',
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
