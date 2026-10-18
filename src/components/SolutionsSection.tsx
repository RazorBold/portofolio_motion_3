/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrainCircuit, CreditCard, Stethoscope, Server, ArrowUpRight, Copy, Check } from 'lucide-react';

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState<'ai' | 'fintech' | 'health' | 'devops'>('ai');
  const [copied, setCopied] = useState(false);

  const solutions = [
    {
      id: 'ai',
      icon: BrainCircuit,
      title: 'ai & llm prompt redaction',
      badge: 'zero leakage vector store',
      summary:
        'anonymize conversational prompts and proprietary embeddings before routing to external foundation models.',
      highlights: [
        'automatic pii scrubbing across prompt tokens',
        'confidential rag vector memory enclaves',
        'zero model training on enterprise context',
      ],
      code: `// integrate securify with langchain / openai
import { SecurifyLLMEnclave } from '@securify/sdk';

const shield = new SecurifyLLMEnclave({
  apiKey: process.env.SECURIFY_KEY,
  policy: 'strict_zero_pii'
});

const sanitizedPrompt = await shield.sanitizePrompt(userQuery);
// returns clean prompt with tokenized entities
const response = await aiClient.complete(sanitizedPrompt);
const result = await shield.rehydrateOutput(response);`,
    },
    {
      id: 'fintech',
      icon: CreditCard,
      title: 'fintech & cardholder tokenization',
      badge: 'pci-dss level 1 compliant',
      summary:
        'sub-millisecond cryptographic token stream replacing raw pan, cvv, and banking tokens at ingress.',
      highlights: [
        'format-preserving tokenization (fpe)',
        'seamless payment processor passthrough',
        'reduces pci audit scope by 90%',
      ],
      code: `// fintech transaction token stream
import { TokenVault } from '@securify/fintech';

const vault = new TokenVault({ hsmId: 'dedicated_node_01' });

const { token, fingerprint } = await vault.tokenizeCard({
  pan: rawCardNumber,
  expiry: '08/29',
  cvv: '928'
});

// store 'token' in your database with zero pci exposure
await db.users.update({ paymentToken: token });`,
    },
    {
      id: 'health',
      icon: Stethoscope,
      title: 'healthcare & phi de-identification',
      badge: 'hipaa safe-harbor automated',
      summary:
        'automatic detection and mathematical masking of all 18 hipaa identifiers across unstructured clinical text.',
      highlights: [
        'clinical nlp entity recognition in enclave',
        'safe-harbor de-identification at line-rate',
        'tamper-evident audit trail for hhs inspections',
      ],
      code: `// healthcare safe-harbor de-identification
import { HealthEnclave } from '@securify/health';

const enclave = new HealthEnclave();
const sanitizedRecord = await enclave.maskRecord(patientEHR, {
  method: 'safe_harbor_strict',
  retainClinicalValidity: true
});

console.log(sanitizedRecord.maskedText);
console.log(sanitizedRecord.attestationReport);`,
    },
    {
      id: 'devops',
      icon: Server,
      title: 'devops & multi-cloud secrets',
      badge: 'ephemeral 60s credentials',
      summary:
        'replace static long-lived credentials with micro-enclave dynamic secrets rotated automatically every 60 seconds.',
      highlights: [
        'zero standing privileges (zsp)',
        'instant kill-switch revocation across aws & gcp',
        'ambient identity attestation for microservices',
      ],
      code: `// dynamic secrets generation
import { EphemeralSecrets } from '@securify/devops';

const secrets = new EphemeralSecrets();
const credentials = await secrets.requestLease({
  service: 'analytics_etl_worker',
  ttlSeconds: 60,
  scope: 'readonly_bi_dataset'
});

// credentials expire automatically in 60 seconds
connect(credentials.connectionString);`,
    },
  ];

  const current = solutions.find((s) => s.id === activeTab)!;

  const copyCode = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="solutions" className="relative w-full bg-transparent py-28 px-6 md:px-10 border-b border-white/10 select-none overflow-hidden">
      {/* Generated Enclave Topographic Mesh Backdrop with subtle drift */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, -10, 0],
            y: [0, 8, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/src/assets/images/bg_enclave_mesh_1792329541125.jpg"
            alt="Topographic enclave mesh pattern"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 mix-blend-screen"
          />
        </motion.div>
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80 pointer-events-none" />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full px-4 py-1.5 border border-white/10 text-xs text-white/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>solutions by industry</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="hero-title text-white font-medium text-4xl md:text-6xl lg:text-7xl tracking-tight max-w-4xl">
              tailored for critical infrastructure.
            </h2>
            <div className="flex items-center gap-3">
              <span className="hidden md:block h-px w-20 bg-white/40 rotate-[20deg]" />
              <p className="text-sm md:text-base text-neutral-400 max-w-xs leading-relaxed">
                from llm vector search to high-frequency payment gateways, securify seals the attack surface.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {solutions.map((item) => {
            const Icon = item.icon;
            const isSelected = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id as any)}
                className={`flex flex-col items-start p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 border-white text-white shadow-xl'
                    : 'bg-neutral-950/60 border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium text-white mb-1">{item.title}</span>
                <span className="text-xs text-neutral-400 line-clamp-1">{item.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Detail Box */}
        <div className="rounded-3xl bg-neutral-950 border border-white/10 p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block text-xs uppercase tracking-widest text-neutral-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                {current.badge}
              </div>

              <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
                {current.title}
              </h3>

              <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                {current.summary}
              </p>

              <div className="space-y-3 pt-2">
                {current.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3 text-xs md:text-sm text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-xs text-black bg-white hover:bg-neutral-200 font-medium px-5 py-2.5 rounded-full transition-colors"
                >
                  <span>explore {current.id} deployment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Code Display */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-black border border-white/10 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-neutral-900/40 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="ml-2 font-mono text-white/80">securify-integration.ts</span>
                  </div>

                  <button
                    type="button"
                    onClick={copyCode}
                    className="flex items-center gap-1.5 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1 rounded-full transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'copied' : 'copy code'}</span>
                  </button>
                </div>

                <pre className="p-5 font-mono text-xs text-neutral-300 overflow-x-auto leading-relaxed">
                  <code>{current.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
