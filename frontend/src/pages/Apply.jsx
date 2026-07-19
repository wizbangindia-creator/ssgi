import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import { indianStates, disciplines, programsByDiscipline, admissionDeadline } from "@/mock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  IndianRupee,
  Users,
  Building2,
  GraduationCap,
  Send,
  CheckCircle2,
  Sparkles,
  Trophy,
  BookOpen,
  Phone,
  MessageCircle,
  Rocket,
  Target,
  Calendar,
} from "lucide-react";

/* ---------- Countdown hook ---------- */
const useCountdown = (target) => {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, new Date(target).getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
};

/* ---------- Static content ---------- */
const perks = [
  { icon: Award, title: "Merit Scholarships", copy: "Up to 100% tuition waiver for top scorers in 12th, JEE and CUET." },
  { icon: IndianRupee, title: "0% EMI Fee Plans", copy: "Flexible EMI options via partner NBFCs — no cost, no hidden charges." },
  { icon: Trophy, title: "10,999+ Placements", copy: "Career Udaan Placement Assurance Programme runs from Year 1." },
  { icon: Building2, title: "50+ Programmes", copy: "Engineering, Management, IT, Pharmacy, Education, Agri, Hotel Mgmt." },
  { icon: ShieldCheck, title: "AICTE / IKGPTU / PCI", copy: "Fully approved, recognised and NIRF-ranked institutional group." },
  { icon: Rocket, title: "Industry Integration", copy: "B.Tech CSE with IBM, Pearson VUE Centre, 200+ recruiters on campus." },
];

const steps = [
  { n: "01", title: "Fill this form", copy: "Share your basic details and preferred programme — takes 60 seconds." },
  { n: "02", title: "Counselling call", copy: "Our admissions counsellor calls you within 24 hours to guide next steps." },
  { n: "03", title: "Document check", copy: "Upload/share your 10th, 12th (or diploma) marksheets and ID proof." },
  { n: "04", title: "Pay & confirm seat", copy: "Pay the registration fee online (UPI/card/net-banking) and block your seat." },
  { n: "05", title: "Report to campus", copy: "Attend the on-boarding session at Pathankot campus and begin your journey." },
];

const scholarshipSlabs = [
  { band: "95% & above / 300+ JEE Main", benefit: "100% tuition waiver" },
  { band: "90% – 94.99% / 250 – 299 JEE Main", benefit: "50% tuition waiver" },
  { band: "85% – 89.99% / 200 – 249 JEE Main", benefit: "25% tuition waiver" },
  { band: "Sports / NCC / Defence wards", benefit: "Additional 10% – 20% off" },
  { band: "Sibling / Alumni referral", benefit: "Flat ₹15,000 off tuition" },
];

const faqs = [
  {
    q: "What is the eligibility for B.Tech at SSGI?",
    a: "Passed 10+2 with Physics, Mathematics and either Chemistry / Biology / Computer Science / Biotechnology with a minimum of 45% marks (40% for reserved categories). Valid JEE Main / State CET score is preferred but not mandatory for management-quota seats.",
  },
  {
    q: "How can I apply for admission?",
    a: "Simply fill the application form on this page. Our admissions counsellor will connect with you within 24 hours to guide you through document submission, seat booking and fee payment — everything can be done online.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes. SSGI offers merit scholarships (up to 100% tuition waiver), sports/NCC scholarships, sibling & alumni referral discounts, and government scholarships (SC/ST/OBC/EWS/PMSSS) — all listed in the Scholarships section on this page.",
  },
  {
    q: "Is hostel accommodation available?",
    a: "Yes. Separate, fully-secured hostels for boys and girls are available on campus with Wi-Fi, mess, laundry, gym and 24×7 warden support. Hostel is optional and priced separately from tuition.",
  },
  {
    q: "What is the fee refund policy?",
    a: "SSGI follows the AICTE / UGC prescribed refund policy. If a student withdraws before commencement of classes, the refund is processed as per AICTE guidelines (typically full refund minus a nominal processing fee) within 15 working days.",
  },
  {
    q: "Which documents are required at admission?",
    a: "10th and 12th (or diploma) marksheets & certificates, migration certificate, character certificate, transfer certificate, Aadhaar card, 6 passport-size photos, and category/income certificate (if applicable).",
  },
];

/* ---------- Page ---------- */
const Apply = () => {
  const { toast } = useToast();
  const { d, h, m, s } = useCountdown(admissionDeadline);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    discipline: "",
    program: "",
    marks: "",
    campus: "SSGI Pathankot",
    source: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.state || !form.discipline || !form.program) {
      toast({
        title: "A few required fields are empty",
        description: "Please fill Name, Phone, State, Discipline and Program.",
      });
      return;
    }
    const existing = JSON.parse(localStorage.getItem("ssgi_applications") || "[]");
    existing.push({ ...form, submittedAt: new Date().toISOString() });
    localStorage.setItem("ssgi_applications", JSON.stringify(existing));
    setSubmitted(true);
    toast({
      title: "Application received!",
      description: "Your reference is being generated. Our team will call within 24 hours.",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({
      name: "",
      phone: "",
      email: "",
      state: "",
      discipline: "",
      program: "",
      marks: "",
      campus: "SSGI Pathankot",
      source: "",
    });
  };

  return (
    <PageLayout>
      {/* ============ HERO + FORM ============ */}
      <section
        className="relative overflow-hidden bg-slate-950"
        data-testid="apply-hero"
      >
        {/* soft grid overlay */}
        <div className="relative max-w-[1400px] mx-auto px-4 pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: pitch */}
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-200 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Admissions 2026 Open
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
              Your <span className="text-red-500">future</span>
              <br />
              begins at <span className="italic font-light text-slate-300">Sri Sai</span>.
            </h1>
            <p className="mt-5 md:mt-6 text-slate-300 text-base md:text-lg max-w-xl leading-relaxed">
              Apply in under 60 seconds. Unlock scholarships up to <strong className="text-white">100%</strong>,
              flexible EMI fees, guaranteed placement training and North India&rsquo;s most vibrant campus experience —
              since 1996.
            </p>

            {/* stats row */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-2xl">
              {[
                { v: "40,346+", l: "Alumni" },
                { v: "10,999+", l: "Placements" },
                { v: "50+", l: "Programmes" },
                { v: "25+", l: "Years Legacy" },
              ].map((k) => (
                <div key={k.l} className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm px-3 py-3 md:px-4 md:py-4">
                  <div className="text-xl md:text-2xl font-extrabold text-red-400 tabular-nums">{k.v}</div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mt-0.5">{k.l}</div>
                </div>
              ))}
            </div>

            {/* countdown */}
            <div className="mt-8 md:mt-10 flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-red-300 text-[11px] font-bold uppercase tracking-widest">
                <Calendar className="w-3.5 h-3.5" /> Registration closes in
              </div>
              <div className="flex items-center gap-2">
                {[
                  { v: d, l: "Days" },
                  { v: h, l: "Hrs" },
                  { v: m, l: "Min" },
                  { v: s, l: "Sec" },
                ].map((c) => (
                  <div key={c.l} className="min-w-[56px] rounded-lg bg-red-600 text-white text-center px-2 py-1.5 shadow-lg shadow-red-900/40" data-testid={`apply-countdown-${c.l.toLowerCase()}`}>
                    <div className="text-lg md:text-xl font-black tabular-nums leading-none">{String(c.v).padStart(2, "0")}</div>
                    <div className="text-[9px] font-bold uppercase tracking-widest opacity-90 mt-0.5">{c.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* quick contact strip */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:18001218427" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-colors" data-testid="apply-call-btn">
                <Phone className="w-4 h-4" /> 1800 121 84271
              </a>
              <a href="https://wa.me/919418001818" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-colors" data-testid="apply-whatsapp-btn">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: form card */}
          <div className="lg:col-span-5">
            <div id="apply-form" className="relative rounded-2xl bg-white shadow-2xl shadow-red-900/20 border border-white/10 overflow-hidden" data-testid="apply-form-card">
              {/* header strip */}
              <div className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 px-5 md:px-6 py-4 md:py-5 text-white">
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-90">Apply Today For</div>
                <div className="text-lg md:text-xl font-extrabold leading-tight">Sri Sai Group of Institutes</div>
                <div className="text-[11px] opacity-90 mt-0.5">Registration ends 15th July 2026</div>
              </div>

              {submitted ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-9 h-9 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Application received!</h4>
                  <p className="text-slate-600 mt-2 text-sm">
                    Thank you, <strong>{form.name || "student"}</strong>. Our admissions counsellor will call{" "}
                    <strong>{form.phone}</strong> within 24 hours with your next steps.
                  </p>
                  <div className="mt-5 flex gap-3 justify-center">
                    <Button className="bg-red-700 hover:bg-red-800 text-white" onClick={resetForm} data-testid="apply-new-application-btn">
                      Submit another
                    </Button>
                    <Link to="/">
                      <Button variant="outline">Back to Home</Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <form className="p-5 md:p-6 space-y-3.5" onSubmit={handleSubmit} data-testid="apply-form">
                  <div>
                    <Label htmlFor="ap-name" className="text-slate-700 text-xs font-bold uppercase tracking-wider">Full Name *</Label>
                    <Input
                      id="ap-name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="h-11"
                      required
                      data-testid="apply-input-name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="ap-phone" className="text-slate-700 text-xs font-bold uppercase tracking-wider">Mobile *</Label>
                      <Input
                        id="ap-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="10-digit number"
                        className="h-11"
                        required
                        data-testid="apply-input-phone"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ap-email" className="text-slate-700 text-xs font-bold uppercase tracking-wider">Email</Label>
                      <Input
                        id="ap-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@email.com"
                        className="h-11"
                        data-testid="apply-input-email"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">Home State *</Label>
                    <Select value={form.state} onValueChange={(v) => setForm({ ...form, state: v })}>
                      <SelectTrigger className="h-11" data-testid="apply-select-state">
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {indianStates.map((st) => (
                          <SelectItem key={st} value={st}>{st}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">Discipline *</Label>
                    <Select value={form.discipline} onValueChange={(v) => setForm({ ...form, discipline: v, program: "" })}>
                      <SelectTrigger className="h-11" data-testid="apply-select-discipline">
                        <SelectValue placeholder="Choose a discipline" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {disciplines.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">Program *</Label>
                    <Select
                      value={form.program}
                      onValueChange={(v) => setForm({ ...form, program: v })}
                      disabled={!form.discipline}
                    >
                      <SelectTrigger className="h-11" data-testid="apply-select-program">
                        <SelectValue placeholder={form.discipline ? "Select a program" : "Select discipline first"} />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {(programsByDiscipline[form.discipline] || []).map((p) => (
                          <SelectItem key={p} value={p}>{p}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="ap-marks" className="text-slate-700 text-xs font-bold uppercase tracking-wider">10+2 / Qualifying %</Label>
                      <Input
                        id="ap-marks"
                        type="text"
                        value={form.marks}
                        onChange={(e) => setForm({ ...form, marks: e.target.value })}
                        placeholder="e.g. 82%"
                        className="h-11"
                        data-testid="apply-input-marks"
                      />
                    </div>
                    <div>
                      <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">How did you hear?</Label>
                      <Select value={form.source} onValueChange={(v) => setForm({ ...form, source: v })}>
                        <SelectTrigger className="h-11" data-testid="apply-select-source">
                          <SelectValue placeholder="Optional" />
                        </SelectTrigger>
                        <SelectContent>
                          {["Google Search","Instagram","YouTube","Friend / Alumni","Newspaper","School Visit","Other"].map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider text-sm shadow-lg shadow-red-800/30"
                    data-testid="apply-submit-btn"
                  >
                    <Send className="w-4 h-4 mr-2" /> Submit Application
                  </Button>
                  <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                    By submitting, you agree to be contacted by the SSGI admissions team via SMS, email or call.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY APPLY ============ */}
      <section className="bg-white py-14 md:py-20" data-testid="apply-why">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Why Apply to SSGI</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Everything you need to build a <span className="text-red-600">career you love</span>.
            </h2>
            <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 md:mt-5 rounded-full" />
          </div>

          <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {perks.map((p, i) => (
              <div
                key={p.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <div className="absolute top-4 right-5 text-slate-100 font-black text-4xl tabular-nums select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-11 h-11 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-md mb-4">
                  <p.icon className="w-5 h-5" />
                </div>
                <div className="font-extrabold text-slate-900 text-lg">{p.title}</div>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5-STEP PROCESS ============ */}
      <section className="bg-slate-950 text-white py-14 md:py-20 relative overflow-hidden" data-testid="apply-process">
        <div className="relative max-w-[1400px] mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-widest text-red-400 font-bold mb-2">How It Works</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              5 simple steps to your <span className="text-red-500">SSGI seat</span>.
            </h2>
            <div className="w-16 md:w-24 h-1 bg-red-500 mt-4 md:mt-5 rounded-full" />
          </div>

          <div className="mt-10 md:mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {steps.map((st, i) => (
              <div key={st.n} className="relative rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm p-5 md:p-6 hover:bg-white/[0.08] transition-colors">
                <div className="flex items-center justify-between">
                  <div className="text-red-400 font-black text-3xl tabular-nums">{st.n}</div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-white/25 hidden lg:block" />
                  )}
                </div>
                <div className="mt-3 font-extrabold text-white text-lg">{st.title}</div>
                <p className="mt-2 text-slate-400 text-sm leading-relaxed">{st.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-3">
            <a href="#apply-form">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-wider" data-testid="apply-start-cta">
                Start My Application <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Link to="/about/vision-mission">
              <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-bold uppercase tracking-wider">
                Explore Vision &amp; Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SCHOLARSHIPS ============ */}
      <section className="bg-white py-14 md:py-20" data-testid="apply-scholarships">
        <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Scholarships 2026</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Meritorious? <span className="text-red-600">We reward you.</span>
            </h2>
            <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 md:mt-5 rounded-full" />
            <p className="mt-5 text-slate-600 text-sm md:text-base leading-relaxed">
              At SSGI, hard work is never expensive. From full tuition waivers for toppers to special support for
              sports achievers, defence wards, siblings and alumni references — there is a scholarship for almost
              every deserving student.
            </p>
            <div className="mt-6 flex items-center gap-2 text-slate-700 text-sm">
              <Target className="w-4 h-4 text-red-600" />
              Scholarships combine with government schemes like PMSSS, SC/ST, EWS and OBC subsidies.
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-slate-900 text-white px-5 py-3 grid grid-cols-5 text-[11px] font-bold uppercase tracking-widest">
                <div className="col-span-3">Eligibility band</div>
                <div className="col-span-2 text-right">Benefit</div>
              </div>
              <ul>
                {scholarshipSlabs.map((sl, i) => (
                  <li
                    key={sl.band}
                    className={`px-5 py-4 grid grid-cols-5 items-center text-sm ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    <div className="col-span-3 text-slate-800 font-semibold">{sl.band}</div>
                    <div className="col-span-2 text-right text-red-700 font-extrabold">{sl.benefit}</div>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#apply-form" className="inline-block mt-6">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-wider">
                Check My Scholarship <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL STRIP ============ */}
      <section className="bg-gradient-to-br from-red-700 via-red-600 to-rose-600 text-white py-14 md:py-20 relative overflow-hidden" data-testid="apply-testimonial">
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 w-80 h-80 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" /> Student Voice
          </div>
          <blockquote className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight max-w-4xl mx-auto">
            &ldquo;SSGI gave me more than a degree — it gave me a career, a friend circle for life, and the confidence
            to work at Amazon straight out of college.&rdquo;
          </blockquote>
          <div className="mt-5 text-red-100 text-sm">
            <strong className="text-white">Sakshi Gupta</strong> · B.Tech CSE, Batch of 2024 · Placed at Amazon · ₹24.5 LPA
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-white py-14 md:py-20" data-testid="apply-faq">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Common Questions</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Everything you might <span className="text-red-600">want to know</span>.
            </h2>
            <div className="w-16 md:w-24 h-1 bg-red-600 mx-auto mt-4 md:mt-5 rounded-full" />
          </div>

          <Accordion type="single" collapsible className="mt-10 md:mt-12 border border-slate-200 rounded-2xl overflow-hidden bg-white">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-slate-200 last:border-b-0"
              >
                <AccordionTrigger className="px-5 md:px-6 py-4 text-left font-bold text-slate-900 hover:no-underline hover:bg-slate-50 text-sm md:text-base" data-testid={`apply-faq-q-${i}`}>
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
      <section className="bg-slate-950 text-white py-14 md:py-20 border-t border-white/5" data-testid="apply-final-cta">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-red-500 mx-auto" />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            One decision. <span className="text-red-500">A better tomorrow.</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Join 40,000+ SSGI alumni who bet on themselves at Pathankot — and never looked back. Applications close
            soon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="#apply-form">
              <Button className="h-12 px-8 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider" data-testid="apply-final-cta-btn">
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="tel:18001218427">
              <Button variant="outline" className="h-12 px-8 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-bold uppercase tracking-wider">
                <Phone className="w-4 h-4 mr-2" /> Call 1800 121 84271
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ============ STICKY MOBILE APPLY BAR ============ */}
      <a
        href="#apply-form"
        className="fixed lg:hidden bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-extrabold uppercase tracking-wider py-3.5 shadow-2xl shadow-red-900/40"
        data-testid="apply-sticky-mobile-btn"
      >
        <BookOpen className="w-4 h-4" /> Apply Now — 60 seconds
      </a>
    </PageLayout>
  );
};

export default Apply;
