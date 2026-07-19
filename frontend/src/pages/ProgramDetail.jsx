import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import {
  getProgramBySlug,
  programs,
  getKpis,
  getSkills,
  getWhySSGI,
  getFaqs,
  getLearningOutcomes,
  getFeeBreakdown,
} from "@/data/programs";
import { Button } from "@/components/ui/button";
import ProgramEnquiryForm from "@/components/site/ProgramEnquiryForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  TrendingUp,
  Award,
  Target,
  CheckCircle2,
  Rocket,
  Trophy,
  Star,
} from "lucide-react";

/* ---------- Sticky in-page tabs ---------- */
const TABS = [
  { id: "overview",    label: "Overview" },
  { id: "curriculum",  label: "Curriculum" },
  { id: "outcomes",    label: "Learning Outcomes" },
  { id: "placements",  label: "Careers & Placements" },
  { id: "fees",        label: "Fees & Scholarships" },
  { id: "enquire",     label: "Enquire" },
  { id: "faqs",        label: "FAQs" },
];

const InfoTile = ({ icon: Icon, label, value }) => (
  <div className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm p-4">
    <div className="w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center mb-2.5">
      <Icon className="w-4 h-4" />
    </div>
    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{label}</div>
    <div className="text-white font-extrabold text-sm mt-0.5">{value}</div>
  </div>
);

const SectionHeader = ({ eyebrow, title, description }) => (
  <div className="mb-8 md:mb-10">
    <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">{eyebrow}</div>
    <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">{title}</h2>
    {description && <p className="mt-3 text-slate-600 text-sm md:text-base max-w-2xl leading-relaxed">{description}</p>}
    <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
  </div>
);

const ProgramDetail = () => {
  const { slug } = useParams();
  const program = getProgramBySlug(slug);
  const [activeTab, setActiveTab] = useState("overview");

  // ScrollSpy for the sticky tab bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      let current = "overview";
      for (const t of TABS) {
        const el = document.getElementById(t.id);
        if (el && el.offsetTop <= scrollY) current = t.id;
      }
      setActiveTab(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!program) return <Navigate to="/programs" replace />;

  const kpis = getKpis(program);
  const skills = getSkills(program);
  const whyList = getWhySSGI(program);
  const faqs = getFaqs(program);
  const outcomes = getLearningOutcomes(program);
  const feeRows = getFeeBreakdown(program);
  const related = programs.filter((p) => p.discipline === program.discipline && p.slug !== program.slug).slice(0, 3);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 140, behavior: "smooth" });
  };

  return (
    <PageLayout>
      {/* ============ HERO ============ */}
      <section
        className="relative overflow-hidden bg-slate-950"
        data-testid="program-hero"
      >
        <div className="relative max-w-[1400px] mx-auto px-4 pt-8 md:pt-14 pb-12 md:pb-16">
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
                  <span key={t} className="text-[10px] uppercase tracking-widest font-bold bg-white/10 border border-white/15 px-2.5 py-1 rounded-full">{t}</span>
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
                <a href="tel:8427184271">
                  <Button variant="outline" className="h-11 px-5 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-bold uppercase tracking-wider">
                    <Phone className="w-4 h-4 mr-2" /> 84271-84271
                  </Button>
                </a>
                <a href="https://wa.me/918427184271" target="_blank" rel="noreferrer">
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

          {/* KPI Bar */}
          <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: Trophy,    label: "Highest Package",  value: kpis.highPackage },
              { icon: TrendingUp,label: "Average Package",  value: kpis.avgPackage },
              { icon: Target,    label: "Placement Rate",   value: kpis.placementRate },
              { icon: Building2, label: "Recruiters",       value: kpis.recruitersCount },
            ].map((k) => (
              <div key={k.label} className="rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-sm p-4 md:p-5">
                <div className="flex items-center gap-2 text-red-300 text-[10px] uppercase tracking-widest font-bold">
                  <k.icon className="w-3.5 h-3.5" /> {k.label}
                </div>
                <div className="mt-2 text-white text-2xl md:text-3xl font-black tracking-tight tabular-nums">{k.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STICKY TAB NAV ============ */}
      <div
        className="sticky top-16 md:top-32 z-30 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm"
        data-testid="program-tabnav"
      >
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide -mx-4 px-4">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => scrollTo(t.id)}
                className={`relative shrink-0 px-4 py-4 text-[12px] md:text-[13px] font-bold uppercase tracking-wider transition-colors ${
                  activeTab === t.id
                    ? "text-red-700"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                data-testid={`program-tab-${t.id}`}
              >
                {t.label}
                {activeTab === t.id && (
                  <span className="absolute inset-x-3 bottom-0 h-0.5 bg-red-600 rounded-full" />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollTo("enquire")}
              className="ml-auto shrink-0"
              data-testid="program-tab-enquire-cta"
            >
              <span className="inline-flex items-center h-9 px-4 rounded-md bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase text-[11px] tracking-wider">
                Enquire <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ============ OVERVIEW ============ */}
      <section id="overview" className="bg-white py-14 md:py-20 scroll-mt-32">
        <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-8">
            <SectionHeader
              eyebrow="Overview"
              title={`Everything about ${program.short}`}
              description={`Discover why ${program.short} at SSGI is one of the most sought-after ${program.discipline.toLowerCase()} programmes in North India.`}
            />

            {/* Eligibility */}
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-6 mb-6">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">
                <BadgeCheck className="w-3.5 h-3.5" /> Eligibility
              </div>
              <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed">{program.eligibility}</p>
            </div>

            {/* Highlights */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-red-700 font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Programme Highlights
              </div>
              <ul className="space-y-2.5">
                {program.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm md:text-[15px] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 shrink-0" /> {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills chips */}
            <div className="mt-6 md:mt-8">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-red-700 font-bold mb-3">
                <Rocket className="w-3.5 h-3.5" /> Skills you&rsquo;ll master
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-xs md:text-sm font-semibold bg-red-50 border border-red-100 text-red-800 px-3 py-1.5 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky enquiry sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-40 space-y-6">
              <ProgramEnquiryForm program={program} variant="compact" />

              {related.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-[10px] uppercase tracking-widest text-red-700 font-bold mb-3">
                    Related in {program.discipline}
                  </div>
                  <ul className="space-y-2.5">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link to={`/programs/${r.slug}`} className="flex items-center justify-between gap-3 text-sm text-slate-700 hover:text-red-700 group">
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

      {/* ============ WHY SSGI ============ */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4">
          <SectionHeader
            eyebrow={`Why SSGI for ${program.short}`}
            title={`Reasons students choose us for ${program.short}.`}
            description="Four reasons that make Sri Sai Group of Institutes a distinctive place to pursue this programme."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyList.map((w, i) => (
              <div key={w.title} className="relative rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <div className="absolute top-4 right-5 text-slate-100 font-black text-4xl tabular-nums select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center mb-3">
                  <Star className="w-4 h-4" />
                </div>
                <div className="font-extrabold text-slate-900 text-base leading-snug">{w.title}</div>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{w.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CURRICULUM ============ */}
      <section id="curriculum" className="bg-white py-14 md:py-20 scroll-mt-32">
        <div className="max-w-[1400px] mx-auto px-4">
          <SectionHeader
            eyebrow="Curriculum"
            title="A well-crafted academic journey."
            description="An outcome-based, industry-aligned curriculum designed with regular inputs from senior faculty and industry partners."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {program.semesters.map((s, i) => (
              <div key={i} className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-red-600/20 blur-2xl" />
                <div className="relative">
                  <div className="text-red-400 font-black text-3xl tabular-nums">{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-widest text-red-300 font-bold">Phase {i + 1}</div>
                  <p className="mt-3 text-slate-200 text-sm leading-relaxed">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEARNING OUTCOMES ============ */}
      <section id="outcomes" className="bg-gradient-to-br from-red-700 via-red-600 to-rose-600 text-white py-14 md:py-20 scroll-mt-32 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 w-80 h-80 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="relative max-w-[1200px] mx-auto px-4">
          <div className="text-[11px] uppercase tracking-widest text-red-200 font-bold mb-2">Learning Outcomes</div>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight max-w-3xl">
            What you&rsquo;ll walk away with from {program.short}.
          </h2>
          <div className="w-16 md:w-24 h-1 bg-white mt-4 md:mt-5 rounded-full" />

          <div className="mt-10 grid md:grid-cols-2 gap-4 md:gap-6">
            {outcomes.map((o, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm p-5">
                <div className="w-10 h-10 rounded-lg bg-white text-red-700 flex items-center justify-center font-black text-sm shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-white text-sm md:text-base leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CAREERS & PLACEMENTS ============ */}
      <section id="placements" className="bg-white py-14 md:py-20 scroll-mt-32">
        <div className="max-w-[1400px] mx-auto px-4">
          <SectionHeader
            eyebrow="Careers & Placements"
            title="From classroom to career — a proven track record."
            description={`Placement pathways and roles our ${program.short} graduates typically move into.`}
          />

          {/* KPI cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
            {[
              { icon: Trophy,    label: "Highest Package", value: kpis.highPackage,     accent: "from-amber-500 to-orange-600" },
              { icon: TrendingUp,label: "Average Package", value: kpis.avgPackage,      accent: "from-red-600 to-rose-600" },
              { icon: Target,    label: "Placement Rate",  value: kpis.placementRate,   accent: "from-emerald-500 to-teal-600" },
              { icon: Building2, label: "Recruiters",      value: kpis.recruitersCount, accent: "from-sky-500 to-indigo-600" },
            ].map((k) => (
              <div key={k.label} className="relative rounded-2xl border border-slate-200 bg-white p-5 overflow-hidden">
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${k.accent}`} />
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                  <k.icon className="w-3.5 h-3.5 text-red-600" /> {k.label}
                </div>
                <div className="mt-3 text-3xl md:text-4xl font-black text-slate-900 tracking-tight tabular-nums">{k.value}</div>
              </div>
            ))}
          </div>

          {/* Roles */}
          <div className="mb-10">
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-3">Roles You Can Pursue</div>
            <div className="flex flex-wrap gap-2">
              {program.careers.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white text-xs md:text-sm font-semibold px-3 py-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-red-400" /> {c}
                </span>
              ))}
            </div>
          </div>

          {/* Recruiters */}
          <div>
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-3">Top Recruiters</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {program.recruiters.map((r) => (
                <div key={r} className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-700 flex items-center gap-2 hover:border-red-200 hover:bg-red-50/40 transition-colors">
                  <Building2 className="w-4 h-4 text-red-600" /> {r}
                </div>
              ))}
            </div>
          </div>

          {/* Alumni voice */}
          <div className="mt-10 md:mt-14 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 md:p-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-red-600/20 blur-3xl" />
            <div className="relative">
              <div className="text-[11px] uppercase tracking-widest text-red-300 font-bold mb-3 flex items-center gap-2">
                <Award className="w-3.5 h-3.5" /> Alumni Voice
              </div>
              <blockquote className="text-xl md:text-3xl font-extrabold leading-tight tracking-tight max-w-3xl">
                &ldquo;SSGI gave me the foundation, mentorship and confidence to compete with the best. The
                {" "}
                <span className="text-red-400">{program.short}</span> programme was rigorous, practical and
                deeply industry-aligned.&rdquo;
              </blockquote>
              <div className="mt-5 text-slate-400 text-sm">
                <strong className="text-white">Sakshi Gupta</strong> · Alumna · Placed at Amazon · ₹24.5 LPA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEES & SCHOLARSHIPS ============ */}
      <section id="fees" className="bg-slate-50 py-14 md:py-20 scroll-mt-32">
        <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Fees & Scholarships"
              title="Transparent, affordable & scholarship-friendly."
              description="A clear fee structure with EMI options and multiple scholarship pathways for meritorious students."
            />
            <ul className="space-y-3 text-slate-700 text-sm">
              {[
                "Merit scholarships up to 100% tuition waiver",
                "0% EMI plans via partner NBFCs",
                "Government scholarships (PMSSS, SC/ST, EWS, OBC)",
                "Sports, NCC and Defence-ward benefits",
                "Sibling & alumni referral discounts",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 shrink-0" /> {x}
                </li>
              ))}
            </ul>
            <Link to="/apply" className="inline-block mt-6">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-wider">
                Check My Scholarship <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="bg-slate-900 text-white px-5 py-3 grid grid-cols-6 text-[11px] font-bold uppercase tracking-widest">
                <div className="col-span-2">Component</div>
                <div className="col-span-2">Amount</div>
                <div className="col-span-2 text-right">Notes</div>
              </div>
              <ul>
                {feeRows.map((r, i) => (
                  <li key={r.head} className={`px-5 py-4 grid grid-cols-6 items-center text-sm ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                    <div className="col-span-2 text-slate-800 font-semibold">{r.head}</div>
                    <div className="col-span-2 text-red-700 font-extrabold">{r.value}</div>
                    <div className="col-span-2 text-slate-500 text-xs text-right">{r.note}</div>
                  </li>
                ))}
              </ul>
              <div className="px-5 py-3 bg-red-50 border-t border-red-100 text-[11px] text-red-800 font-semibold">
                * Indicative. Final fee is governed by AICTE / IKGPTU / affiliating body notifications for AY 2026.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INLINE ENQUIRY (WIDE) ============ */}
      <section id="enquire" className="bg-slate-950 text-white py-14 md:py-20 relative overflow-hidden scroll-mt-32" data-testid="program-enquiry-section">
        <div className="absolute -top-20 -right-16 w-80 h-80 rounded-full bg-red-600/25 blur-3xl" />
        <div className="absolute -bottom-16 -left-20 w-96 h-96 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="relative max-w-[1400px] mx-auto px-4 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-widest text-red-300 font-bold mb-2">Quick Query</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Have a question about <span className="text-red-400">{program.short}</span>?
            </h2>
            <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
              Ask us anything &mdash; eligibility, fees, scholarships, hostel, placements, curriculum, or the admission
              process. Our counsellor will call you back within 24 hours with tailored answers for this programme.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Personal counsellor for your journey",
                "Scholarship eligibility check",
                "Hostel & transport queries",
                "0% EMI &amp; education-loan guidance",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2 text-slate-200 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: x }} />
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <ProgramEnquiryForm program={program} variant="wide" />
          </div>
        </div>
      </section>

      {/* ============ FAQS ============ */}
      <section id="faqs" className="bg-white py-14 md:py-20 scroll-mt-32">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">FAQs</div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Common questions about {program.short}
            </h2>
            <div className="w-16 md:w-24 h-1 bg-red-600 mx-auto mt-4 md:mt-5 rounded-full" />
          </div>

          <Accordion type="single" collapsible className="mt-10 md:mt-12 border border-slate-200 rounded-2xl overflow-hidden bg-white">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-slate-200 last:border-b-0">
                <AccordionTrigger className="px-5 md:px-6 py-4 text-left font-bold text-slate-900 hover:no-underline hover:bg-slate-50 text-sm md:text-base" data-testid={`program-faq-q-${i}`}>
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 md:px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="bg-slate-950 text-white py-14 md:py-20 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <Rocket className="w-10 h-10 md:w-12 md:h-12 text-red-500 mx-auto" />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to launch your <span className="text-red-500">{program.short}</span> journey?
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Applications for the 2026 batch are open. Reserve your seat before the scholarship window closes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/apply">
              <Button className="h-12 px-8 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider" data-testid="program-final-cta">
                Apply for {program.short} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="outline" className="h-12 px-8 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-bold uppercase tracking-wider">
                <ChevronLeft className="w-4 h-4 mr-2" /> Explore Other Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProgramDetail;
