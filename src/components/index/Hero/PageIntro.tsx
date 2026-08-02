"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import crystal1 from '@/assets/images/crystal_1.avif';
import crystal2 from '@/assets/images/crystal_2.avif';
import crystal3 from '@/assets/images/crystal_3.avif';
import crystal4 from '@/assets/images/crystal_4.avif';
import crystal5 from '@/assets/images/crystal_5.avif';
import crystal6 from '@/assets/images/crystal_6.avif';
import crystal7 from '@/assets/images/crystal_7.avif';

import ciLogo from '@/assets/images/logo_ci.avif';

const crystalImages = [crystal1, crystal2, crystal3, crystal4, crystal5, crystal6, crystal7];

export default function PageIntro() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const hasVisited = sessionStorage.getItem('has_visited_hero_intro');

    if (hasVisited) {
      setIsFirstVisit(false);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      return () => {
        setIsLoading(false);
        window.removeEventListener('resize', checkMobile);
      };
    } else {
      sessionStorage.setItem('has_visited_hero_intro', 'true');
      setIsFirstVisit(true);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3500);

      return () => {
        setIsLoading(false);
        window.removeEventListener('resize', checkMobile);
      };
    }
  }, []);

  const currentIsMobile = isMounted ? isMobile : false;

  // 【さらに軽量化】スマホなら思い切って 15個、PCなら豪華な 55個
  const particleCount = currentIsMobile ? 15 : 55;

  const items = Array.from({ length: particleCount }).map((_, i) => {
    const randomImage = crystalImages[Math.floor(Math.random() * crystalImages.length)];
    const angle = (i / particleCount) * Math.PI * 2 + (Math.random() * 0.3);
    const distance = currentIsMobile ? (140 + Math.random() * 200) : (200 + Math.random() * 550); 
    
    return {
      id: i,
      image: randomImage,
      targetX: Math.cos(angle) * distance,
      targetY: Math.sin(angle) * distance,
      // スマホは数が少ない分、サイズを少し大きめにして寂しさをカバー
      size: currentIsMobile ? (32 + Math.random() * 32) : (32 + Math.random() * 63),
      duration: 2.8 + Math.random() * 1.0,
      delay: i * 0.03, // わずかに遅延を広げてバランス調整
      initialRotation: currentIsMobile ? 0 : (Math.random() * 360),
    };
  });

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.0, ease: "easeInOut" }
          }}
// 【対策】Chromeのホイールイベントのスタックを防ぐため、touch-actionやuser-selectも切る
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f172a] overflow-hidden pointer-events-none select-none"
          style={{ touchAction: 'none' }}
        >
          {isFirstVisit && (
            <>
              {/* 中央の光のコア */}
              {!currentIsMobile && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 3.0, 6], opacity: [0, 0.8, 0] }}
                  transition={{ duration: 3.0, ease: "easeOut" }}
                  className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#aac3fd]/40 via-[#e3d85c]/40 to-transparent blur-3xl"
                />
              )}

              <div className="relative flex items-center justify-center">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{
                      x: 0,
                      y: 0,
                      scale: 0,
                      opacity: 0,
                      rotate: currentIsMobile ? 0 : item.initialRotation,
                    }}
                    animate={{
                      x: item.targetX,
                      y: item.targetY,
                      scale: [0, 1.2, 1],
                      opacity: [0, 1, 0.9, 0],
                      rotate: currentIsMobile ? 0 : (item.initialRotation + 120),
                    }}
                    transition={{
                      duration: item.duration,
                      delay: item.delay,
                      ease: [0.25, 1, 0.5, 1], 
                    }}
                    style={{
                      position: 'absolute',
                      width: `${item.size}px`,
                      height: `${item.size}px`,
                    }}
                  >
                    <img
                      src={item.image.src}
                      alt="Crystal Particle"
                      className={`w-full h-full object-contain ${
                        currentIsMobile 
                          ? '' 
                          : 'filter drop-shadow-[0_0_14px_rgba(170,195,253,0.7)]'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>

              {/* 中央のCIロゴ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: [0, 1, 1, 0], 
                  scale: [0.9, 1.0, 1.0, 1.0], 
                }}
                transition={{ 
                  duration: 3.0, 
                  times: [0, 0.25, 0.75, 1], 
                  ease: "easeOut" 
                }}
                className="absolute z-10 flex items-center justify-center px-4 w-full max-w-[320px] md:max-w-[500px]"
              >
                <img 
                  src={ciLogo.src} 
                  alt="CI Logo" 
                  className="w-full h-auto object-contain filter drop-shadow-[0_0_16px_rgba(255,255,255,0.4)]" 
                />
              </motion.div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}