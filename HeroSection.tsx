"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Play, CheckCircle2, Zap, Brain, BookOpen } from "lucide-react";

const badges = [
  { icon: <Zap size={12} />, text: "10x Faster Learning" },
  { icon: <Brain size={12} />, text: "AI-Powered" },
  { icon: <BookOpen size={12} />, text: "100% Free to Start" },
];

const floatingCards = [
  { icon: "✨", title: "AI Notes Generated", subtitle: "Chapter 5: Quantum Mechanics", color: "from-blue-500 to-cyan-500" },
  { icon: "🧠", title: "Quiz Ready!", subtitle: "20 questions on Biology", color: "from-violet-500 to-purple-600" },
  { icon: "📚", title: "Study Streak", subtitle: "15 days in a row! 🔥", color: "from-orange-500 to-red-500" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-60" />

        {/* Animated orbs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-500/12 dark:bg-violet-500/18 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        />
      </div>

      <div className="container-premium relative z-10 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-8"
          >
            {badges.map((badge, i) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200/60 dark:border-blue-700/40 text-blue-700 dark:text-blue-300 text-xs font-medium"
              >
                {badge.icon}
                {badge.text}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-semibold"
            >
              <Sparkles size={12} />
              New: AI Study Planner
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
              Study Smarter with
              <br />
              <span className="gradient-text">AI-Powered</span> Tools
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Generate notes, quizzes, flashcards, and study plans instantly with AI.
            The all-in-one platform built for modern students who want to excel.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/signup"
              className="group flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-base shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <Sparkles size={18} />
              Start for Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#demo"
              className="group flex items-center gap-2.5 px-7 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-base hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center">
                <Play size={12} className="text-white translate-x-0.5" />
              </div>
              Watch Demo
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400 mb-16"
          >
            {["No credit card required", "Free forever plan", "10,000+ students"].map((text) => (
              <div key={text} className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-green-500" />
                {text}
              </div>
            ))}
          </motion.div>

          {/* Hero Image / Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main dashboard card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700/50 shadow-[0_30px_100px_rgba(79,110,247,0.2)] dark:shadow-[0_30px_100px_rgba(79,110,247,0.15)] bg-white dark:bg-[#0d1124]">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white dark:bg-slate-800 rounded-lg px-3 py-1.5 flex items-center gap-2 max-w-xs mx-auto">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs text-slate-400">studynovaai.com/dashboard</span>
                  </div>
                </div>
              </div>

              {/* Dashboard preview */}
              <div className="p-6 bg-gradient-to-br from-slate-50 to-white dark:from-[#0d1124] dark:to-[#080e1f]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {/* Stat cards */}
                  {[
                    { label: "Study Streak", value: "15 🔥", color: "from-orange-500 to-red-500", bg: "bg-orange-50 dark:bg-orange-900/10" },
                    { label: "Notes Generated", value: "128 📝", color: "from-blue-500 to-cyan-500", bg: "bg-blue-50 dark:bg-blue-900/10" },
                    { label: "Quizzes Aced", value: "47 ✨", color: "from-violet-500 to-purple-600", bg: "bg-violet-50 dark:bg-violet-900/10" },
                  ].map((stat) => (
                    <div key={stat.label} className={`${stat.bg} rounded-2xl p-4 border border-slate-200/60 dark:border-slate-700/30`}>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Charts and content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800/40 rounded-2xl p-4 border border-slate-200/60 dark:border-slate-700/30">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">Weekly Study Progress</h4>
                    <div className="flex items-end gap-2 h-20">
                      {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end">
                          <div
                            style={{ height: `${h}%` }}
                            className={`rounded-t-lg ${i === 5 ? "bg-gradient-to-t from-blue-600 to-violet-500" : "bg-blue-200 dark:bg-blue-800"}`}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                        <span key={i} className="text-xs text-slate-400 flex-1 text-center">{d}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-800/40 rounded-2xl p-4 border border-slate-200/60 dark:border-slate-700/30">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">AI Tools Used Today</h4>
                    <div className="space-y-2.5">
                      {[
                        { name: "Notes Generator", progress: 80, color: "bg-blue-500" },
                        { name: "Quiz Generator", progress: 60, color: "bg-violet-500" },
                        { name: "Flashcards", progress: 45, color: "bg-cyan-500" },
                      ].map((item) => (
                        <div key={item.name}>
                          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                            <span>{item.name}</span><span>{item.progress}%</span>
                          </div>
                          <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.progress}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.15 }}
                className={`absolute ${
                  i === 0 ? "-top-6 -left-4 md:-left-10" :
                  i === 1 ? "-top-6 -right-4 md:-right-10" :
                  "-bottom-6 left-1/2 -translate-x-1/2"
                } glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl hidden md:flex`}
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-lg`}>
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">{card.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{card.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
