/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Lock, Cpu, EyeOff, Terminal, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export function PlatformSection() {
  const [activeStage, setActiveStage] = useState(1);

  const pillars = [
    {
      index: '01',
      title: 'post-quantum lattice vault',
      tag: 'kyber-1024 / dilithium',
      icon: Lock,
      description:
        'nist-standardized post-quantum lattice algorithms guard every byte against current threats and harvest-now-decrypt-later attacks.',
      specs: ['fips 203 & 204 compliant', 'zero key leakage', '128-bit quantum security floor'],
    },
    {
      index: '02',
      title: 'confidential compute enclaves',
      tag: 'amd sev-snp · intel sgx',
      icon: Cpu,
      description:
        'data is decrypted and processed exclusively inside silicon-enforced memory bubbles. neither cloud admins nor root hosts can view runtime memory.',
      specs: ['hardware-root-of-trust', 'sub-millisecond overhead', 'ephemeral runtime memory'],
    },
    {
      index: '03',
      title: 'autonomous exfiltration sentry',
      tag: 'sub-ms heuristic shield',
      icon: Shield,
      description:
        'continuous zero-overhead packet heuristics analyze egress payloads at line rate, neutralizing unauthorized data exfiltration before packets cross the wire.',
      specs: ['line-rate deep inspection', 'zero false positive model', 'instant quarantine mode'],
    },
    {
      index: '04',
      title: 'cryptographic audit mesh',
      tag: 'zero-knowledge proofing',
      icon: EyeOff,
      description:
        'automated immutable ledger proofing logs every access event with zero-knowledge attestations, making compliance audits instant and continuous.',
      specs: ['soc2 & hipaa automated proofs', 'tamper-evident merkle tree', 'provable non-repudiation'],
    },
  ];

  const pipelineStages = [
    {
      step: 1,
      title: 'ingress & verification',
      subtitle: 'client payload lands on the border gateway with signed identity headers.',
      payload: '{ "actor": "client_svc", "payload": "raw_sensitive_patient_data_3892", "verified": true }',
    },
    {
      step: 2,
      title: 'isolated enclave boot',
      subtitle: 'ephemeral hardware enclave initializes in protected silicon memory.',
      payload: '[enclave::init] hardware attestation verified. enclave hash: 0x9f88a2... memory locked.',
    },
    {
      step: 3,
      title: 'homomorphic tokenization',
      subtitle: 'sensitive identifiers masked without forfeiting query ability.',
      payload: '{ "token": "tok_sec_99a820b4c810d291", "entropy": "256-bit", "phi_masked": true }',
    },
    {
      step: 4,
      title: 'attested sovereign egress',
      subtitle: 'zk-proof generated and payload safely routed to database storage.',
      payload: '{ "status": "200_ok", "zk_proof": "zk_attest_712903fe", "latency_ms": 0.34 }',
    },
  ];

  return (
    <section id="platform" className="relative w-full bg-transparent py-28 px-6 md:px-10 border-b border-white/10 select-none overflow-hidden">
      {/* Generated cryptographic lattice background with subtle floating motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/src/assets/images/bg_crypto_lattice_1792329539956.jpg"
            alt="Cryptographic lattice background pattern"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
        </motion.div>
        {/* Soft radial fade to maintain strict readability */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80 pointer-events-none" />
      </div>

      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neutral-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full px-4 py-1.5 border border-white/10 text-xs text-white/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>architecture overview</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="hero-title text-white font-medium text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-4xl">
              autonomous security. zero trust.
            </h2>
            <div className="flex items-center gap-3">
              <span className="hidden md:block h-px w-20 bg-white/40 rotate-[20deg]" />
              <p className="text-sm md:text-base text-neutral-400 max-w-xs leading-relaxed">
                distributed cryptographic enclaves running on edge silicon with zero key exposure.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Architecture Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.index}
                className="group relative rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/30 p-8 md:p-10 transition-all duration-300 hover:bg-neutral-900/60"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-white/50">{pillar.index}</span>
                    <span className="h-px w-6 bg-white/20" />
                    <span className="text-xs text-white/70 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {pillar.tag}
                    </span>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-[15px] text-neutral-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="border-t border-white/5 pt-6 flex flex-wrap gap-2">
                  {pillar.specs.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center gap-1.5 text-xs text-neutral-300 bg-black/60 px-3 py-1.5 rounded-full border border-white/5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-white" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Enclave Pipeline Simulator */}
        <div className="rounded-3xl bg-neutral-950 border border-white/10 p-6 md:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 mb-2">
                <Layers className="w-4 h-4 text-white" />
                <span>real-time enclave execution flow</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                how a request travels through securify
              </h4>
            </div>

            {/* Step navigation buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              {pipelineStages.map((stage) => (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStage(stage.step)}
                  className={`text-xs px-4 py-2 rounded-full border transition-all cursor-pointer ${
                    activeStage === stage.step
                      ? 'bg-white text-black font-medium border-white'
                      : 'bg-neutral-900 text-neutral-400 border-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  step 0{stage.step}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-white/50">
                stage 0{pipelineStages[activeStage - 1].step} / 04
              </span>
              <h5 className="text-xl md:text-2xl font-medium text-white tracking-tight">
                {pipelineStages[activeStage - 1].title}
              </h5>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {pipelineStages[activeStage - 1].subtitle}
              </p>

              <div className="pt-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setActiveStage((prev) => (prev % 4) + 1)}
                  className="inline-flex items-center gap-2 text-xs text-white bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full transition-colors cursor-pointer"
                >
                  <span>step next stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs text-neutral-500">continuous hardware verification</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-black border border-white/10 p-5 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-neutral-500">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-white/70" />
                    <span className="text-white/80">enclave.telemetry.stream</span>
                  </div>
                  <span className="text-[11px] text-white/40">latency: 0.34ms</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-x-auto text-neutral-300 whitespace-pre-wrap leading-relaxed"
                  >
                    {pipelineStages[activeStage - 1].payload}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
