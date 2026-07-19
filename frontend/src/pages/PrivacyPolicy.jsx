import React from "react";
import LegalPage from "@/components/site/LegalPage";
import { Mail, Phone } from "lucide-react";

const PrivacyPolicy = () => (
  <LegalPage
    eyebrow="Privacy Policy"
    title="Your privacy, our responsibility"
    subtitle="How Sri Sai Group of Institutes collects, uses and protects your personal information."
    breadcrumb={[{ label: "Privacy Policy" }]}
    updated="10 January 2026"
    sections={[
      {
        id: "intro",
        heading: "Introduction",
        body: (
          <>
            <p>
              Sri Sai Group of Institutes (&ldquo;SSGI&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;)
              is committed to protecting the privacy of every visitor, prospective applicant, student, parent,
              employee and partner who interacts with us through our website{" "}
              <span className="font-semibold text-slate-900">srisaigroup.edu.in</span>, our sub-domains, mobile
              applications and offline channels (collectively, the &ldquo;Services&rdquo;).
            </p>
            <p>
              This Privacy Policy explains what personal information we collect, why we collect it, how we use and
              share it, the choices you have regarding your information, and how we keep it secure. By using our
              Services, you consent to the practices described in this Policy.
            </p>
          </>
        ),
      },
      {
        id: "information-we-collect",
        heading: "Information we collect",
        body: (
          <>
            <p>We collect the following categories of information:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Contact details</strong> — name, mobile number, email address, home state, city and postal
                address you share via our enquiry, application, scholarship or newsletter forms.
              </li>
              <li>
                <strong>Academic details</strong> — 10th / 12th / diploma / graduation scores, board / university,
                year of passing, entrance exam scores (JEE / CUET / State CET), and programme preferences.
              </li>
              <li>
                <strong>Identity documents</strong> — Aadhaar, PAN, category / income certificate, photo ID etc.,
                only when submitted during formal admission and only for lawful admission &amp; scholarship
                verification.
              </li>
              <li>
                <strong>Payment information</strong> — processed by RBI-authorised payment gateways; SSGI does not
                store your card / UPI credentials on our servers.
              </li>
              <li>
                <strong>Technical data</strong> — IP address, browser type, device, operating system, referring URL,
                pages viewed and time spent, collected via cookies and standard web logs.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "how-we-use",
        heading: "How we use your information",
        body: (
          <>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to admission enquiries, scholarship queries and general questions.</li>
              <li>Process applications, verify eligibility, allot seats and issue admission letters.</li>
              <li>
                Send you programme information, admissions deadlines, scholarship updates, event invites and
                counselling schedules via SMS, WhatsApp, email and phone calls.
              </li>
              <li>Improve our website, curriculum, campus experience and student support services.</li>
              <li>Comply with statutory obligations (AICTE, UGC, IKGPTU, PCI, State &amp; Central Govt. bodies).</li>
              <li>Detect, prevent and address fraud, abuse or security incidents.</li>
            </ul>
          </>
        ),
      },
      {
        id: "sharing",
        heading: "How we share your information",
        body: (
          <>
            <p>We <strong>do not sell</strong> your personal information. We share it only in limited cases:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                With <strong>affiliated institutions</strong> under the Sri Sai Group family for a unified admission
                and student experience.
              </li>
              <li>
                With <strong>authorised service providers</strong> (CRM, email/SMS gateways, payment processors,
                cloud hosting) who are contractually bound to protect it.
              </li>
              <li>
                With <strong>regulatory / statutory authorities</strong> such as AICTE, UGC, IKGPTU, PCI, PSBTE,
                NIRF, income-tax authorities and law-enforcement agencies when required by law.
              </li>
              <li>
                With <strong>industry / placement partners</strong> during on-campus recruitment, with your prior
                consent.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "cookies",
        heading: "Cookies & tracking",
        body: (
          <>
            <p>
              Our website uses cookies and similar technologies to remember your preferences, enable core site
              functionality and understand how our pages are used, so we can continuously improve them. You can
              disable cookies from your browser settings at any time — some features may not function fully if
              cookies are disabled.
            </p>
          </>
        ),
      },
      {
        id: "security",
        heading: "How we protect your data",
        body: (
          <>
            <p>
              We employ industry-standard technical and organisational measures — TLS encryption, restricted access
              controls, firewalls, regular backups, audit logs and role-based permissions — to safeguard your
              information against unauthorised access, alteration or disclosure. However, no system on the internet
              can be guaranteed 100% secure; we encourage you to keep your login credentials confidential.
            </p>
          </>
        ),
      },
      {
        id: "retention",
        heading: "How long we keep your data",
        body: (
          <>
            <p>
              Enquiry data is retained for up to 3 years from your last interaction unless you request earlier
              deletion. Student academic records are retained as per statutory / regulatory requirements
              (typically 10 years or as mandated by the affiliating university / regulatory body).
            </p>
          </>
        ),
      },
      {
        id: "your-rights",
        heading: "Your rights & choices",
        body: (
          <>
            <p>Subject to applicable law, you may:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Request access to a copy of the personal data we hold about you.</li>
              <li>Request correction of any inaccurate or outdated information.</li>
              <li>Request deletion of your personal data, subject to statutory retention obligations.</li>
              <li>Withdraw consent for promotional communications by replying &ldquo;STOP&rdquo; to SMS or clicking &ldquo;unsubscribe&rdquo; in emails.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details below. We will respond within a
              reasonable time and in accordance with applicable law.
            </p>
          </>
        ),
      },
      {
        id: "children",
        heading: "Minors",
        body: (
          <>
            <p>
              Some of our applicants may be under 18. In such cases, we recommend that a parent or legal guardian
              submit the enquiry / application on their behalf. We do not knowingly collect data from children
              under 13 without explicit parental consent.
            </p>
          </>
        ),
      },
      {
        id: "updates",
        heading: "Updates to this Policy",
        body: (
          <>
            <p>
              We may revise this Privacy Policy from time to time to reflect changes in law, technology or our
              practices. The latest version will always be available on this page with an updated effective date.
            </p>
          </>
        ),
      },
    ]}
    contact={
      <>
        <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Contact us</div>
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
          Questions about your data? Write to our Grievance Officer.
        </h3>
        <p className="mt-2 text-slate-700 text-sm md:text-base">
          Grievance / Privacy Officer, Sri Sai Group of Institutes, Badhani, Pathankot, Punjab &mdash; 145001, India.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="mailto:privacy@srisaigroup.edu.in" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-full text-sm font-semibold">
            <Mail className="w-4 h-4" /> privacy@srisaigroup.edu.in
          </a>
          <a href="tel:18001218427" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-full text-sm font-semibold">
            <Phone className="w-4 h-4" /> 1800 121 84271
          </a>
        </div>
      </>
    }
  />
);

export default PrivacyPolicy;
