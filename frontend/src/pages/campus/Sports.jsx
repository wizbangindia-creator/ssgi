import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Medal,
  Users,
  MapPin,
  ArrowRight,
  ChevronLeft,
  CheckCircle2,
  Target,
  Activity,
  Award,
  Phone,
} from "lucide-react";

const KPIS = [
  { icon: Trophy, label: "Sports offered",     value: "20+"  },
  { icon: Medal,  label: "State / Nat. medals",value: "300+" },
  { icon: Users,  label: "Certified coaches",  value: "10+"  },
  { icon: MapPin, label: "Grounds & facilities", value: "5"  },
];

const SPORT_LIST = [
  { name: "Cricket",       detail: "Full-size ground with match-quality pitch and practice nets." },
  { name: "Football",      detail: "Regulation-size ground used for IKGPTU inter-college tournaments." },
  { name: "Basketball",    detail: "Wooden court with dedicated coaching and inter-college leagues." },
  { name: "Volleyball",    detail: "Indoor and outdoor courts for regular training & competitions." },
  { name: "Badminton",     detail: "Six shuttle courts with regular tournaments through the year." },
  { name: "Table Tennis",  detail: "Eight professional tables and a dedicated indoor arena." },
  { name: "Athletics",     detail: "Standard athletics track for training and inter-college meets." },
  { name: "Chess",         detail: "Structured coaching and state-rated players across cohorts." },
  { name: "Kabaddi",       detail: "Traditional mat area with a competitive kabaddi squad." },
  { name: "Boxing",        detail: "Ring, heavy bags and certified boxing coach on campus." },
  { name: "Yoga & Fitness",detail: "Sunrise yoga sessions and wellness programmes for all students." },
  { name: "Gymnasium",     detail: "Well-equipped gym with cardio, strength training and trainers." },
];

const TROPHIES = [
  { year: "2025", event: "IKGPTU Inter-College Cricket",   result: "Champions"        },
  { year: "2025", event: "Punjab State Athletics Meet",    result: "Runner-up"        },
  { year: "2024", event: "All-India Univ. Chess Tournament", result: "Team Gold Medal" },
  { year: "2024", event: "IKGPTU Football Cup",            result: "Silver Medal"     },
  { year: "2024", event: "State Badminton Doubles",        result: "Champions"        },
  { year: "2023", event: "North Zone Kabaddi Meet",        result: "Bronze Medal"     },
];

const WHY = [
  { icon: Target,   title: "All levels welcome",   copy: "Beginner to elite &mdash; there&rsquo;s a team, a coach and a slot for you." },
  { icon: Users,    title: "Certified coaches",    copy: "IKGPTU-certified and state-level coaches guide every core sport." },
  { icon: Activity, title: "Modern facilities",    copy: "5 grounds, indoor sports hall, gym, athletics track and yoga zone." },
  { icon: Award,    title: "Sports scholarships",  copy: "10&ndash;20% additional tuition scholarship for state / national medalists." },
];

const Sports = () => (
  <PageLayout>
    {/* ============ HERO ============ */}
    <section className="relative overflow-hidden bg-slate-950 text-white" data-testid="sports-hero">
      <div className="relative max-w-[1400px] mx-auto px-4 pt-8 md:pt-14 pb-12 md:pb-16">
        <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
          <Link to="/" className="hover:text-red-300">Home</Link>
          <span className="text-slate-500">/</span>
          <Link to="/campus-life" className="hover:text-red-300">Campus Life</Link>
          <span className="text-slate-500">/</span>
          <span className="text-white font-semibold">Sports</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-200 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5" /> Campus Life · Sports
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
              Where character is built <span className="text-red-500">on the field</span>.
            </h1>
            <p className="mt-4 text-red-200 text-base md:text-lg font-semibold">Play hard. Grow harder.</p>
            <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
              A vibrant sports culture is core to SSGI&rsquo;s identity. From cricket to badminton, football to
              table tennis, chess to kabaddi &mdash; students train, compete and represent SSGI at university,
              state and national tournaments every year.
            </p>

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

          {/* Right showcase card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-6 md:p-8">
              <Trophy className="w-10 h-10 text-red-400" strokeWidth={1.6} />
              <div className="mt-4 text-[10px] uppercase tracking-widest text-red-300 font-bold">Legacy</div>
              <div className="mt-1 text-4xl md:text-5xl font-black text-white leading-none tabular-nums">300+</div>
              <div className="mt-2 text-sm text-slate-300">medals won across state, university and national tournaments.</div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] uppercase tracking-widest text-slate-400 font-bold">
                <Medal className="w-3.5 h-3.5 text-red-400" /> Since 1996
              </div>
            </div>
          </div>
        </div>

        {/* KPI strip */}
        <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {KPIS.map((k) => (
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

    {/* ============ SPORTS OFFERED ============ */}
    <section className="bg-white py-14 md:py-20" data-testid="sports-offered">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="mb-8 md:mb-10">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Sports on Offer</div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            20+ sports, one thriving athletic culture.
          </h2>
          <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SPORT_LIST.map((s, i) => (
            <div
              key={s.name}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              data-testid={`sport-item-${s.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="absolute top-4 right-5 text-slate-100 font-black text-4xl tabular-nums select-none group-hover:text-red-50 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-11 h-11 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-md mb-4">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="font-extrabold text-slate-900 text-lg leading-tight">{s.name}</div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ TROPHY CABINET ============ */}
    <section className="bg-slate-50 py-14 md:py-20" data-testid="sports-trophies">
      <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Trophy Cabinet</div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            A track record we&rsquo;re proud of.
          </h2>
          <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
          <p className="mt-5 text-slate-600 text-sm md:text-base leading-relaxed max-w-md">
            Recent achievements by SSGI students at inter-college, state and national tournaments &mdash; across
            individual and team events.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <div className="bg-slate-900 text-white px-5 py-3 grid grid-cols-6 text-[11px] font-bold uppercase tracking-widest">
              <div className="col-span-1">Year</div>
              <div className="col-span-3">Event</div>
              <div className="col-span-2 text-right">Result</div>
            </div>
            <ul>
              {TROPHIES.map((t, i) => (
                <li key={t.event} className={`px-5 py-4 grid grid-cols-6 items-center text-sm ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                  <div className="col-span-1 text-slate-500 font-bold tabular-nums">{t.year}</div>
                  <div className="col-span-3 text-slate-800 font-semibold">{t.event}</div>
                  <div className="col-span-2 text-right">
                    <span className="inline-flex items-center gap-1.5 text-red-700 font-extrabold text-sm">
                      <Medal className="w-3.5 h-3.5" /> {t.result}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* ============ WHY SSGI SPORTS ============ */}
    <section className="bg-white py-14 md:py-20" data-testid="sports-why">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="mb-8 md:mb-10">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Why SSGI Sports</div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            A structured pathway for every athlete.
          </h2>
          <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY.map((w, i) => (
            <div key={w.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <div className="absolute top-4 right-5 text-slate-100 font-black text-4xl tabular-nums select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-11 h-11 rounded-lg bg-red-600 text-white flex items-center justify-center mb-3">
                <w.icon className="w-5 h-5" />
              </div>
              <div className="font-extrabold text-slate-900 text-base leading-snug">{w.title}</div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: w.copy }} />
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
            <div>
              <div className="font-extrabold text-slate-900">Represented SSGI at state / national level?</div>
              <div className="text-slate-600 text-sm mt-0.5">You may qualify for an additional 10&ndash;20% tuition scholarship.</div>
            </div>
          </div>
          <Link to="/apply">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-wider">
              Check Scholarship <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* ============ CTA ============ */}
    <section className="bg-slate-950 text-white py-14 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <Link to="/campus-life" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white">
          <ChevronLeft className="w-4 h-4" /> Back to Campus Life
        </Link>
        <Link to="/apply">
          <Button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider" data-testid="sports-apply-cta">
            Apply for 2026 <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Sports;
