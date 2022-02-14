import { Character } from './character';

const results: {
  [key in Character]: string[];
} = {
  Vanilla: [
    '바닐라는 겁이 많아요.',
    '주목을 받고 싶어하지만, 동시에 부담감도 많이 느껴요.',
    '또띠의 힘세고 적극적인 성격을 부러워해요.',
    '잠이 많고 휴식을 좋아해요. 잠을 자지 않을 땐 명상을 즐겨요.',
    '블루베리를 좋아하며, 단맛을 좋아해 간식을 좋아해요.',
    '여행보단 집에서 쉬는걸 좋아해요. (여행에서도 숙소에 있는걸 좋아합니다.)',
    '익숙한 것, 자기 시간을 더 중요하게 생각합니다.',
    '애정결핍이 있습니다.',
  ],
  Munboo: [
    '친구들끼리 노는 것을 주도해요.',
    '책 읽기를 좋아해요.',
    '바둑, 체스 같은 게임하기를 좋아해요.',
    '대화를 하면서 산책하기를 좋아하지만 혼자서 음악을 들으며 산책하기도 좋아합니다.',
    '불면증 때문에 잠자는 시간은 정해져있지 않지만 규칙적인 식사는 꼭 하는 편입니다.',
  ],
  Coby: [
    '자연에서 휴식하기를 좋아합니다.',
    '여행을 가면 도시보단 조용한 산림욕을 좋아합니다.',
    '유적지나 역사적 관람보단 식도락 여행을 좋아합니다.',
    '음악을 좋아하지 않습니다. 바람소리와 빗소리를 좋아합니다.',
    '동식물과 대화가 가능합니다.',
    '집에 사람초대하는걸 좋아하기에 되도록 집&주변 청소를 깔끔하게 합니다.',
  ],
  Hiff: [
    '요리를 하기는 좋아하지만 설거지나 뒷정리는 귀찮아 합니다.',
    '대화하기를 좋아하나, 식사할때는 조용합니다.',
    '무서운 놀이기구는 다칠것을 염려하여 타지않습니다.',
    '셀카가 마음에 들지않아 혼자 사진찍는것을 싫어합니다.',
    '운동하기를 싫어하는데 운동에 시간을 들이느니 한숨 자는게 낫다 생각합니다.',
  ],
  Totti: [
    '무거운 돌을 들지 못할 때 화를 냅니다.',
    '식사시간이 다가오면 흥분합니다.',
    '배고픈 시간이 길어지면 충동적으로 배달음식을 많이 주문합니다.',
    '게임을 할때 이기는거 보다 친구들과 싸우지않는 것이 더 중요합니다.',
  ],
  Cinamon: [
    '일관성있는 주장이 때때로 고집부리는 걸로 오해가 되기도 합니다.',
    '외출보단 집에서 쉬는걸 좋아하며 잠이 많은 편입니다.',
    '여행을 갔을때 미리 시간에 맞춰 동선을 짜놓는 것을 좋아합니다.',
    '타인이 사용하던 것을 쓰는걸 싫어해 중고 가전제품을 싫어합니다.',
    '향신료나 맛이 강한 음식은 싫어합니다.',
  ],
  Somsom: [
    '겁이 많지만, 할 말은 해야 되는 성격이에요.',
    '꼼꼼하게 챙기는 건데 친구들은 걱정이 많다고 오해를 받아요',
  ],
};

export default results;