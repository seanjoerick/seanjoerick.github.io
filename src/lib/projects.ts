import MACCVBUILDER from "../assets/cv.webp";
import MEMOIR from "../assets/memoir.webp";
import MINDMATCH from "../assets/mind.webp";
import VIORA from "../assets/viora.webp";

export type Project = {
  id: number;
  num: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  link: string;
  image: string | null;
  demo: string | null;
};

export const projects: Project[] = [
  {
    id: 1,
    num: "01",
    tag: "Personal Project",
    title: "Viora",
    description:
      "A full-stack women's health app that tracks menstrual cycles, provides AI-powered insights using Gemini API, and visualizes cycle data with interactive charts — built with Next.js, FastAPI, and Supabase.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "Gemini API",
    ],
    link: "https://viora-sand-three.vercel.app/",
    image: VIORA,
    demo: null,
  },
  {
    id: 2,
    num: "02",
    tag: "Personal Project",
    title: "Mac-CV Builder",
    description:
      "A clean, modern multi-step resume builder where you can fill out your resume step-by-step and preview your CV in real-time.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "Zod",
      "OpenRouter AI",
      "Vercel Functions",
    ],
    link: "https://mac-cv-builder.vercel.app/",
    image: MACCVBUILDER,
    demo: null,
  },
  {
    id: 3,
    num: "03",
    tag: "Personal Project",
    title: "Memoir Booth",
    description:
      "A cute pastel-themed photobooth app where you can snap photos, add filters, decorate with stickers, and print adorable photo strips.",
    stack: ["React", "Vite", "Pure CSS", "html2canvas", "Cloudflare Pages"],
    link: "https://memoir-booth.pages.dev/",
    image: MEMOIR,
    demo: null,
  },
  {
    id: 4,
    num: "04",
    tag: "Personal Project",
    title: "MindMatch",
    description:
      "A game show-inspired quiz app featuring AI-generated trivia on any topic powered by Gemini API, and a couples compatibility quiz with shareable room codes — built with Next.js, Neon PostgreSQL, and deployed on Vercel.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Neon PostgreSQL",
      "Gemini API",
      "Vercel",
    ],
    link: "https://quizhub-labs.vercel.app/",
    image: MINDMATCH,
    demo: null,
  },
];
