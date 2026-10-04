const cvModules = import.meta.glob("../CV/*.pdf", { eager: true });
const cvUrl = Object.values(cvModules)[0]?.default;

export const contact = {
  phone: "+977 -9868134129",
  phoneHref: "tel:+977-9868134129",
  location: "Lalitpur, Nepal",
  email: "hshakya744@gmail.com",
  emailHref: "mailto:hshakya744@gmail.com",
  linkedin: "linkedin.com/in/hasil-shakya",
  linkedinHref: "https://www.linkedin.com/in/shakyahasil/",
  cv: cvUrl,
};

export const worksGroups = [
  {
    client: "Gnx Studio",
    range: "2026 - Present",
    role: "Video Editor",
    clips: [
      { id: "V1", aspect: "landscape", video: "G v1.mp4" },
      { id: "V2", aspect: "portrait", video: "G v2.mp4" },
      { id: "V3", aspect: "portrait", video: "G v3.mp4" },
      { id: "V4", aspect: "portrait", video: "G v4.mp4" },
      { id: "V5", aspect: "portrait", video: "G v5.mp4" },
      { id: "V6", aspect: "portrait", video: "G v6.mp4" },
      { id: "V7", aspect: "portrait", video: "G v7.mp4" },
      { id: "V8", aspect: "landscape", video: "G v3 2.mp4" },
      { id: "V23", aspect: "portrait", video: "G v8.mp4" },
      { id: "V24", aspect: "portrait", video: "G v9.mp4" },
      { id: "V25", aspect: "portrait", video: "G v10.mp4" },
      { id: "V26", aspect: "portrait", video: "G v11.mp4" },
      // { id: "V27", aspect: "portrait", title: "Social Reel 17", category: "Short Form", video: "G v12.mp4" },
      { id: "V28", aspect: "portrait", video: "G v13.mp4" },
      { id: "V29", aspect: "portrait", video: "G v14.mp4" },
      { id: "V30", aspect: "portrait", video: "G v15.mp4" },
      { id: "V31", aspect: "portrait", video: "G v16.mp4" },
      { id: "V32", aspect: "portrait", video: "G v17.mp4" },
      { id: "V33", aspect: "portrait", video: "G v18.mp4" },
      { id: "V34", aspect: "portrait", video: "G v19.mp4" },
      { id: "V41", aspect: "portrait", video: "G v20.mp4" },

    ],
  },
  {
    client: "NEST Digital",
    range: "2025 - 2026",
    role: "Video Editor",
    clips: [
      { id: "V9", aspect: "portrait", video: "N v1.mp4" },
      { id: "V10", aspect: "portrait", video: "N v2.mp4" },
      { id: "V11", aspect: "portrait", video: "N v3.mp4" },
      { id: "V12", aspect: "portrait", video: "N v4.mp4" },
      { id: "V13", aspect: "portrait", video: "N v5.mp4" },
      { id: "V14", aspect: "portrait", video: "N v6.mp4" },
      { id: "V15", aspect: "portrait", video: "N v7.mp4" },
      { id: "V16", aspect: "portrait", video: "N v8.mp4" },
      { id: "V17", aspect: "portrait", video: "N v9.mp4" },
      { id: "V18", aspect: "portrait", video: "N v10.mp4" },
      { id: "V19", aspect: "portrait", video: "N v11.mp4" },
      { id: "V20", aspect: "portrait", video: "N v12.mp4" },
    ],
  },
  {
    client: "Ecstatic Minds",
    range: "2023 - 2025",
    role: "Video Editor & Video Grapher",
    clips: [
      { id: "V35", aspect: "portrait", video: "E v2.mp4" },
      { id: "V36", aspect: "portrait", video: "E v3.mp4" },
      { id: "V37", aspect: "portrait", video: "E v4.mp4" },
      { id: "V38", aspect: "portrait", video: "E v5.mp4" },
      { id: "V39", aspect: "portrait", video: "E v6.mp4" },
      { id: "V40", aspect: "portrait", video: "E v7.mp4" },
    ],
  },
];

export const experience = [
  {
    company: "Gnx Studio",
    range: "2026 - Present",
    role: "Video Editor & Video Grapher ",
    bullets: [
      "Take charge of post-production for client content, from assembly to final grade.",
      "Build mood-based color palettes so every project keeps a clean, consistent look.",
      "Shoot social media content for clients, from planning the shots to capturing the footage.",
      "Cut short-form Reels and long-form projects, shaping pacing and story flow.",
      "Collaborate closely with directors and motion designers on brand-led edits.",
    ],
  },
  {
    company: "NEST Digital",
    range: "2025 - 2026",
    role: "Video Editor",
    bullets: [
      "Edited digital marketing content for brand campaigns and social channels.",
      "Color graded raw footage and synchronized audio for seamless delivery.",
      "Managed delivery of final exports across multiple aspect ratios and formats.",
    ],
  },
  {
    company: "Ecstatic Minds",
    range: "2023 - 2025",
    role: "Video Editor & Video Grapher",
    bullets: [
      "Handled end-to-end editing, motion graphics, and sound design for client projects.",
      "Shot and edited event, music, and promotional videos on location.",
      "Introduced simple color-workflow improvements that cut turnaround times.",
    ],
  },
  {
    company: "Asiana Trek",
    range: "2023",
    role: "Freelance Graphic Designer",
    bullets: [
      "Designed print and digital collateral including brochures, flyers, and social assets.",
      "Built clean, adventure-branded layouts that matched the travel experience.",
    ],
  },
];

export const education = [
  {
    status: "Running",
    degree: "Masters in Business Administration (MBA)",
    institution: "Mega National College",
  },
  {
    status: "2024 Pass out",
    degree: " Bachelor of Business Studies (BBS)",
    institution: "Mega National College",
  },
  {
    status: "Diploma",
    degree: "Diploma in AVG",
    institution: "MAYA Animation Academy",
    subTopics: [
      "Art & Storyboarding",
      "Computer Graphics Designing",
      "Visual Effects (VFX) & Motion Graphics",
      "3D with Autodesk Maya",
    ],
  },
];

export const softwares = [
  { id: "davinci", name: "DaVinci Resolve", color: "#FF6B35", abbr: "DaVinci" },
  { id: "after-effects", name: "After Effects", color: "#9999FF", abbr: "Ae" },
  { id: "premiere", name: "Premiere Pro", color: "#9999FF", abbr: "Pr" },
  { id: "capcut", name: "CapCut", color: "#00E5FF", abbr: "CapCut" },
  { id: "illustrator", name: "Illustrator", color: "#FF9A00", abbr: "Ai" },
  { id: "photoshop", name: "Photoshop", color: "#31A8FF", abbr: "Ps" },
  { id: "lightroom", name: "Lightroom", color: "#31A8FF", abbr: "Lr" },
  { id: "maya", name: "Autodesk Maya", color: "#37A5CC", abbr: "M" },
];