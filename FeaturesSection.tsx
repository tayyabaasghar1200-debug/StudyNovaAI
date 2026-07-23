"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap, Shield, Globe, Smartphone, RefreshCw, Layers } from "lucide-react";

const features = [
  {
    icon: <Zap size={22} />,
    title: "Instant AI Generation",
    description: "Generate comprehensive study materials in seconds. No more hours of note-taking—let AI do the heavy lifting.",
    gradient: "from-yellow-400 to-orange-500",
    bg: "bg-yellow-50 dark:bg-yellow-900/10",
  },
  {
    icon: <Shield size={22} />,
    title: "Academic Integrity",
    description: "Designed to enhance learning, not replace it. Our AI tools help you understand concepts deeply and retain knowledge longer.",
    gradient: "from-green-400 to-emerald-600",
    bg: "bg-green-50 dark:bg-green-900/10",
  },
  {
    icon: <Globe size={22} />,
    title: "Any Subject, Any Level",
    description: "From high school to PhD level. Science, humanities, mathematics, languages—StudyNovaAI handles every subject.",
    gradient: "from-blue-400 to-cyan-500",
    bg: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Study Anywhere",
    description: "Fully optimized for mobile. Install as a PWA and study offline. Your learning doesn't stop when your WiFi does.",
    gradient: "from-violet-400 to-purple-600",
    bg: "bg-violet-50 dark:bg-violet-900/10",
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Adaptive Learning",
    description: "Our AI adapts to your learning style and progress. Get personalized recommendations that actually help you improve.",
    gradient: "from-pink-400 to-rose-500",
    bg: "bg-pink-50 dark:bg-pink-900/10",
  },
  {
    icon: <Layers size={22} />,
    title: "All-in-One Platform",
    description: "No need for 10 different apps. Notes, quizzes, flashcards, calculators, timers—everything in one beautiful platform.",
    gradient: "from-indigo-400 to-blue-600",
    bg: "bg-indigo-50 dark:bg-indigo-900/10",
  },
];

export default function FeaturesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-slate-50/80 dark:bg-[#080e1f]">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-divider mb-4" />
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Why StudyNovaAI</p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-5 leading-tight">
            Everything you need to{" "}
            <span className="gradient-text">ace your studies</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Combine AI-powered tools with proven study techniques to maximize your academic performance.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 card-hover group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${feature.bg} bg-gradient-to-br ${feature.gradient} mb-4 shadow-lg`}>
                <span className="text-white">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
