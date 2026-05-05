/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Missions from "./components/Missions";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-deep-slate selection:bg-neon-orange selection:text-white">
      {/* Precision Scroll Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-orange origin-left z-50 shadow-[0_0_10px_rgba(255,95,31,0.8)]"
        style={{ scaleX }}
      />

      {/* Header Navigation (Tactical) */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-deep-slate/80 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neon-orange rounded flex items-center justify-center font-bold text-white">P</div>
            <div className="font-display font-bold tracking-tighter text-xl uppercase">Paintball<span className="text-neon-orange">COMBAT</span></div>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-[10px] uppercase font-bold tracking-widest hover:text-neon-orange transition-colors">Tactical Data</a>
            <a href="#" className="text-[10px] uppercase font-bold tracking-widest hover:text-neon-orange transition-colors">Missions</a>
          </nav>

          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-neon-orange transition-all">
            Join Queue
          </button>
        </div>
      </header>

      <Hero />
      <Missions />
      <Location />
      <FAQ />

      {/* Footer Section */}
      <footer className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 opacity-50">
             <div className="font-display font-bold tracking-tighter text-xl mb-4 uppercase">Paintball<span className="text-neon-orange">COMBAT</span></div>
             <p className="text-xs uppercase tracking-[0.3em]">No Bruises. All Glory. Join the Revolution.</p>
          </div>
          
          <div className="flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-8">
            <a href="#" className="hover:text-white transition-colors">Tactical Protocols</a>
            <a href="#" className="hover:text-white transition-colors">Combat Ethics</a>
            <a href="#" className="hover:text-white transition-colors">Command Log</a>
          </div>

          <div className="text-[10px] font-mono text-slate-600">
            SYSTEM_v3.1.0 // LOCATION: GULISTAN_HQ // STATUS: OPERATIONAL
          </div>
        </div>
      </footer>
    </main>
  );
}
