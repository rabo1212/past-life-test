"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { questions, Choice } from "@/data/questions";
import { addScores, subtractScores, calculateResult, ScoreMap } from "@/lib/scoring";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import AnalyzingScreen from "@/components/AnalyzingScreen";

export default function TestPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<ScoreMap>({});
  const [answerHistory, setAnswerHistory] = useState<Choice[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = useCallback(
    (choice: Choice) => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      const newScores = addScores(scores, choice.scores);
      setScores(newScores);
      setAnswerHistory((prev) => [...prev, choice]);

      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          setIsTransitioning(false);
        } else {
          const result = calculateResult(newScores);
          localStorage.setItem("pastlife-result", result.id);
          localStorage.setItem("pastlife-scores", JSON.stringify(newScores));
          setIsAnalyzing(true);
        }
      }, 300);
    },
    [currentIndex, scores, isTransitioning]
  );

  const handleBack = useCallback(() => {
    if (currentIndex === 0 || isTransitioning) return;
    setIsTransitioning(true);

    const lastChoice = answerHistory[answerHistory.length - 1];
    const newScores = subtractScores(scores, lastChoice.scores);
    setScores(newScores);
    setAnswerHistory((prev) => prev.slice(0, -1));

    setTimeout(() => {
      setCurrentIndex((prev) => prev - 1);
      setIsTransitioning(false);
    }, 200);
  }, [currentIndex, scores, answerHistory, isTransitioning]);

  const handleAnalysisComplete = useCallback(() => {
    router.push("/result");
  }, [router]);

  if (isAnalyzing) {
    return <AnalyzingScreen onComplete={handleAnalysisComplete} />;
  }

  return (
    <div className="min-h-screen flex flex-col pt-safe">
      <div className="flex items-center gap-2 px-4">
        {currentIndex > 0 && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBack}
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)]
                       hover:bg-mystic-800/50 transition-colors text-lg"
            aria-label="이전 질문"
          >
            &larr;
          </motion.button>
        )}
        <div className="flex-1">
          <ProgressBar current={currentIndex + 1} total={questions.length} />
        </div>
      </div>

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
