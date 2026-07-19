import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import { programs, disciplineOrder } from "@/data/programs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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

const Programs = () => {
  const [query, setQuery] = useState("");
  const [activeDiscipline, setActiveDiscipline] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programs.filter((p) => {
      const matchDiscipline = activeDiscipline === "All" || p.discipline === activeDiscipline;
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        p.discipline.toLowerCase().includes(q);
      return matchDiscipline && matchQuery;
    });
  }, [query, activeDiscipline]);

  const grouped = useMemo(() => {
    const g = {};
    filtered.forEach((p) => {
      (g[p.discipline] ||= []).push(p);
    });
    return g;
  }, [filtered]);

  const disciplineCounts = useMemo(() => {
    const c = { All: programs.length };
    programs.forEach((p) => (c[p.discipline] = (c[p.discipline] || 0) + 1));
    return c;
  }, []);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Programs"
        title="50+ programs. One clear path forward."
        subtitle="Explore Engineering, Management, IT, Pharmacy, Education, Agriculture, Hotel Management, Applied Sciences and Polytechnic programs at SSGI Pathankot."
        breadcrumb={[{ label: "Programs" }]}
      />

      {/* Search + Filters */}
      <section className="bg-white py-8 md:py-10 border-b border-slate-200 sticky top-16 md:top-32 z-30 backdrop-blur bg-white/95" data-testid="programs-toolbar">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-1 max-w-xl">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a program — e.g. B.Tech CSE, MBA, D.Pharma..."
                className="h-11 pl-10"
                data-testid="programs-search-input"
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
          </div>
        </div>
      </section>

      {/* Program list */}
      <section className="bg-slate-50 py-12 md:py-16" data-testid="programs-list">
        <div className="max-w-[1400px] mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              No programs matched your search. Try a different keyword.
            </div>
          ) : (
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
                    {list.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/programs/${p.slug}`}
                        className="group relative rounded-2xl bg-white border border-slate-200 p-5 md:p-6 hover:shadow-xl hover:-translate-y-0.5 hover:border-red-200 transition-all overflow-hidden"
                        data-testid={`program-card-${p.slug}`}
                      >
                        {/* tags */}
                        {p.tags?.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {p.tags.slice(0, 2).map((t) => (
                              <span key={t} className="text-[10px] uppercase tracking-widest font-bold bg-red-50 text-red-700 border border-red-100 px-2 py-0.5 rounded-full">
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="text-lg font-extrabold text-slate-900 leading-tight pr-6">
                          {p.short}
                        </div>
                        <p className="mt-1.5 text-sm text-slate-500 line-clamp-2">{p.name}</p>

                        <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-3 text-[12px] text-slate-600">
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
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-red-500 mx-auto" />
          <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight">
            Found the program you love?
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Applications for the 2026 batch are open. Reserve your seat before the scholarship window closes.
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
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
