import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import { getCampusTopic, campusTopics } from "@/data/campusLife";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, ChevronLeft, Sparkles, CheckCircle2, Rocket, Phone, MessageCircle } from "lucide-react";

const CampusLifeDetail = () => {
  const { slug } = useParams();
  const topic = getCampusTopic(slug);
  if (!topic) return <Navigate to="/campus-life" replace />;

  // Redirect to anti-ragging full page if this topic points there
  if (topic.linkOverride) return <Navigate to={topic.linkOverride} replace />;

  const related = campusTopics.filter((t) => t.category === topic.category && t.slug !== topic.slug).slice(0, 3);

  return (
    <PageLayout>
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-slate-950"
        data-testid="campus-topic-hero"
      >
        <div className="relative max-w-[1400px] mx-auto px-4 pt-8 md:pt-14 pb-12 md:pb-20">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <Link to="/" className="hover:text-red-300">Home</Link>
            <span className="text-slate-500">/</span>
            <Link to="/campus-life" className="hover:text-red-300">Campus Life</Link>
            <span className="text-slate-500">/</span>
            <span className="text-white font-semibold">{topic.title}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 text-white">
              <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-200 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" /> {topic.category}
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
                {topic.title}
              </h1>
              <p className="mt-4 text-red-200 text-base md:text-lg font-semibold">{topic.tagline}</p>
              <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">{topic.intro}</p>

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

            {/* Icon showcase card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-8 md:p-10 flex items-center justify-center aspect-[4/3]">
                <topic.icon className="w-24 h-24 md:w-32 md:h-32 text-red-400" strokeWidth={1.4} />
              </div>
            </div>
          </div>

          {/* Stats */}
          {topic.stats?.length > 0 && (
            <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {topic.stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-sm p-4 md:p-5">
                  <div className="text-red-300 text-[10px] uppercase tracking-widest font-bold">{s.label}</div>
                  <div className="mt-2 text-white text-2xl md:text-3xl font-black tracking-tight tabular-nums">{s.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-14 md:py-20" data-testid="campus-features">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mb-8 md:mb-10">
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Highlights</div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What makes SSGI&rsquo;s {topic.title.toLowerCase()} special.
            </h2>
            <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {topic.features.map((f, i) => (
              <div key={f.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <div className="absolute top-4 right-5 text-slate-100 font-black text-4xl tabular-nums select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-11 h-11 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-md mb-4">
                  <f.icon className="w-5 h-5" />
                </div>
                <div className="font-extrabold text-slate-900 text-lg">{f.title}</div>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{f.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (optional) */}
      {topic.faqs?.length > 0 && (
        <section className="bg-slate-50 py-14 md:py-20">
          <div className="max-w-[900px] mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Common Questions</div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Everything you might want to know.
              </h2>
              <div className="w-16 md:w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
            </div>
            <Accordion type="single" collapsible className="mt-10 border border-slate-200 rounded-2xl overflow-hidden bg-white">
              {topic.faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-slate-200 last:border-b-0">
                  <AccordionTrigger className="px-5 md:px-6 py-4 text-left font-bold text-slate-900 hover:no-underline hover:bg-slate-50 text-sm md:text-base">
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
      )}

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="flex items-end justify-between mb-6 md:mb-8 flex-wrap gap-3">
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">More from {topic.category}</h3>
              <Link to="/campus-life" className="text-sm font-bold text-red-700 hover:text-red-800 inline-flex items-center gap-1">
                All Campus Life <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={r.linkOverride || `/campus-life/${r.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:-translate-y-0.5 hover:border-red-200 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center mb-3">
                    <r.icon className="w-4 h-4" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-base">{r.title}</div>
                  <p className="mt-1 text-slate-500 text-sm">{r.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-slate-950 text-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link to="/campus-life" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white">
            <ChevronLeft className="w-4 h-4" /> Back to Campus Life
          </Link>
          <div className="flex flex-wrap gap-3">
            <Link to="/apply">
              <Button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider">
                <Rocket className="w-4 h-4 mr-2" /> Apply for 2026
              </Button>
            </Link>
            <a href="https://wa.me/918427184271" target="_blank" rel="noreferrer">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CampusLifeDetail;
