// Central content source for the IEEE IES Rwanda Chapter site.
// Placeholder people/events are clearly editable — swap for real data.

export const chapter = {
  name: "IEEE Industrial Electronics Society",
  shortName: "IEEE IES",
  chapter: "Rwanda Chapter",
  parentSection: "IEEE Rwanda Section · Region 8",
  section: "IEEE Rwanda Section",
  region: "Region 8",
  tagline: "The industrial intelligence of Rwanda — engineered locally.",
  established: "2026",
  location: "Kigali, Rwanda",
  email: "ies.rwanda@ieee.org",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Events", href: "/events" },
  { label: "Rwanda", href: "/rwanda" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

// "Visit Rwanda" tourism page — swap for any YouTube video id you prefer.
export const rwandaVideoId = "yv-bdsuKhM0";

export const rwandaHighlights = [
  {
    title: "Land of a Thousand Hills",
    body: "Rolling green hills, volcanoes and the mountain gorillas of Volcanoes National Park make Rwanda's landscape unforgettable.",
  },
  {
    title: "Africa's rising tech hub",
    body: "Rwanda has become one of the continent's fastest-moving technology centres, backed by a government that prioritises connectivity, innovation and digital transformation at a national scale.",
  },
  {
    title: "Clean & safe",
    body: "Kigali is repeatedly named among the world's cleanest and safest cities, shaped by strong civic discipline, community traditions like Umuganda, and a deep national commitment to order and security.",
  },
  {
    title: "Visit Rwanda",
    body: "Mountain gorillas in Volcanoes National Park, wildlife in Akagera, the ancient rainforest canopy and rare birds of Nyungwe, and the clean, safe streets of Kigali make Rwanda one of Africa's most rewarding places to visit.",
  },
  {
    title: "Heart of the continent",
    body: "Centrally located and superbly connected, Kigali hosts pan-African summits, conferences and events year-round.",
  },
  {
    title: "Warm hospitality",
    body: "Visitors remember Rwanda for its people: welcoming, ambitious and proud of how far the country has come.",
  },
];

// Animated counters on the home page
export const stats = [
  { value: 10000, suffix: "+", label: "IES members worldwide", note: "the global community you join" },
  { value: 30, suffix: "+", label: "Conferences each year", note: "discounted member access" },
  { value: 160, suffix: "+", label: "Countries reached", note: "IEEE's global footprint" },
  { value: 250, suffix: "", label: "PowerAfrica delegates", note: "hosted in Kigali, 2022" },
];

// Marquee keywords — the IES field of interest, in its own words
export const focusKeywords = [
  "Robotics",
  "Mechatronics",
  "Power Electronics",
  "Motion Control",
  "Factory Automation",
  "Motor Drives",
  "Computational Intelligence",
  "Signal Processing",
  "Sensors & Actuators",
  "Fault Diagnosis",
  "Renewable Energy Systems",
  "Industrial AI",
  "Instrumentation",
  "Vision Systems",
];

// IES areas of technical activity — the five domains of the official IES field of interest
export const pillars = [
  {
    id: "01",
    title: "Electronics",
    body: "Power electronics, motor drives, converters and the electronic systems that drive industrial processes, manufacturing and renewable energy infrastructure.",
    tags: ["Power Electronics", "Drives", "Converters"],
  },
  {
    id: "02",
    title: "Controls",
    body: "Industrial control systems, motion control, robotics and mechatronics — the intelligence that keeps automated processes precise and adaptive.",
    tags: ["Motion Control", "Robotics", "Mechatronics"],
  },
  {
    id: "03",
    title: "Communications",
    body: "Factory communications and industrial networking that connect sensors, machines and systems into a coherent, data-driven plant.",
    tags: ["Industrial Networking", "IIoT", "Connectivity"],
  },
  {
    id: "04",
    title: "Instrumentation",
    body: "Sensors, actuators and data acquisition systems that measure and monitor industrial processes with precision.",
    tags: ["Sensors & Actuators", "Data Acquisition", "Monitoring"],
  },
  {
    id: "05",
    title: "Computational Intelligence",
    body: "Signal processing, machine learning and computational intelligence applied to fault diagnosis, vision systems and industrial decision-making.",
    tags: ["Industrial AI", "Vision Systems", "Fault Diagnosis"],
  },
];

// Flagship IEEE IES conferences held annually around the world, plus the
// Students & Young Professionals programme. Members get discounted access.
// `url`: conferences rotate host cities yearly — these point to the official
// IES listing / stable umbrella sites. Swap for a specific year if you like.
export const conferences = [
  {
    acronym: "IECON",
    name: "Annual Conference of the IEEE Industrial Electronics Society",
    focus: "The society's flagship — the full breadth of industrial electronics.",
    flagship: true,
    students: false,
    url: "https://www.ieee-ies.org/conferences",
  },
  {
    acronym: "ISIE",
    name: "International Symposium on Industrial Electronics",
    focus: "Emerging research across the IES field of interest.",
    flagship: false,
    students: false,
    url: "http://www.ieee-isie.org",
  },
  {
    acronym: "ICIT",
    name: "International Conference on Industrial Technology",
    focus: "Industrial technology, drives and real-world applications.",
    flagship: false,
    students: false,
    url: "https://www.ieee-ies.org/conferences",
  },
  {
    acronym: "INDIN",
    name: "International Conference on Industrial Informatics",
    focus: "Industrial informatics, IIoT and cyber-physical systems.",
    flagship: false,
    students: false,
    url: "https://www.ieee-ies.org/conferences",
  },
  {
    acronym: "ETFA",
    name: "IEEE International Conference on Emerging Technologies and Factory Automation",
    focus: "ETFA 2026 runs 8–11 September in Västerås, Sweden — factory automation and emerging industrial technologies. Held annually.",
    flagship: false,
    students: false,
    url: "https://etfa2026.ieee-ies.org/",
  },
  {
    acronym: "ICPS",
    name: "International Conference on Industrial Cyber-Physical Systems",
    focus: "The convergence of computation, networking and the physical plant.",
    flagship: false,
    students: false,
    url: "https://www.ieee-ies.org/conferences",
  },
  {
    acronym: "SYP",
    name: "Students and Young Professionals Congress",
    focus:
      "A standalone annual gathering for IES students and young professionals. SYP Congress 2026 runs 13–15 August in Rio de Janeiro, Brazil. The Paper Assistance Program (SYPA) separately helps SYP members attend the flagship conferences.",
    flagship: false,
    students: true,
    url: "https://www.ieee-ies.org/membership/students",
  },
];

// Stacked story: IEEE → IES → Rwanda
export const story = [
  {
    kicker: "The institute",
    title: "IEEE",
    body: "The world's largest technical professional organisation — 400,000+ members across 160+ countries — advancing technology for the benefit of humanity.",
    logo: "/ieee-logo.png",
  },
  {
    kicker: "The society",
    title: "Industrial Electronics Society",
    body: "Within IEEE, the IES gathers 10,000+ engineers and researchers applying electronics, control, instrumentation and computational intelligence to industry and manufacturing.",
    logo: "/ies-logo.png",
  },
  {
    kicker: "The chapter",
    title: "Rwanda",
    body: "A local home for that mission — connecting students, young professionals and industry in Kigali to the global IES, and building the engineers behind Rwanda's industrial future.",
    logo: "/logo.png",
  },
];

// Leadership — the chapter's executive committee.
// Add a real headshot by dropping the file in /public/officers and setting
// `photo` to e.g. "/officers/kipngeno.jpg". Leave "" to show the placeholder.
export const officers = [
  { name: "Kipngeno Koech", role: "Chapter Chair", affil: "", initials: "KK", photo: "" },
  { name: "Gentille Uwera", role: "Treasurer", affil: "", initials: "GU", photo: "" },
  { name: "David Stephen", role: "Secretary", affil: "", initials: "DS", photo: "" },
];

// Volunteer sign-up — replace "#" with your Google Form URL when ready.
export const volunteerFormUrl = "#";

// "Start a Student Branch Chapter" — replace "#" with your Google Form URL.
export const studentBranchFormUrl = "#";

// Official IEEE membership join page.
export const ieeeJoinUrl = "https://www.ieee.org/membership/join.html";

// External reference links used across the site.
export const links = {
  ieeeAbout: "https://www.ieee.org/about/index.html",
  ieeeSocieties: "https://www.ieee.org/communities/societies/index.html",
  ies: "https://www.ieee-ies.org",
  iesConferences: "https://www.ieee-ies.org/conferences",
};

// Chapter social channels. Replace "#" with the real URLs once the accounts
// exist — the footer auto-hides nothing; links just point to "#" until then.
export const socials = [
  { key: "tiktok", name: "TikTok", href: "#" },
  { key: "instagram", name: "Instagram", href: "#" },
  { key: "linkedin", name: "LinkedIn", href: "#" },
  { key: "youtube", name: "YouTube", href: "#" },
];

// Events — anchored to real IEEE-in-Rwanda activity + plausible chapter events
// `image`: for UPCOMING events drop an event poster, for PAST events a photo,
// in /public/events/ and set the path (e.g. "/events/launch-poster.jpg").
export const events = [
  {
    date: "2026-07-03",
    when: "3 Jul 2026",
    title: "IEEE IES Rwanda Chapter — Official Launch",
    place: "Kigali, Rwanda",
    kind: "Community",
    body: "The inaugural gathering of the IEEE IES Rwanda Chapter: welcoming members, setting the technical agenda, and marking Rwanda's entry into the global IES community.",
    status: "upcoming",
    register: "#", // paste the registration URL (Google Form, Eventbrite, vTools…)
    image: "", // event poster → /public/events/launch-poster.jpg
  },
  {
    date: "2026-07-03",
    when: "3 Jul 2026",
    title: "Industrial AI in Practice — Workshop",
    place: "Kigali, Rwanda",
    kind: "Workshop",
    body: "A hands-on session on applied industrial AI led by Darryl Palmer, IEEE IES Industrial Activities Committee & IEEE Entrepreneurship Liaison.",
    status: "upcoming",
    register: "#", // paste the registration URL
    image: "", // event poster
  },
  {
    date: "2026-05-28",
    when: "28–30 May 2026",
    title: "IEEE IES East Africa Industrial Innovation Summit 2026",
    place: "Nairobi, Kenya",
    kind: "Summit",
    body: "Under the theme “Collaboration for Africa’s Sustainable Industrial Future,” the East African Hub summit brought together engineers, researchers, students, startups and industry leaders — spanning AI, IoT, robotics and automation to smart energy and sustainable infrastructure — to drive Africa’s industrial transformation.",
    status: "past",
    register: "",
    image: "", // event photo → /public/events/east-africa-summit-2026.jpg
  },
];

// Membership benefits
export const benefits = [
  {
    title: "A global technical home",
    body: "Join 10,000+ IES members and technical committees on every topic in industrial electronics — from a base right here in Kigali.",
  },
  {
    title: "Funding that reaches Rwanda",
    body: "Tap IES Support for Chapter Local Activities (up to $4,000) and student grants (up to $1,000) to run real events locally.",
  },
  {
    title: "Conferences & publications",
    body: "Discounted access to 30+ IES conferences a year and the IEEE Transactions on Industrial Electronics.",
  },
  {
    title: "Career & mentorship",
    body: "Connect students and young professionals with industry mentors, research groups and the wider IEEE Region 8 network.",
  },
];

// Membership tiers / who can join
export const tracks = [
  {
    name: "Student",
    line: "University & polytechnic students",
    points: ["Student & Young Professional activities", "Project grants up to $1,000", "Mentorship & competitions"],
  },
  {
    name: "Professional",
    line: "Engineers & researchers",
    points: ["Full IES technical community", "Conference & journal access", "Local leadership roles"],
  },
  {
    name: "Industry Partner",
    line: "Companies & institutions",
    points: ["Talent pipeline & demos", "Co-hosted workshops", "R&D collaboration"],
  },
];
