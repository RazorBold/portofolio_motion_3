/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DynamicBackground, BgPattern } from './components/DynamicBackground';
import { TelemetryBar } from './components/TelemetryBar';
import { PlatformSection } from './components/PlatformSection';
import { SecurityPlayground } from './components/SecurityPlayground';
import { SolutionsSection } from './components/SolutionsSection';
import { PricingSection } from './components/PricingSection';
import { CompanySection } from './components/CompanySection';
import { FaqSection } from './components/FaqSection';
import { CtaFooter } from './components/CtaFooter';
import { GetStartedModal } from './components/GetStartedModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('developer');
  const [bgPattern, setBgPattern] = useState<BgPattern>('quantum-3d');

  const handleOpenGetStarted = (tier: string = 'developer') => {
    setSelectedTier(tier);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-black relative">
      {/* Dynamic Background with Three.js 3D Enclave & Generated Motion Patterns */}
      <DynamicBackground
        currentPattern={bgPattern}
        onSelectPattern={setBgPattern}
      />

      {/* Floating Pill Navigation */}
      <Navbar onOpenGetStarted={() => handleOpenGetStarted('developer')} />

      <main className="relative z-10">
        {/* Full-Screen Video Hero Section */}
        <Hero />

        {/* Live Defense Stream & Ecosystem Partners */}
        <TelemetryBar />

        {/* Architecture & Hardware-Isolated Enclaves */}
        <PlatformSection />

        {/* Interactive Live Tokenization & Masking Sandbox */}
        <SecurityPlayground />

        {/* Industry Solutions (AI, Fintech, Health, DevOps) */}
        <SolutionsSection />

        {/* Transparent Cryptographic Pricing Tiers */}
        <PricingSection onSelectTier={handleOpenGetStarted} />

        {/* Wall of Trust & Enterprise Testimonials */}
        <CompanySection />

        {/* Support & Cryptographic FAQ */}
        <FaqSection />

        {/* Final Conversion Section & Global Footer */}
        <CtaFooter />
      </main>

      {/* Interactive Modal for Sandbox Keys and Enterprise Review */}
      <GetStartedModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedTier={selectedTier}
      />
    </div>
  );
}
