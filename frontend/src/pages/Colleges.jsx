import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import { colleges } from "@/data/colleges";
import { Button } from "@/components/ui/button";
import { Building2, ArrowRight, UserCircle2, GraduationCap, Sparkles } from "lucide-react";

const Colleges = () => (
  <PageLayout>
    {/* HERO */}
    <section className="relative overflow-hidden bg-slate-950 text-white" data-testid="colleges-hero">
      <div className="relative max-w-[1400px] mx-auto px-4 pt-12 md:pt-20 pb-16 md:pb-20">
        <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
          <Link to="/" className="hover:text-red-300">Home</Link>
          <span className="text-slate-500">/</span>
          <span className="text-white font-semibold">Colleges</span>
        </div>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-200 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" /> {colleges.length} Constituent Colleges
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
            One campus. <span className="text-red-500">Many disciplines</span>.
          </h1>
          <p className="mt-5 md:mt-6 text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Sri Sai Group of Institutes is home to four constituent colleges &mdash; each led by an experienced
            Principal, delivering AICTE / PCI / NCTE-approved programmes across engineering, pharmacy, education,
            management, IT, allied health and hospitality.
          </p>
        </div>
      </div>
    </section>

    {/* COLLEGES GRID */}
    <section className="bg-white py-14 md:py-20" data-testid="colleges-grid">
      <div className="max-w-[1400px] mx-auto px-4 grid md:grid-cols-2 gap-5 md:gap-6">
        {colleges.map((c, i) => (
          <Link
            key={c.slug}
            to={`/colleges/${c.slug}`}
            className="group relative rounded-2xl border border-slate-200 bg-white p-6 md:p-8 hover:shadow-2xl hover:-translate-y-0.5 hover:border-red-200 transition-all overflow-hidden"
            data-testid={`college-card-${c.slug}`}
          >
            <div className="absolute top-6 right-8 text-slate-100 font-black text-6xl tabular-nums select-none group-hover:text-red-50 transition-colors">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-red-600 text-white flex items-center justify-center mb-4 shadow-md">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-[10px] uppercase tracking-widest text-red-700 font-bold">{c.short}</div>
              <h3 className="mt-1 text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">{c.name}</h3>
              <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed max-w-lg">{c.tagline}</p>

              <div className="mt-5 flex items-center gap-3 text-sm">
                <UserCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                <div>
                  <div className="font-extrabold text-slate-900">{c.principal.name}</div>
                  <div className="text-xs text-slate-500">{c.principal.role}</div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <div className="inline-flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-red-600" /> {c.programSlugs.length} programmes
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-red-600" /> {c.approvals[0]}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Explore College</span>
                <ArrowRight className="w-4 h-4 text-red-700 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-slate-950 text-white py-14 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <Building2 className="w-10 h-10 md:w-12 md:h-12 text-red-500 mx-auto" />
        <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight">
          Ready to join the SSGI family?
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Applications for the 2026 batch are open across all four colleges.
        </p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link to="/apply">
            <Button className="h-12 px-8 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider" data-testid="colleges-apply-cta">
              Apply Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Colleges;
