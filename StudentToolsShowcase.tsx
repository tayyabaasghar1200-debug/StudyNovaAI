"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Calculator, BarChart2, Users, Percent, Ruler, Clock, Timer, Table, CalendarClock, BookMarked, ArrowRight } from "lucide-react";

const studentTools = [
  { icon: <Calculator size={20} />, emoji: "🧮", title: "Scientific Calculator", href: "/student-tools/scientific-calculator", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/15" },
  { icon: <BarChart2 size={20} />, emoji: "📊", title: "CGPA Calculator", href: "/student-tools/cgpa-calculator", color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-900/15" },
  { icon: <BarChart2 size={20} />, emoji: "🎓", title: "GPA Planner", href: "/student-tools/gpa-planner", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/15" },
  { icon: <Users size={20} />, emoji: "✅", title: "Attendance Calculator", href: "/student-tools/attendance-calculator", color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-900/15" },
  { icon: <Percent size={20} />, emoji: "💯", title: "Percentage Calculator", href: "/student-tools/percentage-calculator", color: "text-pink-600 dark:text-pink-400", bg: "bg-pink-50 dark:bg-pink-900/15" },
  { icon: <Ruler size={20} />, emoji: "📐", title: "Unit Converter", href: "/student-tools/unit-converter", color: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-50 dark:bg-cyan-900/15" },
  { icon: <Clock size={20} />, emoji: "🎂", title: "Age Calculator", href: "/student-tools/age-calculator", color: "text-red-600 dark:text-red-400", bg: "bg-red-50 dark:bg-red-900/15" },
  { icon: <Timer size={20} />, emoji: "⏱️", title: "Study Timer", href: "/student-tools/study-timer", color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-900/15" },
  { icon: <Timer size={20} />, emoji: "🍅", title: "Pomodoro Timer", href: "/student-tools/pomodoro", color: "text-red-600 dark:text-red-400", bg: "bg-red-50 dark:bg-red-900/15" },
  { icon: <Table size={20} />, emoji: "📋", title: "Timetable Builder", href: "/student-tools/timetable-builder", color: "text-teal-600 dark:text-teal-400", bg: "bg-teal-50 dark:bg-teal-900/15" },
  { icon: <CalendarClock size={20} />, emoji: "⏰", title: "Exam Countdown", href: "/student-tools/exam-countdown", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/15" },
  { icon: <BookMarked size={20} />, emoji: "📓", title: "Notes", href: "/student-tools/notes", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-900/15" },
];

export default function StudentToolsShowcase() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-slate-50/80 dark:bg-[#080e1f] relative overflow-hidden">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-4">
              🛠️ Student Tools
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-3 leading-tight">
              Essential Tools for
              <br />
              <span className="gradient-text">Every Student</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              12 precision-crafted tools to handle every calculation and task students need daily.
            </p>
          </div>
          <Link
            href="/student-tools"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all whitespace-nowrap"
          >
            View All Tools <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Tools grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {studentTools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={tool.href}
                className={`flex flex-col items-center gap-3 p-4 rounded-2xl ${tool.bg} border border-transparent hover:border-slate-200 dark:hover:border-slate-700 card-hover group text-center`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm ${tool.color} group-hover:scale-110 transition-transform duration-200`}>
                  {tool.icon}
                </div>
                <div>
                  <span className="text-lg">{tool.emoji}</span>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-200 mt-1 leading-tight">{tool.title}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 to-violet-600/10 dark:from-blue-600/10 dark:to-violet-600/10 border border-blue-200/50 dark:border-blue-800/30 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left">
            <p className="font-bold text-slate-900 dark:text-white text-lg">All tools are completely free</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">No account required for student tools. Just open and use.</p>
          </div>
          <Link
            href="/student-tools"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
          >
            Explore All Tools
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
