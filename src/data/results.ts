export interface PastLifeType {
  id: string;
  mbti: string;
  name: string;
  emoji: string;
  title: string;
  color: string;
  bgGradient: string;
  rarity: number;
  description: string;
  traits: string[];
  quote: string;
  compatibility: string;
  incompatibility: string;
}

export const pastLifeTypes: PastLifeType[] = [
  {
    id: "intj",
    mbti: "INTJ",
    name: "천상의 전략가",
    emoji: "🌌",
    title: "별의 궤도를 설계한 자",
    color: "#6366F1",
    bgGradient: "from-indigo-900/40 to-violet-900/20",
    rarity: 4,
    description:
      "당신의 전생은 별의 움직임으로 제국의 운명을 설계한 천상의 전략가였습니다. 왕조차 당신의 조언 없이는 전쟁을 시작하지 못했고, 당신이 그린 청사진은 백 년 뒤에야 그 가치가 증명되었죠. 수많은 사람들이 당신을 두려워했지만, 진정으로 이해하는 이는 없었습니다.",
    traits: ["천재적 직관", "냉철한 판단", "고독한 완벽주의", "미래를 읽는 눈"],
    quote: "\"별은 언제나 내가 설계한 궤도 위를 움직였다.\"",
    compatibility: "infp",
    incompatibility: "esfp",
  },
  {
    id: "intp",
    mbti: "INTP",
    name: "금서의 연금술사",
    emoji: "⚗️",
    title: "진리를 증류하는 은둔자",
    color: "#8B5CF6",
    bgGradient: "from-violet-900/40 to-purple-900/20",
    rarity: 5,
    description:
      "당신의 전생은 탑 꼭대기 서재에서 금서를 탐독하던 연금술사였습니다. 세상이 불가능하다 한 것들을 증명하는 데 평생을 바쳤고, 밤마다 실험실의 불빛은 마을 사람들에게 기이한 별처럼 보였습니다. 당신의 지식은 시대를 앞섰지만, 그래서 더 외로웠습니다.",
    traits: ["끝없는 호기심", "논리의 미궁", "세상과의 거리", "진리 추구자"],
    quote: "\"납을 금으로 바꾸는 것보다, 무지를 깨우는 것이 진짜 연금술이다.\"",
    compatibility: "entj",
    incompatibility: "esfj",
  },
  {
    id: "entj",
    mbti: "ENTJ",
    name: "대륙의 정복왕",
    emoji: "👑",
    title: "만국의 왕좌를 탐한 자",
    color: "#DC2626",
    bgGradient: "from-red-900/40 to-rose-900/20",
    rarity: 5,
    description:
      "당신의 전생은 대륙 전체를 호령한 정복왕이었습니다. 스무 살에 첫 왕국을 세웠고, 서른에 이미 다섯 나라를 합병했죠. 누구도 당신의 야망을 막을 수 없었고, 역사는 당신의 이름으로 새로운 시대를 열었습니다. 하지만 왕관이 무거울수록 잠은 줄었습니다.",
    traits: ["압도적 카리스마", "불굴의 의지", "제국의 비전", "타고난 지배자"],
    quote: "\"지도에 내 이름이 없는 땅은 아직 정복하지 않은 땅일 뿐이다.\"",
    compatibility: "intp",
    incompatibility: "isfp",
  },
  {
    id: "entp",
    mbti: "ENTP",
    name: "미친 발명가",
    emoji: "⚡",
    title: "번개를 병에 담은 이단자",
    color: "#F59E0B",
    bgGradient: "from-amber-900/40 to-yellow-900/20",
    rarity: 6,
    description:
      "당신의 전생은 도시 한복판에서 위험한 발명을 일삼던 천재 괴짜였습니다. 길드에서 세 번 추방당했고, 작업실은 다섯 번 폭발했지만, 그때마다 더 놀라운 것을 만들어냈죠. 사람들은 당신을 미쳤다 했지만, 당신의 발명품 없이는 살 수 없었습니다.",
    traits: ["끝없는 논쟁", "위험한 실험", "규칙 파괴자", "천재적 즉흥"],
    quote: "\"폭발은 실패가 아니다. 아직 완성되지 않은 성공일 뿐.\"",
    compatibility: "infj",
    incompatibility: "istj",
  },
  {
    id: "infj",
    mbti: "INFJ",
    name: "달의 예언자",
    emoji: "🌙",
    title: "비극을 미리 운 현자",
    color: "#7C3AED",
    bgGradient: "from-purple-900/40 to-indigo-900/20",
    rarity: 3,
    description:
      "당신의 전생은 달빛 아래서만 진실을 말하던 예언자였습니다. 왕궁에서부터 빈민가까지 모든 이가 당신을 찾았지만, 정작 당신의 고통을 아는 자는 없었죠. 미래를 보는 눈은 축복이 아니라 저주였습니다. 그럼에도 당신은 사람들을 구하기 위해 예언을 멈추지 않았습니다.",
    traits: ["영혼을 꿰뚫는 눈", "비밀스러운 사명감", "고뇌하는 이상주의", "깊은 공감"],
    quote: "\"내가 본 미래 때문에 오늘 밤도 잠들 수 없다.\"",
    compatibility: "entp",
    incompatibility: "estp",
  },
  {
    id: "infp",
    mbti: "INFP",
    name: "방랑하는 음유시인",
    emoji: "🪶",
    title: "바람에 실린 눈물의 노래",
    color: "#EC4899",
    bgGradient: "from-pink-900/40 to-rose-900/20",
    rarity: 6,
    description:
      "당신의 전생은 세상 끝까지 걸어 다니며 노래를 부르던 음유시인이었습니다. 전쟁터의 병사도, 감옥의 죄인도 당신의 노래에 눈물을 흘렸죠. 어디에도 속하지 않았지만, 어디서나 환영받았습니다. 당신이 남긴 시는 천 년이 지나도 사람들의 가슴을 울립니다.",
    traits: ["자유로운 영혼", "눈물의 서정시", "이상을 좇는 마음", "깊은 내면 세계"],
    quote: "\"세상 모든 슬픔을 노래로 바꿀 수 있다면, 기꺼이 영원히 울겠다.\"",
    compatibility: "intj",
    incompatibility: "estj",
  },
  {
    id: "enfj",
    mbti: "ENFJ",
    name: "혁명의 사제",
    emoji: "🔥",
    title: "민중의 마음을 움직인 불꽃",
    color: "#E11D48",
    bgGradient: "from-rose-900/40 to-red-900/20",
    rarity: 5,
    description:
      "당신의 전생은 억압받는 민중을 일으켜 세운 혁명의 사제였습니다. 광장에서의 연설 한 마디로 수만 명의 마음에 불을 지폈고, 누구나 당신 곁에서 자신이 영웅이 된 듯 느꼈습니다. 모든 것을 남을 위해 바쳤지만, 정작 자신의 상처는 숨겼습니다.",
    traits: ["불꽃 같은 연설", "헌신적 리더", "공감의 천재", "타인을 비추는 빛"],
    quote: "\"한 사람의 눈빛을 바꾸면, 세상이 바뀐다.\"",
    compatibility: "isfp",
    incompatibility: "istp",
  },
  {
    id: "enfp",
    mbti: "ENFP",
    name: "떠도는 마법사",
    emoji: "✨",
    title: "불꽃놀이로 밤을 수놓은 자",
    color: "#F97316",
    bgGradient: "from-orange-900/40 to-amber-900/20",
    rarity: 8,
    description:
      "당신의 전생은 정해진 길 따위 무시하고 세상을 떠돌던 자유로운 마법사였습니다. 마법 학교를 중퇴하고 독학으로 누구도 보지 못한 마법을 만들어냈죠. 가는 곳마다 축제가 벌어졌고, 사라지는 곳에는 아쉬움이 남았습니다. 당신의 마법은 규칙이 아니라 상상력에서 태어났습니다.",
    traits: ["끝없는 가능성", "열정의 불꽃놀이", "영혼의 자유인", "매력적인 혼돈"],
    quote: "\"지도 밖으로 나가야 진짜 마법이 시작된다.\"",
    compatibility: "istj",
    incompatibility: "isfj",
  },
  {
    id: "istj",
    mbti: "ISTJ",
    name: "왕궁의 재상",
    emoji: "📜",
    title: "천 년의 법전을 지킨 기둥",
    color: "#1E40AF",
    bgGradient: "from-blue-900/40 to-slate-900/20",
    rarity: 10,
    description:
      "당신의 전생은 왕국의 법과 질서를 지키던 재상이었습니다. 왕이 세 번 바뀌어도 당신의 자리는 변하지 않았고, 당신이 정리한 기록은 천 년 뒤 역사학자들의 보물이 되었죠. 화려하지 않았지만, 당신 없이는 어떤 왕국도 하루를 버틸 수 없었습니다.",
    traits: ["철저한 원칙", "흔들리지 않는 충성", "기록의 수호자", "묵묵한 기둥"],
    quote: "\"법전이 무너지면, 왕국이 무너진다.\"",
    compatibility: "enfp",
    incompatibility: "entp",
  },
  {
    id: "isfj",
    mbti: "ISFJ",
    name: "숲의 치유사",
    emoji: "🌿",
    title: "모든 상처를 품은 어머니",
    color: "#10B981",
    bgGradient: "from-emerald-900/40 to-green-900/20",
    rarity: 10,
    description:
      "당신의 전생은 깊은 숲속에서 상처받은 모든 이를 치유하던 치유사였습니다. 동물이든 사람이든, 문을 두드리는 자를 돌려보낸 적이 없었죠. 당신의 약초밭은 사계절 내내 푸르렀고, 당신의 손길이 닿은 곳에는 상처 대신 꽃이 피었습니다.",
    traits: ["따뜻한 손길", "무한한 인내", "조용한 헌신", "기억하는 마음"],
    quote: "\"아프지 않은 척하는 당신이 가장 아프다는 걸 알고 있어요.\"",
    compatibility: "estp",
    incompatibility: "enfp",
  },
  {
    id: "estj",
    mbti: "ESTJ",
    name: "철벽의 장군",
    emoji: "⚔️",
    title: "성벽 위에 선 최후의 방패",
    color: "#B91C1C",
    bgGradient: "from-red-800/40 to-rose-900/20",
    rarity: 8,
    description:
      "당신의 전생은 수많은 전투를 승리로 이끈 철벽의 장군이었습니다. 병사 한 명의 이름까지 기억했고, 전략보다 규율을, 영광보다 생존을 택했습니다. 적에게는 공포였지만, 아군에게는 가장 믿음직한 방패였죠. 전쟁이 끝난 뒤에도 직선으로 걷는 습관은 변하지 않았습니다.",
    traits: ["강철 같은 규율", "전장의 지휘관", "책임감의 화신", "타협 없는 정의"],
    quote: "\"내 뒤에 있는 자들은 반드시 살아 돌아간다.\"",
    compatibility: "isfp",
    incompatibility: "infp",
  },
  {
    id: "esfj",
    mbti: "ESFJ",
    name: "축제의 여주인",
    emoji: "🌺",
    title: "모든 잔치에 빛을 밝힌 자",
    color: "#F472B6",
    bgGradient: "from-pink-800/40 to-rose-800/20",
    rarity: 9,
    description:
      "당신의 전생은 왕국에서 가장 성대한 축제를 이끌던 여주인이었습니다. 당신이 주최하는 연회에는 귀족도, 거리의 악사도 함께 웃었죠. 사람들의 얼굴을 기억하고, 마음을 읽고, 갈등을 풀어내는 것이 당신의 타고난 재능이었습니다.",
    traits: ["모두의 친구", "완벽한 환대", "공동체의 심장", "사랑의 조율사"],
    quote: "\"모든 사람의 잔이 비지 않도록 하는 것이 나의 마법이다.\"",
    compatibility: "istp",
    incompatibility: "intp",
  },
  {
    id: "istp",
    mbti: "ISTP",
    name: "그림자 검객",
    emoji: "🗡️",
    title: "바람보다 빠른 칼의 주인",
    color: "#6B7280",
    bgGradient: "from-gray-800/40 to-slate-900/20",
    rarity: 6,
    description:
      "당신의 전생은 소리 없이 임무를 완수하던 그림자 검객이었습니다. 열 번의 전투에서 아홉 번은 검을 뽑기도 전에 끝냈죠. 감정은 사치라 여겼고, 필요한 순간에 필요한 만큼만 움직였습니다. 당신의 이름은 아무도 몰랐지만, 당신의 검술은 전설이 되었습니다.",
    traits: ["냉정한 판단력", "기계적 정밀함", "위기의 해결사", "고독한 장인"],
    quote: "\"말은 한 마디면 족하고, 검은 한 번이면 충분하다.\"",
    compatibility: "esfj",
    incompatibility: "enfj",
  },
  {
    id: "isfp",
    mbti: "ISFP",
    name: "심해의 인어",
    emoji: "🧜",
    title: "달빛 아래 노래한 파도의 영혼",
    color: "#06B6D4",
    bgGradient: "from-cyan-900/40 to-teal-900/20",
    rarity: 5,
    description:
      "당신의 전생은 깊은 바다를 유영하던 인어였습니다. 달빛이 수면을 비추는 밤이면 해안가에 나타나 세상에서 가장 아름다운 노래를 불렀죠. 아무도 강요할 수 없는 자유로운 영혼이었지만, 가끔 육지의 세계를 동경하며 눈물을 흘렸습니다.",
    traits: ["아름다움을 좇는 눈", "말없는 감성", "순간을 사는 예술가", "자유로운 영혼"],
    quote: "\"가장 아름다운 것은 말로 설명할 수 없는 것들이다.\"",
    compatibility: "enfj",
    incompatibility: "entj",
  },
  {
    id: "estp",
    mbti: "ESTP",
    name: "바다의 해적왕",
    emoji: "🏴‍☠️",
    title: "수평선 너머를 정복한 모험가",
    color: "#0EA5E9",
    bgGradient: "from-sky-900/40 to-cyan-900/20",
    rarity: 6,
    description:
      "당신의 전생은 일곱 바다를 주름잡던 해적왕이었습니다. 해군 함대를 세 척의 배로 격파한 전설, 감옥에서 열두 번 탈출한 기록 — 모두 당신의 이야기죠. 위험할수록 눈이 빛났고, 불가능할수록 웃음이 나왔습니다. 자유의 바다 위에서 당신은 누구보다 살아있었습니다.",
    traits: ["무모한 용기", "즉흥의 천재", "위험 중독자", "현재를 사는 자"],
    quote: "\"계획? 바람이 부는 방향이 곧 계획이다.\"",
    compatibility: "isfj",
    incompatibility: "infj",
  },
  {
    id: "esfp",
    mbti: "ESFP",
    name: "황금 무희",
    emoji: "💃",
    title: "태양보다 눈부신 무대의 별",
    color: "#FBBF24",
    bgGradient: "from-yellow-900/40 to-amber-900/20",
    rarity: 4,
    description:
      "당신의 전생은 왕궁의 무도회에서 모든 시선을 사로잡던 황금 무희였습니다. 당신이 춤을 추면 시간이 멈추고, 당신이 웃으면 전쟁도 하루 쉬어갔죠. 타고난 끼와 에너지로 어둠을 밝히는 존재, 그것이 당신이었습니다. 무대 뒤에서는 아무도 모를 외로움이 있었지만요.",
    traits: ["태양 같은 에너지", "무대 위의 별", "순간의 마법사", "사랑받는 존재"],
    quote: "\"춤추는 순간, 나는 신이 된다.\"",
    compatibility: "intj",
    incompatibility: "istj",
  },
];

export function getTypeById(id: string): PastLifeType | undefined {
  return pastLifeTypes.find((t) => t.id === id);
}

export function getTypeByMBTI(mbti: string): PastLifeType | undefined {
  return pastLifeTypes.find((t) => t.mbti === mbti.toUpperCase());
}
