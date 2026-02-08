"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phases = [
  "전생의 기억을 더듬고 있습니다...",
  "별의 배치를 읽고 있습니다...",
  "고대 문서를 해독하고 있습니다...",
  "당신의 영혼을 들여다봅니다...",
];

interface AnalyzingScreenProps {
  onComplete: () => void;
}

export default function AnalyzingScreen({ onComplete }: AnalyzingScreenProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => {
        if (prev >= phases.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-mystic-950 z-50 flex flex-col items-center justify-center px-8">
      {/* 수정 구슬 */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="w-32 h-32 rounded-full crystal-ball mb-10"
      />

      {/* 분석 텍스트 */}
      <AnimatePresence mode="wait">
        <motion.p
          key={phase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-arcane-300 text-center text-lg"
        >
          {phases[phase]}
        </motion.p>
      </AnimatePresence>

      {/* 프로그레스 도트 */}
      <div className="flex gap-2 mt-8">
        {phases.map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            animate={{
              backgroundColor: i <= phase ? "#A78BFA" : "#3D2E6B",
              scale: i === phase ? 1.3 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
