/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, Terminal, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: string;
}

export function GetStartedModal({ isOpen, onClose, selectedTier = 'developer' }: GetStartedModalProps) {
  const [activeTab, setActiveTab] = useState<'quick' | 'enterprise'>('quick');
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [volume, setVolume] = useState('1tb-10tb');

  const demoApiKey = 'sec_live_99d1fa82bb04c810992a7719';
  const installCmd = 'npm i @securify/sdk';

  const copyKey = () => {
    navigator.clipboard.writeText(demoApiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const copyInstall = () => {
    navigator.clipboard.writeText(installCmd);
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-xl bg-neutral-950 border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl z-10 text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-white" />
                <span className="text-sm font-medium tracking-tight">securify enclave onboarding</span>
                {selectedTier && (
                  <span className="text-[11px] bg-white/10 text-white/80 px-2.5 py-0.5 rounded-full border border-white/10">
                    tier: {selectedTier}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Tab switch */}
            <div className="flex gap-1 p-1 bg-neutral-900 rounded-full border border-white/10 mb-6">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('quick');
                  setSubmitted(false);
                }}
                className={`flex-1 text-xs py-2 rounded-full transition-all cursor-pointer ${
                  activeTab === 'quick' ? 'bg-white text-black font-medium' : 'text-neutral-400 hover:text-white'
                }`}
              >
                instant developer sandbox
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('enterprise');
                  setSubmitted(false);
                }}
                className={`flex-1 text-xs py-2 rounded-full transition-all cursor-pointer ${
                  activeTab === 'enterprise' ? 'bg-white text-black font-medium' : 'text-neutral-400 hover:text-white'
                }`}
              >
                architecture review
              </button>
            </div>

            {/* Quick Sandbox Tab */}
            {activeTab === 'quick' && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-medium tracking-tight mb-1">
                    your sandbox credentials are ready
                  </h3>
                  <p className="text-xs text-neutral-400">
                    use this ephemeral sandbox key to test tokenization and confidential enclaves locally.
                  </p>
                </div>

                {/* API Key box */}
                <div className="bg-black border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                    <span className="font-mono text-white/70">sandbox_api_key</span>
                    <button
                      type="button"
                      onClick={copyKey}
                      className="flex items-center gap-1 text-[11px] text-white hover:underline cursor-pointer"
                    >
                      {copiedKey ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedKey ? 'copied!' : 'copy key'}</span>
                    </button>
                  </div>
                  <div className="font-mono text-xs text-white bg-neutral-900/60 p-2.5 rounded-xl break-all border border-white/5">
                    {demoApiKey}
                  </div>
                </div>

                {/* Install SDK box */}
                <div className="bg-black border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                    <div className="flex items-center gap-1.5 font-mono text-white/70">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>install sdk</span>
                    </div>
                    <button
                      type="button"
                      onClick={copyInstall}
                      className="flex items-center gap-1 text-[11px] text-white hover:underline cursor-pointer"
                    >
                      {copiedInstall ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedInstall ? 'copied!' : 'copy command'}</span>
                    </button>
                  </div>
                  <div className="font-mono text-xs text-neutral-300 bg-neutral-900/60 p-2.5 rounded-xl border border-white/5 flex items-center justify-between">
                    <span>$ {installCmd}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">rate limit: 50,000 req/mo</span>
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-white text-black hover:bg-neutral-200 text-xs font-normal px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                  >
                    launch local dev
                  </button>
                </div>
              </div>
            )}

            {/* Enterprise Review Tab */}
            {activeTab === 'enterprise' && (
              <div>
                {submitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="h-12 w-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-white">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-medium">review request received</h4>
                    <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                      our principal cryptographer will reach out to <span className="text-white">{email}</span> within 2 hours with tailored enclave architecture benchmarks.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={onClose}
                        className="bg-white text-black hover:bg-neutral-200 text-xs px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                      >
                        done
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs text-neutral-400 uppercase tracking-wider block mb-1.5">
                        work email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ciso@enterprise.com"
                        className="w-full bg-neutral-900 border border-white/10 focus:border-white/40 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-neutral-400 uppercase tracking-wider block mb-1.5">
                        organization / cloud infrastructure
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Apex FinTech (AWS & On-Premises)"
                        className="w-full bg-neutral-900 border border-white/10 focus:border-white/40 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-neutral-400 uppercase tracking-wider block mb-1.5">
                        estimated monthly protected throughput
                      </label>
                      <select
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-full bg-neutral-900 border border-white/10 focus:border-white/40 rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-colors cursor-pointer"
                      >
                        <option value="under-1tb">under 1 tb / month</option>
                        <option value="1tb-10tb">1 tb – 10 tb / month</option>
                        <option value="10tb-100tb">10 tb – 100 tb / month</option>
                        <option value="over-100tb">over 100 tb / month (dedicated hsms)</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-white text-black hover:bg-neutral-200 text-xs font-normal py-3 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer active:scale-95"
                      >
                        <span>request architecture review</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
