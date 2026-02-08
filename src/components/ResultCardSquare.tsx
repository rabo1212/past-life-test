"use client";

import { PastLifeType, getTypeById } from "@/data/results";
import { DimensionResult } from "@/lib/scoring";

interface ResultCardSquareProps {
  result: PastLifeType;
  dimensions: DimensionResult[];
}

const dimensionLabels: Record<string, string> = {
  E: "외향", I: "내향",
  S: "감각", N: "직관",
  T: "사고", F: "감정",
  J: "판단", P: "인식",
};

export default function ResultCardSquare({ result, dimensions }: ResultCardSquareProps) {
  const compatType = getTypeById(result.compatibility);
  const incompatType = getTypeById(result.incompatibility);

  return (
    <div
      id="result-card-square"
      style={{
        position: "fixed",
        left: "-9999px",
        top: 0,
        width: "600px",
        height: "600px",
        background: "linear-gradient(135deg, #1A1333 0%, #0D0B1E 50%, #1A1333 100%)",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
        color: "#E8E0F0",
        borderRadius: "0",
      }}
    >
      {/* 상단: 이모지 + 유형명 + MBTI */}
      <div style={{ textAlign: "center" }}>
        {result.rarity <= 10 && (
          <div style={{
            display: "inline-block",
            padding: "4px 16px",
            borderRadius: "999px",
            fontSize: "11px",
            fontWeight: "bold",
            color: "#0D0B1E",
            background: "linear-gradient(90deg, #FFD700, #FFA500, #FFD700)",
            marginBottom: "12px",
          }}>
            TOP {result.rarity}% 희귀 유형!
          </div>
        )}
        <div style={{ fontSize: "56px", marginBottom: "8px" }}>{result.emoji}</div>
        <div style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: result.color,
          marginBottom: "4px",
        }}>
          {result.name}
        </div>
        <div style={{
          display: "inline-block",
          padding: "4px 16px",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "bold",
          letterSpacing: "3px",
          color: result.color,
          border: `1px solid ${result.color}60`,
          backgroundColor: `${result.color}15`,
        }}>
          {result.mbti}
        </div>
        <div style={{
          fontSize: "13px",
          color: "#A89BC2",
          marginTop: "8px",
        }}>
          {result.title}
        </div>
      </div>

      {/* 중단: 특성 태그 */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        flexWrap: "wrap",
      }}>
        {result.traits.map((trait) => (
          <span
            key={trait}
            style={{
              padding: "4px 12px",
              borderRadius: "999px",
              fontSize: "11px",
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

      {/* 4차원 바 (컴팩트) */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {dimensions.map((dim, i) => {
          const [a, b] = dim.pair;
          const aPercent = dim.letter === a ? dim.percentage : 100 - dim.percentage;
          const bPercent = 100 - aPercent;
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "10px", color: "#A89BC2", width: "28px", textAlign: "right" }}>
                {dimensionLabels[a]}
              </span>
              <span style={{
                fontSize: "10px",
                fontWeight: "bold",
                width: "28px",
                textAlign: "right",
                color: aPercent >= bPercent ? result.color : "#A89BC2",
              }}>
                {aPercent}%
              </span>
              <div style={{
                flex: 1,
                height: "6px",
                backgroundColor: "#2A2340",
                borderRadius: "3px",
                overflow: "hidden",
                display: "flex",
              }}>
                <div style={{
                  width: `${aPercent}%`,
                  height: "100%",
                  backgroundColor: aPercent >= bPercent ? result.color : `${result.color}40`,
                  borderRadius: "3px 0 0 3px",
                }} />
                <div style={{
                  width: `${bPercent}%`,
                  height: "100%",
                  backgroundColor: bPercent > aPercent ? result.color : `${result.color}40`,
                  borderRadius: "0 3px 3px 0",
                }} />
              </div>
              <span style={{
                fontSize: "10px",
                fontWeight: "bold",
                width: "28px",
                color: bPercent > aPercent ? result.color : "#A89BC2",
              }}>
                {bPercent}%
              </span>
              <span style={{ fontSize: "10px", color: "#A89BC2", width: "28px" }}>
                {dimensionLabels[b]}
              </span>
            </div>
          );
        })}
      </div>

      {/* 하단: 궁합 + 워터마크 */}
      <div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "11px",
          color: "#A89BC2",
          marginBottom: "12px",
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
        <div style={{
          textAlign: "center",
          fontSize: "10px",
          color: "#4A4260",
        }}>
          전생의 나 테스트 | pastlife-test.vercel.app
        </div>
      </div>
    </div>
  );
}
