type Option = {
  text: string;
  characters: Character[];
};
export interface Question {
  title: string;
  mainImgDescription?: string;
  options: Option[];
}

export enum Character {
  Totti = '또띠',
  Munboo = '먼부',
  Vanilla = '바닐라',
  Cinamon = '시나몽',
  Coby = '코비',
  Hiff = '히프',
  Somsom = '솜솜',
}

const data: Question[] = [
  {
    title: '코로나가 드디어 끝이나고 해외여행을 가려고한다!',
    options: [
      {
        text: '이웃나라~ 아시아로 간다.(일본,대만,싱가폴)',
        characters: [Character.Totti, Character.Cinamon, Character.Coby],
      },
      {
        text: '에메랄드빛 바다에 풍덩~남태평양 휴양지로 떠난다. (피지,발리,사모아)',
        characters: [
          Character.Munboo,
          Character.Vanilla,
          Character.Hiff,
          Character.Somsom,
        ],
      },
      {
        text: '낭만과 열정이 있는 그 곳 남미로 간다!(브라질, 아르헨티나)',
        characters: [],
      },
    ],
  },
  {
    title: '여행 출발 당일 친구가 늦습니다. 어떻게 하고 싶나요?',
    options: [
      {
        text: '예상했다! 전화를 해서 안 받으면 버리고 가버린다~',
        characters: [Character.Cinamon, Character.Coby, Character.Somsom],
      },
      {
        text: '여행계획이 틀어지더라도 모두 기다렸다가 같이 간다.',
        characters: [Character.Totti, Character.Hiff],
      },
      {
        text: '이런 결정은 대세에 따라야지~ 잠잠코 있는다.',
        characters: [Character.Munboo, Character.Vanilla],
      },
    ],
  },
  {
    title: '목적지로 가면서 나는 무엇을 하고 있을까요?',
    options: [
      {
        text: '호두과자, 음료수를 먹으면서 시끌벅적하게 가고 싶어!',
        characters: [Character.Totti, Character.Munboo, Character.Hiff],
      },
      {
        text: '여행지에서 놀아야 하니까 지금은 잠깐 자두겠어..',
        characters: [Character.Cinamon, Character.Coby],
      },
      {
        text: '여행의 시작은 이동할 때 부터지! 창 밖을 구경한다.',
        characters: [Character.Vanilla, Character.Somsom],
      },
    ],
  },
  {
    title: '드디어 도착! 여행지에서 가장 먼저 눈에 들어 온 것은 무엇인가요?',
    options: [
      {
        text: '처음 보는 새로운 사람들...건물들...',
        characters: [Character.Vanilla, Character.Somsom, Character.Hiff],
      },
      {
        text: '우선, 지도 앱부터 켜서 숙소에 짐을 가져다 놔야지!',
        characters: [Character.Munboo, Character.Cinamon],
      },
      {
        text: '아.. 배고파 당 떨어..진다.. 식당부터 찾는다...',
        characters: [Character.Totti, Character.Coby],
      },
    ],
  },
  {
    title:
      '식당에서 아주 비싼 메뉴를 시켰는데.. 이건 우욱 먹을 수가 없다. 넌 도전할래?',
    options: [
      {
        text: '비싸지만 다른 걸 또 하나 주문하겠어~',
        characters: [Character.Totti, Character.Cinamon, Character.Somsom],
      },
      {
        text: '한 입 먹어봤지만.. 난 도저히 안되겠어..  굶는게 나아..',
        characters: [Character.Munboo, Character.Vanilla],
      },
      {
        text: '난 그럴 일이 없어~ 냠냠 쩝쩝 이미 먹고 있는 나!',
        characters: [Character.Coby, Character.Hiff],
      },
    ],
  },
  {
    title: '여행지에서 호감 가는 이성에게 말을 걸었는데, 알 수 없는 언어다!',
    options: [
      {
        text: '몸짓 발짓~ 보디랭귀지로 대화를 이어 나가본다.',
        characters: [
          Character.Munboo,
          Character.Cinamon,
          Character.Hiff,
          Character.Somsom,
        ],
      },
      {
        text: '후다닥~ 도망가 버린다. 언어 울렁증~',
        characters: [Character.Vanilla, Character.Coby],
      },
      {
        text: '둠칫둠칫! 그대 앞에서 열정적으로 춤을 춘다.',
        characters: [Character.Totti],
      },
    ],
  },
  {
    title: '여행 이동중에 화장실이 급하다! 어떻게하지..?',
    options: [
      {
        text: '끝까지 참는다.. 어?..왜 하늘이 노란색이지?',
        characters: [Character.Totti, Character.Vanilla, Character.Hiff],
      },
      {
        text: '내 몸에는 화장실 레이더가 있지! 바로 찾아간다.',
        characters: [
          Character.Munboo,
          Character.Cinamon,
          Character.Coby,
          Character.Somsom,
        ],
      },
    ],
  },
  {
    title: '여행지에서의 개인 자유시간! 무엇을 하고 싶나요?',
    options: [
      {
        text: '난 쉬러왔어. 숙소에 누워서 핸드폰이나 해야지',
        characters: [Character.Vanilla, Character.Somsom],
      },
      {
        text: '난 먹으러왔어. 편의점으로가서 간식을 잔뜩산다.',
        characters: [Character.Totti, Character.Coby],
      },
      {
        text: '난 보러왔어. 주변에 볼거리를 앱으로 찾는다.',
        characters: [Character.Munboo, Character.Cinamon, Character.Hiff],
      },
    ],
  },
  {
    title:
      '여행이 이제 끝났다. 마지막으로 하고싶은것은? (이제 여행을 마치고 돌아가는 길인데 약간 시간이 촉박하다. )',
    options: [
      {
        text: '여행에 마지막은 기념품이지!! 기념품점으로 간다.',
        characters: [Character.Vanilla],
      },
      {
        text: '피곤해.. 아무런 생각이 들지않아!',
        characters: [Character.Totti, Character.Cinamon, Character.Somsom],
      },
      {
        text: '아쉬워서 다음여행은 언제 어디로갈지 이야기한다.',
        characters: [Character.Munboo, Character.Coby, Character.Hiff],
      },
    ],
  },
];

export default data;
