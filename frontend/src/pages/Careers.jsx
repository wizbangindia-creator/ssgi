import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  Sparkles,
  Heart,
  Award,
  Search,
  Send,
  CheckCircle2,
  BookOpen,
  Building2,
  ChevronLeft,
  Phone,
} from "lucide-react";

/* ---------- Openings ---------- */
const openings = [
  { id: "faculty-cse",   title: "Assistant / Associate Professor — CSE",       department: "Sri Sai College of Engg. & Tech.", type: "Full-Time · Faculty",     location: "Pathankot", experience: "0 – 10 yrs", posted: "2 days ago",  tags: ["AI/ML", "PhD preferred", "Fresh PhD welcome"] },
  { id: "faculty-ece",   title: "Assistant Professor — ECE",                    department: "Sri Sai College of Engg. & Tech.", type: "Full-Time · Faculty",     location: "Pathankot", experience: "0 – 8 yrs",  posted: "4 days ago",  tags: ["VLSI", "Communications"] },
  { id: "faculty-mba",   title: "Assistant / Associate Professor — Management", department: "Sri Sai Iqbal College",             type: "Full-Time · Faculty",     location: "Pathankot", experience: "2 – 12 yrs", posted: "1 week ago",  tags: ["Marketing", "Finance", "HR"] },
  { id: "faculty-pharma",title: "Assistant Professor — Pharmacy",               department: "Sri Sai College of Pharmacy",       type: "Full-Time · Faculty",     location: "Pathankot", experience: "0 – 6 yrs",  posted: "3 days ago",  tags: ["Pharmaceutics", "Pharmacology"] },
  { id: "faculty-bed",   title: "Assistant Professor — B.Ed",                   department: "Sri Sai College of Education",      type: "Full-Time · Faculty",     location: "Pathankot", experience: "2 – 10 yrs", posted: "6 days ago",  tags: ["NCTE", "Pedagogy"] },
  { id: "lab-tech-cse",  title: "Lab Technician — CSE",                          department: "Engineering",                       type: "Full-Time · Technical",  location: "Pathankot", experience: "1 – 4 yrs",  posted: "1 day ago",   tags: ["Linux", "Networking"] },
  { id: "placement-off", title: "Placement Officer",                             department: "Placement Cell",                    type: "Full-Time · Non-Teaching", location: "Pathankot", experience: "3 – 8 yrs",  posted: "5 days ago",  tags: ["Corporate", "Networking"] },
  { id: "admissions-cs", title: "Admissions Counsellor",                         department: "Admissions Cell",                   type: "Full-Time · Non-Teaching", location: "Pathankot", experience: "1 – 5 yrs",  posted: "Today",        tags: ["Sales", "Communication"] },
  { id: "hostel-warden", title: "Hostel Warden (Girls Hostel)",                  department: "Hostel Office",                     type: "Full-Time · Non-Teaching", location: "Pathankot · Resident", experience: "3 – 10 yrs", posted: "1 week ago",  tags: ["Female candidates only"] },
  { id: "librarian",     title: "Librarian",                                     department: "Central Library",                   type: "Full-Time · Non-Teaching", location: "Pathankot", experience: "2 – 7 yrs",  posted: "2 weeks ago", tags: ["M.Lib.I.Sc.", "OPAC"] },
  { id: "sports-coach",  title: "Sports Coach — Cricket / Football",             department: "Sports Cell",                       type: "Full-Time · Non-Teaching", location: "Pathankot", experience: "3 – 10 yrs", posted: "5 days ago",  tags: ["NIS certified"] },
  { id: "accounts-off",  title: "Accounts Officer",                              department: "Accounts & Finance",                type: "Full-Time · Non-Teaching", location: "Pathankot", experience: "3 – 8 yrs",  posted: "6 days ago",  tags: ["Tally", "GST"] },
];

const FILTERS = ["All", "Faculty", "Non-Teaching", "Technical"];

const BENEFITS = [
  { icon: Heart,     title: "Growth-first culture",       copy: "Structured faculty-development programmes, industry immersions and research support every year." },
  { icon: Award,     title: "Competitive compensation",   copy: "Pay-scales in line with AICTE / UGC norms plus performance-based increments." },
  { icon: Users,     title: "Collaborative teams",         copy: "Work with passionate colleagues, top-of-the-field HoDs and 8,000+ curious students." },
  { icon: BookOpen,  title: "Research & publications",     copy: "Seed funding, patent support, and international conference sponsorships for faculty." },
  { icon: Building2, title: "Modern infrastructure",       copy: "Well-equipped labs, IBM CoE, Pearson VUE centre and a modern central library." },
  { icon: Sparkles,  title: "Work-life balance",           copy: "5 &frac12;-day work-week, generous leave and on-campus subsidised staff quarters." },
];

const Careers = () => {
  const { toast } = useToast();
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "", experience: "", message: "" });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return openings.filter((o) => {
      const matchFilter = filter === "All" || o.type.includes(filter);
      const matchQuery = !q || o.title.toLowerCase().includes(q) || o.department.toLowerCase().includes(q) || o.tags.join(" ").toLowerCase().includes(q);
      return matchFilter && matchQuery;
    });
  }, [filter, query]);

  const handleApply = (roleTitle) => {
    setForm({ ...form, role: roleTitle });
    const el = document.getElementById("apply-form");
    if (el) window.scrollTo({ top: el.offsetTop - 120, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.role) {
      toast({ title: "Please fill Name, Phone and Role." });
      return;
    }
    const list = JSON.parse(localStorage.getItem("ssgi_career_applications") || "[]");
    list.push({ ...form, submittedAt: new Date().toISOString() });
    localStorage.setItem("ssgi_career_applications", JSON.stringify(list));
    setSubmitted(true);
    toast({ title: "Application received!", description: "Our HR team will review and get back to you." });
  };

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white" data-testid="careers-hero">
        <div className="relative max-w-[1400px] mx-auto px-4 pt-8 md:pt-14 pb-12 md:pb-16">
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <Link to="/" className="hover:text-red-300">Home</Link>
            <span className="text-slate-500">/</span>
            <span className="text-white font-semibold">Careers</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-200 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
                <Briefcase className="w-3.5 h-3.5" /> We&rsquo;re hiring
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
                Build the future of <span className="text-red-500">Indian education</span> with us.
              </h1>
              <p className="mt-4 text-red-200 text-base md:text-lg font-semibold">Faculty · Non-Teaching · Research · Placement</p>
              <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
                Sri Sai Group of Institutes is a growing family of 500+ educators, researchers and support
                professionals shaping the careers of thousands of students every year. If you love teaching,
                research or student-support work &mdash; we&rsquo;d love to hear from you.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#openings">
                  <Button className="h-11 px-6 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider">
                    View Open Roles <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href="mailto:careers@srisaigroup.in">
                  <Button variant="outline" className="h-11 px-5 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-bold uppercase tracking-wider">
                    Email HR
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-6 md:p-8">
                <Users className="w-9 h-9 text-red-400" strokeWidth={1.6} />
                <div className="mt-4 text-[10px] uppercase tracking-widest text-red-300 font-bold">SSGI Team</div>
                <div className="mt-1 text-white font-extrabold text-3xl leading-none">500+</div>
                <div className="mt-1 text-sm text-slate-400">Faculty & staff across all colleges</div>
                <div className="mt-4 pt-4 border-t border-white/10 text-sm text-slate-300">
                  Recognised as a great place to work in higher education across Punjab.
                </div>
              </div>
            </div>
          </div>

          {/* KPI strip */}
          <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: Briefcase, label: "Open Roles",       value: `${openings.length}` },
              { icon: Building2, label: "Departments",      value: "9+" },
              { icon: Award,     label: "Faculty w/ PhD",   value: "60+" },
              { icon: MapPin,    label: "Location",         value: "Pathankot" },
            ].map((k) => (
              <div key={k.label} className="rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-sm p-4 md:p-5">
                <div className="flex items-center gap-2 text-red-300 text-[10px] uppercase tracking-widest font-bold">
                  <k.icon className="w-3.5 h-3.5" /> {k.label}
                </div>
                <div className="mt-2 text-white text-2xl md:text-3xl font-black tracking-tight">{k.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section id="openings" className="bg-white py-14 md:py-20 scroll-mt-32" data-testid="careers-openings">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mb-8 md:mb-10">
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Open Roles</div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Find your next role at SSGI.
            </h2>
            <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
          </div>

          {/* toolbar */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 md:mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by role or department..."
                className="h-11 pl-10"
                data-testid="careers-search"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    filter === f ? "bg-red-600 text-white shadow-md shadow-red-900/20" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                  data-testid={`careers-filter-${f.toLowerCase()}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* list */}
          <div className="space-y-3">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-slate-500">No roles match your filters right now — check back soon.</div>
            ) : (
              filtered.map((o) => (
                <div key={o.id} className="group rounded-2xl border border-slate-200 bg-white p-5 md:p-6 hover:shadow-lg hover:border-red-200 transition-all" data-testid={`careers-role-${o.id}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-red-700 mb-1.5">
                        <Briefcase className="w-3.5 h-3.5" /> {o.department}
                      </div>
                      <div className="font-extrabold text-slate-900 text-lg md:text-xl leading-tight">{o.title}</div>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {o.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> {o.experience}</span>
                        <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-slate-400" /> {o.type}</span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500">Posted {o.posted}</span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {o.tags.map((t) => (
                          <span key={t} className="text-[10px] uppercase tracking-widest font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0">
                      <Button onClick={() => handleApply(o.title)} className="bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-wider" data-testid={`careers-apply-${o.id}`}>
                        Apply <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* WHY SSGI */}
      <section className="bg-slate-50 py-14 md:py-20" data-testid="careers-why">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mb-8 md:mb-10">
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Why work at SSGI</div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A workplace built on <span className="text-red-600">purpose &amp; growth</span>.
            </h2>
            <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFITS.map((b, i) => (
              <div key={b.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <div className="absolute top-4 right-5 text-slate-100 font-black text-4xl tabular-nums select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-11 h-11 rounded-lg bg-red-600 text-white flex items-center justify-center mb-3">
                  <b.icon className="w-5 h-5" />
                </div>
                <div className="font-extrabold text-slate-900 text-base leading-snug">{b.title}</div>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: b.copy }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply-form" className="bg-white py-14 md:py-20 scroll-mt-32" data-testid="careers-form-section">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 px-6 py-5 text-white">
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-90">Submit your application</div>
              <div className="text-xl font-extrabold leading-tight">Ready to join the SSGI family?</div>
              <div className="text-[11px] opacity-90 mt-0.5">Send us your details &mdash; HR responds within 3 working days.</div>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Thank you, {form.name}!</h4>
                <p className="text-slate-600 mt-2 text-sm">Your application for <strong>{form.role}</strong> has been received. Our HR team will review your details and get back to you shortly.</p>
                <Button className="mt-5 bg-red-700 hover:bg-red-800 text-white" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", role: "", experience: "", message: "" }); }} data-testid="careers-reset">
                  Apply for another role
                </Button>
              </div>
            ) : (
              <form className="p-6 md:p-8 space-y-4" onSubmit={handleSubmit} data-testid="careers-form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cr-name" className="text-slate-700 text-xs font-bold uppercase tracking-wider">Full Name *</Label>
                    <Input id="cr-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="h-11" required data-testid="careers-name" />
                  </div>
                  <div>
                    <Label htmlFor="cr-phone" className="text-slate-700 text-xs font-bold uppercase tracking-wider">Phone *</Label>
                    <Input id="cr-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="10-digit number" className="h-11" required data-testid="careers-phone" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cr-email" className="text-slate-700 text-xs font-bold uppercase tracking-wider">Email</Label>
                    <Input id="cr-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="h-11" data-testid="careers-email" />
                  </div>
                  <div>
                    <Label htmlFor="cr-role" className="text-slate-700 text-xs font-bold uppercase tracking-wider">Role Applying For *</Label>
                    <Input id="cr-role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="e.g. Assistant Professor — CSE" className="h-11" required data-testid="careers-role-input" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cr-exp" className="text-slate-700 text-xs font-bold uppercase tracking-wider">Total Experience</Label>
                  <Input id="cr-exp" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} placeholder="e.g. 5 years" className="h-11" data-testid="careers-exp" />
                </div>
                <div>
                  <Label htmlFor="cr-msg" className="text-slate-700 text-xs font-bold uppercase tracking-wider">A note about yourself</Label>
                  <textarea id="cr-msg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Share a brief intro, publications / patents, and any links you'd like us to see." rows={4} className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500" data-testid="careers-msg" />
                </div>
                <Button type="submit" className="w-full h-12 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider shadow-lg shadow-red-800/30" data-testid="careers-submit">
                  <Send className="w-4 h-4 mr-2" /> Submit Application
                </Button>
                <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                  You can also email your resume to <a href="mailto:careers@srisaigroup.in" className="text-red-700 font-semibold">careers@srisaigroup.in</a> · Call HR at <a href="tel:8427184271" className="text-red-700 font-semibold">84271-84271</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <a href="tel:8427184271">
            <Button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider">
              <Phone className="w-4 h-4 mr-2" /> Call HR — 84271-84271
            </Button>
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
