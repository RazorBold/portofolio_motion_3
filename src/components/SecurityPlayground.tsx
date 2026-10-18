/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Terminal, Zap, Shield, KeyRound, RefreshCw } from 'lucide-react';

export function SecurityPlayground() {
  const [mode, setMode] = useState<'tokenize' | 'mask' | 'zkp' | 'quantum'>('tokenize');
  const [copied, setCopied] = useState(false);
  const inputId = useId();

  const presets = [
    {
      label: 'credit card & cvv',
      value: '4532-8921-9940-1289 exp: 08/29 cvv: 928 name: "Elena Vance"',
    },
    {
      label: 'healthcare phi record',
      value: 'patient: John Doe (DOB 1982-04-12), SSN: 092-44-1293, Diagnosis: ICD-10-CM Type 2 Diabetes',
    },
    {
      label: 'production db & api key',
      value: 'DATABASE_URL="postgres://admin:sk_live_99d1fa98bc201@vault.internal:5432/core"',
    },
    {
      label: 'ai prompt & sensitive query',
      value: 'summarize medical history of patient #8912 who took 50mg sertraline with allergic reactions',
    },
  ];

  const [inputVal, setInputVal] = useState(presets[0].value);

  // Compute realistic mock transformation based on mode
  const getTransformedResult = () => {
    if (mode === 'tokenize') {
      return JSON.stringify(
        {
          status: 'tokenized_success',
          algorithm: 'securify_vault_format_preserving',
          entropy: '256-bit AES-GCM-SIV',
          tokens: {
            account_ref: 'tok_live_8f01b9ca92e01',
            fingerprint: 'sha3_512:c0f81a729e1...',
            reversible_by_enclave_only: true,
          },
          latency_ms: 0.28,
        },
        null,
        2
      );
    }
    if (mode === 'mask') {
      return JSON.stringify(
        {
          status: 'redacted_line_rate',
          policy: 'hipaa_safe_harbor_strict',
          sanitized_text: inputVal
            .replace(/\d{4}-\d{4}-\d{4}-\d{4}/g, '****-****-****-1289')
            .replace(/\d{3}-\d{2}-\d{4}/g, '***-**-****')
            .replace(/cvv:\s*\d+/gi, 'cvv: [REDACTED]')
            .replace(/John Doe/gi, '[PATIENT_ANONYMIZED_01]')
            .replace(/sk_live_[a-zA-Z0-9]+/g, 'sk_vault_******************'),
          compliance: '100% compliant',
          latency_ms: 0.19,
        },
        null,
        2
      );
    }
    if (mode === 'zkp') {
      return JSON.stringify(
        {
          status: 'zk_snark_proof_generated',
          curve: 'BN254_Groth16',
          public_inputs: ['0x1e8a992b10', '0x99201fa811'],
          proof_witness: {
            pi_a: ['0x1992a0...', '0x09bc21...'],
            pi_b: [['0x771a...', '0x921b...'], ['0x33b1...', '0x00fa...']],
            pi_c: ['0xfa9102...', '0x8812c9...'],
          },
          attestation: 'data_valid_without_revealing_underlying_values',
          latency_ms: 0.44,
        },
        null,
        2
      );
    }
    return JSON.stringify(
      {
        status: 'post_quantum_sealed',
        cipher: 'NIST_FIPS_203_ML_KEM_1024',
        shared_secret_hash: 'pq_lattice_0x8fba1024982a...',
        quantum_resistance_rating: 'Level 5 (Exceeds AES-256 equivalent)',
        hardware_enclave_bound: true,
        latency_ms: 0.35,
      },
      null,
      2
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getTransformedResult());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full bg-transparent py-28 px-6 md:px-10 border-b border-white/10 select-none overflow-hidden">
      {/* Generated Silicon wafer contour backdrop with subtle motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1.02, 1, 1.02],
            rotate: [0, 0.5, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/src/assets/images/bg_silicon_contour_1792329540584.jpg"
            alt="Silicon wafer microchip contour pattern"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 mix-blend-screen"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full px-4 py-1.5 border border-white/10 text-xs text-white/80 mb-6">
            <Zap className="w-3.5 h-3.5 text-white" />
            <span>interactive security sandbox</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="hero-title text-white font-medium text-4xl md:text-6xl lg:text-7xl tracking-tight max-w-3xl">
              test live tokenization. zero latency.
            </h2>
            <div className="flex items-center gap-3">
              <span className="hidden md:block h-px w-20 bg-white/40 rotate-[-20deg]" />
              <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
                experience how securify intercepts and sanitizes payload streams at wire speed.
              </p>
            </div>
          </div>
        </div>

        {/* Playground Container */}
        <div className="rounded-3xl bg-neutral-950 border border-white/10 overflow-hidden shadow-2xl">
          {/* Top toolbar */}
          <div className="p-4 md:p-6 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-neutral-900/30">
            {/* Mode selector pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                type="button"
                onClick={() => setMode('tokenize')}
                className={`text-xs px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  mode === 'tokenize'
                    ? 'bg-white text-black font-medium border-white'
                    : 'bg-neutral-900 text-neutral-400 border-white/10 hover:text-white'
                }`}
              >
                deterministic tokenization
              </button>
              <button
                type="button"
                onClick={() => setMode('mask')}
                className={`text-xs px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  mode === 'mask'
                    ? 'bg-white text-black font-medium border-white'
                    : 'bg-neutral-900 text-neutral-400 border-white/10 hover:text-white'
                }`}
              >
                pii masking
              </button>
              <button
                type="button"
                onClick={() => setMode('zkp')}
                className={`text-xs px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  mode === 'zkp'
                    ? 'bg-white text-black font-medium border-white'
                    : 'bg-neutral-900 text-neutral-400 border-white/10 hover:text-white'
                }`}
              >
                zero-knowledge proof
              </button>
              <button
                type="button"
                onClick={() => setMode('quantum')}
                className={`text-xs px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  mode === 'quantum'
                    ? 'bg-white text-black font-medium border-white'
                    : 'bg-neutral-900 text-neutral-400 border-white/10 hover:text-white'
                }`}
              >
                post-quantum seal
              </button>
            </div>

            {/* Presets */}
            <div className="flex items-center gap-2 overflow-x-auto text-xs text-neutral-400">
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider shrink-0">presets:</span>
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setInputVal(preset.value)}
                  className="bg-black/80 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white/80 hover:text-white px-3 py-1.5 rounded-full transition-colors whitespace-nowrap cursor-pointer text-xs"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Dual Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Input Panel */}
            <div className="p-6 md:p-8 flex flex-col justify-between h-full bg-black/40">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label htmlFor={inputId} className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    raw payload stream (input)
                  </label>
                  <span className="text-[11px] text-white/40">editable in real-time</span>
                </div>

                <textarea
                  id={inputId}
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  rows={8}
                  className="w-full bg-neutral-900/60 border border-white/10 focus:border-white/40 rounded-2xl p-4 text-sm font-mono text-white/90 outline-none resize-none transition-colors leading-relaxed selection:bg-white selection:text-black"
                  placeholder="type sensitive data here..."
                />
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-white/60" />
                  ephemeral browser isolation
                </span>
                <span>{inputVal.length} bytes</span>
              </div>
            </div>

            {/* Output Panel */}
            <div className="p-6 md:p-8 flex flex-col justify-between h-full bg-black/80">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-white/80" />
                    enclave sanitized output (protected)
                  </span>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-xs text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1 rounded-full transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'copied' : 'copy json'}</span>
                  </button>
                </div>

                <div className="bg-neutral-950 border border-white/10 rounded-2xl p-4 font-mono text-xs text-neutral-300 min-h-[200px] overflow-x-auto leading-relaxed whitespace-pre">
                  {getTransformedResult()}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 text-neutral-400">
                  <span className="text-white/80 font-medium">zero key retention</span>
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  <span>hardware attested</span>
                </div>
                <span className="text-white/60 font-mono">latency: ~0.28ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
