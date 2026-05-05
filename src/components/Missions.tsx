import { motion } from "motion/react";
import { Check, Users, Shield, Zap, Clock, Target } from "lucide-react";

interface MissionProps {
  title: string;
  price: string;
  priceType: string;
  duration: string;
  ammo: string;
  features: string[];
  icon: any;
  isPopular?: boolean;
  delay: number;
  key?: any;
}

function MissionCard({ title, price, priceType, duration, ammo, features, icon: Icon, isPopular, delay }: MissionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`relative p-8 rounded-2xl border-2 flex flex-col h-full group transition-all ${
        isPopular 
          ? "border-neon-orange bg-neon-orange/5 shadow-[0_0_30px_rgba(255,95,31,0.15)]" 
          : "border-white/10 bg-black/40"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-orange text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(255,95,31,0.5)]">
          Recommended
        </div>
      )}

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 rounded-xl ${isPopular ? "bg-neon-orange/20" : "bg-white/5 border border-white/10"}`}>
            <Icon className={`w-8 h-8 ${isPopular ? "text-neon-orange" : "text-white"}`} />
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tight leading-none">{title}</h3>
        </div>

        <div className="flex flex-col mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tighter text-white">{price} UZS</span>
          </div>
          <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mt-1">{priceType}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-neon-orange" />
            <span className="text-xs font-mono uppercase text-slate-300">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-neon-orange" />
            <span className="text-xs font-mono uppercase text-slate-300">{ammo} Balls</span>
          </div>
        </div>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
            <Check className="w-4 h-4 text-neon-orange shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 font-bold rounded-lg uppercase tracking-widest text-[10px] transition-all ${
          isPopular 
            ? "bg-neon-orange text-white glow-orange glow-orange-hover" 
            : "bg-white/10 text-white hover:bg-neon-orange"
        }`}
      >
        Book Mission
      </motion.button>
    </motion.div>
  );
}

export default function Missions() {
  const plans = [
    {
      title: "Starter Mission",
      price: "50,000",
      priceType: "Per Operator",
      duration: "60 Min",
      ammo: "200",
      features: [
        "Basic Tactical Blaster",
        "Protective Face Mask",
        "Public Arena Access",
        "Safety Briefing Included"
      ],
      icon: Shield,
      delay: 0,
    },
    {
      title: "Pro Operator",
      price: "80,000",
      priceType: "Per Operator",
      duration: "120 Min",
      ammo: "500",
      features: [
        "Advanced Tactical Blaster",
        "Heavy Duty Tactical Vest",
        "Access to 2 Different Maps",
        "Priority Squad Respawn",
        "Rank Tracking Enabled"
      ],
      icon: Target,
      isPopular: true,
      delay: 0.2,
    },
    {
      title: "Elite Squad",
      price: "700,000",
      priceType: "Fixed Group Rate",
      duration: "3 Hours",
      ammo: "Unlimited",
      features: [
        "Up to 10 Operators",
        "Private Arena Access",
        "Dedicated Field Referee",
        "Video Battle Highlights",
        "Elite Command Lounge"
      ],
      icon: Users,
      delay: 0.4,
    },
  ];

  return (
    <section className="py-24 px-4 bg-deep-slate relative overflow-hidden" id="missions">
      <div className="absolute top-0 right-0 p-12 text-[15vw] font-bold text-white/[0.01] -z-10 leading-none select-none italic">
        PRICING
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
            MISSION <span className="text-neon-orange">BRIEFING</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Select your deployment parameters. Whether you're a solo recruit or leading an entire squad, we have the tactical configuration for your mission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <MissionCard key={idx} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

