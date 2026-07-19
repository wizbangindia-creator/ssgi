import React from "react";
import { Helmet } from "react-helmet-async";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "Sri Sai Group of Institutes",
  alternateName: "SSGI Pathankot",
  url: "https://www.srisaigroup.in",
  logo: "https://www.srisaigroup.in/images/logo.gif",
  description:
    "Sri Sai Group of Institutes (SSGI) Pathankot — leading educational group in North India offering B.Tech, M.Tech, MBA, MCA, BCA, B.Sc, B.Pharma, D.Pharma, B.Ed, M.Ed and Diploma programmes since 1996.",
  foundingDate: "1996",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dalhousie Road, Badhani",
    addressLocality: "Pathankot",
    postalCode: "145001",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8427184271",
    contactType: "Admissions",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Punjabi"],
  },
  sameAs: [
    "https://www.facebook.com/ssgipathankot/",
    "https://www.instagram.com/ssgipathankot",
    "https://www.linkedin.com/school/srisaigroup",
    "https://www.youtube.com/@ssgipathankot",
  ],
};

const SEO = () => (
  <Helmet>
    <html lang="en" />
    <title>Sri Sai Group of Institutes Pathankot | Best Engineering, Pharmacy & MBA College in North India</title>
    <meta
      name="description"
      content="Sri Sai Group of Institutes (SSGI), Pathankot — best educational group in North India offering B.Tech, M.Tech, MBA, MCA, BCA, B.Pharma, D.Pharma, B.Ed, M.Ed and Diploma programmes. AICTE & PCI approved. Apply for Admissions 2026."
    />
    <meta
      name="keywords"
      content="Sri Sai Group, SSGI Pathankot, best engineering college Punjab, B.Tech Pathankot, MBA Pathankot, BCA Pathankot, B.Pharma Pathankot, D.Pharma, diploma Pathankot, top college North India, AICTE approved, admissions 2026"
    />
    <meta name="author" content="Sri Sai Group of Institutes" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="https://www.srisaigroup.in/" />

    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sri Sai Group of Institutes" />
    <meta
      property="og:title"
      content="Sri Sai Group of Institutes Pathankot | Best Engineering, Pharmacy & MBA College"
    />
    <meta
      property="og:description"
      content="AICTE & PCI approved | 10,000+ placements | 260+ qualified faculty | 50+ courses. Apply for Admissions 2026 at SSGI Pathankot."
    />
    <meta property="og:url" content="https://www.srisaigroup.in/" />
    <meta property="og:image" content="https://www.srisaigroup.in/images/hslider/tm2.jpg" />
    <meta property="og:locale" content="en_IN" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Sri Sai Group of Institutes Pathankot | Admissions 2026 Open"
    />
    <meta
      name="twitter:description"
      content="Best educational group in North India. B.Tech, M.Tech, MBA, MCA, BCA, B.Pharma, D.Pharma & more. Apply for Admissions 2026."
    />
    <meta name="twitter:image" content="https://www.srisaigroup.in/images/hslider/tm2.jpg" />

    {/* Theme */}
    <meta name="theme-color" content="#ea580c" />

    {/* Structured Data */}
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  </Helmet>
);

export default SEO;
