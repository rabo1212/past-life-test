import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const typeData: Record<string, { name: string; emoji: string; color: string; title: string; mbti: string }> = {
  intj: { mbti: "INTJ", name: "천상의 전략가", emoji: "🌌", color: "#6366F1", title: "별의 궤도를 설계한 자" },
  intp: { mbti: "INTP", name: "금서의 연금술사", emoji: "⚗️", color: "#8B5CF6", title: "진리를 증류하는 은둔자" },
  entj: { mbti: "ENTJ", name: "대륙의 정복왕", emoji: "👑", color: "#DC2626", title: "만국의 왕좌를 탐한 자" },
  entp: { mbti: "ENTP", name: "미친 발명가", emoji: "⚡", color: "#F59E0B", title: "번개를 병에 담은 이단자" },
  infj: { mbti: "INFJ", name: "달의 예언자", emoji: "🌙", color: "#7C3AED", title: "비극을 미리 운 현자" },
  infp: { mbti: "INFP", name: "방랑하는 음유시인", emoji: "🪶", color: "#EC4899", title: "바람에 실린 눈물의 노래" },
  enfj: { mbti: "ENFJ", name: "혁명의 사제", emoji: "🔥", color: "#E11D48", title: "민중의 마음을 움직인 불꽃" },
  enfp: { mbti: "ENFP", name: "떠도는 마법사", emoji: "✨", color: "#F97316", title: "불꽃놀이로 밤을 수놓은 자" },
  istj: { mbti: "ISTJ", name: "왕궁의 재상", emoji: "📜", color: "#1E40AF", title: "천 년의 법전을 지킨 기둥" },
  isfj: { mbti: "ISFJ", name: "숲의 치유사", emoji: "🌿", color: "#10B981", title: "모든 상처를 품은 어머니" },
  estj: { mbti: "ESTJ", name: "철벽의 장군", emoji: "⚔️", color: "#B91C1C", title: "성벽 위에 선 최후의 방패" },
  esfj: { mbti: "ESFJ", name: "축제의 여주인", emoji: "🌺", color: "#F472B6", title: "모든 잔치에 빛을 밝힌 자" },
  istp: { mbti: "ISTP", name: "그림자 검객", emoji: "🗡️", color: "#6B7280", title: "바람보다 빠른 칼의 주인" },
  isfp: { mbti: "ISFP", name: "심해의 인어", emoji: "🧜", color: "#06B6D4", title: "달빛 아래 노래한 파도의 영혼" },
  estp: { mbti: "ESTP", name: "바다의 해적왕", emoji: "🏴‍☠️", color: "#0EA5E9", title: "수평선 너머를 정복한 모험가" },
  esfp: { mbti: "ESFP", name: "황금 무희", emoji: "💃", color: "#FBBF24", title: "태양보다 눈부신 무대의 별" },
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "infj";
  const data = typeData[type] || typeData.infj;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1A1333 0%, #0D0B1E 50%, #1A1333 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: "80px", marginBottom: "16px" }}>
          {data.emoji}
        </div>
        <div
          style={{
            fontSize: "52px",
            fontWeight: "bold",
            color: data.color,
            marginBottom: "8px",
          }}
        >
          {data.name}
        </div>
        <div
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: data.color,
            opacity: 0.7,
            marginBottom: "8px",
            letterSpacing: "4px",
          }}
        >
          {data.mbti}
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "#A89BC2",
            marginBottom: "40px",
          }}
        >
          {data.title}
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "#7C3AED",
          }}
        >
          나의 전생은? | 전생의 나 테스트
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
