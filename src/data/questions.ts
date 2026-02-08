export interface Choice {
  text: string;
  scores: Record<string, number>;
}

export interface Question {
  id: number;
  text: string;
  subtitle: string;
  choices: Choice[];
}

export const questions: Question[] = [
  // === E/I 차원 (에너지 방향) ===
  {
    id: 1,
    text: "전생에서 당신은 어떤 공간에서 가장 편안했을까?",
    subtitle: "눈을 감고 느껴보세요",
    choices: [
      { text: "수백 명이 모인 왕궁의 대연회장", scores: { E: 3 } },
      { text: "활기찬 시장 골목의 한가운데", scores: { E: 2, S: 1 } },
      { text: "호수가 보이는 외딴 오두막", scores: { I: 2, N: 1 } },
      { text: "깊은 지하의 비밀 서재", scores: { I: 3 } },
    ],
  },
  {
    id: 2,
    text: "전생의 동료들이 당신을 부를 때 뭐라 했을까?",
    subtitle: "어떤 말이 가슴에 와닿나요?",
    choices: [
      { text: "\"자, 우리의 주인공이 왔다!\"", scores: { E: 3 } },
      { text: "\"저 사람? 웃으면 주변이 다 밝아져\"", scores: { E: 2, F: 1 } },
      { text: "\"조용하지만 한마디가 묵직한 사람\"", scores: { I: 2, T: 1 } },
      { text: "\"아무도 속을 모르는 수수께끼 같은 존재\"", scores: { I: 3 } },
    ],
  },
  {
    id: 3,
    text: "전생에서 큰 전투를 앞둔 전날 밤, 당신은?",
    subtitle: "직감으로 고르세요",
    choices: [
      { text: "동료들과 모닥불 앞에서 이야기를 나눈다", scores: { E: 2, F: 1 } },
      { text: "병사들을 독려하며 진영을 순찰한다", scores: { E: 2, J: 1 } },
      { text: "혼자 달빛 아래 내일의 전략을 곱씹는다", scores: { I: 2, T: 1 } },
      { text: "어딘가 조용한 곳에서 명상에 잠긴다", scores: { I: 2, N: 1 } },
    ],
  },

  // === S/N 차원 (인식 방식) ===
  {
    id: 4,
    text: "고대 유적에서 수상한 문을 발견했다. 당신의 반응은?",
    subtitle: "첫 번째 충동을 따르세요",
    choices: [
      { text: "문의 재질과 장치 구조를 꼼꼼히 살핀다", scores: { S: 3 } },
      { text: "주변 흔적과 발자국을 분석한다", scores: { S: 2, T: 1 } },
      { text: "문 너머 무엇이 있을지 직감으로 느낀다", scores: { N: 2, F: 1 } },
      { text: "이 문이 존재하는 이유와 숨겨진 의미를 떠올린다", scores: { N: 3 } },
    ],
  },
  {
    id: 5,
    text: "전생에서 당신이 가장 잘했던 일은?",
    subtitle: "하나만 고르세요",
    choices: [
      { text: "손에 잡히는 재료로 직접 무언가를 만드는 것", scores: { S: 3 } },
      { text: "눈앞에 보이는 문제를 하나하나 해결하는 것", scores: { S: 2, T: 1 } },
      { text: "아무도 상상하지 못한 예언과 비전을 제시하는 것", scores: { N: 3 } },
      { text: "보이지 않는 것들의 연결고리를 발견하는 것", scores: { N: 2, T: 1 } },
    ],
  },
  {
    id: 6,
    text: "전생의 꿈에서 반복적으로 보이는 장면은?",
    subtitle: "가장 선명한 것을 고르세요",
    choices: [
      { text: "손에 잡히는 금화와 보석의 무게", scores: { S: 3 } },
      { text: "익숙한 길과 매일 지나던 풍경", scores: { S: 2, J: 1 } },
      { text: "끝이 보이지 않는 미지의 대륙", scores: { N: 2, P: 1 } },
      { text: "현실에 없는 색과 형태의 환상", scores: { N: 3 } },
    ],
  },

  // === T/F 차원 (판단 방식) ===
  {
    id: 7,
    text: "전생에서 왕국이 위기에 처했다. 당신의 결정은?",
    subtitle: "무엇이 가장 중요한가?",
    choices: [
      { text: "감정을 배제하고 가장 효율적인 전략을 세운다", scores: { T: 3 } },
      { text: "냉정하게 희생을 계산하고 최소 피해를 택한다", scores: { T: 2, J: 1 } },
      { text: "모든 사람을 살릴 방법을 끝까지 찾는다", scores: { F: 3 } },
      { text: "사람들의 두려움을 먼저 달래고 마음을 모은다", scores: { F: 2, E: 1 } },
    ],
  },
  {
    id: 8,
    text: "전생의 제자가 잘못을 저질렀다. 당신은?",
    subtitle: "스승으로서 어떻게 하겠는가?",
    choices: [
      { text: "원칙대로 벌을 내린다. 예외는 없다", scores: { T: 2, J: 1 } },
      { text: "왜 잘못되었는지 논리적으로 설명한다", scores: { T: 2, I: 1 } },
      { text: "제자의 사정을 먼저 들어본다", scores: { F: 2, I: 1 } },
      { text: "따뜻하게 안아주고 다시 시작하자고 한다", scores: { F: 3 } },
    ],
  },
  {
    id: 9,
    text: "전생에서 가장 자랑스러웠던 순간은?",
    subtitle: "가슴이 뛰는 기억을 고르세요",
    choices: [
      { text: "불가능한 문제를 논리로 풀어냈을 때", scores: { T: 3 } },
      { text: "남들이 못 본 진실을 증명했을 때", scores: { T: 2, N: 1 } },
      { text: "상처받은 누군가를 치유했을 때", scores: { F: 2, S: 1 } },
      { text: "모두가 하나 되어 함께 웃었을 때", scores: { F: 2, E: 1 } },
    ],
  },

  // === J/P 차원 (생활 방식) ===
  {
    id: 10,
    text: "전생에서 긴 여행을 떠나게 되었다. 당신의 방식은?",
    subtitle: "당신다운 여행은?",
    choices: [
      { text: "며칠 전부터 경로와 일정을 완벽히 짠다", scores: { J: 3 } },
      { text: "필요한 물자와 장비를 빠짐없이 준비한다", scores: { J: 2, S: 1 } },
      { text: "대략적인 방향만 정하고 나머지는 그때그때", scores: { P: 2, N: 1 } },
      { text: "지도도 없이 발길이 닿는 대로 간다", scores: { P: 3 } },
    ],
  },
  {
    id: 11,
    text: "전생의 작업실은 어떤 모습이었을까?",
    subtitle: "상상해보세요",
    choices: [
      { text: "모든 도구가 제자리에 놓인 정돈된 공간", scores: { J: 3 } },
      { text: "라벨이 붙은 서랍과 체계적인 보관함", scores: { J: 2, T: 1 } },
      { text: "본인만 이해하는 혼돈 속의 질서", scores: { P: 2, I: 1 } },
      { text: "어제와 오늘이 다른, 살아 움직이는 공간", scores: { P: 3 } },
    ],
  },
  {
    id: 12,
    text: "만약 전생으로 돌아갈 수 있다면?",
    subtitle: "마지막 질문입니다",
    choices: [
      { text: "같은 선택을 한다. 내 길에 후회는 없다", scores: { J: 2, T: 1 } },
      { text: "더 치밀한 계획을 세워 완벽하게 살고 싶다", scores: { J: 2, S: 1 } },
      { text: "더 많은 가능성을 탐험하며 살고 싶다", scores: { P: 2, N: 1 } },
      { text: "정해진 운명 따위 무시하고 완전히 다르게 산다", scores: { P: 3 } },
    ],
  },
];
