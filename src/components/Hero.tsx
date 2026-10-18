/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-transparent select-none">
      {/* Background ambient texture layer under the video */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-full h-full"
        >
          <img
            src="/src/assets/images/bg_crypto_lattice_1792329539956.jpg"
            alt="Cryptographic lattice hero texture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-45 mix-blend-screen"
          />
        </motion.div>
      </div>

      {/* Background video blended over the motion lattice */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-75 mix-blend-screen"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
      />

      {/* Foreground content wrapper */}
      <div className="relative h-full w-full pointer-events-none">
        {/* Giant staggered headline words with subtle reveal motion */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-4 md:left-10 top-[18%]"
        >
          protect
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] right-4 md:right-10 top-[38%]"
        >
          your
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-[18%] md:left-[28%] top-[58%]"
        >
          data
        </motion.h1>

        {/* Description paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute left-6 md:left-10 top-[46%] max-w-[240px] text-[15px] leading-snug text-white/90"
        >
          we can guarding your data with utmost care, empowering you with privacy everywhere
        </motion.p>

        {/* Stat block — top-right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute right-6 md:right-24 top-[14%]"
        >
          <div className="flex items-center gap-3 justify-end">
            <span className="hidden md:block h-px w-24 bg-white/40 rotate-[20deg]" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">+65k</span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1 text-right">startups use</p>
        </motion.div>

        {/* Stat block — bottom-left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute left-6 md:left-20 bottom-20 md:bottom-24"
        >
          <div className="flex items-center gap-3">
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">+1.5b</span>
            <span className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1">gb data was protected</p>
        </motion.div>

        {/* Stat block — bottom-right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute right-6 md:right-20 bottom-16 md:bottom-20"
        >
          <div className="flex items-center gap-3 justify-end">
            <span className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">+300k</span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1 text-right">downloads</p>
        </motion.div>

        {/* Bottom scroll prompt indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto">
          <a
            href="#telemetry"
            className="flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors bg-neutral-900/60 backdrop-blur px-4 py-1.5 rounded-full border border-white/10 group"
          >
            <span>explore platform</span>
            <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>

        {/* Bottom gradient overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />
      </div>
    </section>
  );
}
