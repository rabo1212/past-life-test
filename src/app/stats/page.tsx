"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { pastLifeTypes } from "@/data/results";

// MBTI 세계 인구 비율 (공개 통계 기반)
const mbtiPopulation: Record<string, number> = {
  ISTJ: 11.6, ISFJ: 13.8, INFJ: 1.5, INTJ: 2.1,
  ISTP: 5.4, ISFP: 8.8, INFP: 4.4, INTP: 3.3,
  ESTP: 4.3, ESFP: 8.5, ENFP: 8.1, ENTP: 3.2,
  ESTJ: 8.7, ESFJ: 12.3, ENFJ: 2.5, ENTJ: 1.8,
};

// 비율 높은 순으로 정렬
const sortedTypes = [...pastLifeTypes].sort(
  (a, b) => (mbtiPopulation[b.mbti] || 0) - (mbtiPopulation[a.mbti] || 0)
);

const maxPercent = Math.max(...Object.values(mbtiPopulation));

export default function StatsPage() {
  const [myType, setMyType] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("pastlife-result");
    if (saved) setMyType(saved);
  }, []);

  const myMbti = myType ? pastLifeTypes.find((t) => t.id === myType)?.mbti : null;
  const myRank = myMbti
    ? sortedTypes.findIndex((t) => t.mbti === myMbti) + 1
    : null;

  return (
    <div className="min-h-screen px-4 py-8">
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-2xl font-bold glow-text mb-2">MBTI 전생 통계</h1>
        <p className="text-[var(--text-secondary)] text-sm">
          세계 인구 비율로 보는 16가지 전생 유형
        </p>
      </motion.div>

      {/* 내 유형 하이라이트 */}
      {myType && myMbti && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 p-4 rounded-2xl border border-arcane-500/30 bg-arcane-500/10 text-center"
        >
          <p className="text-arcane-300 text-sm mb-1">나의 전생 유형</p>
          <p className="text-xl font-bold text-[var(--text-primary)]">
            {pastLifeTypes.find((t) => t.id === myType)?.emoji}{" "}
            {myMbti} - {pastLifeTypes.find((t) => t.id === myType)?.name}
          </p>
          <p className="text-arcane-400 text-sm mt-1">
            세계 인구의 <span className="font-bold text-arcane-300">{mbtiPopulation[myMbti]}%</span>
            {" "} | 희귀도 순위 <span className="font-bold text-arcane-300">{myRank}위</span>/16
          </p>
        </motion.div>
      )}

      {/* 바 차트 */}
      <div className="space-y-2">
        {sortedTypes.map((type, i) => {
          const percent = mbtiPopulation[type.mbti] || 0;
          const isMyType = type.id === myType;
          const barWidth = (percent / maxPercent) * 100;

          return (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <Link href={`/result?type=${type.id}`}>
                <div
                  className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${
                    isMyType
                      ? "bg-arcane-500/15 border border-arcane-500/30"
                      : "hover:bg-mystic-800/30"
                  }`}
                >
                  {/* 순위 */}
                  <span className="text-xs text-[var(--text-secondary)] w-5 text-right">
                    {i + 1}
                  </span>

                  {/* 이모지 */}
                  <span className="text-lg w-7 text-center">{type.emoji}</span>

                  {/* 정보 + 바 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-bold tracking-wider"
                        style={{ color: type.color }}
                      >
                        {type.mbti}
                      </span>
                      <span className="text-xs text-[var(--text-primary)] truncate">
                        {type.name}
                      </span>
                      {isMyType && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-arcane-500/20 text-arcane-300 font-bold">
                          ME
                        </span>
                      )}
                    </div>

                    {/* 바 */}
                    <div className="w-full h-2 bg-mystic-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${barWidth}%` }}
                        transition={{ delay: 0.2 + i * 0.03, duration: 0.5 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: type.color }}
                      />
                    </div>
                  </div>

                  {/* 비율 */}
                  <span
                    className="text-xs font-bold w-12 text-right"
                    style={{ color: isMyType ? type.color : "var(--text-secondary)" }}
                  >
                    {percent}%
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* 하단 정보 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center space-y-3"
      >
        <p className="text-[10px] text-mystic-700">
          * MBTI 인구 비율은 세계 공개 통계 기반 (Myers & Briggs Foundation)
        </p>
        <div className="flex justify-center gap-3">
          <Link
            href="/types"
            className="text-sm text-arcane-400 hover:text-arcane-300 transition-colors"
          >
            16가지 유형 보기
          </Link>
          <span className="text-mystic-700">|</span>
          <Link
            href="/"
            className="text-sm text-arcane-400 hover:text-arcane-300 transition-colors"
          >
            테스트 하기
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
