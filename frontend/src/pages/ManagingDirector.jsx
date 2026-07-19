import React from "react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import LeaderMessage from "@/components/site/LeaderMessage";

const ManagingDirector = () => (
  <PageLayout>
    <PageHero
      eyebrow="Leadership"
      title="Managing Director's Message"
      subtitle="Building an ecosystem where students, faculty and industry grow together."
      breadcrumb={[{ label: "About", to: "/about" }, { label: "Managing Director" }]}
    />
    <LeaderMessage
      name="Smt. Tripta Punj"
      designation="Managing Director — Sri Sai Group of Institutes"
      eyebrow="MD's Address"
      headline="The best learning happens when institutions and industry walk hand in hand."
      photo="https://customer-assets-agu9un31.emergentagent.net/job_deploy-test-85/artifacts/9sispxrh_tripta-punj.webp"
      quickFacts={[
        "Oversees day-to-day operations and academic execution",
        "Drives industry partnerships and placement outcomes",
        "Focus on modern infrastructure and campus experience",
        "Strong advocate of experiential, project-based learning",
      ]}
      paragraphs={[
        "Higher education in India is at an inflection point. Employers are looking beyond degrees — they want problem-solvers, communicators, team-players and life-long learners. As Managing Director of Sri Sai Group of Institutes, my single most important priority is to ensure that our graduates walk out of these gates with all of these qualities intact.",
        "To deliver on this, we have built an ecosystem where academic learning is deeply intertwined with industry practice. Our B.Tech, MBA, MCA, Pharmacy, Education and Diploma curricula are reviewed regularly with inputs from senior industry leaders. Our labs are equipped with the same technologies that students will encounter in leading MNCs. Our IBM Centre of Excellence, Pearson VUE Testing Centre and Career Udaan Placement Assurance Programme are all designed to make this transition seamless.",
        "Placements at SSGI are not treated as a season — they are treated as a four-year journey. From the moment a student joins us, our Career Cell begins mapping aptitude, personality, communication and technical skills. Structured training, mock interviews, resume clinics and personality development modules run alongside the academic timetable. This is why we have consistently placed 10,000+ students across brands like Hero MotoCorp, L&T, HCL, Amazon, Fortis, TCS, TVS and many more.",
        "But numbers alone don't define us. What defines us is the fact that our alumni consistently return to our campus — as recruiters, guest speakers, mentors and donors. That reverse loyalty is the highest compliment any institution can earn, and we treasure it deeply.",
        "To every prospective student and parent reading this: come, see our campus, meet our faculty, talk to our students, and make an informed choice. If you decide to trust us with your future, we promise to work every single day to deserve that trust.",
      ]}
      signOff="With warm regards,"
    />
  </PageLayout>
);

export default ManagingDirector;
