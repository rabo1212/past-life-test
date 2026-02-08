"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { pastLifeTypes } from "@/data/results";

export default function TypesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold glow-text mb-2">16가지 전생 유형</h1>
        <p className="text-[var(--text-secondary)] text-sm">
          MBTI로 밝혀진 당신의 전생은?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {pastLifeTypes.map((type, index) => (
          <motion.div
            key={type.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => router.push(`/result?type=${type.id}`)}
            className="cursor-pointer p-3 rounded-2xl border border-mystic-700/30
                       bg-mystic-900/40 hover:bg-mystic-800/40
                       transition-colors duration-200"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-2xl">{type.emoji}</span>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded border"
                style={{
                  borderColor: `${type.color}40`,
                  color: type.color,
                  backgroundColor: `${type.color}10`,
                }}
              >
                {type.mbti}
              </span>
            </div>
            <h3
              className="font-bold text-sm mb-0.5"
              style={{ color: type.color }}
            >
              {type.name}
            </h3>
            <p className="text-[10px] text-[var(--text-secondary)] leading-snug">
              {type.title}
            </p>
            <div className="mt-1.5 flex items-center gap-1">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: type.color }}
              />
              <span className="text-[10px] text-[var(--text-secondary)]">
                {type.rarity <= 5 ? `희귀 ${type.rarity}%` : `${type.rarity}%`}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-arcane-500 hover:bg-arcane-600 text-white
                     font-bold rounded-xl transition-colors"
        >
          테스트 시작하기
        </button>
      </div>
    </div>
  );
}
