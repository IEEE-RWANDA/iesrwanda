import conferencesData from "./conferences.json";
import officersData from "./officers.json";
import eventsData from "./events.json";
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
  email: "info@iesrwanda.org",
};

// Primary navbar — kept to the handful of things visitors come to do.
// Secondary pages (Leadership, Rwanda, Contact) live in the footer sitemap below.
export const nav = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Membership", href: "/membership" },
  { label: "Resources", href: "/resources" },
  { label: "Partners", href: "/partners" },
];

// Full sitemap for the footer — every page, including the secondary ones the
// navbar no longer shows.
export const footerNav = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Events", href: "/events" },
  { label: "Rwanda", href: "/rwanda" },
  { label: "Membership", href: "/membership" },
  { label: "Resources", href: "/resources" },
  { label: "Partners", href: "/partners" },
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
  { value: 30, suffix: "+", label: "Community members in Rwanda", note: "the founding circle — and growing" },
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
export const conferences = conferencesData;

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
export const officers = officersData;

// Volunteer sign-up — replace "#" with your Google Form URL when ready.
export const volunteerFormUrl = "#";

// "Start a Student Branch Chapter" — the official IEEE IES petition page that
// walks a university through forming a new IES Student Branch Chapter.
export const studentBranchFormUrl =
  "https://www.ieee-ies.org/membership/students/form-a-new-student-chapter";

// Official IEEE membership join page.
export const ieeeJoinUrl = "https://www.ieee.org/membership/join.html";

// External reference links used across the site.
export const links = {
  ieeeAbout: "https://www.ieee.org/about/index.html",
  ieeeSocieties: "https://www.ieee.org/communities/societies/index.html",
  ies: "https://www.ieee-ies.org",
  iesConferences: "https://www.ieee-ies.org/conferences",
  resourceCenter: "https://resourcecenter.ies.ieee.org",
};

// IES Resource Center — the society's free online learning library.
// Everything is free: members, IEEE members and non-members alike.
export const resourceCenterUrl = "https://resourcecenter.ies.ieee.org";

// The kinds of learning material the Resource Center hosts.
export const resourceCategories = [
  {
    title: "Webinars",
    body: "Live and recorded technical talks from leading IES researchers — AI and IIoT systems, power electronics, electric vehicles, machine learning and more.",
    tags: ["Live & on-demand", "Expert speakers"],
  },
  {
    title: "Tutorials & short courses",
    body: "In-depth training modules that take you from fundamentals to advanced topics across the industrial electronics field — learn at your own pace.",
    tags: ["Self-paced", "Beginner → advanced"],
  },
  {
    title: "Conference recordings",
    body: "Sessions and presentations from the society's flagship conferences — IECON, ISIE and ICIT — so you can catch the research even if you couldn't attend.",
    tags: ["IECON", "ISIE", "ICIT"],
  },
  {
    title: "Member resources",
    body: "Programmes and content for Women in IES and for students & young professionals — career guidance, mentorship talks and community resources.",
    tags: ["Women in IES", "Students & YP"],
  },
];

// Why the Resource Center is worth pointing the chapter community to.
export const resourceHighlights = [
  {
    title: "Free for everyone",
    body: "Members, IEEE members and non-members all access the content at no cost — there's no paywall between you and the learning.",
  },
  {
    title: "Taught by the field's leaders",
    body: "Material comes straight from IES technical committees and conference speakers — the same researchers shaping industrial electronics worldwide.",
  },
  {
    title: "Built for every stage",
    body: "Whether you're a student just starting out or a working engineer, there's a track from fundamentals through to specialised, advanced topics.",
  },
];

// Chapter social channels. Replace "#" with the real URLs once the accounts
// exist — the footer auto-hides nothing; links just point to "#" until then.
export const socials = [
  { key: "tiktok", name: "TikTok", href: "https://www.tiktok.com/@iesrwanda" },
  { key: "instagram", name: "Instagram", href: "https://www.instagram.com/iesrwanda" },
  { key: "linkedin", name: "LinkedIn", href: "https://www.linkedin.com/company/iesrwanda" },
  { key: "youtube", name: "YouTube", href: "https://www.youtube.com/@iesrwanda" },
];

// Events — anchored to real IEEE-in-Rwanda activity + plausible chapter events
// `image`: for UPCOMING events drop an event poster, for PAST events a photo,
// in /public/events/ and set the path (e.g. "/events/launch-poster.jpg").
export const events = eventsData;

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

// Partnerships — ways organisations can work with the chapter
export const partnerWays = [
  {
    title: "Industry host",
    line: "Open your doors",
    body: "Host an industrial visit or facility tour — show students and engineers real Rwandan operations, and put your technology in front of the country's emerging industrial talent.",
    points: ["Facility tours & technical deep dives", "Direct access to student talent", "Brand visibility across the chapter"],
  },
  {
    title: "Event sponsor",
    line: "Power our programme",
    body: "Back a workshop, summit or competition. Sponsorship keeps chapter activities free and open while putting your name alongside IEEE and the wider East African engineering community.",
    points: ["Logo & speaking slots at events", "Co-branded sessions", "Reach across IEEE Region 8 networks"],
  },
  {
    title: "R&D collaborator",
    line: "Build together",
    body: "Partner on applied research in industrial electronics, automation, IoT and smart energy — connecting your challenges to the chapter's members, universities and the global IES technical community.",
    points: ["Joint research & pilots", "Access to IES technical committees", "University & faculty links"],
  },
  {
    title: "Talent pipeline",
    line: "Find your next engineers",
    body: "Recruit and mentor through the chapter — from internships and capstone projects to graduate hiring across seven Rwandan universities and the broader student network.",
    points: ["Internships & capstone projects", "Mentorship programmes", "Graduate recruitment access"],
  },
];
