import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import { getProgramBySlug, programs } from "@/data/programs";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  Users,
  BadgeCheck,
  IndianRupee,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Briefcase,
  Building2,
  ChevronLeft,
  Phone,
  MessageCircle,
} from "lucide-react";

const InfoTile = ({ icon: Icon, label, value }) => (
  <div className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm p-4">
    <div className="w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center mb-2.5">
      <Icon className="w-4 h-4" />
    </div>
    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{label}</div>
    <div className="text-white font-extrabold text-sm mt-0.5">{value}</div>
  </div>
);

const ProgramDetail = () => {
  const { slug } = useParams();
  const program = getProgramBySlug(slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  // Related programs in the same discipline
  const related = programs.filter((p) => p.discipline === program.discipline && p.slug !== program.slug).slice(0, 3);

  return (
    <PageLayout>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(900px 400px at 15% -10%, rgba(239,68,68,0.35), transparent 60%), radial-gradient(900px 400px at 100% 20%, rgba(249,115,22,0.25), transparent 60%), linear-gradient(180deg, #0b1220 0%, #0f172a 100%)",
        }}
        data-testid="program-hero"
      >
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 pt-8 md:pt-14 pb-12 md:pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <Link to="/" className="hover:text-red-300">Home</Link>
            <span className="text-slate-500">/</span>
            <Link to="/programs" className="hover:text-red-300">Programs</Link>
            <span className="text-slate-500">/</span>
            <span className="text-white font-semibold">{program.short}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-red-600/15 border border-red-500/30 text-red-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" /> {program.discipline}
                </span>
                {program.tags?.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-widest font-bold bg-white/10 border border-white/15 px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
                {program.name}
              </h1>

              <p className="mt-4 text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
                <strong className="text-white">{program.short}</strong> at Sri Sai Group of Institutes, Pathankot &mdash;
                a {program.duration.toLowerCase()} {program.degree.toLowerCase()} programme designed to make you
                industry-ready, research-ready and life-ready.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/apply">
                  <Button className="h-11 px-6 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider" data-testid="program-apply-cta">
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:18001218427">
                  <Button variant="outline" className="h-11 px-5 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-bold uppercase tracking-wider">
                    <Phone className="w-4 h-4 mr-2" /> 1800 121 84271
                  </Button>
                </a>
                <a href="https://wa.me/919418001818" target="_blank" rel="noreferrer">
                  <Button className="h-11 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider">
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Info tiles */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3 md:gap-4">
              <InfoTile icon={Clock} label="Duration" value={program.duration} />
              <InfoTile icon={BadgeCheck} label="Degree" value={program.degree} />
              <InfoTile icon={Users} label="Seats" value={`${program.seats} students`} />
              <InfoTile icon={IndianRupee} label="Tuition Fee" value={program.fee} />
              <div className="col-span-2 rounded-xl bg-red-600/15 border border-red-500/30 backdrop-blur-sm p-4">
                <div className="text-[10px] uppercase tracking-widest text-red-200 font-bold">Approvals</div>
                <div className="text-white font-bold text-sm mt-1 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-300 mt-0.5 shrink-0" />
                  {program.approvedBy}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white py-12 md:py-16" data-testid="program-body">
        <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Eligibility */}
            <div id="eligibility">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-black text-sm">01</div>
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">Eligibility</h2>
              </div>
              <p className="pl-11 text-slate-700 text-sm md:text-[15px] leading-relaxed">{program.eligibility}</p>
            </div>

            {/* Highlights */}
            <div id="highlights">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-black text-sm">02</div>
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">Programme Highlights</h2>
              </div>
              <ul className="pl-11 space-y-2.5">
                {program.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm md:text-[15px] leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div id="curriculum">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-black text-sm">03</div>
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">Curriculum snapshot</h2>
              </div>
              <div className="pl-11 grid sm:grid-cols-2 gap-3">
                {program.semesters.map((s, i) => (
                  <div key={i} className="rounded-xl bg-slate-50 border border-slate-200 p-4 hover:border-red-200 hover:bg-white transition-colors">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-red-700 font-bold mb-1.5">
                      <BookOpen className="w-3.5 h-3.5" /> Phase {i + 1}
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Careers */}
            <div id="careers">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-black text-sm">04</div>
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">Career opportunities</h2>
              </div>
              <div className="pl-11 flex flex-wrap gap-2">
                {program.careers.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-100 text-red-800 text-xs md:text-sm font-semibold px-3 py-1.5"
                  >
                    <Briefcase className="w-3.5 h-3.5" /> {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Recruiters */}
            <div id="recruiters">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-black text-sm">05</div>
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">Top recruiters</h2>
              </div>
              <div className="pl-11 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                {program.recruiters.map((r) => (
                  <div key={r} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-700 flex items-center gap-2 hover:border-red-200 hover:bg-red-50/40 transition-colors">
                    <Building2 className="w-4 h-4 text-red-600" /> {r}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sticky Apply card */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <div className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 px-5 py-4 text-white">
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-90">Admissions 2026</div>
                  <div className="text-lg font-extrabold leading-tight">Reserve your seat in {program.short}</div>
                </div>
                <div className="p-5 md:p-6 bg-white space-y-4">
                  <div className="text-sm text-slate-600 leading-relaxed">
                    Scholarships up to <strong className="text-slate-900">100%</strong> for meritorious students &middot; EMI-friendly fees &middot; Placement assurance from Year 1.
                  </div>
                  <Link to="/apply" className="block">
                    <Button className="w-full h-11 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider">
                      Start Application <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <div className="grid grid-cols-2 gap-2">
                    <a href="tel:18001218427" className="text-center rounded-lg border border-slate-200 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50">
                      <Phone className="w-3.5 h-3.5 inline mr-1" /> Call
                    </a>
                    <a href="https://wa.me/919418001818" target="_blank" rel="noreferrer" className="text-center rounded-lg border border-emerald-200 bg-emerald-50 py-2.5 text-xs font-bold text-emerald-700 hover:bg-emerald-100">
                      <MessageCircle className="w-3.5 h-3.5 inline mr-1" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-[10px] uppercase tracking-widest text-red-700 font-bold mb-3">
                    Related in {program.discipline}
                  </div>
                  <ul className="space-y-2.5">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          to={`/programs/${r.slug}`}
                          className="flex items-center justify-between gap-3 text-sm text-slate-700 hover:text-red-700 group"
                          data-testid={`program-related-${r.slug}`}
                        >
                          <span className="font-semibold">{r.short}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom nav */}
      <section className="bg-slate-50 py-8 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-red-700"
            data-testid="program-back-link"
          >
            <ChevronLeft className="w-4 h-4" /> Back to all programs
          </Link>
          <Link to="/apply">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-wider">
              Apply for {program.short} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProgramDetail;
