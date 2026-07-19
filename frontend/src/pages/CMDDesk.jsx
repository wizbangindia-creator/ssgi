import React from "react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import LeaderMessage from "@/components/site/LeaderMessage";

const CMDDesk = () => (
  <PageLayout>
    <PageHero
      eyebrow="Leadership"
      title="From the CMD's Desk"
      subtitle="A vision for future-ready, socially conscious professionals."
      breadcrumb={[{ label: "About", to: "/about" }, { label: "CMD Desk" }]}
    />
    <LeaderMessage
      name="Sh. Tushar Punj"
      designation="Chief Managing Director — Sri Sai Group of Institutes"
      eyebrow="CMD's Message"
      headline="The next decade belongs to institutions that dare to reimagine education."
      quickFacts={[
        "Leads long-term vision, innovation and growth at SSGI",
        "Driving force behind IBM, Pearson VUE & industry integrations",
        "Champion of research, patents and student-led innovation",
        "Committed to building future-ready, values-driven leaders",
      ]}
      paragraphs={[
        "Education is no longer a linear four-year experience — it is a life-long journey of curiosity, upskilling and reinvention. At Sri Sai Group of Institutes, we are constantly reimagining what a great education looks like in the age of Artificial Intelligence, Sustainability and rapid global change.",
        "Our vision as we step into the next decade is clear — to make SSGI one of North India's most future-ready, industry-integrated and research-driven educational groups. This means bringing the world's best pedagogy, technology and industry practice right onto our campus, so that our students never feel a gap between what they learn and what the world expects of them.",
        "We have already taken bold steps in this direction — our B.Tech CSE with IBM programme, our on-campus Pearson VUE testing centre, our Career Udaan Placement Assurance Programme, our expanding portfolio of research patents and our thriving student clubs are all steps toward that vision. We are proudly celebrating our Silver Jubilee, and yet, our best years are still ahead.",
        "Just as importantly, we invest heavily in the human side of our students. Sports meets, technical fests, cultural nights, entrepreneurship cells, community-outreach camps, anti-ragging and mental-well-being cells — these are the spaces where our students discover themselves beyond marks and packages.",
        "To every student joining SSGI: this is your campus, your family and your launchpad. Use it fully. Ask questions, take risks, fail forward, build things, help others. Four years from now, you should be able to look back and say, “This is where I truly grew up.”",
        "That is the only outcome we work for. That is the only outcome that matters.",
      ]}
      signOff="With warm regards,"
    />
  </PageLayout>
);

export default CMDDesk;
