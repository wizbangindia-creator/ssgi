import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import { programs, disciplineOrder } from "@/data/programs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Search,
  ArrowRight,
  Clock,
  Users,
  BadgeCheck,
  IndianRupee,
  Cpu,
  Briefcase,
  Code2,
  FlaskConical,
  GraduationCap,
  Sprout,
  Utensils,
  Atom,
  Wrench,
  Sparkles,
  Trophy,
  ShieldCheck,
  ChevronDown,
  Rocket,
  Star,
} from "lucide-react";

const disciplineIcon = {
  "Engineering": Cpu,
  "Management": Briefcase,
  "Computing / IT": Code2,
  "Pharmacy": FlaskConical,
  "Education": GraduationCap,
  "Agriculture": Sprout,
  "Hotel Management": Utensils,
  "Applied Sciences": Atom,
  "Diploma / Polytechnic": Wrench,
};

const SORTS = {
  popular: { label: "Most popular", fn: (a, b) => (b.tags?.length || 0) - (a.tags?.length || 0) },
  az:      { label: "A – Z",         fn: (a, b) => a.short.localeCompare(b.short) },
  duration:{ label: "Duration (asc)",fn: (a, b) => parseInt(a.duration) - parseInt(b.duration) },
  seats:   { label: "Most seats",    fn: (a, b) => b.seats - a.seats },
};

const featuredSlugs = ["btech-cse", "mba", "mca", "b-pharma", "bhmct", "bsc-agri"];

const Programs = () => {
  const [query, setQuery] = useState("");
  const [activeDiscipline, setActiveDiscipline] = useState("All");
  const [sortKey, setSortKey] = useState("popular");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = programs.filter((p) => {
      const matchDiscipline = activeDiscipline === "All" || p.discipline === activeDiscipline;
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        p.discipline.toLowerCase().includes(q);
      return matchDiscipline && matchQuery;
    });
    list = [...list].sort(SORTS[sortKey].fn);
    return list;
  }, [query, activeDiscipline, sortKey]);

  const grouped = useMemo(() => {
    if (activeDiscipline !== "All" || query) return null; // grouped only in default view
    const g = {};
    filtered.forEach((p) => { (g[p.discipline] ||= []).push(p); });
    return g;
  }, [filtered, activeDiscipline, query]);

  const disciplineCounts = useMemo(() => {
    const c = { All: programs.length };
    programs.forEach((p) => (c[p.discipline] = (c[p.discipline] || 0) + 1));
    return c;
  }, []);

  const featured = featuredSlugs
    .map((s) => programs.find((p) => p.slug === s))
    .filter(Boolean);

  /* ---------- Card ---------- */
  const ProgramCard = ({ p, size = "sm" }) => {
    const Icon = disciplineIcon[p.discipline] || Cpu;
    return (
      <Link
        to={`/programs/${p.slug}`}
        className={`group relative rounded-2xl bg-white border border-slate-200 p-5 md:p-6 hover:shadow-2xl hover:-translate-y-0.5 hover:border-red-200 transition-all overflow-hidden ${
          size === "lg" ? "min-h-[220px]" : ""
        }`}
        data-testid={`program-card-${p.slug}`}
      >
        {/* Discipline badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold bg-slate-900 text-white px-2.5 py-1 rounded-full">
            <Icon className="w-3 h-3 text-red-400" /> {p.discipline}
          </div>
          {p.tags?.length > 0 && (
            <span className="text-[10px] uppercase tracking-widest font-bold bg-red-50 text-red-700 border border-red-100 px-2 py-0.5 rounded-full">
              {p.tags[0]}
            </span>
          )}
        </div>

        <div className={`font-extrabold text-slate-900 leading-tight pr-6 ${size === "lg" ? "text-2xl" : "text-lg"}`}>
          {p.short}
        </div>
        <p className={`mt-1.5 text-slate-500 line-clamp-2 ${size === "lg" ? "text-sm" : "text-xs"}`}>{p.name}</p>

        <div className={`mt-4 grid grid-cols-2 gap-y-2 gap-x-3 text-[12px] text-slate-600 ${size === "lg" ? "sm:grid-cols-4" : ""}`}>
          <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-red-600" />{p.duration.split(" (")[0]}</div>
          <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-red-600" />{p.seats} seats</div>
          <div className="flex items-center gap-1.5"><BadgeCheck className="w-3.5 h-3.5 text-red-600" />{p.degree.split(" (")[0]}</div>
          <div className="flex items-center gap-1.5"><IndianRupee className="w-3.5 h-3.5 text-red-600" />{p.fee.replace("(approx)", "").trim()}</div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-red-700 uppercase tracking-wider">View details</span>
          <ArrowRight className="w-4 h-4 text-red-700 group-hover:translate-x-1 transition-transform" />
        </div>

        <div className="pointer-events-none absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    );
  };

  return (
    <PageLayout>
      {/* ============ HERO ============ */}
      <section
        className="relative overflow-hidden bg-slate-950"
        data-testid="programs-hero"
      >
        <div className="relative max-w-[1400px] mx-auto px-4 pt-12 md:pt-20 pb-16 md:pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <Link to="/" className="hover:text-red-300">Home</Link>
            <span className="text-slate-500">/</span>
            <span className="text-white font-semibold">Programs</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-200 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> {programs.length} Programs · {disciplineOrder.length} Disciplines
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white">
              Find your <span className="text-red-500">calling</span>.
              <br />
              <span className="italic font-light text-slate-300">Build your future.</span>
            </h1>
            <p className="mt-5 md:mt-6 text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              From B.Tech and MBA to Pharmacy, Education, Agriculture and Polytechnic — explore SSGI&rsquo;s
              full catalogue of AICTE / UGC / PCI / NCTE-approved programmes designed to make you industry-ready.
            </p>
          </div>

          {/* Big search */}
          <div className="mt-8 md:mt-10 max-w-2xl">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a program — e.g. B.Tech CSE, MBA, D.Pharma..."
                className="h-14 pl-12 pr-4 text-base bg-white/95 border-white/30 shadow-2xl shadow-red-900/20"
                data-testid="programs-search-input"
              />
            </div>
          </div>

          {/* KPI strip */}
          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: Trophy,     label: "Highest Package",  value: "₹24.5 LPA" },
              { icon: BadgeCheck, label: "AICTE Approved",   value: "All" },
              { icon: Users,      label: "Alumni",           value: "40,346+" },
              { icon: ShieldCheck,label: "Years of Legacy",  value: "25+" },
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

      {/* ============ FEATURED PROGRAMS ============ */}
      <section className="bg-white py-14 md:py-20 border-b border-slate-200" data-testid="programs-featured">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8 md:mb-10">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Featured</div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Our most sought-after programmes.
              </h2>
              <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
            </div>
            <Link to="/apply" className="hidden md:inline-block">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-wider">
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {featured.map((p) => <ProgramCard key={p.slug} p={p} size="lg" />)}
          </div>
        </div>
      </section>

      {/* ============ TOOLBAR ============ */}
      <section
        className="bg-white py-6 md:py-8 border-b border-slate-200 sticky top-16 md:top-32 z-30 backdrop-blur bg-white/95"
        data-testid="programs-toolbar"
      >
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programs..."
                className="h-11 pl-10"
              />
            </div>

            <div className="flex-1 overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex items-center gap-2 min-w-max">
                {["All", ...disciplineOrder].map((d) => (
                  <button
                    key={d}
                    onClick={() => setActiveDiscipline(d)}
                    className={`px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                      activeDiscipline === d
                        ? "bg-red-600 text-white shadow-md shadow-red-900/20"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                    data-testid={`programs-filter-${d.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`}
                  >
                    {d}
                    <span className={`ml-1.5 tabular-nums ${activeDiscipline === d ? "text-white/80" : "text-slate-500"}`}>
                      {disciplineCounts[d] || 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-48">
              <Select value={sortKey} onValueChange={setSortKey}>
                <SelectTrigger className="h-11" data-testid="programs-sort">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
                    <ChevronDown className="w-3.5 h-3.5" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(SORTS).map(([k, v]) => (
                    <SelectItem key={k} value={k}>{v.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROGRAM LIST ============ */}
      <section className="bg-slate-50 py-12 md:py-16" data-testid="programs-list">
        <div className="max-w-[1400px] mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-500">No programs matched your search. Try a different keyword.</div>
          ) : grouped ? (
            Object.entries(grouped).map(([discipline, list]) => {
              const Icon = disciplineIcon[discipline] || Cpu;
              return (
                <div key={discipline} className="mb-12 md:mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shadow">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-red-700 font-bold">Discipline</div>
                      <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">{discipline}</h2>
                    </div>
                    <div className="ml-auto text-xs font-bold text-slate-500 uppercase tracking-widest">
                      {list.length} program{list.length > 1 ? "s" : ""}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {list.map((p) => <ProgramCard key={p.slug} p={p} />)}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {filtered.map((p) => <ProgramCard key={p.slug} p={p} />)}
            </div>
          )}
        </div>
      </section>

      {/* ============ WHY SSGI STRIP ============ */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Why SSGI</div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A university experience built for the <span className="text-red-600">real world</span>.
            </h2>
            <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: ShieldCheck, title: "AICTE / UGC / PCI approved", copy: "All programmes are approved and affiliated by relevant national and state regulators." },
              { icon: Rocket,      title: "Career Udaan Placement Assurance", copy: "Structured placement readiness from Year 1 with 200+ recruiters across streams." },
              { icon: Star,        title: "IBM CoE & Pearson VUE", copy: "Global industry certifications integrated into your curriculum on the SSGI campus." },
              { icon: Trophy,      title: "40,346+ alumni network", copy: "Join a proud family that spans industry, academia and entrepreneurship worldwide." },
            ].map((b, i) => (
              <div key={b.title} className="relative rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <div className="absolute top-4 right-5 text-slate-100 font-black text-4xl tabular-nums select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center mb-3">
                  <b.icon className="w-4 h-4" />
                </div>
                <div className="font-extrabold text-slate-900 text-base leading-snug">{b.title}</div>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{b.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="bg-gradient-to-br from-red-700 via-red-600 to-rose-600 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 w-80 h-80 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" /> Student Voice
          </div>
          <blockquote className="mt-6 text-2xl md:text-4xl font-extrabold leading-tight tracking-tight max-w-4xl mx-auto">
            &ldquo;Choosing the right programme changed everything for me. SSGI gave me the labs, the mentors, the
            confidence — and the career.&rdquo;
          </blockquote>
          <div className="mt-5 text-red-100 text-sm">
            <strong className="text-white">Sakshi Gupta</strong> · B.Tech CSE, Batch of 2024 · Placed at Amazon · ₹24.5 LPA
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="bg-slate-950 text-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <Rocket className="w-10 h-10 md:w-12 md:h-12 text-red-500 mx-auto" />
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Found the program you love?
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Applications for the 2026 batch are open. Reserve your seat before the scholarship window closes.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link to="/apply">
              <Button className="h-12 px-8 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider" data-testid="programs-apply-cta">
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Programs;
