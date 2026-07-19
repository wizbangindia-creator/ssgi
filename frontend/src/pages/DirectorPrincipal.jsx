import React from "react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import LeaderMessage from "@/components/site/LeaderMessage";

const DirectorPrincipal = () => (
  <PageLayout>
    <PageHero
      eyebrow="Leadership"
      title="Director-Principal's Desk"
      subtitle="Leading Sri Sai College of Engineering and Technology with academic rigour and student-first values."
      breadcrumb={[{ label: "About", to: "/about" }, { label: "Director-Principal" }]}
    />
    <LeaderMessage
      name="Dr. Vipin Kumar Gupta"
      designation="Director-Principal — Sri Sai College of Engineering and Technology"
      eyebrow="Director-Principal's Message"
      headline="An engineering campus must teach students to think, build and lead — not just to pass exams."
      photo="https://customer-assets-agu9un31.emergentagent.net/job_deploy-test-85/artifacts/hxz6q8t4_dr%20vipin%20kumar%20gupta.jpeg"
      quickFacts={[
        "Heads academic administration at Sri Sai College of Engineering & Technology",
        "Focus on outcome-based education and NBA/NAAC compliance",
        "Champion of research, innovation and student projects",
        "Drives faculty development, industry linkages and placements",
      ]}
      paragraphs={[
        "It is my privilege to lead Sri Sai College of Engineering and Technology — a college that has, over the years, quietly built a reputation for turning small-town aspirations into big-league careers. Every academic year, thousands of young students choose us with tremendous hopes; my job, and the job of my faculty, is to make sure those hopes turn into real, measurable outcomes.",
        "Engineering education today is being redefined by AI, data, sustainability and rapid globalisation. Our curriculum, laboratories and pedagogy are constantly refreshed to match this pace. Alongside the core disciplines — Computer Science, Electronics, Mechanical, Civil and Electrical Engineering — we place strong emphasis on emerging areas like AI/ML, Cyber Security, Cloud, IoT and Data Science, supported by IBM- and Pearson-integrated learning tracks.",
        "But we know that competence alone is not enough. Employers, and society at large, are looking for young engineers who are curious, ethical, collaborative and confident. That is why our campus is deliberately designed as a full learning environment — clubs, technical fests, sports meets, cultural nights, entrepreneurship cells, community outreach and structured mentoring — where students grow as complete human beings.",
        "To our students: use every single facility, faculty member and opportunity that this campus offers. Ask questions freely, take on projects, participate in competitions, present papers, intern with industry, teach juniors — and you will walk out of here not just with a degree, but with a story you will be proud to tell for the rest of your life.",
        "To parents: thank you for the trust you place in us. It is a trust we honour, every single day, with rigour, empathy and hard work.",
      ]}
      signOff="With warm regards,"
    />
  </PageLayout>
);

export default DirectorPrincipal;
