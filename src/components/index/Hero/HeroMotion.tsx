"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image } from 'astro:assets';
import PageIntro from './PageIntro';
import radianceImage from '@/assets/images/radiance_second.avif';

interface HeroMotionProps {
  heroSub: string;
  heroTitle: string;
  heroDescription: string;
  buttonText: string;
  contactUrl: string;
}

export default function HeroMotion({
  heroSub,
  heroTitle,
  heroDescription,
  buttonText,
  contactUrl
}: HeroMotionProps) {

	const [delayFactor, setDelayFactor] = useState(() => {
		// クライアントサイド（ブラウザ環境）かどうかの安全ガード
		if (typeof window === 'undefined') return 0;

		const hasSeenIntro = sessionStorage.getItem('has_seen_intro');
		if (hasSeenIntro) {
		// 2回目以降（すでに見たことがある）
		return 0; 
		} else {
		// 初回（まだ見たことがない）
		sessionStorage.setItem('has_seen_intro', 'true');
		return 4; // 初回のみ4秒のタメ
		}
	});

  return (
    <>
      {/* ─── 初回限定オープニング演出 ─── */}
      <PageIntro />

    <section className="relative w-full h-screen overflow-hidden">


      {/* 左側のタイトルエリア */}
      <div className="absolute top-[12%] sm:top-[35%] left-6 md:left-20 z-20 w-[90%] md:w-auto">
        <div className="flex flex-col items-start space-y-4">
          
          {/* サブタイトル */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.8 + delayFactor, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="w-fit txt-shadow text-white/90 font-serif tracking-[0.1em] sm:tracking-[0.3em] uppercase text-sm md:text-base font-medium bg-black/20 backdrop-blur-[2px] px-3 py-1 rounded-lg">
              {heroSub}
            </p>
          </motion.div>

          {/* メインタイトル */}
          <motion.div
            initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.3, delay: 1.0 + delayFactor, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 
              className="txt-shadow text-white font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]" 
              dangerouslySetInnerHTML={{ __html: heroTitle }} 
            /> 
          </motion.div>

        </div>
      </div>

      {/* 右側の説明文＆ボタンエリア */}
      <div className="absolute bottom-[4%] right-6 md:right-20 z-20 pl-20 md:pl-40 flex flex-col items-end text-left">
        <div className="flex flex-col items-end">
          
          {/* 説明文 */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.3, delay: 1.2 + delayFactor, ease: [0.22, 1, 0.36, 1] }}
          >
            <div 
              className="txt-shadow text-white/90 text-base md:text-lg leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] text-right" 
              dangerouslySetInnerHTML={{ __html: heroDescription }} 
            />
          </motion.div>
          
          {/* ボタン */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.4 + delayFactor, ease: [0.22, 1, 0.36, 1] }}
            className="pt-6"
          >
            <a 
              href={contactUrl} 
              className="inline-flex items-center bg-clr-main-1/80 hover:bg-white/30 text-white border border-white/40 px-10 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <span className="font-semibold tracking-widest">{buttonText}</span>
            </a>
          </motion.div>

        </div>
      </div>

    </section>
    </>
  );
}