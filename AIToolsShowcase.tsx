"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useState } from "react";
import { FileText, HelpCircle, LayoutGrid, CreditCard, FileSearch, Lightbulb, Calendar, ArrowRight, Sparkles } from "lucide-react";

const aiTools = [
  {
    icon: <FileText size={24} />,
    emoji: "📝",
    title: "AI Notes Generator",
    description: "Paste any topic or text and get beautifully structured, comprehensive notes instantly. Supports bullet points, summaries, and mind maps.",
    href: "/ai-tools/notes-generator",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50 dark:bg-blue-900/15",
    border: "border-blue-200 dark:border-blue-800/40",
    tags: ["Instant", "Structured", "Any Topic"],
  },
  {
    icon: <HelpCircle size={24} />,
    emoji: "❓",
    title: "AI Quiz Generator",
    description: "Generate custom quizzes from any topic or uploaded content. Test yourself with AI-generated questions and detailed explanations.",
    href: "/ai-tools/quiz-generator",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 dark:bg-violet-900/15",
    border: "border-violet-200 dark:border-violet-800/40",
    tags: ["Custom Difficulty", "Explanations", "Any Subject"],
  },
  {
    icon: <LayoutGrid size={24} />,
    emoji: "✅",
    title: "AI MCQ Generator",
    description: "Create multiple choice questions with 4 options and correct answers. Perfect for exam preparation and competitive tests.",
    href: "/ai-tools/mcq-generator",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/15",
    border: "border-emerald-200 dark:border-emerald-800/40",
    tags: ["4 Options", "Explanations", "Exam Ready"],
  },
  {
    icon: <CreditCard size={24} />,
    emoji: "🃏",
    title: "AI Flashcards",
    description: "Transform any content into interactive flashcards with spaced repetition. Study smarter with proven memory techniques.",
    href: "/ai-tools/flashcards",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50 dark:bg-orange-900/15",
    border: "border-orange-200 dark:border-orange-800/40",
    tags: ["Spaced Repetition", "Interactive", "Memory Boost"],
  },
  {
    icon: <FileSearch size={24} />,
    emoji: "📄",
    title: "AI PDF Summarizer",
    description: "Upload any PDF and get an intelligent summary with key points, important concepts, and actionable insights in seconds.",
    href: "/ai-tools/pdf-summarizer",
    color: "from-red-500 to-rose-600",
    bg: "bg-red-50 dark:bg-red-900/15",
    border: "border-red-200 dark:border-red-800/40",
    tags: ["PDF Upload", "Key Points", "Instant"],
  },
  {
    icon: <Lightbulb size={24} />,
    emoji: "💡",
    title: "AI Homework Helper",
    description: "Stuck on a problem? Get step-by-step explanations, hints, and solutions for any homework question across all subjects.",
    href: "/ai-tools/homework-helper",
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-50 dark:bg-yellow-900/15",
    border: "border-yellow-200 dark:border-yellow-800/40",
    tags: ["Step-by-Step", "All Subjects", "Explanations"],
  },
  {
    icon: <Calendar size={24} />,
    emoji: "📅",
    title: "AI Study Planner",
    description: "Let AI create a personalized study schedule based on your subjects, deadlines, and available time. Never fall behind again.",
    href: "/ai-tools/study-planner",
    color: "from-pink-500 to-violet-500",
    bg: "bg-pink-50 dark:bg-pink-900/15",
    border: "border-pink-200 dark:border-pink-800/40",
    tags: ["Personalized", "Smart Schedule", "Goal Tracking"],
  },
];

export default function AIToolsShowcase() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-[#06070f] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-500/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container-premium relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200/60 dark:border-blue-800/40 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            <Sparkles size={15} />
            AI-Powered Tools
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-5 leading-tight">
            7 Powerful AI Tools
            <br />
            <span className="gradient-text">Built for Students</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Each tool is precisely designed to eliminate study friction and maximize your learning potential.
          </p>
        </motion.div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiTools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredTool(i)}
              onMouseLeave={() => setHoveredTool(null)}
              className={`relative rounded-2xl border ${tool.border} ${tool.bg} p-6 card-hover group overflow-hidden`}
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${tool.color} text-white mb-4 shadow-lg`}>
                  {tool.icon}
                </div>

                {/* Emoji badge */}
                <div className="absolute top-0 right-0 text-2xl">{tool.emoji}</div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {tool.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium bg-white/60 dark:bg-slate-800/60 rounded-full text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={tool.href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${tool.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                >
                  Try it free
                  <ArrowRight size={16} className={`bg-gradient-to-r ${tool.color} text-transparent [&>*]:fill-current`} style={{ color: "inherit" }} />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-6 flex flex-col items-center justify-center text-center gap-4 bg-slate-50/50 dark:bg-slate-900/20"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">More Coming Soon</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">We&apos;re building even more AI tools to supercharge your studies.</p>
            </div>
            <Link
              href="/ai-tools"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              View All Tools
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
