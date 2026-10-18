/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenGetStarted: () => void;
}

export function Navbar({ onOpenGetStarted }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'platform', href: '#platform' },
    { label: 'solutions', href: '#solutions' },
    { label: 'company', href: '#company' },
    { label: 'support', href: '#support' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 pt-6 transition-all duration-300">
      <nav
        className={`flex items-center justify-between gap-4 mx-auto max-w-7xl transition-all duration-300 ${
          scrolled ? 'py-1' : ''
        }`}
      >
        {/* Left pill */}
        <a
          href="#"
          className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-6 py-3 border border-white/5 hover:border-white/20 transition-all"
        >
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
          <span className="text-white text-sm font-normal tracking-tight">securify</span>
        </a>

        {/* Center pill (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2 border border-white/5 shadow-2xl shadow-black/50">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full relative group"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right action & mobile toggle */}
        <div className="flex items-center gap-2">
          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center h-11 w-11 rounded-full bg-neutral-900/90 backdrop-blur text-white border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          {/* Right button */}
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors cursor-pointer active:scale-95"
          >
            get started
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 mx-auto max-w-sm bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-white hover:bg-white/5 transition-colors text-sm px-4 py-3 rounded-2xl block"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
