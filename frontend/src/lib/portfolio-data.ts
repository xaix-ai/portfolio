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
  name: "xaixai",
  role: "IT student · aspiring whatever I could be",
  email: "xynexkimdll@gmail.com",
  github: "https://github.com/xaix-ai",
  linkedin: "https://www.linkedin.com/in/xynexkim",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

/* The little floating guide bubble — one message per section */
export const sectionMessages: Record<string, string> = {
  home: "Hi! Welcome to my little corner of the internet. Here's where you can explore my work, skills, and things I've been building.",
  about:
    "A little bit about me, what I enjoy.",
  skills:
    "Still growing! These are the tools and technologies I've explored and worked with so far.",
  projects:
    "Here are some of the things I've built. Click around and try them out!",
  experience: "Some of the experiences that helped me learn and grow.",
  education: "A quick look at my academic journey so far.",
  certificates:
    "Courses, trainings and workshops I've completed while learning the craft.",
  achievements:
    "Little wins I'm proud of, proof that the late nights were worth it.",
  contact: "Want to talk or work together? Here's where you can find me. Just hit me up ^^.",
};

/* ---------- About ---------- */

export const aboutStory = [
  "I'm an IT student who loves exploring new things and turning ideas that pop into my head into something useful. If I think of something that could make a task easier or make someone's life a little less complicated, I like figuring out how to build it.",
  "I'm still learning, and there's honestly a lot I want to discover. I'm always eager to broaden my knowledge about technology, experiment with new things, and see where they can take me. This portfolio is where I keep some of the things I've built, learned, and tried along the way.",
];

export const aboutInterests: { icon: LucideIcon; label: string }[] = [
  { icon: Code2, label: "UI experiments" },
  { icon: Music4, label: "playlists while coding" },
  { icon: Gamepad2, label: "cozy games" },
  { icon: Coffee, label: "coffee runs" },
  { icon: BookOpen, label: "tech docs at 2am" },
];

export const aboutFacts = [
  "I name my side projects to everything I find interesting.",
  "Always curious, always learning something new.",
  "Currently exploring: frontend, backend & databases",
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
    blurb: "Where I spend most of my time making everything look appealing and aesthetically pleasing.",
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
    blurb: "Where I explore the most.",
    icon: Server,
    skills: [
      { name: "Python", level: "practicing" },
      { name: "Django", level: "practicing" },
    ],
  },
  {
    title: "Tools & Design",
    blurb: "The everyday companions that keep the chaos well organized.",
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
  period: "2023 — Present",
  title: "Student Developer",
  org: "BS Information Technology",
  description:
    "Developing projects for school and personal practice while exploring web development, databases, and different ways to turn ideas into working applications.",
  tags: ["Web Development", "Programming", "Data Analytics"],
  },
  {
  period: "2023 — Present",
  title: "Personal Project Developer",
  org: "School Projects",
  description:
    "Creating small web projects to practice development, experiment with different ideas, and gradually build stronger skills in frontend and backend development.",
  tags: ["React", "Django", "UI Design"],
  },
  // {
  //   period: "2023 — Present",
  //   title: "Tech Committee Member",
  //   org: "Student Organization",
  //   description:
  //     "Looking after the org's website and digital materials for events — posters, sign-up forms, and the occasional last-minute fix.",
  //   tags: ["Web", "Design"],
  // },
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
    school: "Dalubhasaan ng Lungsod ng Lucena",
    description:
      "Working through programming, databases, networks, and web development coursework, and building side projects to put it all into practice.",
    highlights: ["Coursework: Web Dev, Databases, OOP"],
  },
  {
    period: "2021 — 2023",
    degree: "Senior High School | ICT Strand",
    school: "Quezon National High School",
    description:
      "Where the curiosity for computers turned into a decision to actually pursue IT.",
    highlights: ["11th grade, with honors"],
  },
];

/* ---------- Certificates ---------- */

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    date: "2026",
    credential: "#",
  },
  {
    title: "Cybersecurity",
    issuer: "Cisco Networking Academy Program",
    date: "2025",
    credential: "#",
  },
  {
    title: "Cisco Packet Tracer",
    issuer: "Cisco Networking Academy Program",
    date: "2025",
    credential: "#",
  },
  // {
  //   title: "UI/UX Design Fundamentals",
  //   issuer: "Figma Community Workshop",
  //   date: "2025",
  // },
];

/* ---------- Achievements ---------- */

export interface Achievement {
  title: string;
  detail: string;
  year: string;
}

export const achievements: Achievement[] = [
  {
    title: "Graduated with Honors",
    detail: "Senior High School, ICT strand.",
    year: "2023",
  },
  {
    title: "Started Building a Developer Portfolio",
    detail: "Created a personal portfolio to document projects, skills, and progress as an IT student.",
    year: "2025 — Present",
  },
  // {
  //   title: "Best Class Project — Web Development",
  //   detail: "Recognized for the design and polish of a course project.",
  //   year: "2025",
  // },
];
