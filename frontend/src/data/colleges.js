/**
 * SSGI Colleges — 4 constituent colleges under Sri Sai Group of Institutes.
 * Program slugs reference /app/frontend/src/data/programs.js so college pages
 * redirect to existing program landing pages.
 */

export const colleges = [
  {
    slug: "college-of-engineering",
    name: "Sri Sai College of Engineering & Technology",
    short: "SSCET",
    tagline: "The flagship engineering college of SSGI — since 1996.",
    intro:
      "Sri Sai College of Engineering & Technology (SSCET) is the founding institution of the Sri Sai Group of Institutes. Offering AICTE-approved B.Tech and M.Tech programmes affiliated to IKGPTU, SSCET has trained thousands of engineers who are placed at leading MNCs, PSUs and research institutions worldwide.",
    principal: {
      name: "Dr. Vipin Kumar Gupta",
      role: "Director-Principal",
      linkTo: "/about/director-principal",
    },
    approvals: ["AICTE, New Delhi", "IKGPTU Affiliation", "IBM CoE Partnership", "Pearson VUE Testing Centre"],
    stats: [
      { label: "Programmes", value: "10+" },
      { label: "B.Tech Seats", value: "360" },
      { label: "Faculty (PhD)", value: "40+" },
      { label: "Alumni",     value: "15,000+" },
    ],
    programSlugs: [
      "btech-cse", "btech-ece", "btech-mech", "btech-civil", "btech-electrical",
      "mtech-cse", "mtech-ece", "mtech-mech", "mtech-civil-structural", "mtech-ee-power",
    ],
  },
  {
    slug: "college-of-pharmacy",
    name: "Sri Sai College of Pharmacy",
    short: "SSCP",
    tagline: "PCI-approved pharmacy programmes with industry-grade labs.",
    intro:
      "Sri Sai College of Pharmacy is one of the most respected pharmacy colleges in North India. Fully approved by the Pharmacy Council of India (PCI), we offer Diploma, Bachelor and Master level programmes — all backed by modern laboratories, faculty-led GPAT / NIPER coaching and strong industry partnerships.",
    principal: {
      name: "Dr. Rajesh Gupta",
      role: "Principal",
    },
    approvals: ["Pharmacy Council of India (PCI)", "IKGPTU / PSBTE Affiliation"],
    stats: [
      { label: "Programmes",       value: "3" },
      { label: "Total Seats",      value: "190" },
      { label: "PCI Approved",     value: "Yes" },
      { label: "Placement",        value: "89%" },
    ],
    programSlugs: ["d-pharma", "b-pharma", "m-pharma"],
  },
  {
    slug: "college-of-education",
    name: "Sri Sai College of Education",
    short: "SSCE",
    tagline: "NCTE-approved teacher-education programmes for future educators.",
    intro:
      "Sri Sai College of Education prepares the next generation of school teachers, educational leaders and researchers. All programmes are approved by the National Council for Teacher Education (NCTE) with a strong focus on modern pedagogy, ICT integration and practical school internships.",
    principal: {
      name: "Dr. Navdeep Sanwal",
      role: "Principal",
    },
    approvals: ["NCTE (National Council for Teacher Education)", "Affiliating University Recognition"],
    stats: [
      { label: "Programmes",       value: "3" },
      { label: "Total Seats",      value: "185" },
      { label: "NCTE Approved",    value: "Yes" },
      { label: "Placement",        value: "90%" },
    ],
    programSlugs: ["d-el-ed", "b-ed", "m-ed"],
  },
  {
    slug: "iqbal-college",
    name: "Sri Sai Iqbal College of Management & Information Technology",
    short: "Iqbal College",
    tagline: "The management, IT and allied-health arm of SSGI.",
    intro:
      "Sri Sai Iqbal College of Management & Information Technology is home to SSGI's business, computing, hospitality and allied-health programmes. From BBA and BCA to Radiology, OTT and MLS — this college trains graduates for the fastest-growing service and healthcare sectors in India.",
    principal: {
      name: "Dr. Dinesh Mahajan",
      role: "Principal",
    },
    approvals: ["IKGPTU Affiliation", "Panjab University Affiliation", "AICTE Approval (BHMCT)"],
    stats: [
      { label: "Programmes",  value: "11" },
      { label: "Total Seats", value: "700+" },
      { label: "Placements",  value: "93%" },
      { label: "Alumni",      value: "18,000+" },
    ],
    programSlugs: [
      "bba", "bcom-prof", "bca", "bsc-it", "bhmct",
      "bsc-radiology", "bsc-ott", "bmls",
      "msc-it", "msc-physics", "msc-chemistry",
    ],
  },
];

export const getCollege = (slug) => colleges.find((c) => c.slug === slug);
