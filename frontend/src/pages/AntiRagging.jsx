import React from "react";
import LegalPage from "@/components/site/LegalPage";
import { ShieldAlert, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

const AntiRagging = () => (
  <LegalPage
    eyebrow="Anti-Ragging Policy"
    title="Zero tolerance to ragging — a safe campus, always."
    subtitle="SSGI strictly enforces the UGC and Supreme Court of India directives against ragging in all its forms."
    breadcrumb={[{ label: "Anti-Ragging" }]}
    updated="10 January 2026"
    sections={[
      {
        id: "commitment",
        heading: "Our commitment",
        body: (
          <>
            <p>
              Sri Sai Group of Institutes (SSGI) unequivocally condemns ragging in <strong>any</strong> form and is
              fully committed to providing a safe, respectful, dignified and stress-free environment for every
              student. Our campus operates in strict compliance with the{" "}
              <strong>UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009</strong>
              {" "}(as amended) and the directions of the Hon&rsquo;ble Supreme Court of India.
            </p>
            <p>
              Every student, parent, faculty member and non-teaching staff of SSGI is required to read, understand
              and abide by this Anti-Ragging Policy.
            </p>
          </>
        ),
      },
      {
        id: "what-is-ragging",
        heading: "What constitutes ragging?",
        body: (
          <>
            <p>Ragging includes, but is not limited to, any of the following acts:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Any conduct — by words spoken or written, or by an act — which has the effect of teasing, treating or handling with rudeness a fresher or any other student.</li>
              <li>Indulging in rowdy or undisciplined activities which cause or are likely to cause annoyance, hardship, physical or psychological harm.</li>
              <li>Asking a student to do any act or perform something which such student would not do in the ordinary course, and which causes shame, embarrassment or torment.</li>
              <li>Any act by a senior student that prevents, disrupts or disturbs the regular academic activity of a junior or fresher.</li>
              <li>Exploiting the services of a junior for the completion of academic tasks, chores or errands.</li>
              <li>Any act of financial extortion or forceful expenditure imposed on a fresher.</li>
              <li>Any act of physical abuse — including sexual abuse, homosexual assault, stripping, forcing obscene / lewd acts, gestures — causing bodily harm or any other danger to health / person.</li>
              <li>Any act or abuse by spoken words, emails, posts, public insults — including deriving perverted pleasure, vicarious or sadistic thrill from actively or passively participating in the discomfiture of a fresher or any other student.</li>
              <li>Any act that affects the mental health and self-confidence of a fresher or any other student.</li>
            </ul>
          </>
        ),
      },
      {
        id: "punishment",
        heading: "Punishment for ragging",
        body: (
          <>
            <p>
              Depending on the nature and severity of the offence, one or more of the following punishments may be
              imposed on the student(s) found guilty of ragging &mdash; either directly or through abetment:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Suspension from attending classes and academic privileges.</li>
              <li>Withholding / withdrawing scholarships, fellowships and other benefits.</li>
              <li>Debarring from appearing in any test / examination or other evaluation process.</li>
              <li>Withholding results.</li>
              <li>Debarring from representing the institution in any regional, national or international event.</li>
              <li>Suspension / expulsion from the hostel.</li>
              <li>Cancellation of admission.</li>
              <li>Rustication from the institution for a period ranging from 1 to 4 semesters.</li>
              <li>Expulsion from the institution and consequent debarring from admission to any other institution for a specified period.</li>
              <li>Collective punishment: where the perpetrators are not identified, the institution may resort to collective punishment as a deterrent.</li>
              <li>Filing of an FIR with the local police and criminal prosecution under applicable IPC / BNS provisions.</li>
            </ul>
          </>
        ),
      },
      {
        id: "committee",
        heading: "Anti-Ragging Committee & Squad",
        body: (
          <>
            <p>
              SSGI has constituted an <strong>Anti-Ragging Committee</strong> and an <strong>Anti-Ragging Squad</strong>,
              headed by the Director-Principal, with representation from senior faculty, hostel wardens, security
              officers, student representatives, parent representatives and members from local administration /
              police (as per UGC guidelines).
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The Committee is responsible for overall oversight, awareness campaigns, monitoring compliance and reviewing complaints.</li>
              <li>The Squad conducts surprise inspections in classrooms, hostels, canteens, sports grounds, corridors, buses and other places where ragging is likely to occur.</li>
              <li>CCTV surveillance is installed and monitored across sensitive locations on campus.</li>
              <li>Anti-ragging undertakings are collected online from every student and parent at the time of admission and at the start of every academic year, as mandated by UGC.</li>
            </ul>
          </>
        ),
      },
      {
        id: "prevention",
        heading: "Prevention measures at SSGI",
        body: (
          <>
            <ul className="list-disc pl-5 space-y-2">
              <li>Comprehensive orientation programme for freshers with parents, faculty and seniors.</li>
              <li>Mandatory online anti-ragging affidavit by every student & parent every academic year.</li>
              <li>Anti-ragging posters, helpline numbers and warning notices displayed prominently across the campus and hostels.</li>
              <li>Buddy programme pairing every fresher with a trained senior mentor.</li>
              <li>24&times;7 hostel wardens, security patrols and CCTV monitoring.</li>
              <li>Regular sensitisation sessions and grievance-redressal counselling for all students.</li>
            </ul>
          </>
        ),
      },
      {
        id: "report",
        heading: "How to report ragging",
        body: (
          <>
            <p>
              If you or anyone you know is a victim of ragging &mdash; or has witnessed an incident of ragging on
              or off campus &mdash; please report it <strong>immediately</strong> through any of the channels below.
              All complaints are treated with strict confidentiality.
            </p>

            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <a
                href="tel:18001805522"
                className="flex items-start gap-3 rounded-xl border border-red-200 bg-white p-5 hover:shadow-md transition-shadow"
                data-testid="antirag-national-helpline"
              >
                <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">National Anti-Ragging Helpline</div>
                  <div className="font-extrabold text-slate-900 text-lg">1800-180-5522</div>
                  <div className="text-xs text-slate-600">Toll-free · 24&times;7</div>
                </div>
              </a>

              <a
                href="mailto:helpline@antiragging.in"
                className="flex items-start gap-3 rounded-xl border border-red-200 bg-white p-5 hover:shadow-md transition-shadow"
                data-testid="antirag-national-email"
              >
                <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">National Anti-Ragging Email</div>
                  <div className="font-extrabold text-slate-900 text-lg break-all">helpline@antiragging.in</div>
                  <div className="text-xs text-slate-600">Monitored by UGC & MHRD</div>
                </div>
              </a>

              <a
                href="tel:8427184271"
                className="flex items-start gap-3 rounded-xl border border-red-200 bg-white p-5 hover:shadow-md transition-shadow"
                data-testid="antirag-ssgi-cell"
              >
                <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">SSGI Anti-Ragging Cell</div>
                  <div className="font-extrabold text-slate-900 text-lg">84271-84271</div>
                  <div className="text-xs text-slate-600">Available 24&times;7 during academic session</div>
                </div>
              </a>

              <a
                href="mailto:antiragging@srisaigroup.in"
                className="flex items-start gap-3 rounded-xl border border-red-200 bg-white p-5 hover:shadow-md transition-shadow"
                data-testid="antirag-ssgi-email"
              >
                <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">SSGI Grievance Email</div>
                  <div className="font-extrabold text-slate-900 text-lg break-all">antiragging@srisaigroup.in</div>
                  <div className="text-xs text-slate-600">Reviewed by Director-Principal</div>
                </div>
              </a>
            </div>

            <div className="mt-6">
              <a
                href="https://antiragging.in/affidavit_affiliated_form.php"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full text-sm font-extrabold uppercase tracking-wider"
                data-testid="antirag-file-online"
              >
                File Online Anti-Ragging Complaint <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </>
        ),
      },
      {
        id: "undertaking",
        heading: "Mandatory anti-ragging undertaking",
        body: (
          <>
            <p>
              As per UGC Regulations, every student and their parent / guardian must submit a signed
              anti-ragging affidavit online through the national portal{" "}
              <a href="https://antiragging.in" target="_blank" rel="noreferrer" className="text-red-700 font-semibold hover:underline">antiragging.in</a>
              {" "}at the time of admission and again at the beginning of every subsequent academic year.
            </p>
            <p>
              Non-submission of the undertaking will result in the student being ineligible to attend classes and
              appear for examinations.
            </p>
          </>
        ),
      },
      {
        id: "message",
        heading: "A message to our students",
        body: (
          <>
            <p>
              We believe that a college campus is meant for learning, friendships and growth &mdash; not fear.
              Speak up. Reach out. Whether you are a fresher or a senior, your voice matters, and every complaint
              &mdash; big or small &mdash; will be taken seriously and acted upon.
            </p>
            <p className="font-bold text-slate-900">
              #SSGISaysNoToRagging
            </p>
          </>
        ),
      },
    ]}
    contact={
      <>
        <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Need immediate help?</div>
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
          Contact the SSGI Anti-Ragging Cell right now.
        </h3>
        <p className="mt-2 text-slate-700 text-sm md:text-base">
          Every complaint is confidential. You can also involve a parent or trusted senior. Ragging is a
          criminal offence &mdash; we are here to protect you.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="tel:8427184271" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-full text-sm font-semibold">
            <Phone className="w-4 h-4" /> Call SSGI Anti-Ragging Cell
          </a>
          <a href="https://wa.me/918427184271" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-full text-sm font-semibold">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a href="tel:18001805522" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-full text-sm font-semibold">
            <Phone className="w-4 h-4" /> National Helpline 1800-180-5522
          </a>
        </div>
      </>
    }
  />
);

export default AntiRagging;
