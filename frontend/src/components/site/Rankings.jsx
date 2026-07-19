import React from "react";
import { rankings } from "@/mock";
import { CheckCircle2, Award } from "lucide-react";

const Rankings = () => (
  <section className="bg-white py-16 md:py-14 md:py-20">
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-12">
        <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Approvals & Recognitions</div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Proudly Distinguished by our <br className="hidden md:block" />
          <span className="text-red-600">Approvals</span> &amp; <span className="font-light italic text-slate-500">Accreditations</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rankings.map((r) => (
          <div key={r.title} className="group relative bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-red-200 transition-all duration-300">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="w-12 h-12 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm ${r.color}`}>
                {r.highlight}
              </span>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{r.org}</div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-red-700 transition-colors">
              {r.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">{r.detail}</p>
            <div className="mt-4 flex items-center gap-2 text-emerald-600 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4" /> Verified Recognition
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Rankings;
