import React from "react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import LeaderMessage from "@/components/site/LeaderMessage";

const FoundersMessage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Leadership"
      title="About the Founder & Message"
      subtitle="Reflections on the ideals that gave birth to Sri Sai Group of Institutes."
      breadcrumb={[{ label: "About", to: "/about" }, { label: "Founder's Message" }]}
    />
    <LeaderMessage
      name="Babu Ram Iqbal Bhardwaj Ji"
      designation="Founder — Sri Sai Group of Institutes"
      eyebrow="About the Founder"
      headline="A revolutionary in Punjab's technical education — guiding SSGI like a Pole-Star."
      quickFacts={[
        "53 years of rich, fruitful experience in the field of education",
        "Originator & pioneer of technical education in Punjab (early 1990s)",
        "Established Sri Sai Group of Institutes at Pathankot in 1996",
        "Guiding force behind SSGI's philosophy and educational vision",
      ]}
      paragraphs={[
        "With a rich and fruitful experience of 53 years in the field of education, Sh. Ram Iqbal Bhardwaj Ji, the founder, has been guiding the society like a Pole-Star. He can rightly be called a 'Revolutionary' in the field of Technical Education, because he is the originator and pioneer to open flood gates of technical education in the state of Punjab in early years of nineties.",
        "Founder's Message —",
        "Educational Institutes are the real temples and monuments of the modern India. These are called upon to serve as economic engines of local and global economies and must provide highly trained and globally competitive work force for the future. All institutions under the fold of Sri Sai Group of Institutes provide wonderful environment of learning in the class rooms.",
        "Here is an opportunity to be part of the leading Sri Sai Group as a student and allow you to grow for a very bright career.",
      ]}
      signOff="With warm regards,"
    />
  </PageLayout>
);

export default FoundersMessage;
