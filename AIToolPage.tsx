"use client";

import { useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, Copy, Download, RefreshCw, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";

interface AIToolPageProps {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
  inputPlaceholder: string;
  inputLabel: string;
  generateLabel: string;
  children?: ReactNode;
  renderInput?: (value: string, onChange: (v: string) => void) => ReactNode;
  renderOutput?: (output: string) => ReactNode;
  generateFn?: (input: string) => Promise<string>;
  badge?: string;
}

function defaultGenerateNotes(topic: string, toolType: string): string {
  const types: Record<string, string> = {
    notes: `# ${topic}\n\n## Overview\nHere are comprehensive AI-generated notes on **${topic}**.\n\n## Key Concepts\n- **Concept 1**: Fundamental principle underlying ${topic}\n- **Concept 2**: Important relationship between core elements\n- **Concept 3**: Practical applications and examples\n- **Concept 4**: Common misconceptions and clarifications\n\n## Detailed Explanation\n${topic} is a multifaceted subject that encompasses various principles and theories. Understanding the foundational concepts is essential for mastery.\n\n### Core Principles\n1. First principle: The basis of all knowledge in this area\n2. Second principle: How concepts interact and relate\n3. Third principle: Real-world applications\n\n## Summary\nThese notes provide a structured overview of ${topic}. Review each section carefully and test your understanding with quizzes.\n\n## Key Takeaways\n✅ Understand the core concepts\n✅ Apply knowledge to practical scenarios\n✅ Review regularly using spaced repetition`,
    quiz: `**Quiz: ${topic}**\n\n**Q1:** What is the fundamental concept behind ${topic}?\n**Answer:** The fundamental concept involves understanding the core principles that govern the subject.\n\n**Q2:** How does ${topic} relate to real-world applications?\n**Answer:** ${topic} has numerous real-world applications including practical scenarios and problem-solving approaches.\n\n**Q3:** What are the main components of ${topic}?\n**Answer:** The main components include the primary elements, secondary factors, and their interrelationships.\n\n**Q4:** Explain the significance of ${topic} in modern context.\n**Answer:** In modern context, ${topic} plays a crucial role in advancing understanding and practical applications.\n\n**Q5:** What are common challenges when studying ${topic}?\n**Answer:** Common challenges include conceptual complexity, application difficulty, and the need for interdisciplinary knowledge.`,
    mcq: `**MCQ: ${topic}**\n\n**Q1:** What is the primary definition of ${topic}?\na) A basic concept in the field\nb) An advanced theoretical framework ✓\nc) A practical application method\nd) A historical development\n**Correct: B** - This is the most accurate definition...\n\n**Q2:** Which statement about ${topic} is TRUE?\na) It has no real-world applications\nb) It was developed only recently\nc) It forms the basis of modern understanding ✓\nd) It is purely theoretical\n**Correct: C** - ${topic} indeed forms the foundation...\n\n**Q3:** ${topic} is primarily used for:\na) Entertainment purposes\nb) Academic study only\nc) Practical problem solving ✓\nd) Historical analysis\n**Correct: C** - The main use is practical application...`,
    flashcards: `**Flashcard Set: ${topic}**\n\n---\n**Card 1**\n🔹 Front: What is ${topic}?\n🔸 Back: ${topic} is a comprehensive concept that encompasses the study of fundamental principles and their applications in various contexts.\n\n---\n**Card 2**\n🔹 Front: Key features of ${topic}?\n🔸 Back: 1) Core principle understanding 2) Practical application 3) Theoretical framework 4) Real-world relevance\n\n---\n**Card 3**\n🔹 Front: How to master ${topic}?\n🔸 Back: Practice regularly, understand concepts deeply, apply to real problems, review with spaced repetition.\n\n---\n**Card 4**\n🔹 Front: Common pitfalls in ${topic}?\n🔸 Back: Memorizing without understanding, skipping foundational concepts, lack of practice application.\n\n---\n**Card 5**\n🔹 Front: Real-world application of ${topic}?\n🔸 Back: Used in professional settings, academic research, practical problem-solving, and innovation.`,
    summary: `**PDF Summary: ${topic}**\n\n## Executive Summary\nThis document covers ${topic} comprehensively, providing insights into key concepts, methodologies, and applications.\n\n## Key Points\n📌 **Point 1:** The document establishes foundational knowledge about ${topic}\n📌 **Point 2:** Critical analysis of main components and their interactions\n📌 **Point 3:** Practical applications and case studies presented\n📌 **Point 4:** Conclusions and recommendations for further study\n\n## Important Concepts\n• Core concept framework and theoretical basis\n• Methodological approaches and tools\n• Evidence-based conclusions\n• Future implications and research directions\n\n## Action Items\n1. Review the core concepts section thoroughly\n2. Practice the application examples provided\n3. Explore the referenced sources for deeper understanding`,
    homework: `**Solution: ${topic}**\n\n## Problem Analysis\nLet me break down this problem step by step.\n\n## Step-by-Step Solution\n\n**Step 1: Identify what's given**\nWe have the following information related to ${topic}:\n- Key variable or concept 1\n- Key variable or concept 2\n- Constraints and conditions\n\n**Step 2: Determine the approach**\nThe best approach here is to apply the relevant principle or formula for ${topic}.\n\n**Step 3: Apply the solution**\nUsing the appropriate method:\n→ First operation or logical step\n→ Second operation or reasoning\n→ Third step bringing us closer to the answer\n\n**Step 4: Verify the answer**\nCheck the solution makes logical sense and satisfies all given conditions.\n\n## Final Answer\n✅ The solution to ${topic} is: [Calculated/Reasoned Answer]\n\n## Key Concept Used\nThis problem relies on understanding [core principle], which is fundamental to mastering this topic.`,
    planner: `**Study Plan: ${topic}**\n\n## Personalized Study Schedule\n\n### Week 1: Foundation Building\n📅 **Monday** (2h): Introduction and basic concepts of ${topic}\n📅 **Tuesday** (1.5h): Core principles and theory review\n📅 **Wednesday** (2h): Practice problems and examples\n📅 **Thursday** (1h): Quick review and flashcard session\n📅 **Friday** (2h): Deep dive into advanced concepts\n📅 **Weekend** (1h/day): Light review and consolidation\n\n### Week 2: Deep Understanding\n📅 **Monday** (2h): Complex applications and case studies\n📅 **Tuesday** (1.5h): Problem-solving techniques\n📅 **Wednesday** (2h): Mock tests and self-assessment\n📅 **Thursday** (1h): Weak areas focus session\n📅 **Friday** (2h): Integration of all concepts\n\n## Daily Goals\n✅ Complete assigned reading\n✅ Practice 10 problems\n✅ Review flashcards (20 min)\n✅ Write summary notes\n\n## Resources Recommended\n• Primary textbook chapters\n• Online practice platforms\n• Study group sessions\n• StudyNovaAI tools (flashcards, quizzes)`,
  };
  return types[toolType] || types.notes;
}

export default function AIToolPage({
  title,
  description,
  icon,
  gradient,
  inputPlaceholder,
  inputLabel,
  generateLabel,
  children,
  renderInput,
  renderOutput,
  generateFn,
  badge = "AI-Powered",
  ...props
}: AIToolPageProps & { toolType?: string }) {
  const toolType = (props as { toolType?: string }).toolType || "notes";
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) {
      toast.error("Please enter a topic or content first.");
      return;
    }
    setLoading(true);
    setOutput("");
    try {
      if (generateFn) {
        const result = await generateFn(input);
        setOutput(result);
      } else {
        await new Promise(r => setTimeout(r, 1800));
        setOutput(defaultGenerateNotes(input, toolType));
      }
    } catch {
      toast.error("Failed to generate. Please try again.");
    }
    setLoading(false);
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded!");
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#06070f]">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className={`bg-gradient-to-r ${gradient} py-14`}>
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Sparkles size={14} />
                {badge}
              </div>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  {icon}
                </div>
                <h1 className="text-3xl md:text-4xl font-black">{title}</h1>
              </div>
              <p className="text-white/80 max-w-xl mx-auto text-base">{description}</p>
            </motion.div>
          </div>
        </div>

        {/* Tool Area */}
        <div className="container-premium py-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {/* Input Panel */}
              <div className="glass-card rounded-2xl p-6">
                <h2 className="font-bold text-slate-900 dark:text-white mb-4 text-lg">Input</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {inputLabel}
                  </label>
                  {renderInput ? (
                    renderInput(input, setInput)
                  ) : (
                    <textarea
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      placeholder={inputPlaceholder}
                      rows={10}
                      className="input-premium resize-none text-sm"
                    />
                  )}
                </div>
                {children}
                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg disabled:opacity-60 mt-2"
                >
                  {loading ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Generating...</>
                  ) : (
                    <><Sparkles size={16} />{generateLabel}</>
                  )}
                </button>
              </div>

              {/* Output Panel */}
              <div className="glass-card rounded-2xl p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-slate-900 dark:text-white text-lg">Output</h2>
                  {output && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                      >
                        {copied ? <CheckCircle2 size={13} /> : <Copy size={13} />}
                        {copied ? "Copied!" : "Copy"}
                      </button>
                      <button
                        onClick={handleDownload}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400 transition-all"
                      >
                        <Download size={13} />
                        Save
                      </button>
                      <button
                        onClick={handleGenerate}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 dark:hover:text-violet-400 transition-all"
                      >
                        <RefreshCw size={13} />
                        Retry
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-h-[300px]">
                  {loading ? (
                    <div className="h-full flex flex-col items-center justify-center gap-4 text-slate-400">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full border-2 border-blue-200 dark:border-blue-800" />
                        <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-transparent border-t-blue-600 animate-spin" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">AI is thinking...</p>
                        <p className="text-xs text-slate-400 mt-1">Generating your content</p>
                      </div>
                    </div>
                  ) : output ? (
                    renderOutput ? renderOutput(output) : (
                      <div className="h-full overflow-y-auto">
                        <pre className="text-sm text-slate-700 dark:text-slate-200 whitespace-pre-wrap leading-relaxed font-mono bg-slate-50 dark:bg-slate-900/40 rounded-xl p-4">
                          {output}
                        </pre>
                      </div>
                    )
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-3">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white opacity-20`}>
                        {icon}
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Your output will appear here</p>
                        <p className="text-xs text-slate-400 mt-1">Enter a topic and click Generate</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 p-5 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200/60 dark:border-blue-800/30"
            >
              <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">💡 Pro Tips</p>
              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                <li>• Be specific with your topic for better results (e.g., "Photosynthesis in C4 plants")</li>
                <li>• You can paste text from your textbook or notes for context</li>
                <li>• Download your results to save and review later</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
