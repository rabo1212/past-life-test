"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { getTypeById, PastLifeType } from "@/data/results";
import { getDimensionPercentages, DimensionResult, ScoreMap } from "@/lib/scoring";
import ResultCard from "@/components/ResultCard";
import ShareButtons from "@/components/ShareButtons";
import ParticleBackground from "@/components/ParticleBackground";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [result, setResult] = useState<PastLifeType | null>(null);
  const [dimensions, setDimensions] = useState<DimensionResult[]>([]);

  useEffect(() => {
    const typeFromUrl = searchParams.get("type");
    const typeFromStorage = localStorage.getItem("pastlife-result");
    const typeId = typeFromUrl || typeFromStorage;

    if (!typeId) {
      router.push("/");
      return;
    }

    const foundType = getTypeById(typeId);
    if (!foundType) {
      router.push("/");
      return;
    }

    setResult(foundType);

    const savedScores = localStorage.getItem("pastlife-scores");
    if (savedScores) {
      const scores: ScoreMap = JSON.parse(savedScores);
      setDimensions(getDimensionPercentages(scores));
    } else {
      // URL로 직접 온 경우 기본 차원 데이터
      const mbti = foundType.mbti;
      setDimensions([
        { letter: mbti[0], percentage: 75, pair: ["E", "I"] },
        { letter: mbti[1], percentage: 70, pair: ["S", "N"] },
        { letter: mbti[2], percentage: 68, pair: ["T", "F"] },
        { letter: mbti[3], percentage: 72, pair: ["J", "P"] },
      ]);
    }
  }, [searchParams, router]);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 rounded-full crystal-ball animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-8 px-4">
      <ParticleBackground />
      <div className="relative z-10">
        <ResultCard result={result} dimensions={dimensions} />
        <ShareButtons resultId={result.id} resultName={result.name} mbti={result.mbti} />

        <div className="text-center mt-8">
          <button
            onClick={() => router.push("/types")}
            className="text-arcane-400 text-sm underline underline-offset-4 hover:text-arcane-300"
          >
            16가지 전생 유형 모두 보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 rounded-full crystal-ball animate-pulse" />
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
