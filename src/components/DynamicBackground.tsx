/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThreeCryptoScene } from './ThreeCryptoScene';
import { Sparkles, Layers, Cpu, Compass, Eye, ChevronUp, ChevronDown } from 'lucide-react';

export type BgPattern = 'quantum-3d' | 'crypto-lattice' | 'enclave-topo' | 'silicon-matrix';

interface DynamicBackgroundProps {
  currentPattern: BgPattern;
  onSelectPattern: (pattern: BgPattern) => void;
}

export function DynamicBackground({ currentPattern, onSelectPattern }: DynamicBackgroundProps) {
  const [dockOpen, setDockOpen] = useState(true);

  const patterns = [
    {
      id: 'quantum-3d' as BgPattern,
      label: '3d quantum lattice',
      icon: Sparkles,
      desc: 'three.js procedural enclave & particle constellation',
    },
    {
      id: 'crypto-lattice' as BgPattern,
      label: 'cryptographic wireframe',
      icon: Layers,
      desc: 'geometric isometric titanium lattice texture',
    },
    {
      id: 'enclave-topo' as BgPattern,
      label: 'topographic mesh',
      icon: Compass,
      desc: 'architectural elevation contour scanlines',
    },
    {
      id: 'silicon-matrix' as BgPattern,
      label: 'silicon wafer matrix',
      icon: Cpu,
      desc: 'microchip confidential circuit substrate',
    },
  ];

  return (
    <>
      {/* Background Render Layer (Fixed Fullscreen) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base dark ambient gradient */}
        <div className="absolute inset-0 bg-neutral-950" />

        {/* Dynamic Pattern Switcher */}
        <AnimatePresence mode="wait">
          {currentPattern === 'quantum-3d' && (
            <motion.div
              key="quantum-3d"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full"
            >
              <ThreeCryptoScene />
              <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/85" />
            </motion.div>
          )}

          {currentPattern === 'crypto-lattice' && (
            <motion.div
              key="crypto-lattice"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Animated generated texture */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src="/src/assets/images/bg_crypto_lattice_1792329539956.jpg"
                  alt="Cryptographic lattice texture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-55 mix-blend-screen"
                />
              </motion.div>

              {/* Moving scanning beam */}
              <motion.div
                animate={{
                  y: ['-100%', '200%'],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
              />

              <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/80" />
            </motion.div>
          )}

          {currentPattern === 'enclave-topo' && (
            <motion.div
              key="enclave-topo"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full"
            >
              <motion.div
                animate={{
                  x: [0, -25, 0],
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src="/src/assets/images/bg_enclave_mesh_1792329541125.jpg"
                  alt="Topographic enclave mesh"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-50 mix-blend-screen"
                />
              </motion.div>

              <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80" />
            </motion.div>
          )}

          {currentPattern === 'silicon-matrix' && (
            <motion.div
              key="silicon-matrix"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full"
            >
              <motion.div
                animate={{
                  scale: [1.02, 1, 1.02],
                  rotate: [0, 0.4, 0],
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src="/src/assets/images/bg_silicon_contour_1792329540584.jpg"
                  alt="Silicon microchip wafer matrix"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-45 mix-blend-screen"
                />
              </motion.div>

              <div className="absolute inset-0 bg-radial from-transparent via-black/35 to-black/80" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global architectural dot grid pattern for high-end tactile finish */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Floating Pattern Switcher Dock (Unified Bottom Dock) */}
      <aside aria-label="Background theme controls" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 select-none">
        <div className="flex flex-col items-center">
          {/* Collapse/Expand Toggle Button */}
          <button
            type="button"
            onClick={() => setDockOpen(!dockOpen)}
            className="mb-2 bg-neutral-900/90 hover:bg-neutral-800 text-white/70 hover:text-white px-3 py-1 rounded-full border border-white/10 text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer shadow-lg backdrop-blur"
          >
            <Eye className="w-3 h-3" />
            <span>background pattern</span>
            {dockOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
          </button>

          {/* Interactive Pattern Dock */}
          <AnimatePresence>
            {dockOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="bg-neutral-900/95 backdrop-blur-xl border border-white/20 p-1.5 rounded-full shadow-2xl flex items-center gap-1 max-w-[95vw] overflow-x-auto"
              >
                {patterns.map((item) => {
                  const Icon = item.icon;
                  const isSelected = currentPattern === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onSelectPattern(item.id)}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer whitespace-nowrap ${
                        isSelected
                          ? 'bg-white text-black font-medium shadow-md scale-100'
                          : 'text-neutral-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </aside>
    </>
  );
}
