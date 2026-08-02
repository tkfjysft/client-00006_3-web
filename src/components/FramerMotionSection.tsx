"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface FramerMotionSectionProps {
    className?: string;
}

export default function FramerMotionSection({
    className
}: FramerMotionSectionProps) {

  const containerRef = useRef<HTMLDivElement>(null);
  
  // スクロールの進捗をこのセクション基準で取得
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] 
  });

  // 進捗に応じて不透明度（カラーレイヤーの濃さ）を変化させる
  const opacity = useTransform(scrollYProgress, [0.1, 1], [0, 0.6]);

  // 【追加の指標①】スケール（例：スクロール初期は少し小さく（0.95）、徐々に原寸（1）へ拡大する）
  // const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1], // 0%から80%のスクロールを使って変化を完了させる
    [
      "circle(0% at center)",    // スタート：画面中央の点
      "circle(200% at center)"  // ゴール：画面全体を覆う円
    ]
  );

  // 【追加の指標②】ぼかし・フィルター（例：最初は少しボケていて、スクロールするとクッキリする）
  const blur = useTransform(scrollYProgress, [0, 1], ["200px", "50px"]);

  return (
    <section
      ref={containerRef}
      id="framermotion-section" 
      data-bg="light" 
      className={`
        relative w-full mt-300 py-32 overflow-hidden min-h-[200vh] ${className}
      `}
    >
      {/* 画面全体を覆って色調を変化させる固定レイヤー */}
      <motion.div 
        style={{ 
      opacity, 
      // scale,
      clipPath,
      filter: useTransform(blur, (v) => `blur(${v})`)
    }}
        className="fixed inset-0 bg-blue-100 pointer-events-none -z-1 will-change-[opacity,transform,clipPath]"
      />
    </section>
  );
}