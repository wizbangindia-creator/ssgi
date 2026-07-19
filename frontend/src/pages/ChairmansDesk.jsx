import React from "react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import LeaderMessage from "@/components/site/LeaderMessage";

const ChairmansDesk = () => (
  <PageLayout>
    <PageHero
      eyebrow="Leadership"
      title="From the Chairman's Desk"
      subtitle="A note from the Chairman on SSGI's continuing pursuit of excellence."
      breadcrumb={[{ label: "About", to: "/about" }, { label: "Chairman's Desk" }]}
    />
    <LeaderMessage
      name="Er. S. K. Punj"
      designation="Chairman — Sri Sai Group of Institutes"
      eyebrow="Chairman's Message"
      headline="Great institutions are built brick by brick — with vision, values and unwavering commitment."
      photo="https://customer-assets-agu9un31.emergentagent.net/job_deploy-test-85/artifacts/5wdeh392_sk-punj.webp"
      quickFacts={[
        "Leads long-term strategy and governance at SSGI",
        "Champion of industry-integrated curriculum design",
        "Committed to research, innovation and inclusive learning",
        "Believes in placement outcomes as the true measure of quality",
      ]}
      paragraphs={[
        "It gives me immense pride to lead an institution that has become a landmark in the higher-education landscape of North India. Sri Sai Group of Institutes today is not just a college campus — it is a launchpad for the aspirations of thousands of young men and women who choose to trust us with their futures every year.",
        "We live in an era of unprecedented technological change. Artificial Intelligence, Cyber Security, Cloud Computing, Data Science, Advanced Manufacturing, Biotechnology and Sustainable Engineering are redefining every industry. At SSGI, our responsibility is to ensure that the next generation of engineers, managers, pharmacists, teachers and technologists is not just prepared for today — but ready to lead tomorrow.",
        "To achieve this, we have consciously invested in three pillars — world-class faculty, deep industry collaboration and a student-first learning environment. Our tie-ups with IBM, Pearson VUE and 200+ recruiters ensure that classroom learning is always aligned with real-world practice. Our labs, workshops and libraries are continuously modernised. And our student-support systems — mentoring, counselling, placement training, sports, clubs and cultural activities — make sure every learner grows holistically.",
        "Equally important to us is the value system we build. We want SSGI graduates to be ethical, empathetic and socially responsible — professionals who not only earn well but also contribute meaningfully to the society they come from.",
        "To every parent reading this: thank you for placing your trust in SSGI. To every student: I invite you to give us your best years, and I promise ours in return. Together, we will script stories that go far beyond a college campus.",
      ]}
      signOff="With warm regards,"
    />
  </PageLayout>
);

export default ChairmansDesk;
