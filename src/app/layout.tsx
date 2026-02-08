import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "전생의 나 - 나의 전생은?",
  description: "12가지 신비로운 질문으로 밝혀지는 MBTI 전생 유형. 당신은 전생에 누구였을까요?",
  openGraph: {
    title: "전생의 나 - 나의 전생은?",
    description: "12가지 신비로운 질문으로 밝혀지는 MBTI 전생 유형",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} antialiased bg-mystic-950 text-[var(--text-primary)] stars-bg`}
      >
        <div className="max-w-lg mx-auto min-h-screen relative">
          {children}
        </div>
      </body>
    </html>
  );
}
