import { Character } from './character';
import { Locale } from './languages';

type MatchCharacter = {
  name: Character;
  description: {
    [locale in Locale]: string;
  };
};
const match: {
  [key in Character]: {
    best: MatchCharacter;
    worst: MatchCharacter;
  };
} = {
  vanilla: {
    best: {
      name: 'hief',
      description: {
        ko: '디저트를 만드는 요리사인',
        en: 'A chef who makes great dessert',
      },
    },
    worst: {
      name: 'somsom',
      description: {
        ko: '혼자 여행을 좋아하는',
        en: 'Who likes to travel alone',
      },
    },
  },
  munboo: {
    best: {
      name: 'somsom',
      description: {
        ko: '효율적인 여행 동료인',
        en: 'Who likes to plan thoroughly',
      },
    },
    worst: {
      name: 'kobi',
      description: {
        ko: '효율보단 감성적인',
        en: 'Who likes to wing it',
      },
    },
  },
  totti: {
    best: {
      name: 'kobi',
      description: {
        ko: '자연 여행을 좋아하는',
        en: 'Who likes to enjoy the nature',
      },
    },
    worst: {
      name: 'cinnamong',
      description: {
        ko: '운동을 좋아하지 않는',
        en: "Who doesn't like to get active",
      },
    },
  },
  somsom: {
    best: {
      name: 'cinnamong',
      description: {
        ko: 'Flex 여행을 즐기는',
        en: 'Who likes to splurge',
      },
    },
    worst: {
      name: 'hief',
      description: {
        ko: '먹는 거에만 돈 쓰는',
        en: 'Who only spends money on food',
      },
    },
  },
  hief: {
    best: {
      name: 'vanilla',
      description: {
        ko: '식당 최고의 단골 손님인',
        en: 'The best regular customer of his restaurant',
      },
    },
    worst: {
      name: 'munboo',
      description: {
        ko: '너무 계획대로 움직이는',
        en: 'Who likes to get everything planned',
      },
    },
  },
  cinnamong: {
    best: {
      name: 'munboo',
      description: {
        ko: '길을 잘 찾는',
        en: 'Born to find the right path',
      },
    },
    worst: {
      name: 'totti',
      description: {
        ko: '쉴 줄 모르는 에너자이저인',
        en: 'Who is full of energy',
      },
    },
  },
  kobi: {
    best: {
      name: 'totti',
      description: {
        ko: '자연 관광을 즐기는',
        en: 'Who likes to enjoy the nature',
      },
    },
    worst: {
      name: 'vanilla',
      description: {
        ko: '블루베리만 좋아하는',
        en: 'Who only cares about Blueberry',
      },
    },
  },
};

export default match;
