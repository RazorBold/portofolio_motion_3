/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Award, CheckCircle, Quote } from 'lucide-react';

export function CompanySection() {
  const testimonials = [
    {
      quote:
        'securify allowed our fintech platform to pass soc2 type ii in 14 days without altering a single postgres schema. the enclave isolation is genuinely revolutionary.',
      author: 'marcus vance',
      role: 'chief security officer',
      company: 'q-crypt global',
    },
    {
      quote:
        'we benchmarked 30,000 requests per second under peak load: p99 latency was 0.38ms. our platform team did not detect any observable performance penalty.',
      author: 'dr. aris thorne',
      role: 'vp infrastructure',
      company: 'apex compute',
    },
    {
      quote:
        'de-identifying clinical trial data for our foundation models used to take days of manual review. securify does it autonomously at wire speed with 100% hipaa compliance.',
      author: 'priya nair',
      role: 'head of medical ai',
      company: 'biolattice labs',
    },
  ];

  const certifications = [
    { name: 'soc2 type ii', detail: 'audited by tier-1 global assurance firm' },
    { name: 'iso / iec 27001', detail: 'continuous information security certification' },
    { name: 'hipaa safe-harbor', detail: 'automated 18-identifier mathematical de-identification' },
    { name: 'fips 140-3 level 4', detail: 'tamper-resistant cryptographic hardware enclaves' },
    { name: 'gdpr & dpa sovereign', detail: 'zero cross-border unencrypted data transmission' },
  ];

  return (
    <section id="company" className="relative w-full bg-transparent py-28 px-6 md:px-10 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full px-4 py-1.5 border border-white/10 text-xs text-white/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>wall of trust</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="hero-title text-white font-medium text-4xl md:text-6xl lg:text-7xl tracking-tight max-w-4xl">
              built by cryptographers. verified by architects.
            </h2>
            <div className="flex items-center gap-3">
              <span className="hidden md:block h-px w-20 bg-white/40 rotate-[20deg]" />
              <p className="text-sm md:text-base text-neutral-400 max-w-xs leading-relaxed">
                trusted by enterprise security leaders defending petabytes of confidential records every hour.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-neutral-950 border border-white/10 p-8 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-white/40 mb-6" />
                <p className="text-sm md:text-[15px] text-neutral-300 leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-white">{item.author}</h4>
                  <p className="text-xs text-neutral-400">{item.role} · {item.company}</p>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Row */}
        <div className="rounded-3xl bg-neutral-900/40 border border-white/10 p-8 md:p-10 backdrop-blur">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 mb-6">
            <Award className="w-4 h-4 text-white" />
            <span>independent security certifications & compliance audits</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="border-l border-white/10 pl-4">
                <span className="text-sm font-medium text-white block mb-1">{cert.name}</span>
                <span className="text-xs text-neutral-400 leading-snug block">{cert.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
