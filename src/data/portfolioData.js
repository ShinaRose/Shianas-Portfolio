export const profileImage = "https://media.licdn.com/dms/image/v2/D4D03AQHiiYinDm8YFg/profile-displayphoto-scale_400_400/B4DZwu2hZbIYAg-/0/1770312571104?e=1779321600&v=beta&t=Jh7OJg4RIIVSGBq_hIWUGqmRIgCKpm-7xgPA2iVreH4";

export const linkedInUrl = "https://www.linkedin.com/in/shina-rose-dsouza-443a63287/";
export const emailUrl = "https://mail.google.com/mail/?view=cm&to=shainarose1622@gmail.com&su=Portfolio%20Enquiry%20-%20Graduate%20Opportunity";
export const resumeRequestUrl = "https://mail.google.com/mail/?view=cm&to=shainarose1622@gmail.com&su=Resume%20Request%20-%20Shina%20Rose%20Dsouza";

export const actionLinks = {
  home: "#home",
  work: "#work",
  skills: "#skills",
  about: "#about",
  experience: "#experience",
  resume: "#resume",
  contact: "#contact",
  linkedIn: linkedInUrl,
  resumeFile: resumeRequestUrl,
  email: emailUrl,
};

export const navLinks = [
  { label: "Work", href: actionLinks.work },
  { label: "Skills", href: actionLinks.skills },
  { label: "About", href: actionLinks.about },
  { label: "Experience", href: actionLinks.experience },
  { label: "Resume", href: actionLinks.resume },
  { label: "Contact", href: actionLinks.contact },
];

export const targetRoles = [
  "UX/UI Design Intern",
  "Junior Product Designer",
  "Front-End Developer Intern",
  "Graduate Digital Analyst",
  "Business Systems Analyst",
  "UX Research Assistant",
];

export const employerSnapshot = [
  { label: "Status", value: "Current MSc student" },
  { label: "Focus", value: "UX, digital products & information systems" },
  { label: "Location", value: "Cork, Ireland" },
  { label: "Availability", value: "Open to graduate and entry-level roles" },
];

export const skillGroups = [
  {
    title: "UX/UI Design",
    description: "Designing clear journeys, layouts and interfaces that help users complete tasks with less friction.",
    skills: ["User-centred design", "Wireframing", "Information architecture", "Journey mapping", "Usability thinking"],
  },
  {
    title: "Front-End Development",
    description: "Building responsive interfaces and understanding how design decisions translate into real web experiences.",
    skills: ["React", "HTML", "CSS", "Responsive design", "Component-based UI"],
  },
  {
    title: "Business & Systems",
    description: "Connecting user needs, business goals and information systems through structured analysis.",
    skills: ["Systems analysis", "Business decision support", "Process improvement", "Requirements thinking", "Documentation"],
  },
  {
    title: "Tools & Methods",
    description: "Using practical tools to analyse, design, communicate and present work clearly.",
    skills: ["Figma", "Excel", "Python", "Dashboards", "Research synthesis"],
  },
];

export const featuredWork = [
  {
    title: "Student Services UX Redesign Concept",
    label: "UX/UI case study",
    role: "UX/UI Designer",
    tools: ["Figma", "User flows", "Wireframes", "Responsive UI"],
    problem: "Students need quick access to important support, course and service information, but digital journeys can become difficult to scan when content is not clearly prioritised.",
    approach: [
      "Reviewed the user journey and identified where students may slow down or feel unsure.",
      "Grouped content by user intent to make navigation easier to understand.",
      "Designed wireframes and a cleaner visual structure for faster decision-making.",
    ],
    outcome: "A clearer student-facing concept that demonstrates hierarchy, accessibility awareness, layout consistency and user-centred design thinking.",
    contribution: "Owned the structure, flow, interface direction and design rationale.",
    icon: "layout",
  },
  {
    title: "Business Decision Support Dashboard",
    label: "Data + interface design",
    role: "Data & UI Designer",
    tools: ["Excel", "Dashboard design", "KPIs", "Business decision support"],
    problem: "Business users need data presented in a way that supports quick understanding rather than overwhelming them with raw information.",
    approach: [
      "Selected the most useful business metrics for a dashboard view.",
      "Structured information into sections so insights were easier to compare.",
      "Focused on visual clarity, readable labels and simple performance summaries.",
    ],
    outcome: "A dashboard-style project showing how information design can turn business data into useful insight for non-technical users.",
    contribution: "Prepared the data structure, dashboard layout, KPI presentation and insight summary.",
    icon: "chart",
  },
  {
    title: "Information Systems Process Improvement Case Study",
    label: "Systems analysis case study",
    role: "Business Systems Analyst",
    tools: ["Systems analysis", "Process mapping", "Requirements", "Documentation"],
    problem: "A business process can become inefficient when user needs, operational steps and system requirements are not clearly connected.",
    approach: [
      "Mapped the current-state process and identified pain points.",
      "Translated business needs into clearer system and workflow requirements.",
      "Proposed a future-state process focused on usability, clarity and operational improvement.",
    ],
    outcome: "A structured case study demonstrating how business analysis and systems thinking can support better digital service delivery.",
    contribution: "Analysed the process, identified improvement opportunities and documented practical recommendations.",
    icon: "systems",
  },
];

export const educationHighlights = [
  {
    title: "MSc Information Systems for Business Performance",
    meta: "University College Cork · Current student",
    description: "Current MSc study focused on business performance, information systems, analytics, databases, digital governance, project management and technology-enabled improvement.",
    tags: ["Business Decision Support", "BI, Analytics & AI", "Systems Analysis", "Database Design", "IT Project Management"],
  },
  {
    title: "Retail Operations Experience",
    meta: "SuperValu · Customer-facing and operations exposure",
    description: "Practical exposure to customer service, teamwork, stock awareness and day-to-day retail processes. This helps me understand real users, operational pressure and service experience.",
    tags: ["Customer service", "Teamwork", "Operations", "Process awareness"],
  },
];

export const courseFocus = [
  "Business Decision Support",
  "BI, Analytics & AI",
  "AI for Business Transformation",
  "Systems Analysis",
  "Application Design",
  "Database Analysis & Design",
  "IT Project Management",
  "Digital Governance & Compliance",
];

export const valueProps = [
  { icon: "users", title: "User-first thinking", description: "I design around how people actually behave, not just how systems are structured." },
  { icon: "zap", title: "Fast to contribute", description: "MSc-level skills in UX, systems analysis and front-end — ready to add value from day one." },
  { icon: "target", title: "Business-aware", description: "I connect user needs to measurable business outcomes, not just aesthetics." },
  { icon: "star", title: "Cross-disciplinary", description: "Rare mix of design, development and information systems thinking in one candidate." },
];

export const softSkills = [
  "Clear communicator",
  "Collaborative team member",
  "Detail-oriented",
  "Fast learner",
  "Structured thinker",
  "Self-motivated",
];
