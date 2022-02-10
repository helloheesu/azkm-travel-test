export interface Question {
  title: string;
  mainImgDescription?: string;
  options: string[];
}

const data: Question[] = [
  {
    title: '친구들과 함께 여행가기로 전날 밤이다. 당신이 자기전 하는일은?',
    mainImgDescription: '계획 이미지',
    options: [
      '여권, 필수품, 옷가지 등 꼼꼼하게 계속 체크해 본다.',
      '친구한테 전화 통화를 걸어 여행에 관한 대화를 나눈다.',
      '빨리자야지! 내일 아침에 제 시간에 일어나야 하니까',
    ],
  },
  {
    title: '여행 당일날 눈을 떴다! 당신이 가장먼저 하는 일은?',
    mainImgDescription: '계획 이미지',
    options: [
      '아..졸려 약속에 늦지않게 10분만 더 잔다.',
      '만나는 시간 전까지 인터넷 서핑을 한다.',
      '금강산도 식후경! 아침밥을 간단히 먹는다',
    ],
  },
  {
    title: '드디어 도착! 여행지에서 가장먼저 눈에들어 온것은 무엇인가?',
    mainImgDescription: '계획 이미지',
    options: [
      '눈에보이는건 걸어다니는 사람들 그리고 또 사람들...',
      '일단 지도앱부터 켜서 숙소에 짐을 가져다 놔야지!',
      '아~ 즐겁다 즐거워~ 이 순간을 그냥 즐겨~',
    ],
  },
  {
    title: '여행지에서 개인 자유시간! 당신은 무엇을 하고싶은가?',
    mainImgDescription: '계획 이미지',
    options: [
      '난 쉬러왔어. 숙소에 누워서 핸드폰이나 해야지',
      '여행은 체력이지! 운동을 빼먹을순없어',
      '주변 구경도 할겸 가벼운 산책을 하고싶어!',
    ],
  },
  {
    title: '여행이 이제 끝났다. 마지막으로 하고싶은것은?',
    mainImgDescription: '계획 이미지',
    options: [
      '여행에 마지막은 기념품이지!! 기념품점으로 간다.',
      '피곤해.. 아무런 생각이 들지않아!',
      '아쉬워서 다음여행은 언제 어디로갈지 이야기한다.',
    ],
  },
];

export default data;
