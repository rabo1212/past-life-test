"use client";

import { PastLifeType, getTypeById } from "@/data/results";
import { DimensionResult } from "@/lib/scoring";

interface ResultCardReelsProps {
  result: PastLifeType;
  dimensions: DimensionResult[];
}

const dimensionLabels: Record<string, string> = {
  E: "외향", I: "내향",
  S: "감각", N: "직관",
  T: "사고", F: "감정",
  J: "판단", P: "인식",
};

export default function ResultCardReels({ result, dimensions }: ResultCardReelsProps) {
  const compatType = getTypeById(result.compatibility);
  const incompatType = getTypeById(result.incompatibility);

  return (
    <div
      id="result-card-reels"
      style={{
        position: "fixed",
        left: "-9999px",
        top: 0,
        width: "540px",
        height: "960px",
        background: "linear-gradient(180deg, #1A1333 0%, #0D0B1E 40%, #150D2E 70%, #1A1333 100%)",
        padding: "48px 36px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "sans-serif",
        color: "#E8E0F0",
        overflow: "hidden",
      }}
    >
      {/* 상단 장식 */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "200px",
        background: `radial-gradient(ellipse at 50% 0%, ${result.color}15 0%, transparent 70%)`,
      }} />

      {/* 희귀도 배지 */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        {result.rarity <= 10 && (
          <div style={{
            display: "inline-block",
            padding: "6px 20px",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#0D0B1E",
            background: "linear-gradient(90deg, #FFD700, #FFA500, #FFD700)",
            marginBottom: "8px",
          }}>
            TOP {result.rarity}% 희귀 유형!
          </div>
        )}
      </div>

      {/* 메인: 이모지 + 유형명 + MBTI */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "80px", marginBottom: "16px" }}>{result.emoji}</div>
        <div style={{
          fontSize: "36px",
          fontWeight: "bold",
          color: result.color,
          marginBottom: "8px",
          lineHeight: 1.2,
        }}>
          {result.name}
        </div>
        <div style={{
          display: "inline-block",
          padding: "6px 24px",
          borderRadius: "10px",
          fontSize: "18px",
          fontWeight: "bold",
          letterSpacing: "4px",
          color: result.color,
          border: `2px solid ${result.color}60`,
          backgroundColor: `${result.color}15`,
          marginBottom: "12px",
        }}>
          {result.mbti}
        </div>
        <div style={{
          fontSize: "14px",
          color: "#A89BC2",
          marginTop: "8px",
          fontStyle: "italic",
        }}>
          {result.title}
        </div>
      </div>

      {/* 특성 태그 */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        flexWrap: "wrap",
        maxWidth: "440px",
        position: "relative",
        zIndex: 1,
      }}>
        {result.traits.map((trait) => (
          <span
            key={trait}
            style={{
              padding: "6px 14px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: "500",
              color: result.color,
              border: `1px solid ${result.color}40`,
              backgroundColor: `${result.color}10`,
            }}
          >
            #{trait}
          </span>
        ))}
      </div>

      {/* 인용구 */}
      <div style={{
        fontSize: "13px",
        color: `${result.color}99`,
        fontStyle: "italic",
        textAlign: "center",
        maxWidth: "400px",
        lineHeight: 1.5,
        position: "relative",
        zIndex: 1,
      }}>
        {result.quote}
      </div>

      {/* 4차원 바 */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}>
        {dimensions.map((dim, i) => {
          const [a, b] = dim.pair;
          const aPercent = dim.letter === a ? dim.percentage : 100 - dim.percentage;
          const bPercent = 100 - aPercent;
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "11px", color: "#A89BC2", width: "30px", textAlign: "right" }}>
                {dimensionLabels[a]}
              </span>
              <span style={{
                fontSize: "11px",
                fontWeight: "bold",
                width: "32px",
                textAlign: "right",
                color: aPercent >= bPercent ? result.color : "#A89BC2",
              }}>
                {aPercent}%
              </span>
              <div style={{
                flex: 1,
                height: "8px",
                backgroundColor: "#2A2340",
                borderRadius: "4px",
                overflow: "hidden",
                display: "flex",
              }}>
                <div style={{
                  width: `${aPercent}%`,
                  height: "100%",
                  backgroundColor: aPercent >= bPercent ? result.color : `${result.color}40`,
                  borderRadius: "4px 0 0 4px",
                }} />
                <div style={{
                  width: `${bPercent}%`,
                  height: "100%",
                  backgroundColor: bPercent > aPercent ? result.color : `${result.color}40`,
                  borderRadius: "0 4px 4px 0",
                }} />
              </div>
              <span style={{
                fontSize: "11px",
                fontWeight: "bold",
                width: "32px",
                color: bPercent > aPercent ? result.color : "#A89BC2",
              }}>
                {bPercent}%
              </span>
              <span style={{ fontSize: "11px", color: "#A89BC2", width: "30px" }}>
                {dimensionLabels[b]}
              </span>
            </div>
          );
        })}
      </div>

      {/* 궁합/앙숙 */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        fontSize: "12px",
        color: "#A89BC2",
        position: "relative",
        zIndex: 1,
      }}>
        <span>
          💕 궁합: <span style={{ color: "#C4B5FD" }}>
            {compatType ? `${compatType.mbti} ${compatType.name}` : result.compatibility}
          </span>
        </span>
        <span>
          ⚡ 앙숙: <span style={{ color: "#F87171" }}>
            {incompatType ? `${incompatType.mbti} ${incompatType.name}` : result.incompatibility}
          </span>
        </span>
      </div>

      {/* 워터마크 */}
      <div style={{
        textAlign: "center",
        fontSize: "11px",
        color: "#4A4260",
        position: "relative",
        zIndex: 1,
      }}>
        전생의 나 테스트 | pastlife-test.vercel.app
      </div>
    </div>
  );
}
