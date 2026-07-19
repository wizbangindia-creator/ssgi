/**
 * SSGI Campus Life catalog.
 * One data source drives 12 topic pages under /campus-life/:slug and the index at /campus-life.
 */

import {
  Home,
  Bus,
  Utensils,
  Trophy,
  BookOpen,
  Cpu,
  Sparkles,
  Users,
  Music,
  Handshake,
  ShieldAlert,
  ScrollText,
} from "lucide-react";

export const campusCategories = ["Facilities", "Student Life"];

export const campusTopics = [
  /* -------- FACILITIES -------- */
  {
    slug: "residential",
    category: "Facilities",
    icon: Home,
    title: "Hostel & Residential Life",
    tagline: "A home away from home — safe, connected, comfortable.",
    intro:
      "SSGI's on-campus hostels are the vibrant heart of student life. Separate, fully-secured blocks for boys and girls sit within a green, walkable campus — putting classrooms, cafeteria, sports and library minutes away from your room.",
    stats: [
      { label: "Beds", value: "1,200+" },
      { label: "Warden Support", value: "24×7" },
      { label: "Wi-Fi", value: "High-Speed" },
      { label: "CCTV Coverage", value: "100%" },
    ],
    features: [
      { icon: Home, title: "Twin & Triple Rooms", copy: "Spacious rooms with study tables, wardrobes and attached washrooms for privacy and focus." },
      { icon: Sparkles, title: "Fully-Furnished", copy: "Bed, mattress, fan/AC options, curtains and daily housekeeping — walk in and start living." },
      { icon: ShieldAlert, title: "Safe & Secure", copy: "Biometric entry, CCTV surveillance, resident wardens and 24×7 security across all blocks." },
      { icon: Utensils, title: "Multi-Cuisine Mess", copy: "Nutritionist-approved menu with North Indian, South Indian, Chinese and continental options." },
      { icon: Trophy, title: "Recreation & Fitness", copy: "In-hostel gym, TV lounge, indoor games, reading room and Wi-Fi lounges." },
      { icon: BookOpen, title: "Study Support", copy: "Dedicated study halls open till late, plus subject-wise peer study groups." },
    ],
    faqs: [
      { q: "Is hostel accommodation mandatory?", a: "No. Hostel is optional and priced separately from tuition, but strongly recommended for out-station students." },
      { q: "Can parents visit the hostel?", a: "Yes, with prior registration at the security gate. There are dedicated visiting hours and a parents' waiting lounge." },
    ],
  },
  {
    slug: "transport",
    category: "Facilities",
    icon: Bus,
    title: "Campus Transport",
    tagline: "GPS-tracked, well-maintained buses across Punjab.",
    intro:
      "SSGI runs a large fleet of college buses covering major routes across Pathankot and neighbouring districts — Amritsar, Gurdaspur, Hoshiarpur, Kathua and beyond. Every bus is GPS-tracked, driven by trained drivers and monitored via the transport office in real-time.",
    stats: [
      { label: "Buses", value: "35+" },
      { label: "Routes", value: "40+" },
      { label: "GPS Tracked", value: "100%" },
      { label: "On-time Rate", value: "97%" },
    ],
    features: [
      { icon: Bus, title: "Wide Route Network", copy: "40+ pick-up/drop routes across Punjab, HP and J&K covering all major towns and villages." },
      { icon: ShieldAlert, title: "Trained Drivers", copy: "Every driver is background-verified and undergoes annual defensive-driving refresher training." },
      { icon: Sparkles, title: "GPS Tracking", copy: "Live-location tracking for every bus — parents can subscribe to updates on demand." },
      { icon: Users, title: "Attendant Support", copy: "Trained female attendants on all female-route buses for added safety and comfort." },
      { icon: ScrollText, title: "Transparent Fees", copy: "Distance-based transparent slabs (₹22,000 – ₹35,000/year) with EMI options available." },
      { icon: Trophy, title: "Zero Compromise", copy: "Regular fitness checks, insurance and maintenance schedules for every vehicle." },
    ],
    faqs: [
      { q: "How do I choose my route?", a: "During admission, our transport office maps out the nearest stop from your address and gives you the applicable fee slab." },
      { q: "What if my area is not covered?", a: "New routes are added every year based on demand. Speak to the transport office and we will evaluate feasibility." },
    ],
  },
  {
    slug: "cafeteria",
    category: "Facilities",
    icon: Utensils,
    title: "Cafeteria & Food",
    tagline: "Healthy, hygienic and delicious — around the clock.",
    intro:
      "SSGI's cafeterias are more than just places to eat — they are the social hubs where friendships are made and late-night project ideas take shape. From the main food court to the pharmacy-block canteen, quality, hygiene and variety are non-negotiable.",
    stats: [
      { label: "Cafeterias", value: "3" },
      { label: "Seating", value: "800+" },
      { label: "Menu Options", value: "60+" },
      { label: "Hygiene Rating", value: "A+" },
    ],
    features: [
      { icon: Utensils, title: "Multi-Cuisine Menu", copy: "North Indian, South Indian, Chinese, continental, snacks, beverages and healthy salads." },
      { icon: Sparkles, title: "Hygiene First", copy: "FSSAI-certified vendors, mandatory hair caps & gloves, weekly deep cleaning and audits." },
      { icon: Home, title: "Chef-Led Kitchens", copy: "Experienced chefs curate seasonal menus with a focus on nutrition and taste." },
      { icon: Users, title: "Student Committee", copy: "A rotating student food committee gives feedback on menu, pricing and quality." },
      { icon: BookOpen, title: "Study-Friendly Zones", copy: "Wi-Fi, charging points and quiet corners for group study or late-night grinds." },
      { icon: Trophy, title: "Affordable Combos", copy: "Student-friendly combo meals starting at just ₹60 — thoughtfully priced." },
    ],
    faqs: [
      { q: "Are special dietary needs catered for?", a: "Yes. Jain, vegan and gluten-free options are available at the main food court on request." },
      { q: "What are the timings?", a: "Main food court is open 7:30 am – 10:30 pm. Snack counters near the hostel block operate till late." },
    ],
  },
  {
    slug: "sports",
    category: "Facilities",
    icon: Trophy,
    title: "Sports & Fitness",
    tagline: "Play hard. Grow harder.",
    intro:
      "A vibrant sports culture is core to SSGI's identity. From cricket to badminton, football to table tennis, chess to kabaddi — students train, compete and represent SSGI at university, state and national tournaments every year.",
    stats: [
      { label: "Grounds", value: "5" },
      { label: "Sports Offered", value: "20+" },
      { label: "Coaches", value: "10+" },
      { label: "State/Nat. Medals", value: "300+" },
    ],
    features: [
      { icon: Trophy, title: "Cricket Ground", copy: "A full-size cricket ground with dedicated practice nets and match-quality pitch." },
      { icon: Sparkles, title: "Football Ground", copy: "Regulation-size football ground used for IKGPTU-level inter-college tournaments." },
      { icon: Users, title: "Indoor Sports Hall", copy: "Badminton, table tennis, chess, carrom, boxing and yoga — all under one roof." },
      { icon: Bus, title: "Athletics Track", copy: "Standard athletics track for training and athletics meets." },
      { icon: Home, title: "Fitness Gym", copy: "Well-equipped fitness centre with cardio, strength training and dedicated trainers." },
      { icon: BookOpen, title: "Sports Scholarships", copy: "Additional 10–20% tuition scholarships for state / national-level achievers." },
    ],
  },
  {
    slug: "library",
    category: "Facilities",
    icon: BookOpen,
    title: "Central Library",
    tagline: "A silent powerhouse of knowledge and curiosity.",
    intro:
      "The SSGI Central Library is one of the largest of its kind in the region — a spacious, well-lit, technology-enabled space with an ever-growing collection of print and digital resources for every discipline offered on campus.",
    stats: [
      { label: "Volumes", value: "45,000+" },
      { label: "e-Journals", value: "3,000+" },
      { label: "Seating", value: "300+" },
      { label: "Hours", value: "8 am – 10 pm" },
    ],
    features: [
      { icon: BookOpen, title: "Vast Book Collection", copy: "45,000+ textbooks, reference books and journals across engineering, management, pharmacy, education, agri and sciences." },
      { icon: Cpu, title: "Digital Library", copy: "DELNET, IEEE Xplore, ScienceDirect, ProQuest, EBSCO, e-ShodhSindhu and NPTEL access on campus and remotely." },
      { icon: Home, title: "Reading Halls", copy: "Silent zones, discussion rooms, individual study carrels and group study pods." },
      { icon: Sparkles, title: "Modern Facilities", copy: "OPAC (Online Public Access Catalog), RFID book-tracking, self-issue kiosks and CCTV surveillance." },
      { icon: Users, title: "Trained Librarians", copy: "Qualified library staff to help you with references, citations and research guidance." },
      { icon: ScrollText, title: "Research Support", copy: "Plagiarism-check tools, thesis support, and dedicated research corners for faculty & students." },
    ],
  },
  {
    slug: "labs",
    category: "Facilities",
    icon: Cpu,
    title: "Labs & Workshops",
    tagline: "Where classroom theory meets real-world practice.",
    intro:
      "SSGI's engineering, pharmacy, hotel-management and applied-science labs are equipped with the same tools and technologies used in leading MNCs and research institutions — because you deserve to learn on the real thing.",
    stats: [
      { label: "Labs", value: "60+" },
      { label: "Software Licences", value: "40+" },
      { label: "IBM CoE", value: "Live" },
      { label: "Pearson VUE", value: "On-campus" },
    ],
    features: [
      { icon: Cpu, title: "IBM Centre of Excellence", copy: "Industry-integrated tracks in AI/ML, Cloud, Cyber Security and Data Science." },
      { icon: Sparkles, title: "Pearson VUE Testing Centre", copy: "Take global certification exams (AWS, Azure, Google, Microsoft, CompTIA) right on campus." },
      { icon: BookOpen, title: "Engineering Workshops", copy: "CNC, welding, PCB, robotics, 3D printing, CAD/CAM/CAE labs for every branch." },
      { icon: Utensils, title: "Pharmacy Labs", copy: "PCI-approved pharmaceutics, pharmacology, pharm.chem. & pharmacognosy labs." },
      { icon: Users, title: "Hotel Mgmt. Labs", copy: "Training kitchens, bakery, mocktail lab, front-office simulation and housekeeping labs." },
      { icon: Home, title: "Applied Sciences Labs", copy: "Modern instrumentation labs — UV, IR, NMR, optics and electronics." },
    ],
  },

  /* -------- STUDENT LIFE -------- */
  {
    slug: "events",
    category: "Student Life",
    icon: Sparkles,
    title: "Campus Events",
    tagline: "There's always something happening at SSGI.",
    intro:
      "From orientation and freshers' welcome to annual tech-fests, sports meets, cultural nights, industry seminars, guest lectures and hackathons — SSGI runs a rich calendar of over 60 events every academic year to build a rounded college experience.",
    stats: [
      { label: "Events / year", value: "60+" },
      { label: "Fest Footfall", value: "10,000+" },
      { label: "Guest Speakers", value: "40+" },
      { label: "Clubs Involved", value: "20+" },
    ],
    features: [
      { icon: Music, title: "SSGI Annual Fest", copy: "Two days of music, dance, food, competitions and star performances — the biggest event on campus." },
      { icon: Cpu, title: "TechFest & Hackathons", copy: "24-hour hackathons, robo-wars, coding contests, AI/ML showcases and industry expos." },
      { icon: Trophy, title: "Sports Meet", copy: "Inter-college tournaments across cricket, football, basketball, athletics and indoor games." },
      { icon: Users, title: "Industry Seminars", copy: "Talks by CEOs, founders, alumni and top academicians from India and abroad." },
      { icon: Sparkles, title: "Freshers & Farewell", copy: "Two of the most emotional and beautifully organised days of every academic year." },
      { icon: BookOpen, title: "Academic Conclaves", copy: "Discipline-specific workshops, symposia, paper-presentations and case-study competitions." },
    ],
  },
  {
    slug: "clubs",
    category: "Student Life",
    icon: Users,
    title: "Clubs & Societies",
    tagline: "Find your tribe. Find your voice.",
    intro:
      "There is a club for every passion at SSGI — technology, entrepreneurship, drama, dance, music, photography, debating, writing, community-service, quizzing and much more. Clubs are entirely student-run and open to anyone with the will to contribute.",
    stats: [
      { label: "Active Clubs", value: "20+" },
      { label: "Student Members", value: "2,000+" },
      { label: "Events / year", value: "60+" },
      { label: "Faculty Advisors", value: "20+" },
    ],
    features: [
      { icon: Cpu, title: "Tech & Coding Club", copy: "Hackathons, open-source contribution drives, hardware & robotics sessions." },
      { icon: Trophy, title: "Entrepreneurship Cell", copy: "Ideation bootcamps, pitching contests, mentorship from founders & VCs." },
      { icon: Music, title: "Dance, Drama & Music", copy: "Multiple performance troupes that represent SSGI at inter-college fests." },
      { icon: BookOpen, title: "Literary & Debating", copy: "MUN, quizzing, creative writing and JAM (Just a Minute) events." },
      { icon: Sparkles, title: "Photography Club", copy: "Weekly photo-walks, photography contests and campus photojournalism." },
      { icon: Handshake, title: "NSS & Social Service", copy: "Blood-donation camps, cleanliness drives, tree plantation, rural outreach." },
    ],
  },
  {
    slug: "cultural-fests",
    category: "Student Life",
    icon: Music,
    title: "Cultural Fests",
    tagline: "Colours, sounds and stories worth remembering forever.",
    intro:
      "SSGI's cultural fests are legendary in the region — a celebration of talent, teamwork and tradition. From Ganesh Utsav, Navratri and Lohri to Independence Day, Republic Day, Teachers' Day and the annual mega-fest, cultural life is deeply woven into every academic year.",
    stats: [
      { label: "Major Fests", value: "8+" },
      { label: "Performances", value: "80+" },
      { label: "Participating Students", value: "1,500+" },
      { label: "Prize Pool", value: "₹5+ Lakhs" },
    ],
    features: [
      { icon: Music, title: "SSGI Annual Fest", copy: "The flagship two-day fest with music, dance, drama, DJ nights, star performers and industry expo." },
      { icon: Sparkles, title: "Festival Celebrations", copy: "Diwali, Lohri, Ganesh Utsav, Navratri, Christmas, Baisakhi — every major Indian festival celebrated on campus." },
      { icon: Users, title: "Inter-College Meet", copy: "Choreo nights, band battles, fashion shows and stand-up competitions with participation from 30+ colleges." },
      { icon: Home, title: "Rangoli & Art Shows", copy: "Campus-wide art shows, rangoli competitions and exhibitions curated by the Fine Arts Club." },
      { icon: BookOpen, title: "Literary Nights", copy: "Poetry readings, mushairas, story-slams and open-mic evenings under the stars." },
      { icon: Trophy, title: "Awards & Recognition", copy: "Best Performer, Best Team, Best Volunteer and Cultural Excellence awards every year." },
    ],
  },
  {
    slug: "student-organizations",
    category: "Student Life",
    icon: Handshake,
    title: "Student Organizations",
    tagline: "Lead. Serve. Represent.",
    intro:
      "SSGI's Student Councils and Discipline-Specific Associations give every student a chance to build leadership, communication and organisational skills that go far beyond the classroom.",
    stats: [
      { label: "Councils", value: "6" },
      { label: "Elected Leaders", value: "60+" },
      { label: "Events Owned", value: "40+" },
      { label: "Alumni Chapters", value: "5+" },
    ],
    features: [
      { icon: Handshake, title: "Student Council", copy: "Elected representatives across each year and department — the official voice of students." },
      { icon: Users, title: "Discipline Associations", copy: "CSE Society, ECE Association, MBA Circle, Pharma Society, Agri Association and more." },
      { icon: BookOpen, title: "NSS Unit", copy: "Registered NSS unit that runs blood-donation, plantation and rural-outreach drives." },
      { icon: Sparkles, title: "Alumni Network", copy: "40,346+ alumni globally with active chapters in Delhi NCR, Bengaluru, Punjab, USA & Canada." },
      { icon: Trophy, title: "Sports Committee", copy: "Student-led committee that plans intra-college leagues and IKGPTU-level participation." },
      { icon: Cpu, title: "Placement Committee", copy: "Student volunteers who work with the Career Cell to run recruitment drives smoothly." },
    ],
  },
  {
    slug: "anti-ragging",
    category: "Student Life",
    icon: ShieldAlert,
    title: "Anti-Ragging",
    tagline: "Zero tolerance to ragging — a safe campus, always.",
    intro:
      "SSGI is 100% ragging-free and strictly enforces the UGC Regulations and Supreme Court directives. A dedicated Anti-Ragging Committee, Anti-Ragging Squad, CCTV coverage, buddy programme and hostel wardens ensure every student feels safe from day one.",
    stats: [
      { label: "CCTV Coverage", value: "100%" },
      { label: "Anti-Ragging Squad", value: "24×7" },
      { label: "Incidents (2025)", value: "0" },
      { label: "Undertakings", value: "100%" },
    ],
    features: [
      { icon: ShieldAlert, title: "Anti-Ragging Committee", copy: "Chaired by the Director-Principal with senior faculty, wardens and parent representatives." },
      { icon: Users, title: "Squad Patrolling", copy: "Trained squad conducts surprise checks in classrooms, hostels, cafeterias and buses." },
      { icon: Sparkles, title: "Buddy Programme", copy: "Every fresher is paired with a trained senior mentor for the first academic year." },
      { icon: Handshake, title: "Grievance Cell", copy: "Confidential grievance-redressal cell with 24×7 helpline and counsellor support." },
      { icon: BookOpen, title: "Awareness Drives", copy: "Orientation programmes, posters, seminars and workshops every semester." },
      { icon: Trophy, title: "UGC Compliance", copy: "Mandatory anti-ragging affidavit online via antiragging.in every academic year." },
    ],
    linkOverride: "/anti-ragging",
    linkLabel: "Read the full Anti-Ragging Policy",
  },
  {
    slug: "grievance-cell",
    category: "Student Life",
    icon: ScrollText,
    title: "Grievance Redressal Cell",
    tagline: "Every voice matters. Every concern gets heard.",
    intro:
      "The SSGI Grievance Redressal Cell provides a confidential, fair and time-bound platform for students, parents and staff to raise any academic, administrative, financial or interpersonal concerns and get them resolved.",
    stats: [
      { label: "Resolution Time", value: "≤ 7 days" },
      { label: "Confidentiality", value: "100%" },
      { label: "Channels", value: "Online + Offline" },
      { label: "Escalation", value: "Director-Principal" },
    ],
    features: [
      { icon: ScrollText, title: "Online Grievance Portal", copy: "Submit and track your grievance status transparently through the student portal." },
      { icon: Home, title: "Physical Complaint Box", copy: "Grievance boxes at multiple locations across the campus for anonymous complaints." },
      { icon: Handshake, title: "Committee Review", copy: "Formal committee reviews each complaint and shares a response within 7 working days." },
      { icon: Users, title: "Multiple Domains", copy: "Academic, hostel, transport, mess, financial, harassment or interpersonal — all handled." },
      { icon: ShieldAlert, title: "Anti-Harassment Cell", copy: "Dedicated sub-cell for gender / sexual-harassment complaints as per POSH Act, 2013." },
      { icon: Sparkles, title: "Counsellor Access", copy: "Free & confidential access to a trained counsellor for mental-health support." },
    ],
  },
];

export const getCampusTopic = (slug) => campusTopics.find((t) => t.slug === slug);
