/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectTier: (tierName: string) => void;
}

export function PricingSection({ onSelectTier }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');

  const tiers = [
    {
      name: 'developer',
      badge: 'for prototype & testing',
      priceMonthly: 0,
      priceAnnually: 0,
      description: 'essential cryptographic primitives for developers evaluating confidential compute.',
      features: [
        '50 gb monthly protected throughput',
        '1 isolated memory enclave node',
        'format-preserving tokenization (fpe)',
        'standard rest & grpc client sdk',
        'community discord & github support',
        '99.9% availability sla',
      ],
      cta: 'start free',
      highlighted: false,
    },
    {
      name: 'scale',
      badge: 'most chosen by teams',
      priceMonthly: 79,
      priceAnnually: 63,
      description: 'high-throughput confidential micro-enclaves for production apps and growing SaaS.',
      features: [
        '2 tb monthly protected throughput',
        'multi-region enclaves (us, eu, apac)',
        'post-quantum lattice encryption (kyber-1024)',
        'autonomous exfiltration sentry heuristics',
        'automated soc2 & hipaa audit telemetry',
        '99.99% uptime guarantee with slack channel',
      ],
      cta: 'deploy scale',
      highlighted: true,
    },
    {
      name: 'enterprise',
      badge: 'mission-critical & banks',
      priceMonthly: null,
      priceAnnually: null,
      description: 'dedicated hardware security modules and bespoke cryptographic enclaves.',
      features: [
        'unlimited encrypted throughput',
        'dedicated fips 140-3 level 4 hsms',
        'on-premise hybrid cloud enclave nodes',
        'bring-your-own-keys (byok) with zero knowledge',
        '24/7 dedicated cryptographer response (<15m)',
        'custom bpa, hipaa baa, and sovereign escrows',
      ],
      cta: 'contact security desk',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative w-full bg-transparent py-28 px-6 md:px-10 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full px-4 py-1.5 border border-white/10 text-xs text-white/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>transparent pricing</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="hero-title text-white font-medium text-4xl md:text-6xl lg:text-7xl tracking-tight max-w-4xl">
              transparent tiers. pure security.
            </h2>
            <div className="flex items-center gap-3">
              <span className="hidden md:block h-px w-20 bg-white/40 rotate-[-20deg]" />
              <p className="text-sm md:text-base text-neutral-400 max-w-xs leading-relaxed">
                no hidden bandwidth markups. scale seamlessly with your encrypted payload volume.
              </p>
            </div>
          </div>
        </div>

        {/* Billing Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-neutral-900/90 backdrop-blur p-1 rounded-full border border-white/10 flex items-center gap-1">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`text-xs px-5 py-2 rounded-full transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-black font-medium shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annually')}
              className={`text-xs px-5 py-2 rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                billingCycle === 'annually'
                  ? 'bg-white text-black font-medium shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>annually</span>
              <span className="text-[10px] bg-neutral-800 text-white/90 px-2 py-0.5 rounded-full border border-white/10">
                save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const price = billingCycle === 'annually' ? tier.priceAnnually : tier.priceMonthly;

            return (
              <div
                key={tier.name}
                className={`relative rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-neutral-900/90 border-2 border-white shadow-2xl scale-[1.02]'
                    : 'bg-neutral-950 border border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                      {tier.name}
                    </span>
                    <span
                      className={`text-[11px] px-3 py-1 rounded-full border ${
                        tier.highlighted
                          ? 'bg-white text-black font-medium border-white'
                          : 'bg-white/5 text-neutral-400 border-white/10'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  {/* Price display */}
                  <div className="my-6">
                    {price !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl md:text-6xl font-medium text-white tracking-tight">
                          ${price}
                        </span>
                        <span className="text-neutral-400 text-sm">/ month</span>
                      </div>
                    ) : (
                      <div className="text-4xl md:text-5xl font-medium text-white tracking-tight">
                        custom
                      </div>
                    )}
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="h-px w-full bg-white/10 my-6" />

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-xs md:text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to action button */}
                <button
                  type="button"
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full py-3.5 px-6 rounded-full text-sm font-normal transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    tier.highlighted
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
