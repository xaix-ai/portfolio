import {
  BookOpen,
  Code2,
  Coffee,
  Gamepad2,
  Music4,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import pomodoroImg from "@/assets/project-pomodoro.jpg";
import tasksImg from "@/assets/project-tasks.jpg";
import weatherImg from "@/assets/project-weather.jpg";

/*
 * ─────────────────────────────────────────────────────────────
 *  ALL portfolio content lives here — edit freely!
 *  Add a project / skill / experience / education entry and the
 *  UI picks it up automatically. Later this can be swapped for
 *  a Django API without touching the components.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Xynex Kim",
  role: "IT student · aspiring developer",
  email: "hello@xynexkim.dev",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

/* The little floating guide bubble — one message per section */
export const sectionMessages: Record<string, string> = {
  home: "Hi! Welcome to my little corner of the internet. Here's where you can explore my work, skills, and things I've been building.",
  about:
    "A little bit about me, what I enjoy, and how I ended up loving technology.",
  skills:
    "Still growing! These are the tools and technologies I've explored and worked with so far.",
  projects:
    "Here are some of the things I've built. Click around and try them out!",
  experience: "Some of the experiences that helped me learn and grow.",
  education: "A quick look at my academic journey so far.",
  contact: "Want to talk or work together? Here's where you can find me.",
};

/* ---------- About ---------- */

export const aboutStory = [
  "I'm Xynex — an IT student who accidentally fell in love with building things for the web. What started as tweaking a MySpace-style page for fun turned into late nights of “wait, what if I tried this…” and a growing pile of side projects.",
  "I'm still very much learning, and honestly that's the fun part. This portfolio is my little lab notebook — a place where I experiment with interfaces, break things, fix them, and slowly become the developer I want to be.",
];

export const aboutInterests: { icon: LucideIcon; label: string }[] = [
  { icon: Code2, label: "UI experiments" },
  { icon: Music4, label: "playlists while coding" },
  { icon: Gamepad2, label: "cozy games" },
  { icon: Coffee, label: "milk tea runs" },
  { icon: BookOpen, label: "tech docs at 2am" },
];

export const aboutFacts = [
  "I name my side projects like pets.",
  "Pink theme believer, soft-UI enjoyer.",
  "Currently learning: Django & backend magic.",
  "My debugger of choice: console.log ✦",
];

/* ---------- Skills ---------- */

export type SkillLevel = "learning" | "practicing" | "comfortable";

export interface SkillGroup {
  title: string;
  blurb: string;
  icon: LucideIcon;
  skills: { name: string; level: SkillLevel }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Where I spend most of my time — making things look and feel nice.",
    icon: Code2,
    skills: [
      { name: "HTML", level: "comfortable" },
      { name: "CSS", level: "comfortable" },
      { name: "JavaScript", level: "practicing" },
      { name: "React", level: "practicing" },
      { name: "Tailwind CSS", level: "practicing" },
    ],
  },
  {
    title: "Backend",
    blurb: "Newer territory — slowly making friends with servers and databases.",
    icon: Server,
    skills: [
      { name: "Python", level: "practicing" },
      { name: "Django", level: "learning" },
    ],
  },
  {
    title: "Tools & Design",
    blurb: "The everyday companions that keep the chaos organized.",
    icon: Wrench,
    skills: [
      { name: "Git", level: "practicing" },
      { name: "GitHub", level: "comfortable" },
      { name: "VS Code", level: "comfortable" },
      { name: "Figma", level: "practicing" },
    ],
  },
];

/* ---------- Projects ---------- */

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo: string;
  code: string;
}

export const projects: Project[] = [
  {
    title: "Pomodoro Pal",
    description:
      "A cozy focus timer that keeps me company during study sessions. Custom work/break intervals, a gentle nudge when time's up, and a task list that remembers what I was avoiding.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: pomodoroImg,
    demo: "#",
    code: "#",
  },
  {
    title: "Taskie",
    description:
      "A soft little task manager for keeping school and life in one place. Drag-worthy cards, progress tracking, and a very satisfying checkbox animation.",
    tech: ["React", "Tailwind CSS", "LocalStorage"],
    image: tasksImg,
    demo: "#",
    code: "#",
  },
  {
    title: "SkyCast",
    description:
      "A dreamy weather app that tells you whether to bring an umbrella in the prettiest way possible. My first adventure into fetching and wrangling real API data.",
    tech: ["JavaScript", "Weather API", "CSS"],
    image: weatherImg,
    demo: "#",
    code: "#",
  },
];

/* ---------- Experience ---------- */

export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  description: string;
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: "2025 — Present",
    title: "Web Development Intern (OJT)",
    org: "Company Name",
    description:
      "Helping build and maintain internal web tools while learning how real teams plan, ship, and fix software together.",
    tags: ["React", "Teamwork"],
  },
  {
    period: "2024",
    title: "Hackathon Participant",
    org: "School Tech Fest",
    description:
      "Built a working prototype in 24 hours with a small team — chaotic, caffeinated, and very educational.",
    tags: ["Prototyping", "Teamwork"],
  },
  {
    period: "2023 — Present",
    title: "Tech Committee Member",
    org: "Student Organization",
    description:
      "Looking after the org's website and digital materials for events — posters, sign-up forms, and the occasional last-minute fix.",
    tags: ["Web", "Design"],
  },
];

/* ---------- Education ---------- */

export interface EducationItem {
  period: string;
  degree: string;
  school: string;
  description: string;
  highlights: string[];
}

export const education: EducationItem[] = [
  {
    period: "2023 — 2027 (expected)",
    degree: "BS Information Technology",
    school: "Your University Name",
    description:
      "Working through programming, databases, networks, and web development coursework — and building side projects to put it all into practice.",
    highlights: ["Coursework: Web Dev, Databases, OOP", "Add achievements here"],
  },
  {
    period: "2021 — 2023",
    degree: "Senior High School — ICT Strand",
    school: "Your High School",
    description:
      "Where the curiosity for computers turned into a decision to actually pursue IT.",
    highlights: ["Graduated with honors", "First lines of code written here"],
  },
];
