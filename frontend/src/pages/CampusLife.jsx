import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import { campusTopics, campusCategories } from "@/data/campusLife";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Rocket, Trophy, ShieldCheck } from "lucide-react";

const CampusLife = () => {
  return (
    <PageLayout>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(1000px 500px at 15% -10%, rgba(239,68,68,0.35), transparent 60%), radial-gradient(900px 500px at 100% 10%, rgba(249,115,22,0.25), transparent 60%), linear-gradient(180deg, #0b1220 0%, #0f172a 100%)",
        }}
        data-testid="campus-hero"
      >
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 pt-12 md:pt-20 pb-16 md:pb-20">
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <Link to="/" className="hover:text-red-300">Home</Link>
            <span className="text-slate-500">/</span>
            <span className="text-white font-semibold">Campus Life</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-200 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Campus Life at SSGI
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white">
              Not just a college. <br />
              <span className="italic font-light text-slate-300">A community you&rsquo;ll always call home.</span>
            </h1>
            <p className="mt-5 md:mt-6 text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              From hostels and cafeterias to sports, clubs, cultural fests and student support &mdash; discover
              everything that makes life at SSGI Pathankot memorable.
            </p>
          </div>

          {/* KPI */}
          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: Users,       label: "Students on Campus",   value: "8,000+" },
              { icon: Trophy,      label: "Clubs & Societies",    value: "20+"    },
              { icon: Rocket,      label: "Events / year",        value: "60+"    },
              { icon: ShieldCheck, label: "Ragging-free campus",  value: "100%"   },
            ].map((k) => (
              <div key={k.label} className="rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-sm p-4">
                <div className="flex items-center gap-2 text-red-300 text-[10px] uppercase tracking-widest font-bold">
                  <k.icon className="w-3.5 h-3.5" /> {k.label}
                </div>
                <div className="mt-2 text-white text-2xl md:text-3xl font-black tracking-tight">{k.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      {campusCategories.map((cat) => {
        const list = campusTopics.filter((t) => t.category === cat);
        return (
          <section key={cat} className="bg-white py-14 md:py-20 border-b border-slate-100" data-testid={`campus-cat-${cat.toLowerCase().replace(/\s+/g, "-")}`}>
            <div className="max-w-[1400px] mx-auto px-4">
              <div className="mb-8 md:mb-10">
                <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">{cat}</div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {cat === "Facilities" ? "World-class facilities on campus." : "A vibrant, student-led college life."}
                </h2>
                <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {list.map((t) => (
                  <Link
                    key={t.slug}
                    to={t.linkOverride || `/campus-life/${t.slug}`}
                    className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-2xl hover:-translate-y-0.5 hover:border-red-200 transition-all overflow-hidden"
                    data-testid={`campus-card-${t.slug}`}
                  >
                    <div className="w-11 h-11 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-md mb-4">
                      <t.icon className="w-5 h-5" />
                    </div>
                    <div className="font-extrabold text-slate-900 text-lg leading-tight">{t.title}</div>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">{t.tagline}</p>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Explore</span>
                      <ArrowRight className="w-4 h-4 text-red-700 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="pointer-events-none absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-slate-950 text-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <Rocket className="w-10 h-10 md:w-12 md:h-12 text-red-500 mx-auto" />
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight">
            Ready to live it?
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Applications for the 2026 batch are open. Come, be part of the SSGI family.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link to="/apply">
              <Button className="h-12 px-8 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider" data-testid="campus-apply-cta">
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CampusLife;
