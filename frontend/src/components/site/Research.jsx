import React, { useEffect, useRef, useState } from "react";
import { research, researchLabs } from "@/mock";
import { ArrowRight, Cpu, Beaker, Wrench, HardHat, ClipboardCheck, Radio } from "lucide-react";
import Placeholder from "./Placeholder";

const labIcons = [Cpu, Beaker, Wrench, HardHat, ClipboardCheck, Radio];

const useCountUp = (end, duration = 1500, active = true) => {
  const [c, setC] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start; let frame;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setC(Math.floor(end * p));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, active]);
  return c;
};

const StatCounter = ({ end, suffix, label, sub, active }) => {
  const val = useCountUp(end, 1500, active);
  return (
    <div className="text-center p-4 md:p-6 rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="text-3xl md:text-5xl font-extrabold text-red-600 leading-none">
        {val.toLocaleString()}<span className="text-red-600">{suffix}</span>
      </div>
      <div className="mt-2 text-slate-900 font-extrabold text-xs md:text-sm uppercase tracking-wider">{label}</div>
      <div className="text-slate-500 text-[10px] md:text-xs mt-1">{sub}</div>
    </div>
  );
};

const Research = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-14 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Innovation @ SSGI</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Pioneering <span className="font-light italic text-slate-500">Research</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-red-600 mx-auto mt-4 md:mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
          {research.map((r) => (
            <StatCounter key={r.label} end={r.value} suffix={r.suffix} label={r.label} sub={r.sub} active={visible} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {researchLabs.map((lab, i) => {
            const Icon = labIcons[i % labIcons.length];
            return (
              <div key={lab.title} className="group rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-xl transition-shadow">
                <Placeholder
                  icon={Icon}
                  label={lab.title}
                  className="w-full aspect-[16/10]"
                  rounded="rounded-none"
                />
                <div className="p-4 md:p-5">
                  <h3 className="font-extrabold text-base md:text-lg text-slate-900 group-hover:text-red-700 transition-colors">{lab.title}</h3>
                  <p className="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed">{lab.detail}</p>
                  <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-red-700 font-bold uppercase text-xs tracking-widest hover:gap-2.5 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Research;
