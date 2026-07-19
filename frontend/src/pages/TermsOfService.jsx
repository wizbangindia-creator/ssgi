import React from "react";
import LegalPage from "@/components/site/LegalPage";
import { Mail } from "lucide-react";

const TermsOfService = () => (
  <LegalPage
    eyebrow="Terms of Service"
    title="Terms of use for the SSGI website"
    subtitle="Please read these terms carefully before using the Sri Sai Group of Institutes digital services."
    breadcrumb={[{ label: "Terms of Service" }]}
    updated="10 January 2026"
    sections={[
      {
        id: "acceptance",
        heading: "Acceptance of Terms",
        body: (
          <>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website{" "}
              <span className="font-semibold text-slate-900">srisaigroup.edu.in</span>, its sub-domains and any
              associated mobile applications, together with all content, features and functionalities offered
              through them (collectively, the &ldquo;Services&rdquo;) by Sri Sai Group of Institutes
              (&ldquo;SSGI&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;).
            </p>
            <p>
              By accessing, browsing, registering an enquiry or submitting an application through our Services,
              you agree to be bound by these Terms and our{" "}
              <a href="/privacy-policy" className="text-red-700 font-semibold hover:underline">Privacy Policy</a>.
              If you do not agree, please discontinue use of the Services.
            </p>
          </>
        ),
      },
      {
        id: "eligibility",
        heading: "Eligibility to use",
        body: (
          <>
            <p>
              You must be at least 16 years of age to submit an enquiry or application. Users below 18 are
              encouraged to use the Services under the supervision of a parent or legal guardian. By using our
              Services, you represent that all information you provide is true, accurate, current and complete.
            </p>
          </>
        ),
      },
      {
        id: "account",
        heading: "Account & information accuracy",
        body: (
          <>
            <p>
              Where the Services require you to create an account or share personal details, you agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide accurate, current and complete information.</li>
              <li>Maintain and promptly update your information to keep it accurate.</li>
              <li>Keep your login credentials confidential and not share them with third parties.</li>
              <li>Notify us immediately of any unauthorised use of your account.</li>
            </ul>
            <p>
              SSGI reserves the right to refuse, suspend or cancel any application, admission or account that is
              found to contain false, misleading or forged information.
            </p>
          </>
        ),
      },
      {
        id: "acceptable-use",
        heading: "Acceptable use",
        body: (
          <>
            <p>You agree <strong>not</strong> to use the Services to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Upload, transmit or share any unlawful, harmful, defamatory, obscene, hateful or infringing content.</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with SSGI.</li>
              <li>Interfere with, disrupt or attempt to gain unauthorised access to our servers, networks or user accounts.</li>
              <li>Use bots, scrapers or any automated means to extract content or overload our infrastructure.</li>
              <li>Violate any applicable Indian or international law, including the Information Technology Act, 2000 and its rules.</li>
            </ul>
          </>
        ),
      },
      {
        id: "ip",
        heading: "Intellectual property",
        body: (
          <>
            <p>
              All content on the Services — including the SSGI name, logos, insignia, text, images, graphics,
              videos, audio, curriculum outlines, publications, software and page layouts — is the exclusive
              property of Sri Sai Group of Institutes or its licensors, and is protected under Indian and
              international copyright, trademark and other intellectual-property laws.
            </p>
            <p>
              You may view, download and print pages from the Services for personal, non-commercial reference only.
              Any other use — including reproduction, republication, distribution, modification or creation of
              derivative works — requires prior written permission from SSGI.
            </p>
          </>
        ),
      },
      {
        id: "admissions",
        heading: "Admissions, fees & refunds",
        body: (
          <>
            <p>
              Admissions are governed by the eligibility criteria, admission notifications and fee policies
              published by SSGI, its affiliating universities and applicable regulators (AICTE, UGC, IKGPTU, PCI,
              PSBTE etc.) from time to time. In case of any conflict between information on the website and the
              official admission brochure / regulatory guidelines, the official document shall prevail.
            </p>
            <p>
              Fees, scholarships and refund policies are governed by SSGI&rsquo;s fee circular and the AICTE / UGC
              refund guidelines applicable at the time of admission. All payments through the Services are
              processed by RBI-authorised payment gateways; SSGI is not liable for transaction failures or
              successful payments not received due to gateway or bank errors.
            </p>
          </>
        ),
      },
      {
        id: "third-party",
        heading: "Third-party links",
        body: (
          <>
            <p>
              Our Services may contain links to third-party websites (e.g., affiliating universities, regulators,
              scholarship portals, payment partners, social media). SSGI does not control, endorse or take
              responsibility for the content, policies or practices of such third-party sites. Your interactions
              with them are governed by their own terms and privacy policies.
            </p>
          </>
        ),
      },
      {
        id: "disclaimer",
        heading: "Disclaimer of warranties",
        body: (
          <>
            <p>
              The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. While we
              make every reasonable effort to keep the information on our website accurate and up to date, SSGI
              makes no warranties or representations, express or implied, about the completeness, reliability,
              accuracy or availability of any information, product or service offered through the Services.
            </p>
          </>
        ),
      },
      {
        id: "liability",
        heading: "Limitation of liability",
        body: (
          <>
            <p>
              To the maximum extent permitted by law, SSGI, its trustees, employees and affiliates shall not be
              liable for any direct, indirect, incidental, consequential or exemplary damages arising out of or
              in connection with your access to, or use of / inability to use, the Services, including but not
              limited to loss of data, revenue or opportunity.
            </p>
          </>
        ),
      },
      {
        id: "termination",
        heading: "Suspension & termination",
        body: (
          <>
            <p>
              We may, at our sole discretion, suspend or terminate your access to the Services, in whole or in
              part, without notice, if we believe you have violated these Terms or applicable law, or if such
              action is required to protect the rights, safety or property of SSGI, its users or third parties.
            </p>
          </>
        ),
      },
      {
        id: "governing-law",
        heading: "Governing law & jurisdiction",
        body: (
          <>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard
              to conflict-of-law principles. All disputes arising out of or in connection with these Terms or the
              Services shall be subject to the exclusive jurisdiction of the courts at Pathankot, Punjab, India.
            </p>
          </>
        ),
      },
      {
        id: "changes",
        heading: "Changes to these Terms",
        body: (
          <>
            <p>
              We may revise these Terms from time to time by posting an updated version on this page. Continued
              use of the Services after any such change constitutes your acceptance of the revised Terms. Please
              review this page periodically.
            </p>
          </>
        ),
      },
    ]}
    contact={
      <>
        <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Contact us</div>
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">Questions about these Terms?</h3>
        <p className="mt-2 text-slate-700 text-sm md:text-base">
          Write to the Registrar&rsquo;s Office, Sri Sai Group of Institutes, Badhani, Pathankot, Punjab &mdash; 145001.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="mailto:legal@srisaigroup.edu.in" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-full text-sm font-semibold">
            <Mail className="w-4 h-4" /> legal@srisaigroup.edu.in
          </a>
        </div>
      </>
    }
  />
);

export default TermsOfService;
