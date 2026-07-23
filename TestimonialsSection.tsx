"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aisha Rahman",
    role: "Medical Student, Harvard",
    avatar: "AR",
    rating: 5,
    content: "StudyNovaAI completely transformed how I study for my MCAT. The AI notes generator breaks down complex medical concepts into digestible summaries. My study time dropped by 40%!",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Marcus Johnson",
    role: "Engineering Student, MIT",
    avatar: "MJ",
    rating: 5,
    content: "The AI quiz generator is absolutely incredible. I generate practice problems for my thermodynamics exams and the explanations are clearer than my textbook. Scored a 98 on my last exam!",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Priya Sharma",
    role: "Law Student, Oxford",
    avatar: "PS",
    rating: 5,
    content: "The PDF summarizer saved me countless hours reviewing case files. What used to take me 3 hours now takes 15 minutes. The AI captures every important legal detail perfectly.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "James Chen",
    role: "CS Student, Stanford",
    avatar: "JC",
    rating: 5,
    content: "The study planner AI actually understands how much time I need per subject. My GPA went from 3.2 to 3.8 in one semester. The Pomodoro timer integration is chef's kiss.",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Sofia Vasquez",
    role: "Biology Student, UCLA",
    avatar: "SV",
    rating: 5,
    content: "Flashcards with spaced repetition changed my memory game entirely. I retained 80% more information for my biochemistry finals. This app is a must-have for every student.",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Business Student, LSE",
    avatar: "AA",
    rating: 5,
    content: "The CGPA calculator and study analytics dashboard help me stay on top of my academic goals. I've been on the Dean's list for 2 consecutive semesters since using StudyNovaAI.",
    color: "from-indigo-500 to-blue-600",
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-[#06070f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg opacity-50 dark:opacity-30 pointer-events-none" />

      <div className="container-premium relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-divider mb-4" />
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Student Love</p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-5 leading-tight">
            Loved by students
            <br />
            <span className="gradient-text">at top universities</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              {[1,2,3,4,5].map(s => <Star key={s} size={20} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <span className="text-slate-600 dark:text-slate-300 font-semibold">4.9/5</span>
            <span className="text-slate-400 dark:text-slate-500">from 10,000+ students</span>
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 card-hover relative group"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-blue-500/20 dark:text-blue-400/20 absolute top-5 right-5" />

              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
