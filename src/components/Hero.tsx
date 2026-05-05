import { motion } from "motion/react";
import { Crosshair, Shield, Zap, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 pixel-grid opacity-20 pointer-events-none" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-orange/10 border border-neon-orange/20 text-neon-orange text-xs font-bold tracking-widest uppercase mb-6">
            <Zap className="w-3 h-3" />
            Tactical Low-Impact Combat
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            LOCK & LOAD! <br />
            <span className="text-neon-orange">PAINTBALL BATTLES</span> <br />
            PURE ADRENALINE.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
            Experience Counter-Strike in the real world. No pain, no bruises—just pure adrenaline. Assemble your squad and dominate the arena!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neon-orange text-white font-bold rounded-lg glow-orange glow-orange-hover transition-all flex items-center justify-center gap-2 group"
            >
              BOOK YOUR MISSION
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-lg transition-all">
              VIEW BATTLE MODES
            </button>
          </div>

          {/* Key Stats Bar */}
          <div className="mt-12 flex gap-16 items-center border-t border-white/10 pt-8">
            <div className="flex flex-col">
              <span className="text-neon-orange text-2xl font-bold">100%</span>
              <span className="text-xs uppercase tracking-widest text-slate-500">Pain-Free</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-white text-2xl font-bold">AGES 13-65</span>
              <span className="text-xs uppercase tracking-widest text-slate-500">Open Access</span>
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group lg:block hidden"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-orange to-cyber-blue opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200" 
              alt="Abandoned Industrial Arena" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* HUD Overlays */}
            <div className="absolute top-4 left-4 p-4 glass-panel rounded-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-neon-orange flex items-center justify-center overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
              </div>
              <div>
                <div className="text-[10px] text-neon-orange uppercase font-bold tracking-tighter">Current MVP</div>
                <div className="text-xs font-mono">STRIKER_99</div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 p-4 glass-panel rounded-lg text-right">
              <div className="text-[10px] text-cyber-blue uppercase font-bold tracking-tighter">Arena Status</div>
              <div className="text-xs font-mono uppercase">Operational // Level 4</div>
            </div>
            
            {/* Interactive Scanner Line */}
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
