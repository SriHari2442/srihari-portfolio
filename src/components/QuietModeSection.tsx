import React, { useState } from 'react';
import {
  BellOff,
  Bell,
  Clock,
  Sparkles,
  CheckCircle,
  MessageSquare,
  Moon,
  Sun,
  Wrench,
} from 'lucide-react';
import { PRODUCT_CONCEPT } from '../data/portfolioData';

export const QuietModeSection: React.FC = () => {
  const [quietActive, setQuietActive] = useState(true);

  return (
    <section id="achievements" className="py-6">
      <div className="aurora-glass rounded-3xl p-6 sm:p-8 border border-white/80 shadow-lg">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold border border-emerald-200/80 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{PRODUCT_CONCEPT.type}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {PRODUCT_CONCEPT.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1 max-w-2xl">
              {PRODUCT_CONCEPT.description}
            </p>
          </div>

          {/* Tools Badge */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
              <Wrench className="w-3.5 h-3.5 text-indigo-600" />
              <span>Tools: {PRODUCT_CONCEPT.tools.join(' & ')}</span>
            </div>
          </div>
        </div>

        {/* Features Explored Grid & Scenario Prototype */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Feature List */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Features Explored
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PRODUCT_CONCEPT.featuresExplored.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 flex items-start gap-3 shadow-xs"
                >
                  <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Scenario Demonstration UI */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-xs rounded-[2.5rem] bg-slate-950 p-4 border-4 border-slate-800 shadow-2xl relative overflow-hidden">
              {/* Notch */}
              <div className="w-28 h-4 bg-slate-900 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              </div>

              {/* Messaging Screen */}
              <div className="rounded-[1.8rem] bg-slate-900 text-white p-4 space-y-4 min-h-[320px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                        WA
                      </div>
                      <span className="font-extrabold text-xs tracking-tight">WhatsApp</span>
                    </div>

                    <button
                      onClick={() => setQuietActive(!quietActive)}
                      aria-pressed={quietActive}
                      aria-label="Toggle Quiet Mode active state"
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none cursor-pointer ${
                        quietActive
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {quietActive ? <Moon className="w-3 h-3 text-amber-300" /> : <Sun className="w-3 h-3" />}
                      <span>{quietActive ? 'Quiet ON' : 'Quiet OFF'}</span>
                    </button>
                  </div>

                  {/* Banner */}
                  <div className="p-3 rounded-2xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-100 mb-3">
                    <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                      <span className="flex items-center gap-1">
                        <BellOff className="w-3.5 h-3.5 text-indigo-300" />
                        Silent Notifications
                      </span>
                      <span className="text-[9px] text-indigo-300">Scheduled Period</span>
                    </div>
                    <p className="text-[10px] text-slate-300">
                      Non-urgent messages muted automatically. Sender sees quiet status badge.
                    </p>
                  </div>

                  {/* Auto-reply demo */}
                  <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-[10px] text-slate-300 space-y-1">
                    <div className="font-bold text-emerald-400 flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" /> Automatic Reply Status
                    </div>
                    <p>"Sri Hari is currently in Quiet Mode for digital wellbeing."</p>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-[10px] text-slate-400 text-center">
                  Scenario Demonstration Concept
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
