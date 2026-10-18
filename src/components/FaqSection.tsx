/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'how does securify differ from database encryption at rest?',
      a: 'standard transparent database encryption (tde) only protects against stolen hard drives; plaintext remains completely exposed in server ram, query logs, and to database administrators. securify processes and tokenizes sensitive payloads inside hardware-isolated confidential enclaves (amd sev-snp and intel sgx) where neither cloud providers nor root operating systems can inspect the memory.',
    },
    {
      q: 'what is the real-world latency overhead of enclave tokenization?',
      a: 'our rust-based enclave micro-nodes maintain a sustained p99 latency of under 0.38 milliseconds. in high-frequency fintech payment streams and real-time llm inference pipelines, securify operates at wire speed with zero discernible user delay.',
    },
    {
      q: 'can we deploy securify inside our private cloud or sovereign on-prem servers?',
      a: 'yes. while our global managed cloud offers 24 low-latency regions, enterprise plans support hybrid and sovereign air-gapped deployments. you can run our enclave binaries directly in aws nitro enclaves, gcp confidential vms, azure confidential compute, or on-premise hardware security modules.',
    },
    {
      q: 'is securify truly quantum-resistant against future attacks?',
      a: 'yes. securify implements nist post-quantum standards (fips 203 ml-kem kyber-1024 and fips 204 ml-dsa dilithium) in a dual-hybrid cipher mode alongside classical aes-256-gcm-siv. this neutralizes adversaries executing "harvest now, decrypt later" campaigns.',
    },
    {
      q: 'how long does engineering integration take?',
      a: 'most teams deploy their first protected stream in under 15 minutes. we provide lightweight type-safe sdks for typescript/node, python, go, and java, as well as an envoy/kubernetes transparent sidecar that intercepts and tokenizes payloads without touching your application code.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="support" className="relative w-full bg-transparent py-28 px-6 md:px-10 border-b border-white/10 select-none">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full px-4 py-1.5 border border-white/10 text-xs text-white/80 mb-6">
            <HelpCircle className="w-3.5 h-3.5 text-white" />
            <span>frequently asked questions</span>
          </div>

          <h2 className="hero-title text-white font-medium text-4xl md:text-6xl tracking-tight mb-4">
            everything you need to know.
          </h2>
          <p className="text-sm md:text-base text-neutral-400 max-w-xl mx-auto">
            clear answers on cryptographic enclaves, latency benchmarks, and enterprise integrations.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-950 border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-900/40 transition-colors"
                >
                  <span className="text-base md:text-lg font-medium text-white tracking-tight">
                    {faq.q}
                  </span>
                  <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-neutral-300 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-medium text-white">have bespoke compliance or security requirements?</h4>
            <p className="text-xs text-neutral-400 mt-0.5">our cryptographic engineering team is available for technical deep dives.</p>
          </div>
          <a
            href="#pricing"
            className="text-xs bg-white text-black hover:bg-neutral-200 px-5 py-2.5 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer"
          >
            talk to cryptographers
          </a>
        </div>
      </div>
    </section>
  );
}
