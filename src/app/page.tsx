"use client";

import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import { pastLifeTypes } from "@/data/results";

// 인기 유형 6개 (희귀~흔한 섞어서 호기심 자극)
const previewTypes = [
  pastLifeTypes.find((t) => t.mbti === "INFJ")!,
  pastLifeTypes.find((t) => t.mbti === "ENTJ")!,
  pastLifeTypes.find((t) => t.mbti === "ESFP")!,
  pastLifeTypes.find((t) => t.mbti === "INTP")!,
  pastLifeTypes.find((t) => t.mbti === "ENFP")!,
  pastLifeTypes.find((t) => t.mbti === "ISTP")!,
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative">
      <ParticleBackground />

      {/* ===== 1. 히어로 섹션 ===== */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mb-8 w-28 h-28 rounded-full crystal-ball flex items-center justify-center"
        >
          <span className="text-5xl">🔮</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-arcane-400/80 text-sm tracking-widest uppercase mb-4"
        >
          Past Life Test
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-bold glow-text mb-3"
        >
          당신의 영혼은
          <br />
          기억하고 있습니다
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-[var(--text-secondary)] text-base mb-10 max-w-xs leading-relaxed"
        >
          12가지 질문이 전생의 기억을 깨웁니다.
          <br />
          당신은 전생에 누구였을까요?
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/test")}
          className="px-10 py-4 bg-arcane-500 hover:bg-arcane-600
                     text-white font-bold text-lg rounded-2xl
                     animate-pulse-glow transition-colors duration-200"
        >
          전생 알아보기
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-6 text-[var(--text-secondary)] text-xs"
        >
          지금까지 <span className="text-arcane-300 font-bold">12,847명</span>이 전생을 확인했어요
        </motion.p>

        {/* 스크롤 유도 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-mystic-600 text-sm"
          >
            ↓ 더 알아보기
          </motion.div>
        </motion.div>
      </div>

      {/* ===== 2. 유형 미리보기 ===== */}
      <Section className="relative z-10 px-6 py-20">
        <h2 className="text-2xl font-bold text-center glow-text mb-3">
          16가지 전생, 당신은 누구였을까?
        </h2>
        <p className="text-[var(--text-secondary)] text-sm text-center mb-10">
          MBTI 기반 16가지 전생 유형 중 당신의 유형을 찾아보세요
        </p>

        <div className="grid grid-cols-2 gap-3">
          {previewTypes.map((type, i) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/result?type=${type.id}`}>
                <div className="p-4 rounded-2xl bg-mystic-900/50 border border-mystic-700/20
                                hover:border-mystic-600/40 transition-all group">
                  <div className="text-3xl mb-2">{type.emoji}</div>
                  <div className="text-xs font-bold tracking-wider mb-1" style={{ color: type.color }}>
                    {type.mbti}
                  </div>
                  <div className="text-sm font-bold text-[var(--text-primary)] mb-1">
                    {type.name}
                  </div>
                  <div className="text-[10px] text-[var(--text-secondary)]">
                    상위 {type.rarity}%
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            href="/types"
            className="text-arcane-400 text-sm underline underline-offset-4 hover:text-arcane-300"
          >
            16가지 유형 전부 보기 →
          </Link>
        </div>
      </Section>

      {/* ===== 3. 이용방법 3단계 ===== */}
      <Section className="relative z-10 px-6 py-20">
        <h2 className="text-2xl font-bold text-center glow-text mb-10">
          3분이면 충분해요
        </h2>

        <div className="space-y-6">
          {[
            { step: "01", emoji: "✨", title: "질문에 답하기", desc: "12가지 신비로운 질문에 직감으로 대답하세요" },
            { step: "02", emoji: "🔮", title: "전생 분석", desc: "MBTI 4차원 분석으로 당신의 전생을 읽어냅니다" },
            { step: "03", emoji: "📜", title: "결과 확인", desc: "전생 유형, 궁합, 희귀도까지 한눈에!" },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-arcane-500/15 border border-arcane-500/20
                              flex items-center justify-center">
                <span className="text-2xl">{item.emoji}</span>
              </div>
              <div>
                <div className="text-arcane-400 text-xs font-bold mb-1">STEP {item.step}</div>
                <div className="text-[var(--text-primary)] font-bold mb-1">{item.title}</div>
                <div className="text-[var(--text-secondary)] text-sm">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===== 4. 통계 티저 ===== */}
      <Section className="relative z-10 px-6 py-20">
        <div className="rounded-3xl bg-mystic-900/40 border border-mystic-700/20 p-8 text-center">
          <h2 className="text-xl font-bold glow-text mb-6">
            가장 희귀한 전생은?
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: "가장 희귀", type: pastLifeTypes.find((t) => t.mbti === "INFJ")!, pct: "1.5%" },
              { label: "가장 흔한", type: pastLifeTypes.find((t) => t.mbti === "ISFJ")!, pct: "13.8%" },
              { label: "가장 독특", type: pastLifeTypes.find((t) => t.mbti === "ENTP")!, pct: "3.2%" },
            ].map((item) => (
              <div key={item.type.id} className="text-center">
                <div className="text-3xl mb-2">{item.type.emoji}</div>
                <div className="text-[10px] text-[var(--text-secondary)] mb-1">{item.label}</div>
                <div className="text-xs font-bold" style={{ color: item.type.color }}>
                  {item.type.name}
                </div>
                <div className="text-[10px] text-arcane-400 mt-1">{item.pct}</div>
              </div>
            ))}
          </div>

          <Link
            href="/stats"
            className="text-arcane-400 text-sm underline underline-offset-4 hover:text-arcane-300"
          >
            전체 통계 보기 →
          </Link>
        </div>
      </Section>

      {/* ===== 5. 하단 CTA ===== */}
      <Section className="relative z-10 px-6 pt-10 pb-20 text-center">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-5xl mb-6"
        >
          🔮
        </motion.div>

        <h2 className="text-2xl font-bold glow-text mb-3">
          준비되셨나요?
        </h2>
        <p className="text-[var(--text-secondary)] text-sm mb-8">
          당신의 전생이 당신을 기다리고 있습니다
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/test")}
          className="px-10 py-4 bg-arcane-500 hover:bg-arcane-600
                     text-white font-bold text-lg rounded-2xl
                     animate-pulse-glow transition-colors duration-200"
        >
          지금 전생 알아보기
        </motion.button>

        <p className="mt-6 text-[var(--text-secondary)] text-xs">
          약 3분 소요 · 무료 · 회원가입 없음
        </p>

        {/* 푸터 */}
        <div className="mt-16 pt-6 border-t border-mystic-800/50">
          <p className="text-mystic-700 text-[10px]">
            전생의 나 테스트 | MBTI 기반 전생 심리테스트
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/types" className="text-mystic-600 text-[10px] hover:text-mystic-500">
              유형 도감
            </Link>
            <Link href="/stats" className="text-mystic-600 text-[10px] hover:text-mystic-500">
              통계
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
