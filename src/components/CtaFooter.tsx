/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Activity } from 'lucide-react';

export function CtaFooter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative w-full bg-transparent text-white select-none">
      {/* Final CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 border-b border-white/10 relative">
        <div className="rounded-3xl bg-neutral-950 border border-white/10 p-8 md:p-16 relative overflow-hidden text-center flex flex-col items-center">
          {/* Subtle ambient generated texture backdrop */}
          <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen">
            <img
              src="/src/assets/images/bg_crypto_lattice_1792329539956.jpg"
              alt="Cryptographic lattice texture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-radial from-transparent via-neutral-950/70 to-neutral-950 pointer-events-none" />

          {/* Subtle ambient light */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-neutral-800/40 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full px-4 py-1.5 border border-white/10 text-xs text-white/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>immediate cryptographic onboarding</span>
          </div>

          <h2 className="hero-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight max-w-4xl mb-6">
            ready to protect your data?
          </h2>

          <p className="text-sm md:text-base text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
            deploy confidential enclaves in under 15 minutes. start building with zero key exposure today.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-3 bg-neutral-900/90 border border-white/20 rounded-full px-6 py-3.5 text-sm text-white">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>welcome to securify. check your inbox for enclave sandbox credentials.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter work email..."
                className="flex-1 bg-neutral-900/90 border border-white/10 focus:border-white/40 rounded-full px-5 py-3.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-black hover:bg-neutral-200 transition-colors font-medium text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap active:scale-95"
              >
                <span>request access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-neutral-400" />
              no credit card required
            </span>
            <span>·</span>
            <span>instant sandbox api key</span>
            <span>·</span>
            <span>soc2 type ii audited</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 256 256"
                className="h-5 w-5 shrink-0"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z"
                  fill="#ffffff"
                />
              </svg>
              <span className="text-white text-base font-normal tracking-tight">securify</span>
            </div>

            <p className="text-xs text-neutral-400 max-w-xs leading-relaxed">
              continuous cryptographic defense and confidential hardware enclaves for modern infrastructure.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-white/10 px-3 py-1.5 rounded-full text-xs text-neutral-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <span>all 24 enclave regions operational · 0 breaches</span>
              </div>
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h5 className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-4">platform</h5>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><a href="#platform" className="hover:text-white transition-colors">quantum lattice vault</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">confidential enclaves</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">exfiltration sentry</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">compliance mesh</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">global network</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-4">solutions</h5>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><a href="#solutions" className="hover:text-white transition-colors">ai prompt redaction</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">fintech tokenization</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">healthcare phi</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">devops dynamic secrets</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">enterprise support</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-4">company</h5>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><a href="#company" className="hover:text-white transition-colors">about securify</a></li>
              <li><a href="#company" className="hover:text-white transition-colors">cryptographic whitepaper</a></li>
              <li><a href="#company" className="hover:text-white transition-colors">soc2 type ii report</a></li>
              <li><a href="#support" className="hover:text-white transition-colors">security faq</a></li>
              <li><a href="#support" className="hover:text-white transition-colors">contact cryptographers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 securify systems inc. all rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">privacy policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">terms of service</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">responsible disclosure</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">dpa sovereign</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
