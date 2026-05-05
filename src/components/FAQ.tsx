import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  key?: any;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className={`border-b border-white/5 transition-colors ${isOpen ? "bg-white/[0.02]" : ""}`}>
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
      >
        <span className={`text-lg font-bold uppercase tracking-tight transition-colors ${isOpen ? "text-neon-orange" : "text-white group-hover:text-neon-orange"}`}>
          {question}
        </span>
        <div className={`p-1 rounded bg-white/5 border border-white/10 transition-all ${isOpen ? "border-neon-orange/50 bg-neon-orange/10" : "group-hover:border-neon-orange/30"}`}>
          {isOpen ? (
            <Minus className="w-4 h-4 text-neon-orange" />
          ) : (
            <Plus className="w-4 h-4 text-slate-400 group-hover:text-neon-orange" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-12 text-slate-400 text-sm leading-relaxed max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is it painful?",
      answer: "Not at all! We use specialized low-impact tactical rounds. You get the thrill of high-stakes combat without the bruises or pain associated with traditional paintball."
    },
    {
      question: "What should I wear?",
      answer: "Comfortable sportswear and sneakers are best. We provide all the necessary tactical gear, including professional masks and protective vests."
    },
    {
      question: "What is the minimum age?",
      answer: "Our arena is open for tactical recruits from 13 to 65 years old. It's engineered to be safe enough for teenagers and challenging enough for adults."
    },
    {
      question: "Do I need to book in advance?",
      answer: "Yes, we strongly recommend booking at least 24 hours in advance to secure your preferred time slot and mission map. Walk-ins are subject to availability."
    },
    {
      question: "Where are you located?",
      answer: "We are located in Gulistan, Syrdarya Region. Our Field HQ is easy to find—check the interactive map in the Location section for exact tactical coordinates!"
    }
  ];

  return (
    <section className="py-24 px-4 bg-deep-slate border-t border-white/5">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 text-neon-orange mb-6 justify-center">
          <HelpCircle className="w-6 h-6" />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Briefing</span>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            FREQUENTLY ASKED <span className="text-neon-orange">QUESTIONS</span>
          </h2>
        </div>

        <div className="border-t border-white/5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-16 p-8 glass-panel rounded-2xl border-l-4 border-l-neon-orange flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-white font-bold uppercase tracking-wide mb-1">Still have questions?</h4>
            <p className="text-slate-400 text-sm">Contact our Tactical Command for special event inquiries.</p>
          </div>
          <button className="px-6 py-3 bg-white/5 hover:bg-neon-orange border border-white/10 hover:border-neon-orange text-white font-bold rounded-lg text-xs uppercase tracking-widest transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
