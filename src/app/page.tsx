"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <ParticleBackground />

      <div className="relative z-10 text-center">
        {/* 수정 구슬 */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mb-8 w-24 h-24 rounded-full crystal-ball flex items-center justify-center"
        >
          <span className="text-4xl">🔮</span>
        </motion.div>

        {/* 타이틀 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold glow-text mb-3"
        >
          전생의 나
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[var(--text-secondary)] text-lg mb-2"
        >
          당신은 전생에 누구였을까요?
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-arcane-400/60 text-sm mb-12"
        >
          12가지 신비로운 질문이 당신의 전생을 밝혀줍니다
        </motion.p>

        {/* CTA 버튼 */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/test")}
          className="px-8 py-4 bg-arcane-500 hover:bg-arcane-600
                     text-white font-bold text-lg rounded-2xl
                     animate-pulse-glow transition-colors duration-200"
        >
          전생 알아보기
        </motion.button>

        {/* 참여수 (소셜프루프) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-[var(--text-secondary)] text-xs"
        >
          지금까지 <span className="text-arcane-300 font-bold">12,847명</span>이 전생을 확인했어요
        </motion.p>
      </div>
    </div>
  );
}
