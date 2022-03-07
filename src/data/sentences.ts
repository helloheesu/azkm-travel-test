import { i18nText } from './languages';

export const credits: { [key: string]: i18nText } = {
  credits: { ko: '만든 사람들', en: 'Credits' },
  hwany: { ko: '화니', en: 'Hwany' },
  heesu: { ko: '히수', en: 'Heesu' },
  jaz: { ko: '재즈', en: 'Jaz' },
};

export const product: { [key: string]: i18nText<string | string[]> } = {
  see_more: {
    ko: '아찌끄미 친구들의 해외 여행 중...',
    en: 'See more about AZKM',
  },
  outro: {
    ko: ['아찌끄미 친구들이', '어떤 디저트를', '먹었는지 궁금하다면?'],
    en: ["Let's see", 'what dessert', 'AZKM freinds', 'have chosen...'],
  },
};

export const result: { [key: string]: i18nText } = {
  loading: { ko: '분석 중...', en: 'Loading...' },
  title: { ko: '나랑 잘 맞는 여행 친구는', en: 'You best travel mate' },
  restart: { ko: '테스트 다시하기', en: 'Restart' },
  save: { ko: '꾹 눌러서 저장하기', en: 'Longpress to save' },
  best_match: { ko: '찰떡친구', en: 'Best Match' },
  worst_match: { ko: '개떡친구', en: 'Worst Match' },
};

export const index: { [key: string]: i18nText } = {
  subtitle: { ko: '여행 스타일로 알아보는', en: 'Travel Type Test' },
  title: { ko: '아찌끄미 친구 찾기', en: 'Which type am I?' },
  start: { ko: '테스트 시작', en: 'Start' },
};
