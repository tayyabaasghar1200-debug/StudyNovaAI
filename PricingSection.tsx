"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useState } from "react";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Free",
    icon: <Zap size={20} />,
    price: { monthly: 0, yearly: 0 },
    description: "Perfect to get started and explore the power of AI learning.",
    color: "from-slate-400 to-slate-600",
    bg: "bg-slate-50 dark:bg-slate-900/20",
    border: "border-slate-200 dark:border-slate-700",
    buttonClass: "border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600",
    features: [
      "5 AI Notes/day",
      "5 Quizzes/day",
      "10 Flashcards/day",
      "3 PDF Summaries/month",
      "All Student Tools",
      "Basic Dashboard",
      "Study Timer & Pomodoro",
      "Email Support",
    ],
    cta: "Start for Free",
    popular: false,
  },
  {
    name: "Premium",
    icon: <Crown size={20} />,
    price: { monthly: 9.99, yearly: 6.99 },
    description: "For serious students who want unlimited AI power to excel academically.",
    color: "from-blue-600 to-violet-600",
    bg: "bg-gradient-to-br from-blue-600 to-violet-600",
    border: "border-blue-500",
    buttonClass: "bg-white text-blue-600 hover:bg-blue-50",
    features: [
      "Unlimited AI Notes",
      "Unlimited Quizzes & MCQs",
      "Unlimited Flashcards",
      "Unlimited PDF Summaries",
      "AI Homework Helper",
      "AI Study Planner",
      "Advanced Dashboard & Analytics",
      "Priority AI (GPT-4)",
      "Export to PDF/Word",
      "Custom Study Plans",
      "Progress Tracking",
      "24/7 Priority Support",
    ],
    cta: "Start Premium",
    popular: true,
  },
];

export default function PricingSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [yearly, setYearly] = useState(true);

  return (
    <section ref={ref} id="pricing" className="py-24 bg-slate-50/80 dark:bg-[#080e1f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="container-premium relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-divider mb-4" />
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-5 leading-tight">
            Simple, transparent
            <br />
            <span className="gradient-text">pricing for everyone</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Start for free, upgrade when you need more power. No hidden fees, cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 rounded-2xl p-1.5 border border-slate-200 dark:border-slate-700 shadow-sm">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${!yearly ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md" : "text-slate-500 dark:text-slate-400"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${yearly ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md" : "text-slate-500 dark:text-slate-400"}`}
            >
              Yearly
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold">-30%</span>
            </button>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-3xl overflow-hidden ${plan.popular ? "" : "bg-white dark:bg-[#0d1124] border " + plan.border}`}
            >
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600" />
              )}

              {plan.popular && (
                <div className="relative flex justify-center pt-5">
                  <div className="flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    <Sparkles size={12} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`relative p-8 ${plan.popular ? "text-white" : ""}`}>
                {/* Plan name */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${plan.popular ? "bg-white/20" : `bg-gradient-to-br ${plan.color}`} flex items-center justify-center ${plan.popular ? "text-white" : "text-white"}`}>
                    {plan.icon}
                  </div>
                  <span className={`text-xl font-bold ${plan.popular ? "text-white" : "text-slate-900 dark:text-white"}`}>
                    {plan.name}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-black ${plan.popular ? "text-white" : "text-slate-900 dark:text-white"}`}>
                      ${yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className={`text-sm ${plan.popular ? "text-white/70" : "text-slate-400"}`}>
                      {plan.price.monthly === 0 ? "forever" : `/month${yearly ? " (billed yearly)" : ""}`}
                    </span>
                  </div>
                  {plan.popular && yearly && (
                    <p className="text-white/60 text-xs mt-1">Save ${((plan.price.monthly - plan.price.yearly) * 12).toFixed(2)}/year</p>
                  )}
                </div>

                <p className={`text-sm leading-relaxed mb-6 ${plan.popular ? "text-white/80" : "text-slate-500 dark:text-slate-400"}`}>
                  {plan.description}
                </p>

                <Link
                  href={plan.popular ? "/signup?plan=premium" : "/signup"}
                  className={`block w-full py-3.5 rounded-2xl text-center font-semibold text-sm transition-all mb-7 ${
                    plan.popular
                      ? "bg-white text-blue-600 hover:bg-blue-50 shadow-xl"
                      : "border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? "bg-white/20" : "bg-blue-100 dark:bg-blue-900/30"}`}>
                        <Check size={12} className={plan.popular ? "text-white" : "text-blue-600 dark:text-blue-400"} />
                      </div>
                      <span className={`text-sm ${plan.popular ? "text-white/85" : "text-slate-600 dark:text-slate-300"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-slate-400 dark:text-slate-500 mt-8"
        >
          🔒 Secure payment via Stripe. Cancel anytime. 30-day money-back guarantee.
        </motion.p>
      </div>
    </section>
  );
}
