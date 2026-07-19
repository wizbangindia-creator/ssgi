import React from "react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import LeaderMessage from "@/components/site/LeaderMessage";

const VicePresident = () => (
  <PageLayout>
    <PageHero
      eyebrow="Leadership"
      title="Vice President's Message"
      subtitle="Nurturing a campus culture where learning, mentorship and student wellness thrive."
      breadcrumb={[{ label: "About", to: "/about" }, { label: "Vice President" }]}
    />
    <LeaderMessage
      name="Mrs. Riya Trehan"
      designation="Vice President — Sri Sai Group of Institutes"
      eyebrow="VP's Address"
      headline="A great campus is not built by buildings, but by the quality of relationships within it."
      photo="https://customer-assets-agu9un31.emergentagent.net/job_deploy-test-85/artifacts/ky5rs190_riya-punj.webp"
      quickFacts={[
        "Leads academic governance, faculty development and student affairs",
        "Focus on outcome-based learning and curriculum quality",
        "Champion of student mentorship and pastoral care",
        "Committed to a caring, structured and ambitious campus experience",
      ]}
      paragraphs={[
        "A university campus is one of the most powerful spaces a young person will ever walk into. It is where lifelong friendships are formed, where identities take shape, and where dreams for the next fifty years quietly begin. At Sri Sai Group of Institutes, we treat this responsibility with deep seriousness.",
        "As Vice President, my focus is on the everyday academic and student experience at SSGI — the quality of teaching in every classroom, the effectiveness of every lab, the depth of every mentorship conversation, and the warmth of every hostel and cafeteria. Great institutions live or die in these small moments, and we ensure that each one of them adds up to something exceptional.",
        "Our faculty is the heart of this ecosystem. Every teacher at SSGI is not only well-qualified but also continuously developed through faculty-training programmes, industry immersions, research encouragement and modern pedagogy workshops. Outcome-based teaching, project-based learning and continuous assessment are the norm rather than the exception.",
        "Alongside academics, we invest heavily in student support — dedicated mentors, an active grievance-redressal cell, anti-ragging measures, health services, counselling support, sports facilities and vibrant clubs & societies. Because we know that a happy, well-supported student is a great student.",
        "To parents: I want you to know that when you send your child to SSGI, you are sending them into a caring, structured and ambitious environment. To students: come with an open mind and a hungry heart — and we will do everything we can to help you write a story you will always be proud of.",
      ]}
      signOff="With warm regards,"
    />
  </PageLayout>
);

export default VicePresident;
