import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Medal,
  Flame,
  Zap,
  Target,
  Activity,
  ArrowRight,
  ChevronLeft,
  Star,
  Users,
} from "lucide-react";

/* ---------- Sports catalog with per-sport theme colours ---------- */
const SPORTS = [
  { name: "Cricket",        emoji: "🏏", theme: "from-emerald-500 to-green-700",     stat: "Full ground · 22-yard pitch" },
  { name: "Football",       emoji: "⚽", theme: "from-sky-500 to-indigo-700",         stat: "Regulation-size ground" },
  { name: "Basketball",     emoji: "🏀", theme: "from-orange-500 to-red-600",         stat: "Wooden court + hoops" },
  { name: "Volleyball",     emoji: "🏐", theme: "from-yellow-400 to-orange-500",      stat: "Sand & indoor courts" },
  { name: "Badminton",      emoji: "🏸", theme: "from-fuchsia-500 to-rose-600",       stat: "6 shuttle courts" },
  { name: "Table Tennis",   emoji: "🏓", theme: "from-red-500 to-pink-600",           stat: "8 pro tables" },
  { name: "Athletics",      emoji: "🏃", theme: "from-lime-500 to-emerald-600",       stat: "Standard track" },
  { name: "Chess",          emoji: "♟️", theme: "from-slate-600 to-slate-900",        stat: "State-rated players" },
  { name: "Kabaddi",        emoji: "🤼", theme: "from-amber-600 to-orange-700",       stat: "Traditional mat area" },
  { name: "Boxing",         emoji: "🥊", theme: "from-rose-600 to-red-800",           stat: "Ring + heavy bags" },
  { name: "Yoga & Fitness", emoji: "🧘", theme: "from-teal-500 to-cyan-700",          stat: "Sunrise sessions" },
  { name: "Gymnasium",      emoji: "💪", theme: "from-zinc-700 to-black",             stat: "Cardio + strength gym" },
];

const KPIS = [
  { icon: Trophy, label: "Sports Offered",     value: "20+" },
  { icon: Medal,  label: "State / Nat. Medals",value: "300+" },
  { icon: Users,  label: "Coaches",            value: "10+" },
  { icon: Flame,  label: "Grounds",            value: "5" },
];

const TROPHIES = [
  { year: "2025", event: "IKGPTU Inter-College Cricket",   result: "🥇 Champions" },
  { year: "2025", event: "Punjab State Athletics Meet",     result: "🥈 Runner-up" },
  { year: "2024", event: "All-India Uni. Chess Tournament", result: "🥇 Team Gold" },
  { year: "2024", event: "IKGPTU Football Cup",             result: "🥈 Silver Medal" },
  { year: "2024", event: "State Badminton Doubles",         result: "🥇 Champions" },
  { year: "2023", event: "North Zone Kabaddi Meet",         result: "🥉 Bronze" },
];

const Sports = () => (
  <PageLayout>
    {/* HERO — bold, angled, high-energy */}
    <section className="relative overflow-hidden bg-black text-white" data-testid="sports-hero">
      {/* diagonal stripes */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(120deg, rgba(255,255,255,0.6) 0 2px, transparent 2px 22px)",
        }}
      />
      {/* red glow */}
      <div className="absolute -top-40 -right-32 w-[500px] h-[500px] bg-red-600/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-4 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
          <Link to="/" className="hover:text-red-300">Home</Link>
          <span className="text-slate-500">/</span>
          <Link to="/campus-life" className="hover:text-red-300">Campus Life</Link>
          <span className="text-slate-500">/</span>
          <span className="text-white font-semibold">Sports</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-200 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5" /> Play hard. Grow harder.
            </div>
            <h1 className="mt-5 font-black leading-[0.9] tracking-tight">
              <span className="block text-6xl sm:text-7xl md:text-9xl text-white">SWEAT.</span>
              <span className="block text-6xl sm:text-7xl md:text-9xl italic font-light text-red-500 -mt-2">Compete.</span>
              <span className="block text-6xl sm:text-7xl md:text-9xl text-yellow-400 -mt-2">WIN.</span>
            </h1>
            <p className="mt-6 text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              SSGI Sports is where dorm-room dreams meet floodlit reality. From cricket to kabaddi, chess to
              boxing &mdash; if you&rsquo;ve got the fire, we&rsquo;ve got the field. Come play. Come represent.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/apply">
                <Button className="h-12 px-7 bg-yellow-400 hover:bg-yellow-500 text-black font-black uppercase tracking-widest text-sm">
                  Join a Team <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:8427184271">
                <Button variant="outline" className="h-12 px-6 bg-transparent border-white/25 text-white hover:bg-white/10 hover:text-white font-bold uppercase tracking-widest text-sm">
                  Book a Trial
                </Button>
              </a>
            </div>
          </div>

          {/* Big trophy card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-3xl bg-gradient-to-br from-red-600 via-rose-600 to-orange-500 p-8 md:p-10 text-white shadow-2xl shadow-red-900/50 rotate-1 hover:rotate-0 transition-transform duration-500">
              <Trophy className="w-14 h-14 text-yellow-300" strokeWidth={1.6} />
              <div className="mt-4 text-[10px] uppercase tracking-widest font-bold opacity-90">Since 1996</div>
              <div className="text-4xl md:text-5xl font-black leading-none tracking-tight">300+</div>
              <div className="mt-1 font-bold text-white/90">Medals in state & national meets</div>
              <div className="mt-6 pt-6 border-t border-white/20 flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <Star className="w-4 h-4 text-yellow-300" /> A campus of champions
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI marquee-like strip */}
      <div className="relative bg-yellow-400 text-black border-t-4 border-b-4 border-black">
        <div className="max-w-[1400px] mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {KPIS.map((k) => (
            <div key={k.label} className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-black text-yellow-400 flex items-center justify-center shrink-0">
                <k.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest font-black">{k.label}</div>
                <div className="text-2xl md:text-3xl font-black leading-none tabular-nums">{k.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ SPORTS GRID ============ */}
    <section className="bg-white py-14 md:py-20" data-testid="sports-grid">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="mb-8 md:mb-12">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-black mb-2">The Arena</div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Pick your <span className="text-red-600">weapon</span>.
          </h2>
          <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {SPORTS.map((s, i) => (
            <div
              key={s.name}
              className={`group relative rounded-2xl bg-gradient-to-br ${s.theme} text-white p-5 md:p-6 aspect-square flex flex-col justify-between overflow-hidden hover:scale-[1.03] hover:-rotate-1 transition-all duration-300 shadow-lg`}
              data-testid={`sport-tile-${s.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="absolute -top-4 -right-4 text-9xl opacity-15 group-hover:opacity-25 transition-opacity select-none">
                {s.emoji}
              </div>
              <div className="relative">
                <div className="text-3xl md:text-4xl">{s.emoji}</div>
                <div className="mt-3 text-lg md:text-xl font-black leading-tight">{s.name}</div>
              </div>
              <div className="relative flex items-end justify-between gap-2">
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-90 leading-tight">{s.stat}</div>
                <div className="text-4xl font-black opacity-30 tabular-nums leading-none">{String(i + 1).padStart(2, "0")}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ TROPHY WALL ============ */}
    <section className="bg-slate-950 text-white py-14 md:py-20 relative overflow-hidden" data-testid="sports-trophies">
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="relative max-w-[1400px] mx-auto px-4">
        <div className="mb-8 md:mb-12">
          <div className="text-[11px] uppercase tracking-widest text-yellow-400 font-black mb-2">Trophy Cabinet</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Recent <span className="text-yellow-400">glory</span>.
          </h2>
          <div className="w-16 md:w-24 h-1 bg-yellow-400 mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {TROPHIES.map((t) => (
            <div
              key={t.event}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.08] hover:border-yellow-400/40 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">{t.result.split(" ")[0]}</div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-yellow-300 font-black">{t.year}</div>
                  <div className="font-extrabold text-white text-sm md:text-base leading-tight">{t.event}</div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10 text-xs font-bold uppercase tracking-widest text-slate-400">
                {t.result.split(" ").slice(1).join(" ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ FEATURES / VIBE ============ */}
    <section className="bg-white py-14 md:py-20" data-testid="sports-vibe">
      <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5 sticky lg:top-32">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-black mb-2">Why we&rsquo;re different</div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Not a gym.<br />
            <span className="italic font-light">A movement.</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
          <p className="mt-5 text-slate-600 text-sm md:text-base leading-relaxed max-w-md">
            Sports at SSGI isn&rsquo;t a subject &mdash; it&rsquo;s a lifestyle. Whether you&rsquo;re a national-medalist
            or someone chasing that first sprint, our doors, courts and grounds are wide open.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-800 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5" /> Sports scholarships
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-800 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5" /> Pro coaches
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {[
            { icon: Zap,     title: "Every level welcome",  copy: "Beginner to elite &mdash; there&rsquo;s a team, a coach and a slot for you." },
            { icon: Target,  title: "Trained coaches",       copy: "IKGPTU-certified & state-level coaches guide every core sport." },
            { icon: Activity,title: "Modern facilities",     copy: "5 grounds, indoor sports hall, gym, athletics track & yoga zone." },
            { icon: Trophy,  title: "Sports scholarships",   copy: "10&ndash;20% additional tuition scholarship for state/national medalists." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border-2 border-slate-900 bg-white p-6 hover:bg-slate-900 hover:text-white transition-colors group cursor-default">
              <div className="w-11 h-11 rounded-lg bg-red-600 text-white flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5" />
              </div>
              <div className="font-black text-lg leading-tight">{c.title}</div>
              <p className="mt-2 text-sm leading-relaxed opacity-80" dangerouslySetInnerHTML={{ __html: c.copy }} />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ CTA STRIP ============ */}
    <section className="bg-yellow-400 text-black py-14 md:py-20 relative overflow-hidden" data-testid="sports-cta">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(120deg, rgba(0,0,0,0.6) 0 2px, transparent 2px 22px)",
        }}
      />
      <div className="relative max-w-[1200px] mx-auto px-4 text-center">
        <Flame className="w-12 h-12 md:w-14 md:h-14 mx-auto text-red-600" />
        <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight leading-none">
          Bring the fire.<br />We&rsquo;ll bring the field.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/apply">
            <Button className="h-12 px-8 bg-black hover:bg-slate-900 text-yellow-400 font-black uppercase tracking-widest text-sm" data-testid="sports-apply-cta">
              Apply Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link to="/campus-life">
            <Button variant="outline" className="h-12 px-6 bg-transparent border-black text-black hover:bg-black hover:text-yellow-400 font-black uppercase tracking-widest text-sm">
              <ChevronLeft className="w-4 h-4 mr-2" /> Campus Life
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Sports;
