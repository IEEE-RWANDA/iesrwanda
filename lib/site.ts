// Central content source for the IEEE IES Rwanda Chapter site.
// Placeholder people/events are clearly editable — swap for real data.

export const chapter = {
  name: "IEEE Industrial Electronics Society",
  shortName: "IEEE IES",
  chapter: "Rwanda Chapter",
  parentSection: "IEEE Rwanda Section · Region 8",
  tagline: "The industrial intelligence of Rwanda — engineered locally.",
  established: "2024",
  location: "Kigali, Rwanda",
  email: "ies.rwanda@ieee.org",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Events", href: "/events" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

// Animated counters on the home page
export const stats = [
  { value: 10000, suffix: "+", label: "IES members worldwide", note: "the global community you join" },
  { value: 30, suffix: "+", label: "Conferences each year", note: "discounted member access" },
  { value: 4000, prefix: "$", label: "Per chapter activity", note: "SCLA local-activity grants" },
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

// The technical pillars — drawn from the official IES field of interest
export const pillars = [
  {
    id: "01",
    title: "Control, Robotics & Mechatronics",
    body: "Intelligent and computer control systems, motion control, and the robotics that move modern industry. Home of the IES TC-CRM technical committee.",
    tags: ["TC-CRM", "Motion Control", "Autonomy"],
  },
  {
    id: "02",
    title: "Power Electronics & Drives",
    body: "Electric motor drives, converters, and power electronics for renewable energy and resilient power systems — the backbone of African electrification.",
    tags: ["Drives", "Renewables", "Grid"],
  },
  {
    id: "03",
    title: "Factory Automation & Industry 4.0",
    body: "Factory communications, flexible manufacturing, and data acquisition that turn raw production into a connected, instrumented system.",
    tags: ["Automation", "IIoT", "Manufacturing"],
  },
  {
    id: "04",
    title: "Industrial AI & Instrumentation",
    body: "Computational intelligence, signal processing, vision systems, and fault diagnosis applied to real industrial electronic systems.",
    tags: ["Industrial AI", "Sensing", "Diagnostics"],
  },
];

// Stacked story: IEEE → IES → Rwanda
export const story = [
  {
    kicker: "The institute",
    title: "IEEE",
    body: "The world's largest technical professional organisation — 400,000+ members across 160+ countries — advancing technology for the benefit of humanity.",
  },
  {
    kicker: "The society",
    title: "Industrial Electronics Society",
    body: "Within IEEE, the IES gathers 10,000+ engineers and researchers applying electronics, control, instrumentation and computational intelligence to industry and manufacturing.",
  },
  {
    kicker: "The chapter",
    title: "Rwanda",
    body: "A local home for that mission — connecting students, young professionals and industry in Kigali to the global IES, and building the engineers behind Rwanda's industrial future.",
  },
];

// Leadership — placeholder officers, ready to be replaced with real volunteers.
// Add a real headshot by dropping the file in /public/officers and setting
// `photo` to e.g. "/officers/aline.jpg". Leave "" to show the placeholder.
export const officers = [
  { name: "Dr. Aline Uwase", role: "Chapter Chair", affil: "University of Rwanda · CST", initials: "AU", photo: "" },
  { name: "Jean-Paul Niyonzima", role: "Vice Chair", affil: "Carnegie Mellon University Africa", initials: "JN", photo: "" },
  { name: "Grace Ingabire", role: "Secretary", affil: "University of Rwanda · ECE", initials: "GI", photo: "" },
  { name: "Eric Mugisha", role: "Treasurer", affil: "Rwanda Polytechnic", initials: "EM", photo: "" },
  { name: "Sandrine Mukamana", role: "Student Activities Chair", affil: "UR Student Branch", initials: "SM", photo: "" },
  { name: "David Habimana", role: "Industry Liaison", affil: "Kigali Special Economic Zone", initials: "DH", photo: "" },
];

// Volunteer sign-up — replace "#" with your Google Form URL when ready.
export const volunteerFormUrl = "#";

// Events — anchored to real IEEE-in-Rwanda activity + plausible chapter events
export const events = [
  {
    date: "2026-09-18",
    when: "18 Sep 2026",
    title: "Industrial AI & Mechatronics Workshop",
    place: "University of Rwanda, Kigali",
    kind: "Workshop",
    body: "Hands-on sessions on motion control, embedded vision and industrial AI, led by IES volunteers and local industry mentors.",
    status: "upcoming",
  },
  {
    date: "2026-07-22",
    when: "22 Jul 2026",
    title: "Power Electronics for Renewable Grids — Seminar",
    place: "CMU-Africa, Kigali",
    kind: "Seminar",
    body: "Converters, drives and grid integration for off-grid and mini-grid systems across the region.",
    status: "upcoming",
  },
  {
    date: "2026-05-10",
    when: "10 May 2026",
    title: "Chapter Kick-off & Member Meet",
    place: "Norrsken House Kigali",
    kind: "Community",
    body: "The official launch gathering of the IES Rwanda Chapter — talks, demos and the first call for student projects.",
    status: "past",
  },
  {
    date: "2022-08-22",
    when: "22–27 Aug 2022",
    title: "IEEE PES/IAS PowerAfrica Conference",
    place: "Kigali · UR & CMU-Africa",
    kind: "Conference",
    body: "The 9th PowerAfrica brought 250 delegates to Kigali — the foundation the chapter builds on.",
    status: "past",
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
    points: ["Student Branch Chapter activities", "Project grants up to $1,000", "Mentorship & competitions"],
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
