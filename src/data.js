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
      { id: "V42", aspect: "portrait", video: "N v13.mp4" },
      { id: "V43", aspect: "portrait", video: "N v14.mp4" },
      { id: "V44", aspect: "portrait", video: "N v15.mp4" },
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
      " Edit angaging social media reels & short-form videos for brands & clients.",
      "Edit brand videos with a focus on clean cuts, color correction, pacing, & storytelling.",
      "Shoot social media content for clients, from planning the shots to capturing the footage.",
      " Work with coordinators to understand their ideas & turn them into engaging visual content.",
      "Manage the editing process from raw footage to the final video, ready for social media.",
    ],
  },
  {
    company: "NEST Digital",
    range: "2025 - 2026",
    role: "Video Editor",
    bullets: [
      "Editing reels, promotional videos, and social media content",
      "Working with Premiere Pro, After effect, Davinci Resolve for video editing.",
      "Color correction and basic sound design for better video quality",
      "Meeting project deadline.",
      "Collaborating with Digital Marketers, Videographer for better understanding of project.",
    ],
  },
  {
    company: "Ecstatic Minds",
    range: "2023 - 2025",
    role: "Video Editor & Video Grapher",
    bullets: [
      " Edited reels, promotional videos, and social media content.",
      " Worked with Adobe Premiere Pro and After Effects for video editing and motion graphics.",
      "Performed color correction and basic sound design to improve video quality.",
      "Delivered projects within deadlines while maintaining high-quality standards.",
      "Collaborated with Digital marketers and Videographer to meet project requirements.",
    ],
  },
  {
    company: "Asiana Trek",
    range: "2023",
    role: "Freelance Graphic Designer",
    bullets: [
      "Making detailed travel itinerary.",
      "Worked with Adobe illustrator & Photoshop for designing.",
      "Delivered projects on deadline without compromizing quality.",
    ],
  },
];

export const education = [
  {
    status: "Running",
    degree: "Masters of Business Administration (MBA)",
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
  { id: "davinci", name: "DaVinci Resolve", color: "#FF6B35", abbr: "DaVinci", progress: 0.85 },
  { id: "after-effects", name: "After Effects", color: "#9999FF", abbr: "Ae", progress: 0.7 },
  { id: "premiere", name: "Premiere Pro", color: "#9999FF", abbr: "Pr", progress: 0.78 },
  { id: "capcut", name: "CapCut", color: "#00E5FF", abbr: "CapCut", progress: 0.9 },
  { id: "illustrator", name: "Illustrator", color: "#FF9A00", abbr: "Ai", progress: 0.68 },
  { id: "photoshop", name: "Photoshop", color: "#31A8FF", abbr: "Ps", progress: 0.68 },
  { id: "lightroom", name: "Lightroom", color: "#31A8FF", abbr: "Lr", progress: 0.75 },
  { id: "maya", name: "Autodesk Maya", color: "#37A5CC", abbr: "M", progress: 0.4 },
];