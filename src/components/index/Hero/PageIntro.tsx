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

const TOTAL_PARTICLES = 55;

const items = Array.from({ length: TOTAL_PARTICLES }).map((_, i) => {
  const randomImage = crystalImages[Math.floor(Math.random() * crystalImages.length)];
  const angle = (i / TOTAL_PARTICLES) * Math.PI * 2 + (Math.random() * 0.3);
  const distance = 200 + Math.random() * 550; 
  
  return {
    id: i,
    image: randomImage,
    targetX: Math.cos(angle) * distance,
    targetY: Math.sin(angle) * distance,
    size: 32 + Math.random() * 63,
    duration: 2.8 + Math.random() * 1.0,
    delay: i * 0.02,
    initialRotation: Math.random() * 360,
  };
});

export default function PageIntro() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('has_visited_hero_intro');

    if (hasVisited) {
      setIsFirstVisit(false);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      sessionStorage.setItem('has_visited_hero_intro', 'true');
      setIsFirstVisit(true);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.0, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f172a] overflow-hidden pointer-events-none"
        >
          {isFirstVisit && (
            <>
              {/* 中央の光のコア */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 3.0, 6], opacity: [0, 0.8, 0] }}
                transition={{ duration: 3.0, ease: "easeOut" }}
                className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#aac3fd]/40 via-[#e3d85c]/40 to-transparent blur-3xl"
              />

              <div className="relative flex items-center justify-center">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{
                      x: 0,
                      y: 0,
                      scale: 0,
                      opacity: 0,
                      rotate: item.initialRotation,
                    }}
                    animate={{
                      x: item.targetX,
                      y: item.targetY,
                      scale: [0, 1.2, 1],
                      opacity: [0, 1, 0.9, 0],
                      rotate: item.initialRotation + 120,
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
                      className="w-full h-full object-contain filter drop-shadow-[0_0_14px_rgba(170,195,253,0.7)]"
                    />
                  </motion.div>
                ))}
              </div>

              {/* 中央のCIロゴ：無駄な揺れをなくし、素直に拡大して消える動き */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: [0, 1, 1, 0], 
                  scale: [0.9, 1.0, 1.0, 1.0], // 0.9から1.0へ素直に拡大してそのままキープ
                }}
                transition={{ 
                  duration: 3.0, 
                  times: [0, 0.25, 0.75, 1], 
                  ease: "easeOut" 
                }}
                className="absolute z-10 flex items-center justify-center px-4 w-full max-w-[500px]"
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