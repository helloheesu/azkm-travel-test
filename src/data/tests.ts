import { ScoreMap } from 'components/ScoreMapContext';
import { i18nText } from './languages';

export interface TestData {
  title: i18nText;
  mainImgDescription?: string;
  options: {
    text: i18nText;
    scores: ScoreMap;
  }[];
}

const tests: TestData[] = [
  {
    title: {
      ko: '코로나가 드디어 끝이 나고 해외여행을 가려고 한다!',
      en: 'There is no COVID travel regulation anymore. You are preparing to travel to…',
    },
    options: [
      {
        text: {
          ko: '오랜만의 해외여행이니까 가까운 아시아로',
          en: 'Nearby places/nations that you are well aware of',
        },
        scores: {
          totti: 2,
          munboo: 0,
          vanilla: 0,
          cinnamong: 0,
          kobi: 0,
          hief: 0,
          somsom: 1,
        },
      },
      {
        text: {
          ko: '에메랄드빛 바다 남태평양 환상의 휴양지',
          en: 'A beautiful vacation spot with picturesque nature',
        },
        scores: {
          totti: 0,
          munboo: 0,
          vanilla: 2,
          cinnamong: 0,
          kobi: 0,
          hief: 1,
          somsom: 0,
        },
      },
      {
        text: {
          ko: '아주 멀리 가보는 건 어때? 유럽이나 미국으로',
          en: 'Countries that you never went before',
        },
        scores: {
          totti: 0,
          munboo: 2,
          vanilla: 0,
          cinnamong: 2,
          kobi: 1,
          hief: 0,
          somsom: 0,
        },
      },
    ],
  },
  {
    title: {
      ko: '여행 출발 당일 친구가 늦는다. 어떻게 할까?',
      en: "One of your friends who goes travel with you doesn't show up on time. What do you want to do?",
    },
    options: [
      {
        text: {
          ko: '예상했다! 전화해서 안 받으면 버리고 가버린다~',
          en: 'Why am I not surprised at all? Ditch the guy if necessary.',
        },
        scores: {
          totti: 0,
          munboo: 0,
          vanilla: 0,
          cinnamong: 2,
          kobi: 1,
          hief: 0,
          somsom: 1,
        },
      },
      {
        text: {
          ko: '여행 계획이 틀어지더라도 모두 기다렸다가 같이 간다.',
          en: 'What are friends for? We wait until he comes.',
        },
        scores: {
          totti: 2,
          munboo: 0,
          vanilla: 0,
          cinnamong: 0,
          kobi: 0,
          hief: 1,
          somsom: 0,
        },
      },
      {
        text: {
          ko: '이런 결정은 대세에 따라야지~ 잠자코 있는다.',
          en: "Let's see what others say, and follow the majority.",
        },
        scores: {
          totti: 0,
          munboo: 2,
          vanilla: 1,
          cinnamong: 0,
          kobi: 0,
          hief: 0,
          somsom: 0,
        },
      },
    ],
  },
  {
    title: {
      ko: '목적지로 가면서 나는 무엇을 하고 있을까?',
      en: 'On the way to our destination, what would you like to do?',
    },
    options: [
      {
        text: {
          ko: '호두과자, 음료수를 먹으면서 시끌벅적하게 가고 싶어!',
          en: 'Some snack talk with my lovely friends, of course.',
        },
        scores: {
          totti: 2,
          munboo: 1,
          vanilla: 0,
          cinnamong: 1,
          kobi: 0,
          hief: 0,
          somsom: 0,
        },
      },
      {
        text: {
          ko: '여행지에서 놀아야 하니까 지금은 잠깐 자두겠어..',
          en: 'Taking a quick nap, saving the fun for later.',
        },
        scores: {
          totti: 0,
          munboo: 0,
          vanilla: 1,
          cinnamong: 0,
          kobi: 2,
          hief: 0,
          somsom: 0,
        },
      },
      {
        text: {
          ko: '여행의 시작은 이동할 때부터지! 창밖을 구경한다.',
          en: 'Looking outside and enjoy the scene. The travel has already begun.',
        },
        scores: {
          totti: 0,
          munboo: 0,
          vanilla: 0,
          cinnamong: 0,
          kobi: 0,
          hief: 1,
          somsom: 2,
        },
      },
    ],
  },
  {
    title: {
      ko: '드디어 도착! 여행지에서 가장 먼저 눈에 들어온 것은?',
      en: 'We have finally arrived! What is the very first thing that comes into your mind?',
    },
    options: [
      {
        text: {
          ko: '처음 보는 새로운 사람들... 건물들...',
          en: 'New people, new buildings, new everything.',
        },
        scores: {
          totti: 0,
          munboo: 0,
          vanilla: 2,
          cinnamong: 1,
          kobi: 0,
          hief: 2,
          somsom: 0,
        },
      },
      {
        text: {
          ko: '우선, 지도 앱부터 켜서 숙소에 짐을 가져다 놔야지!',
          en: 'Now that we have arrived, find the places to stay first.',
        },
        scores: {
          totti: 0,
          munboo: 2,
          vanilla: 0,
          cinnamong: 0,
          kobi: 0,
          hief: 0,
          somsom: 1,
        },
      },
      {
        text: {
          ko: '아.. 배고파 당 떨어..진다.. 식당부터 찾는다...',
          en: 'I am starving. Can we go eat first?',
        },
        scores: {
          totti: 1,
          munboo: 0,
          vanilla: 0,
          cinnamong: 0,
          kobi: 2,
          hief: 0,
          somsom: 0,
        },
      },
    ],
  },
  {
    title: {
      ko: '식당에서 아주 비싼 메뉴를 시켰는데.. 이건 우욱 먹을 수가 없다.',
      en: 'Just ordered a very expensive food, but not my taste. What would you do?',
    },
    options: [
      {
        text: {
          ko: '비싸지만 다른 걸 또 하나 주문하겠어~',
          en: "It's going to hurt my budget, but I am going to order another food anyway.",
        },
        scores: {
          totti: 2,
          munboo: 0,
          vanilla: 0,
          cinnamong: 2,
          kobi: 0,
          hief: 0,
          somsom: 1,
        },
      },
      {
        text: {
          ko: '한 입 먹어봤지만.. 난 도저히 안 되겠어..  굶는 게 나아..',
          en: "No. I just took the bite, and I can't take it anymore. I would rather starve to death.",
        },
        scores: {
          totti: 0,
          munboo: 2,
          vanilla: 1,
          cinnamong: 0,
          kobi: 0,
          hief: 0,
          somsom: 0,
        },
      },
      {
        text: {
          ko: '난 그럴 일이 없어~ 냠냠 쩝쩝 이미 먹고 있는 나!',
          en: "I was never a gourmet, so the taste doesn't bother me at all.",
        },
        scores: {
          totti: 0,
          munboo: 0,
          vanilla: 0,
          cinnamong: 0,
          kobi: 2,
          hief: 2,
          somsom: 0,
        },
      },
    ],
  },
  {
    title: {
      ko: '여행지에서 호감 가는 이성에게 말을 걸었는데, 알 수 없는 언어다!',
      en: "Just found my type in this new exotic place, but can't understand the language.	",
    },
    options: [
      {
        text: {
          ko: '몸짓 발짓~ 보디랭귀지로 대화를 이어 나가본다.',
          en: 'Use body language to communicate anyway.',
        },
        scores: {
          totti: 0,
          munboo: 2,
          vanilla: 0,
          cinnamong: 2,
          kobi: 0,
          hief: 1,
          somsom: 1,
        },
      },
      {
        text: {
          ko: '후다닥~ 도망가 버린다. 언어 울렁증~',
          en: 'Well, this is awkward. Maybe next time…',
        },
        scores: {
          totti: 0,
          munboo: 0,
          vanilla: 2,
          cinnamong: 0,
          kobi: 1,
          hief: 0,
          somsom: 0,
        },
      },
      {
        text: {
          ko: '둠칫둠칫! 그대 앞에서 열정적으로 춤을 춘다.',
          en: "Don't need a word. My dance will speak to you.",
        },
        scores: {
          totti: 2,
          munboo: 0,
          vanilla: 0,
          cinnamong: 0,
          kobi: 0,
          hief: 0,
          somsom: 0,
        },
      },
    ],
  },
  {
    title: {
      ko: '여행 이동 중에 화장실이 급하다! 어떻게 하지..?',
      en: 'While moving around during the travel, you suddenly get the emergency call from the nature.',
    },
    options: [
      {
        text: {
          ko: '끝까지 참는다.. 어?.. 왜 하늘이 노란색이지?',
          en: 'I have no idea where we are. So I will try to hold it as much as I can, until we arrive to where we planned.',
        },
        scores: {
          totti: 1,
          munboo: 0,
          vanilla: 2,
          cinnamong: 0,
          kobi: 0,
          hief: 2,
          somsom: 0,
        },
      },
      {
        text: {
          ko: '내 몸에는 화장실 레이더가 있지! 바로 찾아간다.',
          en: "Don't worry, I never miss the restroom around me. Just give me a minute to scan…",
        },
        scores: {
          totti: 0,
          munboo: 2,
          vanilla: 0,
          cinnamong: 2,
          kobi: 2,
          hief: 0,
          somsom: 1,
        },
      },
    ],
  },
  {
    title: {
      ko: '여행지에서의 개인 자유시간! 무엇을 할까?',
      en: 'Your travel schedule for today is over and you have some free time. What do you want to do?',
    },
    options: [
      {
        text: {
          ko: '난 쉬러 왔어. 숙소에 누워서 핸드폰이나 해야지',
          en: 'I came here to rest. Chill in my room.',
        },
        scores: {
          totti: 0,
          munboo: 0,
          vanilla: 2,
          cinnamong: 0,
          kobi: 0,
          hief: 0,
          somsom: 2,
        },
      },
      {
        text: {
          ko: '난 먹으러 왔어. 편의점으로 가서 간식을 잔뜩 산다.',
          en: 'I came here to eat. Go to nearby stores and grab as many snacks as I can get.',
        },
        scores: {
          totti: 2,
          munboo: 0,
          vanilla: 0,
          cinnamong: 0,
          kobi: 1,
          hief: 0,
          somsom: 0,
        },
      },
      {
        text: {
          ko: '난 보러 왔어. 주변에 볼거리를 앱으로 찾는다.',
          en: 'I came to see things. Find the nearby attractions.',
        },
        scores: {
          totti: 0,
          munboo: 2,
          vanilla: 0,
          cinnamong: 2,
          kobi: 0,
          hief: 1,
          somsom: 0,
        },
      },
    ],
  },
  {
    title: {
      ko: '여행이 이제 끝났다. 마지막으로 하고 싶은 것은?',
      en: 'The travel is now over. What is the very last thing that you want to do?',
    },
    options: [
      {
        text: {
          ko: '여행의 마지막은 기념품이지!! 기념품점으로 간다.',
          en: 'Gift shop! I want to buy something.',
        },
        scores: {
          totti: 0,
          munboo: 0,
          vanilla: 2,
          cinnamong: 1,
          kobi: 0,
          hief: 0,
          somsom: 0,
        },
      },
      {
        text: {
          ko: '피곤해.. 아무런 생각이 들지 않아!',
          en: "Nothing. I am exhausted, can't wait to go back.",
        },
        scores: {
          totti: 2,
          munboo: 0,
          vanilla: 0,
          cinnamong: 0,
          kobi: 0,
          hief: 0,
          somsom: 1,
        },
      },
      {
        text: {
          ko: '아쉬워서 다음 여행은 언제 어디로 갈지 이야기한다.',
          en: 'I miss here already. Can we set up another travel schedule?',
        },
        scores: {
          totti: 0,
          munboo: 2,
          vanilla: 0,
          cinnamong: 0,
          kobi: 1,
          hief: 1,
          somsom: 0,
        },
      },
    ],
  },
];

export default tests;
