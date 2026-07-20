import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import { getCollege, colleges } from "@/data/colleges";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/button";
import {
  Building2,
  UserCircle2,
  ShieldCheck,
  ArrowRight,
  ChevronLeft,
  GraduationCap,
  Clock,
  Users,
  Sparkles,
  BadgeCheck,
  Phone,
} from "lucide-react";

const CollegeDetail = () => {
  const { slug } = useParams();
  const college = getCollege(slug);
  if (!college) return <Navigate to="/colleges" replace />;

  const collegePrograms = college.programSlugs
    .map((s) => programs.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white" data-testid="college-hero">
        <div className="relative max-w-[1400px] mx-auto px-4 pt-8 md:pt-14 pb-12 md:pb-16">
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <Link to="/" className="hover:text-red-300">Home</Link>
            <span className="text-slate-500">/</span>
            <Link to="/colleges" className="hover:text-red-300">Colleges</Link>
            <span className="text-slate-500">/</span>
            <span className="text-white font-semibold">{college.short}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-200 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
                <Building2 className="w-3.5 h-3.5" /> Constituent College of SSGI
              </div>
              <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black leading-[1.05] tracking-tight">
                {college.name}
              </h1>
              <p className="mt-4 text-red-200 text-base md:text-lg font-semibold">{college.tagline}</p>
              <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">{college.intro}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/apply">
                  <Button className="h-11 px-6 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider">
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:8427184271">
                  <Button variant="outline" className="h-11 px-5 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-bold uppercase tracking-wider">
                    <Phone className="w-4 h-4 mr-2" /> 84271-84271
                  </Button>
                </a>
              </div>
            </div>

            {/* Principal card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-6 md:p-8">
                <div className="text-[10px] uppercase tracking-widest text-red-300 font-bold">Head of College</div>
                <div className="mt-3 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">
                    <UserCircle2 className="w-8 h-8" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-extrabold text-white text-lg leading-tight">{college.principal.name}</div>
                    <div className="text-sm text-slate-300 mt-0.5">{college.principal.role}</div>
                    <div className="text-xs text-slate-400 mt-1">{college.name}</div>
                  </div>
                </div>
                {college.principal.linkTo && (
                  <Link to={college.principal.linkTo} className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-red-300 hover:text-red-200">
                    Read Message <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>

              {/* Approvals */}
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-6">
                <div className="text-[10px] uppercase tracking-widest text-red-300 font-bold">Approvals</div>
                <ul className="mt-3 space-y-2">
                  {college.approvals.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-white">
                      <ShieldCheck className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {college.stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-sm p-4 md:p-5">
                <div className="text-red-300 text-[10px] uppercase tracking-widest font-bold">{s.label}</div>
                <div className="mt-2 text-white text-2xl md:text-3xl font-black tracking-tight tabular-nums">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="bg-white py-14 md:py-20" data-testid="college-programs">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mb-8 md:mb-10">
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Programmes Offered</div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Explore {college.short} programmes.
            </h2>
            <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {collegePrograms.map((p) => (
              <Link
                key={p.slug}
                to={`/programs/${p.slug}`}
                className="group relative rounded-2xl border border-slate-200 bg-white p-5 md:p-6 hover:shadow-2xl hover:-translate-y-0.5 hover:border-red-200 transition-all overflow-hidden"
                data-testid={`college-program-${p.slug}`}
              >
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold bg-slate-900 text-white px-2.5 py-1 rounded-full mb-3">
                  <Sparkles className="w-3 h-3 text-red-400" /> {p.discipline}
                </div>
                <div className="font-extrabold text-slate-900 text-lg leading-tight">{p.short}</div>
                <p className="mt-1.5 text-sm text-slate-500 line-clamp-2">{p.name}</p>

                <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-3 text-[12px] text-slate-600">
                  <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-red-600" />{p.duration.split(" (")[0]}</div>
                  <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-red-600" />{p.seats} seats</div>
                  <div className="flex items-center gap-1.5"><BadgeCheck className="w-3.5 h-3.5 text-red-600" />{p.degree.split(" (")[0]}</div>
                  <div className="flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5 text-red-600" />{p.fee.replace("(approx)", "").trim()}</div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-red-700 uppercase tracking-wider">View details</span>
                  <ArrowRight className="w-4 h-4 text-red-700 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link to="/colleges" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white">
            <ChevronLeft className="w-4 h-4" /> All Colleges
          </Link>
          <Link to="/apply">
            <Button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider" data-testid="college-apply-cta">
              Apply for 2026 <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default CollegeDetail;
