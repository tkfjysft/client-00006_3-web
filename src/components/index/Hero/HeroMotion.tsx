"use client";

import { motion } from 'framer-motion';

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
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* 左側のタイトルエリア：上から、あるいは左からふんわり出現 */}
      <div className="absolute top-[12%] sm:top-[35%] left-6 md:left-20 z-20 w-[90%] md:w-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start space-y-4"
        >
          <p className="w-fit txt-shadow text-white/90 font-serif tracking-[0.1em] sm:tracking-[0.3em] uppercase text-sm md:text-base font-medium bg-black/20 backdrop-blur-[2px] px-3 py-1 rounded-lg">
            {heroSub}
          </p>
          <h1 className="txt-shadow text-white font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]" dangerouslySetInnerHTML={{ __html: heroTitle }} /> 
        </motion.div>
      </div>

      {/* 右側の説明文＆ボタンエリア：少し遅れて（Stagger）ふんわり出現 */}
      <div className="absolute bottom-[4%] right-6 md:right-20 z-20 pl-20 md:pl-40 flex flex-col items-end text-left">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-end"
        >
          <div className="txt-shadow text-white/90 text-base md:text-lg leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] text-right" dangerouslySetInnerHTML={{ __html: heroDescription }} />
          <div className="pt-6">
            <a href={contactUrl} className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40 px-10 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:scale-105 duration-300">
              <span className="font-semibold tracking-widest">{buttonText}</span>
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}