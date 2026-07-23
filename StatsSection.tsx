"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Users, BookOpen, Brain, Star } from "lucide-react";

const stats = [
  { icon: <Users size={24} />, value: 50000, suffix: "+", label: "Active Students", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
  { icon: <BookOpen size={24} />, value: 2000000, suffix: "+", label: "Notes Generated", color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-900/20" },
  { icon: <Brain size={24} />, value: 500000, suffix: "+", label: "Quizzes Created", color: "text-cyan-500", bg: "bg-cyan-50 dark:bg-cyan-900/20" },
  { icon: <Star size={24} />, value: 4.9, suffix: "/5", label: "Average Rating", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20", decimal: 1 },
];

function AnimatedNumber({ value, suffix, decimal = 0, inView }: { value: number; suffix: string; decimal?: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const formatValue = () => {
    if (value >= 1000000) return (count / 1000000).toFixed(1) + "M";
    if (value >= 1000) return (count / 1000).toFixed(0) + "K";
    return count.toFixed(decimal);
  };

  return <span>{formatValue()}{suffix}</span>;
}

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-violet-600/5 dark:from-blue-600/5 dark:to-violet-600/5" />
      
      <div className="container-premium relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">By The Numbers</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Trusted by thousands of students worldwide
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center card-hover"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} mb-4`}>
                {stat.icon}
              </div>
              <div className={`text-3xl md:text-4xl font-black mb-1 ${stat.color}`}>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} decimal={stat.decimal} inView={inView} />
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
