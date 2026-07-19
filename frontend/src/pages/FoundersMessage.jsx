import React from "react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import LeaderMessage from "@/components/site/LeaderMessage";

const FoundersMessage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Leadership"
      title="Founder's Message"
      subtitle="Reflections on the ideals that gave birth to Sri Sai Group of Institutes."
      breadcrumb={[{ label: "About", to: "/about" }, { label: "Founder's Message" }]}
    />
    <LeaderMessage
      name="Late Sh. Chaman Lal Punj Ji"
      designation="Founder — Sri Sai Group of Institutes"
      eyebrow="From the Founder"
      headline="Education is the noblest of all missions, and every student is a promise of tomorrow."
      quickFacts={[
        "Established SSGI at Pathankot in 1996",
        "Believed in accessible, quality technical education for all",
        "Pioneered the 3D philosophy — Determination, Dedication, Devotion",
        "Legacy of shaping 40,000+ students and counting",
      ]}
      paragraphs={[
        "When we laid the foundation stone of Sri Sai Group of Institutes in 1996, we were not merely opening a college — we were opening a door of opportunity for thousands of young dreamers of this region. Our belief was simple: geography or family income should never decide the future of a talented, hard-working student.",
        "For decades, meritorious students of Punjab, Himachal Pradesh, Jammu & Kashmir and beyond had to travel far to pursue technical and professional education. We wanted to bring that education home — with the same rigour, the same discipline and the same respect for excellence that any leading institution of the country would offer.",
        "From day one, we chose the harder path. We invested in qualified teachers, industry-grade laboratories, sports and cultural facilities and hostels that felt like home. We chose to teach values along with textbooks. We chose to build character along with careers.",
        "Today, when I see SSGI alumni excelling in leading MNCs, government services, defence, medicine, teaching, entrepreneurship and public life across India and abroad — the seed we sowed feels like a forest. Each achievement of every student is our real reward.",
        "To every student joining SSGI: this campus is not just where you study for a few years. It is where you discover who you truly are. Give it your best, and it will give you far more in return than a degree — it will give you a life you are proud of.",
        "With warm wishes and blessings,",
      ]}
      signOff="With warm regards,"
    />
  </PageLayout>
);

export default FoundersMessage;
