import { Character } from './character';
import { i18nText } from './languages';

const results: {
  [key in Character]: {
    summary: i18nText;
    descriptions: i18nText<string[]>;
  };
} = {
  vanilla: {
    summary: {
      ko: '겁이 많아 익숙한 장소만 자주 가는 바닐라',
      en: 'Vanilla',
    },
    descriptions: {
      ko: [
        '느릿한 성격을 가진 바닐라는 여유가 넘치는 느긋한 여행을 좋아해요.',
        '잠이 많기 때문에 여유 있게 여행 시간표를 짜길 원하죠.',
        '느긋한 성격에 비해 입맛이 까다롭기 때문에 여행지에서 맞는 음식이 없을 때 고생하기도 해요.',
        '또한 겁이 많아 여행지에서 친구들 이외에는 누군가와 대화하거나 상대하는 것을 두려워하지요.',
        '사실 여행보단 집에서 쉬는 걸 좋아해요. (여행에서도 숙소에 있는걸 좋아합니다.)',
      ],
      en: [
        'Likes to take time on things when it comes to travel.',
        'Sleeps a lot, therefore likes to have a flexible travel schedule.',
        "Has very strong food preferences, so often has a hard time finding the ‘right food'.",
        'Also afraid of talking to strangers.',
        'In fact, not a big fan of travel at all.',
      ],
    },
  },
  munboo: {
    summary: {
      ko: '효율적인 여행을 위해 계획을 세우는 먼부',
      en: 'Munboo',
    },
    descriptions: {
      ko: [
        '먼부의 여행 이유는 친구들과 즐거운 대화를 함에 있어요.',
        '그러기에 이동을 할 때도, 여행 중간에도 쉴 새 없이 듣고 말하는 걸 좋아한답니다.',
        '계획적이고 효율적인 여행을 좋아하기에 동선을 미리 정하고 여행지에 도착해서는 지도 앱부터 열어 보죠.',
        '여행 중 시간에 맞춰서 매번 끼니를 먹는 건 중요하지만 어떤 걸 먹어야 할지는 크게 중요하지 않아요.',
        '그래서 먹어보고 싶은 게 있다면 취향에 상관없이 호기심을 보이며 먹는답니다.',
      ],
      en: [
        'Is all about friends. The whole point of travel is to talk, have fun, and share quality time with them.',
        'Likes to plan for all routes and always check Google Maps after arriving at new places.',
        'Thinks it is important to eat on time, but not really a gourmet type. Hence, this creature is trying new food all the time.',
      ],
    },
  },
  kobi: {
    summary: {
      ko: '자연에서 휴식하기를 좋아하는 코비',
      en: 'Kobi',
    },
    descriptions: {
      ko: [
        '코비는 배가 고파지면 여행에 집중할 수 없고 잠이 많아지기 때문에  어딜 가서든 식도락 여행을 즐겨요.',
        '세계 어딜 가서도 강한 향신료, 바다 해산물 등 못 먹는 음식이 없답니다.',
        '그러기에 휴식 시간에도 군것질을 할 때가 많아요.',
        '자연에 관심이 많은 코비는 도시보단 자연에서 휴식하는 걸 더 좋아해요.',
      ],
      en: [
        'Values quality food over anything else. For this pal, the point of travel is to eat.',
        "Can consume any kind of food - doesn't matter if it has a foul smell or has weird texture.",
        'Never stops eating, even between meals.',
        'Strongly prefer nature over the city.',
      ],
    },
  },
  hief: {
    summary: {
      ko: '셀카가 마음에 들지 않아 혼자 사진 찍는 걸 싫어하는 히프',
      en: 'Hief',
    },
    descriptions: {
      ko: [
        '히프는 혼자 하는 여행보단 친구들을 따라가는 여행길을 좋아해요.',
        '어디로 가는지보다 함께하는 여행을 좋아해요.',
        '준비물 잘 준비하지 못하여 어떤 걸 준비할지 친구들한테 물어볼 때가 많아요.',
        '여행을 갈 때 창밖에 풍경들을 많이 신경 써요.',
        '요리사이기 때문에 로컬푸드에 관심이 많답니다.',
      ],
      en: [
        "Doesn't mind where to go as long as with a group of friends.",
        "Isn't really good at packing up stuff, so asking for help for most of the time.",
        'Likes to stare outside the window when going from one place to another.',
        'Is a chef, so has a great interest in local food.',
      ],
    },
  },
  totti: {
    summary: {
      ko: '식도락 여행을 좋아하는 또띠',
      en: 'Totti',
    },
    descriptions: {
      ko: [
        '또띠는 아시아 무술을 좋아해요. 그래서 태국의 무에타이, 몽골씨름인 부흐를 직접 가서 배워보고 싶어 한답니다.',
        '힘이 넘치는 또띠는 여행에 모든 시간을 대화하고 놀고 운동하고 한시도 가만있지 못하는 시끌시끌한 여행을 좋아해요',
        '만약 여행 중에 마음에 드는 사람이 있다면 당당하게 다가가 말을 걸고 함께 친구가 되길 바라요',
        '여행이 끝난 뒤 모든 걸 불태운 또띠는 깊게 잠을 잔답니다.',
      ],
      en: [
        'Is a great fan of famous martial arts, like Muay Thai.',
        'Is full of life, therefore seeking for places to unleash his energy.',
        'Is not afraid of approaching strangers and having a good time together.',
        'Drops into bed after coming back from the travel.',
      ],
    },
  },
  cinnamong: {
    summary: {
      ko: '호캉스나 집으로 초대하기를 좋아하는 시나몽',
      en: 'Cinnamong',
    },
    descriptions: {
      ko: [
        '여행이란 편하게 쉬러 가야 된다는 생각을 하는 시나몽이에요.',
        '꼭 무언가 보고 먹는 여행을 해야 하는 것이 아니기 때문에 편하게 산책하고 여유 있는 여행할 수 있다면 어디를 가는 건 중요하지 않아요.',
        '편한 여행을 위해서라면 돈을 아끼는 편은 아니에요. 여행이 끝나고 나선 친구들을 위해서 기념품 사는 걸 좋아한답니다.',
        '여행을 갔을 때 미리 시간에 맞춰 동선을 짜 놓는 것을 좋아해요.',
      ],
      en: [
        'Considers that a good trip is essentially about having a good rest.',
        'Cares little about everything else, as long as the travel is relaxing.',
        'Prefers to have routes planned when traveling.',
        'Is willing to open his wallet for comfort, and the souvenirs for friends.',
      ],
    },
  },
  somsom: {
    summary: {
      ko: '힐링 여행을 좋아하는 솜솜이',
      en: 'Somsom',
    },
    descriptions: {
      ko: [
        '지친 일상을 여행으로 풀고 싶어 여행을 떠나는 솜솜이에요',
        '그렇기에 혼자 가는 솔로 여행도 심심치 않게 떠나기도 해요.',
        '꼭 누군가와 함께 떠나야 한다고 생각하지 않기 때문에 혼자서 주도적인 여행을 해요.',
        '힐링 여행을 좋아하기에 어딜 가든 잘 먹고, 잠도 자고 잘 놀 수 있어요.',
      ],
      en: [
        'Travels to stay away from normal, tedious life.',
        "Doesn't mind going alone. It is about going to new places and trying new things.",
        'So whom to come with, or where to go are all secondary. This one can have fun anywhere in the world.',
      ],
    },
  },
};

export default results;
