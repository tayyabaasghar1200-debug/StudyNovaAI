"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Is StudyNovaAI completely free to use?",
    a: "Yes! StudyNovaAI offers a generous free plan that includes 5 AI notes, 5 quizzes, and 10 flashcards per day. All student tools (calculators, timers, etc.) are completely free with no daily limits. Upgrade to Premium for unlimited access to all AI features.",
  },
  {
    q: "How does the AI generate notes and quizzes?",
    a: "StudyNovaAI uses advanced large language models (similar to GPT-4) that are fine-tuned for educational content. You simply enter a topic, paste text, or upload a PDF, and our AI analyzes the content to generate structured, accurate study materials tailored to your needs.",
  },
  {
    q: "What subjects does StudyNovaAI support?",
    a: "StudyNovaAI works with virtually any subject — Mathematics, Science, History, Literature, Languages, Computer Science, Law, Medicine, Business, and more. From high school to postgraduate level, our AI adapts to your academic needs.",
  },
  {
    q: "Is my data private and secure?",
    a: "Absolutely. We take privacy seriously. Your study materials, notes, and personal data are encrypted and never shared with third parties. We comply with GDPR and follow strict data security protocols.",
  },
  {
    q: "Can I use StudyNovaAI on my mobile phone?",
    a: "Yes! StudyNovaAI is fully mobile-optimized and can be installed as a Progressive Web App (PWA) on your phone. This means you can study offline and get a native app experience without downloading from an app store.",
  },
  {
    q: "How is Premium different from the Free plan?",
    a: "Premium unlocks unlimited usage of all AI tools, access to more powerful AI models (GPT-4), the AI Homework Helper, advanced Study Planner, detailed analytics, PDF/Word export, and priority 24/7 support. It's designed for students who need unlimited AI assistance.",
  },
  {
    q: "Can I cancel my Premium subscription anytime?",
    a: "Yes, absolutely. You can cancel your subscription at any time with no penalties. If you cancel, you'll retain Premium access until the end of your billing period. We also offer a 30-day money-back guarantee, no questions asked.",
  },
  {
    q: "Does StudyNovaAI help with homework answers?",
    a: "Our AI Homework Helper provides step-by-step explanations and guidance to help you understand how to solve problems, rather than just giving you answers to copy. This approach promotes genuine learning while helping you get unstuck.",
  },
];

export default function FAQSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-[#06070f]">
      <div className="container-premium">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
              <HelpCircle size={20} />
              <span className="text-sm font-semibold uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
              Frequently Asked
              <br />
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Everything you need to know about StudyNovaAI. Can&apos;t find what you&apos;re looking for?{" "}
              <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact us</a>.
            </p>
          </motion.div>

          {/* FAQ items */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  <span className={`font-semibold text-sm md:text-base pr-4 ${openIndex === i ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-white"}`}>
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${openIndex === i ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`}>
                    <ChevronDown size={15} />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
