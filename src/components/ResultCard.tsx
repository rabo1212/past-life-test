"use client";

import { motion } from "framer-motion";
import { PastLifeType, getTypeById } from "@/data/results";
import { DimensionResult } from "@/lib/scoring";

interface ResultCardProps {
  result: PastLifeType;
  dimensions: DimensionResult[];
}

const dimensionLabels: Record<string, string> = {
  E: "외향", I: "내향",
  S: "감각", N: "직관",
  T: "사고", F: "감정",
  J: "판단", P: "인식",
};

export default function ResultCard({ result, dimensions }: ResultCardProps) {
  const compatType = getTypeById(result.compatibility);
  const incompatType = getTypeById(result.incompatibility);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      <div
        id="result-card"
        className="result-card-capture rounded-3xl p-6 border border-mystic-700/30 glow-border"
      >
        {/* 희귀도 배지 */}
        {result.rarity <= 10 && (
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold text-mystic-950 shimmer-gradient animate-shimmer">
              상위 {result.rarity}% 희귀 유형!
            </span>
          </div>
        )}

        {/* 이모지 + 유형명 */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-6xl mb-4"
          >
            {result.emoji}
          </motion.div>
          <h1
            className="text-3xl font-bold mb-1"
            style={{ color: result.color }}
          >
            {result.name}
          </h1>
          <p className="text-[var(--text-secondary)] text-sm mb-2">
            {result.title}
          </p>

          {/* MBTI 뱃지 */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-lg text-sm font-bold tracking-widest border"
            style={{
              borderColor: `${result.color}60`,
              color: result.color,
              backgroundColor: `${result.color}15`,
            }}
          >
            {result.mbti}
          </motion.span>
        </div>

        {/* 설명 */}
        <div className="bg-mystic-900/40 rounded-2xl p-4 mb-5">
          <p className="text-[var(--text-primary)] text-sm leading-relaxed">
            {result.description}
          </p>
        </div>

        {/* 특성 태그 */}
        <div className="flex flex-wrap gap-2 justify-center mb-5">
          {result.traits.map((trait, i) => (
            <motion.span
              key={trait}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                borderColor: `${result.color}40`,
                color: result.color,
                backgroundColor: `${result.color}10`,
              }}
            >
              #{trait}
            </motion.span>
          ))}
        </div>

        {/* 인용구 */}
        <p
          className="text-center text-sm italic mb-5"
          style={{ color: `${result.color}99` }}
        >
          {result.quote}
        </p>

        {/* 4차원 MBTI 비율 바 */}
        <div className="space-y-2.5 mb-5">
          {dimensions.map((dim, i) => {
            const [a, b] = dim.pair;
            const aPercent = dim.letter === a ? dim.percentage : 100 - dim.percentage;
            const bPercent = 100 - aPercent;
            return (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[10px] text-[var(--text-secondary)] w-8 text-right font-medium">
                  {dimensionLabels[a]}
                </span>
                <span
                  className="text-[10px] font-bold w-8 text-right"
                  style={{ color: aPercent >= bPercent ? result.color : "var(--text-secondary)" }}
                >
                  {aPercent}%
                </span>
                <div className="flex-1 h-2 bg-mystic-800 rounded-full overflow-hidden flex">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${aPercent}%` }}
                    transition={{ delay: 0.8 + i * 0.12, duration: 0.6 }}
                    className="h-full rounded-l-full"
                    style={{ backgroundColor: aPercent >= bPercent ? result.color : `${result.color}40` }}
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${bPercent}%` }}
                    transition={{ delay: 0.8 + i * 0.12, duration: 0.6 }}
                    className="h-full rounded-r-full"
                    style={{ backgroundColor: bPercent > aPercent ? result.color : `${result.color}40` }}
                  />
                </div>
                <span
                  className="text-[10px] font-bold w-8"
                  style={{ color: bPercent > aPercent ? result.color : "var(--text-secondary)" }}
                >
                  {bPercent}%
                </span>
                <span className="text-[10px] text-[var(--text-secondary)] w-8 font-medium">
                  {dimensionLabels[b]}
                </span>
              </div>
            );
          })}
        </div>

        {/* 궁합 */}
        <div className="flex justify-between text-xs px-2">
          <span className="text-[var(--text-secondary)]">
            💕 궁합:{" "}
            <span className="text-arcane-300">
              {compatType ? `${compatType.mbti} ${compatType.name}` : result.compatibility}
            </span>
          </span>
          <span className="text-[var(--text-secondary)]">
            ⚡ 앙숙:{" "}
            <span className="text-red-400">
              {incompatType ? `${incompatType.mbti} ${incompatType.name}` : result.incompatibility}
            </span>
          </span>
        </div>

        {/* 워터마크 */}
        <p className="text-center text-[10px] text-mystic-700 mt-4">
          전생의 나 테스트 | pastlife-test.vercel.app
        </p>
      </div>
    </motion.div>
  );
}
