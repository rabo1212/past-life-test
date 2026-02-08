"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { questions, Choice } from "@/data/questions";
import { addScores, calculateResult, ScoreMap } from "@/lib/scoring";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import AnalyzingScreen from "@/components/AnalyzingScreen";

export default function TestPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<ScoreMap>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = useCallback(
    (choice: Choice) => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      const newScores = addScores(scores, choice.scores);
      setScores(newScores);

      // 0.3초 딜레이 (도파민!)
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          setIsTransitioning(false);
        } else {
          // 마지막 질문 → 분석 시작
          const result = calculateResult(newScores);
          localStorage.setItem("pastlife-result", result.id);
          localStorage.setItem("pastlife-scores", JSON.stringify(newScores));
          setIsAnalyzing(true);
        }
      }, 300);
    },
    [currentIndex, scores, isTransitioning]
  );

  const handleAnalysisComplete = useCallback(() => {
    router.push("/result");
  }, [router]);

  if (isAnalyzing) {
    return <AnalyzingScreen onComplete={handleAnalysisComplete} />;
  }

  return (
    <div className="min-h-screen flex flex-col pt-safe">
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <div className="flex-1 flex flex-col justify-center py-8">
        <AnimatePresence mode="wait">
          <QuestionCard
            key={questions[currentIndex].id}
            question={questions[currentIndex]}
            onSelect={handleSelect}
            questionNumber={currentIndex + 1}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
