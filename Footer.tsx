"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";

const footerLinks = {
  product: [
    { label: "AI Notes Generator", href: "/ai-tools/notes-generator" },
    { label: "AI Quiz Generator", href: "/ai-tools/quiz-generator" },
    { label: "AI Flashcards", href: "/ai-tools/flashcards" },
    { label: "PDF Summarizer", href: "/ai-tools/pdf-summarizer" },
    { label: "Homework Helper", href: "/ai-tools/homework-helper" },
    { label: "Study Planner", href: "/ai-tools/study-planner" },
  ],
  tools: [
    { label: "CGPA Calculator", href: "/student-tools/cgpa-calculator" },
    { label: "Scientific Calculator", href: "/student-tools/scientific-calculator" },
    { label: "Pomodoro Timer", href: "/student-tools/pomodoro" },
    { label: "Study Timer", href: "/student-tools/study-timer" },
    { label: "Exam Countdown", href: "/student-tools/exam-countdown" },
    { label: "Timetable Builder", href: "/student-tools/timetable-builder" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socials = [
  { icon: <ExternalLink size={18} />, href: "https://twitter.com/studynovaai", label: "Twitter" },
  { icon: <ExternalLink size={18} />, href: "https://github.com/studynovaai", label: "GitHub" },
  { icon: <ExternalLink size={18} />, href: "https://linkedin.com/company/studynovaai", label: "LinkedIn" },
  { icon: <ExternalLink size={18} />, href: "https://youtube.com/@studynovaai", label: "YouTube" },
  { icon: <ExternalLink size={18} />, href: "https://instagram.com/studynovaai", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-[#06070f] border-t border-slate-200 dark:border-slate-800/60 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      {/* Newsletter Banner */}
      <div className="relative container-premium py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-500/20"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={18} className="text-yellow-300" />
              <span className="text-yellow-300 font-semibold text-sm">Newsletter</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              Stay ahead in your studies
            </h3>
            <p className="text-blue-100 text-sm">
              Get weekly tips, new features, and study resources straight to your inbox.
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
            />
            <button className="px-5 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2 text-sm whitespace-nowrap">
              Subscribe <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="container-premium pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/favicon.png" alt="StudyNovaAI" width={36} height={36} className="rounded-xl" />
              <span className="font-bold text-xl text-slate-900 dark:text-white">
                Study<span className="gradient-text">Nova</span>AI
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 max-w-xs">
              The world&apos;s most advanced AI-powered education platform. Transform your learning experience with cutting-edge AI tools designed for students.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI Tools */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">AI Tools</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Tools */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">Student Tools</h4>
            <ul className="space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} StudyNovaAI. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-slate-400">
            Made with{" "}
            <span className="text-red-500 mx-1">♥</span>
            for students worldwide
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
