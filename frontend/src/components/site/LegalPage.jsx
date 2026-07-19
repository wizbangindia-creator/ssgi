import React from "react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";

/**
 * LegalPage — shared layout for policy / legal pages.
 * Props:
 *   title, subtitle, eyebrow, breadcrumb, updated
 *   sections: [{ id, heading, body: ReactNode }]
 *   contact: optional ReactNode rendered at end
 */
const LegalPage = ({
  eyebrow = "Legal",
  title,
  subtitle,
  breadcrumb = [],
  updated,
  sections = [],
  contact = null,
}) => (
  <PageLayout>
    <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} breadcrumb={breadcrumb} />

    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* TOC */}
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-32 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-6">
            <div className="text-[10px] uppercase tracking-widest text-red-700 font-bold">On this page</div>
            <ul className="mt-3 space-y-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-start gap-2 text-sm text-slate-700 hover:text-red-700 transition-colors"
                    data-testid={`legal-toc-${s.id}`}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 group-hover:scale-125 transition-transform" />
                    <span>
                      <span className="font-bold text-slate-500 tabular-nums mr-1">
                        {String(i + 1).padStart(2, "0")}.
                      </span>
                      {s.heading}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            {updated && (
              <div className="mt-5 pt-4 border-t border-slate-200 text-[11px] text-slate-500">
                Last updated: <span className="font-bold text-slate-700">{updated}</span>
              </div>
            )}
          </div>
        </aside>

        {/* Content */}
        <article className="lg:col-span-9">
          <div className="prose-legal max-w-none">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="mb-10 scroll-mt-28" data-testid={`legal-section-${s.id}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-md">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {s.heading}
                  </h2>
                </div>
                <div className="text-slate-700 text-sm md:text-[15px] leading-relaxed space-y-3 pl-11">
                  {s.body}
                </div>
              </section>
            ))}

            {contact && (
              <div className="mt-6 rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-6 md:p-8">
                {contact}
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  </PageLayout>
);

export default LegalPage;
