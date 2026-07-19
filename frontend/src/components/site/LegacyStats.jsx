import React, { useEffect, useRef, useState } from "react";
import { legacyStats } from "@/mock";

const useCountUp = (end, duration = 1800, active = true) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start;
    let frame;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(end * progress));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, active]);
  return count;
};

const StatItem = ({ value, suffix, label, sub, active }) => {
  const count = useCountUp(value, 1800, active);
  return (
    <div className="text-center px-3 md:px-4 py-4 md:py-6">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-600 tracking-tight leading-none">
        {count.toLocaleString()}
        <span className="text-red-600">{suffix}</span>
      </div>
      <div className="mt-2 md:mt-3 text-slate-900 font-extrabold text-[11px] md:text-sm uppercase tracking-wider">{label}</div>
      <div className="mt-1 text-slate-500 text-[10px] md:text-xs leading-snug">{sub}</div>
    </div>
  );
};

const LegacyStats = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setVisible(true));
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-16 md:py-14 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            An <span className="font-light italic text-slate-500">Illustrious</span> Legacy we{" "}
            <br className="hidden md:block" />
            continue to <span className="text-red-600">Shape</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-red-600 mx-auto mt-4 md:mt-5 rounded-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-2">
          {legacyStats.map((s) => (
            <StatItem key={s.label} {...s} active={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyStats;
