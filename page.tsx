"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

type Category = "length" | "weight" | "temperature" | "volume" | "area";

const units: Record<Category, { label: string; factor?: number; name: string }[]> = {
  length: [
    { name: "km", label: "Kilometer", factor: 1000 },
    { name: "m", label: "Meter", factor: 1 },
    { name: "cm", label: "Centimeter", factor: 0.01 },
    { name: "mm", label: "Millimeter", factor: 0.001 },
    { name: "mi", label: "Mile", factor: 1609.344 },
    { name: "yd", label: "Yard", factor: 0.9144 },
    { name: "ft", label: "Foot", factor: 0.3048 },
    { name: "in", label: "Inch", factor: 0.0254 },
  ],
  weight: [
    { name: "kg", label: "Kilogram", factor: 1 },
    { name: "g", label: "Gram", factor: 0.001 },
    { name: "mg", label: "Milligram", factor: 0.000001 },
    { name: "lb", label: "Pound", factor: 0.453592 },
    { name: "oz", label: "Ounce", factor: 0.0283495 },
    { name: "t", label: "Metric Ton", factor: 1000 },
  ],
  temperature: [
    { name: "C", label: "Celsius" },
    { name: "F", label: "Fahrenheit" },
    { name: "K", label: "Kelvin" },
  ],
  volume: [
    { name: "L", label: "Liter", factor: 1 },
    { name: "mL", label: "Milliliter", factor: 0.001 },
    { name: "m3", label: "Cubic Meter", factor: 1000 },
    { name: "gal", label: "Gallon (US)", factor: 3.78541 },
    { name: "fl oz", label: "Fluid Ounce", factor: 0.0295735 },
    { name: "cup", label: "Cup", factor: 0.236588 },
  ],
  area: [
    { name: "m2", label: "Square Meter", factor: 1 },
    { name: "km2", label: "Square Kilometer", factor: 1000000 },
    { name: "cm2", label: "Square Centimeter", factor: 0.0001 },
    { name: "ft2", label: "Square Foot", factor: 0.092903 },
    { name: "acre", label: "Acre", factor: 4046.86 },
    { name: "ha", label: "Hectare", factor: 10000 },
  ],
};

function convertTemp(val: number, from: string, to: string): number {
  let c = val;
  if (from === "F") c = (val - 32) * 5 / 9;
  else if (from === "K") c = val - 273.15;
  if (to === "F") return c * 9 / 5 + 32;
  if (to === "K") return c + 273.15;
  return c;
}

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: "length", label: "Length", emoji: "📏" },
  { key: "weight", label: "Weight", emoji: "⚖️" },
  { key: "temperature", label: "Temp", emoji: "🌡️" },
  { key: "volume", label: "Volume", emoji: "🧪" },
  { key: "area", label: "Area", emoji: "📐" },
];

export default function UnitConverterPage() {
  const [category, setCategory] = useState<Category>("length");
  const [from, setFrom] = useState(units.length[0].name);
  const [to, setTo] = useState(units.length[1].name);
  const [value, setValue] = useState("");

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return "";
    if (category === "temperature") return convertTemp(v, from, to).toFixed(4);
    const fromUnit = units[category].find(u => u.name === from);
    const toUnit = units[category].find(u => u.name === to);
    if (!fromUnit?.factor || !toUnit?.factor) return "";
    return ((v * fromUnit.factor) / toUnit.factor).toFixed(6);
  };

  const result = convert();

  return (
    <main className="min-h-screen bg-white dark:bg-[#06070f]">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container-premium">
          <div className="max-w-lg mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-center mb-8">
                <span className="text-4xl mb-2 block">📐</span>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Unit Converter</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Convert between any units instantly</p>
              </div>

              <div className="flex gap-2 mb-5 overflow-x-auto no-scrollbar">
                {categories.map(c => (
                  <button key={c.key} onClick={() => { setCategory(c.key); setFrom(units[c.key][0].name); setTo(units[c.key][1].name); }} className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${category === c.key ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"}`}>
                    {c.emoji} {c.label}
                  </button>
                ))}
              </div>

              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">Value</label>
                  <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter value to convert" className="input-premium text-lg" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">From</label>
                    <select value={from} onChange={e => setFrom(e.target.value)} className="input-premium">
                      {units[category].map(u => <option key={u.name} value={u.name}>{u.label} ({u.name})</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">To</label>
                    <select value={to} onChange={e => setTo(e.target.value)} className="input-premium">
                      {units[category].map(u => <option key={u.name} value={u.name}>{u.label} ({u.name})</option>)}
                    </select>
                  </div>
                </div>

                {result && (
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 text-center text-white">
                    <p className="text-white/70 text-sm">{value} {from} =</p>
                    <p className="text-4xl font-black">{parseFloat(result).toLocaleString()}</p>
                    <p className="text-white/70 text-lg font-medium">{to}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
