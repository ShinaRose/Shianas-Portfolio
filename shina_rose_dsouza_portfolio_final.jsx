import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const profileImage = "https://media.licdn.com/dms/image/v2/D4D03AQHiiYinDm8YFg/profile-displayphoto-scale_400_400/B4DZwu2hZbIYAg-/0/1770312571104?e=1779321600&v=beta&t=Jh7OJg4RIIVSGBq_hIWUGqmRIgCKpm-7xgPA2iVreH4";
const linkedInUrl = "https://www.linkedin.com/in/shina-rose-dsouza-443a63287/";
const emailUrl = "https://mail.google.com/mail/?view=cm&to=shainarose1622@gmail.com&su=Portfolio%20Enquiry%20-%20Graduate%20Opportunity";
const resumeRequestUrl = "https://mail.google.com/mail/?view=cm&to=shainarose1622@gmail.com&su=Resume%20Request%20-%20Shina%20Rose%20Dsouza";

const actionLinks = {
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

const navLinks = [
  { label: "Work", href: actionLinks.work },
  { label: "Skills", href: actionLinks.skills },
  { label: "About", href: actionLinks.about },
  { label: "Experience", href: actionLinks.experience },
  { label: "Resume", href: actionLinks.resume },
  { label: "Contact", href: actionLinks.contact },
];

const targetRoles = [
 "Data Scientist",
  "Information Systems Manager",
  "IT Project Manager",
  "Database Architect / Administrator",
  "Security Specialist / Cybersecurity Analyst",
  "Supply Chain Analyst"
];

const employerSnapshot = [
  { label: "Status", value: "Current MSc student" },
  { label: "Focus", value: "UX, digital products & information systems" },
  { label: "Location", value: "Cork, Ireland" },
  { label: "Availability", value: "Open to graduate and entry-level roles" },
];

const skillGroups = [
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

const featuredWork = [
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

const educationHighlights = [
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

const courseFocus = [
  "Business Decision Support",
  "BI, Analytics & AI",
  "AI for Business Transformation",
  "Systems Analysis",
  "Application Design",
  "Database Analysis & Design",
  "IT Project Management",
  "Digital Governance & Compliance",
];

const valueProps = [
  {
    icon: "users",
    title: "User-first thinking",
    description: "I design around how people actually behave, not just how systems are structured.",
  },
  {
    icon: "zap",
    title: "Fast to contribute",
    description: "MSc-level skills in UX, systems analysis and front-end — ready to add value from day one.",
  },
  {
    icon: "target",
    title: "Business-aware",
    description: "I connect user needs to measurable business outcomes, not just aesthetics.",
  },
  {
    icon: "star",
    title: "Cross-disciplinary",
    description: "Rare mix of design, development and information systems thinking in one candidate.",
  },
];

const softSkills = [
  "Clear communicator",
  "Collaborative team member",
  "Detail-oriented",
  "Fast learner",
  "Structured thinker",
  "Self-motivated",
];
  mail: "M4 6h16v12H4z M4 7l8 6 8-6",
  mapPin: "M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  linkedin: "M4.98 3.5A2.5 2.5 0 1 1 5 8a2.5 2.5 0 0 1-.02-5z M3 9h4v12H3z M10 9h3.8v1.65h.06c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.13V21h-4v-5.54c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92V21H10z",
  arrowRight: "M5 12h14 M13 5l7 7-7 7",
  chart: "M4 19h16 M7 16V9 M12 16V5 M17 16v-3",
  systems: "M4 5h7v7H4z M13 5h7v7h-7z M4 14h7v7H4z M13 14h7v7h-7z",
  layout: "M4 5h16v14H4z M4 10h16 M10 10v9",
  briefcase: "M9 7V5h6v2 M4 7h16v13H4z M4 12h16",
  graduation: "M3 8l9-4 9 4-9 4-9-4z M7 10v5c2.5 2 7.5 2 10 0v-5",
  check: "M5 13l4 4L19 7",
  users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  target: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function scrollToSection(e, href) {
  if (href.startsWith("#")) {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id) || document.querySelector(`[id="${id}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: try scrolling by section tag order
      const sections = document.querySelectorAll("section[id], div[id]");
      for (const s of sections) {
        if (s.id === id) { s.scrollIntoView({ behavior: "smooth", block: "start" }); break; }
      }
    }
  }
}

function Icon({ name, className = "h-5 w-5" }) {
  const path = iconPaths[name];
  if (!path) return null;

  if (name === "linkedin") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

function ProfilePhoto() {
  const [imgFailed, setImgFailed] = React.useState(false);

  if (imgFailed) {
    return (
      <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-rose-100 text-3xl font-extrabold text-rose-900 shadow-xl">
        SD
      </div>
    );
  }

  return (
    <img
      src={profileImage}
      alt="Portrait of Shina Rose Dsouza"
      className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl"
      onError={() => setImgFailed(true)}
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
    />
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-slate-700">{description}</p> : null}
    </div>
  );
}

function LinkButton({ href, children, variant = "primary", icon = "arrowRight", external = false, ariaLabel }) {
  const variants = {
    primary: "bg-rose-700 text-white shadow-lg shadow-rose-200 hover:bg-rose-800",
    dark: "bg-slate-950 text-white shadow-lg shadow-slate-200 hover:bg-rose-800",
    light: "border border-rose-200 bg-white text-rose-800 hover:bg-rose-50",
  };

  const handleClick = (e) => {
    if (!external && href.startsWith("#")) {
      scrollToSection(e, href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-extrabold transition focus:outline-none focus:ring-4 focus:ring-rose-200 ${variants[variant]}`}
    >
      {children}
      <Icon name={icon} className="h-4 w-4" />
    </a>
  );
}

function validatePortfolioLinks() {
  return {
    emailUsesGmailCompose: actionLinks.email.startsWith("https://mail.google.com/mail/?view=cm"),
    linkedInUsesCorrectProfile: actionLinks.linkedIn === "https://www.linkedin.com/in/shina-rose-dsouza-443a63287/",
    hasThreeCaseStudies: featuredWork.length >= 3,
  };
}

export { validatePortfolioLinks };

export default function ShinaPortfolio() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#fff8fb] text-slate-900 selection:bg-rose-200 selection:text-rose-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-rose-800 focus:shadow-xl"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/90 shadow-sm backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
          <a href={actionLinks.home} onClick={(e) => scrollToSection(e, actionLinks.home)} className="text-base font-extrabold tracking-tight text-slate-950 focus:outline-none focus:ring-4 focus:ring-rose-200 sm:text-lg">
            Shina Rose Dsouza
          </a>

          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="rounded-lg transition hover:text-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-200">
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="border-t border-rose-50 bg-white/80 px-4 py-3 md:hidden">
          <div className="flex gap-2 overflow-x-auto pb-1 text-sm font-semibold" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="whitespace-nowrap rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-rose-800">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main id="main-content">
        <section id="home" className="relative scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_top_left,#ffe4ef,transparent_34%),linear-gradient(135deg,#fff8fb_0%,#ffffff_42%,#f3efff_100%)]">
          <div className="absolute right-[-7rem] top-8 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl" />
          <div className="absolute bottom-[-10rem] left-[-7rem] h-96 w-96 rounded-full bg-purple-200/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.14fr_0.86fr] md:items-center md:py-24 lg:py-28">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm ring-1 ring-emerald-100">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Available now · Graduate &amp; internship roles · Cork, Ireland
              </div>

              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
                UX-minded digital graduate connecting users, data and business systems.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                I am Shina Rose Dsouza, a current MSc Information Systems for Business Performance student at University College Cork. I am preparing for UX/UI, front-end, product and digital analyst roles where I can turn user needs and business goals into clear, useful digital experiences.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <LinkButton href={actionLinks.work} ariaLabel="View featured work and portfolio projects">
                  View Work
                </LinkButton>
                <LinkButton href="https://www.linkedin.com/in/shina-rose-dsouza-443a63287/" variant="dark" icon="linkedin" external ariaLabel="Open Shina Rose Dsouza LinkedIn profile in a new tab">
                  LinkedIn
                </LinkButton>
                <LinkButton href={actionLinks.email} variant="light" icon="mail" external ariaLabel="Open Gmail compose to email Shina Rose Dsouza in a new tab">
                  Contact Me
                </LinkButton>
                <LinkButton href={resumeRequestUrl} variant="light" icon="briefcase" external ariaLabel="Request Shina Rose Dsouza resume by email">
                  Request Resume
                </LinkButton>
              </div>

              <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {employerSnapshot.map((item) => (
                  <div key={item.label} className="border-l-4 border-rose-300 bg-white/70 py-3 pl-4 pr-3 backdrop-blur">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{item.label}</p>
                    <p className="mt-1 text-sm font-extrabold text-slate-950">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }}>
              <Card className="overflow-hidden rounded-[2rem] border-rose-100 bg-white shadow-2xl shadow-rose-100/80">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-slate-950 via-rose-900 to-purple-900 p-8 text-white">
                    <ProfilePhoto />
                    <h2 className="mt-6 text-2xl font-bold">Shina Rose Dsouza</h2>
                    <p className="mt-2 text-rose-50">Current MSc Student · UX/UI & Digital Product Focus</p>
                  </div>

                  <div className="space-y-4 bg-white p-8 text-sm font-medium text-slate-700">
                    <div className="flex items-center gap-3 border-l-4 border-rose-200 bg-rose-50/60 px-4 py-3 text-rose-900">
                      <Icon name="mapPin" /> Cork, Ireland
                    </div>
                    <div className="flex items-center gap-3 border-l-4 border-purple-200 bg-purple-50/60 px-4 py-3 text-purple-900">
                      <Icon name="graduation" /> MSc Information Systems for Business Performance, UCC
                    </div>
                    <div className="flex items-center gap-3 border-l-4 border-pink-200 bg-pink-50/60 px-4 py-3 text-pink-900">
                      <Icon name="briefcase" /> Seeking UX, front-end, product and digital roles
                    </div>
                    <LinkButton href="https://www.linkedin.com/in/shina-rose-dsouza-443a63287/" variant="dark" icon="linkedin" external ariaLabel="Open Shina Rose Dsouza LinkedIn profile in a new tab">
                      View LinkedIn Profile
                    </LinkButton>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="work" className="scroll-mt-28 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <SectionHeading
              eyebrow="Featured Work"
              title="Focused case studies for UX, product and digital roles."
              description="These projects are framed around the things employers look for: the problem, my role, my process, my contribution and the outcome. They connect my Information Systems for Business Performance course with practical design and digital problem-solving."
            />

            <div className="space-y-8">
              {featuredWork.map((project, index) => (
                <Card key={project.title} className="rounded-[2rem] border-rose-100 bg-white shadow-lg shadow-rose-100/60">
                  <CardContent className="grid gap-8 p-7 lg:grid-cols-[0.88fr_1.12fr] lg:p-9">
                    <div>
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-purple-100 text-rose-800">
                        <Icon name={project.icon} className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-rose-700">{project.label}</p>
                      <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{project.title}</h3>
                      <p className="mt-3 text-base font-bold text-slate-700">My role: {project.role}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-500">Case study {index + 1}</p>
                      <div className="mt-5 flex flex-wrap gap-x-2 gap-y-2 text-xs font-bold uppercase tracking-wide text-purple-800">
                        {project.tools.map((tool, toolIndex) => (
                          <span key={tool}>{tool}{toolIndex < project.tools.length - 1 ? " ·" : ""}</span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-500">Problem</h4>
                        <p className="mt-2 leading-7 text-slate-700">{project.problem}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-500">Process</h4>
                        <ul className="mt-3 space-y-2">
                          {project.approach.map((step) => (
                            <li key={step} className="flex gap-3 text-sm leading-6 text-slate-700">
                              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-800">
                                <Icon name="check" className="h-3.5 w-3.5" />
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-500">Outcome</h4>
                          <p className="mt-2 text-sm leading-6 text-slate-700">{project.outcome}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-500">My contribution</h4>
                          <p className="mt-2 text-sm leading-6 text-slate-700">{project.contribution}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-rose-50 to-purple-50 border-y border-rose-100">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-700">Why hire me</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">What I bring to your team.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {valueProps.map((vp) => (
                <div key={vp.title} className="rounded-2xl bg-white border border-rose-100 p-6 shadow-sm shadow-rose-100/60">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-purple-100 text-rose-800">
                    <Icon name={vp.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-950">{vp.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{vp.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {softSkills.map((s) => (
                <span key={s} className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-white px-4 py-1.5 text-sm font-semibold text-rose-800">
                  <Icon name="check" className="h-3.5 w-3.5 text-emerald-500" />{s}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16 md:py-20">
          <SectionHeading
            eyebrow="Skills"
            title="Skills grouped for quick employer review."
            description="My strongest fit is for roles where user experience, front-end thinking, structured analysis and business understanding overlap."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <Card key={group.title} className="rounded-[1.75rem] border-rose-100 bg-white shadow-sm shadow-rose-100/70">
                <CardContent className="p-6">
                  <h3 className="text-lg font-extrabold text-slate-950">{group.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{group.description}</p>
                  <div className="mt-5 space-y-2">
                    {group.skills.map((skill) => (
                      <p key={skill} className="border-b border-rose-100 pb-2 text-sm font-semibold text-slate-700 last:border-b-0">
                        {skill}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-28 border-y border-rose-100 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.86fr_1.14fr] md:items-start md:py-20">
            <SectionHeading
              eyebrow="About"
              title="I bring a business-systems perspective to digital design."
              description="I am currently studying Information Systems for Business Performance at UCC, where I am building skills in business decision support, systems analysis, databases, analytics, digital governance and IT project management. I am especially interested in roles where I can improve digital journeys, organise information clearly and help teams design better user-facing services."
            />

            <Card className="rounded-[2rem] border-rose-100 bg-[#fff8fb] shadow-sm shadow-rose-100/70">
              <CardContent className="p-7">
                <h3 className="text-xl font-extrabold text-slate-950">Role fit</h3>
                <p className="mt-3 leading-7 text-slate-700">
                  I am best suited to teams that value curiosity, clear communication, structured thinking and a willingness to learn across design, technology and business.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {targetRoles.map((role) => (
                    <div key={role} className="border-l-4 border-rose-300 bg-white px-4 py-3 text-sm font-extrabold text-slate-800">
                      {role}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 bg-gradient-to-br from-slate-950 via-rose-950 to-purple-950 text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-200">Experience / Education</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Current MSc study supported by practical operational experience.
              </h2>
              <p className="mt-5 leading-8 text-rose-50/85">
                My background combines information systems study with customer-facing retail operations exposure, helping me understand both digital systems and the people who use them.
              </p>
            </div>

            <div className="space-y-5">
              {educationHighlights.map((item) => (
                <Card key={item.title} className="rounded-3xl border-white/10 bg-white/10 text-white shadow-xl backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-rose-100">{item.meta}</p>
                    <p className="mt-4 text-sm leading-6 text-rose-50/80">{item.description}</p>
                    <div className="mt-5 flex flex-wrap gap-x-2 gap-y-2 text-xs font-bold uppercase tracking-wide text-rose-100">
                      {item.tags.map((tag, index) => (
                        <span key={tag}>{tag}{index < item.tags.length - 1 ? " ·" : ""}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="scroll-mt-28 bg-[#fff8fb]">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <Card className="rounded-[2rem] border-rose-100 bg-white shadow-xl shadow-rose-100/70">
              <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-700">Resume</p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Get my resume in 30 seconds.</h2>
                  <p className="mt-4 max-w-2xl leading-8 text-slate-700">
                    Click the button to open a pre-addressed email — just hit send and I'll reply with my full resume, references and any additional work samples you need.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-2 gap-y-2 text-sm font-semibold text-slate-700">
                    {courseFocus.map((item, index) => (
                      <span key={item}>{item}{index < courseFocus.length - 1 ? " ·" : ""}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <LinkButton href={resumeRequestUrl} variant="primary" icon="mail" external ariaLabel="Open Gmail compose to request Shina Rose Dsouza resume in a new tab">
                    Request Resume
                  </LinkButton>
                  <LinkButton href="https://www.linkedin.com/in/shina-rose-dsouza-443a63287/" variant="dark" icon="linkedin" external ariaLabel="View LinkedIn profile">
                    View LinkedIn
                  </LinkButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 border-t border-rose-100 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <Card className="overflow-hidden rounded-[2rem] border-rose-100 bg-gradient-to-br from-slate-950 via-rose-900 to-purple-900 text-white shadow-2xl shadow-rose-200">
              <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-100">Contact</p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Let’s connect about graduate digital opportunities.</h2>
                  <p className="mt-4 max-w-2xl text-rose-50">
                    I am currently open to graduate, internship and entry-level opportunities across UX/UI design, front-end development, product design, digital analysis and information systems. Please get in touch if my background could support your team.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <a
                    href={actionLinks.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Gmail compose to email Shina Rose Dsouza in a new tab"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-6 text-sm font-extrabold text-rose-800 transition hover:bg-rose-50 hover:text-rose-950 focus:outline-none focus:ring-4 focus:ring-white/40"
                  >
                    <Icon name="mail" className="mr-2 inline h-4 w-4" /> Email Me
                  </a>

                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Shina Rose Dsouza LinkedIn profile in a new tab"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-6 py-6 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-rose-900 focus:outline-none focus:ring-4 focus:ring-white/40"
                  >
                    <Icon name="linkedin" className="mr-2 inline h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-rose-100 bg-[#fff8fb] px-6 py-10">
        <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm font-extrabold text-slate-700">Shina Rose Dsouza</p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-slate-500">
            <a href={emailUrl} target="_blank" rel="noopener noreferrer" className="hover:text-rose-700 transition">shainarose1622@gmail.com</a>
            <span>·</span>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-rose-700 transition">LinkedIn</a>
            <span>·</span>
            <span>Cork, Ireland</span>
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Shina Rose Dsouza</p>
        </div>
      </footer>
    </div>
  );
}
