"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";

interface ShareButtonsProps {
  resultId: string;
  resultName: string;
  mbti: string;
}

export default function ShareButtons({ resultId, resultName, mbti }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);

  const shareUrl = typeof window !== "undefined"
    ? `${window.location.origin}/result?type=${resultId}`
    : "";

  const shareText = `나의 전생은 "${mbti} - ${resultName}"이었다! 🔮 당신의 전생은?\n${shareUrl}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = shareText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSaveImage = async () => {
    setSaving(true);
    try {
      const element = document.getElementById("result-card");
      if (!element) return;

      const canvas = await html2canvas(element, {
        backgroundColor: "#0D0B1E",
        scale: 2,
        useCORS: true,
      });

      const link = document.createElement("a");
      link.download = `전생의나_${mbti}_${resultName}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("이미지 저장 실패:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "전생의 나 테스트",
          text: shareText,
          url: shareUrl,
        });
      } catch {
        // 사용자가 취소
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="space-y-3 mt-6"
    >
      <p className="text-center text-arcane-300 text-sm mb-4">
        친구에게 공유하고 전생 궁합을 확인해보세요!
      </p>

      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={handleCopyLink}
          className="flex flex-col items-center gap-2 p-3 rounded-xl
                     bg-mystic-800/50 border border-mystic-700/30
                     hover:bg-mystic-700/50 transition-colors"
        >
          <span className="text-2xl">{copied ? "✅" : "🔗"}</span>
          <span className="text-xs text-[var(--text-secondary)]">
            {copied ? "복사됨!" : "링크복사"}
          </span>
        </button>

        <button
          onClick={handleSaveImage}
          disabled={saving}
          className="flex flex-col items-center gap-2 p-3 rounded-xl
                     bg-mystic-800/50 border border-mystic-700/30
                     hover:bg-mystic-700/50 transition-colors
                     disabled:opacity-50"
        >
          <span className="text-2xl">{saving ? "⏳" : "📸"}</span>
          <span className="text-xs text-[var(--text-secondary)]">
            {saving ? "저장 중..." : "이미지저장"}
          </span>
        </button>

        <button
          onClick={handleNativeShare}
          className="flex flex-col items-center gap-2 p-3 rounded-xl
                     bg-mystic-800/50 border border-mystic-700/30
                     hover:bg-mystic-700/50 transition-colors"
        >
          <span className="text-2xl">📤</span>
          <span className="text-xs text-[var(--text-secondary)]">공유하기</span>
        </button>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("pastlife-result");
          localStorage.removeItem("pastlife-scores");
          window.location.href = "/";
        }}
        className="w-full mt-4 py-3 rounded-xl border border-mystic-700/30
                   text-[var(--text-secondary)] text-sm hover:bg-mystic-800/30 transition-colors"
      >
        다시 테스트하기
      </button>
    </motion.div>
  );
}
