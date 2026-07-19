import React, { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { admissionDeadline } from "@/mock";
import { Button } from "@/components/ui/button";

const pad = (n) => String(n).padStart(2, "0");

const CountdownPopup = ({ onApply }) => {
  const [closed, setClosed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [remaining, setRemaining] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const target = new Date(admissionDeadline).getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const d = Math.floor(diff / (24 * 3600 * 1000));
      const h = Math.floor((diff % (24 * 3600 * 1000)) / (3600 * 1000));
      const m = Math.floor((diff % (3600 * 1000)) / (60 * 1000));
      const s = Math.floor((diff % (60 * 1000)) / 1000);
      setRemaining({ d, h, m, s });
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  if (closed || !visible) return null;

  // Minimized floating badge (mobile-only default & optional desktop)
  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-4 left-4 z-40 bg-red-600 hover:bg-red-700 text-white rounded-full px-4 py-2.5 shadow-lg flex items-center gap-2 animate-[fadeIn_0.4s_ease-in-out]"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest">Admissions</span>
        <span className="font-extrabold text-sm tabular-nums">{pad(remaining.d)}d {pad(remaining.h)}h</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-3 md:left-4 z-40 w-[calc(100vw-24px)] md:w-[280px] max-w-[280px] animate-[fadeIn_0.5s_ease-in-out]">
      <div className="relative bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden">
        <div className="absolute top-2 right-2 z-10 flex gap-1">
          <button
            onClick={() => setMinimized(true)}
            className="w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center text-xs font-bold transition-colors"
            aria-label="Minimize"
          >
            –
          </button>
          <button
            onClick={() => setClosed(true)}
            className="w-6 h-6 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="p-4 pb-3">
          <div className="text-xs font-bold text-slate-800 leading-snug pr-14">
            Application Window for SSGI Admission 2026 Closes on
          </div>
          <div className="text-red-600 font-extrabold text-sm mt-1">15th July 2026</div>
          <div className="grid grid-cols-4 gap-1 mt-3">
            {[
              { v: remaining.d, l: "Days" },
              { v: remaining.h, l: "Hours" },
              { v: remaining.m, l: "Minutes" },
              { v: remaining.s, l: "Seconds" },
            ].map((t) => (
              <div key={t.l} className="bg-slate-900 text-white rounded-sm py-1.5 text-center">
                <div className="text-base font-extrabold leading-none tabular-nums">{pad(t.v)}</div>
                <div className="text-[9px] uppercase tracking-widest text-slate-300 mt-0.5">{t.l}</div>
              </div>
            ))}
          </div>
        </div>
        <Button onClick={onApply} className="w-full rounded-none bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs py-4">
          Apply Now ! <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default CountdownPopup;
