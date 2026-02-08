"use client";

import { motion } from "framer-motion";
import { Question, Choice } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  onSelect: (choice: Choice) => void;
  questionNumber: number;
}

export default function QuestionCard({
  question,
  onSelect,
  questionNumber,
}: QuestionCardProps) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="px-4"
    >
      <div className="text-center mb-8">
        <span className="text-arcane-400 text-sm font-medium">
          Question {questionNumber}
        </span>
        <h2 className="text-xl font-bold mt-2 leading-relaxed">
          {question.text}
        </h2>
        <p className="text-[var(--text-secondary)] text-sm mt-2">
          {question.subtitle}
        </p>
      </div>

      <div className="space-y-3">
        {question.choices.map((choice, index) => (
          <motion.button
            key={index}
            onClick={() => onSelect(choice)}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="w-full text-left p-4 rounded-xl border border-mystic-700/50
                       bg-mystic-900/60 backdrop-blur-sm
                       hover:border-arcane-500/50 hover:bg-mystic-800/60
                       active:bg-arcane-700/20
                       transition-colors duration-200"
          >
            <span className="text-[var(--text-primary)] text-sm leading-relaxed">
              {choice.text}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
