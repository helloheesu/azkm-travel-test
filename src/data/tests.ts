import { Scores } from 'components/ScoreMapContext';

type Option = {
  text: string;
  scores: Scores;
};
export interface TestData {
  title: string;
  mainImgDescription?: string;
  options: Option[];
}

const tests: TestData[] = [
  {
    title: '코로나가 드디어 끝이나고 해외여행을 가려고한다!',
    options: [
      {
        text: '오랜만의 해외여행이니까 가까운 아시아로',
        scores: {
          Totti: 2,
          Munboo: 0,
          Vanilla: 0,
          Cinamon: 0,
          Coby: 0,
          Hiff: 0,
          Somsom: 1,
        },
      },
      {
        text: '에메랄드빛 바다 남태평양 환상의 휴양지',
        scores: {
          Totti: 0,
          Munboo: 0,
          Vanilla: 2,
          Cinamon: 0,
          Coby: 0,
          Hiff: 1,
          Somsom: 0,
        },
      },
      {
        text: '아주 멀리 가보는건 어때? 유럽이나 미국으로',
        scores: {
          Totti: 0,
          Munboo: 2,
          Vanilla: 0,
          Cinamon: 2,
          Coby: 1,
          Hiff: 0,
          Somsom: 0,
        },
      },
    ],
  },
  {
    title: '여행 출발 당일 친구가 늦습니다. 어떻게 하고 싶나요?',
    options: [
      {
        text: '예상했다! 전화를 해서 안 받으면 버리고 가버린다~',
        scores: {
          Totti: 0,
          Munboo: 0,
          Vanilla: 0,
          Cinamon: 2,
          Coby: 1,
          Hiff: 0,
          Somsom: 1,
        },
      },
      {
        text: '여행계획이 틀어지더라도 모두 기다렸다가 같이 간다.',
        scores: {
          Totti: 2,
          Munboo: 0,
          Vanilla: 0,
          Cinamon: 0,
          Coby: 0,
          Hiff: 1,
          Somsom: 0,
        },
      },
      {
        text: '이런 결정은 대세에 따라야지~ 잠잠코 있는다.',
        scores: {
          Totti: 0,
          Munboo: 2,
          Vanilla: 1,
          Cinamon: 0,
          Coby: 0,
          Hiff: 0,
          Somsom: 0,
        },
      },
    ],
  },
  {
    title: '목적지로 가면서 나는 무엇을 하고 있을까요?',
    options: [
      {
        text: '호두과자, 음료수를 먹으면서 시끌벅적하게 가고 싶어!',
        scores: {
          Totti: 2,
          Munboo: 1,
          Vanilla: 0,
          Cinamon: 1,
          Coby: 0,
          Hiff: 0,
          Somsom: 0,
        },
      },
      {
        text: '여행지에서 놀아야 하니까 지금은 잠깐 자두겠어..',
        scores: {
          Totti: 0,
          Munboo: 0,
          Vanilla: 1,
          Cinamon: 0,
          Coby: 2,
          Hiff: 0,
          Somsom: 0,
        },
      },
      {
        text: '여행의 시작은 이동할 때 부터지! 창 밖을 구경한다.',
        scores: {
          Totti: 0,
          Munboo: 0,
          Vanilla: 0,
          Cinamon: 0,
          Coby: 0,
          Hiff: 1,
          Somsom: 2,
        },
      },
    ],
  },
  {
    title: '드디어 도착! 여행지에서 가장 먼저 눈에 들어 온 것은 무엇인가요?',
    options: [
      {
        text: '처음 보는 새로운 사람들...건물들...',
        scores: {
          Totti: 0,
          Munboo: 0,
          Vanilla: 2,
          Cinamon: 1,
          Coby: 0,
          Hiff: 2,
          Somsom: 0,
        },
      },
      {
        text: '우선, 지도 앱부터 켜서 숙소에 짐을 가져다 놔야지!',
        scores: {
          Totti: 0,
          Munboo: 2,
          Vanilla: 0,
          Cinamon: 0,
          Coby: 0,
          Hiff: 0,
          Somsom: 1,
        },
      },
      {
        text: '아.. 배고파 당 떨어..진다.. 식당부터 찾는다...',
        scores: {
          Totti: 1,
          Munboo: 0,
          Vanilla: 0,
          Cinamon: 0,
          Coby: 2,
          Hiff: 0,
          Somsom: 0,
        },
      },
    ],
  },
  {
    title:
      '식당에서 아주 비싼 메뉴를 시켰는데.. 이건 우욱 먹을 수가 없다. 넌 도전할래?',
    options: [
      {
        text: '비싸지만 다른 걸 또 하나 주문하겠어~',
        scores: {
          Totti: 2,
          Munboo: 0,
          Vanilla: 0,
          Cinamon: 2,
          Coby: 0,
          Hiff: 0,
          Somsom: 1,
        },
      },
      {
        text: '한 입 먹어봤지만.. 난 도저히 안되겠어..  굶는게 나아..',
        scores: {
          Totti: 0,
          Munboo: 2,
          Vanilla: 1,
          Cinamon: 0,
          Coby: 0,
          Hiff: 0,
          Somsom: 0,
        },
      },
      {
        text: '난 그럴 일이 없어~ 냠냠 쩝쩝 이미 먹고 있는 나!',
        scores: {
          Totti: 0,
          Munboo: 0,
          Vanilla: 0,
          Cinamon: 0,
          Coby: 2,
          Hiff: 2,
          Somsom: 0,
        },
      },
    ],
  },
  {
    title: '여행지에서 호감 가는 이성에게 말을 걸었는데, 알 수 없는 언어다!',
    options: [
      {
        text: '몸짓 발짓~ 보디랭귀지로 대화를 이어 나가본다.',
        scores: {
          Totti: 0,
          Munboo: 2,
          Vanilla: 0,
          Cinamon: 2,
          Coby: 0,
          Hiff: 1,
          Somsom: 1,
        },
      },
      {
        text: '후다닥~ 도망가 버린다. 언어 울렁증~',
        scores: {
          Totti: 0,
          Munboo: 0,
          Vanilla: 2,
          Cinamon: 0,
          Coby: 1,
          Hiff: 0,
          Somsom: 0,
        },
      },
      {
        text: '둠칫둠칫! 그대 앞에서 열정적으로 춤을 춘다.',
        scores: {
          Totti: 2,
          Munboo: 0,
          Vanilla: 0,
          Cinamon: 0,
          Coby: 0,
          Hiff: 0,
          Somsom: 0,
        },
      },
    ],
  },
  {
    title: '여행 이동중에 화장실이 급하다! 어떻게하지..?',
    options: [
      {
        text: '끝까지 참는다.. 어?..왜 하늘이 노란색이지?',
        scores: {
          Totti: 1,
          Munboo: 0,
          Vanilla: 2,
          Cinamon: 0,
          Coby: 0,
          Hiff: 2,
          Somsom: 0,
        },
      },
      {
        text: '내 몸에는 화장실 레이더가 있지! 바로 찾아간다.',
        scores: {
          Totti: 0,
          Munboo: 2,
          Vanilla: 0,
          Cinamon: 2,
          Coby: 2,
          Hiff: 0,
          Somsom: 1,
        },
      },
    ],
  },
  {
    title: '여행지에서의 개인 자유시간! 무엇을 하고 싶나요?',
    options: [
      {
        text: '난 쉬러왔어. 숙소에 누워서 핸드폰이나 해야지',
        scores: {
          Totti: 0,
          Munboo: 0,
          Vanilla: 2,
          Cinamon: 0,
          Coby: 0,
          Hiff: 0,
          Somsom: 2,
        },
      },
      {
        text: '난 먹으러왔어. 편의점으로가서 간식을 잔뜩 산다.',
        scores: {
          Totti: 2,
          Munboo: 0,
          Vanilla: 0,
          Cinamon: 0,
          Coby: 1,
          Hiff: 0,
          Somsom: 0,
        },
      },
      {
        text: '난 보러왔어. 주변에 볼거리를 앱으로 찾는다.',
        scores: {
          Totti: 0,
          Munboo: 2,
          Vanilla: 0,
          Cinamon: 2,
          Coby: 0,
          Hiff: 1,
          Somsom: 0,
        },
      },
    ],
  },
  {
    title:
      '여행이 이제 끝났다. 마지막으로 하고싶은것은? (이제 여행을 마치고 돌아가는 길인데 약간 시간이 촉박하다. )',
    options: [
      {
        text: '여행의 마지막은 기념품이지!! 기념품점으로 간다.',
        scores: {
          Totti: 0,
          Munboo: 0,
          Vanilla: 2,
          Cinamon: 1,
          Coby: 0,
          Hiff: 0,
          Somsom: 0,
        },
      },
      {
        text: '피곤해.. 아무런 생각이 들지않아!',
        scores: {
          Totti: 2,
          Munboo: 0,
          Vanilla: 0,
          Cinamon: 0,
          Coby: 0,
          Hiff: 0,
          Somsom: 1,
        },
      },
      {
        text: '아쉬워서 다음여행은 언제 어디로갈지 이야기한다.',
        scores: {
          Totti: 0,
          Munboo: 2,
          Vanilla: 0,
          Cinamon: 0,
          Coby: 1,
          Hiff: 1,
          Somsom: 0,
        },
      },
    ],
  },
];

export default tests;
