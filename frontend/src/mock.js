// Sri Sai Group of Institutes - Mock data (CUCHD-inspired layout)

export const brand = {
  logo: "https://customer-assets.emergentagent.com/job_srisai-nextgen-web/artifacts/ucb21l34_images.jpeg",
  name: "Sri Sai Group of Institutes",
  tagline: "Transforming Dreams into Reality",
  since: "1996",
};

export const contactInfo = {
  phone: "+91-8427184271",
  phoneShort: "84271-84271",
  helpline: "84271-84271",
  email: "Info@srisaigroup.in",
  address: "Dalhousie Road, Badhani, Pathankot (145001), Punjab",
  whatsapp: "https://chat.whatsapp.com/FwmDzQF2a7KItTjA5vJWgM",
};

export const socialLinks = [
  { platform: "facebook",  label: "Facebook",  href: "https://www.facebook.com/ssgipathankot/",   hoverColor: "hover:bg-blue-600" },
  { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/ssgipathankot",    hoverColor: "hover:bg-pink-600" },
  { platform: "linkedin",  label: "LinkedIn",  href: "https://www.linkedin.com/school/srisaigroup",hoverColor: "hover:bg-blue-700" },
  { platform: "youtube",   label: "YouTube",   href: "https://www.youtube.com/@ssgipathankot",     hoverColor: "hover:bg-red-600" },
];

export const announcements = [
  { text: "Admissions 2026 Open — Apply Now for SSGI Pathankot Campus", cta: "Apply Now", href: "#apply" },
  { text: "Register Now for Joint Campus Placement Programme", cta: "Register", href: "#placements" },
  { text: "SSGI Scholarship up to 100% — Merit-based & Need-based", cta: "Know More", href: "#scholarship" },
  { text: "AI & ML with IBM — Industry-integrated B.Tech CSE Programme", cta: "Explore", href: "#ibm" },
];

export const topUtilityLinks = [
  { label: "WhatsApp", icon: "whatsapp" },
  { label: "Call Us", icon: "call" },
  { label: "360° Tour", icon: "tour" },
];

export const primaryNav = [
  "Campuses",
  "International",
  "Library",
  "Student Services",
  "Career",
  "Blogs",
  "Podcast",
  "Contact Us",
];

export const megaNav = [
  {
    label: "About",
    feature: {
      image: "https://customer-assets-agu9un31.emergentagent.net/job_deploy-test-85/artifacts/sucxmlx2_ssgi.jpeg",
      eyebrow: "Since 1996",
      title: "A legacy of excellence in North India",
      copy: "Meet the leadership, vision and values that built Sri Sai Group of Institutes over 25+ years.",
      cta: { label: "About SSGI", to: "/about" },
    },
    columns: [
      {
        title: "About SSGI",
        items: [
          { label: "About Us", to: "/about" },
          { label: "Founder's Message", to: "/about/founders-message" },
          { label: "Chairman's Desk", to: "/about/chairmans-desk" },
          { label: "Managing Director", to: "/about/managing-director" },
          { label: "CMD Desk", to: "/about/cmd-desk" },
          { label: "Vice President", to: "/about/vice-president" },
          { label: "Director-Principal", to: "/about/director-principal" },
          { label: "Vision & Mission", to: "/about/vision-mission" },
        ],
      },
      {
        title: "Recognitions",
        items: ["AICTE Approvals", "IKGPTU EOAs", "PCI Approvals", "PSBTE Approvals", "NIRF Data", "Mandatory Disclosure"],
      },
    ],
  },
  {
    label: "Programs",
    feature: {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=60",
      eyebrow: "50+ Programmes",
      title: "Find your calling. Build your future.",
      copy: "From B.Tech and MBA to Pharmacy, Education, Agriculture and Polytechnic — the full SSGI catalogue.",
      cta: { label: "Explore All Programs", to: "/programs" },
    },
    columns: [
      { title: "Engineering", items: [
        { label: "B.Tech CSE", to: "/programs/btech-cse" },
        { label: "B.Tech ECE", to: "/programs/btech-ece" },
        { label: "B.Tech Mechanical", to: "/programs/btech-mech" },
        { label: "B.Tech Civil", to: "/programs/btech-civil" },
        { label: "B.Tech Electrical", to: "/programs/btech-electrical" },
        { label: "M.Tech Programs", to: "/programs?filter=Engineering" },
      ] },
      { title: "Management & IT", items: [
        { label: "MBA", to: "/programs/mba" },
        { label: "BBA", to: "/programs/bba" },
        { label: "BCA", to: "/programs/bca" },
        { label: "MCA", to: "/programs/mca" },
        { label: "B.Sc IT", to: "/programs/bsc-it" },
        { label: "M.Sc IT", to: "/programs/msc-it" },
      ] },
      { title: "Pharmacy & Sciences", items: [
        { label: "B.Pharma", to: "/programs/b-pharma" },
        { label: "D.Pharma", to: "/programs/d-pharma" },
        { label: "M.Pharma", to: "/programs/m-pharma" },
        { label: "B.Pharma (Practice)", to: "/programs/b-pharma-practice" },
        { label: "B.Sc Agriculture", to: "/programs/bsc-agri" },
        { label: "M.Sc Physics/Chem/Math", to: "/programs" },
      ] },
      { title: "Education & Diploma", items: [
        { label: "B.Ed", to: "/programs/b-ed" },
        { label: "M.Ed", to: "/programs/m-ed" },
        { label: "D.El.Ed", to: "/programs/d-el-ed" },
        { label: "Polytechnic Diplomas", to: "/programs" },
        { label: "BHMCT", to: "/programs/bhmct" },
        { label: "B.Com (Prof)", to: "/programs/bcom-prof" },
      ] },
    ],
  },
  {
    label: "Academics",
    feature: {
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=700&q=60",
      eyebrow: "Learn & Grow",
      title: "Outcome-based, industry-aligned academics",
      copy: "IBM CoE, Pearson VUE, NPTEL, Virtual Labs — everything you need to master your discipline.",
      cta: { label: "See Academic Support", to: "/programs" },
    },
    columns: [
      { title: "Departments", items: ["Sri Sai College of Engg & Tech", "Sri Sai Iqbal College", "Sri Sai College of Pharmacy", "Sri Sai Polytechnic", "Sri Sai College of Education", "Sri Sai Degree College"] },
      { title: "Academic Support", items: ["E-Content", "NPTEL", "Spoken Tutorial", "Virtual Labs", "Pearson VUE", "Career Udaan"] },
    ],
  },
  {
    label: "Admissions",
    feature: {
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=700&q=60",
      eyebrow: "Admissions 2026 Open",
      title: "Apply in under 60 seconds",
      copy: "Unlock scholarships up to 100%, flexible EMI fees and placement assurance from Year 1.",
      cta: { label: "Apply Now", to: "/apply" },
    },
    columns: [
      { title: "Apply", items: ["Admission 2026", "Eligibility Criteria", "Fee Structure", "SSGI Scholarship", "Migration Rules", "Pay Fees"] },
      { title: "Support", items: ["Education Loan", "Hostel Facilities", "Transportation", "Prospectus Download"] },
    ],
  },
  {
    label: "Campus Life",
    feature: {
      image: "https://customer-assets-agu9un31.emergentagent.net/job_deploy-test-85/artifacts/sucxmlx2_ssgi.jpeg",
      eyebrow: "8,000+ students",
      title: "A community you'll always call home",
      copy: "Hostels, sports, clubs, cultural fests and student support — every corner of campus life at SSGI.",
      cta: { label: "Explore Campus Life", to: "/campus-life" },
    },
    columns: [
      { title: "Facilities", items: [
        { label: "Residential", to: "/campus-life/residential" },
        { label: "Transport", to: "/campus-life/transport" },
        { label: "Cafeteria", to: "/campus-life/cafeteria" },
        { label: "Sports", to: "/campus-life/sports" },
        { label: "Library", to: "/campus-life/library" },
        { label: "Labs & Workshops", to: "/campus-life/labs" },
      ] },
      { title: "Student Life", items: [
        { label: "Campus Events", to: "/campus-life/events" },
        { label: "Clubs & Societies", to: "/campus-life/clubs" },
        { label: "Cultural Fests", to: "/campus-life/cultural-fests" },
        { label: "Student Organizations", to: "/campus-life/student-organizations" },
        { label: "Anti-Ragging", to: "/anti-ragging" },
        { label: "Grievance Cell", to: "/campus-life/grievance-cell" },
      ] },
    ],
  },
  {
    label: "Placements",
    feature: {
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=60",
      eyebrow: "Career Udaan · PAP",
      title: "From classroom to top MNCs",
      copy: "200+ recruiters, ₹24.5 LPA highest, 92%+ placement rate — Career Udaan runs from Year 1.",
      cta: { label: "Placement Stats", to: "/programs" },
    },
    columns: [
      { title: "Placement Cell", items: ["Placement Statistics", "Placement News", "Success Stories", "Placement Drives", "Industry Visits", "Career Udaan (PAP)"] },
      { title: "Recruiters", items: ["Our Recruiters", "MOU with Pearson VUE", "Corporate Tie-ups", "Apply for Drives"] },
    ],
  },
  {
    label: "Research",
    feature: {
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=700&q=60",
      eyebrow: "Innovate at SSGI",
      title: "Patents, publications & partnerships",
      copy: "An active R&D cell driving industry-relevant research and student-led innovation.",
      cta: { label: "Explore Research", to: "/programs" },
    },
    columns: [
      { title: "Research @ SSGI", items: ["Patents", "Publications", "Research Centres", "R&D Cell", "Industry Collaborations"] },
    ],
  },
];

export const hero = {
  heading1: "Best Educational Group",
  heading2: "in Punjab (India)",
  description:
    "Sri Sai Group of Institutes, Pathankot integrates industry-aligned technical education, groundbreaking research and holistic learning to shape professionals driving innovation and social impact since 1996.",
  cta: "Apply Today",
  backgroundImage: "https://www.srisaigroup.in/images/hslider/IMG_0208.jpg",
};

export const heroPlacements = [
  {
    name: "Sakshi Gupta",
    role: "MCA Alumna",
    company: "Placed at Leading MNC",
    tag: "National Package",
    package: "₹24.5 LPA",
    image: "https://www.srisaigroup.in/images/sakshi.jpg",
  },
  {
    name: "Gittin Mahajan",
    role: "B.Tech Civil Engg",
    company: "Placed at L&T",
    tag: "Highest Package (CE)",
    package: "₹18.0 LPA",
    image: "https://www.srisaigroup.in/images/gitin1.jpg",
  },
  {
    name: "Yogesh Dogra",
    role: "B.Tech Mechanical",
    company: "Placed at Hero MotoCorp",
    tag: "National Package",
    package: "₹12.5 LPA",
    image: "https://www.srisaigroup.in/images/yogesh.jpg",
  },
  {
    name: "Sibani Zena",
    role: "B.Sc IT",
    company: "Placed at TCS",
    tag: "National Package",
    package: "₹10.8 LPA",
    image: "https://www.srisaigroup.in/images/sibani.jpg",
  },
];

export const legacyStats = [
  { value: 50, suffix: "+", label: "PROGRAMS", sub: "Industry-Oriented Academic Programs" },
  { value: 260, suffix: "+", label: "FACULTY", sub: "Qualified Teaching Staff" },
  { value: 25, suffix: "+", label: "YEARS", sub: "Of Excellence Since 1996" },
  { value: 40346, suffix: "+", label: "GRADUATES", sub: "Successful Alumni" },
  { value: 10999, suffix: "+", label: "PLACEMENTS", sub: "Offers to SSGI Students" },
];

export const newsCards = [
  {
    tag: "IBM Partnership",
    subtag: "Industry Tie-up",
    title: "SSGI Launches AI & ML Programme with IBM for Next-Gen Engineers",
    excerpt:
      "Sri Sai Group of Institutes partners with IBM to launch an industry-integrated B.Tech CSE programme in AI, Machine Learning and Cloud technologies.",
    cta: "Read More",
    image: "https://www.srisaigroup.in/images/hslider/ibm31.png",
  },
  {
    tag: "Silver Jubilee",
    subtag: "Legacy",
    title: "SSGI Celebrates 25 Years of Academic Excellence with Silver Jubilee Year",
    excerpt:
      "A humble start in 1996 has grown into a mega multi-campus institution transforming thousands of student lives across Punjab & Himachal Pradesh.",
    cta: "Our Legacy",
    image: "https://www.srisaigroup.in/images/hslider/tm2.jpg",
  },
  {
    tag: "Career Udaan",
    subtag: "Placement Assurance",
    title: "B.Tech (CSE) Placement Assurance Programme - Career Udaan Launched",
    excerpt:
      "A first-of-its-kind Placement Assurance Programme for B.Tech CSE aspirants — guaranteed placement mentorship and industry certifications.",
    cta: "Programme Details",
    image: "https://www.srisaigroup.in/images/hslider/cse.jpeg",
  },
  {
    tag: "Scholarships",
    subtag: "Financial Aid",
    title: "SSGI Scholarship 2026: Up to 100% Fee Waiver for Meritorious Students",
    excerpt:
      "Merit-based and need-based scholarships to make world-class education accessible to every deserving student across India.",
    cta: "Apply for Scholarship",
    image: "https://www.srisaigroup.in/images/hslider/new4c.jpg",
  },
  {
    tag: "Placement Records",
    subtag: "Achievement",
    title: "SSGI Records Highest Ever Placement Season with 1300+ Offers",
    excerpt:
      "The 2024 placement season sees the highest number of offers across engineering, pharmacy and management streams.",
    cta: "Placement Story",
    image: "https://www.srisaigroup.in/images/hslider/new3c.jpg",
  },
  {
    tag: "Pearson VUE",
    subtag: "Certifications",
    title: "MOU with Pearson VUE Enables Global Certifications for SSGI Students",
    excerpt:
      "SSGI students can now appear for globally recognized professional certifications directly at our Pathankot testing centre.",
    cta: "View Details",
    image: "https://www.srisaigroup.in/images/hslider/new2c.jpg",
  },
];

export const rankings = [
  {
    org: "AICTE",
    title: "AICTE Approved",
    detail: "All engineering and management programmes duly approved by All India Council for Technical Education.",
    highlight: "Approved",
    color: "bg-red-50 text-red-800",
  },
  {
    org: "PCI",
    title: "PCI Approved Pharmacy",
    detail: "D.Pharma, B.Pharma and M.Pharma programmes approved by Pharmacy Council of India.",
    highlight: "Approved",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    org: "IKGPTU",
    title: "Affiliated to IKGPTU",
    detail: "Affiliated to I.K. Gujral Punjab Technical University, Jalandhar.",
    highlight: "Affiliated",
    color: "bg-blue-100 text-blue-700",
  },
  {
    org: "NIRF",
    title: "NIRF Data Submitted",
    detail: "Consistently participating in National Institutional Ranking Framework across engineering & pharmacy.",
    highlight: "Listed",
    color: "bg-amber-100 text-amber-700",
  },
  {
    org: "PSBTE",
    title: "PSBTE Recognized",
    detail: "Polytechnic diploma programmes recognized by Punjab State Board of Technical Education.",
    highlight: "Recognized",
    color: "bg-rose-100 text-rose-700",
  },
  {
    org: "IBM",
    title: "IBM Industry Partner",
    detail: "Industry-integrated AI, ML and Cloud programmes delivered in partnership with IBM.",
    highlight: "Partner",
    color: "bg-slate-100 text-slate-700",
  },
];

export const placementDrives = [
  { company: "Hero MotoCorp", branches: "B.Tech Mechanical / Automobile / Mechatronics", batch: "2026", status: "Applications Open" },
  { company: "L&T Construction", branches: "B.Tech Civil / Diploma Civil", batch: "2026", status: "Registrations Open" },
  { company: "Amazon Fulfillment", branches: "BBA / MBA / B.Com (Prof)", batch: "2026", status: "Applications Open" },
  { company: "HCL Technologies", branches: "B.Tech CSE / IT / BCA / MCA", batch: "2026", status: "Drive Scheduled" },
  { company: "Fortis Healthcare", branches: "B.Pharma / D.Pharma / M.Pharma", batch: "2026", status: "Shortlisting" },
  { company: "TVS Motor Company", branches: "B.Tech Mechanical / Electrical", batch: "2026", status: "Applications Open" },
];

export const topPlacements = [
  { name: "Sakshi Gupta", role: "MCA", company: "Leading MNC", pkg: "₹24.5 LPA", image: "https://www.srisaigroup.in/images/sakshi.jpg" },
  { name: "Gittin Mahajan", role: "B.Tech Civil", company: "L&T", pkg: "₹18.0 LPA", image: "https://www.srisaigroup.in/images/gitin1.jpg" },
  { name: "Preeti", role: "MCA", company: "TCS", pkg: "₹12.4 LPA", image: "https://www.srisaigroup.in/images/preeti.jpg" },
  { name: "Yogesh Dogra", role: "B.Tech ME", company: "Hero MotoCorp", pkg: "₹12.5 LPA", image: "https://www.srisaigroup.in/images/yogesh.jpg" },
  { name: "Monika Suri", role: "MCA", company: "HCL Tech", pkg: "₹11.6 LPA", image: "https://www.srisaigroup.in/images/monika.jpg" },
  { name: "Sibani Zena", role: "B.Sc IT", company: "Wipro", pkg: "₹10.8 LPA", image: "https://www.srisaigroup.in/images/sibani.jpg" },
];

export const recruiters = [
  { name: "TCS",         logo: "https://www.google.com/s2/favicons?sz=128&domain=tcs.com" },
  { name: "Infosys",     logo: "https://www.google.com/s2/favicons?sz=128&domain=infosys.com" },
  { name: "Wipro",       logo: "https://www.google.com/s2/favicons?sz=128&domain=wipro.com" },
  { name: "HCL",         logo: "https://www.google.com/s2/favicons?sz=128&domain=hcltech.com" },
  { name: "Cognizant",   logo: "https://www.google.com/s2/favicons?sz=128&domain=cognizant.com" },
  { name: "Accenture",   logo: "https://www.google.com/s2/favicons?sz=128&domain=accenture.com" },
  { name: "Capgemini",   logo: "https://www.google.com/s2/favicons?sz=128&domain=capgemini.com" },
  { name: "IBM",         logo: "https://www.google.com/s2/favicons?sz=128&domain=ibm.com" },
  { name: "Amazon",      logo: "https://www.google.com/s2/favicons?sz=128&domain=amazon.com" },
  { name: "Deloitte",    logo: "https://www.google.com/s2/favicons?sz=128&domain=deloitte.com" },
  { name: "L&T",         logo: "https://www.google.com/s2/favicons?sz=128&domain=larsentoubro.com" },
  { name: "Hero MotoCorp", logo: "https://www.google.com/s2/favicons?sz=128&domain=heromotocorp.com" },
  { name: "TVS Motor",   logo: "https://www.google.com/s2/favicons?sz=128&domain=tvsmotor.com" },
  { name: "Tata Steel",  logo: "https://www.google.com/s2/favicons?sz=128&domain=tatasteel.com" },
  { name: "Mahindra",    logo: "https://www.google.com/s2/favicons?sz=128&domain=mahindra.com" },
  { name: "Bosch",       logo: "https://www.google.com/s2/favicons?sz=128&domain=bosch.com" },
  { name: "Ashok Leyland", logo: "https://www.google.com/s2/favicons?sz=128&domain=ashokleyland.com" },
  { name: "HDFC Bank",   logo: "https://www.google.com/s2/favicons?sz=128&domain=hdfcbank.com" },
  { name: "ICICI Bank",  logo: "https://www.google.com/s2/favicons?sz=128&domain=icicibank.com" },
  { name: "Axis Bank",   logo: "https://www.google.com/s2/favicons?sz=128&domain=axisbank.com" },
  { name: "Kotak Mahindra", logo: "https://www.google.com/s2/favicons?sz=128&domain=kotak.com" },
  { name: "Nestlé",      logo: "https://www.google.com/s2/favicons?sz=128&domain=nestle.com" },
  { name: "Reliance",    logo: "https://www.google.com/s2/favicons?sz=128&domain=ril.com" },
  { name: "Bajaj",       logo: "https://www.google.com/s2/favicons?sz=128&domain=bajajauto.com" },
  { name: "Paytm",       logo: "https://www.google.com/s2/favicons?sz=128&domain=paytm.com" },
  { name: "Cipla",       logo: "https://www.google.com/s2/favicons?sz=128&domain=cipla.com" },
  { name: "Sun Pharma",  logo: "https://www.google.com/s2/favicons?sz=128&domain=sunpharma.com" },
  { name: "Dr. Reddy's", logo: "https://www.google.com/s2/favicons?sz=128&domain=drreddys.com" },
  { name: "Lupin",       logo: "https://www.google.com/s2/favicons?sz=128&domain=lupin.com" },
  { name: "Zydus Cadila",logo: "https://www.google.com/s2/favicons?sz=128&domain=zyduscadila.com" },
  { name: "Fortis",      logo: "https://www.google.com/s2/favicons?sz=128&domain=fortishealthcare.com" },
  { name: "Taj Hotels",  logo: "https://www.google.com/s2/favicons?sz=128&domain=tajhotels.com" },
  { name: "Marriott",    logo: "https://www.google.com/s2/favicons?sz=128&domain=marriott.com" },
  { name: "Radisson",    logo: "https://www.google.com/s2/favicons?sz=128&domain=radissonhotels.com" },
];

export const globalExperience = [
  {
    title: "Multi-Campus Learning",
    detail: "Modern, well-equipped campus with state-of-the-art academic blocks, hostels, sports and student amenities at Badhani, Pathankot.",
    image: "https://www.srisaigroup.in/images/hslider/IMG_0208.jpg",
  },
  {
    title: "Industry Collaborations",
    detail: "Strategic partnerships with IBM, Pearson VUE and 200+ recruiters for hands-on industry exposure.",
    image: "https://www.srisaigroup.in/images/hslider/ibm31.png",
  },
  {
    title: "Career Udaan (PAP)",
    detail: "Placement Assurance Programme with dedicated mentorship for B.Tech CSE aspirants.",
    image: "https://www.srisaigroup.in/images/hslider/cse.jpeg",
  },
  {
    title: "Global Certifications",
    detail: "Access globally recognized certifications through our on-campus Pearson VUE testing centre.",
    image: "https://www.srisaigroup.in/images/hslider/new4c.jpg",
  },
  {
    title: "Diverse Peer Network",
    detail: "Learn alongside students from across Punjab, J&K, HP, Rajasthan, Bihar and North East India.",
    image: "https://www.srisaigroup.in/images/hslider/new3c.jpg",
  },
  {
    title: "Research & Patents",
    detail: "Active patent filings and industry-focused research across engineering and pharmacy streams.",
    image: "https://www.srisaigroup.in/images/hslider/new2c.jpg",
  },
];

export const whyChoose = [
  {
    title: "25+ Years of Trusted Legacy",
    detail: "Since 1996, SSGI has been a name synonymous with quality technical education across North India, having transformed the careers of 40,000+ alumni.",
  },
  {
    title: "Industry-Integrated Curriculum",
    detail: "Industry-embedded programmes with IBM, Pearson VUE and leading MNCs — including AI/ML, Data Science, Cloud & Cyber Security specialisations.",
  },
  {
    title: "Placement Assurance Programmes",
    detail: "Dedicated Career Udaan (PAP) with structured mentorship, aptitude training, mock interviews and guaranteed placement opportunities.",
  },
  {
    title: "Multi-Disciplinary Learning",
    detail: "Choose from 50+ programmes across Engineering, Pharmacy, Management, IT, Education, Agriculture, Hotel Management and Applied Sciences.",
  },
  {
    title: "Strong Recruiter Network",
    detail: "200+ recruiters including L&T, Hero MotoCorp, HCL, TCS, Wipro, Amazon, Fortis, TVS and many more visit campus each season.",
  },
  {
    title: "World-Class Infrastructure",
    detail: "State-of-the-art labs, workshops, digital library, hostels, sports complex and a vibrant campus life across three mega campuses.",
  },
  {
    title: "Scholarships & Loan Assistance",
    detail: "Merit and need-based scholarships up to 100%, plus dedicated education loan assistance for aspiring students.",
  },
  {
    title: "Alumni Excelling Globally",
    detail: "SSGI alumni are placed across leading MNCs and government organisations in India, Europe, Middle East, USA and Australia.",
  },
];

export const testimonials = [
  {
    name: "Sakshi Gupta",
    course: "MCA",
    image: "https://www.srisaigroup.in/images/sakshi.jpg",
    text: "SSCET provided me a platform to make my standing in the corporate world. A world-class campus with every amenity needed for holistic development. I'm thankful to the entire SSGI family.",
  },
  {
    name: "Preeti",
    course: "MCA",
    image: "https://www.srisaigroup.in/images/preeti.jpg",
    text: "Three years at SSCET were an unforgettable period. The faculty is professional in teaching and equally caring towards students. Proud to be an alumnus of this prestigious group.",
  },
  {
    name: "Gittin Mahajan",
    course: "B.Tech Civil",
    image: "https://www.srisaigroup.in/images/gitin1.jpg",
    text: "SSGI is a progressive, student-centric group that imbibes experiential and lifelong learning. Cutting-edge research meets state-of-the-art education — I'm proud to be part of it.",
  },
  {
    name: "Monika Suri",
    course: "MCA",
    image: "https://www.srisaigroup.in/images/monika.jpg",
    text: "When I first entered SSCET I was anxious about my future. So many doors opened for personal and academic growth that I became confident about my career.",
  },
  {
    name: "Yogesh Dogra",
    course: "B.Tech ME",
    image: "https://www.srisaigroup.in/images/yogesh.jpg",
    text: "At Sri Sai Badhani campus I met students from diverse cultures, joined student clubs and explored my co-curricular skills alongside a rigorous engineering curriculum.",
  },
  {
    name: "Sibani Zena",
    course: "B.Sc IT",
    image: "https://www.srisaigroup.in/images/sibani.jpg",
    text: "Thanks to the SSGI management and placement cell, I got to appear in multiple placement drives and land a great offer. I'm indebted to the entire SSGI family.",
  },
];

export const research = [
  { value: 200, suffix: "+", label: "Publications", sub: "In National & International Journals" },
  { value: 45, suffix: "+", label: "Patents", sub: "Filed by SSGI Faculty & Students" },
  { value: 12, suffix: "+", label: "Research Groups", sub: "Across Engineering & Pharmacy" },
  { value: 6, suffix: "+", label: "Industry Labs", sub: "Centres of Excellence" },
];

export const researchLabs = [
  {
    title: "IBM Centre of Excellence",
    detail: "An industry-integrated lab for AI, Machine Learning, Cloud & Cyber Security — delivered in partnership with IBM.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Pharmacy Research Lab",
    detail: "Advanced instrumentation for pharmaceutical analysis, formulation, medicinal chemistry and pharmacology research.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Mechanical Workshop",
    detail: "State-of-the-art machining, welding, CNC, fluid mechanics and thermal engineering labs for hands-on learning.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Civil Engineering Labs",
    detail: "Soil mechanics, concrete technology, surveying, structural engineering and geotechnical research facilities.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Pearson VUE Testing Centre",
    detail: "On-campus authorized testing centre for globally recognized professional & academic certifications.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Electronics & Comm. Lab",
    detail: "Analog, digital, VLSI, embedded systems, communication and signal-processing laboratories.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=70",
  },
];

export const events = [
  { date: "Feb 12", tag: "Placements", title: "L&T Construction Placement Drive for B.Tech Civil & Diploma students" },
  { date: "Feb 18", tag: "Fest", title: "Annual Techno-Cultural Fest 'Sai-Utsav 2026' — 3 Days of Tech, Culture & Sports" },
  { date: "Feb 22", tag: "Guest Lecture", title: "IBM Expert Session on Generative AI, Agentic Systems & Career Roadmap" },
  { date: "Mar 05", tag: "Workshop", title: "Two-Day National Workshop on Advanced Manufacturing & Industry 4.0" },
  { date: "Mar 12", tag: "Sports", title: "Annual Inter-Departmental Sports Meet at Badhani Campus" },
  { date: "Mar 20", tag: "Convocation", title: "25th Silver Jubilee Annual Convocation with distinguished chief guests" },
];

export const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Ladakh","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
];

export const disciplines = [
  "Engineering","Management","Computing / IT","Pharmacy","Education","Agriculture","Hotel Management","Applied Sciences","Diploma / Polytechnic",
];

export const programsByDiscipline = {
  "Engineering": ["B.Tech CSE", "B.Tech ECE", "B.Tech Mechanical", "B.Tech Civil", "B.Tech Electrical", "M.Tech CSE", "M.Tech ECE", "M.Tech Mechanical", "M.Tech Civil (Structural)", "M.Tech EE (Power)"],
  "Management": ["MBA", "BBA", "B.Com (Prof)"],
  "Computing / IT": ["BCA", "MCA", "B.Sc IT", "M.Sc IT"],
  "Pharmacy": ["D.Pharma", "B.Pharma", "B.Pharma (Practice)", "M.Pharma"],
  "Education": ["B.Ed", "M.Ed", "D.El.Ed / ETT"],
  "Agriculture": ["B.Sc Agriculture (Honours)"],
  "Hotel Management": ["BHMCT"],
  "Applied Sciences": ["M.Sc Physics", "M.Sc Chemistry", "M.Sc Mathematics"],
  "Diploma / Polytechnic": ["Diploma Civil", "Diploma Mechanical", "Diploma CSE", "Diploma ECE", "Diploma Electrical", "Diploma Automobile", "Diploma Architectural Assistantship", "Diploma Pharmacy"],
};

export const admissionDeadline = new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString();
