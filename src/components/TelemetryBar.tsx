/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ShieldCheck, Activity, Lock, Cpu, Globe } from 'lucide-react';

export function TelemetryBar() {
  const [throughput, setThroughput] = useState(48.2);
  const [threatCount, setThreatCount] = useState(184204);

  // Subtle live telemetry pulse simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setThroughput((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
      if (Math.random() > 0.4) {
        setThreatCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
      }
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const partners = [
    'hypervault',
    'q-crypt systems',
    'neobank global',
    'apex compute',
    'sentinel ai',
    'krypton core',
    'vanguard defense',
    'lattice dynamics',
  ];

  return (
    <div id="telemetry" className="relative w-full bg-black/40 backdrop-blur-sm border-y border-white/10 py-10 select-none">
      {/* Partner Marquee */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-xs uppercase tracking-widest text-neutral-500 font-medium text-center mb-6">
          trusted by security architects and mission-critical engineering teams
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-neutral-400 font-medium text-sm md:text-base">
          {partners.map((partner) => (
            <span
              key={partner}
              className="flex items-center gap-2 hover:text-white transition-colors cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              {partner}
            </span>
          ))}
        </div>
      </div>

      {/* Live Telemetry Metrics Bar */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-6 rounded-2xl bg-neutral-900/40 border border-white/10 backdrop-blur">
          {/* Item 1 */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Activity className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-medium text-white tracking-tight">
                  {throughput} <span className="text-xs text-white/60 font-normal">gb/s</span>
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
              </div>
              <p className="text-xs text-neutral-400">live encrypted throughput</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Cpu className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-medium text-white tracking-tight">
                0.38 <span className="text-xs text-white/60 font-normal">ms</span>
              </span>
              <p className="text-xs text-neutral-400">p99 confidential enclave latency</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-medium text-white tracking-tight">
                {threatCount.toLocaleString()}
              </span>
              <p className="text-xs text-neutral-400">threat payloads neutralized</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Globe className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-medium text-white tracking-tight">
                0 <span className="text-xs text-white/60 font-normal">breaches</span>
              </span>
              <p className="text-xs text-neutral-400">24 sovereign regions online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
