import { motion } from "motion/react";
import { MapPin, Navigation, Map as MapIcon, ShieldCheck } from "lucide-react";

export default function Location() {
  return (
    <section className="py-24 px-4 bg-black/30 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[450px] rounded-2xl overflow-hidden border border-white/10"
          >
            <iframe
              title="Gulistan HQ Map"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Gulistan,Uzbekistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            
            {/* HUD Overlay Style Decor */}
            <div className="absolute top-6 left-6 p-2 bg-black/80 backdrop-blur-sm border border-neon-orange/30 rounded text-[10px] font-mono uppercase tracking-widest text-neon-orange pointer-events-none">
              COORD DATA: 40.49'N 68.78'E
            </div>
          </motion.div>

          {/* Location Content */}
          <div className="lg:pl-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 text-neon-orange mb-6">
                <MapIcon className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-[0.3em]">Operational Base</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">
                FIELD <span className="text-neon-orange">HQ</span>
              </h2>
              
              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold font-mono">Location Coordinates</h4>
                  <p className="text-xl text-white font-display">Gulistan, Syrdarya Region, Uzbekistan</p>
                </div>
                
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 border-l-4 border-l-neon-orange">
                  <p className="text-slate-300 leading-relaxed italic">
                    "Find us here: We are located in the heart of Gulistan. Follow the signs to the Tactical Arena. Our facility is hidden in plain sight, engineered for the ultimate urban combat simulation."
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Gulistan,Uzbekistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-neon-orange text-white px-6 py-3 rounded-lg font-bold uppercase tracking-widest text-xs glow-orange hover:scale-105 transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Google Maps
                </a>
                <div className="flex items-center gap-2 text-xs text-slate-400 border border-white/10 px-4 py-3 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-cyber-blue" />
                  Secure HQ
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
